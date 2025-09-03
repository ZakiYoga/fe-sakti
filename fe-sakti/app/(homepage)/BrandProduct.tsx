import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Logo {
    id: number;
    name: string;
    src: string;
}

const MarqueeBrandProduct: React.FC = () => {
    // Array data untuk logo brands
    const logos: Logo[] = [
        { id: 1, name: 'Sakti Corporate', src: '/images/logo/Corporate.png' },
        { id: 2, name: 'Sakti Brand', src: '/images/logo/SaktiBrandNew.png' },
        { id: 3, name: 'LASKAR', src: '/images/logo/Laskar.png' },
        { id: 4, name: 'PITA', src: '/images/logo/Pita.png' },
        { id: 5, name: 'AK STAR', src: '/images/logo/AKStar.png' },
        { id: 6, name: 'Fry Fest', src: '/images/logo/FryFest.png' },
        { id: 7, name: '7Daun', src: '/images/logo/7Daun.png' },
        { id: 8, name: 'Agni', src: '/images/logo/Agni.png' },
    ];

    // Duplikasi array untuk seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="w-full bg-background dark:bg-accent border-y-2 border-orange-600 pt-4 pb-3">
            <div className="overflow-hidden whitespace-nowrap">
                <motion.div
                    className="inline-flex items-center"
                    animate={{
                        x: ['0%', '-50%']
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 25,
                            ease: 'linear'
                        }
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className="flex-shrink-0 mx-6 flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={`${logo.name} logo`}
                                width={120}
                                height={80}
                                className="h-8 w-auto object-contain hover:grayscale-0 transition-all duration-300"
                                priority={index < logos.length} // Priority untuk first set of images
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MarqueeBrandProduct;