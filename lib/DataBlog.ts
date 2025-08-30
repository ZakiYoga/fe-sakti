/* eslint-disable @typescript-eslint/no-explicit-any */
export const dummyCategories = [
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

export const generateDummyBlogs = () => [
  {
    id: 8,
    title: "Udang Crispy Breadcrumb ala Chef dengan Tepung Roti Sakti Premium",
    slug: "udang-crispy-breadcrumb-ala-chef-dengan-tepung-roti-sakti-premium",
    excerpt: "Resep udang crispy dengan lapisan breadcrumb yang sempurna. Tekstur renyah di luar, daging udang yang juicy di dalam. Rahasia chef profesional kini bisa Anda coba di rumah!",
    content: `<div class="prose max-w-none">
      <h2>Udang Crispy Premium Restaurant Style</h2>
      <p>Udang crispy adalah hidangan seafood yang selalu menjadi favorit. Dengan teknik coating yang tepat menggunakan Tepung Roti Sakti Premium, Anda bisa mendapatkan hasil yang tidak kalah dengan restoran mewah.</p>
      
      <h3>Bahan-bahan:</h3>
      <ul>
        <li>500g udang windu, kupas sisakan ekor</li>
        <li>200g Tepung Roti Sakti Premium</li>
        <li>100g tepung terigu</li>
        <li>3 butir telur, kocok lepas</li>
        <li>200ml susu cair dingin</li>
      </ul>
      
      <h3>Bumbu Marinasi:</h3>
      <ul>
        <li>1 sdt garam</li>
        <li>1/2 sdt merica putih bubuk</li>
        <li>1 sdt bawang putih bubuk</li>
        <li>1 sdt kaldu udang bubuk</li>
        <li>1 sdm air jeruk lemon</li>
      </ul>
      
      <h2>Langkah Pembuatan</h2>
      <p>Kunci sukses udang crispy terletak pada persiapan udang dan teknik triple coating yang menghasilkan lapisan breadcrumb yang tebal dan renyah.</p>
      
      <ol>
        <li>Bersihkan udang, buat sayatan tipis di punggung untuk mencegah keriting</li>
        <li>Marinasi udang dengan bumbu marinasi selama 45 menit</li>
        <li>Siapkan 3 wadah: tepung terigu, telur + susu, dan Tepung Roti Sakti</li>
        <li>Celupkan udang: tepung → telur → tepung roti → telur → tepung roti (double coating)</li>
        <li>Diamkan 10 menit sebelum digoreng</li>
        <li>Goreng dalam minyak panas 170°C selama 3-4 menit hingga golden</li>
        <li>Sajikan segera dengan saus cocktail atau thousand island</li>
      </ol>
      
      <h3>Tips Chef Profesional</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li><strong>Jangan overcook:</strong> Udang matang sangat cepat, jangan terlalu lama menggoreng</li>
          <li><strong>Suhu konsisten:</strong> Gunakan termometer untuk menjaga suhu minyak</li>
          <li><strong>Coating tebal:</strong> Double coating menghasilkan tekstur extra crispy</li>
        </ul>
      </div>
    </div>`,
    featured_image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-20T08:00:00.000000Z",
    views: 890,
    meta_title: "Udang Crispy Breadcrumb ala Chef dengan Tepung Roti Sakti Premium",
    meta_description: "Resep udang crispy dengan lapisan breadcrumb yang sempurna. Tekstur renyah di luar, daging udang yang juicy di dalam.",
    meta_keywords: "udang crispy, breadcrumb, tepung roti sakti, seafood, resep chef",
    category_id: 5,
    user_id: 2,
    created_at: "2024-08-20T07:00:00.000000Z",
    updated_at: "2024-08-20T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-20T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 5,
      name: "Seafood",
      slug: "seafood",
      color: "#06B6D4",
      icon: "Fish"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },
  
  {
    id: 9,
    title: "Nugget Ayam Homemade Super Crispy dengan Rahasia Tepung Roti Sakti",
    slug: "nugget-ayam-homemade-super-crispy-dengan-rahasia-tepung-roti-sakti",
    excerpt: "Buat nugget ayam sendiri di rumah dengan kualitas premium! Resep rahasia untuk nugget yang crispy tahan lama dan aman untuk anak-anak.",
    content: `<div class="prose max-w-none">
      <h2>Nugget Ayam Homemade Premium</h2>
      <p>Nugget ayam buatan sendiri tidak hanya lebih sehat, tetapi juga bisa disesuaikan dengan selera keluarga. Dengan Tepung Roti Sakti, tekstur crispy nugget akan bertahan lama bahkan setelah didinginkan.</p>
      
      <h3>Bahan Nugget:</h3>
      <ul>
        <li>1kg dada ayam fillet, potong dadu</li>
        <li>200g tepung tapioka</li>
        <li>100ml air es</li>
        <li>2 butir putih telur</li>
        <li>1 sdt garam</li>
        <li>1/2 sdt merica bubuk</li>
        <li>1 sdt kaldu ayam bubuk</li>
        <li>1/2 sdt bawang putih bubuk</li>
      </ul>
      
      <h3>Bahan Coating:</h3>
      <ul>
        <li>200g Tepung Roti Sakti</li>
        <li>100g tepung terigu</li>
        <li>3 butir telur + 100ml susu cair</li>
      </ul>
      
      <h2>Cara Membuat</h2>
      <p>Proses pembuatan nugget homemade membutuhkan ketelitian, terutama dalam mencampur adonan dan proses pembentukan agar hasil nugget tidak mudah hancur saat digoreng.</p>
      
      <ol>
        <li>Blender kasar dada ayam hingga tekstur seperti daging cincang</li>
        <li>Campurkan ayam cincang dengan tepung tapioka dan bumbu</li>
        <li>Tambahkan air es sedikit demi sedikit sambil diaduk</li>
        <li>Masukkan putih telur, aduk hingga adonan kompak</li>
        <li>Cetak adonan sesuai bentuk yang diinginkan</li>
        <li>Kukus selama 15 menit hingga set</li>
        <li>Dinginkan, lalu lapisi dengan tepung → telur → tepung roti</li>
        <li>Simpan di freezer atau langsung goreng</li>
      </ol>
      
      <h3>Variasi Rasa</h3>
      <div class="grid grid-cols-2 gap-4 my-6">
        <div class="bg-red-50 p-4 rounded-lg">
          <h4 class="font-bold text-red-800">Nugget Pedas</h4>
          <p class="text-sm text-red-600">Tambahkan bubuk cabai dan paprika ke dalam tepung roti</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-bold text-green-800">Nugget Keju</h4>
          <p class="text-sm text-green-600">Campurkan keju parut ke dalam adonan ayam</p>
        </div>
      </div>
      
      <p class="bg-blue-50 p-4 rounded-lg">
        <strong>Storage Tips:</strong> Nugget yang sudah di-coating bisa disimpan di freezer hingga 3 bulan. Goreng langsung tanpa dicairkan terlebih dahulu.
      </p>
    </div>`,
    featured_image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-18T10:00:00.000000Z",
    views: 1450,
    meta_title: "Nugget Ayam Homemade Super Crispy dengan Tepung Roti Sakti",
    meta_description: "Buat nugget ayam sendiri di rumah dengan kualitas premium! Resep rahasia untuk nugget yang crispy tahan lama.",
    meta_keywords: "nugget ayam, homemade, crispy, tepung roti sakti, resep keluarga",
    category_id: 2,
    user_id: 3,
    created_at: "2024-08-18T09:00:00.000000Z",
    updated_at: "2024-08-18T10:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-18T09:30:00.000000Z",
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
      name: "Admin IT",
      email: "admin@saktipangan.co.id"
    }
  },

  {
    id: 11,
    title: "Cumi Goreng Tepung Crispy ala Seafood Restaurant Premium",
    slug: "cumi-goreng-tepung-crispy-ala-seafood-restaurant-premium",
    excerpt: "Rahasia cumi goreng tepung yang crispy dan tidak alot! Teknik khusus dengan Tepung Bumbu Sakti yang membuat cumi tetap tender dan coating-nya renyah sempurna.",
    content: `<div class="prose max-w-none">
      <h2>Cumi Goreng Tepung Restaurant Quality</h2>
      <p>Cumi goreng tepung yang sempurna membutuhkan teknik khusus agar tidak alot. Dengan formulasi Tepung Bumbu Serbaguna Sakti yang tepat, hasil cumi akan tetap tender dengan coating yang super crispy.</p>
      
      <h3>Bahan Utama:</h3>
      <ul>
        <li>500g cumi-cumi segar, potong ring atau strip</li>
        <li>300g Tepung Bumbu Serbaguna Sakti</li>
        <li>200g tepung terigu</li>
        <li>2 butir telur</li>
        <li>200ml air es</li>
        <li>100ml susu cair</li>
      </ul>
      
      <h3>Bumbu Marinasi:</h3>
      <ul>
        <li>2 sdm air jeruk lemon</li>
        <li>1 sdt garam</li>
        <li>1/2 sdt merica putih</li>
        <li>1 sdt bawang putih bubuk</li>
        <li>1 sdm kecap asin (optional)</li>
      </ul>
      
      <h2>Teknik Rahasia Anti-Alot</h2>
      <p>Kunci utama cumi yang tidak alot terletak pada persiapan dan teknik memasak yang tepat. Marinasi dan waktu menggoreng yang pas sangat menentukan tekstur akhir.</p>
      
      <ol>
        <li><strong>Persiapan Cumi:</strong> Bersihkan cumi, buang tulang rawan. Buat sayatan silang tipis untuk mencegah keriting</li>
        <li><strong>Marinasi:</strong> Rendam cumi dalam campuran air jeruk lemon dan garam selama 30 menit</li>
        <li><strong>Bilas dan Keringkan:</strong> Bilas cumi, keringkan dengan paper towel</li>
        <li><strong>Marinasi Kedua:</strong> Lumuri dengan bumbu marinasi, diamkan 15 menit</li>
        <li><strong>Adonan Tepung:</strong> Campurkan Tepung Bumbu Sakti + terigu + air es hingga kental</li>
        <li><strong>Coating:</strong> Celupkan cumi ke adonan, pastikan tertutup rata</li>
        <li><strong>Menggoreng:</strong> Goreng dengan api sedang-tinggi selama 2-3 menit saja</li>
      </ol>
      
      <h3>Tips Profesional Chef</h3>
      <div class="bg-blue-50 p-4 rounded-lg">
        <ul>
          <li><strong>Jangan Overcook:</strong> Cumi matang sangat cepat, maksimal 3 menit</li>
          <li><strong>Suhu Tepat:</strong> Minyak harus benar-benar panas (180°C)</li>
          <li><strong>Batch Kecil:</strong> Jangan goreng terlalu banyak sekaligus</li>
          <li><strong>Marinasi Asam:</strong> Air jeruk lemon membantu melunakkan serat cumi</li>
        </ul>
      </div>
      
      <h3>Variasi Saus Pendamping</h3>
      <div class="grid grid-cols-2 gap-4 my-6">
        <div class="bg-red-50 p-4 rounded-lg">
          <h4 class="font-bold text-red-800">Saus Asam Manis</h4>
          <p class="text-sm text-red-600">Campuran saus tomat, gula merah, cuka, dan saus sambal</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-bold text-green-800">Saus Mayo Pedas</h4>
          <p class="text-sm text-green-600">Mayo + sriracha + perasan lemon + bubuk bawang putih</p>
        </div>
      </div>
    </div>`,
    featured_image: "/images/products/cummi.png",
    status: "published",
    published_at: "2024-08-17T14:00:00.000000Z",
    views: 720,
    meta_title: "Cumi Goreng Tepung Crispy ala Seafood Restaurant Premium",
    meta_description: "Rahasia cumi goreng tepung yang crispy dan tidak alot! Teknik khusus dengan Tepung Bumbu Sakti.",
    meta_keywords: "cumi goreng tepung, crispy, tidak alot, tepung bumbu sakti, seafood",
    category_id: 5,
    user_id: 2,
    created_at: "2024-08-17T13:00:00.000000Z",
    updated_at: "2024-08-17T14:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-17T13:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 5,
      name: "Seafood",
      slug: "seafood",
      color: "#06B6D4",
      icon: "Fish"
    },
    user: {
      id: 2,
      name: "Editor",
      email: "editor@saktipangan.co.id"
    }
  },

    {
    id: 16,
    title: "Sakti Pangan Annual Meeting & Gathering 2025: Merayakan Pencapaian di Pabrik Baru",
    slug: "sakti-pangan-annual-meeting-gathering-2025-merayakan-pencapaian-pabrik-baru",
    excerpt: "PT. Sakti Pangan Perkasa menggelar Annual Meeting & Gathering 2025 di fasilitas pabrik baru. Event dua hari ini menjadi momentum refleksi pencapaian 2024 dan strategi ekspansi 2025.",
    content: `<div class="prose max-w-none">
      <h2>Milestone Bersejarah di Fasilitas Pabrik Baru</h2>
      <p>Annual Meeting & Gathering PT. Sakti Pangan Perkasa tahun 2025 mengambil tempat di kompleks pabrik baru yang berlokasi di Jl. Solo - sragen km 7.7Jetis, Gerdu, Jetis, Kec. Jaten, Kabupaten Karanganyar, Jawa Tengah 57731. Event spektakuler ini dihadiri oleh karyawan, staf, supervisor hingga Direktur PT Sakti Pangan Perkasa.</p>
      
      <p class="text-center font-bold text-lg mt-6 text-orange-600">
        "Together We Grow, Together We Succeed!" - Sakti Pangan Perkasa 2025
      </p>
    </div>`,
    featured_image: "/images/company/DSCF0032.jpg",
    status: "published",
    published_at: "2024-07-27T10:00:00.000000Z",
    views: 890,
    meta_title: "Sakti Pangan Annual Meeting & Gathering 2025: Merayakan Pencapaian di Pabrik Baru",
    meta_description: "PT. Sakti Pangan Perkasa menggelar Annual Meeting & Gathering 2025 di fasilitas pabrik baru yang canggih dengan teknologi Industry 4.0.",
    meta_keywords: "annual meeting, gathering 2025, pabrik baru, sakti pangan, ekspansi, teknologi",
    category_id: 3,
    user_id: 1,
    created_at: "2024-07-27T09:00:00.000000Z",
    updated_at: "2024-07-27T10:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-07-27T09:30:00.000000Z",
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
    id: 14,
    title: "Onion Rings Super Crispy ala American Diner dengan Tepung Roti Sakti",
    slug: "onion-rings-super-crispy-ala-american-diner-dengan-tepung-roti-sakti",
    excerpt: "Buat onion rings yang crispy seperti di restoran Amerika! Resep mudah dengan hasil yang menggiurkan menggunakan Tepung Roti Sakti yang memberikan tekstur sempurna.",
    content: `<div class="prose max-w-none">
      <h2>American Style Onion Rings</h2>
      <p>Onion rings adalah appetizer klasik yang selalu menjadi favorit. Dengan teknik yang tepat dan Tepung Roti Sakti, Anda bisa membuat onion rings yang crispy di luar, lembut di dalam, persis seperti di American diner.</p>
      
      <h3>Bahan-bahan:</h3>
      <ul>
        <li>3 buah bawang bombay besar, potong ring tebal 1cm</li>
        <li>300g Tepung Roti Sakti</li>
        <li>150g tepung terigu</li>
        <li>100g tepung maizena</li>
        <li>300ml buttermilk (atau susu + 1 sdm cuka)</li>
        <li>2 butir telur</li>
      </ul>
      
      <h3>Bumbu Dry Mix:</h3>
      <ul>
        <li>1 sdt paprika powder</li>
        <li>1 sdt garlic powder</li>
        <li>1 sdt onion powder</li>
        <li>1/2 sdt cayenne pepper</li>
        <li>1 sdt garam</li>
        <li>1/2 sdt black pepper</li>
      </ul>
      
      <h2>Langkah Pembuatan</h2>
      <p>Rahasia onion rings yang sempurna terletak pada persiapan bawang dan teknik double coating yang menghasilkan lapisan crispy yang tebal.</p>
      
      <ol>
        <li><strong>Persiapan Bawang:</strong> Potong bawang bombay, pisahkan ring per ring. Rendam dalam air es 30 menit</li>
        <li><strong>Setup Station:</strong> Siapkan 3 wadah - dry mix, wet batter, breadcrumb</li>
        <li><strong>Dry Mix:</strong> Campurkan terigu, maizena, dan semua bumbu</li>
        <li><strong>Wet Batter:</strong> Kocok telur + buttermilk hingga rata</li>
        <li><strong>Coating Process:</strong> Ring bawang → dry mix → wet batter → Tepung Roti Sakti</li>
        <li><strong>Double Coating:</strong> Ulangi wet batter → breadcrumb untuk coating extra thick</li>
        <li><strong>Rest:</strong> Diamkan 15 menit sebelum digoreng</li>
        <li><strong>Deep Fry:</strong> Goreng pada suhu 175°C selama 3-4 menit</li>
      </ol>
      
      <h3>Tips untuk Hasil Maksimal</h3>
      <div class="bg-yellow-50 p-4 rounded-lg">
        <ul>
          <li><strong>Pilih Bawang Tepat:</strong> Gunakan bawang bombay yang besar dan manis</li>
          <li><strong>Suhu Konsisten:</strong> Jaga suhu minyak tetap stabil</li>
          <li><strong>Jangan Overcrowd:</strong> Goreng sedikit-sedikit agar suhu tidak turun</li>
          <li><strong>Drain Well:</strong> Tiriskan di rak kawat, bukan paper towel</li>
        </ul>
      </div>
      
      <h3>Variasi Saus Pendamping</h3>
      <div class="grid grid-cols-3 gap-4 my-6">
        <div class="bg-red-50 p-4 rounded-lg">
          <h4 class="font-bold text-red-800">Ranch Dressing</h4>
          <p class="text-sm text-red-600">Mayo + sour cream + herbs + garlic powder</p>
        </div>
        <div class="bg-orange-50 p-4 rounded-lg">
          <h4 class="font-bold text-orange-800">Spicy Mayo</h4>
          <p class="text-sm text-orange-600">Mayo + sriracha + lime juice + paprika</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-bold text-green-800">BBQ Sauce</h4>
          <p class="text-sm text-green-600">Saus BBQ + honey + apple cider vinegar</p>
        </div>
      </div>
      
      <h2>Serving Suggestions</h2>
      <p>Onion rings terbaik disajikan segera setelah digoreng selagi hangat dan crispy. Cocok sebagai:</p>
      <ul>
        <li>Appetizer dengan berbagai macam saus</li>
        <li>Side dish untuk burger dan steak</li>
        <li>Snack untuk nonton bersama keluarga</li>
        <li>Topping untuk salad (onion rings croutons)</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg">
        <p class="font-bold">Pro Chef Tip:</p>
        <p class="text-sm">Untuk event atau party, Anda bisa prepare onion rings hingga tahap coating, lalu freeze. Goreng langsung dari frozen state dengan waktu sedikit lebih lama.</p>
      </div>
    </div>`,
    featured_image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&h=600&fit=crop",
    status: "published",
    published_at: "2024-08-16T16:00:00.000000Z",
    views: 980,
    meta_title: "Onion Rings Super Crispy ala American Diner dengan Tepung Roti Sakti",
    meta_description: "Buat onion rings yang crispy seperti di restoran Amerika! Resep mudah dengan Tepung Roti Sakti.",
    meta_keywords: "onion rings, crispy, american diner, tepung roti sakti, appetizer",
    category_id: 2,
    user_id: 3,
    created_at: "2024-08-16T15:00:00.000000Z",
    updated_at: "2024-08-16T16:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-08-16T15:30:00.000000Z",
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
      name: "Admin",
      email: "admin@saktipangan.co.id"
    }
  },

  // {
  //   id: 15,
  //   title: "Lowongan Kerja: Digital Marketing Manager dan Food Technologist di Sakti Pangan",
  //   slug: "lowongan-kerja-digital-marketing-manager-dan-food-technologist-sakti-pangan",
  //   excerpt: "Bergabunglah dengan tim PT. Sakti Pangan Perkasa! Kami membuka kesempatan karir untuk posisi Digital Marketing Manager dan Food Technologist dengan benefit menarik dan lingkungan kerja yang suportif.",
  //   content: `<div class="prose max-w-none">
  //     <h2>Kesempatan Karir Terbuka</h2>
  //     <p>Seiring dengan pertumbuhan perusahaan yang pesat, PT. Sakti Pangan Perkasa membuka kesempatan karir untuk dua posisi strategis yang akan berperan penting dalam pengembangan bisnis ke depan.</p>
      
  //     <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-6">
  //       <h3 class="text-2xl font-bold mb-4">🚀 Digital Marketing Manager</h3>
        
  //       <h4 class="font-bold mb-2">Job Description:</h4>
  //       <ul class="mb-4">
  //         <li>Mengembangkan dan mengimplementasikan strategi digital marketing</li>
  //         <li>Mengelola social media channels (Instagram, Facebook, TikTok, YouTube)</li>
  //         <li>Mengoptimalkan SEO dan SEM untuk website perusahaan</li>
  //         <li>Menganalisis performance marketing campaigns</li>
  //         <li>Berkolaborasi dengan tim kreatif untuk konten marketing</li>
  //         <li>Mengelola budget marketing digital dan ROI</li>
  //       </ul>
        
  //       <h4 class="font-bold mb-2">Requirements:</h4>
  //       <ul class="mb-4">
  //         <li>S1 Marketing/Komunikasi/Digital Media</li>
  //         <li>Pengalaman minimal 5 tahun di digital marketing</li>
  //         <li>Menguasai Google Ads, Facebook Ads Manager, Google Analytics</li>
  //         <li>Expertise dalam content creation dan copywriting</li>
  //         <li>Familiar dengan tools seperti Canva, Adobe Creative Suite</li>
  //         <li>Analytical thinking dan data-driven decision making</li>
  //         <li>Leadership skills untuk mengelola tim</li>
  //       </ul>
        
  //       <h4 class="font-bold mb-2">What We Offer:</h4>
  //       <ul>
  //         <li>💰 Salary range: Rp 15,000,000 - Rp 22,000,000</li>
  //         <li>📈 Performance bonus hingga 6x gaji</li>
  //         <li>🏥 Comprehensive health insurance</li>
  //         <li>📚 Training budget Rp 10,000,000/tahun</li>
  //         <li>🏖️ Annual company retreat</li>
  //       </ul>
  //     </div>
      
  //     <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg my-6">
  //       <h3 class="text-2xl font-bold mb-4">🔬 Food Technologist</h3>
        
  //       <h4 class="font-bold mb-2">Job Description:</h4>
  //       <ul class="mb-4">
  //         <li>Research & development produk pangan baru</li>
  //         <li>Melakukan analisis sensori dan uji laboratorium</li>
  //         <li>Mengoptimalkan formulasi produk existing</li>
  //         <li>Memastikan compliance terhadap regulasi pangan</li>
  //         <li>Melakukan product scaling dari lab ke production</li>
  //         <li>Dokumentasi technical specification dan SOP</li>
  //       </ul>
        
  //       <h4 class="font-bold mb-2">Requirements:</h4>
  //       <ul class="mb-4">
  //         <li>S1 Teknologi Pangan/Gizi/Kimia Pangan</li>
  //         <li>Pengalaman minimal 3 tahun di industri pangan</li>
  //         <li>Memahami HACCP, GMP, dan sistem keamanan pangan</li>
  //         <li>Menguasai analytical instruments (HPLC, GC, dll)</li>
  //         <li>Familiar dengan statistical analysis (SPSS, Minitab)</li>
  //         <li>Problem solving dan analytical thinking yang kuat</li>
  //         <li>Mampu bekerja dalam tim multidisiplin</li>
  //       </ul>
        
  //       <h4 class="font-bold mb-2">What We Offer:</h4>
  //       <ul>
  //         <li>💰 Salary range: Rp 12,000,000 - Rp 18,000,000</li>
  //         <li>🎓 Sponsorship untuk S2 atau sertifikasi profesional</li>
  //         <li>🔬 Akses ke laboratorium R&D tercanggih</li>
  //         <li>🌍 Kesempatan mengikuti conference internasional</li>
  //         <li>📊 Research allowance untuk project development</li>
  //       </ul>
  //     </div>
      
  //     <h2>Benefit Umum Karyawan Sakti Pangan</h2>
  //     <div class="grid grid-cols-2 gap-4 my-6">
  //       <div class="bg-orange-50 p-4 rounded-lg">
  //         <h4 class="font-bold text-orange-800">💼 Karir & Pengembangan</h4>
  //         <ul class="text-sm text-orange-600">
  //           <li>Clear career progression path</li>
  //           <li>Regular performance review</li>
  //           <li>Internal training program</li>
  //           <li>Mentorship dari senior manager</li>
  //         </ul>
  //       </div>
  //       <div class="bg-blue-50 p-4 rounded-lg">
  //         <h4 class="font-bold text-blue-800">🏥 Kesehatan & Kesejahteraan</h4>
  //         <ul class="text-sm text-blue-600">
  //           <li>BPJS Kesehatan & Ketenagakerjaan</li>
  //           <li>Asuransi kesehatan keluarga</li>
  //           <li>Annual medical check-up</li>
  //           <li>Mental health support program</li>
  //         </ul>
  //       </div>
  //       <div class="bg-green-50 p-4 rounded-lg">
  //         <h4 class="font-bold text-green-800">⚖️ Work-Life Balance</h4>
  //         <ul class="text-sm text-green-600">
  //           <li>Flexible working hours</li>
  //           <li>Work from home option</li>
  //           <li>25 hari cuti per tahun</li>
  //           <li>Family day & company outing</li>
  //         </ul>
  //       </div>
  //       <div class="bg-purple-50 p-4 rounded-lg">
  //         <h4 class="font-bold text-purple-800">💡 Fasilitas Kerja</h4>
  //         <ul class="text-sm text-purple-600">
  //           <li>MacBook Pro/Gaming laptop</li>
  //           <li>Smartphone allowance</li>
  //           <li>Free lunch & snacks</li>
  //           <li>Modern office di Jakarta Selatan</li>
  //         </ul>
  //       </div>
  //     </div>
      
  //     <h2>Proses Seleksi</h2>
  //     <div class="bg-gray-50 p-6 rounded-lg">
  //       <ol>
  //         <li><strong>Application Review (1 minggu):</strong> Review CV dan portfolio</li>
  //         <li><strong>Phone Screening (30 menit):</strong> Interview awal dengan HR</li>
  //         <li><strong>Technical Test:</strong> Case study sesuai bidang</li>
  //         <li><strong>User Interview (1-2 jam):</strong> Interview dengan hiring manager</li>
  //         <li><strong>Final Interview:</strong> Meet with Director</li>
  //         <li><strong>Reference Check & Offer:</strong> Proses finalisasi</li>
  //       </ol>
  //     </div>
      
  //     <h2>Cara Apply</h2>
  //     <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
  //       <p class="font-bold mb-2">📧 Kirim aplikasi ke: <span class="text-orange-600">jobs@saktipangan.co.id</span></p>
  //       <p class="font-bold mb-2">📝 Subject: [POSISI] - [NAMA LENGKAP]</p>
  //       <p class="font-bold mb-2">📋 Lampirkan:</p>
  //       <ul>
  //         <li>✓ CV lengkap dengan foto</li>
  //         <li>✓ Portfolio/work samples</li>
  //         <li>✓ Cover letter (max 1 halaman)</li>
  //         <li>✓ Expected salary</li>
  //       </ul>
  //       <p class="text-red-600 font-bold mt-4">⏰ Deadline: 30 September 2024</p>
  //     </div>
      
  //     <blockquote class="border-l-4 border-orange-500 pl-4 italic bg-orange-50 p-4 rounded">
  //       "Kami mencari individu yang passionate, innovative, dan siap berkontribusi dalam memajukan industri pangan Indonesia. Join us and be part of something bigger!" - HR Team Sakti Pangan
  //     </blockquote>
  //   </div>`,
  //   featured_image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  //   status: "published",
  //   published_at: "2024-08-21T14:00:00.000000Z",
  //   views: 750,
  //   meta_title: "Lowongan Kerja Digital Marketing Manager dan Food Technologist di Sakti Pangan",
  //   meta_description: "Bergabung dengan tim Sakti Pangan! Buka kesempatan karir Digital Marketing Manager dan Food Technologist dengan benefit menarik.",
  //   meta_keywords: "lowongan kerja, digital marketing manager, food technologist, sakti pangan, karir",
  //   category_id: 4,
  //   user_id: 1,
  //   created_at: "2024-08-21T13:00:00.000000Z",
  //   updated_at: "2024-08-21T14:00:00.000000Z",
  //   approved_by: 1,
  //   approved_at: "2024-08-21T13:30:00.000000Z",
  //   rejection_reason: null,
  //   category: {
  //     id: 4,
  //     name: "SaktiCareer",
  //     slug: "sakti-career",
  //     color: "#8B5CF6",
  //     icon: "Users"
  //   },
  //   user: {
  //     id: 1,
  //     name: "Tim Editorial",
  //     email: "editorial@saktipangan.co.id"
  //   }
  // }
];

