'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Users, TrendingUp } from 'lucide-react';
import BukuTamuForm from '@/components/buku-tamu/BukuTamuForm';
import BukuTamuTable from '@/components/buku-tamu/BukuTamuTable';
import BukuTamuStatistics from '@/components/buku-tamu/BukuTamuStatistics'
const BukuTamuAdmin = () => {
  const [showFormDialog, setShowFormDialog] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFormSuccess = () => {
    setShowFormDialog(false);
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Buku Tamu</h1>
          <p className="text-gray-500 mt-1">Kelola data pengunjung acara</p>
        </div>

        <Dialog open={showFormDialog} onOpenChange={setShowFormDialog}>
          <DialogTrigger asChild>
            <Button size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Tambah Pengunjung
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Tambah Data Pengunjung</DialogTitle>
              <DialogDescription>
                Isi formulir di bawah untuk menambahkan data pengunjung baru
              </DialogDescription>
            </DialogHeader>
            <BukuTamuForm onSuccess={handleFormSuccess} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">
            <Users className="w-4 h-4 mr-2" />
            Daftar Pengunjung
          </TabsTrigger>
          <TabsTrigger value="statistics">
            <TrendingUp className="w-4 h-4 mr-2" />
            Statistik
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6">
          <BukuTamuTable key={refreshKey} />
        </TabsContent>

        <TabsContent value="statistics" className="mt-6">
          <BukuTamuStatistics />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BukuTamuAdmin;