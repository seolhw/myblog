import type { CollectionEntry } from 'astro:content';
import { SERIES_LIST, getSeriesBySlug } from '../data/series';

type BlogPost = CollectionEntry<'blog'>;

export function sortPosts({ posts }: { posts: BlogPost[] }) {
	return [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function sortSeriesPosts({ posts }: { posts: BlogPost[] }) {
	return [...posts].sort((a, b) => {
		const leftOrder = a.data.seriesOrder ?? Number.MAX_SAFE_INTEGER;
		const rightOrder = b.data.seriesOrder ?? Number.MAX_SAFE_INTEGER;

		if (leftOrder !== rightOrder) {
			return leftOrder - rightOrder;
		}

		return a.data.pubDate.valueOf() - b.data.pubDate.valueOf();
	});
}

export function getSeriesPosts({
	posts,
	slug,
}: {
	posts: BlogPost[];
	slug: string;
}) {
	return sortSeriesPosts({
		posts: posts.filter((post) => post.data.series === slug),
	});
}

export function getSeriesSummaries({ posts }: { posts: BlogPost[] }) {
	return SERIES_LIST.map((series) => {
		const seriesPosts = getSeriesPosts({
			posts,
			slug: series.slug,
		});

		return {
			...series,
			postCount: seriesPosts.length,
			latestPost: seriesPosts.at(-1),
		};
	});
}

export function getSeriesLabel({
	series,
	seriesOrder,
}: {
	series?: string;
	seriesOrder?: number;
}) {
	const seriesConfig = getSeriesBySlug({ slug: series });

	if (!seriesConfig) {
		return;
	}

	if (!seriesOrder) {
		return seriesConfig.title;
	}

	return `${seriesConfig.title} · 第 ${seriesOrder} 讲`;
}
