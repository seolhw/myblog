export type SeriesConfig = {
	slug: string;
	title: string;
	description: string;
	theme: string;
	status: string;
};

export const SERIES_LIST: SeriesConfig[] = [
	{
		slug: 'ai-agent-engineering-20',
		title: 'AI Agent 工程化 20 讲',
		description:
			'聚焦 AI Agent 从概念到落地的工程化实践，覆盖架构设计、上下文工程、工具调用、工作流编排、评测、可观测性与上线交付。',
		theme: 'AI Agent',
		status: '规划中',
	},
];

export function getSeriesBySlug({ slug }: { slug?: string }) {
	return SERIES_LIST.find((series) => series.slug === slug);
}
