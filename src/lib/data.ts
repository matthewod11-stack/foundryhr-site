import {
  Cpu,
  Users,
  TrendingUp,
  Zap,
  MessageSquare,
  Database,
  Shield,
  BarChart3,
  FileText,
  Code,
  type LucideIcon,
} from 'lucide-react';

// ============================================================================
// HERO SECTION
// ============================================================================

export interface HeroPanel {
  id: number;
  headline: string;
  subtext?: string;
  stats?: HeroStat[];
}

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export const heroPanels: HeroPanel[] = [
  {
    id: 1,
    headline: "The future of HR isn't coming from HR tech companies",
  },
  {
    id: 2,
    headline: "Matt O'Donnell",
    subtext: "AI-First HR Leader",
    stats: [
      { value: 15, suffix: '+', label: 'Years scaling technical orgs' },
      { value: 25, suffix: '', label: 'Custom AI skills built' },
      { value: 3, suffix: '', label: 'Months to ship full-stack platform' },
    ],
  },
  {
    id: 3,
    headline: "Scroll down to explore",
  },
];

// ============================================================================
// CONSULTING SECTION
// ============================================================================

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  challenge: string;
  approach: string[];
  results: string[];
}

export const services: Service[] = [
  {
    id: 'ai-hr-ops',
    icon: Cpu,
    title: 'AI-Powered HR Operations',
    shortDescription:
      'Embed intelligent automation into your existing HR workflows. From onboarding to performance reviews, let AI handle the repetitive work.',
    challenge:
      "HRBPs spend 60% of their time on administrative work—drafting PIPs, building onboarding plans, analyzing engagement surveys, updating spreadsheets. Meanwhile, their data is scattered across five systems and nobody has time for actual strategic work.",
    approach: [
      'Embed intelligent automation into existing HR workflows',
      'From onboarding to performance reviews, let AI handle repetitive work',
      'Build chat-first interfaces that consolidate your entire HR tech stack',
      'Focus your team on high-impact work: coaching managers, shaping culture, solving real problems',
    ],
    results: [
      'Reduce manual HR overhead by 60%+',
      'Make data-driven people decisions in minutes, not days',
      'Scale from 10 to 100+ employees without adding headcount',
      'Stay compliant without the complexity',
    ],
  },
  {
    id: 'tech-recruiting',
    icon: Users,
    title: 'Technical Recruiting Strategy',
    shortDescription:
      "The old way of scaling teams is dead. When AI handles execution, you're hiring for taste, judgment, and systems thinking—not roles.",
    challenge:
      "I've built the standard approaches. I've experimented. This is where I'm landing: execution isn't the bottleneck anymore. When AI tools can move from idea to implementation in minutes, what matters is taste, judgment, and the ability to see across domains. You're not hiring for roles—you're hiring for breadth and depth, systems thinking, and learning velocity. Different teams have different needs, and I adapt the approach accordingly.",
    approach: [
      'Identify candidates with broad cross-functional experience and deep expertise in something AI can\'t replicate: judgment and strategic thinking',
      'Build small, fluid teams where everyone works collaboratively, breaking down silos between departments',
      'Assess for taste, vision, and context—the deeply human capabilities that AI can\'t solve',
      'Design hiring processes that recognize roles as overlapping areas of expertise with different depths, not separate departments',
    ],
    results: [
      'Build lean teams where people working across functions outperform larger groups of specialists coordinating handoffs',
      'Hire for the capabilities that matter: vision, judgment, and systems thinking',
      'Create fluid boundaries that let AI handle execution while your team focuses on what makes it valuable',
      'Adapt the approach to each team\'s unique needs—there\'s no one-size-fits-all',
    ],
  },
  {
    id: 'people-infra',
    icon: TrendingUp,
    title: 'Scalable People Infrastructure',
    shortDescription:
      "Design systems that grow with you. Payroll, benefits, equity, compliance—all integrated and ready for your next funding round.",
    challenge:
      "You've been duct-taping together spreadsheets, manual processes, and whatever HR tool had the best free tier. It worked at 20 people. At 50, it's breaking. At 100, it will collapse.",
    approach: [
      'Audit current systems and identify critical gaps',
      'Design scalable workflows for payroll, benefits, and equity',
      'Implement compliance frameworks that grow with you',
      'Build dashboards that give leadership real-time visibility',
    ],
    results: [
      'Reduce HR administrative time by 50%+',
      'Pass due diligence for your next funding round',
      'Eliminate compliance gaps and reduce legal risk',
      'Create consistent employee experience across the org',
    ],
  },
  {
    id: 'hr-tech-stack',
    icon: Zap,
    title: 'HR Tech Stack Modernization',
    shortDescription:
      "Audit your current tools, eliminate redundancy, and implement best-in-class solutions that actually talk to each other.",
    challenge:
      "You're paying for 7 different HR tools that don't integrate, nobody knows how to use half of them, and you're still exporting to Excel for any real analysis.",
    approach: [
      'Comprehensive audit of current HR technology landscape',
      'Map data flows and identify integration opportunities',
      'Recommend and implement modern, integrated solutions',
      'Train teams and create documentation for sustainable adoption',
    ],
    results: [
      'Consolidate tools and reduce HR tech spend by 30%+',
      'Eliminate manual data entry and reduce errors',
      'Enable real-time reporting and analytics',
      'Create a unified employee experience',
    ],
  },
];

