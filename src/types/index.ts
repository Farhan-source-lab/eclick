export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  overview: string;
  icon: string;
  creamIcon: string;
  lottieFile: string;
  perks: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  technologies: string[];
  deliverables: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  mockup: string;
  liveUrl?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  logo?: string;
}

export interface LocationItem {
  slug: string;
  name: string;
  region: string;
  coords: [number, number]; // [lat, lng]
  intro: string;
  description: string;
  services: string[];
  metaDescription: string;
}

export interface FaqItem {
  q: string;
  a: string;
  category?: 'general' | 'services' | 'process' | 'pricing';
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  image?: string;
  content: string[];
}
