import { Project, Experience, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'GNANA YADESWAR',
  monogram: 'GY',
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

export interface ApproachStageBreakdown {
  whatILookAt: string;
  inPractice: string;
  whyItMatters: string;
  keyPoints: string[];
}

export interface ApproachStageItem {
  stage: string;
  code: string;
  title: string;
  description: string;
  detail: string;
  breakdown: ApproachStageBreakdown;
}

export const APPROACH_STAGES: ApproachStageItem[] = [
  {
    stage: '01',
    code: 'UNDERSTAND',
    title: 'Understand',
    description: 'Understand the requirement, process or operational issue.',
    detail: 'Pinpoint the root constraint on the ground, whether on the inventory sheet, dispatch dock, or vendor lead time.',
    breakdown: {
      whatILookAt: 'Understand the requirement, process or operational issue before acting.',
      inPractice: 'Identify what is happening across inventory, orders, dispatch or vendor coordination.',
      whyItMatters: 'A clear understanding of the issue helps avoid solving the wrong problem.',
      keyPoints: ['Constraint Identification', 'Requirement Clarification', 'Process Mapping'],
    },
  },
  {
    stage: '02',
    code: 'TRACK',
    title: 'Track',
    description: 'Work with inventory, orders, vendors and operational information.',
    detail: 'Monitor live order queues, stock reconciliations, and supplier commitments with clean operational records.',
    breakdown: {
      whatILookAt: 'Inventory, orders, vendors and operational information.',
      inPractice: 'Track stock, order status, supplier commitments and operational records.',
      whyItMatters: 'Accurate tracking helps identify issues early.',
      keyPoints: ['Inventory Reconciliation', 'Order Queue Status', 'Supplier Commitments'],
    },
  },
  {
    stage: '03',
    code: 'COORDINATE',
    title: 'Coordinate',
    description: 'Coordinate with suppliers, logistics partners and relevant stakeholders.',
    detail: 'Liaise directly with 3PL courier partners and vendor contacts to prevent fulfillment roadblocks.',
    breakdown: {
      whatILookAt: 'Suppliers, logistics partners and relevant stakeholders.',
      inPractice: 'Coordinate with courier delivery partners, resolve transit escalations, and sync dispatch handoffs.',
      whyItMatters: 'Proactive coordination prevents fulfillment roadblocks, reduces delivery delays, and aligns cross-functional teams.',
      keyPoints: ['3PL Courier Follow-Ups', 'Vendor Lead-Time Sync', 'Escalation Resolution'],
    },
  },
  {
    stage: '04',
    code: 'IMPROVE',
    title: 'Improve',
    description: 'Identify issues and look for practical ways to improve execution.',
    detail: 'Streamline standard operating procedures, reduce return TAT, and minimize stock shortages.',
    breakdown: {
      whatILookAt: 'Bottlenecks, recurring fulfillment friction, and workflow gaps.',
      inPractice: 'Standardize operational reports, streamline reverse logistics to cut return TAT, and automate alerts.',
      whyItMatters: 'Practical, incremental process improvements build reliable operations, prevent recurring errors, and protect SLAs.',
      keyPoints: ['Standard Operating Procedures', 'Return-TAT Optimization', 'Workflow Automation'],
    },
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
    category: 'Workflow Automation',
    tagline: 'AI-Powered Smart Inventory & Procurement Management for Sports Retail',
    description:
      'Dedicated inventory intelligence and procurement management web application specifically modeled around sports retail dynamics.',
    features: [
      '15 sports SKUs',
      'Inventory tracking',
      'Stock movements',
      'Inventory valuation',
      'Low-stock alerts',
      'Supplier management',
      'AI demand forecasting',
      'Reorder recommendations',
      'Purchase orders',
      'Goods receiving',
      'Supplier invoices',
      'Payments',
      'Supplier performance',
      'Inventory reports/analytics',
    ],
    outcome: 'Live deployment on Render with 15 sports SKUs modeled and full procurement cycles.',
    liveUrl: 'https://stockflow-inventory-gfw0.onrender.com/',
    liveButtonText: 'Live Project',
    details: {
      context: 'Sports retail businesses encounter sharp demand spikes across equipment and apparel SKUs. StockFlow was built as a dedicated smart inventory system specifically modeled around sports retail dynamics.',
      myRole: 'System & Operations Architect',
      whatIDid: [
        'Modeled 15 sports SKUs across equipment and apparel categories with inventory tracking and stock movement logs.',
        'Configured inventory valuation and automated low-stock alerts with critical reorder thresholds.',
        'Structured supplier management, supplier scorecards, and supplier performance tracking.',
        'Integrated AI demand forecasting and automated reorder recommendations.',
        'Built end-to-end procurement cycles: purchase orders, goods receiving, supplier invoices, and payment reconciliation.',
        'Developed comprehensive inventory reports and analytics dashboards.',
      ],
      outcome: 'Live functional web application deployed on Render with active procurement cycles.',
    },
    metrics: [
      { label: 'Sports SKUs Modeled', value: '15 SKUs' },
      { label: 'Integrated Modules', value: '13 Workflows' },
      { label: 'Platform Status', value: 'Live on Render' },
    ],
    accentColor: '#4F46E5',
  },
  {
    id: 'drop-shipping-taara',
    title: 'Team Taara | Drop-Shipping Challenge',
    category: 'Competitions & Challenges',
    tagline: 'Product Sourcing, E-Commerce Storefront & Razorpay Payment Integration',
    description:
      'One-day drop-shipping business venture focused on crystals and gemstones. Product sourcing and vendor/supplier coordination, e-commerce storefront development, and payment gateway integration.',
    product: 'Crystals & Gemstones',
    tools: ['E-Commerce Website', 'Razorpay (Payment Gateway)', 'Vendor Coordination'],
    contribution: [
      'Product sourcing and vendor/supplier coordination',
      'Built an e-commerce website for the venture',
      'Integrated Razorpay as the payment gateway',
    ],
    outcome: '₹97,000 team revenue in one day (Team Revenue).',
    details: {
      context: 'High-intensity, single-day drop-shipping business venture focused on crystals and gemstones. Teams coordinated real-time vendor supply, digital store checkout, and customer order fulfillment.',
      myRole: 'Product Sourcing & Vendor Coordination',
      whatIDid: [
        'Product sourcing and vendor/supplier coordination.',
        'Built an e-commerce website for the venture.',
        'Integrated Razorpay as the payment gateway for instant, frictionless digital checkouts.',
      ],
      outcome: '₹97,000 team revenue in one day (Team Revenue).',
    },
    metrics: [
      { label: 'Team Revenue (1 Day)', value: '₹97,000' },
      { label: 'Product Category', value: 'Crystals & Gemstones' },
      { label: 'Payment Gateway', value: 'Razorpay' },
    ],
    accentColor: '#F59E0B',
  },
  {
    id: 'odc-challenge',
    title: 'ODC Challenge — GoStop',
    category: 'Competitions & Challenges',
    tagline: 'Conducted by GoStop • Top 20 from Entire Cohort • Runner-Up / 2nd Place',
    description:
      'Prestigious business challenge conducted by GoStop across an extensive multi-disciplinary student cohort.',
    outcome: 'Selected among Top 20 from the entire cohort. Finished Runner-up / 2nd place in the final.',
    information: 'Conducted by GoStop. Selected among Top 20 from the entire cohort. Finished Runner-up / 2nd place in the final.',
    details: {
      context: 'Organised Development Challenge (ODC) conducted by GoStop testing operational problem-solving and strategic execution.',
      myRole: 'Cohort Competitor & Finalist',
      whatIDid: [
        'Conducted by GoStop.',
        'Selected among Top 20 from the entire cohort.',
        'Finished Runner-up / 2nd place in the final.',
      ],
      outcome: 'Selected among Top 20 from the entire cohort. Finished Runner-up / 2nd place in the final.',
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
    category: 'Workflow Automation',
    tagline: 'Make.com Event-Driven Automation Scenario',
    description:
      'Team project based on the PropTech sector demonstrating an automated property visit customer notification workflow on Make.com.',
    tools: ['Make.com', 'Webhook Triggers', 'Data Filtering', 'Customer Dispatch'],
    outcome: 'Built and demonstrated a Make.com automation workflow.',
    liveUrl: 'https://eu1.make.com/public/shared-scenario/UIApBIQz0dG/property-visit-notify-customer-of-poc',
    liveButtonText: 'View Workflow',
    details: {
      context: 'Team project as part of Sector Map activity. Built and ran a Make.com event-driven automation scenario based on the PropTech sector.',
      whatIDid: [
        'Team project as part of Sector Map activity.',
        'Make.com automation scenario based on the PropTech sector.',
        'Event-driven workflow with webhook triggers, filtering, and notification nodes.',
      ],
      outcome: 'Built and demonstrated a Make.com event-driven automation scenario based on the PropTech sector.',
    },
    metrics: [
      { label: 'Platform', value: 'Make.com' },
      { label: 'Focus Sector', value: 'PropTech' },
      { label: 'Project Format', value: 'Team Project' },
    ],
    accentColor: '#F59E0B',
  },
  {
    id: 'vaishnav-bazaar',
    title: 'Vaishnav Bazaar | Student Business Venture',
    category: 'Student Ventures',
    tagline: 'Student Business Venture • Founder & Operations Lead',
    description:
      'Student business venture managing vendor pricing analysis, inventory leftover minimization, and strict purchase-bill documentation on campus.',
    outcome: '₹44,300 revenue • 120+ customers • 10+ vendors.',
    details: {
      context: 'Student business venture designed to experience the full operational lifecycle of retail commerce from supplier sourcing to customer reconciliation.',
      myRole: 'Founder & Operations Lead',
      whatIDid: [
        'Organized and led as a hands-on student business venture on campus.',
        'Negotiated with 10+ vendors by analyzing wholesale supplier pricing to secure advantageous wholesale costs.',
        'Maintained 80% purchase-bill records for customer transactions to ensure verifiable accounting.',
        'Managed 120+ customers with an achieved 20% repeat customer rate.',
        'Reduced inventory leftovers through proactive supplier coordination and demand-matched product selection.',
      ],
      outcome: 'Generated ₹44,300 in revenue from 120+ unique customers with 20% repeat customer rate and 80% purchase-bill records.',
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

export interface SoftwareTool {
  name: string;
  proficiencyLevel: 'Advanced' | 'Working Proficiency' | 'Basic Exposure';
  percent: number;
  iconName: 'excel' | 'powerpoint' | 'powerbi' | 'zoho' | 'shopify' | 'sap' | 'oracle';
}

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  { name: 'Advanced Excel', proficiencyLevel: 'Advanced', percent: 80, iconName: 'excel' },
  { name: 'PowerPoint', proficiencyLevel: 'Advanced', percent: 80, iconName: 'powerpoint' },
  { name: 'Power BI', proficiencyLevel: 'Working Proficiency', percent: 65, iconName: 'powerbi' },
  { name: 'Zoho ERP', proficiencyLevel: 'Working Proficiency', percent: 55, iconName: 'zoho' },
  { name: 'Shopify', proficiencyLevel: 'Working Proficiency', percent: 70, iconName: 'shopify' },
  { name: 'SAP', proficiencyLevel: 'Basic Exposure', percent: 35, iconName: 'sap' },
  { name: 'Oracle', proficiencyLevel: 'Basic Exposure', percent: 35, iconName: 'oracle' },
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
