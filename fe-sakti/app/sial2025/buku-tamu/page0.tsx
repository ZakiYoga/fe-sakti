import BukuTamuForm from '@/components/buku-tamu/BukuTamuForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buku Tamu - Sakti Pangan',
  description: 'Isi formulir buku tamu pengunjung kami',
};

export default function BukuTamuPage() {
  return (
    <div className="min-h-[80vh] z-10 flex items-center justify-center py-6">
      <div className="max-w-6xl mx-auto">
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Content */}
          <div className="p-6 sm:p-8">
            <BukuTamuForm />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Privacy Policy: Data Anda aman bersama kami dan hanya akan digunakan
            <br />
            untuk keperluan komunikasi dan layanan pelanggan.
          </p>
        </div>
      </div>
    </div>
  );
}