export const consultingBenefits = [
  'Reduce manual HR overhead by 60%+',
  'Make data-driven people decisions',
  'Scale from 10 to 100+ without chaos',
  'Stay compliant without the complexity',
];

// ============================================================================
// HR COMMAND CENTER (PROJECT) SECTION
// ============================================================================

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const projectFeatures: Feature[] = [
  {
    icon: MessageSquare,
    title: 'Chat-First Interface',
    description: 'Natural language commands for all HR workflows',
  },
  {
    icon: Cpu,
    title: '25 Custom AI Skills',
    description: 'Performance reviews, comp analysis, PIPs, and more',
  },
  {
    icon: Database,
    title: 'Multi-Provider AI',
    description: 'Automatic failover between Claude, OpenAI, and Gemini',
  },
  {
    icon: Shield,
    title: 'Production Infrastructure',
    description: 'Auth, RBAC, rate limiting, comprehensive testing',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Headcount, attrition, engagement—all in one place',
  },
  {
    icon: FileText,
    title: 'Document Generation',
    description: 'PIPs, offer letters, onboarding plans—instantly',
  },
];

export const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'SQLite',
  'Claude AI',
  'OpenAI',
  'Gemini',
];

export const projectStory = {
  headline: 'From zero to production in 3 months',
  description:
    "I didn't learn to code the traditional way. I learned to leverage AI tools by diving into docs, reading papers, and relentless experimentation. From prototype to production software.",
  githubUrl: 'https://github.com/matthewod11-stack/HRSkills',
  githubHandle: 'matthewod11-stack/HRSkills',
};

// ============================================================================
// EXPERIENCE SECTION
// ============================================================================

export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  tags: string[];
  url?: string;
}

export const jobs: Job[] = [
  {
    id: 'lunar-labs',
    company: 'Lunar Labs',
    role: 'Head of People & Talent',
    period: 'Oct 2025 – Present',
    location: 'San Francisco',
    shortDescription:
      'Building People function for a crypto/AI startup at the intersection of DeFi and AI.',
    fullDescription:
      "First People hire at a stealth startup operating at the intersection of DeFi and artificial intelligence. Reporting directly to the CEO (ex-Coinbase), I'm building the entire People function from scratch—talent acquisition, people operations, and culture—for a mission-driven technical team.",
    highlights: [
      'Designing talent acquisition strategy for DeFi × AI roles',
      'Building People Ops with AI-first automation',
      'Establishing culture for mission-driven technical team',
      'Creating compensation and equity frameworks',
    ],
    tags: ['DeFi', 'AI', 'Startup', 'First HR Hire'],
    url: 'https://moonwell.fi',
  },
  {
    id: 'agoric',
    company: 'Agoric',
    role: 'Director of People',
    period: 'Dec 2022 – Oct 2025',
    location: 'Remote',
    shortDescription:
      'First HR hire supporting 85% senior engineers building blockchain infrastructure.',
    fullDescription:
      "First HR hire supporting a highly technical organization (85% senior engineers) building cutting-edge blockchain infrastructure. No playbook. No existing systems. Just me, a distributed team of world-class engineers, and a mission to make smart contracts secure and accessible.\n\nI earned the trust of engineers by understanding their work, speaking their language, and building systems that respected their time. I navigated the complexity of global hiring across 5 countries, designed career frameworks for roles that didn't exist anywhere else, and built an HR function that could support a team solving problems at the frontier of technology.",
    highlights: [
      'Trusted advisor to C-suite and VP Engineering',
      'Designed career frameworks for blockchain engineers',
      'Navigated global hiring across 5 countries',
      'Built HR policies and systems from scratch',
      'Managed compensation strategy across crypto market volatility',
    ],
    tags: ['Web3', 'First HR Hire', 'Global', 'Remote'],
    url: 'https://agoric.com',
  },
  {
    id: 'sundae',
    company: 'Sundae',
    role: 'Director of People Operations',
    period: 'Jan 2021 – Nov 2022',
    location: 'San Francisco',
    shortDescription:
      'Scaled from 100 to 600 employees in 18 months. Hypergrowth at its finest.',
    fullDescription:
      "Joined at 100 employees and helped scale to 600+ in 18 months during the pandemic-era real estate boom. This was hypergrowth at its most intense—hiring 25+ people per month while building the systems to onboard, develop, and retain them.\n\nI scaled the engineering team from 15 to 150+ engineers, implemented technical career ladders, built performance calibration systems with data frameworks, and led a team of 5 recruiters hiring ~500 employees. Through it all, we maintained our culture and kept voluntary attrition below industry average.",
    highlights: [
      'Scaled engineering from 15 to 150+ engineers',
      'Built performance calibration with data frameworks',
      'Implemented technical career ladders',
      'Led team of 5 recruiters hiring ~500 employees',
      'Maintained culture through 6x growth',
    ],
    tags: ['Hypergrowth', 'PropTech', '6x Scale'],
    url: 'https://sundae.com',
  },
];

