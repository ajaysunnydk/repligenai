export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  roleApplied: string;
  locationPreference?: string;
  workAuthorization?: string;
  yearsExperience?: number;
  salaryExpectations?: string;
  availabilityDate?: string;
  message?: string;
  resume?: File;
  consent: boolean;
}

export interface ContactFormData {
  name: string;
  company: string;
  workEmail: string;
  roleNeeded: string;
  timeline: string;
  message: string;
  consent: boolean;
}

export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  date: string;
  experience: string;
  vacancies: string;
  isNew?: boolean;
}
