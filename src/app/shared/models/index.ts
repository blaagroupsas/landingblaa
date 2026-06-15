export interface ServiceModal {
  headline: string;
  body: string;
  includes: string[];
  idealFor: string;
  timeline: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path data
  featured?: boolean;
  modal: ServiceModal;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl?: string; // optional — placeholder shown when absent
  linkedin?: string;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string;
  sector?: string;
}

export interface Differential {
  number: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}
