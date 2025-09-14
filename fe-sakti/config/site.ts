export const siteConfig = {
  name: "PT Sakti Pangan Perkasa",
  description: "PT Sakti Pangan Perkasa adalah perusahaan yang berdedikasi untuk menyediakan produk berkualitas tinggi bagi industri ataupun UMKM kuliner di Indonesia. Sejak berdiri, kami fokus pada produksi tepung roti / tepung panir / breadcrumbs yang menjadi bahan baku penting dalam berbagai hidangan.",
  url: "https://saktipangan.co.id",
  ogImage: "https://www.saktipangan.co.id/favicon.ico",
  links: {
    instagram: "https://www.instagram.com/sakt1_id/",
    facebook: "https://facebook.com/saktipanganperkasa",
    linkedin: "https://id.linkedin.com/company/pt-sakti-pangan-perkasa",
    tiktok: "https://www.tiktok.com/@saktitepungroti",
    shopee: "https://shopee.co.id/ptsaktipanganperkasa",
    tokopedia: "https://www.tokopedia.com/sakti-pangan-perkasa",
    whatsapp: "https://wa.me/6281128788989",
  },
} as const;

export type SiteConfig = typeof siteConfig;