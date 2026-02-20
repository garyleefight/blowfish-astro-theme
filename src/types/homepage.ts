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
  thumbnail?: string;
}

export interface BlowfishRecentArticle {
  title: string;
  summary?: string;
  date?: string;
  href: string;
  thumbnail?: string;
}

export interface BlowfishHomepageConfig {
  layout: BlowfishHomepageLayout;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  homepageImage?: string;
  imageAlt?: string;
  backgroundImage?: string;
  /** Background layout: optional background video URL (webm preferred). Takes precedence over backgroundImage when set. */
  backgroundVideo?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showRecent?: boolean;
  showRecentItems?: number;
  recentLimit?: number;
  cardView?: boolean;
  cardViewScreenWidth?: boolean;
  showMoreLink?: string;
  links?: BlowfishLink[];
  featureCards?: BlowfishFeatureCard[];
  /** Hero layout: disable gradient filter over background image */
  disableHeroImageFilter?: boolean;
  /** Background layout: enable scroll-based background blur */
  layoutBackgroundBlur?: boolean;
}
