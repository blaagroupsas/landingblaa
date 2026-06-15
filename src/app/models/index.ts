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
  icon: string;
  featured?: boolean;
  modal: ServiceModal;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
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

export interface BrandValue {
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  whatsapp: string;
  sector: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data: ContactForm & { id?: number; created_at?: string };
}
