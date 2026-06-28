import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shtab-ai.ru";
  return [
    {
      url: `${base}/ru`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "en-US": `${base}/en`,
        },
      },
    },
    {
      url: `${base}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "ru-RU": `${base}/ru`,
        },
      },
    },
  ];
}
