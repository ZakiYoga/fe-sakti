'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import StyledMapWrapper from './StyledMapWrapper';
import { ContactMapProps, MapMarker } from '@/types/map.types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';

const StyledContactMap: React.FC<ContactMapProps> = ({
  companyLocation,
  companyName = 'Lokasi Perusahaan',
  companyAddress = '',
  className = '',
  height = 400,
  style: initialStyle = 'default',
  markerIcon = 'red'
}) => {
  const [mapStyle, setMapStyle] = useState(initialStyle);

  // Marker untuk lokasi perusahaan
  const companyMarker: MapMarker = {
    ...companyLocation,
    id: 'company-location',
    title: companyName,
    popup: companyAddress || `${companyName}\nLat: ${companyLocation.lat.toFixed(6)}\nLng: ${companyLocation.lng.toFixed(6)}`,
    icon: markerIcon
  };

  // Handler untuk membuka Google Maps
  const handleOpenInGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${companyLocation.lat},${companyLocation.lng}`;
    window.open(url, '_blank');
  };

  // Handler untuk mendapatkan directions
  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${companyLocation.lat},${companyLocation.lng}`;
    window.open(url, '_blank');
  };

  const mapStyleOptions = [
    { value: 'default', label: '🗺️ Default' },
    { value: 'dark', label: '🌙 Dark Theme' },
    { value: 'minimal', label: '⚪ Minimal' },
    { value: 'satellite', label: '🛰️ Satellite' },
    { value: 'terrain', label: '🏔️ Terrain' }
  ];

  return (
    <Card className={`border-0 shadow-2xl overflow-hidden ${className}`}>
      <div className="relative">
        {/* Map */}
        <StyledMapWrapper
          center={companyLocation}
          zoom={16}
          markers={[companyMarker]}
          height={height}
          interactive={true}
          style={mapStyle}
        />
        
        {/* Map Controls Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {/* Style Selector */}
          <Select value={mapStyle} onValueChange={value => setMapStyle(value as typeof mapStyle)}>
            <SelectTrigger className="w-32 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-0 text-xs">
              <Palette className="h-3 w-3 mr-1" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {mapStyleOptions.map(option => (
                <SelectItem key={option.value} value={option.value} className="text-xs">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            onClick={handleGetDirections}
          >
            <Navigation className="h-4 w-4 mr-1" />
            Rute
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            onClick={handleOpenInGoogleMaps}
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Buka di Maps
          </Button>
        </div>
      </div>

      {/* Map Info */}
      <CardContent className="p-4 bg-white">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-orange-100 text-orange-600 rounded-full flex-shrink-0">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-gray-900 mb-1">{companyName}</h4>
            {companyAddress && (
              <p className="text-sm text-gray-600 leading-relaxed">{companyAddress}</p>
            )}
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <span>Lat: {companyLocation.lat.toFixed(6)}</span>
              <span>Lng: {companyLocation.lng.toFixed(6)}</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Style: {mapStyle}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StyledContactMap;