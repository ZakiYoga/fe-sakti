"use client";
import { JSX, useState, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { blogApi, extractApiData } from '@/lib/api/api';
import useSWR from 'swr';
import { Blog, BlogParams, Category, PaginatedResponse } from '@/types/blog.types';
import Image from 'next/image';
import HeaderPages from '@/components/HeaderPages';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Search,
  Filter,
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  TrendingUp,
  Mail,
  Bell,
  AlertTriangle,
  RefreshCw,
  Loader2,
  CheckCircle,
  X
} from 'lucide-react';

// Fetcher function with proper typing
const fetcher = async (url: string, params: BlogParams): Promise<PaginatedResponse<Blog>> => {
  const response = await blogApi.getAll(params);
  return extractApiData(response);
};

const categoriesFetcher = async (): Promise<Category[]> => {
  const response = await blogApi.getCategories();
  return extractApiData(response);
};

const NewsletterModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Here you would make the actual API call
      // await newsletterApi.subscribe({ email, name });

      setIsSuccess(true);
    } catch (err) {
      setError('Gagal mendaftarkan email. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setIsSuccess(false);
    setError('');
    setIsLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) handleClose();
    }}>      <DialogContent className="sm:max-w-md">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-500" />
                Berlangganan Newsletter
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-300">
                Dapatkan artikel terbaru, tips kuliner, dan informasi eksklusif langsung di inbox Anda
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contoh@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <AlertTriangle className="h-4 w-4" />
                  {error}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isLoading}
                  className="flex-1"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Mendaftar...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Berlangganan
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
              Dengan mendaftar, Anda menyetujui untuk menerima email dari kami dan dapat berhenti berlangganan kapan saja.
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Berhasil Berlangganan!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Terima kasih telah berlangganan newsletter kami. Kami akan mengirimkan artikel terbaru dan informasi menarik ke email Anda.
            </p>
            <Button
              onClick={handleClose}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Tutup
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

// Loading Skeleton Component
const BlogSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, index) => (
      <Card key={index} className="border-0 bg-orange-50 dark:bg-gray-900/60 shadow-lg overflow-hidden">
        <div className="animate-pulse">
          <div className="aspect-video bg-gray-300 dark:bg-gray-700" />
          <CardContent className="p-6 space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-20" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24" />
            </div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
            </div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16" />
            </div>
          </CardContent>
        </div>
      </Card>
    ))}
  </div>
);

// Error State Component
const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center py-16"
  >
    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full mb-6">
      <AlertTriangle className="h-10 w-10" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
      Gagal Memuat Artikel
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
      Terjadi kesalahan saat mengambil data artikel. Periksa koneksi internet Anda dan coba lagi.
    </p>
    <Button
      onClick={onRetry}
      className="bg-orange-500 hover:bg-orange-600 text-white"
    >
      <RefreshCw className="h-4 w-4 mr-2" />
      Coba Lagi
    </Button>
  </motion.div>
);

