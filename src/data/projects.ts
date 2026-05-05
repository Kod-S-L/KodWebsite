/**
 * Project catalogue.
 *
 * NOTE: Most entries are placeholders. Replace `externalUrl`, `image`,
 * descriptions and titles with real client projects when ready. Keep the
 * shape intact so the carousel and grid keep working.
 */

export type ProjectCategory =
  | 'Web Development'
  | 'Custom Software'
  | 'Automation'
  | 'Landing Page'
  | 'Maintenance';

export type ProjectStatus = 'Active' | 'In Progress' | 'Planned';

export interface Project {
  /** Stable id used as a React/Astro key. */
  id: string;
  title: string;
  /** Short, client-friendly description (1–2 sentences). */
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** Highlight on the carousel. */
  featured?: boolean;
  /** Path to a screenshot in /public, or remote URL. Leave empty to render a placeholder. */
  image?: string;
  /** Public live URL of the project. TODO: replace with the real one. */
  externalUrl?: string;
  /** Optional internal page (e.g. a case study). */
  detailsUrl?: string;
  /** Short tag list for the card footer. */
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 'kod-website',
    title: 'KOD Website',
    description:
      'The site you are looking at — a fast, accessible portfolio website for the KOD team, easy to maintain and update.',
    category: 'Web Development',
    status: 'Active',
    featured: true,
    // TODO: add a screenshot at /public/projects/kod-website.png
    detailsUrl: '/',
    tags: ['Website', 'Portfolio'],
  },
  {
    id: 'business-website',
    title: 'Business Website',
    description:
      'A presentation site for a small business — services, contact form and a clear, modern visual identity.',
    category: 'Web Development',
    status: 'In Progress',
    featured: true,
    // TODO: replace with the real live URL when published.
    externalUrl: undefined,
    tags: ['Website', 'Small Business'],
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    description:
      'A focused, high-conversion landing page for a product launch — clear value proposition and a single primary action.',
    category: 'Landing Page',
    status: 'Planned',
    featured: true,
    externalUrl: undefined,
    tags: ['Landing', 'Conversion'],
  },
  {
    id: 'internal-tool',
    title: 'Internal Tool',
    description:
      'A custom dashboard that replaces messy spreadsheets and gives the team a single place to track day-to-day work.',
    category: 'Custom Software',
    status: 'Planned',
    externalUrl: undefined,
    tags: ['Internal', 'Dashboard'],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'Connects existing tools (forms, spreadsheets, email) to remove repetitive copy-paste work for the back office.',
    category: 'Automation',
    status: 'Planned',
    externalUrl: undefined,
    tags: ['Automation', 'Operations'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
