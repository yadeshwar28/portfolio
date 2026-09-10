export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features?: string[];
  product?: string;
  tools?: string[];
  contribution?: string[];
  outcome?: string;
  information?: string;
  liveUrl?: string;
  liveButtonText?: string;
  locationUrl?: string;
  locationText?: string;
  details?: {
    context?: string;
    myRole?: string;
    whatIDid?: string[];
    outcome?: string;
    learning?: string;
  };
  metrics?: { label: string; value: string }[];
  accentColor?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  typeBadge: string;
  metrics?: { label: string; value: string }[];
  responsibilities: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
}
