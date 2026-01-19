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
    id: 1,
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
    featured_image: "/images/blog/udang-krispi.png",
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
    id: 2,
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
    featured_image: "/images/blog/nugget-ayam.jpg",
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
    id: 3,
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
    featured_image: "/images/blog/cummi.png",
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
    id: 4,
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
    featured_image: "/images/blog/meeting.png",
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
    id: 5,
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
    featured_image: "/images/blog/onion-ring.jpg",
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

  {
    id: 6,
    title: "Roti Goreng Empuk dan Lembut Isi Cokelat dengan Tepung Roti Sakti",
    slug: "roti-goreng-empuk-dan-lembut-isi-cokelat-dengan-tepung-roti-sakti",
    excerpt: "Nikmati roti goreng empuk dengan isian cokelat lumer yang cocok untuk camilan sore. Resep praktis dengan Tepung Roti Sakti yang menghasilkan tekstur lembut dan golden brown sempurna.",
    content: `<div class="prose max-w-none">
    <h2>Roti Goreng Isi Cokelat</h2>
    <p>Roti goreng adalah jajanan klasik yang selalu jadi favorit keluarga. Dengan Tepung Roti Sakti, hasilnya akan lebih empuk, bertekstur lembut, dan tetap lezat meskipun sudah dingin.</p>
    
    <h3>Bahan-bahan:</h3>
    <ul>
      <li>500g Tepung Roti Sakti</li>
      <li>50g gula pasir</li>
      <li>10g ragi instan</li>
      <li>250ml susu hangat</li>
      <li>50g margarin atau butter</li>
      <li>1 butir telur</li>
      <li>1/2 sdt garam</li>
      <li>Isian sesuai selera (cokelat, keju, selai, kacang hijau)</li>
    </ul>
    
    <h2>Langkah Pembuatan</h2>
    <ol>
      <li><strong>Aktifkan Ragi:</strong> Campurkan ragi + sedikit gula ke dalam susu hangat. Diamkan 10 menit hingga berbusa.</li>
      <li><strong>Uleni Adonan:</strong> Campur tepung, gula, telur, garam, margarin, lalu tambahkan larutan ragi. Uleni hingga kalis elastis (10–15 menit).</li>
      <li><strong>Proofing Pertama:</strong> Diamkan adonan 1 jam dalam wadah tertutup hingga mengembang 2x lipat.</li>
      <li><strong>Bentuk Roti:</strong> Kempiskan adonan, bagi menjadi 12–15 bagian. Pipihkan, isi dengan cokelat, bulatkan kembali.</li>
      <li><strong>Proofing Kedua:</strong> Diamkan 30 menit hingga roti mengembang lagi.</li>
      <li><strong>Goreng:</strong> Panaskan minyak dengan api sedang. Goreng roti hingga golden brown, balik sekali saja agar tidak menyerap minyak berlebih.</li>
    </ol>
    
    <h3>Tips untuk Hasil Maksimal</h3>
    <div class="bg-yellow-50 p-4 rounded-lg">
      <ul>
        <li><strong>Suhu Minyak Stabil:</strong> Gunakan api sedang, jangan terlalu panas agar dalamnya matang sempurna.</li>
        <li><strong>Isian Tidak Bocor:</strong> Tutup rapat adonan agar cokelat tidak keluar saat digoreng.</li>
        <li><strong>Tiriskan Benar:</strong> Gunakan rak kawat supaya roti tetap crispy di luar dan lembut di dalam.</li>
      </ul>
    </div>
    
    <h3>Variasi Isian</h3>
    <div class="grid grid-cols-3 gap-4 my-6">
      <div class="bg-brown-50 p-4 rounded-lg">
        <h4 class="font-bold text-brown-800">Cokelat Lumer</h4>
        <p class="text-sm text-brown-600">Cokelat batangan atau meses untuk rasa manis klasik</p>
      </div>
      <div class="bg-yellow-50 p-4 rounded-lg">
        <h4 class="font-bold text-yellow-800">Keju</h4>
        <p class="text-sm text-yellow-600">Keju cheddar parut atau mozarella untuk gurih legit</p>
      </div>
      <div class="bg-green-50 p-4 rounded-lg">
        <h4 class="font-bold text-green-800">Kacang Hijau</h4>
        <p class="text-sm text-green-600">Isian manis kacang hijau halus khas roti tradisional</p>
      </div>
    </div>
    
    <h2>Serving Suggestions</h2>
    <p>Roti goreng nikmat disajikan hangat dengan taburan gula halus atau madu. Cocok sebagai:</p>
    <ul>
      <li>Camilan sore bersama teh hangat</li>
      <li>Bekal anak sekolah</li>
      <li>Snack untuk arisan atau kumpul keluarga</li>
    </ul>
    
    <div class="bg-blue-50 p-4 rounded-lg">
      <p class="font-bold">Pro Chef Tip:</p>
      <p class="text-sm">Untuk stok, goreng roti hingga setengah matang, tiriskan, lalu simpan di freezer. Saat akan disajikan, goreng ulang hingga golden brown sempurna.</p>
    </div>
    </div>`,
    featured_image: "/images/blog/roti-coklat.png",
    status: "published",
    published_at: "2025-09-24T16:00:00.000000Z",
    views: 1250,
    meta_title: "Roti Goreng Empuk dan Lembut Isi Cokelat dengan Tepung Roti Sakti",
    meta_description: "Resep roti goreng empuk isi cokelat lumer dengan Tepung Roti Sakti. Cocok untuk camilan keluarga.",
    meta_keywords: "roti goreng, resep roti, cokelat, camilan manis, tepung roti sakti",
    category_id: 2,
    user_id: 3,
    created_at: "2025-09-24T15:00:00.000000Z",
    updated_at: "2025-09-24T16:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-09-24T15:30:00.000000Z",
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

  {
    id: 7,
    title: "Risol Mayo Lumer Isi Sosis dan Telur dengan Tepung Roti Sakti",
    slug: "risol-mayo-lumer-isi-sosis-dan-telur-dengan-tepung-roti-sakti",
    excerpt: "Risol mayo favorit banyak orang! Kulit tipis, isi sosis dan telur rebus, dengan campuran mayo creamy. Praktis dibuat dan hasilnya renyah berkat Tepung Roti Sakti.",
    content: `<div class="prose max-w-none">
    <h2>Risol Mayo</h2>
    <p>Risol mayo adalah camilan kekinian yang selalu bikin nagih. Kulitnya lembut, isiannya creamy dengan perpaduan sosis, telur, keju, dan mayo manis gurih.</p>
    
    <h3>Bahan Kulit:</h3>
    <ul>
      <li>250 gr tepung terigu</li>
      <li>1 bungkus susu bubuk putih</li>
      <li>1 sdm minyak goreng</li>
      <li>2 sdm tepung sagu / tapioka</li>
      <li>1 butir telur</li>
      <li>½ sdt garam</li>
      <li>500 ml air</li>
    </ul>
    
    <h3>Bahan Isian:</h3>
    <ul>
      <li>4 buah sosis, iris tipis</li>
      <li>3 butir telur rebus, potong-potong</li>
    </ul>
    
    <h3>Bahan Campuran Mayones:</h3>
    <ul>
      <li>180 gr mayones</li>
      <li>35 gr keju cheddar parut</li>
      <li>1 saset susu kental manis</li>
    </ul>
    
    <h2>Cara Membuat</h2>
    <ol>
      <li><strong>Buat Kulit:</strong> Campur semua bahan kulit, aduk dengan whisk hingga halus tanpa gumpal. Ambil satu sendok sayur adonan, dadar tipis di teflon. Ulangi hingga adonan habis, sisakan sedikit untuk bahan pencelup.</li>
      <li><strong>Buat Isian:</strong> Campur mayones, keju parut, dan kental manis hingga rata.</li>
      <li><strong>Isi Risol:</strong> Ambil selembar kulit, oleskan campuran mayo, beri irisan sosis + potongan telur rebus, lalu beri mayo lagi.</li>
      <li><strong>Lipat:</strong> Lipat kulit seperti amplop atau sesuai selera.</li>
      <li><strong>Coating:</strong> Celupkan risol ke sisa adonan kulit, lalu gulingkan di Tepung Roti Sakti.</li>
      <li><strong>Goreng:</strong> Panaskan minyak, goreng risol hingga golden brown. Angkat dan tiriskan.</li>
    </ol>
    
    <h3>Tips Anti Gagal</h3>
    <div class="bg-yellow-50 p-4 rounded-lg">
      <ul>
        <li><strong>Pakai Adonan Kulit sebagai Pencelup:</strong> Lebih wangi dibanding telur, tidak amis meski risol dingin.</li>
        <li><strong>Suhu Minyak Stabil:</strong> Gunakan api sedang agar matang merata.</li>
        <li><strong>Tiriskan Benar:</strong> Letakkan di rak kawat supaya tetap renyah.</li>
      </ul>
    </div>
    
    <h2>Serving Suggestions</h2>
    <p>Risol mayo paling enak dimakan hangat dengan cocolan saus sambal atau mayonnaise tambahan. Cocok untuk:</p>
    <ul>
      <li>Camilan sore</li>
      <li>Bekal sekolah</li>
      <li>Ide jualan rumahan</li>
    </ul>
    
    <div class="bg-blue-50 p-4 rounded-lg">
      <p class="font-bold">Pro Chef Tip:</p>
      <p class="text-sm">Bisa disimpan dalam freezer setelah dibalut tepung roti. Goreng langsung saat akan disajikan tanpa perlu dicairkan.</p>
    </div>
    </div>`,
    featured_image: "/images/blog/risol.png",
    status: "published",
    published_at: "2025-09-29T16:30:00.000000Z",
    views: 980,
    meta_title: "Risol Mayo Lumer Isi Sosis dan Telur dengan Tepung Roti Sakti",
    meta_description: "Resep risol mayo creamy isi sosis dan telur rebus, dibalut Tepung Roti Sakti agar renyah sempurna.",
    meta_keywords: "risol mayo, risoles, resep camilan, sosis, telur, tepung roti sakti",
    category_id: 2,
    user_id: 3,
    created_at: "2025-09-29T15:30:00.000000Z",
    updated_at: "2025-09-29T16:30:00.000000Z",
    approved_by: 1,
    approved_at: "2025-09-29T15:45:00.000000Z",
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

  {
    id: 8,
    title: "Risol Ragout Ayam Sayur Creamy dengan Tepung Roti Sakti",
    slug: "risol-ragout-ayam-sayur-creamy-dengan-tepung-roti-sakti",
    excerpt: "Risol klasik dengan isian ragout ayam dan sayuran creamy, dibalut kulit lembut dan tepung roti renyah. Camilan legendaris yang selalu disukai semua usia.",
    content: `<div class="prose max-w-none">
      <h2>Risol Ragout Ayam Sayur</h2>
      <p>Risol ragout adalah jajanan tradisional yang populer sejak dulu. Isinya berupa ragout ayam dan sayuran yang creamy, dibungkus kulit tipis lalu digoreng hingga renyah.</p>
      
      <h3>Bahan Kulit:</h3>
      <ul>
        <li>250 gr tepung terigu</li>
        <li>1 butir telur</li>
        <li>½ sdt garam</li>
        <li>2 sdm minyak goreng</li>
        <li>500 ml air</li>
      </ul>
      
      <h3>Bahan Isian Ragout:</h3>
      <ul>
        <li>200 gr daging ayam rebus, suwir halus</li>
        <li>2 wortel kecil, potong dadu kecil</li>
        <li>100 gr buncis, iris tipis</li>
        <li>3 siung bawang putih, cincang</li>
        <li>½ buah bawang bombay, cincang halus</li>
        <li>2 sdm margarin</li>
        <li>3 sdm tepung terigu</li>
        <li>300 ml susu cair</li>
        <li>½ sdt pala bubuk</li>
        <li>½ sdt merica bubuk</li>
        <li>½ sdt garam</li>
        <li>1 sdt kaldu bubuk</li>
      </ul>
      
      <h3>Bahan Pelapis:</h3>
      <ul>
        <li>Sisa adonan kulit untuk pencelup</li>
        <li>Tepung Roti Sakti secukupnya</li>
      </ul>
      
      <h2>Cara Membuat</h2>
      <ol>
        <li><strong>Kulit Risol:</strong> Campur semua bahan kulit, aduk hingga rata dan tidak menggumpal. Dadar tipis di teflon hingga adonan habis. Sisakan sedikit untuk pencelup.</li>
        <li><strong>Buat Ragout:</strong> Tumis bawang putih dan bawang bombay hingga harum. Masukkan wortel + buncis, aduk rata. Tambahkan ayam suwir.</li>
        <li><strong>Saus Creamy:</strong> Masukkan margarin dan tepung terigu, aduk rata. Tuang susu cair sedikit demi sedikit sambil diaduk hingga kental. Bumbui dengan pala, merica, garam, kaldu. Dinginkan.</li>
        <li><strong>Isi Risol:</strong> Ambil kulit risol, beri 1–2 sdm ragout. Lipat amplop atau gulung sesuai selera.</li>
        <li><strong>Coating:</strong> Celupkan risol ke sisa adonan kulit, lalu gulingkan di Tepung Roti Sakti.</li>
        <li><strong>Goreng:</strong> Panaskan minyak, goreng risol dengan api sedang hingga golden brown.</li>
      </ol>
      
      <h3>Tips Anti Gagal</h3>
      <div class="bg-yellow-50 p-4 rounded-lg">
        <ul>
          <li><strong>Ragout Harus Dingin:</strong> Isian ragout jangan masih panas agar kulit tidak mudah robek.</li>
          <li><strong>Kulit Tipis Merata:</strong> Gunakan teflon anti lengket agar hasil kulit mulus.</li>
          <li><strong>Minyak Cukup Banyak:</strong> Gunakan metode deep fry supaya risol matang merata dan renyah.</li>
        </ul>
      </div>
      
      <h2>Serving Suggestions</h2>
      <p>Risol ragout nikmat disajikan hangat dengan saus sambal atau cabai rawit segar. Cocok untuk:</p>
      <ul>
        <li>Camilan sore</li>
        <li>Hidangan arisan atau hajatan</li>
        <li>Ide jualan legendaris</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg">
        <p class="font-bold">Pro Chef Tip:</p>
        <p class="text-sm">Untuk stok, risol bisa dibekukan setelah dibalut tepung roti. Goreng langsung dari frozen agar tetap renyah dan tidak menyerap minyak.</p>
      </div>
    </div>`,
    featured_image: "/images/blog/risol2.png",
    status: "published",
    published_at: "2025-09-26T17:00:00.000000Z",
    views: 1120,
    meta_title: "Risol Ragout Ayam Sayur Creamy dengan Tepung Roti Sakti",
    meta_description: "Resep risol ragout ayam sayur creamy yang klasik, dibalut kulit tipis dan Tepung Roti Sakti agar renyah sempurna.",
    meta_keywords: "risol ragout, resep risoles, camilan tradisional, ayam sayur, tepung roti sakti",
    category_id: 2,
    user_id: 3,
    created_at: "2025-09-26T16:00:00.000000Z",
    updated_at: "2025-09-26T17:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-09-26T16:30:00.000000Z",
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

  {
    id: 9,
    title: "Udang Keju Mozarella Renyah dengan Tepung Roti Sakti",
    slug: "udang-keju-mozarella-renyah-dengan-tepung-roti-sakti",
    excerpt: "Perpaduan ayam, udang segar, dan keju mozarella lumer yang dibalut tepung roti Sakti. Renyah di luar, juicy di dalam. Camilan premium yang bikin nagih!",
    content: `<div class="prose max-w-none">
    <h2>Udang Keju Mozarella</h2>
    <p>Resep camilan spesial berbahan dasar ayam dan udang yang dipadukan dengan keju mozarella lumer. Renyah di luar, lembut dan gurih di dalam. Cocok untuk camilan keluarga atau ide jualan kekinian.</p>
    
    <h3>Bahan-bahan (±14 buah):</h3>
    <ul>
      <li>250 gr ayam filet</li>
      <li>250 gr udang, buang kepala & kulit</li>
      <li>4 sdm tepung terigu</li>
      <li>Keju mozarella / quick melt secukupnya</li>
      <li>Tepung Roti Sakti secukupnya</li>
      <li>2 siung bawang putih, cincang halus</li>
      <li>1 butir telur</li>
      <li>Keju parut (opsional)</li>
      <li>Saus tiram secukupnya</li>
      <li>Kaldu bubuk secukupnya</li>
      <li>Lada bubuk secukupnya</li>
    </ul>
    
    <h3>Cara Membuat:</h3>
    <ol>
      <li>Bersihkan ayam, kepala, dan kulit udang.</li>
      <li>Potong kecil ayam filet, lalu blender bersama udang hingga halus.</li>
      <li>Pindahkan ke wadah, tambahkan kaldu bubuk, lada, dan saus tiram secukupnya. Aduk rata.</li>
      <li>Masukkan 1 butir telur dan keju parut (opsional), aduk rata.</li>
      <li>Tambahkan 4 sdm tepung terigu, aduk hingga adonan kalis.</li>
      <li>Potong memanjang keju mozarella / quick melt.</li>
      <li>Olesi tangan dengan minyak goreng, ambil adonan secukupnya, pipihkan, beri isian keju, lalu bulatkan hingga tertutup rapat.</li>
      <li>Balur adonan dengan Tepung Roti Sakti hingga rata.</li>
      <li>Goreng dengan api kecil hingga kuning keemasan.</li>
      <li>Angkat, tiriskan, dan sajikan hangat. Udang keju siap dinikmati! 😍</li>
    </ol>
    
    <h3>Tips Anti Gagal:</h3>
    <div class="bg-yellow-50 p-4 rounded-lg">
      <ul>
        <li><strong>Gunakan api kecil:</strong> Agar keju meleleh sempurna tanpa membuat kulit gosong.</li>
        <li><strong>Baluran merata:</strong> Pastikan tepung roti menempel sempurna agar hasilnya renyah.</li>
        <li><strong>Bisa frozen:</strong> Simpan adonan yang sudah dibalur tepung roti dalam freezer, goreng langsung saat akan disajikan.</li>
      </ul>
    </div>
    
    <h2>Serving Suggestions</h2>
    <p>Nikmati Udang Keju Mozarella dengan saus sambal, mayonaise, atau saus keju tambahan. Cocok untuk:</p>
    <ul>
      <li>Camilan keluarga</li>
      <li>Bekal anak sekolah</li>
      <li>Menu jualan premium</li>
    </ul>
    
    <div class="bg-blue-50 p-4 rounded-lg">
      <p class="font-bold">Pro Chef Tip:</p>
      <p class="text-sm">Untuk hasil lebih creamy, campurkan sedikit keju quick melt ke dalam adonan sebelum dibentuk.</p>
    </div>
    </div>`,
    featured_image: "/images/blog/udang-keju.png",
    status: "published",
    published_at: "2025-09-24T18:00:00.000000Z",
    views: 980,
    meta_title: "Resep Udang Keju Mozarella Renyah dengan Tepung Roti Sakti",
    meta_description: "Resep udang keju mozarella crispy: ayam + udang dibalut adonan gurih dengan isian keju lumer, renyah berkat Tepung Roti Sakti.",
    meta_keywords: "udang keju, resep udang crispy, camilan premium, mozzarella, tepung roti sakti",
    category_id: 2,
    user_id: 3,
    created_at: "2025-09-24T17:00:00.000000Z",
    updated_at: "2025-09-24T18:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-09-24T17:30:00.000000Z",
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

  {
    id: 10,
    title: "Chicken Katsu Saus BBQ Renyah dengan Tepung Roti Sakti",
    slug: "chicken-katsu-saus-bbq-renyah-dengan-tepung-roti-sakti",
    excerpt: "Chicken katsu crispy di luar, juicy di dalam, disajikan dengan saus BBQ spesial. Rahasia kerenyahannya? Tepung Roti Sakti!",
    content: `<div class="prose max-w-none">
    <h2>Chicken Katsu Saus BBQ</h2>
    <p>Chicken katsu adalah ayam goreng tepung ala Jepang yang digemari banyak orang. Dengan balutan <strong>Tepung Roti Sakti</strong>, hasilnya super crispy, gurih, dan renyah lebih lama!</p>
    
    <h3>Bahan-bahan:</h3>
    <ul>
      <li>500 gr dada ayam</li>
    </ul>
    
    <h3>Bumbu Marinasi:</h3>
    <ul>
      <li>3 siung bawang putih, tumbuk</li>
      <li>1/4 sdt lada bubuk</li>
      <li>1/2 sdt garam</li>
      <li>1 buah jeruk nipis</li>
    </ul>
    
    <h3>Bahan Perekat:</h3>
    <ul>
      <li>Tepung terigu secukupnya</li>
      <li>1 butir telur</li>
      <li>2 sdm susu cair</li>
      <li>1/4 sdt lada</li>
      <li>1/2 sdt garam</li>
      <li><strong>Tepung Roti Sakti</strong> secukupnya</li>
    </ul>
    
    <h3>Bahan Saus Katsu:</h3>
    <ul>
      <li>1/2 buah bawang bombay, iris tipis</li>
      <li>2 siung bawang putih, cincang halus</li>
      <li>Margarin secukupnya</li>
      <li>Saus barbeque secukupnya</li>
      <li>1 sdm saus tiram</li>
      <li>1/2 sdm kecap manis</li>
      <li>1 sdm saus sambal / tomat</li>
    </ul>
    
    <h2>Cara Membuat</h2>
    <ol>
      <li>Iris dada ayam jadi 2 bagian, marinasi dengan bawang putih, lada, garam, dan jeruk nipis. Diamkan 5 menit.</li>
      <li>Pukul-pukul ayam hingga melebar dan ketebalannya rata.</li>
      <li>Baluri ayam dengan tepung terigu tipis-tipis.</li>
      <li>Siapkan adonan telur (telur + susu cair + lada + garam). Celupkan ayam ke adonan ini.</li>
      <li>Baluri dengan <strong>Tepung Roti Sakti</strong> hingga tertutup rata. Tekan sedikit supaya menempel sempurna.</li>
      <li>Goreng dengan api kecil hingga kuning keemasan dan matang sempurna.</li>
      <li>Untuk saus: Panaskan margarin, tumis bawang putih & bawang bombay hingga harum. Masukkan saus barbeque, saus tiram, kecap manis, dan saus sambal/tomat. Aduk rata hingga mendidih.</li>
      <li>Sajikan chicken katsu dengan siraman saus BBQ. Untuk ide jualan, bisa tambahkan kentang goreng.</li>
    </ol>
    
    <h3>Tips Rahasia Renyah</h3>
    <div class="bg-yellow-50 p-4 rounded-lg">
      <ul>
        <li><strong>Pakai Tepung Roti Sakti:</strong> Bikin katsu lebih renyah, warnanya cantik golden brown, dan tetap crispy meski sudah agak dingin.</li>
        <li><strong>Minyak harus cukup banyak:</strong> Supaya ayam matang merata dan crunchy.</li>
        <li><strong>Jangan sering dibolak-balik:</strong> Biarkan satu sisi matang dulu baru dibalik.</li>
      </ul>
    </div>
    
    <h2>Serving Suggestions</h2>
    <p>Chicken katsu saus BBQ cocok disajikan dengan:</p>
    <ul>
      <li>Nasi hangat</li>
      <li>Kentang goreng</li>
      <li>Sayuran rebus atau salad segar</li>
    </ul>
    
    <div class="bg-blue-50 p-4 rounded-lg">
      <p class="font-bold">Pro Chef Tip:</p>
      <p class="text-sm">Agar lebih menarik untuk ide jualan, sajikan chicken katsu dalam bento box lengkap dengan nasi, salad, dan kentang goreng.</p>
    </div>
    </div>`,
    featured_image: "/images/blog/ayam-katsu.png",
    status: "published",
    published_at: "2025-09-24T19:00:00.000000Z",
    views: 980,
    meta_title: "Resep Chicken Katsu Saus BBQ Renyah dengan Tepung Roti Sakti",
    meta_description: "Resep chicken katsu crispy ala Jepang dengan balutan Tepung Roti Sakti. Dilengkapi saus BBQ gurih manis pedas yang bikin nagih!",
    meta_keywords: "chicken katsu, resep katsu, ayam crispy, saus bbq, tepung roti sakti",
    category_id: 2,
    user_id: 3,
    created_at: "2025-09-24T18:00:00.000000Z",
    updated_at: "2025-09-24T19:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-09-24T18:30:00.000000Z",
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

  {
    id: 11,
    title: "Pompompurin Udang Keju Extra Krispi dengan Tepung Roti Sakti",
    slug: "pompompurin-udang-keju-extra-krispi-dengan-tepung-roti-sakti",
    excerpt: "Kreasikan udang keju lucu berbentuk Pompompurin yang bikin anak makin semangat makan! Rahasianya? Gunakan Tepung Roti Sakti Premium untuk hasil crispy sempurna dan gurih maksimal.",
    content: `<div class="prose max-w-none">
    <h2>Pompompurin Udang Keju</h2>
    <p>Bikin waktu makan anak makin seru dengan kreasi <strong>Pompompurin Udang Keju</strong>! Bentuknya lucu, rasanya gurih, dan pastinya <strong>extra krispi</strong> karena pakai <strong>Tepung Roti Sakti Premium</strong>.</p>

    <h3>Bahan-bahan:</h3>
    <ul>
      <li>80 gram udang kupas, cincang</li>
      <li>125 gram daging paha ayam, giling</li>
      <li>1/2 butir telur</li>
      <li>2 siung bawang putih, cincang</li>
      <li>1 helai daun bawang, iris halus</li>
      <li>2 sdm tepung tapioka</li>
      <li>1 sdm tepung terigu</li>
      <li>1 sdm saus tiram</li>
      <li>1/2 sdm minyak wijen</li>
      <li>1/4 sdt garam</li>
      <li>1/4 sdt merica bubuk</li>
    </ul>

    <h3>Baluran:</h3>
    <ul>
      <li>100 gram <strong>Tepung Roti Sakti Premium</strong></li>
      <li>1 butir telur, kocok lepas</li>
      <li>Tepung terigu secukupnya</li>
    </ul>

    <h3>Isian:</h3>
    <ul>
      <li>Keju mozzarella</li>
    </ul>

    <h3>Pelengkap:</h3>
    <ul>
      <li>Kol iris halus</li>
      <li>Wortel parut</li>
      <li>Mayones</li>
      <li>Wijen sangrai</li>
    </ul>

    <h2>Cara Membuat</h2>
    <ol>
      <li>Campurkan semua bahan utama hingga rata.</li>
      <li>Ambil sedikit adonan, pipihkan, beri isian keju mozzarella, lalu bentuk menyerupai karakter <strong>Pompompurin</strong>.</li>
      <li>Gulingkan ke tepung terigu, celupkan ke telur, lalu baluri dengan <strong>Tepung Roti Sakti Premium</strong> hingga rata.</li>
      <li>Ulangi hingga adonan habis, lalu goreng di minyak panas hingga keemasan dan matang merata.</li>
    </ol>

    <h3>Tips Extra Krispi</h3>
    <div class="bg-yellow-50 p-4 rounded-lg">
      <ul>
        <li><strong>Pakai Tepung Roti Sakti Premium:</strong> Butirannya halus dan seragam, hasil gorengan renyah merata.</li>
        <li><strong>Gunakan minyak panas merata:</strong> Agar hasilnya golden brown sempurna.</li>
        <li><strong>Jangan terlalu sering dibalik:</strong> Supaya tidak menyerap minyak berlebih.</li>
      </ul>
    </div>

    <h2>Serving Suggestions</h2>
    <p>Sajikan dengan:</p>
    <ul>
      <li>Irisan kol dan wortel</li>
      <li>Mayones atau saus favorit</li>
      <li>Taburan wijen sangrai</li>
    </ul>

    <div class="bg-blue-50 p-4 rounded-lg">
      <p class="font-bold">Mom's Favorite Tip:</p>
      <p class="text-sm">Gunakan cetakan karakter lucu agar anak makin semangat makan! Dan jangan lupa, selalu pilih <strong>Tepung Roti Sakti Premium</strong> untuk hasil crispy tahan lama.</p>
    </div>

    <p>Yuk Moms, cobain juga kreasi lucu ini di rumah dan bagikan hasilnya di Instagram. Jangan lupa tag <a href="https://www.instagram.com/sakt1_id" target="_blank">@sakt1_id</a> ya! 🧡</p>
  </div>`,
    featured_image: "/images/blog/pompompurin-udang-keju.png",
    status: "published",
    published_at: "2025-10-07T19:00:00.000000Z",
    views: 0,
    meta_title: "Resep Pompompurin Udang Keju Extra Krispi dengan Tepung Roti Sakti",
    meta_description: "Resep Pompompurin Udang Keju yang lucu dan gurih untuk anak-anak. Rahasianya? Gunakan Tepung Roti Sakti Premium agar hasilnya extra crispy dan lezat!",
    meta_keywords: "pompompurin, udang keju, resep anak, tepung roti sakti, masakan lucu, crispy",
    category_id: 2,
    user_id: 3,
    created_at: "2025-10-07T18:00:00.000000Z",
    updated_at: "2025-10-07T19:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-10-07T18:30:00.000000Z",
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

  {
    id: 12,
    title: "Crispy Pumpkin Bread dengan Tepung Roti Sakt1",
    slug: "crispy-pumpkin-bread-dengan-tepung-roti-sakt1",
    excerpt: "Coba resep roti labu kuning unik dengan lapisan luar super crispy dari Tepung Roti Sakt1 Premium! Lembut di dalam, renyah di luar, dan tampil cantik seperti labu sungguhan.",
    content: `<div class="prose max-w-none">
    <h2>Crispy Pumpkin Bread</h2>
    <p><strong>Crispy Pumpkin Bread</strong> adalah roti labu kuning lembut dengan lapisan luar yang crispy karena dibaluri <strong>Tepung Roti Sakt1 Premium</strong>. Selain tampil cantik seperti labu, rasanya juga gurih, ringan, dan bikin ketagihan!</p>

    <h3>Kenapa Pilih Tepung Roti Sakt1?</h3>
    <ul>
      <li>Kualitas premium</li>
      <li>Warna cerah dan bersih</li>
      <li>Butiran seragam</li>
      <li>Hasil gorengan lebih crispy</li>
      <li>Kering, ringan, dan bulky</li>
      <li>Tidak mudah gosong</li>
      <li>Tidak berminyak</li>
      <li>Menempel maksimal dan tidak mudah rontok</li>
    </ul>

    <p>Yuk ikutan challenge-nya dan cobain kreasi roti labu crispy yang cantik ini! 🥰🙏😍</p>

    <h3>Bahan-bahan:</h3>
    <ul>
      <li>300 gr tepung terigu protein tinggi</li>
      <li>50 gr gula</li>
      <li>30 gr susu bubuk</li>
      <li>4 gr garam</li>
      <li>120 gr labu kuning kukus, haluskan</li>
      <li>2 sdt ragi</li>
      <li>100 ml susu cair</li>
      <li>30 gr margarin</li>
      <li><strong>Tepung Roti Sakt1</strong> secukupnya untuk baluran</li>
    </ul>

    <h2>Cara Membuat</h2>
    <ol>
      <li>Aduk rata semua bahan kecuali garam dan margarin.</li>
      <li>Masukkan garam dan margarin, lalu uleni hingga kalis elastis.</li>
      <li>Bagi adonan menjadi 8 bagian (masing-masing sekitar 80 gr).</li>
      <li>Isi setiap bagian dengan keju mozzarella, tutup rapat.</li>
      <li>Ikat menggunakan benang untuk membentuk motif labu.</li>
      <li>Tutup dan diamkan hingga mengembang ±1 jam.</li>
      <li>Setelah mengembang, oles permukaan dengan kuning telur lalu baluri dengan <strong>Tepung Roti Sakt1</strong>.</li>
      <li>Goreng dengan api kecil hingga matang dan berwarna keemasan.</li>
      <li>Buka benangnya, hias dengan batang kayu manis dan daun di atasnya.</li>
    </ol>

    <h3>Tips Keemasan & Crispy Maksimal</h3>
    <div class="bg-yellow-50 p-4 rounded-lg">
      <ul>
        <li><strong>Gunakan Tepung Roti Sakt1:</strong> Supaya hasil crispy-nya ringan dan tidak berminyak.</li>
        <li><strong>Pastikan minyak cukup panas:</strong> Agar bagian luar cepat kering tanpa menyerap minyak berlebih.</li>
        <li><strong>Gunakan api kecil stabil:</strong> Supaya bagian dalam matang sempurna.</li>
      </ul>
    </div>

    <h2>Serving Suggestions</h2>
    <p>Sajikan Crispy Pumpkin Bread dengan:</p>
    <ul>
      <li>Taburan gula halus atau madu</li>
      <li>Secangkir teh hangat</li>
      <li>Atau sebagai camilan sore istimewa bersama keluarga</li>
    </ul>

    <div class="bg-blue-50 p-4 rounded-lg">
      <p class="font-bold">Fun Baking Tip:</p>
      <p class="text-sm">Untuk tampilan yang lebih menarik, tambahkan batang kayu manis di bagian atas roti setelah digoreng sebagai “tangkai” labu. Lucu banget untuk ide hampers atau jualan!</p>
    </div>

    <p>Jangan lupa, selalu gunakan <strong>Tepung Roti Sakt1 Premium</strong> untuk hasil crispy sempurna.  
    Follow juga Instagram kami di <a href="https://www.instagram.com/sakt1_id" target="_blank">@sakt1_id</a> untuk ikut challenge dan lihat kreasi lainnya! 🧡</p>
  </div>`,
    featured_image: "/images/blog/crispy-pumpkin.png",
    status: "published",
    published_at: "2025-10-07T20:00:00.000000Z",
    views: 0,
    meta_title: "Resep Crispy Pumpkin Bread dengan Tepung Roti Sakt1",
    meta_description: "Roti labu kuning lembut dengan lapisan luar crispy dari Tepung Roti Sakt1 Premium. Gurih, ringan, dan cantik — cocok untuk ide jualan atau challenge baking!",
    meta_keywords: "pumpkin bread, roti labu, tepung roti sakt1, resep roti, roti crispy, ide jualan",
    category_id: 2,
    user_id: 3,
    created_at: "2025-10-07T19:00:00.000000Z",
    updated_at: "2025-10-07T20:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-10-07T19:30:00.000000Z",
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

  {
    id: 13,
    title: "Roti Goreng Pasta Spesial Tahun Baru 2025",
    slug: "roti-goreng-pasta-spesial-tahun-baru-2025",
    excerpt: "Kreasi Roti Goreng Pasta yang lembut di dalam dan renyah di luar. Menu spesial tahun baru yang disukai anak-anak, menggunakan Tepung Roti Sakti dengan tekstur halus dan tidak mudah menggumpal.",
    content: `<div class="prose max-w-none">
    <h2>Roti Goreng Pasta Spesial Tahun Baru</h2>
    <p>Yeay.. Happy New Year 2025 🎉😇</p>
    <p>Untuk menyambut tahun baru, kami membuat hidangan spesial yang pasti disukai anak-anak dan cepat habis di meja makan — <strong>Roti Goreng Pasta</strong> 🤩.</p>
    <p>Aku senang banget membuat kreasi masakan dari <strong>Tepung Roti Sakti</strong> ini, karena tepung rotinya tidak gampang menggumpal seperti tepung roti lain. Teksturnya halus dan mudah dikreasikan untuk berbagai ide masakan.</p>

    <h3>Tentang Tepung Roti Sakti</h3>
    <p><strong>SAKTI Tepung Roti</strong> adalah tepung panir kasar yang terbuat dari roti tawar pilihan, dihaluskan dan dikeringkan dengan oven. Sangat cocok untuk aneka hidangan gorengan seperti katsu, tempura, risoles, pisang goreng, roti goreng, nugget, dan lainnya.</p>
    <p>Teksturnya halus dan mudah menempel. Untuk resep kali ini, kami membentuk roti goreng menyerupai panda — lucu dan auto rebutan! 🥰</p>

    <h3>❤️ Roti Goreng Pasta</h3>

    <h4>Bahan-bahan:</h4>
    <ul>
      <li>6 lembar roti tawar</li>
      <li>150 gr pasta spaghetti</li>
      <li>3 sdm abon ikan</li>
      <li>Sejumput oregano kering</li>
      <li>Sejumput garam</li>
      <li>2 sdm saus pasta</li>
      <li>1 sdt saus tiram</li>
      <li>1 butir telur</li>
      <li>200 gr Tepung Roti Sakti</li>
      <li>½ buah bawang bombay, iris</li>
      <li>½ buah wortel, parut</li>
      <li>1–2 siung bawang putih, iris</li>
      <li>1–2 sdm margarin</li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Patahkan dan bagi 3 bagian pasta, kemudian rebus hingga matang. Sisihkan.</li>
      <li>Lelehkan margarin di wajan, tumis bawang bombay dan bawang putih hingga sedikit layu.</li>
      <li>Masukkan pasta, wortel, saus pasta, oregano, garam, dan saus tiram. Aduk rata.</li>
      <li>Gilas roti tawar, taruh pasta di atas roti, lalu tutup dengan roti lain. Cetak membentuk panda menggunakan wadah bulat.</li>
      <li>Kocok lepas telur, celupkan roti ke dalam telur, lalu gulingkan di <strong>Tepung Roti Sakti</strong>.</li>
      <li>Goreng hingga kecokelatan dan renyah sempurna.</li>
      <li>Roti Goreng Pasta siap disajikan sebagai hidangan spesial tahun baru 🤗</li>
    </ol>
  </div>`,
    featured_image: "/images/blog/roti-goreng-pasta.png",
    status: "published",
    published_at: "2025-01-19T08:00:00.000000Z",
    views: 0,
    meta_title: "Roti Goreng Pasta Spesial Tahun Baru 2025",
    meta_description: "Kreasi Roti Goreng Pasta lembut dan renyah menggunakan Tepung Roti Sakti. Menu favorit anak-anak untuk menyambut tahun baru 2025.",
    meta_keywords: "roti goreng, pasta, tepung roti sakti, resep anak, resep tahun baru, kreasi masakan",
    category_id: 6,
    user_id: 2,
    created_at: "2025-01-19T07:00:00.000000Z",
    updated_at: "2025-01-19T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-01-19T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },

  {
    id: 14,
    title: "Tahu Fantasy Dumpling Crispy ala Sakti",
    slug: "tahu-fantasy-dumpling-crispy-ala-sakti",
    excerpt: "Kreasi Tahu Fantasy Dumpling yang crispy di luar dan lembut di dalam. Tambahan topping dumpling dan balutan Tepung Roti Sakti membuat camilan ini disukai anak-anak dan cocok juga untuk stok frozen food.",
    content: `<div class="prose max-w-none">
    <h2>Tahu Fantasy Dumpling Crispy ala Sakti</h2>
    <p>Camilan yang aku buat kali ini versi aslinya hanya menggunakan topping telur puyuh dan balutan telur saja. Tapi kali ini aku kreasikan menggunakan <strong>Tepung Roti Sakti</strong> supaya lebih crispy serta topping <strong>dumpling</strong> yang pasti disukai anak-anak.</p>
    <p>Bikinnya simpel dan bisa juga jadi stok frozen food untuk camilan cepat saji. Selamat mencoba 🥰</p>

    <h3>✨ Tahu Fantasy Dumpling ✨</h3>

    <h4>Bahan:</h4>
    <ul>
      <li>1 buah tahu sutra</li>
      <li>3 sdm bihun</li>
      <li>1 buah wortel</li>
      <li>1 batang daun bawang</li>
      <li>2 siung bawang putih</li>
      <li>1 butir telur</li>
      <li>½ sdt garam</li>
      <li>¼ sdt lada</li>
      <li>1 blok kaldu ayam</li>
      <li>Dumpling aneka rasa untuk topping</li>
    </ul>

    <h4>Bahan Pelapis:</h4>
    <ul>
      <li>5 sdm tepung terigu</li>
      <li>Secukupnya air</li>
      <li>200 gr Tepung Roti Sakti</li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Haluskan tahu, lalu campurkan parutan wortel, bihun yang sudah direbus, irisan daun bawang, telur, dan bumbu penyedap.</li>
      <li>Masukkan adonan ke dalam cetakan, beri topping dumpling, lalu kukus selama 20 menit.</li>
      <li>Keluarkan dari cetakan, baluri dengan larutan tepung terigu dan gulingkan ke <strong>Tepung Roti Sakti</strong>.</li>
      <li>Masukkan ke kulkas selama ±1 jam agar set, lalu goreng hingga kuning keemasan dan crispy sempurna.</li>
    </ol>

    <h3>Kenapa Pilih Tepung Roti Sakti?</h3>
    <div class="bg-orange-50 p-4 rounded-lg">
      <ul>
        <li>✅ Lulus uji <strong>BPOM</strong></li>
        <li>✅ Sertifikasi <strong>Halal</strong></li>
        <li>✅ Butirannya seragam dan warnanya cerah</li>
        <li>✅ Tidak mudah rontok saat digoreng</li>
        <li>✅ Hasil masakan <strong>crispy</strong> dan lembut</li>
        <li>✅ Tersedia ukuran 200 gr & 1 kg</li>
      </ul>
    </div>

    <p>Cuss cobain deh! Selain kualitas premium, harganya juga terjangkau banget — cocok untuk camilan rumahan atau ide usaha 😍</p>
  </div>`,
    featured_image: "/images/blog/tahu-fantasy-dumpling.png",
    status: "published",
    published_at: "2024-07-27T08:00:00.000000Z",
    views: 0,
    meta_title: "Tahu Fantasy Dumpling Crispy ala Sakti",
    meta_description: "Resep Tahu Fantasy Dumpling crispy di luar, lembut di dalam dengan Tepung Roti Sakti. Camilan favorit anak-anak dan cocok untuk frozen food.",
    meta_keywords: "tahu fantasy, dumpling, tepung roti sakti, frozen food, resep camilan, tahu crispy",
    category_id: 6,
    user_id: 2,
    created_at: "2024-07-27T07:00:00.000000Z",
    updated_at: "2024-07-27T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-07-27T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },

  {
    id: 15,
    title: "Korean Crispy Salmon Rice Ball (Jumeokbap)",
    slug: "korean-crispy-salmon-rice-ball-jumeokbap",
    excerpt: "Korean Crispy Salmon Rice Ball alias Jumeokbap — nasi kepal isi salmon yang dibalut Tepung Roti Sakti. Teksturnya renyah di luar, lembut di dalam, dan cocok untuk bekal atau camilan sehat anak-anak.",
    content: `<div class="prose max-w-none">
    <h2>Korean Crispy Salmon Rice Ball (Jumeokbap)</h2>
    <p>Perkenalkan kreasi super simpel tapi enak banget! Kali ini kami membuat <strong>Korean Rice Ball</strong> dengan isian ikan salmon — atau disebut juga <em>Jumeokbap</em>, nasi kepal berbentuk bulat lengkap dengan campuran protein dan sayuran.</p>
    <p>Karena anak-anak suka yang crispy dan garing, nasi ini kami baluri dengan <strong>Tepung Roti Sakti</strong>. Tepung roti terbaik dengan tekstur ringan, warna bersih, hasil crispy tahan lama, dan pastinya berkualitas premium serta halal.</p>
    <p>Menu Korean Rice Ball ini bisa dijadikan menu makan sehari-hari, cemilan, atau bekal anak sekolah. Jika ingin rasa pedas, tambahkan saus favorit — dijamin makin lezat!</p>

    <h3>✨ Korean Crispy Salmon Rice Ball ✨</h3>

    <h4>Bahan:</h4>
    <ul>
      <li>250 gr nasi putih</li>
      <li>80–100 gr ikan salmon fillet</li>
      <li>2 butir telur</li>
      <li>100 gr Tepung Roti Sakti</li>
      <li>½ sdt garam</li>
      <li>½ sdt merica</li>
      <li>2 sdm wortel cincang</li>
      <li>2–3 sdm nori cincang</li>
      <li>2 sdm daun bawang cincang</li>
      <li>65 gr mayones</li>
      <li>½ sdt gula</li>
      <li>50 gr keju melt atau mozzarella</li>
      <li>2 sdm butter atau margarin</li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Potong-potong salmon, cuci bersih, bumbui dengan garam dan merica. Tumis sebentar dengan margarin, lalu sisihkan.</li>
      <li>Cincang halus wortel, nori, dan daun bawang.</li>
      <li>Siapkan nasi, campurkan dengan salmon, nori, daun bawang, mayones, dan gula. Aduk rata.</li>
      <li>Kepal-kepal nasi menjadi bulatan-bulatan kecil hingga adonan habis.</li>
      <li>Kocok telur, celupkan bulatan nasi ke dalam telur, lalu gulingkan ke <strong>Tepung Roti Sakti</strong> hingga terbalur rata.</li>
      <li>Beri potongan keju di atasnya, kemudian panggang hingga kering dan keju meleleh.</li>
      <li>Sajikan hangat, nikmati sensasi crispy luar dan lembut dalamnya!</li>
    </ol>

    <h3>Kenapa Pakai Tepung Roti Sakti?</h3>
    <div class="bg-orange-50 p-4 rounded-lg">
      <ul>
        <li>✅ Tekstur ringan dan crispy tahan lama</li>
        <li>✅ Warna bersih dan seragam</li>
        <li>✅ Lulus uji <strong>BPOM</strong> & bersertifikat <strong>Halal</strong></li>
        <li>✅ Hasil gorengan premium, cocok untuk ide jualan</li>
      </ul>
    </div>

    <p>Korean Crispy Salmon Rice Ball ini bisa jadi pilihan sehat, praktis, dan lezat untuk keluarga tercinta ❤️</p>
  </div>`,
    featured_image: "/images/blog/korean-crispy-salmon-rice-ball.png",
    status: "published",
    published_at: "2024-07-27T08:00:00.000000Z",
    views: 0,
    meta_title: "Korean Crispy Salmon Rice Ball (Jumeokbap) dengan Tepung Roti Sakti",
    meta_description: "Kreasi Korean Rice Ball isi salmon dengan Tepung Roti Sakti. Tekstur crispy dan lembut, cocok untuk bekal, camilan, atau ide jualan sehat.",
    meta_keywords: "rice ball, jumeokbap, korean food, tepung roti sakti, salmon crispy, resep anak, bekal sehat",
    category_id: 6,
    user_id: 2,
    created_at: "2024-07-27T07:00:00.000000Z",
    updated_at: "2024-07-27T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-07-27T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },

  {
    id: 19,
    title: "Sandwich Dendeng Sapi Crispy",
    slug: "sandwich-dendeng-sapi-crispy",
    excerpt: "Kreasi pertama menggunakan Tepung Roti Sakti! Sandwich Dendeng Sapi ini punya balutan renyah berwarna keemasan, nggak mudah gosong, dan pastinya menggugah selera.",
    content: `<div class="prose max-w-none">
    <h2>Sandwich Dendeng Sapi Crispy</h2>
    <p>Ini adalah <strong>kreasi pertamaku</strong> menggunakan <strong>Tepung Roti Sakti</strong>! Aku pribadi suka banget sama hasilnya — butirannya halus, kecil-kecil, dan nggak gampang jadi gumpalan. Warna tepungnya kombinasi orange dan putih yang sama-sama lembut teksturnya. Saat digoreng, hasilnya cantik banget — kuning keemasan sempurna dan nggak mudah gosong.</p>
    <p>Yuk ganti tepung roti di rumah kamu dengan <strong>Tepung Roti Sakti</strong>, karena hasilnya premium dan pas banget buat menu usaha juga 😍</p>

    <h3>✨ Sandwich Dendeng Sapi ✨</h3>

    <h4>Bahan:</h4>
    <ul>
      <li>1 kg daging sapi</li>
      <li>Tepung Roti Sakti</li>
      <li>Roti tawar</li>
      <li>Selada</li>
    </ul>

    <h4>Bumbu Halus:</h4>
    <ul>
      <li>10 siung bawang merah</li>
      <li>5 siung bawang putih</li>
      <li>1 ruas jahe</li>
      <li>1 ruas lengkuas</li>
      <li>2 sdm ketumbar</li>
      <li>1 batang serai</li>
      <li>1 liter air kelapa</li>
      <li>3 lembar daun salam</li>
      <li>Garam secukupnya</li>
    </ul>

    <h4>Bumbu Sambal:</h4>
    <ul>
      <li>15 cabai merah keriting</li>
      <li>20 cabai rawit merah</li>
      <li>8 siung bawang merah</li>
      <li>3 lembar daun jeruk</li>
      <li>Garam, gula, dan penyedap secukupnya</li>
    </ul>

    <h4>Adonan Basah:</h4>
    <ul>
      <li>Tepung dan air secukupnya</li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Presto daging bersama bumbu halus, air kelapa, daun salam, dan serai selama ±7 menit setelah uap keluar.</li>
      <li>Potong daging, pipihkan hingga menyerupai dendeng, lalu goreng hingga kecokelatan.</li>
      <li>Rebus cabai dan bawang merah, haluskan kasar. Tumis bersama daun jeruk, lalu masukkan daging dan bumbui secukupnya.</li>
      <li>Siapkan adonan basah dari tepung dan air hingga mengental.</li>
      <li>Cetak roti tawar bulat menggunakan mangkuk. Ambil dua lembar, celupkan ke adonan basah, lalu gulingkan ke <strong>Tepung Roti Sakti</strong>.</li>
      <li>Goreng di api sedang hingga kuning keemasan.</li>
      <li>Potong dua bagian, isi dengan selada dan dendeng sapi. Sajikan hangat.</li>
    </ol>

    <h3>Kenapa Pilih Tepung Roti Sakti?</h3>
    <div class="bg-orange-50 p-4 rounded-lg">
      <ul>
        <li>✅ Butirannya halus, rata, dan nggak menggumpal</li>
        <li>✅ Warna kombinasi orange-putih tapi tetap seragam</li>
        <li>✅ Tidak mudah gosong saat digoreng</li>
        <li>✅ Hasil gorengan renyah dan berwarna kuning keemasan</li>
      </ul>
    </div>

    <p>Sandwich Dendeng Sapi ini cocok banget buat ide jualan, bekal, atau camilan keluarga — dijamin crispy dan lezat! 💛</p>
  </div>`,
    featured_image: "/images/blog/sandwich-dendeng-sapi.png",
    status: "published",
    published_at: "2024-07-11T08:00:00.000000Z",
    views: 0,
    meta_title: "Sandwich Dendeng Sapi Crispy dengan Tepung Roti Sakti",
    meta_description: "Resep Sandwich Dendeng Sapi dengan balutan Tepung Roti Sakti yang renyah dan tidak mudah gosong. Cocok untuk ide jualan atau camilan premium.",
    meta_keywords: "sandwich, dendeng sapi, tepung roti sakti, resep camilan, gorengan crispy, ide jualan",
    category_id: 6,
    user_id: 2,
    created_at: "2024-07-11T07:00:00.000000Z",
    updated_at: "2024-07-11T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-07-11T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },

  {
    id: 20,
    title: "Beef Cheese Hot Plate Crispy",
    slug: "beef-cheese-hot-plate-crispy",
    excerpt: "Beef Cheese Hot Plate — hidangan spesial tahun baru dengan kombinasi daging slice juicy, keju lumer, dan lapisan crispy dari Tepung Roti Sakti. Rasanya bikin nagih dan cocok disantap bareng keluarga!",
    content: `<div class="prose max-w-none">
    <h2>Beef Cheese Hot Plate Crispy</h2>
    <p>Tiap tahun baru agendanya pasti kumpul keluarga sambil makan-makan. Nah, yang namanya <strong>slice beef</strong> udah pasti selalu ada buat BBQ-an. Tapi tahu nggak? Slice beef juga bisa diolah jadi menu lain yang super menggugah selera seperti ini 😍</p>
    <p><strong>Beef Cheese Hot Plate</strong> — hidangan utama yang pas banget buat momen spesial bareng keluarga. Bagian luarnya crispy sempurna, dalamnya juicy dengan keju yang lumer. Bayangin deh, seenak apa!</p>
    <p>Yang bikin crispy-nya juara tentu karena aku pakai <strong>Tepung Roti Sakti</strong> — tepung roti andalan yang butirannya seragam, warnanya cerah, dan kualitasnya premium.</p>

    <h3>✨ Beef Cheese Hot Plate ✨</h3>

    <h4>Bahan 1:</h4>
    <ul>
      <li>200 gr slice beef</li>
      <li>1 bungkus keju quick melt / mozzarella</li>
      <li><em>(Isi slice beef dengan keju, lalu bekukan di freezer agar mudah dilapisi tepung)</em></li>
    </ul>

    <h4>Bahan 2 (Pelapis):</h4>
    <ul>
      <li>1 butir telur</li>
      <li>70 gr tepung bumbu serbaguna</li>
      <li>100 gr <strong>Tepung Roti Sakti</strong></li>
    </ul>

    <h4>Bahan 3 (Saus):</h4>
    <ul>
      <li>2 sdm mentega</li>
      <li>3 siung bawang putih cincang</li>
      <li>8 sdm saus barbeque</li>
      <li>1 sdm saus tiram</li>
      <li>2 sdm saus blackpepper</li>
      <li>2 sdm saus tomat</li>
      <li>3 sdm saus cabai</li>
      <li>⅕ sdt garam, kaldu bubuk, dan lada bubuk</li>
      <li>Secukupnya air</li>
    </ul>

    <h4>Bahan 4 (Pelengkap):</h4>
    <ul>
      <li>Jagung manis</li>
      <li>Wortel</li>
      <li>Buncis</li>
      <li>Kentang goreng</li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Isi slice beef dengan potongan keju, gulung rapat, lalu bekukan di freezer agar padat dan mudah dilapisi tepung.</li>
      <li>Celupkan beef ke dalam telur, gulingkan ke tepung bumbu, lalu lapisi dengan <strong>Tepung Roti Sakti</strong> hingga rata.</li>
      <li>Goreng hingga berwarna kuning keemasan dan teksturnya renyah.</li>
      <li>Panaskan mentega, tumis bawang putih hingga harum. Masukkan semua bahan saus, aduk hingga mengental.</li>
      <li>Sajikan beef crispy di hot plate bersama saus, sayuran, dan kentang goreng.</li>
    </ol>

    <h3>Kenapa Pakai Tepung Roti Sakti?</h3>
    <div class="bg-orange-50 p-4 rounded-lg">
      <ul>
        <li>✅ Butiran seragam dan halus</li>
        <li>✅ Warna cerah dan hasil gorengan keemasan</li>
        <li>✅ Tidak mudah gosong</li>
        <li>✅ Tekstur crispy yang tahan lama</li>
      </ul>
    </div>

    <p>Beef Cheese Hot Plate ini bisa banget jadi menu istimewa untuk keluarga, cocok untuk malam tahun baru atau momen kumpul bareng orang tercinta! ❤️</p>
  </div>`,
    featured_image: "/images/blog/beef-cheese-hot-plate.png",
    status: "published",
    published_at: "2024-12-30T08:00:00.000000Z",
    views: 0,
    meta_title: "Beef Cheese Hot Plate Crispy dengan Tepung Roti Sakti",
    meta_description: "Resep Beef Cheese Hot Plate dengan lapisan crispy dari Tepung Roti Sakti, daging juicy, dan keju lumer. Menu tahun baru spesial bareng keluarga!",
    meta_keywords: "beef cheese hot plate, tepung roti sakti, slice beef crispy, resep tahun baru, ide masakan keluarga, hidangan keju",
    category_id: 6,
    user_id: 2,
    created_at: "2024-12-30T07:00:00.000000Z",
    updated_at: "2024-12-30T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-12-30T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },

  {
    id: 21,
    title: "Crispy Banana Bites",
    slug: "crispy-banana-bites",
    excerpt: "Cemilan renyah khas tahun baru yang simpel tapi nikmat! Crispy Banana Bites ini punya tekstur super crunchy berkat Tepung Roti Sakti — cocok banget buat kumpul keluarga!",
    content: `<div class="prose max-w-none">
    <h2>Crispy Banana Bites</h2>
    <p>Tahun baru kemarin seperti biasa, berkumpul bersama keluarga besar di rumah. Kalo kumpul rasanya kurang lengkap kalau nggak ada cemilan. Kebetulan aku punya stok pisang, kulit pangsit, dan <strong>Tepung Roti Sakti</strong>, jadi ngide deh bikin cemilan ini ☺</p>

    <p>Untuk hasil makanan yang super crispy, aku selalu pakai <strong>Tepung Roti Sakti</strong> dari <em>@sakt1_id</em>. Tepung roti ini jadi andalan karena punya banyak keunggulan:</p>

    <div class="bg-orange-50 p-4 rounded-lg">
      <ul>
        <li>✨ Kualitas Premium dengan harga terjangkau</li>
        <li>✨ Bersertifikasi Halal MUI</li>
        <li>✨ BPOM</li>
        <li>✨ Butiran halus dan seragam</li>
        <li>✨ Renyah dan lembut</li>
        <li>✨ Cocok untuk berbagai jenis makanan</li>
      </ul>
    </div>

    <h3>✨ Resep Crispy Banana Bites ✨</h3>

    <h4>Bahan:</h4>
    <ul>
      <li>6 buah pisang raja yang sudah matang</li>
      <li>10 lembar kulit pangsit</li>
      <li>3 sdm tepung terigu</li>
      <li>1 sdm gula pasir</li>
      <li>1/4 sdt garam</li>
      <li>Secukupnya air</li>
      <li>Secukupnya <strong>Tepung Roti Sakti</strong></li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Bentuk mangkuk dari kulit lumpia seperti di video.</li>
      <li>Potong kecil pisang sesuai selera.</li>
      <li>Campur tepung terigu, gula pasir, garam, dan air hingga tercampur rata.</li>
      <li>Masukkan potongan pisang ke dalam mangkuk lumpia, lalu celupkan ke adonan tepung, dan balurkan dengan <strong>Tepung Roti Sakti</strong>.</li>
      <li>Goreng dalam minyak panas hingga berwarna keemasan dan renyah.</li>
      <li>Beri topping sesuai selera — bisa cokelat, keju, atau kental manis.</li>
    </ol>

    <p>Cemilan ini cocok banget buat nemenin kumpul keluarga di tahun baru atau sore santai di rumah. Super renyah, manisnya pas, dan pastinya bikin nagih! 💛</p>

    <p class="text-gray-500 italic mt-6">Dibuat pada 19 Januari 2025</p>
  </div>`,
    featured_image: "/images/blog/crispy-banana-bites.png",
    status: "published",
    published_at: "2025-01-19T10:00:00.000000Z",
    views: 0,
    meta_title: "Crispy Banana Bites Renyah dengan Tepung Roti Sakti",
    meta_description: "Resep Crispy Banana Bites — cemilan tahun baru yang renyah, manis, dan mudah dibuat dengan Tepung Roti Sakti. Butiran halus, hasil keemasan sempurna!",
    meta_keywords: "crispy banana bites, tepung roti sakti, cemilan renyah, resep pisang goreng, ide makanan tahun baru, snack keluarga",
    category_id: 6,
    user_id: 2,
    created_at: "2025-01-19T10:00:00.000000Z",
    updated_at: "2024-12-30T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-12-30T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },
  {
    id: 22,
    title: "Sate Bola Ayam Mozzarella Crispy",
    slug: "sate-bola-ayam-mozzarella-crispy",
    excerpt: "Bola-bola ayam renyah dengan isian keju mozzarella yang molor dan gurih. Sate Bola Ayam Mozzarella Crispy ini cocok untuk ide bekal, cemilan, atau jualan — praktis, cantik, dan super lezat!",
    content: `<div class="prose max-w-none">
    <h2>Sate Bola Ayam Mozzarella Crispy</h2>
    <p><strong>Sate Bola Ayam Mozzarella Crispy</strong> — bisa jadi ide bekal, ide cemilan, maupun ide jualan yang menarik! Bola-bola ayam ini renyah di luar dengan isian keju mozzarella yang molor dan gurih, dijamin bikin ketagihan 😋</p>
    <p>Cara membuatnya sangat mudah, bahan-bahannya pun bisa disesuaikan dengan isi kulkas masing-masing. Untuk hasil crispy sempurna, aku pakai <strong>Tepung Roti Sakti</strong> sebagai pelapisnya.</p>

    <h3>Kenapa Pakai Tepung Roti Sakti?</h3>
    <div class="bg-orange-50 p-4 rounded-lg">
      <ul>
        <li>✅ Teksturnya kering dan ringan</li>
        <li>✅ Warna stabil dan bersih</li>
        <li>✅ Butiran seragam</li>
      </ul>
    </div>

    <p>Dengan <strong>Tepung Roti Sakti</strong>, gorengan jadi cantik, menempel sempurna, dan renyah tahan lama. Produk ini mudah didapatkan di pasar, toko bahan kue, maupun marketplace seperti Shopee dan Tokopedia.</p>

    <h3>✨ Resep Sate Bola Ayam Mozzarella Crispy ✨</h3>

    <h4>Bahan:</h4>
    <ul>
      <li>200 g fillet paha ayam</li>
      <li>50 g wortel parut</li>
      <li>1 batang daun bawang, iris halus</li>
      <li>1 sdm tepung sagu</li>
      <li>1 butir telur ayam, kocok lepas</li>
      <li>1/2 sdt garam</li>
      <li>1/4 sdt lada hitam bubuk</li>
      <li>Keju mozzarella secukupnya, potong dadu</li>
      <li><strong>Tepung Roti Sakti</strong> secukupnya</li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Cincang halus fillet ayam, lalu campur dengan wortel parut, daun bawang, garam, lada, tepung sagu, dan telur kocok. Aduk hingga rata.</li>
      <li>Ambil sesendok adonan daging, isi dengan potongan keju mozzarella, lalu bentuk bulat-bulat.</li>
      <li>Balur bola-bola ayam ke dalam <strong>Tepung Roti Sakti</strong> hingga seluruh permukaan tertutup rata.</li>
      <li>Goreng dalam minyak panas hingga berwarna kuning keemasan dan matang merata. Angkat dan tiriskan.</li>
      <li>Tusuk dengan tusukan sate, lalu hias menyerupai anak ayam — gunakan jagung manis pipil untuk paruhnya dan irisan cabai merah besar untuk jenggernya.</li>
      <li>Sajikan hangat selagi crispy!</li>
    </ol>

    <p>Menu ini bisa jadi camilan lucu untuk anak-anak, bekal sekolah, atau ide jualan kekinian yang menggoda! 🧀🍢</p>

    <p class="text-gray-500 italic mt-6">Dibuat pada 28 Juli 2024</p>
  </div>`,
    featured_image: "/images/blog/sate-bola-ayam-mozzarella.png",
    status: "published",
    published_at: "2024-07-28T08:00:00.000000Z",
    views: 0,
    meta_title: "Sate Bola Ayam Mozzarella Crispy dengan Tepung Roti Sakti",
    meta_description: "Resep Sate Bola Ayam Mozzarella Crispy — bola ayam renyah dengan keju mozzarella lumer, dilapisi Tepung Roti Sakti. Cocok untuk bekal, cemilan, atau ide jualan.",
    meta_keywords: "sate bola ayam mozzarella, tepung roti sakti, resep bekal, ide jualan, cemilan renyah, bola ayam keju",
    category_id: 6,
    user_id: 2,
    created_at: "2024-07-28T07:00:00.000000Z",
    updated_at: "2024-07-28T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2024-07-28T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },
  {
    id: 23,
    title: "Corndog ala SAKTI",
    slug: "corndog-ala-sakti",
    excerpt: "Corndog renyah dengan balutan Tepung Roti SAKTI yang kriuk di luar dan lembut di dalam. Cocok untuk ide jajanan kekinian, bekal, atau camilan sore bersama keluarga!",
    content: `<div class="prose max-w-none">
    <h2>Corndog ala SAKTI</h2>
    <p><strong>Corndog ala SAKTI</strong> — jajanan kekinian yang mudah dibuat, lezat, dan pasti disukai semua usia! Dengan balutan <strong>Tepung Roti SAKTI</strong>, hasil gorengan jadi lebih renyah, berwarna keemasan, dan tidak berminyak.</p>

    <h3>Kenapa Pakai Tepung Roti SAKTI?</h3>
    <div class="bg-orange-50 p-4 rounded-lg">
      <ul>
        <li>✅ Terbuat dari roti pilihan berkualitas tinggi</li>
        <li>✅ Tekstur lebih kriuk dan renyah</li>
        <li>✅ Warna keemasan alami saat digoreng</li>
        <li>✅ Daya serap minyak rendah, hasil gorengan tidak berminyak</li>
      </ul>
    </div>

    <p>Dengan <strong>Tepung Roti SAKTI</strong>, corndog jadi cantik, renyah, dan tetap gurih meski sudah dingin. Sangat cocok untuk ide jualan, bekal anak, atau camilan di rumah!</p>

    <h3>✨ Resep Corndog ala SAKTI ✨</h3>

    <h4>Bahan-bahan:</h4>
    <ul>
      <li>4 buah sosis ayam</li>
      <li>4 buah sumpit bambu</li>
      <li>200 gr <strong>Tepung Roti SAKTI</strong></li>
      <li>800 ml minyak goreng</li>
    </ul>

    <h4>Bahan Adonan:</h4>
    <ul>
      <li>200 gr tepung terigu</li>
      <li>1 bungkus bumbu masak</li>
      <li>1 sdt ragi instan</li>
      <li>1 sdm gula pasir</li>
      <li>170 ml air hangat</li>
      <li>1 bungkus mayones (100 gr)</li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Campurkan air hangat, ragi, dan gula. Aduk hingga rata.</li>
      <li>Masukkan tepung terigu dan bumbu masak, aduk hingga adonan halus dan tercampur rata.</li>
      <li>Tutup rapat adonan dan diamkan selama ±35 menit hingga mengembang.</li>
      <li>Tusuk sosis dengan sumpit bambu, lalu lilitkan sosis ke dalam adonan hingga tertutup rata.</li>
      <li>Gulingkan ke dalam <strong>Tepung Roti SAKTI</strong> hingga terbalut sempurna.</li>
      <li>Goreng dalam minyak panas hingga berwarna kuning keemasan.</li>
      <li>Angkat dan sajikan dengan cocolan mayones atau saus favoritmu!</li>
    </ol>

    <h4>💡 Tips SAKTI:</h4>
    <ul>
      <li>Pastikan minyak cukup panas agar corndog matang merata dan tidak menyerap terlalu banyak minyak.</li>
      <li>Untuk hasil lebih renyah, tekan-tekan <strong>Tepung Roti SAKTI</strong> sedikit saat melapisi adonan.</li>
      <li>Sajikan selagi hangat agar corndog tetap crispy dan lembut di dalam.</li>
    </ul>

    <p class="text-gray-500 italic mt-6">Dibuat pada 14 Oktober 2025</p>
  </div>`,
    featured_image: "/images/blog/corndog-ala-sakti.jpg",
    status: "published",
    published_at: "2025-10-14T08:00:00.000000Z",
    views: 0,
    meta_title: "Resep Corndog ala SAKTI dengan Tepung Roti Sakti",
    meta_description: "Resep Corndog ala SAKTI — sosis renyah berbalut Tepung Roti SAKTI yang kriuk dan berwarna keemasan. Cocok untuk ide jualan, bekal, atau camilan keluarga.",
    meta_keywords: "corndog, tepung roti sakti, resep jajanan, ide jualan, camilan renyah, resep sosis goreng",
    category_id: 6,
    user_id: 2,
    created_at: "2025-10-14T07:00:00.000000Z",
    updated_at: "2025-10-14T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-10-14T07:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },
  {
    id: 24,
    title: "Kroket Kangkung ala SAKTI",
    slug: "kroket-kangkung-ala-sakti",
    excerpt: "Kroket dengan isian kangkung dan ayam cincang yang gurih dan lezat. Balutan Tepung Roti SAKTI membuat teksturnya renyah di luar dan lembut di dalam — cocok untuk ide camilan sehat atau lauk praktis!",
    content: `<div class="prose max-w-none">
    <h2>Kroket Kangkung ala SAKTI</h2>
    <p><strong>Kroket Kangkung ala SAKTI</strong> menghadirkan kombinasi sayur kangkung, ayam cincang, dan kentang yang lembut di dalam, dibalut dengan <strong>Tepung Roti SAKTI</strong> yang menjadikannya renyah dan keemasan sempurna!</p>

    <h3>Kenapa Pakai Tepung Roti SAKTI?</h3>
    <div class="bg-orange-50 p-4 rounded-lg">
      <ul>
        <li>✅ Terbuat dari roti pilihan berkualitas premium</li>
        <li>✅ Warna gorengan lebih keemasan dan menarik</li>
        <li>✅ Tekstur renyah tahan lama</li>
        <li>✅ Daya serap minyak rendah — hasil gorengan tidak berminyak</li>
      </ul>
    </div>

    <p>Dengan <strong>Tepung Roti SAKTI</strong>, kroket tampil cantik, terasa ringan, dan tetap crispy meski sudah dingin!</p>

    <h3>✨ Resep Kroket Kangkung ala SAKTI ✨</h3>

    <h4>Bahan-bahan:</h4>
    <ul>
      <li>300 gr kentang kukus, tumbuk halus</li>
      <li>100 gr kangkung, iris kasar</li>
      <li>20 gr wortel, potong dadu kecil</li>
      <li>50 gr ayam cincang</li>
      <li>3 butir telur ayam (2 untuk adonan, 1 untuk pelapis)</li>
      <li>3/4 bungkus penyedap kaldu ayam</li>
      <li>100 gr tepung terigu</li>
      <li>200 gr <strong>Tepung Roti SAKTI</strong></li>
      <li>500 ml minyak goreng</li>
    </ul>

    <h4>Cara Membuat:</h4>
    <ol>
      <li>Iris kangkung dan potong wortel bentuk dadu kecil, sisihkan.</li>
      <li>Panaskan 2 sdm minyak, tumis wortel, ayam cincang, dan kangkung hingga layu dan ayam matang. Angkat lalu sisihkan.</li>
      <li>Dalam wadah, campurkan tumisan sayur, kentang tumbuk, 2 butir telur, dan penyedap kaldu ayam. Aduk rata hingga adonan tercampur baik.</li>
      <li>Bagi adonan menjadi 12 bagian dan bentuk lonjong seperti kroket.</li>
      <li>Gulingkan kroket ke dalam tepung terigu, celupkan ke sisa 1 butir telur kocok, lalu balurkan dengan <strong>Tepung Roti SAKTI</strong> hingga terlapisi rata.</li>
      <li>Panaskan minyak goreng, goreng kroket hingga matang dan berwarna kuning keemasan.</li>
      <li>Angkat dan sajikan selagi hangat.</li>
    </ol>

    <h4>💡 Tips SAKTI:</h4>
    <ul>
      <li>Gunakan api sedang agar kroket matang merata dan tidak mudah pecah.</li>
      <li>Diamkan kroket berbalut tepung roti sekitar 10 menit sebelum digoreng untuk hasil yang lebih renyah.</li>
      <li>Nikmati dengan saus sambal, mayones, atau saus tomat sesuai selera.</li>
    </ul>

    <p class="text-gray-500 italic mt-6">Dibuat pada 14 Oktober 2025</p>
  </div>`,
    featured_image: "/images/blog/kroket-kangkung-ala-sakti.jpg",
    status: "published",
    published_at: "2025-10-14T09:00:00.000000Z",
    views: 0,
    meta_title: "Resep Kroket Kangkung ala SAKTI yang Gurih dan Renyah",
    meta_description: "Resep Kroket Kangkung ala SAKTI — kroket isi ayam dan kangkung dengan balutan Tepung Roti SAKTI yang renyah di luar, lembut di dalam. Cocok untuk camilan sehat atau lauk praktis.",
    meta_keywords: "kroket kangkung, tepung roti sakti, resep camilan sehat, ide jualan, resep kroket ayam, gorengan renyah",
    category_id: 6,
    user_id: 2,
    created_at: "2025-10-14T08:00:00.000000Z",
    updated_at: "2025-10-14T09:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-10-14T08:30:00.000000Z",
    rejection_reason: null,
    category: {
      id: 6,
      name: "Resep Sakti",
      slug: "resep-sakti",
      color: "#F97316",
      icon: "Utensils"
    },
    user: {
      id: 2,
      name: "Tim Editor Sakti",
      email: "editor@saktipangan.co.id"
    }
  },

  {
    id: 25,
    title: "Sakti Food Sukses Menyemarakkan SIAL Interfood 2025 di Jakarta",
    slug: "sakti-food-sukses-menyemarakkan-sial-interfood-2025-di-jakarta",
    excerpt: "Sakti Food (PT Sakti Pangan Perkasa) sukses berpartisipasi dalam SIAL Interfood 2025 di JIExpo Kemayoran pada 12–15 November. Booth Sakti Food menarik ratusan pengunjung lokal dan mancanegara melalui promo produk, kerja sama bisnis hingga permainan interaktif berhadiah.",
    content: `<div class="prose max-w-none">
    <h2>Sakti Food Sukses Menyemarakkan SIAL Interfood 2025</h2>
    <p>PT Sakti Pangan Perkasa (Sakti Food) menutup partisipasi empat harinya di <strong>SIAL Interfood 2025</strong>, pameran makanan dan minuman terbesar di Asia Tenggara yang diselenggarakan pada <strong>12–15 November di JIExpo Kemayoran, Jakarta</strong>, dengan penuh antusiasme dan hasil yang menggembirakan.</p>
    
    <p>Pada kesempatan istimewa ini, booth Sakti Food turut dihadiri langsung oleh Direktur PT Sakti Pangan Perkasa, <strong>Bapak Widiyarsa Aksama</strong>, yang memberikan dukungan penuh serta menyapa langsung para pengunjung, mitra bisnis, hingga buyer internasional.</p>

    <br>
    <h2>Antusiasme Pengunjung dari Dalam & Luar Negeri</h2>
    <p>SIAL Interfood tahun ini kembali menghadirkan ribuan pelaku industri dan pembeli potensial dari berbagai negara. Booth Sakti Food menjadi salah satu titik yang banyak dikunjungi, baik oleh pebisnis kuliner, pemilik bakery, UMKM, distributor, hingga pengunjung umum yang tertarik mencoba langsung produk-produk Sakti Food.</p>
    
    <p>Respons positif datang dari pengunjung dalam negeri maupun mancanegara, yang menunjukkan besarnya potensi pasar dan peluang ekspansi produk Sakti Food di masa mendatang.</p>

    <h2>Booth Interaktif dengan Hadiah Menarik</h2>
    <p>Untuk memberikan pengalaman terbaik, Sakti Food menghadirkan <strong>permainan dart board</strong> yang menjadi favorit banyak pengunjung. Berbagai hadiah menarik disiapkan, di antaranya:</p>
    
    <div class="bg-orange-50 p-4 rounded-lg my-4">
      <ul>
        <li>Kaos eksklusif Sakti Food</li>
        <li>Topi branded</li>
        <li>Celemek premium</li>
        <li>Kipas promosi</li>
        <li>Goodie bag</li>
        <li>Sample produk tepung roti 200 g</li>
        <li>Gantungan kunci</li>
      </ul>
    </div>

    <p>Pengunjung yang mem-follow Instagram Sakti Food serta membagikan pengalaman mereka melalui Instastory juga mendapatkan hadiah tambahan sebagai bentuk apresiasi atas dukungan mereka.</p>

    <h2>Produk Premium & Promo Eksklusif Selama Pameran</h2>
    <p>Sakti Food memperkenalkan dan menjual langsung produk <strong>Tepung Roti Sakti Premium</strong>, tersedia dalam kemasan:</p>
    
    <div class="grid grid-cols-3 gap-4 my-6">
      <div class="bg-blue-50 p-4 rounded-lg text-center">
        <h4 class="font-bold text-blue-800">200 g</h4>
        <p class="text-sm text-blue-600">Kemasan praktis untuk rumahan</p>
      </div>
      <div class="bg-green-50 p-4 rounded-lg text-center">
        <h4 class="font-bold text-green-800">500 g</h4>
        <p class="text-sm text-green-600">Pilihan tepat untuk UMKM</p>
      </div>
      <div class="bg-purple-50 p-4 rounded-lg text-center">
        <h4 class="font-bold text-purple-800">1 kg</h4>
        <p class="text-sm text-purple-600">Kemasan ekonomis untuk bisnis</p>
      </div>
    </div>

    <p>Selama pameran, seluruh varian produk ditawarkan dengan <strong>harga promo khusus</strong>, menjadikannya kesempatan terbaik bagi pengunjung untuk mencoba produk berkualitas dengan harga terjangkau.</p>
    
    <p>Promo ini menarik perhatian banyak pelaku bisnis kuliner yang sedang mencari mitra atau produk baru untuk meningkatkan kualitas sajian mereka.</p>

    <h2>Keunggulan Tepung Roti Sakti</h2>
    <div class="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg my-6">
      <h3 class="text-xl font-bold mb-4 text-orange-800">Mengapa Tepung Roti Sakti?</h3>
      <ul class="space-y-2">
        <li>✅ <strong>Kualitas Premium:</strong> Terbuat dari roti pilihan berkualitas tinggi</li>
        <li>✅ <strong>Tekstur Sempurna:</strong> Butiran halus dan seragam</li>
        <li>✅ <strong>Warna Cantik:</strong> Hasil gorengan kuning keemasan</li>
        <li>✅ <strong>Crispy Tahan Lama:</strong> Kerenyahan yang awet</li>
        <li>✅ <strong>Tidak Berminyak:</strong> Daya serap minyak rendah</li>
        <li>✅ <strong>Bersertifikat:</strong> Halal MUI & BPOM</li>
      </ul>
    </div>

    <h2>Komitmen Sakti Food untuk Terus Bertumbuh</h2>
    <p>Kehadiran <strong>Bapak Widiyarsa Aksama</strong> memberikan nilai lebih bagi booth Sakti Food. Beliau turut menyampaikan apresiasinya kepada seluruh tim dan menyebutkan bahwa partisipasi dalam SIAL Interfood menjadi langkah strategis untuk:</p>
    
    <div class="bg-blue-50 p-4 rounded-lg my-4">
      <ul>
        <li>🌐 Memperluas jaringan distribusi</li>
        <li>💪 Memperkuat brand awareness</li>
        <li>🤝 Membuka peluang kerja sama baru</li>
        <li>📈 Mengeksplorasi pasar ekspor</li>
      </ul>
    </div>

    <h2>Sorotan Event</h2>
    <div class="grid grid-cols-2 gap-4 my-6">
      <div class="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg">
        <h4 class="font-bold text-orange-800 mb-2">📍 Lokasi</h4>
        <p class="text-sm text-orange-600">JIExpo Kemayoran, Jakarta</p>
      </div>
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
        <h4 class="font-bold text-blue-800 mb-2">📅 Tanggal</h4>
        <p class="text-sm text-blue-600">12–15 November 2025</p>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
        <h4 class="font-bold text-green-800 mb-2">👥 Pengunjung</h4>
        <p class="text-sm text-green-600">Ratusan buyer lokal & internasional</p>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
        <h4 class="font-bold text-purple-800 mb-2">🎯 Fokus</h4>
        <p class="text-sm text-purple-600">Demo produk & networking bisnis</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg my-6 border-l-4 border-orange-500">
      <p class="font-bold text-lg text-orange-800 mb-2">💬 Testimoni Pengunjung:</p>
      <p class="italic text-orange-700">"Produk Tepung Roti Sakti sangat berkualitas! Hasil gorengan jadi lebih renyah dan tidak mudah gosong. Harga promonya juga sangat menarik untuk stok bisnis kami."</p>
      <p class="text-sm text-orange-600 mt-2">— Pengunjung SIAL Interfood 2025</p>
    </div>

    <h2>Terima Kasih</h2>
    <p>Sakti Food mengucapkan terima kasih kepada seluruh pengunjung, pelanggan, mitra bisnis, serta pihak penyelenggara SIAL Interfood 2025. Antusiasme dan dukungan selama pameran menjadi motivasi bagi Sakti Food untuk terus menghadirkan produk berkualitas bagi masyarakat Indonesia dan dunia.</p>

    <div class="bg-orange-50 p-6 rounded-lg text-center my-6">
      <h3 class="text-2xl font-bold text-orange-800 mb-2">Ikuti Kami!</h3>
      <p class="text-orange-600 mb-4">Dapatkan update terbaru, resep eksklusif, dan promo menarik dari Sakti Food</p>
      <p class="font-bold text-orange-700">
        Instagram: <a href="https://www.instagram.com/sakt1_id" target="_blank" class="underline hover:text-orange-900">@sakt1_id</a>
      </p>
    </div>

    <p class="text-center font-bold text-xl text-orange-600 mt-8">
      "Sakti Food, Sajian Kualitas Tinggi" 🧡
    </p>
  </div>`,
    featured_image: "/images/blog/sial-interfood-2025.png",
    status: "published",
    published_at: "2025-11-16T08:00:00.000000Z",
    views: 0,
    meta_title: "Sakti Food Sukses di SIAL Interfood 2025 Jakarta - Antusiasme Buyer Lokal & Internasional",
    meta_description: "PT Sakti Pangan Perkasa tampil memukau di SIAL Interfood 2025. Direktur Widiyarsa Aksama hadir langsung, booth interaktif dengan hadiah menarik, dan promo eksklusif Tepung Roti Sakti Premium.",
    meta_keywords: "sial interfood 2025, sakti food, tepung roti sakti, pameran makanan jakarta, jiexpo kemayoran, widiyarsa aksama, produk pangan premium",
    category_id: 3,
    user_id: 1,
    created_at: "2025-11-16T07:00:00.000000Z",
    updated_at: "2025-11-16T08:00:00.000000Z",
    approved_by: 1,
    approved_at: "2025-11-16T07:30:00.000000Z",
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
    "id": 26,
    "title": "Cireng Crispy Ala SAKTI",
    "slug": "cireng-crispy-ala-sakti",
    "excerpt": "Cireng renyah di luar, kenyal di dalam! Cireng Crispy Ala SAKTI ini cocok untuk camilan harian maupun ide jualan. Lebih crispy karena dilapisi Tepung Roti SAKTI.",
    "content": `<div class="prose max-w-none">
      <h2>Cireng Crispy Ala SAKTI</h2>
      <p><strong>Cireng Crispy Ala SAKTI</strong> adalah camilan sederhana yang selalu jadi favorit! Teksturnya crispy di luar namun tetap kenyal di dalam. Kuncinya ada pada penggunaan <strong>Tepung Roti SAKTI</strong> yang bikin permukaan cireng jadi lebih renyah dan cantik.</p>

      <h3>Kenapa Pakai Tepung Roti Sakti?</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li>✅ Hasil gorengan lebih renyah dan kriuk tahan lama</li>
          <li>✅ Butiran seragam sehingga melapisi cireng dengan sempurna</li>
          <li>✅ Warna gorengan lebih cantik dan stabil</li>
          <li>✅ Daya serap minyak rendah, hasil lebih ringan</li>
        </ul>
      </div>

      <p><strong>Tepung Roti SAKTI</strong> juga mudah ditemukan di toko bahan kue, pasar, maupun marketplace seperti Shopee dan Tokopedia.</p>

      <h3>✨ Resep Cireng Crispy Ala SAKTI ✨</h3>

      <h4>Bahan-bahan:</h4>
      <ul>
        <li>250 g tepung tapioka</li>
        <li>3 siung bawang putih, haluskan</li>
        <li>1 batang daun bawang, iris tipis</li>
        <li>1 sdt garam</li>
        <li>1 sdt kaldu bubuk</li>
        <li>150 ml air panas</li>
        <li>200 g <strong>Tepung Roti SAKTI</strong></li>
        <li>500 ml minyak goreng</li>
      </ul>

      <h4>Cara Membuat:</h4>
      <ol>
        <li>Campurkan tepung tapioka, bawang putih halus, daun bawang, garam, dan kaldu bubuk ke dalam wadah.</li>
        <li>Tuang air panas sedikit demi sedikit sambil diaduk hingga adonan kalis dan bisa dipulung.</li>
        <li>Bentuk adonan cireng sesuai selera, bisa pipih atau bulat.</li>
        <li>Balurkan permukaan cireng ke dalam <strong>Tepung Roti SAKTI</strong> untuk mendapatkan tekstur crispy.</li>
        <li>Panaskan minyak, lalu goreng hingga cireng berwarna kuning keemasan.</li>
        <li>Angkat, tiriskan, dan sajikan selagi panas.</li>
      </ol>

      <p>Cireng ini cocok sebagai camilan sore, teman nonton, atau bisa juga dijadikan menu jualan rumahan! 😋</p>

      <p class="text-gray-500 italic mt-6">Dibuat pada 2 Desember 2025</p>
    </div>`,
    "featured_image": "/images/blog/cireng-crispy.png",
    "status": "published",
    "published_at": "2025-12-02T08:00:00.000000Z",
    "views": 0,
    "meta_title": "Resep Cireng Crispy Ala SAKTI",
    "meta_description": "Cireng Crispy Ala SAKTI — renyah di luar, kenyal di dalam, dan lebih crispy berkat Tepung Roti SAKTI. Cocok untuk camilan atau ide jualan.",
    "meta_keywords": "cireng crispy, tepung roti sakti, resep camilan, ide jualan, cireng renyah",
    "category_id": 6,
    "user_id": 2,
    "created_at": "2025-12-02T07:00:00.000000Z",
    "updated_at": "2025-12-02T08:00:00.000000Z",
    "approved_by": 1,
    "approved_at": "2025-12-02T07:30:00.000000Z",
    "rejection_reason": null,
    "category": {
      "id": 6,
      "name": "Resep Sakti",
      "slug": "resep-sakti",
      "color": "#F97316",
      "icon": "Utensils"
    },
    "user": {
      "id": 2,
      "name": "Tim Editor Sakti",
      "email": "editor@saktipangan.co.id"
    }
  },

  {
    "id": 27,
    "title": "Potato Cheese Bomb Ala SAKTI",
    "slug": "potato-cheese-bomb-ala-sakti",
    "excerpt": "Bola-bola kentang isi keju yang lumer dan renyah di luar! Potato Cheese Bomb Ala SAKTI ini cocok untuk camilan keluarga dan ide jualan kekinian.",
    "content": `<div class="prose max-w-none">
      <h2>Potato Cheese Bomb Ala SAKTI</h2>
      <p><strong>Potato Cheese Bomb Ala SAKTI</strong> adalah camilan kekinian berupa bola-bola kentang yang lembut dengan isian keju leleh di dalamnya. Bagian luarnya super crispy berkat balutan <strong>Tepung Roti SAKTI</strong>.</p>

      <h3>Kenapa Pakai Tepung Roti Sakti?</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li>✅ Lebih crispy dan renyah tahan lama</li>
          <li>✅ Butiran seragam, membuat hasil gorengan lebih cantik</li>
          <li>✅ Warna golden yang bersih dan stabil saat digoreng</li>
          <li>✅ Daya serap minyak rendah, bikin camilan lebih ringan</li>
        </ul>
      </div>

      <p><strong>Tepung Roti SAKTI</strong> dapat dibeli di pasar, toko bahan kue, dan marketplace seperti Shopee atau Tokopedia.</p>

      <h3>✨ Resep Potato Cheese Bomb Ala SAKTI ✨</h3>

      <h4>Bahan-bahan:</h4>
      <ul>
        <li>300 g kentang, kukus dan tumbuk halus</li>
        <li>50 g keju cheddar parut</li>
        <li>Keju mozzarella secukupnya, potong dadu</li>
        <li>1 butir telur</li>
        <li>1/2 sdt garam</li>
        <li>1/4 sdt lada bubuk</li>
        <li>100 g tepung terigu</li>
        <li>1 butir telur kocok (untuk celupan)</li>
        <li>200 g <strong>Tepung Roti SAKTI</strong></li>
        <li>500 ml minyak goreng</li>
      </ul>

      <h4>Cara Membuat:</h4>
      <ol>
        <li>Campurkan kentang tumbuk dengan keju cheddar parut, telur, garam, dan lada. Aduk hingga rata.</li>
        <li>Ambil sedikit adonan, pipihkan, lalu isi dengan potongan keju mozzarella. Bentuk bulat.</li>
        <li>Gulingkan bola-bola kentang ke dalam tepung terigu.</li>
        <li>Celupkan ke dalam telur kocok.</li>
        <li>Balurkan ke dalam <strong>Tepung Roti SAKTI</strong> hingga terlapisi sempurna.</li>
        <li>Panaskan minyak, goreng hingga berwarna kuning keemasan dan crispy.</li>
        <li>Angkat dan sajikan selagi hangat agar keju tetap lumer.</li>
      </ol>

      <p>Cocok untuk ide jualan, camilan keluarga, atau bekal anak. Gurih, lumer, dan super crispy! 😋🧀</p>

      <p class="text-gray-500 italic mt-6">Dibuat pada 2 Desember 2025</p>
    </div>`,
    "featured_image": "/images/blog/potato-cheese-bomb.png",
    "status": "published",
    "published_at": "2025-12-02T08:30:00.000000Z",
    "views": 0,
    "meta_title": "Resep Potato Cheese Bomb Ala SAKTI",
    "meta_description": "Potato Cheese Bomb Ala SAKTI — bola-bola kentang isi keju lumer dengan lapisan Tepung Roti SAKTI yang super renyah. Cocok untuk camilan dan ide jualan.",
    "meta_keywords": "potato cheese bomb, kentang keju, tepung roti sakti, ide jualan, camilan crispy",
    "category_id": 6,
    "user_id": 2,
    "created_at": "2025-12-02T08:00:00.000000Z",
    "updated_at": "2025-12-02T08:30:00.000000Z",
    "approved_by": 1,
    "approved_at": "2025-12-02T08:10:00.000000Z",
    "rejection_reason": null,
    "category": {
      "id": 6,
      "name": "Resep Sakti",
      "slug": "resep-sakti",
      "color": "#F97316",
      "icon": "Utensils"
    },
    "user": {
      "id": 2,
      "name": "Tim Editor Sakti",
      "email": "editor@saktipangan.co.id"
    }
  },

  {
    "id": 28,
    "title": "Chicken Drumstick ala SAKTI Tepung Roti",
    "slug": "chicken-drumstick-ala-sakti-tepung-roti",
    "excerpt": "Chicken Drumstick ala SAKTI — olahan sayap ayam yang dibentuk seperti paha mini dengan balutan Tepung Roti SAKTI sehingga renyah, gurih, dan cantik.",
    "content": `<div class="prose max-w-none">
      <h2>Chicken Drumstick ala SAKTI</h2>
      <p><strong>Chicken Drumstick ala SAKTI</strong> adalah olahan sayap ayam yang dibentuk menyerupai paha mini. Teksturnya juicy, gurih, dan bagian luarnya super crispy berkat <strong>Tepung Roti SAKTI</strong>. Cocok untuk camilan keluarga atau ide jualan kekinian!</p>

      <h3>Kenapa Pakai Tepung Roti SAKTI?</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li>✅ Hasilkan lapisan crispy yang tebal namun tetap ringan</li>
          <li>✅ Warna golden cantik dan stabil saat digoreng</li>
          <li>✅ Menempel dengan baik pada ayam sehingga tidak mudah rontok</li>
          <li>✅ Daya serap minyak rendah membuat hasil gorengan tidak berminyak</li>
        </ul>
      </div>

      <p>Tepung Roti SAKTI mudah ditemukan di toko bahan kue, pasar tradisional, dan marketplace seperti Shopee atau Tokopedia.</p>

      <h3>✨ Bahan-Bahan:</h3>
      <ul>
        <li>1 kg ayam potong / sayap ayam</li>
        <li>Minyak goreng secukupnya</li>
        <li>3–4 g bawang putih halus</li>
        <li>10–12 g garam</li>
        <li>1–3 g lada bubuk</li>
        <li>1 g ketumbar bubuk</li>
        <li>5 g kaldu jamur</li>
        <li>Paprika bubuk (opsional)</li>
        <li>Susu bubuk (opsional)</li>
        <li>Tepung bumbu serbaguna secukupnya</li>
        <li>Air secukupnya</li>
        <li><strong>Tepung Roti SAKTI</strong> secukupnya</li>
      </ul>

      <h3>✨ Cara Memasak:</h3>
      <ol>
        <li>Cuci bersih sayap ayam kemudian potong menjadi 2 bagian.</li>
        <li><strong>Untuk Chicken Drumstick:</strong> ambil bagian sayap yang lebih banyak dagingnya, kerat urat bagian ujung, lalu dorong daging ke atas hingga menyerupai paha mini.</li>
        <li><strong>Untuk Chicken Wings:</strong> patahkan sendi tulang bagian tengah lalu luruskan bagian sayap.</li>
        <li>Marinasi semua ayam dengan bumbu bawang putih, garam, lada, ketumbar, kaldu jamur, paprika (opsional), dan susu bubuk (opsional). Diamkan lalu kukus hingga matang.</li>
        <li>Siapkan <strong>Baluran I</strong>: campuran tepung bumbu serbaguna dan air.</li>
        <li>Setelah ayam matang, celupkan ke Baluran I lalu gulingkan ke <strong>Tepung Roti SAKTI</strong> hingga terlapisi sempurna.</li>
        <li>Panaskan minyak, goreng ayam hingga berwarna kuning keemasan dan crispy.</li>
        <li>Tiriskan dan sajikan selagi hangat.</li>
      </ol>

      <p>Chicken Drumstick ala SAKTI ini cocok untuk lauk, camilan, hingga ide jualan karena tampilannya cantik dan rasanya gurih crispy! 🍗✨</p>

      <p class="text-gray-500 italic mt-6">Dibuat pada 2 Desember 2025</p>
    </div>`,
    "featured_image": "/images/blog/chicken-drumstick-ala-sakti.png",
    "status": "published",
    "published_at": "2025-12-02T09:00:00.000000Z",
    "views": 0,
    "meta_title": "Resep Chicken Drumstick Ala SAKTI",
    "meta_description": "Chicken Drumstick ala SAKTI — sayap ayam yang dibentuk seperti paha mini dengan balutan Tepung Roti SAKTI, menghasilkan tekstur crispy dan juicy.",
    "meta_keywords": "chicken drumstick, sayap ayam crispy, tepung roti sakti, resep ayam crispy, ide jualan",
    "category_id": 6,
    "user_id": 2,
    "created_at": "2025-12-02T08:50:00.000000Z",
    "updated_at": "2025-12-02T09:00:00.000000Z",
    "approved_by": 1,
    "approved_at": "2025-12-02T08:55:00.000000Z",
    "rejection_reason": null,
    "category": {
      "id": 6,
      "name": "Resep Sakti",
      "slug": "resep-sakti",
      "color": "#F97316",
      "icon": "Utensils"
    },
    "user": {
      "id": 2,
      "name": "Tim Editor Sakti",
      "email": "editor@saktipangan.co.id"
    }
  },

  {
    "id": 29,
    "title": "Potato Prawn Cheese Balls (Bola Kentang Udang Keju) Ala SAKTI",
    "slug": "tepung-roti-potato-prawn-cheese-balls-ala-sakti",
    "excerpt": "Bola kentang lembut berisi udang dan keju yang lumer! Renyah di luar berkat Tepung Roti Premium SAKTI. Cocok untuk camilan spesial ataupun ide jualan.",
    "content": `<div class="prose max-w-none">
      <h2>Potato Prawn Cheese Balls (Bola Kentang Udang Keju) Ala SAKTI</h2>
      <p><strong>Potato Prawn Cheese Balls</strong> adalah camilan premium yang memadukan lembutnya kentang, gurihnya udang, dan lumeran keju di dalamnya. Bagian luarnya super renyah berkat balutan <strong>Tepung Roti Premium SAKTI</strong>.</p>

      <h3>Kenapa Pakai Tepung Roti Premium SAKTI?</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li>✅ Hasil lebih crispy dan renyah tahan lama</li>
          <li>✅ Warna golden yang cantik dan tidak mudah gosong</li>
          <li>✅ Butiran premium, membuat tampilan lebih tebal dan crunchy</li>
          <li>✅ Daya serap minyak rendah sehingga tidak membuat empuk cepat lembek</li>
        </ul>
      </div>

      <p><strong>Tepung Roti Premium SAKTI</strong> mudah ditemukan di pasar, toko bahan kue, dan marketplace seperti Shopee & Tokopedia.</p>

      <h3>✨ Resep Potato Prawn Cheese Balls Ala SAKTI ✨</h3>

      <h4>🦐 Bahan Udang (Isi):</h4>
      <ul>
        <li>15 pcs udang kupas, sisakan ekor</li>
        <li>1/2 sdt garam</li>
        <li>1/4 sdt lada</li>
        <li>1/4 sdt garlic powder</li>
      </ul>
      <p><em>→ Bumbui udang & simpan dalam chiller.</em></p>

      <h4>🥔 Bahan Adonan Kentang:</h4>
      <ul>
        <li>500 g kentang, goreng matang & tumbuk halus</li>
        <li>1 sdt garam</li>
        <li>1 sdt kaldu bubuk</li>
        <li>1/2 sdt lada</li>
        <li>1/2 sdt garlic powder</li>
        <li>1 sdt dried parsley</li>
        <li>Keju cheddar leleh / mozzarella secukupnya (untuk isi)</li>
      </ul>

      <h4>🥚 Bahan Pelapis:</h4>
      <ul>
        <li>Tepung terigu secukupnya</li>
        <li>2 butir telur, kocok lepas + 1/2 sdt garam</li>
        <li>200 g <strong>Tepung Roti Premium SAKTI</strong></li>
      </ul>

      <h3>Cara Memasak:</h3>
      <ol>
        <li>Marinasi udang dengan garam, lada, dan garlic powder. Simpan dalam chiller.</li>
        <li>Dalam mangkuk, campur kentang tumbuk, garam, kaldu bubuk, lada, garlic powder, dan dried parsley. Aduk rata.</li>
        <li>Ambil sedikit adonan kentang, pipihkan, beri keju, dan 1 ekor udang (bagian kepala & badan masuk adonan, ekor dibiarkan di luar).</li>
        <li>Bulatkan hingga tertutup rapat dan rapi.</li>
        <li>Gulingkan bola kentang ke tepung terigu, celup ke telur kocok, lalu balurkan <strong>Tepung Roti Premium SAKTI</strong> hingga terlapisi sempurna.</li>
        <li>Panaskan minyak, goreng dengan api sedang hingga kuning keemasan dan crispy.</li>
        <li>Angkat, tiriskan, dan sajikan selagi panas agar keju tetap lumer.</li>
      </ol>

      <p>Tekstur crunchy, isi keju lumer, dan udang juicy menjadikan menu ini cocok sebagai camilan premium atau ide jualan yang menguntungkan! 😋🦐🧀</p>

      <p class="text-gray-500 italic mt-6">Dibuat pada 2 Desember 2025</p>
    </div>`,
    "featured_image": "/images/blog/potato-prawn-cheese-balls.png",
    "status": "published",
    "published_at": "2025-12-02T09:00:00.000000Z",
    "views": 0,
    "meta_title": "Potato Prawn Cheese Balls Ala SAKTI",
    "meta_description": "Potato Prawn Cheese Balls — bola kentang lembut isi udang dan keju, dilapisi Tepung Roti Premium SAKTI yang super crispy. Cocok untuk camilan mewah atau ide jualan.",
    "meta_keywords": "potato prawn cheese balls, bola kentang udang keju, tepung roti premium sakti, camilan crispy, ide jualan premium",
    "category_id": 6,
    "user_id": 2,
    "created_at": "2025-12-02T08:40:00.000000Z",
    "updated_at": "2025-12-02T09:00:00.000000Z",
    "approved_by": 1,
    "approved_at": "2025-12-02T08:45:00.000000Z",
    "rejection_reason": null,
    "category": {
      "id": 6,
      "name": "Resep Sakti",
      "slug": "resep-sakti",
      "color": "#F97316",
      "icon": "Utensils"
    },
    "user": {
      "id": 2,
      "name": "Tim Editor Sakti",
      "email": "editor@saktipangan.co.id"
    }
  },

  {
    "id": 30,
    "title": "Crispy Chicken Burger Ala SAKTI",
    "slug": "tepung-roti-crispy-chicken-burger-ala-sakti",
    "excerpt": "Crispy Chicken Burger ala SAKTI—burger lembut dengan bun empuk dan patty ayam super crispy berkat Tepung Panir SAKTI. Cocok untuk jualan premium!",
    "content": `<div class="prose max-w-none">
      <h2>Crispy Chicken Burger Ala SAKTI</h2>
      <p><strong>Crispy Chicken Burger Ala SAKTI</strong> hadir dengan bun lembut buatan sendiri dan patty ayam yang juicy di dalam namun super crispy di luar, berkat balutan <strong>Tepung Panir SAKTI</strong>. Cocok banget untuk menu jualan premium, bekal, atau hidangan spesial di rumah!</p>

      <h3>Kenapa Pakai Tepung Panir Sakti?</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li>✅ Butiran seragam, hasil gorengan lebih cantik dan premium</li>
          <li>✅ Super renyah dan tidak cepat lembek</li>
          <li>✅ Warna golden yang bersih saat digoreng</li>
          <li>✅ Lebih hemat minyak karena daya serapnya rendah</li>
        </ul>
      </div>

      <p>Tepung Panir SAKTI tersedia di pasar tradisional, toko bahan kue, dan marketplace seperti Shopee & Tokopedia.</p>

      <h3>✨ Bahan Burger Bun ✨</h3>
      <ul>
        <li>1000 g terigu double zero</li>
        <li>150 g gula pasir</li>
        <li>15 g ragi</li>
        <li>5 g improver</li>
        <li>50 g susu bubuk</li>
        <li>15 g garam</li>
        <li>2 butir telur</li>
        <li>100 g susu cair</li>
        <li>580 g air</li>
        <li>150 g margarin</li>
      </ul>

      <h4>Cara Membuat Burger Bun:</h4>
      <ol>
        <li>Masukkan terigu, gula, ragi, improver, susu bubuk, telur, susu cair, dan air. Mixer hingga setengah kalis.</li>
        <li>Masukkan margarin dan garam, mixer hingga adonan kalis elastis.</li>
        <li>Timbang adonan 35–50 gram, bulatkan, dan diamkan 10 menit.</li>
        <li>Proofing hingga hampir mengembang 2 kali lipat, lalu oles permukaan dengan campuran telur dan susu cair.</li>
        <li>Proofing kembali hingga mengembang 2 kali lipat.</li>
        <li>Panggang pada suhu 180–190°C hingga matang dan kecokelatan.</li>
      </ol>

      <h3>✨ Bahan Patty Burger ✨</h3>
      <ul>
        <li>1000 g dada ayam</li>
        <li>12 lembar roti tawar tanpa kulit</li>
        <li>100 g susu cair</li>
        <li>22 g bawang putih</li>
        <li>3 g lada bubuk</li>
        <li>15 g garam</li>
        <li>8 g kaldu jamur</li>
        <li>10 g gula pasir</li>
        <li>2 sdm minyak wijen</li>
        <li>2 butir telur</li>
        <li>100 g susu cair atau air</li>
        <li>Lada dan garam secukupnya</li>
        <li>Terigu secukupnya</li>
        <li><strong>Tepung Panir SAKTI</strong> secukupnya</li>
      </ul>

      <h4>Cara Membuat Patty Burger:</h4>
      <ol>
        <li>Campur semua bahan patty menggunakan food processor hingga halus.</li>
        <li>Timbang adonan 35–50 g, bentuk bulat.</li>
        <li>Masukkan ke freezer selama ±10 menit agar set.</li>
        <li>Celupkan ke bahan pelapis cair → balur terigu → celup kembali ke bahan pelapis.</li>
        <li>Baluri dengan <strong>Tepung Panir SAKTI</strong> lalu pipihkan.</li>
        <li>Goreng hingga matang dan berwarna golden crispy.</li>
      </ol>

      <h3>✨ Penyajian</h3>
      <p>Rakit burger dengan urutan:</p>
      <ul>
        <li>Burger bun</li>
        <li>Saus (mayonnaise, chili sauce, atau tartar)</li>
        <li>Selada & tomat</li>
        <li>Patty ayam crispy</li>
        <li>Bun penutup</li>
      </ul>

      <p>Sajikan hangat untuk hasil paling crispy dan juicy! 🍔🔥</p>

      <p class="text-gray-500 italic mt-6">Dibuat pada 2 Desember 2025</p>
    </div>`,
    "featured_image": "/images/blog/crispy-chicken-burger.png",
    "status": "published",
    "published_at": "2025-12-02T10:00:00.000000Z",
    "views": 0,
    "meta_title": "Crispy Chicken Burger Ala SAKTI – Patty Ayam Super Renyah",
    "meta_description": "Resep Crispy Chicken Burger Ala SAKTI—burger bun lembut dan patty ayam super crispy memakai Tepung Panir SAKTI. Cocok untuk jualan premium!",
    "meta_keywords": "crispy chicken burger, burger ayam crispy, tepung panir sakti, resep burger, ide jualan burger",
    "category_id": 6,
    "user_id": 2,
    "created_at": "2025-12-02T09:30:00.000000Z",
    "updated_at": "2025-12-02T10:00:00.000000Z",
    "approved_by": 1,
    "approved_at": "2025-12-02T09:45:00.000000Z",
    "rejection_reason": null,
    "category": {
      "id": 6,
      "name": "Resep Sakti",
      "slug": "resep-sakti",
      "color": "#F97316",
      "icon": "Utensils"
    },
    "user": {
      "id": 2,
      "name": "Tim Editor Sakti",
      "email": "editor@saktipangan.co.id"
    }
  },

  {
    "id": 31,
    "title": "Donat Labu Kabocha Isi Ayam Cincang Ala SAKTI",
    "slug": "tepung-roti-donat-labu-kabocha-isi-ayam-cincang-ala-sakti",
    "excerpt": "Donat lembut dari labu kabocha dengan isian ayam cincang gurih. Bisa dibuat versi crispy dengan balutan Tepung Roti SAKTI!",
    "content": `<div class="prose max-w-none">

      <h2>Donat Labu Kabocha Isi Ayam Cincang Ala SAKTI</h2>
      <p>Donat lembut dengan aroma labu kabocha yang manis alami dipadukan dengan isian ayam cincang yang gurih. Jika ingin sensasi berbeda, donat bisa dibuat <strong>crispy</strong> dengan balutan <strong>Tepung Roti SAKTI</strong>. Hasilnya unik, renyah, dan cocok untuk ide jualan!</p>

      <h3>Kenapa Pakai Tepung Roti SAKTI?</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li>✅ Tekstur crispy lebih lama</li>
          <li>✅ Warna golden cantik saat digoreng</li>
          <li>✅ Butiran seragam, bikin donat tampak premium</li>
          <li>✅ Tidak mudah gosong, cocok untuk produk manis</li>
        </ul>
      </div>

      <p>Tepung Roti SAKTI tersedia di pasar tradisional, toko bahan kue, hingga marketplace seperti Shopee dan Tokopedia.</p>

      <h3>✨ Bahan Donat Labu Kabocha ✨</h3>

      <ul>
        <li>300 gr tepung terigu protein tinggi</li>
        <li>120 gr labu kabocha kukus, haluskan (boleh pakai labu kuning)</li>
        <li>35 gr gula pasir</li>
        <li>4 gr ragi instan</li>
        <li>20 gr susu bubuk</li>
        <li>1 butir telur utuh</li>
        <li>± 50 ml susu cair dingin (bertahap, sesuaikan kadar air)</li>
        <li>35 gr mentega atau margarin</li>
        <li>4 gr garam</li>
      </ul>

      <h4>Bahan Pelapis (Opsional Crispy):</h4>
      <ul>
        <li>Air secukupnya</li>
        <li><strong>Tepung Roti SAKTI</strong></li>
      </ul>

      <h3>🍩 Cara Membuat Donat</h3>
      <ol>
        <li>Campur semua bahan kecuali mentega dan garam, uleni hingga setengah kalis.</li>
        <li>Tambahkan mentega dan garam, lanjut ulen hingga kalis elastis.</li>
        <li>Fermentasi adonan sampai mengembang 2× lipat.</li>
        <li>Kempiskan, timbang adonan, bulatkan, dan diamkan 15 menit.</li>
        <li>Bentuk donat sesuai selera dan goreng hingga golden.</li>
        <li>Jika ingin donat crispy: celupkan ke air dan gulingkan di <strong>Tepung Roti SAKTI</strong> sebelum digoreng.</li>
      </ol>

      <hr/>

      <h3>🥘 Isian Daging Ayam Cincang</h3>

      <h4>Bahan:</h4>
      <ul>
        <li>300 gr daging ayam cincang</li>
        <li>60 gr bawang bombai cincang</li>
        <li>3 siung bawang putih cincang</li>
        <li>1 sdm mentega atau minyak goreng</li>
        <li>100–200 ml air</li>
        <li>1 batang daun bawang, iris halus</li>
      </ul>

      <h4>Bumbu:</h4>
      <ul>
        <li>Garam, lada, gula pasir</li>
        <li>Kecap manis</li>
        <li>Saus tiram</li>
        <li>Kecap asin</li>
        <li>1 sdm maizena + 2 sdm air (larutkan)</li>
      </ul>

      <h4>Cara Membuat Isian:</h4>
      <ol>
        <li>Tumis bawang bombai dan bawang putih dengan mentega hingga harum.</li>
        <li>Masukkan daging ayam cincang dan masak hingga berubah warna.</li>
        <li>Tambahkan garam, lada, gula, kecap manis, saus tiram, kecap asin, dan air.</li>
        <li>Masak hingga bumbu meresap dan ayam empuk.</li>
        <li>Masukkan larutan maizena dan masak hingga mengental.</li>
        <li>Terakhir masukkan daun bawang dan matikan api.</li>
      </ol>

      <p>Isian siap digunakan untuk donat, roti goreng, atau camilan lainnya!</p>

      <p class="text-gray-500 italic mt-6">Dibuat pada 2 Desember 2025</p>
    </div>`,
    "featured_image": "/images/blog/donat-labu-kabocha.png",
    "status": "published",
    "published_at": "2025-12-02T10:00:00.000000Z",
    "views": 0,
    "meta_title": "Resep Donat Labu Kabocha Isi Ayam Cincang Ala SAKTI",
    "meta_description": "Donat Labu Kabocha isi ayam cincang dengan opsi crispy memakai Tepung Roti SAKTI. Lembut, gurih, dan cocok untuk ide jualan!",
    "meta_keywords": "donat labu, donat kabocha, donat isi ayam, resep donat, tepung roti sakti",
    "category_id": 6,
    "user_id": 2,
    "created_at": "2025-12-02T09:30:00.000000Z",
    "updated_at": "2025-12-02T10:00:00.000000Z",
    "approved_by": 1,
    "approved_at": "2025-12-02T09:45:00.000000Z",
    "rejection_reason": null,
    "category": {
      "id": 6,
      "name": "Resep Sakti",
      "slug": "resep-sakti",
      "color": "#F97316",
      "icon": "Utensils"
    },
    "user": {
      "id": 2,
      "name": "Tim Editor Sakti",
      "email": "editor@saktipangan.co.id"
    }
  },

  {
    "id": 32,
    "title": "Roti Goreng Daging Kambing Ala SAKTI",
    "slug": "tepung-roti-goreng-daging-kambing-ala-sakti",
    "excerpt": "Roti goreng empuk dengan isian daging kambing berbumbu yang gurih dan aromatik, dibalut Tepung Roti SAKTI sehingga hasilnya renyah dan cantik. Cocok untuk camilan spesial maupun ide jualan!",
    "content": `<div class="prose max-w-none">
      <h2>Roti Goreng Daging Kambing Ala SAKTI</h2>
      <p><strong>Roti Goreng Daging Kambing Ala SAKTI</strong> menghadirkan perpaduan roti lembut dengan isian daging kambing yang gurih dan wangi rempah. Bagian luarnya dilapisi <strong>Tepung Roti SAKTI</strong> sehingga menghasilkan tekstur renyah dan tampilan golden crispy yang menggugah selera.</p>

      <h3>Kenapa Pakai Tepung Roti Sakti?</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li>✅ Tekstur renyah lebih tahan lama</li>
          <li>✅ Butirannya seragam sehingga hasil gorengan lebih rapi</li>
          <li>✅ Warna cantik golden brown</li>
          <li>✅ Menyerap minyak lebih sedikit</li>
        </ul>
      </div>

      <p><strong>Tepung Roti SAKTI</strong> mudah ditemukan di pasar, toko bahan kue, dan marketplace seperti Shopee dan Tokopedia.</p>

      <h3>✨ Roti Goreng Daging Kambing Ala SAKTI ✨</h3>

      <h4>Bahan Baku:</h4>
      <ul>
        <li>200 g daging kambing</li>
        <li>3 siung bawang putih</li>
        <li>1/4 sdt merica bubuk</li>
        <li>1/2 sdt garam</li>
        <li>1 sdt gula pasir</li>
        <li>40 ml air</li>
      </ul>

      <h4>Bahan Roti:</h4>
      <ul>
        <li>250 g tepung terigu protein tinggi</li>
        <li>1 sdt ragi instan</li>
        <li>1 butir telur</li>
        <li>40 g margarin</li>
        <li>50 ml air</li>
        <li>Sejumput garam</li>
      </ul>

      <h4>Bahan Baluran:</h4>
      <ul>
        <li>3 sdm tepung terigu</li>
        <li>100 g <strong>Tepung Roti SAKTI</strong></li>
        <li>40 ml air</li>
        <li>200 ml minyak goreng</li>
      </ul>

      <h4>Cara Memasak:</h4>
      <ol>
        <li>Potong daging kambing, lalu blender hingga halus. Tambahkan garam, gula, dan merica.</li>
        <li>Tumis bawang putih hingga harum, masukkan daging yang sudah dibumbui, tambahkan sedikit air, lalu masak hingga matang. Sisihkan.</li>
        <li>Dalam wadah, campurkan tepung terigu, ragi instan, telur, dan gula. Tambahkan air sedikit demi sedikit hingga setengah kalis. Masukkan margarin dan garam, uleni hingga kalis.</li>
        <li>Tutup dan diamkan adonan hingga mengembang. Kempiskan, lalu bagi menjadi beberapa bagian.</li>
        <li>Ambil satu bagian adonan, isi dengan daging kambing, lalu tutup kembali hingga rapat.</li>
        <li>Larutkan terigu dengan sedikit air. Gulingkan roti isi ke dalam larutan terigu, kemudian balurkan ke dalam <strong>Tepung Roti SAKTI</strong> hingga terlapisi rata.</li>
        <li>Panaskan minyak, goreng roti hingga berwarna kuning kecoklatan.</li>
        <li>Angkat dan sajikan selagi hangat.</li>
      </ol>

      <p>Roti goreng ini cocok sebagai camilan keluarga atau dijadikan ide jualan premium dengan rasa khas yang berbeda dari roti goreng biasa! 😋🔥</p>

      <p class="text-gray-500 italic mt-6">Dibuat pada 2 Desember 2025</p>
    </div>`,
    "featured_image": "/images/blog/roti-goreng-daging-kambing.png",
    "status": "published",
    "published_at": "2025-12-02T10:00:00.000000Z",
    "views": 0,
    "meta_title": "Roti Goreng Daging Kambing Ala SAKTI",
    "meta_description": "Roti goreng empuk isi daging kambing berbumbu, dibalut Tepung Roti SAKTI yang golden crispy. Cocok untuk camilan spesial maupun ide jualan.",
    "meta_keywords": "roti goreng kambing, roti goreng isi daging, tepung roti sakti, resep roti goreng, ide jualan crispy",
    "category_id": 6,
    "user_id": 2,
    "created_at": "2025-12-02T09:30:00.000000Z",
    "updated_at": "2025-12-02T10:00:00.000000Z",
    "approved_by": 1,
    "approved_at": "2025-12-02T09:45:00.000000Z",
    "rejection_reason": null,
    "category": {
      "id": 6,
      "name": "Resep Sakti",
      "slug": "resep-sakti",
      "color": "#F97316",
      "icon": "Utensils"
    },
    "user": {
      "id": 2,
      "name": "Tim Editor Sakti",
      "email": "editor@saktipangan.co.id"
    }
  },

  {
    "id": 33,
    "title": "Risol Lumer Pisang Coklat Ala SAKTI",
    "slug": "risol-lumer-pisang-coklat-ala-sakti",
    "excerpt": "Risol manis berisi pisang dan cokelat yang lumer, dibalut Tepung Roti SAKTI sehingga renyah sempurna. Cocok untuk camilan dan ide jualan!",
    "content": `<div class="prose max-w-none">
      <h2>Risol Lumer Pisang Coklat Ala SAKTI</h2>
      <p><strong>Risol Lumer Pisang Coklat</strong> adalah camilan manis yang simpel namun selalu disukai semua usia. Kombinasi pisang yang lembut dengan cokelat lumer, ditambah balutan <strong>Tepung Roti SAKTI</strong> membuat teksturnya lebih renyah, cantik, dan tidak cepat lembek saat digoreng.</p>

      <h3>Kenapa Pakai Tepung Roti SAKTI?</h3>
      <div class="bg-orange-50 p-4 rounded-lg">
        <ul>
          <li>✅ Hasil gorengan lebih renyah dan tahan lama</li>
          <li>✅ Warna golden cantik dan tidak mudah gosong</li>
          <li>✅ Butiran seragam sehingga menempel sempurna pada kulit risol</li>
          <li>✅ Daya serap minyak rendah — tekstur lebih ringan dan tidak berminyak</li>
        </ul>
      </div>

      <h3>✨ Resep Risol Lumer Pisang Coklat ✨</h3>

      <h4>Bahan-bahan:</h4>
      <ul>
        <li>2 buah pisang (pilih yang manis)</li>
        <li>5 lembar kulit risol</li>
        <li>Selai cokelat secukupnya</li>
        <li>1 butir telur ayam (kocok)</li>
        <li><strong>Tepung Roti SAKTI</strong> secukupnya</li>
        <li>Minyak goreng secukupnya</li>
      </ul>

      <h4>Cara Memasak:</h4>
      <ol>
        <li>Potong pisang memanjang atau tipis sesuai selera.</li>
        <li>Letakkan potongan pisang dan selai cokelat di atas kulit risol.</li>
        <li>Lipat dan gulung kulit risol hingga tertutup rapat.</li>
        <li>Celupkan risol ke dalam telur kocok.</li>
        <li>Balurkan risol ke dalam <strong>Tepung Roti SAKTI</strong> hingga seluruh permukaan terlapisi rata.</li>
        <li>Goreng dengan api kecil hingga kuning keemasan. Angkat dan tiriskan.</li>
      </ol>

      <p>Risol manis ini enak disajikan hangat agar cokelatnya tetap lumer. Cocok untuk camilan sore atau dijadikan ide jualan kekinian!</p>

      <p class="text-gray-500 italic mt-6">Dibuat pada 2 Desember 2025</p>
    </div>`,
    "featured_image": "/images/blog/risol-pisang-coklat.png",
    "status": "published",
    "published_at": "2025-12-02T09:15:00.000000Z",
    "views": 0,
    "meta_title": "Resep Risol Lumer Pisang Coklat Ala SAKTI",
    "meta_description": "Risol pisang coklat dengan Tepung Roti SAKTI — renyah di luar, cokelat lumer di dalam. Cocok sebagai camilan dan ide jualan.",
    "meta_keywords": "risol pisang coklat, risol manis, tepung roti sakti, camilan renyah, ide jualan dessert",
    "category_id": 6,
    "user_id": 2,
    "created_at": "2025-12-02T09:00:00.000000Z",
    "updated_at": "2025-12-02T09:15:00.000000Z",
    "approved_by": 1,
    "approved_at": "2025-12-02T09:05:00.000000Z",
    "rejection_reason": null,
    "category": {
      "id": 6,
      "name": "Resep Sakti",
      "slug": "resep-sakti",
      "color": "#F97316",
      "icon": "Utensils"
    },
    "user": {
      "id": 2,
      "name": "Tim Editor Sakti",
      "email": "editor@saktipangan.co.id"
    }
  },

  {
    id: 34,
    title: "Tepung Roti - SaktiFood",
    slug: "tepung-roti",
    excerpt: "Tepung roti atau breadcrumbs merupakan bahan pelapis makanan yang dibuat dari roti kering yang dihaluskan. Tepung Roti SaktiFood hadir untuk menciptakan sajian krispi penuh kreasi.",
    content: `<div class="prose max-w-none">

    <h2>Apa Itu Tepung Roti?</h2>
    <p>
      Tepung roti atau <em>breadcrumbs</em> (tepung panir) adalah bahan pelapis luar makanan yang dibuat dari roti kering yang dihaluskan. Tepung ini digunakan untuk memberikan tekstur renyah dan tampilan menarik pada berbagai jenis olahan makanan.
    </p>

    <p>
      Tepung roti banyak digunakan untuk kebutuhan rumah tangga maupun usaha kuliner karena mampu menghasilkan lapisan gorengan yang merata dan konsisten.
    </p>

    <h2>Tepung Roti SaktiFood</h2>
    <p>
      Sakti Tepung Roti telah menjadi andalan keluarga dan pelaku UKM di Indonesia sejak tahun 2020. Produk ini dibuat dari roti kering berkualitas yang diolah menjadi butiran halus dan seragam.
    </p>

    <p class="font-bold text-orange-600">
      #SajianKrispiPenuhKreasi
    </p>

    <h2>Tepung Roti Sakti (Premium Product)</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">

      <a href="https://saktipangan.co.id/products/sakti-200g"
         class="block bg-blue-50 p-4 rounded-lg text-center hover:shadow-lg transition">
        <h4 class="font-bold text-blue-800">200 g</h4>
        <p class="text-sm text-blue-600">Kemasan praktis untuk rumahan</p>
      </a>

      <a href="https://saktipangan.co.id/products/sakti-500g"
         class="block bg-green-50 p-4 rounded-lg text-center hover:shadow-lg transition">
        <h4 class="font-bold text-green-800">500 g</h4>
        <p class="text-sm text-green-600">Pilihan tepat untuk UMKM</p>
      </a>

      <a href="https://saktipangan.co.id/products/sakti-1kg"
         class="block bg-purple-50 p-4 rounded-lg text-center hover:shadow-lg transition">
        <h4 class="font-bold text-purple-800">1 kg</h4>
        <p class="text-sm text-purple-600">Kemasan ekonomis untuk bisnis</p>
      </a>

    </div>

    <h2>Varian Tepung Roti SaktiFood Kemasan 10 Kg</h2>
    <div class="bg-orange-50 p-4 rounded-lg my-4">
      <ul class="space-y-1">
        <li>
          <a href="https://saktipangan.co.id/products/laskar-10kg" class="hover:text-orange-600 transition">
            Tepung Roti Laskar – 10 kg
          </a>
        </li>
        <li>
          <a href="https://saktipangan.co.id/products/akstar-10kg" class="hover:text-orange-600 transition">
            Tepung Roti AK Star – 10 kg
          </a>
        </li>
        <li>
          <a href="https://saktipangan.co.id/products/agni-10kg" class="hover:text-orange-600 transition">
            Tepung Roti Agni – 10 kg
          </a>
        </li>
        <li>
          <a href="https://saktipangan.co.id/products/pita-10kg" class="hover:text-orange-600 transition">
            Tepung Roti PITA – 10 kg
          </a>
        </li>
        <li>
          <a href="https://saktipangan.co.id/products/fryfest-10kg" class="hover:text-orange-600 transition">
            Tepung Roti FryFest – 10 kg
          </a>
        </li>
        <li>
          <a href="https://saktipangan.co.id/products/7daun-10kg" class="hover:text-orange-600 transition">
            Tepung Roti 7Daun – 10 kg
          </a>
        </li>
      </ul>
    </div>

  </div>`,
    featured_image: "/images/tepung-roti-sakti.png",
    status: "published",
    published_at: "2025-12-23T08:00:00.000000Z",
    views: 0,
    meta_title: "Tepung Roti - SaktiFood",
    meta_description: "Tepung roti atau breadcrumbs berkualitas untuk pelapis makanan. Tersedia berbagai varian dan ukuran kemasan Tepung Roti SaktiFood.",
    meta_keywords: "tepung roti, breadcrumbs, tepung panir, tepung roti saktifood",
    category_id: 1,
    user_id: 1,
    category: {
      id: 1,
      name: "Sakti News",
      slug: "company-news",
      color: "#3B82F6"
    }
  },
  {
    id: 35,
    title: "Tepung Roti: Tips & Trik Menggunakan Tepung Roti Agar Gorengan Lebih Krispi",
    slug: "tepung-roti-tips-trik-krispi",
    excerpt: "Ingin gorengan dengan lapisan tepung roti yang super krispi dan tahan lama? Simak tips dan trik menggunakan Tepung Roti SaktiFood untuk hasil maksimal. Panduan lengkap cara pakai tepung roti yang benar.",
    content: `<div class="prose max-w-none">

    <h2>Rahasia Gorengan Krispi dengan Tepung Roti</h2>
    <p>
      <strong>Tepung roti</strong> atau <em>breadcrumbs</em> adalah kunci untuk mendapatkan tekstur gorengan yang renyah dan krispi. <strong>Tepung roti</strong> digunakan sebagai pelapis makanan yang memberikan tekstur crunchy pada ayam goreng, udang, nugget, dan berbagai gorengan lainnya. Namun, tidak semua orang tahu cara menggunakan <strong>tepung roti</strong> dengan benar. Artikel ini akan membahas tips dan trik agar hasil gorengan dengan <strong>Tepung Roti SaktiFood</strong> selalu sempurna.
    </p>

    <h2>5 Tips Utama Menggunakan Tepung Roti untuk Hasil Maksimal</h2>
    
    <div class="bg-blue-50 p-5 rounded-lg my-4 border-l-4 border-blue-500">
      <h3 class="text-blue-800 font-bold mb-2">1. Keringkan Bahan Sebelum Dibaluri Tepung Roti</h3>
      <p>
        Pastikan bahan makanan (ayam, ikan, udang, dll) dalam keadaan kering sebelum dibaluri <strong>tepung roti</strong>. Air berlebih akan membuat <strong>tepung roti</strong> tidak menempel dengan sempurna dan mudah rontok saat digoreng.
      </p>
      <p class="text-sm italic mt-2">
        💡 Tips: Gunakan tisu dapur untuk mengeringkan permukaan bahan makanan sebelum menggunakan <strong>tepung roti</strong>.
      </p>
    </div>

    <div class="bg-green-50 p-5 rounded-lg my-4 border-l-4 border-green-500">
      <h3 class="text-green-800 font-bold mb-2">2. Gunakan Teknik Pelapisan Bertahap dengan Tepung Roti</h3>
      <p>
        Untuk hasil yang lebih krispi dan tebal, gunakan teknik pelapisan 3 tahap dengan <strong>tepung roti</strong>:
      </p>
      <ol class="list-decimal list-inside mt-2 space-y-1">
        <li>Baluri dengan tepung terigu/maizena</li>
        <li>Celupkan ke dalam kocokan telur</li>
        <li>Gulingkan dalam <strong>Tepung Roti SaktiFood</strong> hingga merata</li>
      </ol>
      <p class="text-sm italic mt-2">
        💡 Tips: Untuk lapisan <strong>tepung roti</strong> ekstra tebal, ulangi tahap 2 dan 3 satu kali lagi.
      </p>
    </div>

    <div class="bg-orange-50 p-5 rounded-lg my-4 border-l-4 border-orange-500">
      <h3 class="text-orange-800 font-bold mb-2">3. Tekan Tepung Roti Agar Menempel Kuat</h3>
      <p>
        Setelah menggulingkan bahan dalam <strong>tepung roti</strong>, tekan-tekan perlahan dengan tangan agar <strong>tepung roti</strong> menempel lebih kuat. Jangan hanya ditaburi atau digulingkan saja.
      </p>
      <p class="text-sm italic mt-2">
        💡 Tips: Diamkan selama 5-10 menit di kulkas setelah dibaluri <strong>tepung roti</strong> agar lapisan lebih kuat.
      </p>
    </div>

    <div class="bg-purple-50 p-5 rounded-lg my-4 border-l-4 border-purple-500">
      <h3 class="text-purple-800 font-bold mb-2">4. Pastikan Minyak Benar-Benar Panas Saat Menggoreng Tepung Roti</h3>
      <p>
        Goreng dalam minyak yang sudah benar-benar panas (sekitar 170-180°C). Minyak yang kurang panas akan membuat <strong>tepung roti</strong> menyerap terlalu banyak minyak dan menjadi lembek, tidak krispi.
      </p>
      <p class="text-sm italic mt-2">
        💡 Tips: Test dengan memasukkan sedikit <strong>tepung roti</strong>. Jika langsung mengapung dan berbunyi, minyak sudah siap.
      </p>
    </div>

    <div class="bg-pink-50 p-5 rounded-lg my-4 border-l-4 border-pink-500">
      <h3 class="text-pink-800 font-bold mb-2">5. Tiriskan Gorengan Tepung Roti dengan Benar</h3>
      <p>
        Setelah digoreng, tiriskan gorengan <strong>tepung roti</strong> dalam posisi berdiri atau gunakan rak kawat agar minyak benar-benar menetes. Jangan langsung ditumpuk atau ditaruh di atas tisu, karena akan membuat bagian bawah menjadi lembab dan <strong>tepung roti</strong> tidak krispi lagi.
      </p>
      <p class="text-sm italic mt-2">
        💡 Tips: Tiriskan di rak kawat selama 2-3 menit agar <strong>tepung roti</strong> tetap krispi.
      </p>
    </div>

    <h2>Kreasi Menu Lezat dengan Tepung Roti SaktiFood</h2>
    <p>
      <strong>Tepung roti</strong> bisa digunakan untuk berbagai kreasi menu yang lezat dan krispi. Berikut inspirasi resep yang bisa Anda coba:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      
      <a href="https://www.instagram.com/p/DGsXgUupOEr/" target="_blank" class="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg hover:shadow-lg transition">
        <h4 class="font-bold text-orange-700 mb-2">🍔 Risoles Cheese Burger</h4>
        <p class="text-sm">Risoles dengan isian cheese burger yang dibalut <strong>tepung roti</strong> krispi</p>
        <p class="text-xs text-orange-600 mt-2">👉 Lihat resep lengkap di Instagram</p>
      </a>

      <a href="https://www.instagram.com/p/C8lORTkSE6F/" target="_blank" class="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg hover:shadow-lg transition">
        <h4 class="font-bold text-orange-700 mb-2">🥕 Kroket Wortel</h4>
        <p class="text-sm">Kroket wortel sehat dengan lapisan <strong>tepung roti</strong> yang renyah</p>
        <p class="text-xs text-orange-600 mt-2">👉 Lihat resep lengkap di Instagram</p>
      </a>

      <a href="https://www.instagram.com/p/DOlCtsnEqMy/" target="_blank" class="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-lg hover:shadow-lg transition">
        <h4 class="font-bold text-amber-700 mb-2">🍌 Sate Pisang Crispy</h4>
        <p class="text-sm">Sate pisang dengan balutan <strong>tepung roti</strong> yang krispi dan manis</p>
        <p class="text-xs text-amber-600 mt-2">👉 Lihat resep lengkap di Instagram</p>
      </a>

      <a href="https://www.instagram.com/p/DKomgyUpHF4/" target="_blank" class="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg hover:shadow-lg transition">
        <h4 class="font-bold text-red-700 mb-2">🥩 Crispy Beef Patty</h4>
        <p class="text-sm">Beef patty crispy dengan <strong>tepung roti</strong> yang gurih dan renyah</p>
        <p class="text-xs text-red-600 mt-2">👉 Lihat resep lengkap di Instagram</p>
      </a>

      <a href="https://www.instagram.com/p/CpF7CN0vlSM/" target="_blank" class="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg hover:shadow-lg transition">
        <h4 class="font-bold text-blue-700 mb-2">🦐 Udang Crispy SAKTI</h4>
        <p class="text-sm">Udang jumbo dengan balutan <strong>Tepung Roti SAKTI</strong> yang super krispi</p>
        <p class="text-xs text-blue-600 mt-2">👉 Lihat resep lengkap di Instagram</p>
      </a>

      <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
        <h4 class="font-bold text-purple-700 mb-2">✨ Dan masih banyak lagi!</h4>
        <p class="text-sm">Eksplorasi kreasi <strong>tepung roti</strong> lainnya untuk berbagai menu favorit</p>
      </div>

    </div>

    <h2>Kesalahan yang Harus Dihindari Saat Menggunakan Tepung Roti</h2>
    <div class="bg-red-50 p-5 rounded-lg my-4">
      <ul class="space-y-3">
        <li class="flex items-start">
          <span class="text-red-600 font-bold mr-2">✗</span>
          <span><strong>Bahan terlalu basah</strong> - Akan membuat <strong>tepung roti</strong> mudah rontok</span>
        </li>
        <li class="flex items-start">
          <span class="text-red-600 font-bold mr-2">✗</span>
          <span><strong>Minyak kurang panas</strong> - <strong>Tepung roti</strong> jadi berminyak dan lembek</span>
        </li>
        <li class="flex items-start">
          <span class="text-red-600 font-bold mr-2">✗</span>
          <span><strong>Terlalu banyak bahan sekali goreng</strong> - Suhu minyak turun, <strong>tepung roti</strong> tidak krispi</span>
        </li>
        <li class="flex items-start">
          <span class="text-red-600 font-bold mr-2">✗</span>
          <span><strong>Langsung ditumpuk setelah goreng</strong> - Uap panas membuat <strong>tepung roti</strong> tidak krispi</span>
        </li>
      </ul>
    </div>

    <h2>Gunakan Tepung Roti SAKTI untuk Hasil Terbaik</h2>
    <p>
      Untuk mendapatkan hasil gorengan yang maksimal, pastikan Anda menggunakan <strong>Tepung Roti SAKTI</strong> dari SaktiFood. Tepung Roti SAKTI adalah produk premium yang telah terbukti menghasilkan lapisan krispi yang tahan lama dan tidak mudah melempem.
    </p>

    <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg my-6 border-2 border-orange-300">
      <h3 class="text-orange-800 font-bold mb-3 text-lg">✨ Keunggulan Tepung Roti SAKTI</h3>
      <ul class="space-y-2">
        <li class="flex items-start">
          <span class="text-orange-600 font-bold mr-2">✓</span>
          <span>Butiran halus dan seragam untuk hasil yang merata</span>
        </li>
        <li class="flex items-start">
          <span class="text-orange-600 font-bold mr-2">✓</span>
          <span>Krispi lebih tahan lama, tidak cepat melempem</span>
        </li>
        <li class="flex items-start">
          <span class="text-orange-600 font-bold mr-2">✓</span>
          <span>Daya serap minyak rendah, gorengan tidak berminyak</span>
        </li>
        <li class="flex items-start">
          <span class="text-orange-600 font-bold mr-2">✓</span>
          <span>Tersedia dalam berbagai ukuran kemasan (200g, 500g, 1kg)</span>
        </li>
      </ul>
    </div>

    <h2>Pilih Varian Tepung Roti SaktiFood Sesuai Kebutuhan</h2>
    <p>
      Selain Tepung Roti SAKTI, SaktiFood juga menyediakan berbagai varian lainnya untuk berbagai kebutuhan:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div class="bg-white p-4 rounded-lg shadow-md border-2 border-orange-300">
        <h4 class="font-bold text-orange-800 mb-2">🏆 SAKTI (Premium)</h4>
        <p class="text-sm text-gray-600 mb-3">200 g - 1 kg</p>
        <p class="text-xs">Kualitas terbaik untuk hasil maksimal</p>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h4 class="font-bold text-gray-800 mb-2">Varian Lainnya</h4>
        <p class="text-sm text-gray-600 mb-3">10 kg</p>
        <p class="text-xs">Laskar, AK Star, Agni, PITA, FryFest, 7Daun</p>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h4 class="font-bold text-gray-800 mb-2">Untuk UMKM</h4>
        <p class="text-sm text-gray-600 mb-3">Kemasan besar</p>
        <p class="text-xs">Ekonomis untuk usaha kuliner</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg my-6 text-center">
      <p class="text-lg font-bold text-orange-800 mb-2">
        #SajianKrispiPenuhKreasi
      </p>
      <p class="text-sm text-orange-700">
        Dengan <strong>Tepung Roti SaktiFood</strong>, setiap gorengan jadi istimewa! Pilih <strong>Tepung Roti SAKTI</strong> untuk hasil terbaik yang krispi dan tahan lama.
      </p>
    </div>

  </div>`,
    featured_image: "/images/blog/resep-tepung-roti.png",
    status: "published",
    published_at: "2026-08-18T10:00:00.000000Z",
    views: 0,
    meta_title: "Tepung Roti: Tips Menggunakan Tepung Roti Agar Gorengan Krispi - SaktiFood",
    meta_description: "Panduan lengkap cara menggunakan tepung roti yang benar agar gorengan super krispi dan tahan lama. Tips tepung roti dari ahli. Gunakan Tepung Roti SAKTI untuk hasil terbaik!",
    meta_keywords: "tepung roti, cara pakai tepung roti, tips tepung roti, gorengan krispi, tepung panir, breadcrumbs, tepung roti sakti, saktifood, tepung roti saktifood, cara menggunakan tepung roti",
    category_id: 1,
    user_id: 1,
    category: {
      id: 1,
      name: "Sakti News",
      slug: "company-news",
      color: "#3B82F6"
    }
  }


  // {
  //   id: 20,
  //   title: "Lowongan Kerja: Staff IT di Sakti Pangan",
  //   slug: "lowongan-kerja-operator-produksi-sakti-pangan",
  //   excerpt: "Bergabunglah dengan tim PT. Sakti Pangan Perkasa! Kami membuka kesempatan karir untuk posisi Staff IT dengan benefit menarik dan lingkungan kerja yang suportif.",
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

export const generateDummyBlogResponse = (params: any = {}) => {
  const allBlogs = generateDummyBlogs();
  let filteredBlogs = [...allBlogs];

  // Filter berdasarkan category
  if (params.category) {
    filteredBlogs = filteredBlogs.filter(blog =>
      blog.category.slug === params.category
    );
  }

  // Filter berdasarkan search
  if (params.search) {
    const searchTerm = params.search.toLowerCase();
    filteredBlogs = filteredBlogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.excerpt.toLowerCase().includes(searchTerm)
    );
  }

  // ✅ SORTING - Dilakukan SEBELUM pagination
  const sortField = params.sort || 'published_at';
  const sortOrder = params.order || 'desc';

  filteredBlogs.sort((a, b) => {
    let valueA: any, valueB: any;

    if (sortField === 'published_at' || sortField === 'created_at') {
      valueA = new Date(a.published_at).getTime();
      valueB = new Date(b.published_at).getTime();
    } else if (sortField === 'views') {
      valueA = a.views || 0;
      valueB = b.views || 0;
    } else if (sortField === 'title') {
      valueA = a.title.toLowerCase();
      valueB = b.title.toLowerCase();
    } else {
      // Fallback untuk field lainnya
      valueA = a.published_at;
      valueB = b.published_at;
    }

    // Sort logic
    if (sortOrder === 'asc') {
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    } else {
      return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
    }
  });

  // Pagination - SETELAH sorting
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
