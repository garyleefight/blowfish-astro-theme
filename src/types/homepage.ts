export type BlowfishHomepageLayout =
  | 'profile'
  | 'page'
  | 'hero'
  | 'background'
  | 'card'
  | 'custom';

export interface BlowfishLink {
  label: string;
  href: string;
  icon?: string;
}

export interface BlowfishFeatureCard {
  title: string;
  summary?: string;
  href?: string;
  image?: string;
}

export interface BlowfishRecentArticle {
  title: string;
  summary?: string;
  date?: string;
  href: string;
}

export interface BlowfishHomepageConfig {
  layout: BlowfishHomepageLayout;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showRecent?: boolean;
  recentLimit?: number;
  cardView?: boolean;
  cardViewScreenWidth?: boolean;
  links?: BlowfishLink[];
  featureCards?: BlowfishFeatureCard[];
}
