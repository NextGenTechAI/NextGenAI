export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  disclaimer?: string;
  iconName: string;
  gradient: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
  disclaimer?: string;
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  serviceCategory: string;
  budgetRange: string;
  requirements: string;
  privacyConsent: boolean;
}

