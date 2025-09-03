'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { MapProps } from '@/types/map.types';

// Loading component dengan style yang bisa disesuaikan
const MapLoading: React.FC<{ style?: string }> = ({ style = 'default' }) => {
  const bgClass = style === 'dark' 
    ? 'from-gray-800 to-gray-900' 
    : style === 'minimal' 
    ? 'from-gray-100 to-gray-200'
    : 'from-orange-100 to-orange-200';

  const textClass = style === 'dark' 
    ? 'text-gray-300' 
    : style === 'minimal'
    ? 'text-gray-600'
    : 'text-orange-700';

  return (
    <div className={`w-full h-80 bg-gradient-to-br ${bgClass} rounded-lg flex items-center justify-center`}>
      <div className="text-center">
        <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${
          style === 'dark' ? 'border-gray-300' : 'border-orange-500'
        } mx-auto mb-2`}></div>
        <p className={`${textClass} font-medium`}>Loading {style} map...</p>
      </div>
    </div>
  );
};

// Dynamic import untuk StyledMapComponent
const DynamicStyledMap = dynamic(
  () => import('./StyledMapComponent'),
  { 
    ssr: false,
    loading: ({ style }: Record<string, unknown>) => <MapLoading style={style as string} />
  }
);

const StyledMapWrapper: React.FC<MapProps> = (props) => {
  return <DynamicStyledMap {...props} />;
};

export default StyledMapWrapper;