// Format response untuk API blogs dengan pagination
export const generateDummyBlogResponse = (params: any = {}) => {
  const allBlogs = generateDummyBlogs();
  let filteredBlogs = [...allBlogs];

  // Filter berdasarkan category
  if (params.category) {
    filteredBlogs = allBlogs.filter(blog => 
      blog.category.slug === params.category
    );
  }

  // Filter berdasarkan search
  if (params.search) {
    const searchTerm = params.search.toLowerCase();
    filteredBlogs = allBlogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.excerpt.toLowerCase().includes(searchTerm)
    );
  }

  // Pagination
  const page = params.page || 1;
  const perPage = params.per_page || 12;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedBlogs = filteredBlogs.slice(start, end);

  const lastPage = Math.ceil(filteredBlogs.length / perPage);

  return {
    current_page: page,
    data: paginatedBlogs,
    first_page_url: `dummy://blogs?page=1`,
    from: start + 1,
    last_page: lastPage,
    last_page_url: `dummy://blogs?page=${lastPage}`,
    links: [
      { url: page > 1 ? `dummy://blogs?page=${page - 1}` : null, label: "&laquo; Previous", active: false },
      { url: `dummy://blogs?page=${page}`, label: page.toString(), active: true },
      { url: page < lastPage ? `dummy://blogs?page=${page + 1}` : null, label: "Next &raquo;", active: false }
    ],
    next_page_url: page < lastPage ? `dummy://blogs?page=${page + 1}` : null,
    path: "dummy://blogs",
    per_page: perPage,
    prev_page_url: page > 1 ? `dummy://blogs?page=${page - 1}` : null,
    to: Math.min(end, filteredBlogs.length),
    total: filteredBlogs.length
  };
};

// Dummy companies data
export const dummyCompanies = [
  {
    id: 1,
    name: "PT. Sakti Pangan Perkasa",
    description: "Perusahaan pangan terkemuka di Indonesia",
    email: "info@saktipangan.co.id",
    phone: "+62-21-1234567",
    address: "Jl. Industri No. 123, Jakarta, Indonesia"
  }
];

// Helper function untuk mencari blog berdasarkan slug
export const findDummyBlogBySlug = (slug: string) => {
  const blogs = generateDummyBlogs();
  return blogs.find(blog => blog.slug === slug) || blogs[0]; // fallback ke blog pertama jika tidak ditemukan
};

// Helper function untuk mendapatkan related blogs
export const getDummyRelatedBlogs = (currentSlug: string, limit: number = 3) => {
  const blogs = generateDummyBlogs();
  return blogs
    .filter(blog => blog.slug !== currentSlug)
    .slice(0, limit);
};

// Helper function untuk mendapatkan kategori berdasarkan slug
export const findDummyCategoryBySlug = (slug: string) => {
  return dummyCategories.find(cat => cat.slug === slug) || dummyCategories[0];
};
