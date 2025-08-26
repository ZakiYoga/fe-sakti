import { Blog, PaginatedResponse, Category } from "@/types/blog.types";

// Dummy categories data that matches API structure
export const dummyCategories: Category[] = [
  {
    id: 1,
    name: "Sakti News",
    slug: "company-news",
    color: "#3B82F6",
    icon: "Building",
    blogs_count: 5
  },
  {
    id: 2,
    name: "Resep Sakti",
    slug: "resep-sakti",
    color: "#F59E0B",
    icon: "ChefHat",
    blogs_count: 8
  },
  {
    id: 3,
    name: "Kegiatan Sakti",
    slug: "kegiatan-sakti",
    color: "#10B981",
    icon: "Calendar",
    blogs_count: 4
  },
  {
    id: 4,
    name: "SaktiCareer",
    slug: "sakti-career",
    color: "#8B5CF6",
    icon: "Users",
    blogs_count: 3
  },
  {
    id: 5,
    name: "Seafood",
    slug: "seafood",
    color: "#06B6D4",
    icon: "Fish",
    blogs_count: 2
  },
  {
    id: 6,
    name: "Main Course",
    slug: "main-course",
    color: "#EF4444",
    icon: "UtensilsCrossed",
    blogs_count: 1
  }
];

// Generate dummy blog posts that match the API structure
export const generateDummyBlogs = (): Blog[] => [
  {
    id: 1,
    title: "Ayam Katsu Crispy dengan Breadcrumb Special",
    slug: "ayam-katsu-crispy-dengan-breadcrumb-special",
    excerpt: "Resep ayam katsu dengan coating breadcrumb yang extra crispy dan bumbu rahasia yang membuatnya semakin lezat. Ikuti langkah-langkah mudah untuk membuat hidangan favorit keluarga ini.",
    content: "Ayam katsu adalah hidangan yang sangat digemari karena teksturnya yang crispy di luar dan juicy di dalam. Dengan menggunakan Tepung Roti Sakti, Anda bisa mendapatkan hasil yang sempurna setiap kali memasak. Resep ini telah diuji dan disempurnakan oleh Chef Maria untuk memberikan hasil terbaik.",
    featured_image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-15T10:00:00.000000Z",
    views: 1200,
    meta_title: "Ayam Katsu Crispy dengan Breadcrumb Special - Resep Terbaik",
    meta_description: "Resep ayam katsu dengan coating breadcrumb yang extra crispy dan bumbu rahasia yang membuatnya semakin lezat.",
    meta_keywords: "ayam katsu, crispy, breadcrumb, resep, sakti",
    category_id: 6,
    user_id: 2,
    created_at: "2024-08-15T09:00:00.000000Z",
    updated_at: "2024-08-15T10:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-15T09:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Main Course",
      slug: "main-course",
      color: "#EF4444",
      icon: "UtensilsCrossed"
    },
    user: {
      id: 2,
      name: "Chef Maria",
      email: "chef.maria@saktipangan.co.id"
    }
  },
  {
    id: 2,
    title: "Fish & Chips Homemade ala Restoran",
    slug: "fish-chips-homemade-ala-restoran",
    excerpt: "Buat fish & chips crispy seperti di restoran dengan teknik breadcrumb yang tepat dan saus tartar segar. Resep mudah dengan hasil professional.",
    content: "Fish & chips adalah hidangan klasik yang selalu menjadi favorit. Dengan Tepung Bumbu Sakti, Anda bisa membuat fish & chips yang tidak kalah enak dengan yang dijual di restoran mewah. Kunci utamanya adalah pada teknik coating dan suhu minyak yang tepat.",
    featured_image: "https://images.unsplash.com/photo-1485995768424-01c1ccc33f7a?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-10T14:00:00.000000Z",
    views: 890,
    meta_title: "Fish & Chips Homemade ala Restoran - Tips dan Trik",
    meta_description: "Buat fish & chips crispy seperti di restoran dengan teknik breadcrumb yang tepat dan saus tartar segar.",
    meta_keywords: "fish and chips, homemade, restoran, crispy, seafood",
    category_id: 5,
    user_id: 3,
    created_at: "2024-08-10T13:00:00.000000Z",
    updated_at: "2024-08-10T14:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-10T13:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 5,
      name: "Seafood",
      slug: "seafood",
      color: "#06B6D4",
      icon: "Fish"
    },
    user: {
      id: 3,
      name: "Chef John",
      email: "chef.john@saktipangan.co.id"
    }
  },
  {
    id: 3,
    title: "Chef Maria Bagikan Resep 'Ayam Katsu Crispy' ala Restoran dengan Tepung Roti Sakti",
    slug: "chef-maria-bagikan-resep-ayam-katsu-crispy-ala-restoran",
    excerpt: "Ikuti langkah-langkah mudah dari Chef Maria untuk membuat ayam katsu super renyah dan lezat menggunakan produk unggulan kami, Tepung Roti Sakti.",
    content: "Chef Maria, salah satu chef terbaik di Indonesia, membagikan resep rahasia ayam katsu crispy yang telah menjadi signature dish di berbagai restoran. Dengan menggunakan Tepung Roti Sakti, hasil yang didapat selalu konsisten dan memuaskan.",
    featured_image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-15T16:00:00.000000Z",
    views: 650,
    meta_title: "Chef Maria Bagikan Resep Ayam Katsu Crispy dengan Tepung Roti Sakti",
    meta_description: "Ikuti langkah-langkah mudah dari Chef Maria untuk membuat ayam katsu super renyah dan lezat.",
    meta_keywords: "chef maria, ayam katsu, tepung roti sakti, resep, crispy",
    category_id: 2,
    user_id: 1,
    created_at: "2024-08-15T15:00:00.000000Z",
    updated_at: "2024-08-15T16:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-15T15:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 2,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F59E0B",
      icon: "ChefHat"
    },
    user: {
      id: 1,
      name: "Tim Editorial",
      email: "editorial@saktipangan.co.id"
    }
  },
  {
    id: 4,
    title: "Sakti Pangan Perkasa Raih Penghargaan 'Perusahaan Pangan Terbaik 2024'",
    slug: "sakti-pangan-perkasa-raih-penghargaan-perusahaan-pangan-terbaik-2024",
    excerpt: "PT. Sakti Pangan Perkasa kembali menorehkan prestasi gemilang dengan meraih penghargaan bergengsi atas komitmen kami dalam kualitas dan inovasi produk pangan.",
    content: "Penghargaan 'Perusahaan Pangan Terbaik 2024' yang diterima oleh PT. Sakti Pangan Perkasa merupakan bukti dari dedikasi perusahaan dalam menghadirkan produk berkualitas tinggi. Penghargaan ini diberikan berdasarkan penilaian ketat terhadap kualitas produk, inovasi, dan kontribusi terhadap industri pangan Indonesia.",
    featured_image: "https://images.unsplash.com/photo-1600880292203-757bb62b2baf?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-12T09:00:00.000000Z",
    views: 420,
    meta_title: "Sakti Pangan Perkasa Raih Penghargaan Perusahaan Pangan Terbaik 2024",
    meta_description: "PT. Sakti Pangan Perkasa kembali menorehkan prestasi gemilang dengan meraih penghargaan bergengsi.",
    meta_keywords: "sakti pangan, penghargaan, perusahaan terbaik, 2024, prestasi",
    category_id: 1,
    user_id: 1,
    created_at: "2024-08-12T08:00:00.000000Z",
    updated_at: "2024-08-12T09:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-12T08:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 1,
      name: "Sakti News",
      slug: "company-news",
      color: "#3B82F6",
      icon: "Building"
    },
    user: {
      id: 1,
      name: "Tim Editorial",
      email: "editorial@saktipangan.co.id"
    }
  },
  {
    id: 5,
    title: "SaktiCareer: Kesempatan Berkarir di Industri Pangan Terkemuka",
    slug: "sakticareer-kesempatan-berkarir-di-industri-pangan-terkemuka",
    excerpt: "Kami mengundang talenta terbaik untuk bergabung bersama tim PT. Sakti Pangan Perkasa dan berkembang di lingkungan kerja yang dinamis dan suportif.",
    content: "PT. Sakti Pangan Perkasa terus berkembang dan membutuhkan talenta-talenta terbaik untuk bergabung dalam tim kami. Kami menawarkan kesempatan karir yang menarik dengan benefits kompetitif dan lingkungan kerja yang mendukung pengembangan diri.",
    featured_image: "https://images.unsplash.com/photo-1521737711867-e3b973753422?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-10T11:00:00.000000Z",
    views: 310,
    meta_title: "SaktiCareer: Kesempatan Berkarir di Industri Pangan Terkemuka",
    meta_description: "Bergabung dengan PT. Sakti Pangan Perkasa dan kembangkan karir Anda di industri pangan.",
    meta_keywords: "sakti career, karir, lowongan kerja, industri pangan, bergabung",
    category_id: 4,
    user_id: 1,
    created_at: "2024-08-10T10:00:00.000000Z",
    updated_at: "2024-08-10T11:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-10T10:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 4,
      name: "SaktiCareer",
      slug: "sakti-career",
      color: "#8B5CF6",
      icon: "Users"
    },
    user: {
      id: 1,
      name: "Tim Editorial",
      email: "editorial@saktipangan.co.id"
    }
  },
  {
    id: 6,
    title: "Tips Membuat 'Fish & Chips Homemade' Selezat Restoran dengan Tepung Bumbu Sakti",
    slug: "tips-membuat-fish-chips-homemade-selezat-restoran",
    excerpt: "Ingin membuat hidangan Fish & Chips yang renyah di luar dan lembut di dalam? Temukan rahasianya hanya dengan Tepung Bumbu Serbaguna Sakti!",
    content: "Membuat fish & chips yang sempurna membutuhkan teknik khusus. Dengan Tepung Bumbu Serbaguna Sakti, proses menjadi lebih mudah dan hasilnya selalu konsisten. Artikel ini akan membahas tips dan trik untuk menghasilkan fish & chips restaurant-quality di rumah.",
    featured_image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-08T15:00:00.000000Z",
    views: 510,
    meta_title: "Tips Membuat Fish & Chips Homemade Selezat Restoran",
    meta_description: "Tips dan trik membuat Fish & Chips yang renyah di luar dan lembut di dalam dengan Tepung Bumbu Sakti.",
    meta_keywords: "fish chips, homemade, tips, tepung bumbu sakti, restoran",
    category_id: 2,
    user_id: 3,
    created_at: "2024-08-08T14:00:00.000000Z",
    updated_at: "2024-08-08T15:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-08T14:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 2,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F59E0B",
      icon: "ChefHat"
    },
    user: {
      id: 3,
      name: "Chef John",
      email: "chef.john@saktipangan.co.id"
    }
  },
  {
    id: 7,
    title: "Sakti Pangan Peduli: Kegiatan Bakti Sosial di Panti Asuhan Kasih Ibu",
    slug: "sakti-pangan-peduli-kegiatan-bakti-sosial-panti-asuhan-kasih-ibu",
    excerpt: "Sebagai bentuk tanggung jawab sosial, tim PT. Sakti Pangan Perkasa mengadakan kunjungan dan donasi ke Panti Asuhan Kasih Ibu untuk berbagi kebahagiaan bersama anak-anak.",
    content: "Program CSR Sakti Pangan Peduli merupakan komitmen perusahaan dalam berkontribusi untuk masyarakat. Kali ini, kami mengunjungi Panti Asuhan Kasih Ibu dan memberikan bantuan serta mengadakan kegiatan bersama anak-anak yatim piatu.",
    featured_image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-05T13:00:00.000000Z",
    views: 270,
    meta_title: "Sakti Pangan Peduli: Kegiatan Bakti Sosial di Panti Asuhan",
    meta_description: "Tim PT. Sakti Pangan Perkasa mengadakan kegiatan bakti sosial di Panti Asuhan Kasih Ibu.",
    meta_keywords: "sakti pangan peduli, bakti sosial, panti asuhan, csr, kegiatan sosial",
    category_id: 3,
    user_id: 1,
    created_at: "2024-08-05T12:00:00.000000Z",
    updated_at: "2024-08-05T13:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-05T12:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 3,
      name: "Kegiatan Sakti",
      slug: "kegiatan-sakti",
      color: "#10B981",
      icon: "Calendar"
    },
    user: {
      id: 1,
      name: "Tim Editorial",
      email: "editorial@saktipangan.co.id"
    }
  },
  {
    id: 8,
    title: "Makin Cuan dengan Resep 'Donat Kentang' Empuk dan Garing! Cocok untuk Jualan!",
    slug: "makin-cuan-dengan-resep-donat-kentang-empuk-dan-garing",
    excerpt: "Siapa bilang donat kentang cuma bisa empuk? Dengan Tepung Donat Sakti, kamu bisa bikin donat yang garing di luar, tapi lembut di dalam. Resepnya gampang banget!",
    content: "Donat kentang adalah bisnis kuliner yang menjanjikan. Dengan modal relatif kecil, Anda bisa memulai usaha donat kentang yang menguntungkan. Kunci sukses ada pada resep yang tepat dan konsistensi kualitas, yang bisa didapat dengan menggunakan Tepung Donat Sakti.",
    featured_image: "https://images.unsplash.com/photo-1620577740050-4d436c646067?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-01T10:00:00.000000Z",
    views: 720,
    meta_title: "Resep Donat Kentang Empuk dan Garing untuk Jualan",
    meta_description: "Resep donat kentang yang empuk dan garing, cocok untuk usaha jualan dengan modal kecil.",
    meta_keywords: "donat kentang, resep jualan, tepung donat sakti, bisnis kuliner, cuan",
    category_id: 2,
    user_id: 4,
    created_at: "2024-08-01T09:00:00.000000Z",
    updated_at: "2024-08-01T10:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-01T09:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 2,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F59E0B",
      icon: "ChefHat"
    },
    user: {
      id: 4,
      name: "Chef Lina",
      email: "chef.lina@saktipangan.co.id"
    }
  },
  {
    id: 9,
    title: "Pabrik Baru Sakti Pangan di Karawang Mulai Beroperasi, Siap Penuhi Permintaan Pasar",
    slug: "pabrik-baru-sakti-pangan-karawang-mulai-beroperasi",
    excerpt: "PT. Sakti Pangan Perkasa secara resmi membuka pabrik produksi baru di Karawang, Jawa Barat, untuk meningkatkan kapasitas produksi dan distribusi produk ke seluruh Indonesia.",
    content: "Pembukaan pabrik baru di Karawang merupakan langkah strategis PT. Sakti Pangan Perkasa dalam memperluas jangkauan distribusi dan meningkatkan kapasitas produksi. Pabrik ini dilengkapi dengan teknologi modern dan standar keamanan pangan yang ketat.",
    featured_image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-07-28T08:00:00.000000Z",
    views: 390,
    meta_title: "Pabrik Baru Sakti Pangan di Karawang Mulai Beroperasi",
    meta_description: "PT. Sakti Pangan Perkasa resmi membuka pabrik produksi baru di Karawang untuk meningkatkan kapasitas produksi.",
    meta_keywords: "pabrik baru, karawang, sakti pangan, produksi, ekspansi",
    category_id: 1,
    user_id: 1,
    created_at: "2024-07-28T07:00:00.000000Z",
    updated_at: "2024-07-28T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-07-28T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 1,
      name: "Sakti News",
      slug: "company-news",
      color: "#3B82F6",
      icon: "Building"
    },
    user: {
      id: 1,
      name: "Tim Editorial",
      email: "editorial@saktipangan.co.id"
    }
  },
  {
    id: 10,
    title: "Jelajahi Peluang Bisnis Kuliner Bersama Produk Unggulan Sakti Pangan",
    slug: "jelajahi-peluang-bisnis-kuliner-bersama-produk-unggulan-sakti-pangan",
    excerpt: "Kami membuka kesempatan seluas-luasnya bagi para pengusaha kuliner untuk bermitra dan mengembangkan bisnis bersama produk-produk Sakti Pangan. Dapatkan penawaran menarik sekarang!",
    content: "Program kemitraan bisnis kuliner Sakti Pangan dirancang untuk membantu para entrepreneur mengembangkan usaha kuliner mereka. Dengan dukungan produk berkualitas dan sistem yang terintegrasi, peluang sukses semakin terbuka lebar.",
    featured_image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-07-25T14:00:00.000000Z",
    views: 260,
    meta_title: "Peluang Bisnis Kuliner Bersama Produk Unggulan Sakti Pangan",
    meta_description: "Jelajahi peluang bisnis kuliner dengan bermitra bersama Sakti Pangan dan produk-produk unggulan kami.",
    meta_keywords: "peluang bisnis, kuliner, kemitraan, sakti pangan, franchise",
    category_id: 4,
    user_id: 1,
    created_at: "2024-07-25T13:00:00.000000Z",
    updated_at: "2024-07-25T14:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-07-25T13:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 4,
      name: "SaktiCareer",
      slug: "sakti-career",
      color: "#8B5CF6",
      icon: "Users"
    },
    user: {
      id: 1,
      name: "Tim Editorial",
      email: "editorial@saktipangan.co.id"
    }
  }
];

