export interface JourneyNode {
  id: string;
  title: string;
  caption: string;
  status: 'past' | 'present' | 'future';
  date: string;
}

export interface ProjectImpact {
  metric: string;
  value: string;
  description: string;
}

export interface ProjectDeepDive {
  situation: string;
  task: string;
  action: string;
  result: string;
  logic: string;
  architecture: string;
  metricsImproved: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tldr: string;
  problem: string;
  built: string;
  impact: ProjectImpact[];
  tools: string[];
  image: string;
  link?: string;
  deepDive: ProjectDeepDive;
}

export interface Tool {
  name: string;
  category: 'Data & Storage' | 'Automation & Pipelines' | 'Analytics & BI' | 'INTELLIGENT SYSTEMS' | 'Modeling & Architecture';
}