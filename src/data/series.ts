export type SeriesConfig = {
  slug: string;
  title: string;
  description: string;
  theme: string;
  status: string;
};

export const SERIES_LIST: SeriesConfig[] = [
  {
    slug: "ai-agent-engineering-20",
    title: "AI Agent 工程化 20 讲",
    description:
      "从一个程序员视角，系统拆解 AI Agent 的概念、架构、工具循环、上下文工程、沙箱、评估、Coding Agent 和产品化实践。",
    theme: "AI Agent",
    status: "规划中",
  },
];

export function getSeriesBySlug({ slug }: { slug?: string }) {
  return SERIES_LIST.find((series) => series.slug === slug);
}