// Generate paginated dummy data that matches API response structure
const generateDummyPaginatedBlogs = (page: number = 1, perPage: number = 12): PaginatedResponse<Blog> => {
  const allBlogs = generateDummyBlogs();
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedBlogs = allBlogs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allBlogs.length / perPage);

  return {
    current_page: page,
    data: paginatedBlogs,
    first_page_url: `http://localhost:3000/api/v1/blog?page=1`,
    from: startIndex + 1,
    last_page: totalPages,
    last_page_url: `http://localhost:3000/api/v1/blog?page=${totalPages}`,
    links: [
      {
        url: page > 1 ? `http://localhost:3000/api/v1/blog?page=${page - 1}` : null,
        label: "&laquo; Previous",
        active: false
      },
      {
        url: `http://localhost:3000/api/v1/blog?page=${page}`,
        label: page.toString(),
        active: true
      },
      {
        url: page < totalPages ? `http://localhost:3000/api/v1/blog?page=${page + 1}` : null,
        label: "Next &raquo;",
        active: false
      }
    ],
    next_page_url: page < totalPages ? `http://localhost:3000/api/v1/blog?page=${page + 1}` : null,
    path: "http://localhost:3000/api/v1/blog",
    per_page: perPage,
    prev_page_url: page > 1 ? `http://localhost:3000/api/v1/blog?page=${page - 1}` : null,
    to: Math.min(endIndex, allBlogs.length),
    total: allBlogs.length
  };
};

