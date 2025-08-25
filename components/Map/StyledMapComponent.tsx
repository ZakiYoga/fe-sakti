'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapProps, MapLocation, MapMarker } from '@/types/map.types';
import { mapStyles } from '@/app/contact/constants/mapStyles';
import { markerIcons } from '@/app/contact/constants/markerIcons';

// Fix untuk default marker icons di Next.js
const fixLeafletIcons = () => {
  // Properly typed fix for Leaflet default icons
  delete (Icon.Default.prototype as typeof Icon.Default.prototype & { _getIconUrl?: unknown })._getIconUrl;
  Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
};

// Komponen untuk handle events
interface MapEventHandlerProps {
  onMapClick?: (location: MapLocation) => void;
}

const MapEventHandler: React.FC<MapEventHandlerProps> = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      if (onMapClick) {
        onMapClick({
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
      }
    },
  });

  return null;
};

// Type for tile configuration
interface TileConfig {
  url: string;
  attribution: string;
  name: string;
}

const StyledMapComponent: React.FC<MapProps> = ({
  center,
  zoom = 15,
  markers = [],
  height = '400px',
  width = '100%',
  className = '',
  interactive = true,
  style = 'default',
  customTileUrl,
  customAttribution,
  onMarkerClick,
  onMapClick
}) => {
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  const mapCenter: LatLngExpression = [center.lat, center.lng];

  // Menentukan tile layer berdasarkan style
  const getTileConfig = (): TileConfig => {
    if (style === 'custom' && customTileUrl) {
      return {
        url: customTileUrl,
        attribution: customAttribution || '© Custom Map Provider',
        name: 'Custom Map'
      };
    }
    
    const selectedStyle = mapStyles[style] || mapStyles.default;
    return {
      ...selectedStyle,
      name: selectedStyle.name || style.charAt(0).toUpperCase() + style.slice(1)
    };
  };

  const tileConfig = getTileConfig();

  const handleMarkerClick = (marker: MapMarker) => {
    if (onMarkerClick) {
      onMarkerClick(marker);
    }
  };

  // Menentukan icon marker
  const getMarkerIcon = (iconType?: string) => {
    if (!iconType || iconType === 'default') {
      return markerIcons.default;
    }
    return markerIcons[iconType as keyof typeof markerIcons] || markerIcons.default;
  };

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={interactive}
        dragging={interactive}
        zoomControl={interactive}
        doubleClickZoom={interactive}
        style={{ 
          height: typeof height === 'number' ? `${height}px` : height,
          width: typeof width === 'number' ? `${width}px` : width,
          borderRadius: '8px',
          filter: style === 'dark' ? 'contrast(1.1) brightness(0.9)' : 'none'
        }}
      >
        <TileLayer
          url={tileConfig.url}
          attribution={tileConfig.attribution}
        />
        
        {/* Event Handler */}
        {onMapClick && <MapEventHandler onMapClick={onMapClick} />}
        
        {/* Render markers */}
        {markers.map((marker, index) => (
          <Marker 
            key={marker.id || index}
            position={[marker.lat, marker.lng]}
            icon={getMarkerIcon(marker.icon)}
            eventHandlers={{
              click: () => handleMarkerClick(marker),
            }}
          >
            {marker.popup && (
              <Popup>
                <div className={`p-2 ${style === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                  {marker.title && (
                    <h3 className="font-semibold mb-1">{marker.title}</h3>
                  )}
                  <p className="text-sm opacity-80">{marker.popup}</p>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>

      {/* Style indicator */}
      <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
        {tileConfig.name}
      </div>
    </div>
  );
};

export default StyledMapComponent;