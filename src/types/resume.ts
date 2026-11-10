export interface ResumeProfile {
  name: string
  title: string
  location: string
  phone: string
  email: string
  experienceYears: string
  summary: string
  linkedinUrl?: string
  githubUrl?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ResumeProject {
  id: string
  title: string
  client: string
  techStack: string[]
  bullets: string[]
}

export interface ExperienceEntry {
  title: string
  organization: string
  focus?: string
  promotion?: string
  domain?: string
  period: string
  projects: ResumeProject[]
}

export interface EducationEntry {
  degree: string
  institution: string
  result: string
  period: string
}

export interface ResumeData {
  profile: ResumeProfile
  skills: SkillGroup[]
  experience: ExperienceEntry[]
  projects: ResumeProject[]
  certifications: string[]
  achievements: string[]
  education: EducationEntry
}
