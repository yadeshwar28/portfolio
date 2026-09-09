import { Project, Artefact, Experience, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'GNANA YADESWAR',
  monogram: 'GY',
  cohortBadge: "PGP in Sports Mgmt '26",
  headline: 'Building a Career at the Intersection of Sports & Supply Chain',
  supportingText:
    'I’m building practical experience in Supply Chain & Operations through internships, projects and hands-on business challenges, with a strong interest in applying these skills within the sports industry.',
  primaryCareerFocus: 'Supply Chain & Operations',
  preferredIndustry: 'Sports',
  areasOfInterest: [
    'Sports companies',
    'Sports nutrition',
    'Sports merchandise',
    'Sports apparel',
    'Sporting goods',
    'Sports equipment',
    'Sports retail',
  ],
  currently: {
    program: 'PGP in Sports Management & Gaming',
    institution: 'Masters’ Union',
    location: 'Gurugram',
    period: '2026 – Present',
  },
  contact: {
    email: 'yadeshwar01@gmail.com',
    linkedin: 'https://www.linkedin.com/in/gnanayadeswar/',
    github: 'https://github.com/gnanayadeswar2027-bit',
  },
  aboutQuote:
    '“I’m comfortable trying things, making mistakes, learning from the experience and doing it better the next time. Most of what I know about operations came from being in the middle of it — reconciling stock, chasing a delayed dispatch, or getting a vendor to confirm a replenishment on time.”',
  aboutParagraphs: [
    'My experience has given me practical exposure to inventory control, procurement coordination, order fulfillment, reverse logistics, vendor coordination and operational reporting.',
    'I’m still early in my career. Sports is the industry I’d most like to work in, but my priority right now is building strong practical experience in Supply Chain & Operations — and I’m open to doing that across other industries too.',
  ],
};

export const CORE_AREAS = [
  {
    number: '01',
    category: 'INVENTORY & CONTROL',
    title: 'Inventory & Stock Control',
    description: 'Systematic stock monitoring, buffer calculation, and replenishment cycles to maintain uninterrupted fulfillment.',
    items: ['Inventory Management', 'Inventory Control', 'Inventory Planning', 'Stock Replenishment'],
    accent: 'purple',
  },
  {
    number: '02',
    category: 'SOURCING & PARTNERS',
    title: 'Procurement & Vendors',
    description: 'Vendor evaluation, supplier rate negotiation, and replenishment tracking across critical supply lines.',
    items: ['Procurement', 'Vendor Management'],
    accent: 'amber',
  },
  {
    number: '03',
    category: 'DISTRIBUTION & 3PL',
    title: 'Fulfillment & Logistics',
    description: 'End-to-end order processing, courier coordination, dispatch tracking, and streamlined returns.',
    items: ['Order Management', 'Order Fulfillment', 'Reverse Logistics', '3PL Coordination'],
    accent: 'purple',
  },
  {
    number: '04',
    category: 'ANALYTICS & PROCESS',
    title: 'Reporting & Operations',
    description: 'Standardized operational KPI reporting, spreadsheet modeling, and visual performance tracking.',
    items: ['Operational Reporting', 'Process Improvement', 'Excel-based analysis', 'Power BI'],
    accent: 'amber',
  },
];

