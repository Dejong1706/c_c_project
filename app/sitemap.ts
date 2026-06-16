import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buildcalczone.com";
  const routes = [
    "",
    "/concrete-calculator",
    "/concrete-bags",
    "/tile-calculator",
    "/brick-calculator",
    "/paint-calculator",
    "/rebar-calculator",
    "/excavation-calculator",
    "/unit-converter",
    "/guides",
    "/guides/how-to-calculate-concrete-volume",
    "/guides/cubic-yards-to-cubic-meters",
    "/guides/tile-grout-gap-guide",
    "/guides/concrete-strength-grades",
    "/guides/how-many-tiles-do-i-need",
    "/guides/how-to-calculate-paint-coverage",
    "/guides/how-to-mix-concrete-by-hand",
    "/guides/what-size-rebar-do-i-need",
    "/guides/how-many-bricks-per-square-metre",
    "/guides/brick-mortar-mix-ratio",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
}