// Filter blogs by search query and category
export const filterDummyBlogs = (
  blogs: Blog[], 
  searchQuery: string = '', 
  categorySlug: string = ''
): Blog[] => {
  let filteredBlogs = [...blogs];

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredBlogs = filteredBlogs.filter(blog =>
      blog.title.toLowerCase().includes(query) ||
      blog.excerpt.toLowerCase().includes(query) ||
      blog.content.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (categorySlug.trim()) {
    filteredBlogs = filteredBlogs.filter(blog =>
      blog.category?.slug === categorySlug
    );
  }

  return filteredBlogs;
};

// Generate filtered and paginated dummy data
export const generateFilteredDummyPaginatedBlogs = (
  page: number = 1, 
  perPage: number = 12,
  searchQuery: string = '',
  categorySlug: string = ''
): PaginatedResponse<Blog> => {
  const allBlogs = generateDummyBlogs();
  const filteredBlogs = filterDummyBlogs(allBlogs, searchQuery, categorySlug);
  
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredBlogs.length / perPage);

  return {
    current_page: page,
    data: paginatedBlogs,
    first_page_url: `http://localhost:3000/api/v1/blog?page=1`,
    from: filteredBlogs.length > 0 ? startIndex + 1 : 0,
    last_page: totalPages,
    last_page_url: totalPages > 0 ? `http://localhost:3000/api/v1/blog?page=${totalPages}` : null,
    links: [
      {
        url: page > 1 ? `http://localhost:3000/api/v1/blog?page=${page - 1}` : null,
        label: "&laquo; Previous",
        active: false
      },
      {
        url: `http://localhost:3000/api/v1/blog?page=${page}`,
        label: page.toString(),
        active: true
      },
      {
        url: page < totalPages ? `http://localhost:3000/api/v1/blog?page=${page + 1}` : null,
        label: "Next &raquo;",
        active: false
      }
    ],
    next_page_url: page < totalPages ? `http://localhost:3000/api/v1/blog?page=${page + 1}` : null,
    path: "http://localhost:3000/api/v1/blog",
    per_page: perPage,
    prev_page_url: page > 1 ? `http://localhost:3000/api/v1/blog?page=${page - 1}` : null,
    to: Math.min(endIndex, filteredBlogs.length),
    total: filteredBlogs.length
  };
};

export { generateDummyBlogs as generateBlogPosts };