// Blog Card Component with Animation
const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="h-full"
    >
      <Card className="group h-full border border-transparent hover:border-orange-300 bg-orange-50 dark:bg-gray-900/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {blog.featured_image && (
          <div className="aspect-video relative overflow-hidden">
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}

        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            {blog.category && (
              <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">
                {blog.category.name}
              </Badge>
            )}
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="h-3 w-3" />
              {formatDate(blog.published_at)}
            </div>
          </div>

          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors line-clamp-2">
            <Link href={`/blog/${blog.slug}`}>
              {blog.title}
            </Link>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <Link
              href={`/blog/${blog.slug}`}
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm group-hover:gap-3 transition-all"
            >
              Baca Selengkapnya
              <ArrowRight className="h-4 w-4" />
            </Link>
            {blog.user && (
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <User className="h-3 w-3" />
                {blog.user.name}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function BlogIndex(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { data: blogData, error, mutate } = useSWR<PaginatedResponse<Blog>>(
    ['blogs', { page: currentPage, search: searchQuery, category: selectedCategory }],
    ([url, params]: [string, BlogParams]) => fetcher(url, params)
  );

  const { data: categoriesData } = useSWR<Category[]>('categories', categoriesFetcher);

  const sortedBlogs = useMemo(() => {
    if (!blogData?.data) return [];

    return [...blogData.data].sort((a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );
  }, [blogData]);

  // Stats data for blog
  // const blogStats = [
  //   {
  //     icon: BookOpen,
  //     label: "Total Artikel",
  //     value: blogData?.total ? `${blogData.total}+` : "0",
  //     description: "Artikel informatif dan edukatif"
  //   },
  //   {
  //     icon: Users,
  //     label: "Pembaca Aktif",
  //     value: "5000+",
  //     description: "Pembaca setia setiap bulan"
  //   },
  //   {
  //     icon: TrendingUp,
  //     label: "Artikel Terbaru",
  //     value: blogData?.data ? `${blogData.data.length}` : "0",
  //     description: "Update terkini minggu ini"
  //   }
  // ];

  // CTA buttons for newsletter subscription
  const ctaButtons = [
    {
      label: 'Berlangganan Newsletter',
      icon: Bell,
      variant: 'default' as const,
      onClick: () => setIsNewsletterModalOpen(true)
    }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handlePreviousPage = (): void => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = (): void => {
    if (blogData) {
      setCurrentPage(prev => Math.min(prev + 1, blogData.last_page));
    }
  };

  const handlePageClick = (page: number): void => {
    setCurrentPage(page);
  };

  const getPaginationRange = (): number[] => {
    if (!blogData) return [];

    const totalPages = blogData.last_page;
    const current = currentPage;
    const range = 2; // Show 2 pages before and after current

    let start = Math.max(1, current - range);
    let end = Math.min(totalPages, current + range);

    // Adjust if we're near the beginning or end
    if (current <= range) {
      end = Math.min(totalPages, range * 2 + 1);
    }
    if (current > totalPages - range) {
      start = Math.max(1, totalPages - range * 2);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handleRetry = (): void => {
    mutate();
  };

  const isLoading = !blogData && !error;

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPages
        title="Sakti News"
        description="Cerita, Inovasi, dan Update Terkini dari PT Sakti Pangan Perkasa"
        backgroundImage="/images/bg-header.png"
        height="md"
        className="py-16"
      />

      {/* Main Content */}
      <section
        ref={sectionRef}
        className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Error State */}
          {error && <ErrorState onRetry={handleRetry} />}

          {/* Loading State */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
                <p className="text-gray-600 dark:text-gray-300">Memuat artikel terbaru...</p>
              </div>
              <BlogSkeleton />
            </motion.div>
          )}

          {/* Content when data is loaded */}
          {blogData && !error && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Artikel Terbaru
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Menampilkan {blogData.data.length} dari {blogData.total} artikel tersedia
                  </p>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari artikel..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full transition-all duration-300 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-w-48 transition-all duration-300 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Semua Kategori</option>
                    {categoriesData?.map((category: Category) => (
                      <option key={category.id} value={category.slug}>
                        {category.name} ({category.blogs_count || 0})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedBlogs.map((blog: Blog, index: number) => (
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </div>

              {/* Empty State */}
              {blogData.data.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-4">📰</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Artikel Tidak Ditemukan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Coba ubah kata kunci pencarian atau pilih kategori lain
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("");
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Reset Filter
                  </Button>
                </motion.div>
              )}

              {/* Pagination */}
              {blogData.last_page > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center items-center gap-2 flex-wrap"
                >
                  <Button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 disabled:opacity-50"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Sebelumnya
                  </Button>

                  <div className="flex gap-1">
                    {getPaginationRange().map((page: number) => (
                      <Button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        variant={page === currentPage ? "default" : "outline"}
                        size="sm"
                        className={`min-w-[40px] ${page === currentPage
                          ? 'bg-orange-500 hover:bg-orange-600 text-white'
                          : 'border-orange-300 text-orange-600 hover:bg-orange-50'
                          }`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    onClick={handleNextPage}
                    disabled={currentPage === blogData.last_page}
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 disabled:opacity-50"
                  >
                    Selanjutnya
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section - Newsletter Subscription */}
      {!error && (
        <CTASection
          title="Jangan Lewatkan Update Terbaru"
          description="Berlangganan newsletter kami untuk mendapatkan artikel terbaru, tips kuliner, dan informasi eksklusif langsung di inbox Anda"
          buttons={ctaButtons}
        />
      )}

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </div>
  );
}