export const APPROACH_STAGES = [
  {
    stage: '01',
    code: 'UNDERSTAND',
    title: 'Understand',
    description: 'Understand the requirement, process or operational issue.',
    detail: 'Pinpoint the root constraint on the ground, whether on the inventory sheet, dispatch dock, or vendor lead time.',
  },
  {
    stage: '02',
    code: 'TRACK',
    title: 'Track',
    description: 'Work with inventory, orders, vendors and operational information.',
    detail: 'Monitor live order queues, stock reconciliations, and supplier commitments with clean operational records.',
  },
  {
    stage: '03',
    code: 'COORDINATE',
    title: 'Coordinate',
    description: 'Coordinate with suppliers, logistics partners and relevant stakeholders.',
    detail: 'Liaise directly with 3PL courier partners and vendor contacts to prevent fulfillment roadblocks.',
  },
  {
    stage: '04',
    code: 'IMPROVE',
    title: 'Improve',
    description: 'Identify issues and look for practical ways to improve execution.',
    detail: 'Streamline standard operating procedures, reduce return TAT, and minimize stock shortages.',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'DOODLEZ',
    role: 'Supply Chain & Order Management Intern',
    location: 'Bengaluru',
    period: 'Oct 2025 – Dec 2025',
    typeBadge: 'Supply Chain & Operations Internship',
    metrics: [
      { label: 'Managed SKUs', value: '150+' },
      { label: 'Inventory Accuracy', value: '98%' },
      { label: 'Vendor Partners', value: '10+' },
      { label: 'On-Time Dispatch', value: '95%+' },
      { label: 'Daily Orders', value: '30–40' },
      { label: 'Return-TAT Reduction', value: '20%' },
    ],
    responsibilities: [
      'Managed 150+ SKUs with 98% inventory accuracy through stock reconciliation and inventory tracking.',
      'Coordinated 10+ vendors for timely stock replenishment, minimizing inventory shortages.',
      'Processed 30–40 orders daily through Shopify, ensuring accurate order fulfillment.',
      'Reduced return-TAT by 20% by streamlining reverse logistics with logistics partners.',
      'Achieved 95%+ on-time dispatch by coordinating with 5+ 3PL partners on deliveries.',
    ],
  },
  {
    company: 'VYBN',
    role: 'Operations Support Intern',
    location: 'Chennai',
    period: 'Jun 2025 – Aug 2025',
    typeBadge: 'Operations Support Internship',
    metrics: [
      { label: 'Daily Orders', value: '35+' },
      { label: 'Weekly Escalations', value: '10–25 Resolved' },
      { label: 'Courier Partners', value: '4–6' },
      { label: 'Orders Monitored', value: '100+' },
    ],
    responsibilities: [
      'Managed 35+ orders daily from confirmation through delivery, ensuring accurate order fulfillment.',
      'Resolved 10–25 delivery escalations weekly by coordinating with courier partners.',
      'Maintained service reliability by coordinating with 4–6 delivery partners.',
      'Tracked 100+ orders to monitor delivery status and resolve fulfillment issues.',
    ],
  },
  {
    company: 'VELS SOLUTION',
    role: 'Management Trainee – Business Reporting & Operations',
    location: 'Chennai',
    period: 'Apr 2024 – Jun 2024',
    typeBadge: 'Management Traineeship',
    metrics: [
      { label: 'Weekly Reports', value: '15+' },
      { label: 'Reporting Time', value: '-15%' },
      { label: 'Domain', value: 'Operations & MIS' },
    ],
    responsibilities: [
      'Prepared 15+ operational reports weekly to support management reviews and performance tracking.',
      'Reduced reporting time by 15% by standardizing documentation and reporting processes.',
      'Organized business performance data to support management analysis.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'stockflow',
    title: 'StockFlow | AI-Powered Smart Inventory',
    category: 'Supply Chain / Technology Project',
    tagline: 'AI-Powered Smart Inventory & Procurement Management for Sports Retail',
    description:
      'AI-powered inventory and procurement management system designed around sports retail inventory, featuring end-to-end movement tracking and smart reorder recommendations.',
    features: [
      '15 sports SKUs',
      'Inventory tracking',
      'Stock movements',
      'Inventory valuation',
      'Low-stock alerts',
      'AI demand forecasting',
      'Smart reorder recommendations',
      'Purchase orders',
      'Goods receiving',
      'Supplier invoices',
      'Payments',
      'Supplier performance',
      'Inventory reporting',
    ],
    liveUrl: 'https://stockflow-inventory-gfw0.onrender.com/',
    liveButtonText: 'View Live Project',
    details: {
      context: 'Sports retail businesses encounter sharp demand spikes across equipment and apparel SKUs. StockFlow was built as a dedicated inventory intelligence system specifically modeled around sports retail dynamics.',
      myRole: 'System & Operations Architect',
      whatIDid: [
        'Structured the 15 sports equipment and apparel catalog data hierarchy with critical reorder thresholds.',
        'Mapped the full procurement workflow: Purchase Orders -> Goods Receiving -> Supplier Invoices -> Payment settlements.',
        'Configured automated low-stock triggers, inventory valuation calculations, and AI demand forecasting projections.',
        'Built interactive supplier scorecard modules tracking on-time replenishment performance and pricing variances.',
      ],
      outcome: 'A fully functional cloud web application running live on Render, providing live inventory visibility and intelligent purchase orders.',
      learning: 'Accurate inventory planning depends on strict goods-receiving reconciliations to ensure AI forecasting operates on clean baseline stock data.',
    },
    metrics: [
      { label: 'Sports SKUs Modeled', value: '15' },
      { label: 'Core Workflows', value: '13 Integrated' },
      { label: 'Architecture', value: 'AI Forecasting + ERP' },
    ],
    accentColor: '#4F46E5',
  },
  {
    id: 'drop-shipping-taara',
    title: 'Drop Shipping Challenge — Team Taara',
    category: 'Business Challenge',
    tagline: 'High-Velocity Sourcing, E-Commerce Storefront & Razorpay Gateway Setup',
    description:
      'One-day campus drop-shipping business venture focused on crystals and gemstones. Managed supplier coordination, product sourcing, store development, and live digital payments.',
    product: 'Crystals and gemstones',
    contribution: [
      'Product sourcing',
      'Vendor/supplier coordination',
      'E-commerce website development',
      'Razorpay integration',
    ],
    outcome: 'The team generated ₹97,000 in revenue in one day at the DLF College drop-shipping event.',
    details: {
      context: 'High-intensity, single-day collegiate drop-shipping challenge at DLF College requiring teams to source product lines, launch an e-commerce channel, and fulfill real orders.',
      myRole: 'Operations, Sourcing & E-commerce Lead (Team Taara)',
      whatIDid: [
        'Negotiated wholesale acquisition pricing with local gemstone and crystal suppliers.',
        'Set up the digital product catalog with structured pricing, SKU variants, and high-converting product descriptions.',
        'Developed the live e-commerce website and securely configured the Razorpay payment gateway for instant QR and card checkouts.',
        'Monitored live order fulfillment and immediate stock handoffs during high customer rush hours.',
      ],
      outcome: 'The team generated ₹97,000 in revenue in one day at the DLF College drop-shipping event (Team Revenue).',
      learning: 'Eliminating checkout friction with seamless UPI/Razorpay integrations and maintaining vendor sync under tight time limits determines live event revenue.',
    },
    metrics: [
      { label: 'Team Revenue (1 Day)', value: '₹97,000' },
      { label: 'Product Segment', value: 'Crystals & Gems' },
      { label: 'Payment Gateway', value: 'Razorpay Live' },
    ],
    accentColor: '#F59E0B',
  },
  {
    id: 'odc-challenge',
    title: 'ODC Challenge — GoStop',
    category: 'Challenge / Competition',
    tagline: 'National Cohort Business Challenge Finalist & Runner-Up',
    description:
      'Prestigious business challenge conducted by GoStop across an extensive multi-disciplinary student cohort.',
    information: 'Conducted by GoStop. Selected among Top 20 from the entire cohort. Finished Runner-up / 2nd place in the final.',
    details: {
      context: 'GoStop Organised Development Challenge (ODC) testing operational strategy, analytical problem-solving, and cross-functional execution.',
      myRole: 'Competitor / Finalist',
      whatIDid: [
        'Participated in cohort-wide challenge rounds testing real-world operational decision making.',
        'Qualified through multiple analytical evaluation filters to enter the Top 20 bracket.',
        'Presented operational solutions before the judging panel in the grand finale.',
      ],
      outcome: 'Selected among Top 20 from the entire cohort and finished as Runner-up / 2nd Place in the final.',
      learning: 'Clarity of communication and structured operational prioritization are decisive when presenting complex solutions under pressure.',
    },
    metrics: [
      { label: 'Cohort Standing', value: 'Top 20 Finalist' },
      { label: 'Final Finish', value: 'Runner-up / 2nd' },
      { label: 'Organizer', value: 'GoStop' },
    ],
    accentColor: '#4338CA',
  },
  {
    id: 'proptech-automation',
    title: 'PropTech Automation Workflow',
    category: 'Automation / Operations Project',
    tagline: 'Automated Operations Scenario on Make.com for Property Visit Dispatch',
    description:
      'Team project created as part of a Sector Map activity. Built and demonstrated an event-driven automation scenario on Make.com modeled for PropTech customer visits.',
    contribution: [
      'Created/ran the workflow',
      'Demonstrated the workflow',
      'Explained the workflow modules/nodes',
    ],
    liveUrl: 'https://eu1.make.com/public/shared-scenario/UIApBIQz0dG/property-visit-notify-customer-of-poc',
    liveButtonText: 'View Workflow',
    details: {
      context: 'Sector Map exploration analyzing process automation opportunities in the Real Estate & PropTech operational lifecycle.',
      myRole: 'Workflow Creator & Technical Demonstrator',
      whatIDid: [
        'Designed the multi-node Make.com workflow connecting booking triggers, data filtering, and customer communication channels.',
        'Configured automated customer point-of-contact (POC) notification dispatches upon scheduled site inspection triggers.',
        'Demonstrated the working scenario live and detailed module data structures and error-handling steps.',
      ],
      outcome: 'A public, interactive Make.com scenario scenario blueprint available for live verification.',
      learning: 'Decoupling event triggers from communication payloads ensures reliable operations even if downstream messaging APIs experience momentary lag.',
    },
    metrics: [
      { label: 'Platform', value: 'Make.com' },
      { label: 'Focus Sector', value: 'PropTech' },
      { label: 'Status', value: 'Public Blueprint' },
    ],
    accentColor: '#F59E0B',
  },
  {
    id: 'vaishnav-bazaar',
    title: 'Vaishnav Bazaar | Student Business Venture',
    category: 'Student Business Venture',
    tagline: 'Hands-On Campus Commerce: Procurement, Cost Negotiation & Customer Sales',
    description:
      'Student-led commercial venture managing vendor pricing analysis, inventory leftover minimization, and strict purchase-bill documentation.',
    details: {
      context: 'On-campus business venture designed to experience the full operational lifecycle of retail commerce from supplier sourcing to customer reconciliation.',
      myRole: 'Founder & Operations Lead',
      whatIDid: [
        'Negotiated with 10+ vendors by analyzing supplier pricing to secure advantageous wholesale costs.',
        'Maintained 80% purchase-bill records for customer transactions to ensure verifiable accounting.',
        'Reduced inventory leftovers through proactive supplier coordination and demand-matched product selection.',
        'Managed front-of-house sales, customer engagement, and inventory restocking.',
      ],
      outcome: 'Generated ₹44,300 in revenue from 120+ unique customers with an achieved 20% repeat customer rate.',
      learning: 'Controlling inventory risk starts before purchasing; selecting the right vendor terms and keeping systematic transaction logs preserves working capital.',
    },
    metrics: [
      { label: 'Revenue Generated', value: '₹44,300' },
      { label: 'Customer Base', value: '120+ Buyers' },
      { label: 'Repeat Customers', value: '20%' },
      { label: 'Suppliers Negotiated', value: '10+ Vendors' },
      { label: 'Billing Record Rate', value: '80%' },
    ],
    accentColor: '#4338CA',
  },
];

export const ARTEFACTS: Artefact[] = [
  {
    id: 'stockflow-schema',
    title: 'StockFlow Sports SKU & PO System Architecture',
    type: 'System Blueprint / Technology',
    badge: 'Interactive Tool',
    description: 'Data structure map for 15 sports equipment and apparel SKUs with automated reorder thresholds and purchase-order lifecycles.',
    meta: 'Python / Render Cloud / Web App',
    iconType: 'code',
    previewHighlights: [
      { label: 'Catalog', value: '15 Sports SKUs' },
      { label: 'Logic', value: 'AI Forecasting + Reorders' },
      { label: 'Ledger', value: 'Goods Receiving to Invoicing' },
    ],
    details: 'Full cloud deployment of StockFlow handling stock movements, inventory valuation, supplier performance tracking, and goods-receiving verification.',
  },
  {
    id: 'make-scenario',
    title: 'Make.com PropTech Automated Dispatch Scenario',
    type: 'Automation Blueprint',
    badge: 'Public Scenario',
    description: 'Multi-node visual workflow automating customer notifications and point-of-contact details upon property visit bookings.',
    meta: 'Make.com Public Blueprint',
    iconType: 'workflow',
    previewHighlights: [
      { label: 'Nodes', value: 'Multi-Step Trigger' },
      { label: 'Payload', value: 'Customer & POC Notification' },
      { label: 'Domain', value: 'PropTech Sector Map' },
    ],
    details: 'Shared Make.com scenario demonstrating automated dispatch logic, payload parsing, and error-handling sequences.',
  },
  {
    id: 'taara-sales-log',
    title: 'Team Taara Gemstone E-Commerce & Razorpay Records',
    type: 'Business Challenge Output',
    badge: 'Event Milestone',
    description: 'Storefront checkout records and digital payment logs from the DLF College 1-day challenge.',
    meta: 'Razorpay Gateway & E-Commerce Log',
    iconType: 'table',
    previewHighlights: [
      { label: 'Team Revenue', value: '₹97,000 (1 Day)' },
      { label: 'Integration', value: 'Razorpay Payment Flow' },
      { label: 'Operation', value: 'Supplier Direct Sourcing' },
    ],
    details: 'Documentation of single-day team revenue generation, catalog pricing strategy, and vendor fulfillment at DLF College.',
  },
  {
    id: 'vaishnav-ledger',
    title: 'Vaishnav Bazaar Vendor Negotiation & Sales Ledger',
    type: 'Venture Ledger & Bills',
    badge: 'Commercial Evidence',
    description: 'Audited vendor pricing analysis, 80% purchase-bill documentation, and customer order records.',
    meta: '10+ Vendors / 120+ Customers',
    iconType: 'document',
    previewHighlights: [
      { label: 'Total Revenue', value: '₹44,300' },
      { label: 'Repeat Customers', value: '20%' },
      { label: 'Compliance', value: '80% Purchase Bills' },
    ],
    details: 'Complete paper-trail and digital ledger detailing supplier pricing negotiations, margin calculations, and inventory surplus control.',
  },
  {
    id: 'doodlez-dispatch-metrics',
    title: 'Doodlez Stock Reconciliation & 3PL SLA Tracker',
    type: 'Operations Dashboard',
    badge: 'Internship Metric Log',
    description: 'Framework tracking 150+ SKUs with 98% inventory accuracy and 20% return-TAT reduction across 5+ delivery partners.',
    meta: 'Shopify / 3PL Coordination Log',
    iconType: 'dashboard',
    previewHighlights: [
      { label: 'Accuracy', value: '98% on 150+ SKUs' },
      { label: 'Dispatch', value: '95%+ On-Time' },
      { label: 'Reverse Logistics', value: '-20% Return TAT' },
    ],
    details: 'Operational reconciliation procedures implemented to maintain high on-time dispatch and coordinate with 10+ replenishment vendors.',
  },
  {
    id: 'gostop-odc-final',
    title: 'GoStop ODC National Cohort Runner-Up Verification',
    type: 'Competition Award',
    badge: 'Top 20 & Runner-Up',
    description: 'Official selection among Top 20 from entire cohort and 2nd place runner-up finish in the finale.',
    meta: 'GoStop Cohort Challenge Final',
    iconType: 'award',
    previewHighlights: [
      { label: 'Standing', value: 'Top 20 Nationwide' },
      { label: 'Result', value: 'Runner-Up / 2nd Place' },
      { label: 'Challenge', value: 'Business & Ops Case' },
    ],
    details: 'Verified milestone recognizing analytical strategy, problem decomposition, and final operational defense.',
  },
];

export const SKILLS_DATA = {
  supplyChain: [
    'Inventory Management',
    'Inventory Control',
    'Inventory Planning',
    'Stock Replenishment',
    'Procurement',
    'Vendor Management',
    'Order Management',
    'Order Fulfillment',
    'Reverse Logistics',
    '3PL Coordination',
  ],
  tools: [
    { name: 'Advanced Excel', category: 'Data & Modeling' },
    { name: 'PowerPoint', category: 'Executive Communication' },
    { name: 'Power BI', category: 'Business Intelligence & Dashboards' },
    { name: 'Zoho ERP', category: 'Enterprise Operations' },
    { name: 'Basic SAP & Oracle exposure', category: 'Enterprise Resource Planning' },
    { name: 'Shopify', category: 'E-Commerce Order Management' },
  ],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Masters’ Union',
    degree: 'PGP in Sports Management and Gaming',
    period: '2026 – Present',
    location: 'Gurugram',
    highlights: [
      'Focusing on the convergence of sports industry commercialization, logistics, and gaming operations.',
      'Analyzing global sports merchandising, event logistics, and athlete supply chains.',
    ],
  },
  {
    institution: 'D.G. Vaishnav College',
    degree: 'Bachelor of Commerce & Business Administration',
    period: '2022 – 2025',
    location: 'Chennai',
    highlights: [
      'Comprehensive study in business administration, operations, accounting, and commercial trade.',
      'Active leadership in departmental operations and student entrepreneurship.',
    ],
  },
  {
    institution: 'Kola Perumal Chetty Vaishnav Senior Secondary School',
    degree: 'CBSE Class X & XII',
    period: '2019 – 2022',
    location: 'Chennai',
    highlights: [
      'Commerce and business fundamentals with strong quantitative foundations.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Supply Chain Foundations',
    issuer: 'LinkedIn Learning',
  },
  {
    title: 'Advanced Excel Training',
    issuer: 'Excelschooling',
  },
];

export const LEADERSHIP_DATA = {
  primary: {
    role: 'Core Member — Departmental Cultural Committee',
    organization: 'D.G. Vaishnav College',
    description:
      'Coordinated vendor requirements/event activities, negotiated vendor pricing and supported cost-effective event operations.',
  },
  achievements: [
    {
      title: 'NCC ‘A’ Certificate',
      description: 'Discipline, field coordination, and operational resilience through National Cadet Corps service.',
      badge: 'NCC',
    },
    {
      title: 'Karate Blue Belt',
      description: 'Focus, dedication, precision, and physical stamina developed through martial arts progression.',
      badge: 'Martial Arts',
    },
  ],
};

export const CAREER_DIRECTION = {
  heading: 'Next Frontier: Sports & Supply Chain',
  primaryFocus: 'Supply Chain & Operations',
  preferredIndustry: 'Sports',
  statement:
    'I’m open to Supply Chain & Operations opportunities across other industries.',
  targetAreas: [
    { title: 'Sports Companies', desc: 'Global athletic brand operations, regional distribution, and sports business logistics.' },
    { title: 'Sports Nutrition', desc: 'Batch-controlled, temperature-sensitive supplements and performance nutrition replenishment.' },
    { title: 'Sports Merchandise & Apparel', desc: 'High-velocity seasonal drops, team jersey fulfillment, and fan merchandise logistics.' },
    { title: 'Sporting Goods & Equipment', desc: 'Multi-category equipment warehousing, inventory buffers, and bulk dispatch handling.' },
    { title: 'Sports Retail', desc: 'Omnichannel store replenishment, point-of-sale inventory tracking, and consumer fulfillment.' },
  ],
};