export const earlierCareer = [
  { company: 'Accenture / ?What If! Innovation', role: 'People Business Partner' },
  { company: 'Dentsu Aegis Network', role: 'Business Recruiting Manager' },
  { company: 'Vecna Robotics', role: 'Technical Recruiting Manager' },
];

export const experiencePillars = [
  {
    icon: Code,
    title: 'Technical Credibility',
    description: "15 years of building technical teams and supporting technical leaders has rubbed off",
  },
  {
    icon: TrendingUp,
    title: 'Hypergrowth Expert',
    description: '100→600 employees. 15→150 engineers.',
  },
  {
    icon: Users,
    title: 'First HR Hire',
    description: 'Building from zero is my specialty.',
  },
];

// ============================================================================
// ABOUT SECTION
// ============================================================================

export const aboutContent = {
  paragraphs: [
    "I've spent 15+ years building people functions at technical companies—from Web3 startups to hypergrowth scale-ups. I'm usually the first HR hire, which means there's no playbook, no existing systems, and a lot of ambiguity to navigate.",
    "Working alongside highly technical teams and leaders has been inspiring—seeing how they build and solve problems pushed me to start building on my own. I've learned to leverage AI tools to create production software, understanding system architecture and what makes engineers tick. When I talk about \"AI-first HR,\" it comes from actually building it.",
    "Outside of work, I'm happily married with one toddler. I also make music (Downtown Country, Brains on Empty), direct short films, and somehow manage a 14-person fantasy football league that's been running for 11 seasons.",
  ],
  credentials: 'MA in Organizational Psychology · SHRM-CP Certified',
};

// ============================================================================
// CREATIVE SECTION
// ============================================================================

export interface CreativeProject {
  id: string;
  type: 'music' | 'film';
  title: string;
  description: string;
  coverImage?: string;
  externalUrl: string;
}

export const creativeProjects: CreativeProject[] = [
  {
    id: 'downtown-country',
    type: 'music',
    title: 'Downtown Country',
    description: 'Where country meets the city',
    coverImage: '/images/creative/downtown-country.jpg',
    externalUrl: 'https://open.spotify.com/album/7jtRI1wEqthRdtyXTxO5zE',
  },
  {
    id: 'brains-on-empty',
    type: 'music',
    title: 'Brains on Empty',
    description: 'Late night studio sessions',
    coverImage: '/images/creative/brains-on-empty.jpg',
    externalUrl: 'https://open.spotify.com/artist/1qTG1xVXvf0f81NP62RSUf',
  },
  {
    id: 'killing-villa-roma',
    type: 'film',
    title: 'Killing Villa Roma',
    description: 'A short film',
    coverImage: '/images/creative/foothills-maileja.jpg',
    externalUrl: 'https://youtu.be/kP95AWTZwJs',
  },
  {
    id: 'foothills-maileja',
    type: 'film',
    title: 'Foothills of the Maileja',
    description: 'A short film',
    coverImage: '/images/creative/killing-villa-roma.jpg',
    externalUrl: 'https://youtu.be/kFBoAR-eo7E',
  },
];

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const contactInfo = {
  email: 'matthew@foundryhr.com',
  location: 'San Francisco, CA',
  linkedin: 'https://linkedin.com/in/mattod88',
  github: 'https://github.com/matthewod11-stack',
  twitter: 'https://x.com/Matthewod11',
  foundryhr: 'https://foundryhr.com',
};

export const contactCTA = {
  headline: 'Ready to modernize your people operations?',
  description:
    "Let's talk about where you are, where you're going, and how to build the systems to get you there.",
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navLinks = [
  { href: '#consulting', label: 'Consulting' },
  { href: '#project', label: 'HR Command Center' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];
