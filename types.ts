
export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  popular?: boolean;
}
