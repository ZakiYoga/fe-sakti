export const navigationConfig = {
  main: [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Tentang Kami",
      href: "/tentang-kami",
    },
    {
      title: "Produk Kami",
      href: "/produk-kami",
      items: [
        {
          title: "Makanan Ringan",
          href: "/produk-kami/makanan-ringan",
          description: "Berbagai jenis keripik dan camilan sehat",
        },
        {
          title: "Makanan Beku",
          href: "/produk-kami/makanan-beku",
          description: "Produk frozen food berkualitas tinggi",
        },
        {
          title: "Bumbu & Rempah",
          href: "/produk-kami/bumbu-rempah",
          description: "Bumbu masak dan rempah tradisional",
        },
        {
          title: "Minuman",
          href: "/produk-kami/minuman",
          description: "Minuman segar dan sehat",
        },
      ],
    },
    {
      title: "Sakti News",
      href: "/sakti-news",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Kontak",
      href: "/kontak",
    },
  ],
  footer: {
    company: [
      { title: "Tentang Kami", href: "/tentang-kami" },
      { title: "Visi & Misi", href: "/tentang-kami#visi-misi" },
      { title: "Tim Kami", href: "/tentang-kami#tim" },
      { title: "Karir", href: "/kontak#karir" },
    ],
    products: [
      { title: "Makanan Ringan", href: "/produk-kami/makanan-ringan" },
      { title: "Makanan Beku", href: "/produk-kami/makanan-beku" },
      { title: "Bumbu & Rempah", href: "/produk-kami/bumbu-rempah" },
      { title: "Katalog Produk", href: "/documents/product-catalog.pdf" },
    ],
    support: [
      { title: "FAQ", href: "/faq" },
      { title: "Kontak", href: "/kontak" },
      { title: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { title: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    ],
  },
} as const;