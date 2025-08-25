export interface MapLocation {
  lat: number;
  lng: number;
}

export interface MapMarker extends MapLocation {
  id?: string;
  popup?: string;
  title?: string;
  icon?: 'default' | 'red' | 'blue' | 'green' | 'orange' | 'purple' | 'custom';
}

// Tambahan untuk styling
export interface MapStyle {
  name: string;
  url: string;
  attribution: string;
}

export interface MapStyles {
  [key: string]: MapStyle;
}

export interface MapProps {
  center: MapLocation;
  zoom?: number;
  markers?: MapMarker[];
  height?: string | number;
  width?: string | number;
  className?: string;
  interactive?: boolean;
  style?: string;
  customTileUrl?: string;
  customAttribution?: string;
  onMarkerClick?: (marker: MapMarker) => void;
  onMapClick?: (location: MapLocation) => void;
}

export interface ContactMapProps {
  companyLocation: MapLocation;
  companyName?: string;
  companyAddress?: string;
  className?: string;
  height?: string | number;
  style?: 'default' | 'dark' | 'satellite' | 'terrain' | 'minimal' | 'custom';
  customTileUrl?: string;
  markerIcon?: 'default' | 'red' | 'blue' | 'green' | 'orange' | 'purple' | 'custom';
}