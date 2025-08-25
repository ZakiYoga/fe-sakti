import { LucideIcon } from "lucide-react";

// Type definitions for data structures
export interface CompanyStat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export interface CompanyValue {
  icon: LucideIcon;
  title: string;
  description: string;
  color? : string;
}

export interface TimelineItem {
  year: string;
  milestone: string;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  type: 'award' | 'certificate';
}

export interface MissionPoint {
  title: string;
  description: string;
}

export interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}