import type { IconName } from './icons';

export interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: 'layout',
    title: 'Web development',
    description:
      'Fast, reliable websites tailored to your business — built to load quickly, look clean, and stay easy to update.',
  },
  {
    icon: 'code',
    title: 'Custom software',
    description:
      'Bespoke tools and platforms shaped around how your team actually works, instead of forcing your business into off-the-shelf software.',
  },
  {
    icon: 'cog',
    title: 'Business automations',
    description:
      'Quietly remove repetitive tasks: connect tools you already use, eliminate manual work, and free up time for what matters.',
  },
  {
    icon: 'spark',
    title: 'Landing & portfolio sites',
    description:
      'Focused, high-converting one-pagers and portfolios designed to communicate clearly and get visitors to act.',
  },
  {
    icon: 'wrench',
    title: 'Maintenance & improvements',
    description:
      'We take over existing websites or applications, fix what is broken, improve performance, and keep them running smoothly.',
  },
];
