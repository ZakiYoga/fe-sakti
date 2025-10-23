// app/sial2025/buku-tamu/components/ProgressSidebar.tsx
'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ProgressSidebarProps } from '@/types/guestBook.type';

const ProgressSidebar = ({ sections, currentSection }: ProgressSidebarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full lg:w-72 flex-shrink-0"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl sticky top-4">
        <h3 className="text-lg font-bold text-white mb-6">Progress</h3>

        <div className="space-y-4">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            const isCompleted = idx < currentSection;
            const isCurrent = idx === currentSection;

            return (
              <div key={section.id} className="relative">
                <div
                  className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                    isCurrent ? 'bg-white/10' : ''
                  }`}
                >
                  <motion.div
                    animate={{
                      backgroundColor: isCompleted
                        ? 'rgba(255, 138, 0, 0.9)'
                        : isCurrent
                        ? 'rgba(255, 107, 0, 0.9)'
                        : 'rgba(255, 255, 255, 0.2)',
                      scale: isCurrent ? 1.05 : 1,
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <Icon className="w-5 h-5 text-white" />
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <div className={`font-medium text-sm ${isCurrent ? 'text-white' : 'text-white/70'}`}>
                      {section.title}
                    </div>
                    {isCompleted && (
                      <div className="text-xs text-orange-300 mt-0.5">Selesai</div>
                    )}
                  </div>
                </div>

                {idx < sections.length - 1 && (
                  <div className="flex items-center pl-5 py-1">
                    <motion.div
                      animate={{
                        height: '24px',
                        backgroundColor: idx < currentSection
                          ? 'rgba(255, 138, 0, 0.6)'
                          : 'rgba(255, 255, 255, 0.2)',
                      }}
                      className="w-0.5 ml-[19px]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-white/70">Total Progress</span>
            <span className="text-xs font-bold text-white">
              {Math.round(((currentSection + 1) / sections.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <motion.div
              animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressSidebar;