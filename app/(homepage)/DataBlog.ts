import { BlogPost } from "@/types/blog.types";

export const generateBlogPosts = (): BlogPost[] => [
  {
    id: 1,
    title: "Ayam Katsu Crispy dengan Breadcrumb Special",
    description:
      "Resep ayam katsu dengan coating breadcrumb yang extra crispy dan bumbu rahasia yang membuatnya semakin lezat.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    category: "Main Course",
    author: {
      name: "Chef Maria",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-08-15",
    readTime: 15,
    likes: 245,
    views: 1200,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Fish & Chips Homemade ala Restoran",
    description:
      "Buat fish & chips crispy seperti di restoran dengan teknik breadcrumb yang tepat dan saus tartar segar.",
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
    category: "Seafood",
    author: {
      name: "Chef John",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-08-10",
    readTime: 20,
    likes: 189,
    views: 890,
    isFeatured: false,
  },
  {
    id: 3,
    title:
      "Chef Maria Bagikan Resep 'Ayam Katsu Crispy' ala Restoran dengan Tepung Roti Sakti",
    description:
      "Ikuti langkah-langkah mudah dari Chef Maria untuk membuat ayam katsu super renyah dan lezat menggunakan produk unggulan kami, Tepung Roti Sakti.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop",
    category: "Resep Sakti",
    author: { name: "Tim Editorial", avatar: "/images/avatars/sakti-logo.png" },
    publishedAt: "2024-08-15",
    readTime: 15,
    likes: 120,
    views: 650,
    isFeatured: true,
  },
  {
    id: 4,
    title:
      "Sakti Pangan Perkasa Raih Penghargaan 'Perusahaan Pangan Terbaik 2024'",
    description:
      "PT. Sakti Pangan Perkasa kembali menorehkan prestasi gemilang dengan meraih penghargaan bergengsi atas komitmen kami dalam kualitas dan inovasi produk pangan.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b2baf?w=800&h=600&fit=crop",
    category: "Kegiatan Sakti",
    author: { name: "Tim Editorial", avatar: "/images/avatars/sakti-logo.png" },
    publishedAt: "2024-08-12",
    readTime: 10,
    likes: 78,
    views: 420,
    isFeatured: true,
  },
  {
    id: 5,
    title: "SaktiCareer: Kesempatan Berkarir di Industri Pangan Terkemuka",
    description:
      "Kami mengundang talenta terbaik untuk bergabung bersama tim PT. Sakti Pangan Perkasa dan berkembang di lingkungan kerja yang dinamis dan suportif. Cek lowongan terbaru di website kami!",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b973753422?w=800&h=600&fit=crop",
    category: "SaktiCareer",
    author: { name: "Tim Editorial", avatar: "/images/avatars/sakti-logo.png" },
    publishedAt: "2024-08-10",
    readTime: 5,
    likes: 52,
    views: 310,
    isFeatured: false,
  },
  {
    id: 6,
    title:
      "Tips Membuat 'Fish & Chips Homemade' Selezat Restoran dengan Tepung Bumbu Sakti",
    description:
      "Ingin membuat hidangan Fish & Chips yang renyah di luar dan lembut di dalam? Temukan rahasianya hanya dengan Tepung Bumbu Serbaguna Sakti!",
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&h=600&fit=crop",
    category: "Resep Sakti",
    author: { name: "Chef John", avatar: "/images/avatars/chef-john.png" },
    publishedAt: "2024-08-08",
    readTime: 20,
    likes: 98,
    views: 510,
    isFeatured: false,
  },
  {
    id: 7,
    title:
      "Sakti Pangan Peduli: Kegiatan Bakti Sosial di Panti Asuhan Kasih Ibu",
    description:
      "Sebagai bentuk tanggung jawab sosial, tim PT. Sakti Pangan Perkasa mengadakan kunjungan dan donasi ke Panti Asuhan Kasih Ibu untuk berbagi kebahagiaan bersama anak-anak.",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=600&fit=crop",
    category: "Kegiatan Sakti",
    author: { name: "Tim Editorial", avatar: "/images/avatars/sakti-logo.png" },
    publishedAt: "2024-08-05",
    readTime: 10,
    likes: 40,
    views: 270,
    isFeatured: false,
  },
  {
    id: 8,
    title:
      "Makin Cuan dengan Resep 'Donat Kentang' Empuk dan Garing! Cocok untuk Jualan!",
    description:
      "Siapa bilang donat kentang cuma bisa empuk? Dengan Tepung Donat Sakti, kamu bisa bikin donat yang garing di luar, tapi lembut di dalam. Resepnya gampang banget!",
    image:
      "https://images.unsplash.com/photo-1620577740050-4d436c646067?w=800&h=600&fit=crop",
    category: "Resep Sakti",
    author: { name: "Chef Lina", avatar: "/images/avatars/chef-lina.png" },
    publishedAt: "2024-08-01",
    readTime: 12,
    likes: 143,
    views: 720,
    isFeatured: false,
  },
  {
    id: 9,
    title:
      "Pabrik Baru Sakti Pangan di Karawang Mulai Beroperasi, Siap Penuhi Permintaan Pasar",
    description:
      "PT. Sakti Pangan Perkasa secara resmi membuka pabrik produksi baru di Karawang, Jawa Barat, untuk meningkatkan kapasitas produksi dan distribusi produk ke seluruh Indonesia.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
    category: "Kegiatan Sakti",
    author: { name: "Tim Editorial", avatar: "/images/avatars/sakti-logo.png" },
    publishedAt: "2024-07-28",
    readTime: 8,
    likes: 65,
    views: 390,
    isFeatured: false,
  },
  {
    id: 10,
    title:
      "Jelajahi Peluang Bisnis Kuliner Bersama Produk Unggulan Sakti Pangan",
    description:
      "Kami membuka kesempatan seluas-luasnya bagi para pengusaha kuliner untuk bermitra dan mengembangkan bisnis bersama produk-produk Sakti Pangan. Dapatkan penawaran menarik sekarang!",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    category: "SaktiCareer",
    author: { name: "Tim Editorial", avatar: "/images/avatars/sakti-logo.png" },
    publishedAt: "2024-07-25",
    readTime: 7,
    likes: 47,
    views: 260,
    isFeatured: false,
  },
];
