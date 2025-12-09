export interface BinLocation {
  id: string;
  name: string;
  address?: string;
  active: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string; // URL placeholder
}

export interface SiteContent {
  general: {
    phone: string;
    email: string;
    address: string;
    missionShort: string;
    missionLong: string;
    history: string;
  };
  binLocations: BinLocation[];
  events: EventItem[];
  partners: Partner[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  resetToDefaults: () => void;
}