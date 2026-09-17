import { Service } from '../types';

export const servicesData: Service[] = [
  {
    slug: 'web-design',
    title: 'Website Design & Development',
    shortTitle: 'Web Design',
    subtitle: 'Custom websites that convert — Aeth Digital builds fast, modern, and SEO-friendly sites for businesses.',
    description: 'We build modern, responsive websites that help businesses grow. As a premier website design agency, our goal is to create sites that look great, load fast, and turn visitors into customers. Every design is tailored to your brand and supported by real SEO and performance-focused web development.',
    overview: 'Custom Web Design & Development For Service-Based Businesses',
    icon: '/brand/icon-code-alt.svg',
    creamIcon: '/brand/icon-code-alt-cream.svg',
    lottieFile: '/lottie/web-design.json',
    perks: [
      {
        title: 'Custom Visual Architecture',
        description: 'Bespoke UI/UX design crafted precisely around your brand identity without bloated templates.'
      },
      {
        title: 'Lightning Fast Load Speeds',
        description: 'Sub-second page speeds scored 95+ on Google PageSpeed Insights, lowering bounce rates.'
      },
      {
        title: 'Mobile-First Responsiveness',
        description: 'Pixel-perfect fluid layouts tested systematically across 20+ mobile, tablet, and desktop viewports.'
      },
      {
        title: 'Conversion Engineered',
        description: 'Strategic visual hierarchy, clear CTAs, and frictionless user flows designed to capture qualified leads.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discover & Define',
        description: 'We begin by learning about your business, your goals, and your audience. This helps us shape a strategy that attracts the right customers.'
      },
      {
        step: '02',
        title: 'Plan & Strategize for Conversions',
        description: 'We map out your site structure and user journey. Our focus is on what will drive leads and sales while keeping SEO in mind from day one.'
      },
      {
        step: '03',
        title: 'Design & Build',
        description: 'Our team creates a clean, modern design that reflects your brand and develops it into a fast, secure, SEO-ready site.'
      },
      {
        step: '04',
        title: 'Launch & Optimize',
        description: 'Once everything is tested and ready, we launch your site and make sure it continues to perform. You’ll have a website that’s ready to grow with your business.'
      }
    ],
    stats: [
      { value: '99%', label: 'Mobile Optimization Score' },
      { value: '3.2x', label: 'Average Lead Increase' },
      { value: '< 1s', label: 'Median Page Load Time' },
      { value: '100%', label: 'Custom Engineered' }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma', 'Node.js'],
    deliverables: ['Custom Figma Prototypes', 'Responsive Production Website', 'Technical SEO Setup', 'CMS Integration', 'Analytics & Tag Setup'],
    faqs: [
      {
        q: 'How long does a custom website design take to complete?',
        a: 'Most custom website design projects take between 3 to 6 weeks from kickoff to deployment, depending on scope, custom interactions, and content readiness.'
      },
      {
        q: 'Will my website be search-engine friendly from day one?',
        a: 'Yes. Every website we build includes structured data, clean semantic markup, fast loading assets, optimized meta tags, and mobile-first architecture for maximum organic search visibility.'
      },
      {
        q: 'Can I edit the content on my website after launch?',
        a: 'Absolutely. We provide intuitive content management tools and personalized training videos so your team can effortlessly publish updates and new content.'
      }
    ]
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO',
    subtitle: 'Aeth Digital is an SEO company helping service-based businesses rank higher, attract leads, and grow with results-driven SEO strategies.',
    description: 'As a trusted SEO agency, we help service-based businesses increase visibility, attract the right customers, and rank higher on search engines. Our SEO services are tailored to your goals, backed by clean strategies, and focused on long-term results that actually move your business forward.',
    overview: 'Custom Data-Driven SEO Strategies for High-Growth Businesses',
    icon: '/brand/icon-bar-chart-alt.svg',
    creamIcon: '/brand/icon-bar-chart-alt-cream.svg',
    lottieFile: '/lottie/seo.json',
    perks: [
      {
        title: 'Technical Infrastructure Audit',
        description: 'Comprehensive crawl error elimination, Core Web Vitals optimization, and clean URL schema architecture.'
      },
      {
        title: 'Strategic Keyword Domination',
        description: 'Targeting commercial-intent terms with high conversion probability rather than vanity volume.'
      },
      {
        title: 'Authoritative Backlink Acquisition',
        description: 'Ethical, high-DA digital PR and outreach links that establish true domain authority and trust.'
      },
      {
        title: 'Transparent Live Reporting',
        description: '24/7 client analytics dashboard tracking keyword movements, organic clicks, and verified lead conversions.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Research',
        description: 'We analyze your website, competitors, and regional search trends to uncover SEO opportunities and create a strategy that drives measurable results.'
      },
      {
        step: '02',
        title: 'On-Page Optimization',
        description: 'We optimize your website content, structure, and technical setup to improve performance and make it easier for search engines to understand your site.'
      },
      {
        step: '03',
        title: 'Content & Authority Building',
        description: 'We build authority through content, backlinks, and local optimization. This helps your brand earn trust and rank higher in competitive searches.'
      },
      {
        step: '04',
        title: 'Tracking & Continuous Improvement',
        description: 'With detailed reporting, analytics, and regular updates, we monitor your SEO performance and refine strategies to keep growing your rankings and traffic.'
      }
    ],
    stats: [
      { value: '250%+', label: 'Organic Traffic Lift' },
      { value: '#1-3', label: 'Target Search Rankings' },
      { value: '45+', label: 'First-Page Keywords' },
      { value: '4.8x', label: 'ROI On Organic Spend' }
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Schema.org', 'Looker Studio'],
    deliverables: ['Technical SEO Audit', 'Keyword Strategy Blueprint', 'Optimized Metadata & Copy', 'High-DA Backlinks', 'Monthly Executive Reports'],
    faqs: [
      {
        q: 'How long until we see meaningful ranking improvements?',
        a: 'Most clients observe tangible upward movement within 60 to 90 days, with exponential growth and compounding returns manifesting around months 4 to 6.'
      },
      {
        q: 'Do you guarantee number one rankings on Google?',
        a: 'No reputable agency can ethically guarantee #1 rankings due to algorithm variables, but our track record consistently places 85%+ of client target terms into top 3 positions.'
      }
    ]
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    subtitle: 'Strategic content and community management that turns passive scrollers into passionate brand advocates.',
    description: 'We help brands grow engaged, loyal audiences across Instagram, TikTok, LinkedIn, and YouTube. From custom creative design and short-form video editing to community management and algorithmic growth hacks, we turn social presence into measurable revenue.',
    overview: 'High-Impact Brand Storytelling & Social Ecosystems',
    icon: '/brand/icon-comment-detail.svg',
    creamIcon: '/brand/icon-comment-detail.svg',
    lottieFile: '/lottie/social-media-marketing.json',
    perks: [
      {
        title: 'Viral Short-Form Content',
        description: 'High-hook Reels, TikToks, and Shorts engineered for algorithmic distribution and brand recall.'
      },
      {
        title: 'Cohesive Visual Aesthetics',
        description: 'Curated feeds, bespoke typography, and graphic assets that communicate elevated market authority.'
      },
      {
        title: 'Active Community Fostering',
        description: 'Direct response engagement, DM nurturing, and audience interaction that converts fans into customers.'
      },
      {
        title: 'Trend-Jack Execution',
        description: 'Rapid capitalization on emerging cultural moments, audio trends, and relevant industry conversations.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Brand Voice & Audience Discovery',
        description: 'Identifying your core demographic, competitor vulnerabilities, and unique positioning angles.'
      },
      {
        step: '02',
        title: 'Creative Content Calendar',
        description: 'Planning monthly thematic pillars, scriptwriting hooks, and organizing production timelines.'
      },
      {
        step: '03',
        title: 'Studio Production & Polish',
        description: 'Filming, editing, sound engineering, dynamic captions, and graphic overlay integration.'
      },
      {
        step: '04',
        title: 'Distribution & Optimization',
        description: 'A/B testing posting schedules, hashtags, captions, and doubling down on winning formats.'
      }
    ],
    stats: [
      { value: '3.4M+', label: 'Organic Video Views' },
      { value: '18%', label: 'Average Engagement Rate' },
      { value: '45K+', label: 'New Followers Generated' },
      { value: '12x', label: 'Profile Visits Growth' }
    ],
    technologies: ['Adobe Premiere Pro', 'CapCut Pro', 'After Effects', 'Metricool', 'Sprout Social'],
    deliverables: ['Content Calendar', '30+ Custom Assets Monthly', 'Community Management', 'Monthly Performance Analysis'],
    faqs: [
      {
        q: 'Do you create the content or do we have to provide footage?',
        a: 'We offer full-service creative production. We can handle everything on-site or provide clear film guides for your internal team to capture raw clips for us to edit and polish.'
      }
    ]
  },
  {
    slug: 'paid-ads',
    title: 'Paid Advertising (PPC & Meta Ads)',
    shortTitle: 'Paid Ads',
    subtitle: 'High-efficiency customer acquisition campaigns across Google Search, YouTube, Meta, and LinkedIn.',
    description: 'Stop burning money on ad clicks that don’t convert. Our paid ads team engineers tight targeting, ruthless conversion rate optimization, and creative testing frameworks that deliver predictable, scalable ROAS.',
    overview: 'Performance-Driven Media Buying & Scalable ROAS',
    icon: '/brand/icon-cart.svg',
    creamIcon: '/brand/icon-cart.svg',
    lottieFile: '/lottie/paid-ads.json',
    perks: [
      {
        title: 'Intent-Driven Search Ads',
        description: 'Capturing buyers at the exact moment they search with high-intent negative keyword filtering.'
      },
      {
        title: 'Dynamic Meta Retargeting',
        description: 'Multi-stage warm retargeting funnels that re-engage lost visitors with irresistible social proof.'
      },
      {
        title: 'Relentless Creative Testing',
        description: 'Iterating hooks, headlines, and angles weekly to combat ad fatigue and lower acquisition costs.'
      },
      {
        title: 'Conversion Tracking Setup',
        description: 'Server-side CAPI and Google Tag Manager setups ensuring 100% data fidelity and accurate attribution.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Funnel Architecture & Tracking',
        description: 'Verifying pixel tags, Conversions API, and custom conversion events across all user touchpoints.'
      },
      {
        step: '02',
        title: 'Creative Angle Development',
        description: 'Drafting high-converting ad copy, video scripts, and visual creatives tailored to your audience pain points.'
      },
      {
        step: '03',
        title: 'Precision Campaign Launch',
        description: 'Deploying structured campaigns with clear budget allocation, audience segmentation, and bidding rules.'
      },
      {
        step: '04',
        title: 'Aggressive Scaling & Pruning',
        description: 'Cutting underperforming ad sets swiftly while scaling budget on proven high-ROAS winners.'
      }
    ],
    stats: [
      { value: '4.6x', label: 'Average Blended ROAS' },
      { value: '-38%', label: 'Reduction in Cost Per Lead' },
      { value: '$2.5M+', label: 'Ad Spend Managed' },
      { value: '150K+', label: 'Leads & Sales Captured' }
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Triple Whale', 'Google Tag Manager'],
    deliverables: ['Custom Ad Creatives', 'Targeting Matrix', 'Conversion Tracking Audit', 'Weekly Optimization Logs'],
    faqs: [
      {
        q: 'What is the recommended minimum ad budget?',
        a: 'We recommend starting with a minimum monthly ad spend of $1,500 to $3,000 to allow the machine learning algorithms to exit the learning phase quickly.'
      }
    ]
  },
  {
    slug: 'e-commerce-solutions',
    title: 'E-Commerce Solutions',
    shortTitle: 'E-Commerce',
    subtitle: 'Scalable Shopify and headless e-commerce storefronts engineered for high average order value and checkout speed.',
    description: 'We build enterprise-grade e-commerce stores that look breathtaking and sell effortlessly. With customized checkout flows, seamless inventory integrations, and speed-optimized product pages, our stores convert traffic into repeat revenue.',
    overview: 'High-Converting Digital Storefronts & Custom Cart Experiences',
    icon: '/brand/icon-cart.svg',
    creamIcon: '/brand/icon-cart.svg',
    lottieFile: '/lottie/e-commerce-solutions.json',
    perks: [
      {
        title: 'High-Speed Custom Themes',
        description: 'Lightweight Shopify Liquid & React themes optimized to load in under 1 second worldwide.'
      },
      {
        title: 'Upsell & Cross-Sell Architecture',
        description: 'Smart cart sliders, post-purchase offers, and bundle builders that lift AOV by 20-35%.'
      },
      {
        title: 'Omnichannel ERP Integration',
        description: 'Real-time synchronization with ERPs, fulfillment centers, POS systems, and CRM databases.'
      },
      {
        title: 'Global Multi-Currency & Tax',
        description: 'Localized currency conversions, tax compliance, and multi-language internationalization.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Catalogue & Journey Analysis',
        description: 'Evaluating product matrices, category hierarchies, and customer navigation patterns.'
      },
      {
        step: '02',
        title: 'UX/UI & Prototype Approval',
        description: 'Designing high-converting PDPs (Product Detail Pages), collection filters, and slide cart modules.'
      },
      {
        step: '03',
        title: 'Development & App Migration',
        description: 'Building custom theme code, migrating data cleanly, and eliminating redundant slow apps.'
      },
      {
        step: '04',
        title: 'Stress Test & Seamless Go-Live',
        description: 'Rigorous payment gateway testing, simulated high-traffic spikes, and zero-downtime DNS cutover.'
      }
    ],
    stats: [
      { value: '34%', label: 'Average AOV Increase' },
      { value: '2.8%', label: 'Baseline Store Conversion' },
      { value: '0.8s', label: 'Average PDP Load Time' },
      { value: '$10M+', label: 'Client Gross Merchandise Value' }
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Sanity CMS', 'Stripe', 'Klaviyo'],
    deliverables: ['Custom E-commerce Storefront', 'Payment & Shipping Configuration', 'App Ecosystem Optimization', 'Email Flow Automation'],
    faqs: [
      {
        q: 'Can you migrate our existing store from WooCommerce or Magento to Shopify?',
        a: 'Yes, we handle end-to-end data migrations including products, customer order histories, reviews, and 301 redirect mapping to protect your SEO rankings.'
      }
    ]
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    shortTitle: 'Mobile Apps',
    subtitle: 'Native and cross-platform iOS and Android applications built for fluid performance and intuitive touch UX.',
    description: 'Bring your product vision into the pockets of your users. We architect sleek, scalable mobile apps using Flutter and React Native with native-level performance, biometric security, and offline-first capabilities.',
    overview: 'Intuitive Cross-Platform Mobile Applications Built to Scale',
    icon: '/brand/icon-mobile.svg',
    creamIcon: '/brand/icon-mobile-cream.svg',
    lottieFile: '/lottie/mobile-app-development.json',
    perks: [
      {
        title: 'Single Codebase, Both Platforms',
        description: 'Save up to 40% development cost without sacrificing 60fps native feel on iOS and Android.'
      },
      {
        title: 'Offline-First Resilience',
        description: 'Local caching and background sync ensuring uninterrupted functionality even in low-signal areas.'
      },
      {
        title: 'Enterprise Cloud Integration',
        description: 'Robust REST and GraphQL backend connections with real-time push notifications and WebSockets.'
      },
      {
        title: 'App Store Approval Guarantee',
        description: 'Full compliance with Apple App Store and Google Play Store review guidelines from day one.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Product Scope & Wireframing',
        description: 'Translating functional business requirements into clickable Figma user flows.'
      },
      {
        step: '02',
        title: 'Interactive UI/UX Design',
        description: 'Designing delightful micro-interactions, haptic feedback, and modern mobile aesthetics.'
      },
      {
        step: '03',
        title: 'Agile Sprint Engineering',
        description: 'Two-week development sprints with TestFlight and internal beta builds for continuous feedback.'
      },
      {
        step: '04',
        title: 'Store Submission & Maintenance',
        description: 'Managing store certificates, screenshots, metadata, and post-launch maintenance releases.'
      }
    ],
    stats: [
      { value: '4.9★', label: 'Average App Store Rating' },
      { value: '99.9%', label: 'Crash-Free Session Rate' },
      { value: '250K+', label: 'Combined Store Installs' },
      { value: '60fps', label: 'Smooth Animation Target' }
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    deliverables: ['iOS & Android App Binaries', 'App Store Connect Metadata', 'Backend Cloud API Endpoints', 'Comprehensive Documentation'],
    faqs: [
      {
        q: 'Do you help with submitting the app to Apple and Google?',
        a: 'Yes, we manage the complete submission process including store listings, developer accounts, compliance verification, and feedback resolution.'
      }
    ]
  },
  {
    slug: 'videography',
    title: 'Commercial Videography & Production',
    shortTitle: 'Videography',
    subtitle: 'Cinematic brand films, product showcases, and social-first video content that commands attention.',
    description: 'High-end video production that elevates your brand perception. We handle concepting, professional 4K/6K cinema camera shooting, drone cinematography, studio lighting, sound design, and color grading for web and broadcast.',
    overview: 'Cinematic Visual Storytelling That Elevates Brand Equity',
    icon: '/brand/icon-video-camera.svg',
    creamIcon: '/brand/icon-video-camera.svg',
    lottieFile: '/lottie/videography.json',
    perks: [
      {
        title: 'Cinema-Grade Equipment',
        description: 'Shot on RED/Sony FX cinema packages with prime lenses, pro audio, and dynamic studio lighting.'
      },
      {
        title: 'Licensed Drone Filming',
        description: 'Licensed aerial footage capturing sweeping perspectives and location scale.'
      },
      {
        title: 'Multi-Format Delivery',
        description: 'Master cuts exported for 16:9 desktop headers, 9:16 vertical TikToks/Reels, and 1:1 feeds.'
      },
      {
        title: 'Bespoke Sound & Color',
        description: 'Commercial color grading, custom sound effects, and licensed cinematic audio scoring.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Pre-Production & Storyboarding',
        description: 'Developing concepts, moodboards, shot lists, call sheets, and scouting production locations.'
      },
      {
        step: '02',
        title: 'On-Location Shoot Day',
        description: 'Efficient on-set filming with our director, lighting crew, sound technicians, and talent.'
      },
      {
        step: '03',
        title: 'Post-Production & Grading',
        description: 'Crafting the narrative cut, motion graphics, audio mastering, and color grading passes.'
      },
      {
        step: '04',
        title: 'Final Master Delivery',
        description: 'Supplying ProRes masters, compressed web versions, and short-form promotional cutdowns.'
      }
    ],
    stats: [
      { value: '4K/6K', label: 'Cinema Quality Masters' },
      { value: '100+', label: 'Commercial Shoots Completed' },
      { value: '85%', label: 'Higher Engagement on Video' },
      { value: '48hr', label: 'Fast Turnaround Dailies' }
    ],
    technologies: ['Sony FX6 / FX3', 'DJI Mavic 3 Cine', 'DaVinci Resolve Studio', 'Pro Tools', 'Aputure Lighting'],
    deliverables: ['Brand Anthem Film (60s)', '30s & 15s Cutdowns', 'Vertical Social Cuts (9:16)', 'Full Resolution B-Roll Library'],
    faqs: [
      {
        q: 'Where do you travel for video production?',
        a: 'We are based in Toronto and regularly produce commercial video projects throughout the Greater Toronto Area, Ontario, and across Canada.'
      }
    ]
  },
  {
    slug: 'ai-automations',
    title: 'AI Solutions & Workflow Automation',
    shortTitle: 'AI & Automation',
    subtitle: 'Custom AI agents, intelligent customer service bots, and backend workflow integrations that save 20+ hours a week.',
    description: 'Transform repetitive manual tasks into autonomous, intelligent systems. We integrate modern LLMs, automated CRM syncs, intelligent document processing, and predictive workflows tailored to your specific business operations.',
    overview: 'Intelligent Enterprise Automation & Autonomous Agents',
    icon: '/brand/icon-chip.svg',
    creamIcon: '/brand/icon-chip.svg',
    lottieFile: '/lottie/ai-automations.json',
    perks: [
      {
        title: 'Custom Trained AI Agents',
        description: 'Agents trained on your internal documentation and knowledge base for precise, brand-aligned answers.'
      },
      {
        title: 'Frictionless CRM Automation',
        description: 'Auto-qualifying inbound leads, populating deals, and drafting personalized responses instantly.'
      },
      {
        title: 'Automated Invoice & Document Parsing',
        description: 'Extracting data from receipts, contracts, and PDFs directly into accounting software without manual data entry.'
      },
      {
        title: 'System Integration Glue',
        description: 'Connecting previously siloed software tools into cohesive, self-healing event-driven pipelines.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Operational Bottleneck Audit',
        description: 'Mapping your repetitive manual tasks, data handoffs, and calculating potential ROI.'
      },
      {
        step: '02',
        title: 'Architecture & Security Design',
        description: 'Selecting optimal AI models, ensuring strict data privacy, and planning API connections.'
      },
      {
        step: '03',
        title: 'Integration & Testing',
        description: 'Building custom webhooks, prompt flows, and automated triggers with rigorous edge-case testing.'
      },
      {
        step: '04',
        title: 'Deployment & Monitoring',
        description: 'Rolling out the automation, training your team, and setting up error alerts for 99.9% reliability.'
      }
    ],
    stats: [
      { value: '25+ hrs', label: 'Average Weekly Time Saved' },
      { value: '99.4%', label: 'Data Extraction Accuracy' },
      { value: '< 30s', label: 'Lead Response Time' },
      { value: '10x', label: 'Throughput Scaling' }
    ],
    technologies: ['OpenAI API', 'Claude 3.5', 'Gemini Pro', 'Make.com', 'n8n', 'Python', 'Zapier'],
    deliverables: ['Custom AI Assistant/Bot', 'End-to-End Zapier/Make Flows', 'API Connector Scripts', 'Operating Manual & Monitoring Setup'],
    faqs: [
      {
        q: 'Is our company data secure and kept private?',
        a: 'Yes. We configure enterprise APIs with zero-data-retention agreements where your proprietary information is never used to train public models.'
      }
    ]
  }
];
