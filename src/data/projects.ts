export interface Project {
  title: string;
  description?: string;
  tags: string[];
  url?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: 'Mobile Marketplace Application',
    description: 'A mobile marketplace connecting neighbours who need tasks done with local service providers. Features dual user roles, subscription-based provider accounts, background verification, and earnings analytics. Currently in active development.',
    tags: ['Flutter', 'Dart', 'Supabase', 'Drift', 'RevenueCat'],
  },
];
