import { LucideIcon } from "lucide-react";

export interface ScheduleItem {
  day: string;
  period: string;
  type: string;
  icon: LucideIcon;
  color: 'primary' | 'secondary' | 'accent';
  title: string;
  topics: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DifferentialItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

export interface TargetAudiencePoint {
  text: string;
}

export interface CertificationBenefit {
  text: string;
}

export interface ProfessorQualification {
  category: 'education' | 'experience' | 'publications';
  items: string[];
}

export interface CourseConfig {
  name: string;
  subtitle: string;
  description: string;
  dates: {
    start: string;
    end: string;
    promotionDeadline: Date;
  };
  location: {
    name: string;
    city: string;
    state: string;
  };
  contact: {
    whatsapp: string;
    email: string;
    phone: string;
  };
  pricing: {
    original: number;
    promotional: number;
  };
  professor: {
    name: string;
    title: string;
    description: string;
    image: string;
    qualifications: {
      education: string[];
      experience: string[];
      publications: string[];
    };
    quote: string;
  };
  targetAudience: string[];
  certificationBenefits: string[];
}
