// config/seo.ts
import { DefaultSeoProps } from "next-seo";

export const seoConfig = {
  title: 'PT Sakti Pangan Perkasa',
  description: 'PT Sakti Pangan Perkasa adalah perusahaan yang berdedikasi ...',
  url: 'https://www.saktipangan.co.id',
  ogImage: 'https://www.saktipangan.co.id/favicon.ico',
  author: 'Sakti Food',
  keywords: [
    "pt sakti pangan perkasa",
    "sakti pangan perkasa",
    "saktipangan",
    "saktifood",
    "tepung roti",
    "tepung roti",
    "tepung roti",
    "tepung panir",
    "tepung panir",
    "tepung panir",
    "breadcrumb",
    "breadcrumb",
    "breadcrumb",
    "industri pangan Indonesia",
  ],
  social: {
    instagram: '@sakt1_id',
    tiktok: '@saktitepungroti',
    linkedin: 'PT Sakti Pangan Perkasa',
  },
};

// Ini khusus untuk next-seo
export const defaultSEO: DefaultSeoProps = {
  title: seoConfig.title,
  description: seoConfig.description,
  canonical: seoConfig.url,
  openGraph: {
    url: seoConfig.url,
    title: seoConfig.title,
    description: seoConfig.description,
    images: [
      {
        url: seoConfig.ogImage,
        width: 800,
        height: 600,
        alt: seoConfig.title,
      },
    ],
    site_name: seoConfig.title,
  },
  twitter: {
    handle: seoConfig.social.instagram,
    site: seoConfig.social.instagram,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: seoConfig.keywords.join(", "),
    },
    {
      name: "author",
      content: seoConfig.author,
    },
  ],
};
