interface ProjectDataType {
  id: number;
  image: string;
  category: string;
  title: string;
  link: string;
  client: string;
  date: string;
  website: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  animation: {
    duration: number;
    delay: number;
  };
  colClass: string;
}

const project_data: ProjectDataType[] = [
  {
    id: 1,
    image: '/assets/img/project/project-1-1.png',
    category: 'AI/ML',
    title: 'AI-Powered Analytics Dashboard',
    link: '/project-details/1',
    client: 'TechNova Solutions',
    date: '15 March, 2024',
    website: 'technova.ai',
    description: 'This AI-powered platform provides real-time data visualization and predictive analytics for enterprise clients. It features advanced machine learning models that help businesses anticipate market trends.',
    challenge: 'Handling multi-terabyte data streams with sub-second latency while maintaining a clean, intuitive user interface for executive decisions.',
    solution: 'Implemented a distributed data processing backend using Spark and a custom React-based frontend with optimized D3.js visualization components.',
    result: 'Increased decision-making efficiency by 40% and reduced data processing costs by 25% for our key enterprise partners.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 0.3 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
  {
    id: 2,
    image: '/assets/img/project/project-1-2.png',
    category: 'UX/UI',
    title: 'E-commerce Optimization Suite',
    link: '/project-details/2',
    client: 'Global Retails Inc.',
    date: '10 January, 2024',
    website: 'globalretail.shop',
    description: 'A comprehensive UX overhaul for a major retail platform, focusing on conversion rate optimization and mobile-first shopping experiences.',
    challenge: 'A high cart abandonment rate on mobile devices and a cluttered checkout process that frustrated users.',
    solution: 'Designed a one-tap checkout system and implemented an AI-driven product recommendation engine using personalized user data.',
    result: 'Conversion rates increased by 22% overall, with a massive 55% jump in mobile-specific sales within the first quarter.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 0.5 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
  {
    id: 3,
    image: '/assets/img/project/project-1-3.png',
    category: 'Cybersecurity',
    title: 'FinTech Security Portal',
    link: '/project-details/3',
    client: 'SafeWealth Bank',
    date: '22 December, 2023',
    website: 'safewealth.com',
    description: 'Developed a high-security internal portal for managing sensitive financial transactions and client authentication.',
    challenge: 'Meeting stringent international banking security standards while maintaining a fast, seamless experience for bank employees.',
    solution: 'Implemented multi-factor biometric authentication and end-to-end encrypted audit logs using private blockchain technology.',
    result: 'Zero security breaches reported since launch and improved internal compliance rating to the highest possible level.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 0.7 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
  {
    id: 4,
    image: '/assets/img/project/project-1-4.png',
    category: 'Healthcare',
    title: 'Smart Health Management',
    link: '/project-details/4',
    client: 'HealthBuddy Systems',
    date: '05 November, 2023',
    website: 'healthbuddy.app',
    description: 'A mobile application designed to connect patients with healthcare providers through secure telehealth and health tracking.',
    challenge: 'Fragmented patient data across multiple systems and the need for HIPPA-compliant video conferencing on low-bandwidth connections.',
    solution: 'Integrated an EMR-compatible database and developed an adaptive bitrate video streaming engine specifically for medical consultations.',
    result: 'Reduced patient wait times by 60% and successfully connected over 10,000 rural patients to specialist care.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 0.9 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
  {
    id: 5,
    image: '/assets/img/project/project-1-5.png',
    category: 'SaaS',
    title: 'Cloud Logistics System',
    link: '/project-details/5',
    client: 'SwiftShip Global',
    date: '18 October, 2023',
    website: 'swiftship.global',
    description: 'An enterprise-scale logistics management platform managing thousands of shipments across multiple continents.',
    challenge: 'Real-time tracking of mixed-mode transit (sea, air, road) with unpredictable delays and communication gaps.',
    solution: 'Deployed IoT-integrated tracking modules and a predictive delay engine that automates customer notifications and rerouting.',
    result: 'On-time delivery performance improved by 15% and administrative overhead was reduced by nearly 30%.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 1.1 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
  {
    id: 6,
    image: '/assets/img/project/project-1-6.png',
    category: 'EdTech',
    title: 'Educational Learning Platform',
    link: '/project-details/6',
    client: 'LearnScape Academy',
    date: '12 September, 2023',
    website: 'learnscape.edu',
    description: 'A gamified learning platform for K-12 students, focusing on STEM subjects through interactive 3D simulations.',
    challenge: 'Keeping students engaged in remote environments while accurately tracking complex learning progress beyond simple quizzes.',
    solution: 'Developed a WebGL-based 3D lab environment and an adaptive learning algorithm that tailors difficulty to individual student performance.',
    result: 'Average student test scores increased by 18% and teacher satisfaction ratings rose to 95%.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 0.8 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
  {
    id: 7,
    image: '/assets/img/project/project-1-7.png',
    category: 'Real Estate',
    title: 'Modern Real Estate CRM',
    link: '/project-details/7',
    client: 'PrimeEstate Group',
    date: '30 August, 2023',
    website: 'primeestate.crm',
    description: 'Custom CRM built specifically for high-end real estate agents, featuring virtual tour integration and automated lead nurturing.',
    challenge: 'High agent turnover and lost sales due to slow response times to web inquiries.',
    solution: 'Built an automated AI-chatbot lead qualifier and a unified dashboard for managing VR viewings and client feedback.',
    result: 'Lead response time dropped from 4 hours to 5 minutes, resulting in a 35% increase in property viewings.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 1.2 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
  {
    id: 8,
    image: '/assets/img/project/project-1-8.png',
    category: 'Business',
    title: 'Enterprise ERP Solution',
    link: '/project-details/8',
    client: 'Industrial Core Ltd.',
    date: '15 July, 2023',
    website: 'industrialcore.erp',
    description: 'A full-scale ERP system integrating manufacturing, HR, and accounting for a large-scale industrial client.',
    challenge: 'Integrating legacy inventory data from fragmented spreadsheet systems into a single source of truth.',
    solution: 'Developed custom ETL pipelines to migrate 10 years of data and a centralized cloud-native ERP dashboard.',
    result: 'Reduced inventory shrinkage by 12% and achieved complete real-time visibility into the manufacturing floor.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 1.3 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
  {
    id: 9,
    image: '/assets/img/project/project-1-9.png',
    category: 'Automation',
    title: 'SaaS Marketing Engine',
    link: '/project-details/9',
    client: 'GrowthHack SaaS',
    date: '01 June, 2023',
    website: 'growthhack.io',
    description: 'An automation engine for SaaS companies to scale their multi-channel marketing campaigns through centralized control.',
    challenge: 'Difficulty in attribution and high marketing spend with unclear ROI across social, email, and PPC channels.',
    solution: 'Built a multi-touch attribution engine and a centralized campaign commander that optimizes ad spend in real-time.',
    result: 'Reduced customer acquisition cost (CAC) by 28% while doubling the volume of qualified leads.',
    images: ['/assets/img/blog/blog-details-thumb-1-2.png', '/assets/img/blog/blog-details-thumb-1-3.png'],
    animation: { duration: 0.9, delay: 1.4 },
    colClass: 'col-xl-4 col-lg-4 col-md-6',
  },
];

export default project_data;
export type { ProjectDataType };
