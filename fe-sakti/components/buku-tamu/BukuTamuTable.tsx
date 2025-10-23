/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { bukuTamuService } from '@/lib/api/bukuTamuService';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Eye, 
  Trash2, 
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Circle
} from 'lucide-react';

interface BukuTamuItem {
  id: number;
  nama_lengkap: string;
  no_hp: string;
  is_whatsapp: boolean;
  email: string;
  asal_kota: string;
  asal_negara: string;
  instansi: string;
  jabatan: string;
  kategori_usaha: string;
  bidang_usaha: string;
  tujuan_kunjungan: string;
  produk_minat: string;
  foto_url: string;
  catatan: string;
  tanggal_kunjungan: string;
  follow_up: boolean;
}

const BukuTamuTable = () => {
  const [data, setData] = useState<BukuTamuItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [kategoriFilter, setKategoriFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedItem, setSelectedItem] = useState<BukuTamuItem | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const params: Record<string, any> = {
        page: page,
        search: search,
      };

      if (kategoriFilter) {
        params.kategori_usaha = kategoriFilter;
      }

      const response = await bukuTamuService.getAll(params);
      
      setData(response.results || []);
      setTotalPages(Math.ceil((response.count || 0) / 10));
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Gagal memuat data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search, kategoriFilter]);

  const handleDelete = async (id: number) => {
    if (!confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      return;
    }

    try {
      await bukuTamuService.delete(id);
      alert('Data berhasil dihapus');
      fetchData();
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Gagal menghapus data');
    }
  };

  const handleToggleFollowUp = async (id: number) => {
    try {
      await bukuTamuService.toggleFollowUp(id);
      fetchData();
    } catch (error) {
      console.error('Error toggle follow up:', error);
      alert('Gagal mengubah status follow up');
    }
  };

  const handleShowDetail = (item: BukuTamuItem) => {
    setSelectedItem(item);
    setShowDetail(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-4">
      {/* Filter & Search */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Cari nama, instansi, kota..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-10"
            />
          </div>
        </div>

        <Select
          value={kategoriFilter}
          onValueChange={(value) => {
            setKategoriFilter(value);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Semua Kategori</SelectItem>
            <SelectItem value="organization">Organization</SelectItem>
            <SelectItem value="distributor">Distributor</SelectItem>
            <SelectItem value="retail">Retail/Buyer</SelectItem>
            <SelectItem value="horeca">Horeca</SelectItem>
            <SelectItem value="supplier">Supplier</SelectItem>
            <SelectItem value="lainnya">Lainnya</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={fetchData}
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Foto</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Instansi</TableHead>
              <TableHead>Asal Kota</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Follow Up</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  Loading...
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  Tidak ada data
                </TableCell>
              </TableRow>
            ) : (
              data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.foto_url ? (
                      <img
                        src={item.foto_url}
                        alt={item.nama_lengkap}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No Foto</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.nama_lengkap}
                    {item.is_whatsapp && (
                      <Badge variant="outline" className="ml-2 text-xs">
                        WA
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{item.instansi || '-'}</TableCell>
                  <TableCell>{item.asal_kota}</TableCell>
                  <TableCell>
                    {item.kategori_usaha && (
                      <Badge variant="secondary">
                        {item.kategori_usaha}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {formatDate(item.tanggal_kunjungan)}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleToggleFollowUp(item.id)}
                    >
                      {item.follow_up ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-300" />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShowDetail(item)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm">
              Halaman {page} dari {totalPages}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Detail Dialog */}
      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detail Pengunjung</DialogTitle>
            <DialogDescription>
              Informasi lengkap pengunjung buku tamu
            </DialogDescription>
          </DialogHeader>

          {selectedItem && (
            <div className="space-y-6">
              {selectedItem.foto_url && (
                <div className="flex justify-center">
                  <img
                    src={selectedItem.foto_url}
                    alt={selectedItem.nama_lengkap}
                    className="w-48 h-48 rounded-lg object-cover border-2"
                  />
                </div>
              )}

              <div className="space-y-3">
                <h4 className="font-semibold">Identitas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Nama Lengkap</p>
                    <p className="font-medium">{selectedItem.nama_lengkap}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">No HP</p>
                    <p className="font-medium">
                      {selectedItem.no_hp}
                      {selectedItem.is_whatsapp && (
                        <Badge variant="outline" className="ml-2">WA</Badge>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{selectedItem.email || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Asal Kota</p>
                    <p className="font-medium">{selectedItem.asal_kota}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Asal Negara</p>
                    <p className="font-medium">{selectedItem.asal_negara || '-'}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Organisasi / Usaha</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Instansi</p>
                    <p className="font-medium">{selectedItem.instansi || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Jabatan</p>
                    <p className="font-medium">{selectedItem.jabatan || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Kategori Usaha</p>
                    <p className="font-medium">{selectedItem.kategori_usaha || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bidang Usaha</p>
                    <p className="font-medium">{selectedItem.bidang_usaha || '-'}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Tujuan Kunjungan</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Tujuan</p>
                    <p className="font-medium">{selectedItem.tujuan_kunjungan || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Produk Minat</p>
                    <p className="font-medium">{selectedItem.produk_minat || '-'}</p>
                  </div>
                </div>
              </div>

              {selectedItem.catatan && (
                <div className="space-y-3">
                  <h4 className="font-semibold">Catatan</h4>
                  <p className="text-sm">{selectedItem.catatan}</p>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="font-semibold">Informasi Tambahan</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Tanggal Kunjungan</p>
                    <p className="font-medium">{formatDate(selectedItem.tanggal_kunjungan)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status Follow Up</p>
                    <p className="font-medium">
                      {selectedItem.follow_up ? (
                        <Badge variant="default">Perlu Follow Up</Badge>
                      ) : (
                        <Badge variant="secondary">Tidak Perlu</Badge>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BukuTamuTable;