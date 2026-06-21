import { Project, Service, ValueItem, EducationItem, ExperienceItem } from './types';

export const HERO_TYPING_WORDS = [
  'Computer Science Graduate.',
  'Web Developer.',
  'Digital Creator.',
  'Technology Enthusiast.',
  'Educator.'
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'luxury-fashion',
    title: 'Luxury Fashion Retailer',
    subtitle: 'Bespoke high-end digital storefront built with next-gen features.',
    description: 'A complete digital overhaul focusing on high-conversion paths, premium aesthetic representation, lightning-fast transitions, and bespoke product customizers. Integrates customized Shopify headless backends with absolute design liberty.',
    category: 'E-Commerce',
    tags: ['Shopify', 'Headless', 'Tailwind', 'Liquid'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALz4112CckNgxC9JyOsReD-W4ViiE9tXYV7PWY9meJbmAVIDqFm31hQ08G5Q4M3ir32i3SG_hZSoUeAsMuhk-dZYFPruNkAPXaqvpCcaBviq-n7sYqocWt2KAj8mGjRnJ5VgwO8z6oL9M3FYnuDLQYA182HpT5exMgN5xYG4fKg-DmaUEvWch-3AbNgsfppEttyo7nqvHB1iEAC2yyKItffbs8xzIt4_C4ibQYoVy6jCuXHoLnFZVkZRWBJ5_rdFQCT9JHBq5cclw'
  },
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    subtitle: 'Interactive real-time SaaS platform with intricate visualization charts.',
    description: 'A highly stylized dashboard interface built with precision charts, financial predictions, real-time analytics stream integration, and high-security state machines. The user interface features delicate glassmorphism and subtle neon accenting.',
    category: 'Web App',
    tags: ['React', 'D3.js', 'WebSockets', 'Tailwind'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4TkGNTGNM8IRCR5GAcET8rpbhTmJ4S7gzEuL1khYBf406CRiC0g6_721gXqKprw3rs0QjTU62UmMg2URyETumrkvzQ7T6Mi_mPMFIxc_hXJNyhLzYvXSGWlytMWZJnnBYB1H1iaH8SfdxhMbS4Zsvb6Yw1nhrU6ujU_rBR4Fl1f0qJoLDmiqPFtI0k7stqisrXCCHydxyV6DqyodiZWnyOR7r_ucqvYosAWo7eAvn1F5kZ8eY5Cn_MZr3FJYUYl8-rpWf7-dTTL4'
  },
  {
    id: 'cosmic-workspace',
    title: 'Creative Workspace Canvas',
    subtitle: 'A fully collaborative designer canvas utilizing fluid visual layouts.',
    description: 'Collaborative cloud environment mapping system designed for creative studios. Implements severe-performance viewport calculations, infinite zoom, customizable drag-and-drop elements, and persistent local caching.',
    category: 'Design Systems',
    tags: ['WebGL', 'TypeScript', 'Node.js', 'Framer Motion'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe2atmf6IwfMOEhmhzzVjMe1P-IOmjtaIp7wUf90aPiXGtXR42eNzoIdYE0qfLPvoOuxgTNMq9hvDvIgIfbFAFkwEX5rW7lFUgGwNhkehXjbWq2M7l_lk5qF62fcM1jHY2lwdGyannWRe5Ltg2B6cQwwWZZswKe8cuYj7HdKCt81AgChC60NgS9L2R4uCJM8jFTReUIOLsakKnNOlSGpfLfoXaYJZLXBektD6gzlbqAwxnhqmPNHEy3x-MdpCee0EbhnbAP8DFUjc'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Crafting bespoke, high-performance web applications tailored to specific business needs. Utilizing modern frameworks to ensure scalability, speed, and seamless user experiences across all devices.',
    iconName: 'code',
    tags: ['React', 'Next.js', 'Tailwind'],
    colorTheme: 'cyan'
  },
  {
    id: 'shopify-dev',
    title: 'Shopify Development',
    description: 'Designing and developing premium e-commerce storefronts on Shopify. Focusing on conversion optimization, custom theme architecture, and seamless integrations to drive sales and brand loyalty.',
    iconName: 'storefront',
    tags: ['Liquid', 'Headless', 'GraphQL'],
    colorTheme: 'violet'
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    description: 'End-to-end digital strategy and implementation. From system architecture mapping to API integrations and workflow automation, building the technical backbone for modern enterprises.',
    iconName: 'integration_instructions',
    tags: ['APIs', 'Security', 'Scalability'],
    colorTheme: 'cyan'
  },
  {
    id: 'tech-training',
    title: 'Technical Training',
    description: 'Empowering teams with the knowledge to maintain and scale digital infrastructure. Offering customized workshops on modern web technologies, workflow optimization, and best practices in software development.',
    iconName: 'model_training',
    tags: ['Workshops', 'Mentoring', 'Architecture'],
    colorTheme: 'violet'
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description: 'Reliable technical assistance and system maintenance. Ensuring operational continuity through proactive monitoring, troubleshooting, and robust security protocol implementations.',
    iconName: 'support_agent',
    tags: ['Monitoring', 'Security', 'Troubleshooting'],
    colorTheme: 'cyan'
  }
];

export const CORE_VALUES_DATA: ValueItem[] = [
  {
    title: 'Technical Mastery',
    description: 'Continuous learning and application of cutting-edge web technologies to solve complex problems efficiently with bulletproof architectures.',
    iconName: 'code_blocks',
    colorTheme: 'cyan'
  },
  {
    title: 'Aesthetic Precision',
    description: 'Believing that great engineering must be paired with flawless, intuitive design. Every pixel, shadow, margin, and interaction must remain highly deliberate.',
    iconName: 'design_services',
    colorTheme: 'violet'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: '2019 - 2023',
    degree: 'B.S. Computer Science',
    school: 'University of Technology',
    colorTheme: 'cyan'
  },
  {
    period: '2023 - Present',
    degree: 'Advanced Web Architecture',
    school: 'Continuous Professional Development',
    colorTheme: 'violet'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'sen-ui',
    role: 'Senior UI Engineer',
    company: 'TechCorp Innovators',
    period: '2021 - Present',
    description: 'Spearheaded the complete redesign of the core enterprise platform, transitioning to a modern, component-driven architecture. Improved rendering performance by 40% and established a comprehensive design system utilized by over 50 developers.',
    tags: ['React', 'TypeScript', 'WebGL'],
    colorTheme: 'cyan'
  },
  {
    id: 'creative-dev',
    role: 'Creative Developer',
    company: 'Digital Arts Studio',
    period: '2018 - 2021',
    description: 'Crafted award-winning promotional websites for high-profile film releases. Blended interactive storytelling with complex WebGL shaders to create immersive, cinematic experiences right inside the web browser.',
    tags: ['Three.js', 'GSAP', 'Vue.js'],
    colorTheme: 'violet'
  }
];
