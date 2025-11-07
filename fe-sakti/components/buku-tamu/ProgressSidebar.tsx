'use client';

import { ProgressSidebarProps } from '@/types/guestBook.type';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';


const ProgressSidebar = ({ sections, currentSection }: ProgressSidebarProps) => {
  return (
    <div className="w-full sm:w-auto flex-shrink-0">
      {/* Mobile Only (< 640px): Horizontal Layout at Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:hidden w-full mb-6"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
          {/* Progress Bar at Top for Mobile */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-white/70">Progress</span>
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

          {/* Horizontal Steps - Icon Only */}
          <div className="flex items-center justify-between gap-2">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const isCompleted = idx < currentSection;
              const isCurrent = idx === currentSection;

              return (
                <div key={section.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center w-full">
                    {/* Icon Circle */}
                    <motion.div
                      animate={{
                        backgroundColor: isCompleted
                          ? 'rgba(255, 138, 0, 0.9)'
                          : isCurrent
                          ? 'rgba(255, 107, 0, 0.9)'
                          : 'rgba(255, 255, 255, 0.2)',
                        scale: isCurrent ? 1.1 : 1,
                      }}
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <Icon className="w-5 h-5 text-white" />
                      )}
                    </motion.div>
                  </div>

                  {/* Horizontal Connector Line */}
                  {idx < sections.length - 1 && (
                    <motion.div
                      animate={{
                        backgroundColor: idx < currentSection
                          ? 'rgba(255, 138, 0, 0.6)'
                          : 'rgba(255, 255, 255, 0.2)',
                      }}
                      className="h-0.5 flex-1 mx-2"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Tablet (sm-md): Vertical Layout - Icon Only */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden sm:block md:hidden"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden p-3 shadow-2xl sticky top-4">
          <div className="flex flex-col items-center gap-2">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const isCompleted = idx < currentSection;
              const isCurrent = idx === currentSection;

              return (
                <div key={section.id} className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      backgroundColor: isCompleted
                        ? 'rgba(255, 138, 0, 0.9)'
                        : isCurrent
                        ? 'rgba(255, 107, 0, 0.9)'
                        : 'rgba(255, 255, 255, 0.2)',
                      scale: isCurrent ? 1.1 : 1,
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      isCurrent ? 'ring-2 ring-orange-400/50' : ''
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : (
                      <Icon className="w-6 h-6 text-white" />
                    )}
                  </motion.div>

                  {/* Vertical Connector Line */}
                  {idx < sections.length - 1 && (
                    <motion.div
                      animate={{
                        backgroundColor: idx < currentSection
                          ? 'rgba(255, 138, 0, 0.6)'
                          : 'rgba(255, 255, 255, 0.2)',
                      }}
                      className="w-0.5 h-8 my-2"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Compact Progress Bar */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="text-center mb-2">
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

      {/* Desktop (md+): Vertical Layout - Icon + Label */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:block"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden p-6 shadow-2xl sticky top-4 w-72">
          <div className="flex flex-col">
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

                    {/* Label visible on md+ */}
                    <div className="flex-1 flex flex-col">
                      <div className={`font-medium text-sm ${isCurrent ? 'text-white' : 'text-white/70'}`}>
                        {section.title}
                      </div>
                      {isCompleted && (
                        <div className="text-xs text-orange-300 mt-0.5">Selesai</div>
                      )}
                    </div>
                  </div>

                  {/* Vertical Connector Line */}
                  {idx < sections.length - 1 && (
                    <div className="flex items-center pl-5 my-2">
                      <motion.div
                        animate={{
                          backgroundColor: idx < currentSection
                            ? 'rgba(255, 138, 0, 0.6)'
                            : 'rgba(255, 255, 255, 0.2)',
                        }}
                        className="w-0.5 h-10 ml-3"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress Bar at Bottom for Desktop */}
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
    </div>
  );
};

export default ProgressSidebar;