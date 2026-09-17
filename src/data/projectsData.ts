import { Project } from '../types';

export const projectsData: Project[] = [
  {
    slug: 'i-slam-ball-hockey-league',
    title: 'I-Slam Ball Hockey League Platform',
    category: 'Web Design',
    client: 'I-Slam Ball Hockey League',
    year: '2024',
    summary: 'A league management platform for I-Slam Ball Hockey League — real-time team stats, schedules, dynamic standings, and player profiles.',
    challenge: 'The league was manually managing schedules, scores, and standings across multiple spreadsheets, causing delays and confusion for players and fans.',
    solution: 'Designed and built a custom responsive platform with automated standings calculators, team profiles, and mobile-first schedule tracking.',
    results: [
      '100% automated league standings and stats updates',
      'Over 25,000 monthly pageviews during active tournament seasons',
      'Under 0.9s load times on mobile devices'
    ],
    metrics: [
      { label: 'Monthly Views', value: '25K+' },
      { label: 'Active Teams', value: '32+' },
      { label: 'Score Update Speed', value: 'Instant' }
    ],
    mockup: '/brand/projects/salaam-cup-platform.png',
    liveUrl: 'https://islamballhockey.ca',
    tags: ['Web Design', 'UI/UX', 'Custom Platform', 'Sports Tech']
  },
  {
    slug: '3-quarters-t-o',
    title: '3 Quarters T.O Website',
    category: 'E-Commerce Solutions',
    client: '3 Quarters T.O',
    year: '2024',
    summary: 'A high-converting streetwear e-commerce platform with custom drop countdowns, size recommendations, and frictionless checkout.',
    challenge: 'High drop traffic was crashing the previous WooCommerce store and the checkout abandonment rate was exceeding 72%.',
    solution: 'Migrated to high-performance Shopify Plus with custom theme components, instant cart drawer, and high-concurrency server handling.',
    results: [
      'Zero downtime during 5,000+ simultaneous drop shoppers',
      'Checkout conversion rate increased from 1.8% to 3.9%',
      'Average order value lifted by 24%'
    ],
    metrics: [
      { label: 'Conversion Rate', value: '3.9%' },
      { label: 'AOV Increase', value: '+24%' },
      { label: 'Drop Scalability', value: '10K+ users' }
    ],
    mockup: '/brand/projects/the-deen-qween-website.png',
    tags: ['E-Commerce Solutions', 'Shopify Plus', 'Fashion & Apparel', 'CRO']
  },
  {
    slug: 'toronto-muslim-tennis-association-website',
    title: 'Toronto Muslim Tennis Association Website',
    category: 'Web Design',
    client: 'Toronto Muslim Tennis Association',
    year: '2024',
    summary: 'Community and tournament portal connecting tennis players, court bookings, and tournament brackets across the Greater Toronto Area.',
    challenge: 'Fragmented communication and lack of a centralized platform for tournaments and member registration.',
    solution: 'Engineered an energetic, modern sports web portal with bracket tracking, tournament schedules, and membership signups.',
    results: [
      '300+ players onboarded within the first tournament week',
      'Reduced admin booking inquiries by 70%',
      'Flawless responsive experience on iOS and Android'
    ],
    metrics: [
      { label: 'New Members', value: '300+' },
      { label: 'Inquiry Reduction', value: '-70%' },
      { label: 'Page Speed', value: '98/100' }
    ],
    mockup: '/brand/projects/salaam-cup-platform.png',
    tags: ['Web Design', 'Sports Community', 'Membership Portal', 'Next.js']
  },
  {
    slug: 'the-deen-qween-website',
    title: 'The Deen Qween Website',
    category: 'Web Design',
    client: 'The Deen Qween',
    year: '2023',
    summary: 'An elegant lifestyle brand and digital media platform with curated editorial articles, audio podcasts, and merchandise storefront.',
    challenge: 'The brand needed an elevated digital aesthetic that reflected prestige, authenticity, and seamless multimedia reading.',
    solution: 'Developed a bespoke aesthetic with custom typography, integrated media players, and seamless article sharing.',
    results: [
      '4.2x increase in average session duration',
      'Over 80,000 impressions in the launch month',
      'Featured in multiple regional media publications'
    ],
    metrics: [
      { label: 'Session Duration', value: '+320%' },
      { label: 'Launch Impressions', value: '80K+' },
      { label: 'Bounce Rate', value: '28%' }
    ],
    mockup: '/brand/projects/the-deen-qween-website.png',
    tags: ['Web Design', 'Editorial', 'Lifestyle Brand', 'Audio Integration']
  },
  {
    slug: 'aeth-digital-seo-growth',
    title: 'Aeth Digital SEO Growth',
    category: 'SEO',
    client: 'Aeth Digital',
    year: '2024',
    summary: 'Data-driven technical SEO and digital PR campaign that achieved #1-3 rankings across high-intent Toronto agency keywords.',
    challenge: 'Intense competition across the Greater Toronto Area for digital agency and web design organic search queries.',
    solution: 'Built comprehensive topical authority hubs, optimized Core Web Vitals, and structured Schema.org local entity data.',
    results: [
      'Ranked #1 for over 25 high-value commercial keywords',
      'Organic lead inquiries increased by 310%',
      'Domain rating elevated from 12 to 44'
    ],
    metrics: [
      { label: 'Organic Inquiries', value: '+310%' },
      { label: 'Top 3 Keywords', value: '25+' },
      { label: 'Domain Rating', value: '44' }
    ],
    mockup: '/brand/projects/kompass-koffee-website.png',
    tags: ['SEO', 'Technical SEO', 'Digital PR', 'Content Architecture']
  },
  {
    slug: 'greenlight-uniforms-website',
    title: 'Greenlight Uniforms Website',
    category: 'E-Commerce Solutions',
    client: 'Greenlight Uniforms',
    year: '2024',
    summary: 'B2B & B2C custom apparel and industrial workwear storefront with bulk ordering matrix and live embroidery preview.',
    challenge: 'Corporate clients needed complex tiered pricing, custom logo uploads, and invoice payment terms.',
    solution: 'Architected a hybrid B2B/B2C Shopify store featuring dynamic quantity-break pricing and instantaneous logo mockups.',
    results: [
      'Reduced quote turnaround time from 48 hours to instant self-serve',
      'B2B average order value exceeded $3,200',
      'Order accuracy reached 99.8%'
    ],
    metrics: [
      { label: 'B2B AOV', value: '$3,200+' },
      { label: 'Turnaround Time', value: 'Instant' },
      { label: 'Order Accuracy', value: '99.8%' }
    ],
    mockup: '/brand/projects/greenlight-uniforms-website.png',
    tags: ['E-Commerce Solutions', 'B2B Portal', 'Customizer Tool', 'Wholesale']
  },
  {
    slug: 'salaam-cup-platform',
    title: 'Salaam Cup Platform',
    category: 'Web Design',
    client: 'Salaam Cup North America',
    year: '2023',
    summary: 'North America’s largest ball hockey tournament platform managing 60+ teams, live stream integration, and real-time playoff brackets.',
    challenge: 'High concurrency traffic spikes during tournament weekend and the need for live score updates without refreshing.',
    solution: 'Engineered a real-time reactive web application connected to live WebSocket scorekeepers with sub-second sync.',
    results: [
      'Handled 45,000+ concurrent visitors without latency',
      'Real-time live score updates broadcasted within 200ms',
      'Player registration filled up in record 48 hours'
    ],
    metrics: [
      { label: 'Live Traffic', value: '45K+' },
      { label: 'Sync Latency', value: '<200ms' },
      { label: 'Total Players', value: '1,200+' }
    ],
    mockup: '/brand/projects/salaam-cup-platform.png',
    tags: ['Web Design', 'Live Tournament', 'Realtime WebSockets', 'High Scale']
  },
  {
    slug: 'kompass-koffee-website',
    title: 'Kompass Koffee Website',
    category: 'E-Commerce Solutions',
    client: 'Kompass Koffee',
    year: '2024',
    summary: 'Specialty single-origin coffee subscription experience with custom roast quiz, recurring delivery schedules, and sensory notes.',
    challenge: 'Low recurring subscriber retention and confusing grind size selections for novice home brewers.',
    solution: 'Designed an interactive flavor finder quiz that intelligently recommends personalized coffee blends and automated recurring deliveries.',
    results: [
      'Subscription retention improved by 42%',
      'Quiz completion rate exceeded 78%',
      'Monthly recurring revenue (MRR) grew by 65%'
    ],
    metrics: [
      { label: 'MRR Lift', value: '+65%' },
      { label: 'Quiz Completion', value: '78%' },
      { label: 'Retention Lift', value: '+42%' }
    ],
    mockup: '/brand/projects/kompass-koffee-website.png',
    tags: ['E-Commerce Solutions', 'Subscription Commerce', 'Quiz Funnel', 'Branding']
  },
  {
    slug: 'revive-craft-renovations-website',
    title: 'Revive Craft Renovations Website',
    category: 'Web Design',
    client: 'Revive Craft Renovations',
    year: '2023',
    summary: 'Luxury home renovation and interior contracting portfolio highlighting before-and-after transformations and lead qualification.',
    challenge: 'Low lead quality from unqualified homeowners seeking cheap handyman repairs rather than high-end full home remodels.',
    solution: 'Designed a high-trust, editorial portfolio with project budget calculators and detailed before/after interactive sliders.',
    results: [
      'Average renovation project budget increased to $85,000+',
      'Inbound consultation booking rate doubled',
      'Zero manual screening required for project viability'
    ],
    metrics: [
      { label: 'Avg Project Size', value: '$85K+' },
      { label: 'Consultation Rate', value: '2x' },
      { label: 'Client Satisfaction', value: '100%' }
    ],
    mockup: '/brand/projects/the-deen-qween-website.png',
    tags: ['Web Design', 'Luxury Construction', 'Before/After Slider', 'Lead Gen']
  },
  {
    slug: 'carters-plumbing-website',
    title: 'Carters Plumbing Website',
    category: 'Web Design',
    client: 'Carters Plumbing & Drains',
    year: '2024',
    summary: 'Emergency trade service web platform optimized for instant click-to-call mobile conversions and localized service area SEO.',
    challenge: 'Needed immediate phone call conversions from frantic customers experiencing plumbing emergencies.',
    solution: 'High-visibility emergency dispatch banner, click-to-call sticky navigation, and geo-targeted landing pages.',
    results: [
      'Mobile call conversions rose by 140%',
      'Average dispatch response booking speed cut in half',
      'Ranked in top 3 Google Local Map Pack across 6 municipalities'
    ],
    metrics: [
      { label: 'Call Conversions', value: '+140%' },
      { label: 'Map Pack Rank', value: 'Top 3' },
      { label: 'Mobile Share', value: '88%' }
    ],
    mockup: '/brand/projects/greenlight-uniforms-website.png',
    tags: ['Web Design', 'Local SEO', 'Emergency Dispatch', 'Trade Services']
  },
  {
    slug: 'green-season-landscaping-website',
    title: 'Green Season Landscaping Website',
    category: 'Web Design',
    client: 'Green Season Landscaping',
    year: '2024',
    summary: 'Commercial landscaping and snow removal service portal featuring automated quote estimators and seasonal service scheduling.',
    challenge: 'Losing seasonal snow removal and lawn maintenance contracts due to slow manual estimation processes.',
    solution: 'Built an interactive property square-footage estimator with automated proposal generation.',
    results: [
      'Commercial contract closures increased by 85%',
      'Online estimate requests tripled during peak spring season',
      'Customer acquisition cost dropped by 34%'
    ],
    metrics: [
      { label: 'Contract Closures', value: '+85%' },
      { label: 'CAC Reduction', value: '-34%' },
      { label: 'Annual Contracts', value: '120+' }
    ],
    mockup: '/brand/projects/kompass-koffee-website.png',
    tags: ['Web Design', 'Commercial Services', 'Instant Estimator', 'SEO']
  },
  {
    slug: 'cultivated-living-website',
    title: 'Cultivated Living Website',
    category: 'Web Design',
    client: 'Cultivated Living Interior Design',
    year: '2023',
    summary: 'Sophisticated architectural portfolio and consultation booking funnel for high-end boutique interior design clients.',
    challenge: 'An outdated, static portfolio that did not convey the refined craftsmanship and luxury aesthetic of the firm.',
    solution: 'Designed a minimalist, typography-driven gallery with immersive project walkthroughs and integrated discovery calls.',
    results: [
      'Attracted private residential commissions above $150K',
      'Portfolio engagement time increased by 260%',
      'Brand perception aligned directly with top interior design magazines'
    ],
    metrics: [
      { label: 'High-Value Leads', value: '4x' },
      { label: 'Engagement Time', value: '4m 32s' },
      { label: 'Design Inquiries', value: '45/mo' }
    ],
    mockup: '/brand/projects/the-deen-qween-website.png',
    tags: ['Web Design', 'Interior Design', 'Editorial Grid', 'Consultation Funnel']
  },
  {
    slug: 'tgs-electrical-website',
    title: 'TGS Electrical Website',
    category: 'Web Design',
    client: 'TGS Electrical Contractors',
    year: '2024',
    summary: 'Commercial and industrial electrical engineering portal with safety compliance verifications and RFP submission pipelines.',
    challenge: 'Difficulty qualifying for municipal and large commercial electrical contractor bids without a certified digital footprint.',
    solution: 'Engineered an authoritative corporate portal detailing ESA compliance, past industrial projects, and structured RFP forms.',
    results: [
      'Secured 3 major commercial tenders in first quarter after launch',
      'Verified corporate trust score increased significantly',
      'Seamless digital safety certifications repository'
    ],
    metrics: [
      { label: 'Tenders Won', value: '3 Major' },
      { label: 'RFP Submissions', value: '+95%' },
      { label: 'ESA Verified', value: '100%' }
    ],
    mockup: '/brand/projects/greenlight-uniforms-website.png',
    tags: ['Web Design', 'Industrial Engineering', 'RFP Pipeline', 'Compliance']
  },
  {
    slug: 'ghlandscaping-website',
    title: 'GH Landscaping Website',
    category: 'Web Design',
    client: 'GH Landscaping',
    year: '2023',
    summary: 'Hardscaping and interlocking stone specialist showcase with interactive colorway selectors and 3D patio design previews.',
    challenge: 'Homeowners struggled to visualize stone finishes and interlock patterns, prolonging the sales cycle.',
    solution: 'Curated photo-realistic project galleries grouped by stone manufacturer and style, alongside an instant consultation planner.',
    results: [
      'Sales cycle reduced from 3 weeks to 6 days',
      'Over $500,000 in booked patio installations in single season',
      'Customer referral rate climbed to 45%'
    ],
    metrics: [
      { label: 'Booked Revenue', value: '$500K+' },
      { label: 'Sales Cycle', value: '-70%' },
      { label: 'Referral Rate', value: '45%' }
    ],
    mockup: '/brand/projects/kompass-koffee-website.png',
    tags: ['Web Design', 'Hardscaping', 'Visual Showcase', 'Lead Capture']
  },
  {
    slug: 'versatile-prints-website',
    title: 'Versatile Prints Website',
    category: 'Web Design',
    client: 'Versatile Prints',
    year: '2024',
    summary: 'Large-format print and vehicle wrap production company site with live resolution checker and automated file upload pipeline.',
    challenge: 'Customers frequently submitted low-resolution raster images causing production delays and print reprints.',
    solution: 'Created an intelligent upload portal that validates DPI and dimensions prior to order submission, paired with a sleek modern design.',
    results: [
      'Print reprint requests decreased by 92%',
      'Online quote requests grew by 180%',
      'Turnaround speed improved by 2 full business days'
    ],
    metrics: [
      { label: 'Reprints Saved', value: '-92%' },
      { label: 'Quotes Inbound', value: '+180%' },
      { label: 'Turnaround', value: '2 Days Faster' }
    ],
    mockup: '/brand/projects/salaam-cup-platform.png',
    tags: ['Web Design', 'Print Production', 'File Validation', 'E-Commerce']
  },
  {
    slug: 'versatile-prints-branding',
    title: 'Versatile Prints Branding',
    category: 'Branding',
    client: 'Versatile Prints',
    year: '2024',
    summary: 'Comprehensive corporate visual identity, print mark system, vehicle fleet graphics, and design system guideline manual.',
    challenge: 'The existing branding was outdated and did not stand out among modern industrial print competitors.',
    solution: 'Developed a bold, modern geometric mark, dynamic primary and neon accent color palette, and high-impact fleet livery.',
    results: [
      'Complete brand consistency established across 10 vehicle wraps and signage',
      'Positive brand recall among commercial clients increased by 80%',
      'Recognized with a local regional branding design spotlight'
    ],
    metrics: [
      { label: 'Fleet Consistency', value: '100%' },
      { label: 'Brand Recall', value: '+80%' },
      { label: 'Identity Assets', value: '40+' }
    ],
    mockup: '/brand/projects/the-deen-qween-website.png',
    tags: ['Branding', 'Visual Identity', 'Typography', 'Fleet Graphics']
  }
];
