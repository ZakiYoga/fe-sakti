import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, BarChart3, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Sakti Pangan',
  description: 'Dashboard admin untuk manajemen',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Kelola semua aspek website Sakti Pangan</p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Buku Tamu Card */}
          <Link href="/admin/buku-tamu">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Buku Tamu</h2>
              <p className="text-gray-600 mb-4">
                Kelola data pengunjung dan follow up dengan calon klien
              </p>
              <div className="text-blue-600 font-semibold text-sm">
                Buka Panel →
              </div>
            </div>
          </Link>

          {/* Statistics Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 opacity-50 cursor-not-allowed h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Statistik</h2>
            <p className="text-gray-600 mb-4">
              Lihat laporan dan analisis data pengunjung
            </p>
            <div className="text-gray-400 font-semibold text-sm">
              Coming Soon
            </div>
          </div>

          {/* Settings Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 opacity-50 cursor-not-allowed h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pengaturan</h2>
            <p className="text-gray-600 mb-4">
              Konfigurasi website dan sistem
            </p>
            <div className="text-gray-400 font-semibold text-sm">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}