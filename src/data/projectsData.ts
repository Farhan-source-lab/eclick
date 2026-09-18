import { Project } from '../types';

export const projectsData: Project[] = [
  {
    slug: 'ai-lead-threat-intelligence',
    title: 'AI Lead Threat Intelligence',
    category: 'AI Solutions',
    client: 'Saudisoft & AIM United Global',
    year: '2024',
    summary: 'Autonomous threat detection, risk scoring, and real-time security alerts engineered with agentic AI models.',
    challenge: 'Enterprise infrastructure faced mounting alert fatigue and delayed incident triage from disparate network monitoring tools.',
    solution: 'Engineered an Agentic AI engine with continuous zero-latency threat detection, automated risk scoring, and instant containment alerts.',
    results: [
      '94% reduction in false-positive security alerts across enterprise networks',
      'Continuous threat scoring under 45ms with real-time anomaly detection',
      'Automated containment alerts deployed across multi-region cloud servers'
    ],
    metrics: [
      { label: 'Alert Accuracy', value: '99.4%' },
      { label: 'Response Latency', value: '< 45ms' },
      { label: 'Triage Overhead', value: '-82%' }
    ],
    mockup: '/brand/projects/salaam-cup-platform.png',
    liveUrl: 'https://eclicktechsolutions.com',
    tags: ['AI Solutions', 'Threat Detection', 'Risk Scoring', 'Real-Time Alerts', 'Agentic AI']
  },
  {
    slug: 'enterprise-data-management-platform',
    title: 'Data Management Platform',
    category: 'Software Development',
    client: 'Enterprise Cloud Operations',
    year: '2024',
    summary: 'Unified multi-database platform featuring hybrid vector semantic search, partitioned pipelines, and dedicated AI workspaces.',
    challenge: 'Fragmented data silos and slow query indexing prevented engineering teams from uncovering contextual insights efficiently.',
    solution: 'Architected a scalable enterprise data hub combining semantic vector search, automated schema normalization, and interactive AI workspaces.',
    results: [
      'Sub-second semantic search indexing across 10M+ structured and unstructured records',
      'Unified data accessibility across multi-cloud databases with end-to-end security',
      'Enhanced engineering workflow velocity with collaborative AI workspaces'
    ],
    metrics: [
      { label: 'Search Latency', value: '< 0.3s' },
      { label: 'Records Indexed', value: '10M+' },
      { label: 'Data Retrieval', value: '4.8x faster' }
    ],
    mockup: '/brand/projects/kompass-koffee-website.png',
    tags: ['Software Development', 'Semantic Search', 'Multi-Database', 'AI Workspaces', 'Enterprise Data']
  },
  {
    slug: 'ai-revops-copilot',
    title: 'AI RevOps Copilot',
    category: 'AI Solutions',
    client: 'B2B Revenue & Operations',
    year: '2024',
    summary: 'Autonomous revenue intelligence copilot featuring bidirectional Salesforce integration, invoice parsing AI, and predictive deal forecasting.',
    challenge: 'Revenue teams spent 15+ hours weekly on manual invoice matching, disjointed CRM updates, and inaccurate quarterly pipeline forecasts.',
    solution: 'Developed a custom LLM RevOps copilot that syncs directly with Salesforce, extracts invoice data instantly, and provides predictive revenue insights.',
    results: [
      '100% automated invoice reconciliation directly linked to Salesforce deals',
      '15 hours saved per account executive weekly in manual CRM documentation',
      'Quarterly revenue forecasting model achieved 96.2% predictive accuracy'
    ],
    metrics: [
      { label: 'Forecast Accuracy', value: '96.2%' },
      { label: 'Admin Time Saved', value: '15h/wk' },
      { label: 'Pipeline Velocity', value: '+38%' }
    ],
    mockup: '/brand/projects/the-deen-qween-website.png',
    tags: ['AI Solutions', 'Salesforce Integration', 'Invoice AI', 'Revenue Insights', 'AI Automations']
  },
  {
    slug: 'ecommerce-automation-retention',
    title: 'E-Commerce Automation',
    category: 'E-Commerce',
    client: 'Boxoo & WallCraft Panels',
    year: '2024',
    summary: 'Comprehensive retention engine combining automated cart recovery, behavioral email sequences, and customer journey optimization.',
    challenge: 'A high checkout abandonment rate of 68% and rising paid acquisition costs were compressing store margins.',
    solution: 'Designed and deployed intelligent behavioral triggers, automated abandoned cart recovery flows, and dynamic lifecycle email nurture tracks.',
    results: [
      '26.4% recovery rate on abandoned checkout sessions within 4 hours',
      '3.4x lift in repeat customer purchases through automated post-purchase flows',
      '42% increase in customer lifetime value (LTV) within 90 days'
    ],
    metrics: [
      { label: 'Cart Recovery', value: '26.4%' },
      { label: 'LTV Growth', value: '+42%' },
      { label: 'Repeat Orders', value: '3.4x' }
    ],
    mockup: '/brand/projects/greenlight-uniforms-website.png',
    tags: ['E-Commerce', 'Email Automation', 'Cart Recovery', 'Customer Journey', 'Conversion Optimization']
  },
  {
    slug: 'corporate-website-ui-ux-design',
    title: 'Website & UI Design',
    category: 'Web Design',
    client: 'Techno Paints & Redesign Dental',
    year: '2024',
    summary: 'Modern, high-conversion responsive corporate website and digital design system built for premier brand authority.',
    challenge: 'Legacy non-responsive websites suffered from slow page loads, outdated design, and poor lead conversion rates on mobile devices.',
    solution: 'Crafted a bespoke, fast-loading digital web platform with clean visual hierarchy, modular UI components, and frictionless inquiry funnels.',
    results: [
      'Bounce rate decreased from 64% to 27% within the first month of launch',
      'Mobile lead conversion surged by 185% across all core service pages',
      'Achieved sub-second page loads with 98+ Google PageSpeed performance score'
    ],
    metrics: [
      { label: 'Mobile Conversions', value: '+185%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Bounce Rate', value: '27%' }
    ],
    mockup: '/brand/projects/salaam-cup-platform.png',
    tags: ['Web Design', 'UI/UX Design', 'Design Systems', 'Responsive Web', 'Branding']
  },
  {
    slug: 'social-media-creatives-branding',
    title: 'Social Media Creatives',
    category: 'Creative Services',
    client: 'Dynamic Production & GDH Academy',
    year: '2024',
    summary: 'Full-spectrum creative content system including high-engagement carousels, reel covers, and strategic brand design assets.',
    challenge: 'Fragmented brand visuals and inconsistent social creatives led to weak organic reach and low audience engagement.',
    solution: 'Established a unified brand design system, high-converting carousel templates, dynamic reel cover graphics, and motion assets.',
    results: [
      '4.8x increase in organic social engagement and profile interactions',
      'Over 2.2M organic impressions generated across campaign reels and carousels',
      'Delivered 500+ cohesive brand assets across Instagram, LinkedIn, and YouTube'
    ],
    metrics: [
      { label: 'Engagement Lift', value: '4.8x' },
      { label: 'Total Impressions', value: '2.2M+' },
      { label: 'Brand Assets Created', value: '500+' }
    ],
    mockup: '/brand/projects/the-deen-qween-website.png',
    tags: ['Creative Services', 'Carousel Design', 'Reel Covers', 'Brand Assets', 'Motion Graphics']
  },
  {
    slug: 'techno-paints-portal',
    title: 'Techno Paints Digital Ecosystem',
    category: 'Web Design',
    client: 'Techno Paints',
    year: '2024',
    summary: 'Interactive shade explorer, product catalog, and authorized dealer locator platform built for leading paint manufacturer Techno Paints.',
    challenge: 'Customers found it cumbersome to navigate thousands of paint SKUs and locate authorized dealers on smartphones.',
    solution: 'Developed a high-performance web platform featuring instant visual shade matching, filtered product specs, and geolocation dealer search.',
    results: [
      'Over 210% increase in authorized dealer inquiries within the first quarter',
      'Average session duration increased by 3.5x with interactive color visualization',
      'Consistent 99/100 Core Web Vitals score across all mobile viewports'
    ],
    metrics: [
      { label: 'Dealer Inquiries', value: '+210%' },
      { label: 'Catalog Engagement', value: '3.5x' },
      { label: 'Mobile Performance', value: '99/100' }
    ],
    mockup: '/brand/projects/kompass-koffee-website.png',
    tags: ['Web Design', 'Product Catalog', 'Dealer Locator', 'Mobile-First', 'Techno Paints']
  },
  {
    slug: 'redesign-dental-transformation',
    title: 'Redesign Dental Patient Hub',
    category: 'Web Design',
    client: 'Redesign Dental Clinics',
    year: '2024',
    summary: 'Patient acquisition and appointment scheduling ecosystem with automated notifications and local SEO dominance.',
    challenge: 'Manual clinic appointment scheduling caused patient drop-offs, phone bottlenecks, and high no-show rates.',
    solution: 'Built an intuitive online booking workflow integrated with automated SMS/email reminders and local Google Search optimization.',
    results: [
      'Appointment no-show rate plummeted by 65% following automated reminders',
      '75% of new patient consultations now booked digitally without staff intervention',
      'Ranked top 3 in Google Local Pack across key clinic territories'
    ],
    metrics: [
      { label: 'No-Show Reduction', value: '-65%' },
      { label: 'Digital Bookings', value: '75%' },
      { label: 'Patient Rating', value: '4.9 / 5' }
    ],
    mockup: '/brand/projects/greenlight-uniforms-website.png',
    tags: ['Web Design', 'Healthcare', 'Appointment Booking', 'SEO', 'Digital Transformation']
  },
  {
    slug: 'wallcraft-panels-ecommerce',
    title: 'WallCraft Panels D2C Storefront',
    category: 'E-Commerce',
    client: 'WallCraft Panels',
    year: '2024',
    summary: 'Custom architectural wall panels e-commerce platform with automated area calculators and instant sample delivery checkout.',
    challenge: 'Architects and homeowners struggled with complex panel square-footage estimation, delaying purchase decisions.',
    solution: 'Constructed an elegant D2C storefront featuring automated room area calculators, real-time material previews, and frictionless checkout.',
    results: [
      'Sample order volume climbed by 340%, converting 41% into full project orders',
      'Checkout conversion rate grew from 1.6% to 4.2%',
      'Average order value (AOV) increased by 32% with automated accessories bundling'
    ],
    metrics: [
      { label: 'Sample Orders', value: '+340%' },
      { label: 'Checkout Rate', value: '4.2%' },
      { label: 'AOV Lift', value: '+32%' }
    ],
    mockup: '/brand/projects/the-deen-qween-website.png',
    tags: ['E-Commerce', 'D2C', 'Architectural Panels', 'Area Calculator', 'WallCraft']
  },
  {
    slug: 'gdh-academy-ai-lms',
    title: 'GDH Academy Learning Platform',
    category: 'Software Development',
    client: 'GDH Academy',
    year: '2024',
    summary: 'Centralized learning management platform featuring interactive curriculum modules, automated grading, and student analytics.',
    challenge: 'Managing student cohorts across multiple branches with fragmented lecture materials and delayed progress tracking.',
    solution: 'Designed a unified learning management platform with video streaming, automated grading quizzes, and real-time student dashboards.',
    results: [
      'Successfully scaled to 5,000+ active enrolled students across regional cohorts',
      '48% boost in on-time course completion through interactive tracking',
      '90% reduction in grading administrative turnaround time'
    ],
    metrics: [
      { label: 'Active Students', value: '5,000+' },
      { label: 'Course Completion', value: '+48%' },
      { label: 'Grading Automation', value: '90%' }
    ],
    mockup: '/brand/projects/salaam-cup-platform.png',
    tags: ['Software Development', 'EdTech', 'LMS', 'Student Portal', 'GDH Academy']
  },
  {
    slug: 'saudisoft-ai-localization',
    title: 'Saudisoft Enterprise AI Localization',
    category: 'AI Solutions',
    client: 'Saudisoft',
    year: '2024',
    summary: 'Domain-tailored LLM pipeline for high-throughput software translation memory, terminology checks, and multilingual QA.',
    challenge: 'Enterprise software localization cycles experienced backlogs and inconsistent technical terminology across language pairs.',
    solution: 'Deployed a custom LLM localization workflow with contextual terminology verification and automated QA compliance.',
    results: [
      '75% decrease in localization project delivery turnaround times',
      'Maintained 99.1% terminology consistency across 1M+ words of documentation',
      'Significantly lowered post-editing revision hours for technical translators'
    ],
    metrics: [
      { label: 'Turnaround Time', value: '-75%' },
      { label: 'Terminology Match', value: '99.1%' },
      { label: 'Documentation Scaled', value: '1M+ words' }
    ],
    mockup: '/brand/projects/kompass-koffee-website.png',
    tags: ['AI Solutions', 'Localization', 'Saudisoft', 'Enterprise AI', 'Automated QA']
  },
  {
    slug: 'dynamic-production-motion-creatives',
    title: 'Dynamic Production Showreels',
    category: 'Creative Services',
    client: 'Dynamic Production',
    year: '2024',
    summary: 'Cinematic promotional video production, dynamic 3D motion graphics, and high-impact social video campaigns.',
    challenge: 'Brand required high-energy visual showreels and commercial video cuts for international product unveilings.',
    solution: 'Produced broadcast-grade 3D title animations, motion graphic showreels, and vertical video cuts optimized for multi-channel ads.',
    results: [
      'Over 1.8M verified video impressions generated across launch campaigns',
      'Average audience watch-through rate reached 62% on short-form video channels',
      'Achieved a 3.8x ROAS on targeted social video ad placements'
    ],
    metrics: [
      { label: 'Campaign Views', value: '1.8M+' },
      { label: 'Watch-Through', value: '62%' },
      { label: 'Campaign ROAS', value: '3.8x' }
    ],
    mockup: '/brand/projects/greenlight-uniforms-website.png',
    tags: ['Creative Services', 'Motion Graphics', 'Video Production', 'Showreels', 'Dynamic Production']
  }
];
