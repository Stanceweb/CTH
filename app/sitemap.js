const BASE = "https://continentaltrustonline.online";

export default function sitemap() {
  const routes = [
    "/",
    "/pricing/",
    "/migrations/",
    "/security/",
    "/backups/",
    "/support/",
    "/status/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/terms/",
    "/refunds/",
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
