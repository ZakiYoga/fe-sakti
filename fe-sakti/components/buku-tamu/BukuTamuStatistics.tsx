'use client';

import { useState, useEffect } from 'react';
import { bukuTamuService } from '@/lib/api/bukuTamuService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CheckCircle, BarChart3, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StatisticsData {
  total_pengunjung: number;
  perlu_follow_up: number;
  per_kategori_usaha: Record<string, number>;
}

const BukuTamuStatistics = () => {
  const [stats, setStats] = useState<StatisticsData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchStatistics = async () => {
    try {
      setLoading(true);
      const data = await bukuTamuService.getStatistics();
      setStats(data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
      alert('Gagal memuat statistik');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  if (!stats) {
    return (
      <div className="flex justify-center py-12">
        <Button
          variant="outline"
          onClick={fetchStatistics}
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Muat Statistik
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pengunjung</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total_pengunjung}</div>
            <p className="text-xs text-gray-500 mt-1">Semua pengunjung</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Perlu Follow Up</CardTitle>
            <CheckCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.perlu_follow_up}</div>
            <p className="text-xs text-gray-500 mt-1">
              {stats.total_pengunjung > 0 
                ? `${Math.round((stats.perlu_follow_up / stats.total_pengunjung) * 100)}% dari total`
                : 'Tidak ada data'
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Kategori Usaha</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.keys(stats.per_kategori_usaha).length}</div>
            <p className="text-xs text-gray-500 mt-1">Jumlah kategori</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Breakdown per Kategori Usaha</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(stats.per_kategori_usaha).map(([kategori, count]) => {
              const percentage = stats.total_pengunjung > 0 
                ? Math.round((count / stats.total_pengunjung) * 100) 
                : 0;
              
              return (
                <div key={kategori} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{kategori}</span>
                    <span className="text-sm text-gray-500">{count} orang ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Refresh Button */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={fetchStatistics}
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh Statistik
        </Button>
      </div>
    </div>
  );
};

export default BukuTamuStatistics;