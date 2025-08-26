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
    title: "Ayam Katsu Crispy dengan Breadcrumb Special",
    slug: "ayam-katsu-crispy-dengan-breadcrumb-special",
    excerpt: "Resep ayam katsu dengan coating breadcrumb yang extra crispy dan bumbu rahasia yang membuatnya semakin lezat. Ikuti langkah-langkah mudah untuk membuat hidangan favorit keluarga ini.",
    content: `<div class="prose max-w-none">
      <h2>Bahan-bahan yang Dibutuhkan</h2>
      <p>Ayam katsu adalah hidangan yang sangat digemari karena teksturnya yang crispy di luar dan juicy di dalam. Dengan menggunakan Tepung Roti Sakti, Anda bisa mendapatkan hasil yang sempurna setiap kali memasak.</p>
      
      <h3>Bahan Utama:</h3>
      <ul>
        <li>500g fillet ayam, potong sesuai selera</li>
        <li>200g Tepung Roti Sakti</li>
        <li>2 butir telur, kocok lepas</li>
        <li>100g tepung terigu</li>
      </ul>
      
      <h3>Bumbu Marinasi:</h3>
      <ul>
        <li>1 sdt garam</li>
        <li>1/2 sdt merica bubuk</li>
        <li>1 sdt bawang putih bubuk</li>
        <li>1 sdt kaldu ayam bubuk</li>
      </ul>
      
      <h2>Cara Membuat</h2>
      <p>Resep ini telah diuji dan disempurnakan oleh Chef Maria untuk memberikan hasil terbaik. Kunci utamanya adalah pada teknik coating dan suhu minyak yang tepat.</p>
      
      <ol>
        <li>Marinasi ayam dengan bumbu marinasi selama minimal 30 menit</li>
        <li>Siapkan tiga wadah: tepung terigu, telur kocok, dan Tepung Roti Sakti</li>
        <li>Celupkan ayam ke tepung terigu, lalu telur, terakhir ke tepung roti</li>
        <li>Goreng dalam minyak panas hingga golden brown dan crispy</li>
        <li>Angkat dan tiriskan, sajikan dengan saus favorit Anda</li>
      </ol>
      
      <p><strong>Tips:</strong> Pastikan minyak benar-benar panas sebelum menggoreng untuk hasil yang maksimal crispy.</p>
    </div>`,
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
    content: `<div class="prose max-w-none">
      <h2>Rahasia Fish & Chips Restoran Quality</h2>
      <p>Fish & chips adalah hidangan klasik yang selalu menjadi favorit. Dengan Tepung Bumbu Sakti, Anda bisa membuat fish & chips yang tidak kalah enak dengan yang dijual di restoran mewah.</p>
      
      <h3>Bahan untuk Fish:</h3>
      <ul>
        <li>500g ikan dori fillet</li>
        <li>200g Tepung Bumbu Serbaguna Sakti</li>
        <li>200ml air es</li>
        <li>1 butir telur</li>
      </ul>
      
      <h3>Untuk Chips:</h3>
      <ul>
        <li>4 buah kentang ukuran besar</li>
        <li>Garam secukupnya</li>
        <li>Minyak untuk menggoreng</li>
      </ul>
      
      <h2>Langkah Pembuatan</h2>
      <p>Kunci utamanya adalah pada teknik coating dan suhu minyak yang tepat. Pastikan adonan tepung tidak terlalu kental agar hasil coating ringan dan crispy.</p>
      
      <ol>
        <li>Potong kentang memanjang, rendam dalam air garam 30 menit</li>
        <li>Campurkan Tepung Bumbu Sakti dengan air es dan telur hingga smooth</li>
        <li>Celupkan ikan ke adonan tepung, goreng hingga golden</li>
        <li>Goreng kentang hingga crispy dan golden</li>
        <li>Sajikan dengan saus tartar dan lemon</li>
      </ol>
      
      <h3>Saus Tartar Homemade</h3>
      <p>Campurkan mayones, pickle cincang, bawang bombay cincang halus, dan perasan lemon. Aduk rata dan dinginkan sebelum disajikan.</p>
    </div>`,
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
    content: `<div class="prose max-w-none">
      <h2>Wawancara Eksklusif dengan Chef Maria</h2>
      <p>Chef Maria, salah satu chef terbaik di Indonesia, membagikan resep rahasia ayam katsu crispy yang telah menjadi signature dish di berbagai restoran. Dengan menggunakan Tepung Roti Sakti, hasil yang didapat selalu konsisten dan memuaskan.</p>
      
      <blockquote class="border-l-4 border-orange-500 pl-4 italic">
        "Rahasia ayam katsu yang sempurna bukan hanya pada bahan, tapi juga teknik. Tepung Roti Sakti memberikan tekstur yang konsisten dan tahan lama crispy-nya." - Chef Maria
      </blockquote>
      
      <h3>Tips dari Chef Maria</h3>
      <ol>
        <li><strong>Marinasi yang Tepat:</strong> Jangan hanya mengandalkan bumbu luar, marinasi ayam minimal 2 jam</li>
        <li><strong>Teknik Double Coating:</strong> Celupkan ayam dua kali ke dalam tepung roti untuk hasil extra crispy</li>
        <li><strong>Suhu Minyak:</strong> Pastikan suhu minyak 170-180°C, tidak lebih tidak kurang</li>
        <li><strong>Waktu Istirahat:</strong> Setelah di-coating, diamkan 15 menit sebelum digoreng</li>
      </ol>
      
      <h2>Variasi Kreasi Chef Maria</h2>
      <p>Chef Maria juga berbagi beberapa variasi yang bisa dicoba di rumah:</p>
      
      <h3>Ayam Katsu Keju</h3>
      <p>Tambahkan slice keju mozzarella di dalam ayam sebelum di-coating. Hasil yang lumer di dalam, crispy di luar.</p>
      
      <h3>Ayam Katsu Pedas</h3>
      <p>Campurkan bubuk cabai ke dalam tepung roti untuk sensasi pedas yang menggugah selera.</p>
      
      <p class="bg-orange-50 p-4 rounded-lg">
        <strong>Catatan Chef:</strong> Kualitas bahan baku sangat menentukan hasil akhir. Pilih ayam yang segar dan tepung roti berkualitas tinggi seperti Tepung Roti Sakti untuk hasil terbaik.
      </p>
    </div>`,
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
    content: `<div class="prose max-w-none">
      <h2>Penghargaan Bergengsi di Industri Pangan Indonesia</h2>
      <p>Penghargaan 'Perusahaan Pangan Terbaik 2024' yang diterima oleh PT. Sakti Pangan Perkasa merupakan bukti dari dedikasi perusahaan dalam menghadirkan produk berkualitas tinggi. Penghargaan ini diberikan berdasarkan penilaian ketat terhadap kualitas produk, inovasi, dan kontribusi terhadap industri pangan Indonesia.</p>
      
      <h3>Kriteria Penilaian</h3>
      <ul>
        <li><strong>Kualitas Produk:</strong> Konsistensi dan standar tinggi dalam setiap produk</li>
        <li><strong>Inovasi:</strong> Pengembangan produk baru dan penyempurnaan formula</li>
        <li><strong>Keamanan Pangan:</strong> Sertifikasi HACCP dan ISO 22000</li>
        <li><strong>Tanggung Jawab Sosial:</strong> Program CSR dan kontribusi kepada masyarakat</li>
        <li><strong>Sustainabilitas:</strong> Komitmen terhadap lingkungan dan keberlanjutan</li>
      </ul>
      
      <h2>Pernyataan Direktur Utama</h2>
      <blockquote class="border-l-4 border-orange-500 pl-4 italic bg-orange-50 p-4 rounded">
        "Penghargaan ini adalah hasil kerja keras seluruh tim Sakti Pangan Perkasa. Kami berkomitmen untuk terus berinovasi dan memberikan yang terbaik bagi konsumen Indonesia." - Bapak Suharto, Direktur Utama PT. Sakti Pangan Perkasa
      </blockquote>
      
      <h3>Pencapaian 2024</h3>
      <div class="grid grid-cols-2 gap-4 my-6">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-800">Produksi</h4>
          <p class="text-2xl font-bold text-blue-600">50.000+ ton</p>
          <p class="text-sm text-blue-600">Kapasitas produksi tahunan</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-bold text-green-800">Distribusi</h4>
          <p class="text-2xl font-bold text-green-600">1.500+</p>
          <p class="text-sm text-green-600">Outlet di seluruh Indonesia</p>
        </div>
      </div>
      
      <h2>Rencana Pengembangan</h2>
      <p>Dengan pencapaian ini, PT. Sakti Pangan Perkasa merencanakan ekspansi lebih lanjut dengan:</p>
      <ol>
        <li>Pembangunan pabrik baru di Jawa Timur</li>
        <li>Peluncuran 5 varian produk baru</li>
        <li>Ekspansi ke pasar Asia Tenggara</li>
        <li>Program pelatihan untuk UMKM kuliner</li>
      </ol>
    </div>`,
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
    content: `<div class="prose max-w-none">
      <h2>Bergabunglah dengan Tim Terbaik</h2>
      <p>PT. Sakti Pangan Perkasa terus berkembang dan membutuhkan talenta-talenta terbaik untuk bergabung dalam tim kami. Kami menawarkan kesempatan karir yang menarik dengan benefits kompetitif dan lingkungan kerja yang mendukung pengembangan diri.</p>
      
      <h3>Posisi yang Tersedia</h3>
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-6">
        <h4 class="text-xl font-bold mb-4">Management Trainee Program</h4>
        <ul>
          <li>Fresh graduate S1 semua jurusan</li>
          <li>IPK minimal 3.25</li>
          <li>Usia maksimal 25 tahun</li>
          <li>Program 1 tahun dengan rotasi divisi</li>
        </ul>
      </div>
      
      <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg my-6">
        <h4 class="text-xl font-bold mb-4">Production Manager</h4>
        <ul>
          <li>S1 Teknik Industri/Pangan</li>
          <li>Pengalaman minimal 5 tahun di industri pangan</li>
          <li>Menguasai sistem manajemen kualitas</li>
          <li>Leadership yang kuat</li>
        </ul>
      </div>
      
      <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg my-6">
        <h4 class="text-xl font-bold mb-4">Digital Marketing Specialist</h4>
        <ul>
          <li>S1 Marketing/Komunikasi</li>
          <li>Pengalaman digital marketing 3+ tahun</li>
          <li>Menguasai Google Ads, Facebook Ads, SEO</li>
          <li>Portfolio campaign yang terukur</li>
        </ul>
      </div>
      
      <h2>Benefits & Fasilitas</h2>
      <div class="grid grid-cols-2 gap-4 my-6">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-800">Kompensasi</h4>
          <ul class="text-sm text-blue-600">
            <li>Gaji kompetitif</li>
            <li>Bonus performance</li>
            <li>THR</li>
            <li>Tunjangan transport</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-bold text-green-800">Kesehatan</h4>
          <ul class="text-sm text-green-600">
            <li>BPJS Kesehatan</li>
            <li>Asuransi kesehatan</li>
            <li>Medical check-up</li>
            <li>Poliklinik perusahaan</li>
          </ul>
        </div>
        <div class="bg-purple-50 p-4 rounded-lg">
          <h4 class="font-bold text-purple-800">Pengembangan</h4>
          <ul class="text-sm text-purple-600">
            <li>Training reguler</li>
            <li>Sertifikasi profesi</li>
            <li>Program mentoring</li>
            <li>Career path yang jelas</li>
          </ul>
        </div>
        <div class="bg-orange-50 p-4 rounded-lg">
          <h4 class="font-bold text-orange-800">Work-Life Balance</h4>
          <ul class="text-sm text-orange-600">
            <li>Flexible working hours</li>
            <li>Cuti tahunan</li>
            <li>Family gathering</li>
            <li>Outing karyawan</li>
          </ul>
        </div>
      </div>
      
      <h2>Cara Melamar</h2>
      <p>Kirimkan CV, portfolio, dan surat lamaran ke:</p>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p><strong>Email:</strong> career@saktipangan.co.id</p>
        <p><strong>Subject:</strong> [Posisi] - [Nama Lengkap]</p>
        <p><strong>Deadline:</strong> 30 September 2024</p>
      </div>
      
    </div>`,
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
    content: `<div class="prose max-w-none">
      <h2>Rahasia Fish & Chips Restaurant Quality</h2>
      <p>Membuat fish & chips yang sempurna membutuhkan teknik khusus. Dengan Tepung Bumbu Serbaguna Sakti, proses menjadi lebih mudah dan hasilnya selalu konsisten.</p>
      
      <h3>Tips Sukses dari Chef Profesional</h3>
      <ol>
        <li><strong>Pilih Ikan yang Tepat:</strong> Gunakan ikan berdaging tebal seperti dory atau cod</li>
        <li><strong>Suhu Air Es:</strong> Gunakan air es untuk adonan tepung agar hasil lebih crispy</li>
        <li><strong>Jangan Over-mix:</strong> Aduk adonan tepung secukupnya saja</li>
        <li><strong>Double Frying:</strong> Goreng kentang dua kali untuk hasil extra crispy</li>
      </ol>
    </div>`,
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
    content: `<div class="prose max-w-none">
      <h2>Program CSR Sakti Pangan Peduli</h2>
      <p>Program CSR Sakti Pangan Peduli merupakan komitmen perusahaan dalam berkontribusi untuk masyarakat. Kali ini, kami mengunjungi Panti Asuhan Kasih Ibu dan memberikan bantuan serta mengadakan kegiatan bersama anak-anak yatim piatu.</p>
      
      <h3>Kegiatan yang Dilakukan</h3>
      <ul>
        <li>Donasi sembako dan kebutuhan sehari-hari</li>
        <li>Workshop memasak sederhana untuk anak-anak</li>
        <li>Permainan edukatif dan hiburan</li>
        <li>Pemberian beasiswa pendidikan</li>
      </ul>
      
      <blockquote class="border-l-4 border-orange-500 pl-4 italic bg-orange-50 p-4 rounded">
        "Kebahagiaan anak-anak adalah motivasi terbesar kami untuk terus berbagi. Program ini akan kami lanjutkan secara berkelanjutan." - Tim CSR Sakti Pangan
      </blockquote>
    </div>`,
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
  }
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
