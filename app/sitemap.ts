import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buildcalczone.com";

  const pages: { route: string; date: string; priority: number }[] = [
    { route: "", date: "2026-06-02", priority: 1 },
    { route: "/concrete-calculator", date: "2026-06-02", priority: 0.9 },
    { route: "/concrete-bags", date: "2026-06-02", priority: 0.9 },
    { route: "/tile-calculator", date: "2026-06-02", priority: 0.9 },
    { route: "/brick-calculator", date: "2026-06-02", priority: 0.9 },
    { route: "/paint-calculator", date: "2026-06-02", priority: 0.9 },
    { route: "/rebar-calculator", date: "2026-06-02", priority: 0.9 },
    { route: "/excavation-calculator", date: "2026-06-15", priority: 0.9 },
    { route: "/mortar-calculator", date: "2026-06-21", priority: 0.9 },
    { route: "/flooring-calculator", date: "2026-06-25", priority: 0.9 },
    { route: "/fence-calculator", date: "2026-06-25", priority: 0.9 },
    { route: "/mulch-calculator", date: "2026-06-29", priority: 0.9 },
    { route: "/unit-converter", date: "2026-06-02", priority: 0.8 },
    { route: "/guides", date: "2026-06-29", priority: 0.8 },
    { route: "/guides/how-to-calculate-concrete-volume", date: "2026-06-12", priority: 0.7 },
    { route: "/guides/cubic-yards-to-cubic-meters", date: "2026-06-12", priority: 0.7 },
    { route: "/guides/tile-grout-gap-guide", date: "2026-06-12", priority: 0.7 },
    { route: "/guides/concrete-strength-grades", date: "2026-06-12", priority: 0.7 },
    { route: "/guides/how-many-tiles-do-i-need", date: "2026-06-12", priority: 0.7 },
    { route: "/guides/how-to-mix-concrete-by-hand", date: "2026-06-12", priority: 0.7 },
    { route: "/guides/what-size-rebar-do-i-need", date: "2026-06-12", priority: 0.7 },
    { route: "/guides/how-to-calculate-paint-coverage", date: "2026-06-15", priority: 0.7 },
    { route: "/guides/how-to-calculate-wall-area-for-painting", date: "2026-06-21", priority: 0.7 },
    { route: "/guides/how-many-bricks-per-square-metre", date: "2026-06-16", priority: 0.7 },
    { route: "/guides/brick-mortar-mix-ratio", date: "2026-06-16", priority: 0.7 },
    { route: "/guides/standard-brick-sizes-by-country", date: "2026-06-16", priority: 0.7 },
    { route: "/guides/how-to-calculate-bricks-for-a-wall", date: "2026-06-18", priority: 0.7 },
    { route: "/guides/single-vs-double-leaf-brick-wall", date: "2026-06-18", priority: 0.7 },
    { route: "/guides/how-to-calculate-fence-post-spacing", date: "2026-06-25", priority: 0.7 },
    { route: "/guides/concrete-curing-time-guide", date: "2026-06-25", priority: 0.7 },
    { route: "/guides/how-to-lay-tile-step-by-step", date: "2026-06-25", priority: 0.7 },
    { route: "/guides/how-much-mulch-do-i-need", date: "2026-06-29", priority: 0.7 },
    { route: "/guides/how-to-calculate-mulch", date: "2026-06-29", priority: 0.7 },
    { route: "/privacy-policy", date: "2026-07-02", priority: 0.3 },
  ];

  return pages.map(({ route, date, priority }) => ({
    url: `${base}${route}`,
    lastModified: new Date(date),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
