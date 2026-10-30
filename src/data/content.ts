import { ServiceItem, IndustryItem, DifferentiatorItem, PricingPlan, ProcessStep } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'careers',
    title: 'Global Careers & Recruitment Support',
    tagline: 'Your Career. Your Country. Your Opportunity.',
    description: 'Empowering professionals with strategic positioning, curated employer networks, and personalized guidance across local and worldwide markets.',
    capabilities: [
      'Karachi and nationwide job-search assistance',
      'International job-search support',
      'Employer and recruitment-network connections',
      'CV and résumé optimization',
      'Professional profile development',
      'Interview preparation and career consulting',
      'Remote, hybrid, and onsite opportunity research'
    ],
    disclaimer: 'Career assistance services provide strategic consulting and market research; they do not guarantee interviews, job offers, visas, or employment.',
    iconName: 'Compass',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'business-dev',
    title: 'Business Development & Customer Acquisition',
    tagline: 'Turn Opportunities Into Business Growth.',
    description: 'Accelerate corporate expansion through targeted outbound prospecting, high-value networking, and data-driven customer acquisition pipelines.',
    capabilities: [
      'B2B lead generation',
      'Prospect research and qualification',
      'Business networking',
      'International market research',
      'Sales pipeline development',
      'Customer acquisition strategies',
      'AI-powered sales automation',
      'CRM implementation and workflow optimization'
    ],
    iconName: 'TrendingUp',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'ai-automation',
    title: 'Artificial Intelligence & Intelligent Automation',
    tagline: 'Build Smarter. Operate Faster. Innovate Further.',
    description: 'Pioneering custom generative AI models, autonomous multi-agent workflows, and enterprise retrieval systems tailored for mission-critical operations.',
    capabilities: [
      'Generative AI and LLM applications',
      'AI agents and autonomous workflows',
      'Enterprise AI assistants',
      'Retrieval-Augmented Generation (RAG) applications',
      'Intelligent customer support systems',
      'AI-powered lead generation',
      'OCR and intelligent document processing',
      'Private and locally deployed AI solutions'
    ],
    iconName: 'Cpu',
    gradient: 'from-cyan-400 via-blue-500 to-purple-600'
  },
  {
    id: 'software-dev',
    title: 'Software Development & IT Solutions',
    tagline: 'Your Vision. Our Technology. Your Competitive Advantage.',
    description: 'Architecting high-performance web platforms, enterprise software, cloud infrastructure, and robust API ecosystems engineered for scale.',
    capabilities: [
      'Corporate websites',
      'Web applications',
      'Custom software development',
      'Backend and API development',
      'Mobile and cross-platform applications',
      'E-commerce platforms',
      'SaaS product development',
      'Database architecture',
      'Cloud deployment',
      'Enterprise integrations',
      'Technical support and maintenance'
    ],
    iconName: 'Code',
    gradient: 'from-indigo-500 to-violet-600'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Security Technology',
    tagline: 'Protect Your Systems. Strengthen Your Business.',
    description: 'Defending mission-critical assets through proactive vulnerability assessments, AI threat detection, zero-trust architectures, and compliance hardening.',
    capabilities: [
      'Cybersecurity consulting',
      'Website and application security',
      'Authorized vulnerability assessments',
      'Network security and infrastructure hardening',
      'Security monitoring and alerting',
      'AI-assisted threat analysis',
      'Identity and access management',
      'Security workflow automation',
      'Smart monitoring integrations'
    ],
    iconName: 'ShieldCheck',
    gradient: 'from-emerald-500 to-cyan-600'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation & Business Consulting',
    tagline: 'Modern Technology. Smarter Decisions. Sustainable Growth.',
    description: 'Bridging strategic business goals with cutting-edge tech execution, streamlining operations, and navigating high-impact organizational pivots.',
    capabilities: [
      'Digital transformation planning',
      'AI adoption strategies',
      'Technology architecture',
      'Business process optimization',
      'Market and competitor research',
      'Startup and product consulting',
      'Software project planning',
      'Operational efficiency improvements'
    ],
    iconName: 'Boxes',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    tagline: 'The Right Technology for Your Business.',
    description: 'Providing strategic engineering advisory, vendor selection, infrastructure audits, and scalable roadmap design to maximize technical ROI.',
    capabilities: [
      'Technology assessments',
      'Technical architecture recommendations',
      'Software and platform selection',
      'Infrastructure planning',
      'System integration',
      'Implementation guidance',
      'Scalability consulting'
    ],
    iconName: 'Layers',
    gradient: 'from-blue-600 to-cyan-500'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'it',
    name: 'Information Technology',
    description: 'Scalable infrastructure, cloud engineering, and enterprise system deployments.',
    iconName: 'Server'
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    description: 'Frontier LLM development, neural frameworks, and autonomous workflow tooling.',
    iconName: 'Sparkles'
  },
  {
    id: 'fintech',
    name: 'Banking and FinTech',
    description: 'High-security financial architectures, payment integrations, and automated compliance.',
    iconName: 'Landmark'
  },
  {
    id: 'healthtech',
    name: 'Healthcare and HealthTech',
    description: 'HIPAA-conscious data pipelines, telemedicine engines, and medical workflow AI.',
    iconName: 'Activity'
  },
  {
    id: 'cybersecurity-ind',
    name: 'Cybersecurity',
    description: 'Threat hunting systems, SOC automation, perimeter defense, and zero-trust engineering.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce and Retail',
    description: 'High-conversion digital storefronts, inventory intelligence, and customer analytics.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    description: 'Next-generation network orchestration, messaging platforms, and high-load APIs.',
    iconName: 'Radio'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'IoT sensor telemetry, predictive maintenance alerts, and industrial operational intelligence.',
    iconName: 'Factory'
  },
  {
    id: 'logistics',
    name: 'Logistics and Supply Chain',
    description: 'Route optimization, fleet tracking, warehouse automation, and delivery monitoring.',
    iconName: 'Truck'
  },
  {
    id: 'edtech',
    name: 'Education and EdTech',
    description: 'Adaptive learning environments, LMS platforms, and interactive knowledge assistants.',
    iconName: 'GraduationCap'
  },
  {
    id: 'realestate',
    name: 'Real Estate and Construction',
    description: 'Property management portals, CRM pipelines, and automated valuation workflows.',
    iconName: 'Building2'
  },
  {
    id: 'professional-services',
    name: 'Marketing and Professional Services',
    description: 'Dynamic customer acquisition funnels, campaign intelligence, and client reporting tools.',
    iconName: 'Briefcase'
  },
  {
    id: 'recruitment',
    name: 'Recruitment and Human Resources',
    description: 'Talent discovery algorithms, ATS integrations, and skills-matching automation.',
    iconName: 'Users'
  },
  {
    id: 'energy',
    name: 'Energy and Infrastructure',
    description: 'Grid monitoring systems, resource usage analytics, and sustainable energy tracking.',
    iconName: 'Zap'
  }
];

export const DIFFERENTIATORS_DATA: DifferentiatorItem[] = [
  {
    id: 'diff-1',
    title: 'Global Opportunities',
    description: 'Career and business development support across local hubs and premier international markets.',
    iconName: 'Globe'
  },
  {
    id: 'diff-2',
    title: 'AI-Driven Innovation',
    description: 'Practical, real-world AI applications and intelligent automation engineered to deliver measurable impact.',
    iconName: 'Brain'
  },
  {
    id: 'diff-3',
    title: 'Business-Focused Strategy',
    description: 'Solutions strictly aligned with tangible customer acquisition, revenue growth, and operational productivity.',
    iconName: 'Target'
  },
  {
    id: 'diff-4',
    title: 'Customized Solutions',
    description: 'Tailored roadmaps crafted precisely around individual career trajectories and organization-specific demands.',
    iconName: 'Sliders'
  },
  {
    id: 'diff-5',
    title: 'Integrated Expertise',
    description: 'Holistic synergies across executive career consulting, outbound sales growth, custom software, AI, and cybersecurity.',
    iconName: 'Workflow'
  },
  {
    id: 'diff-6',
    title: 'Future-Ready Technology',
    description: 'Scalable, modern software architectures built to adapt gracefully as global technology and markets evolve.',
    iconName: 'Rocket'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'karachi-package',
    title: 'Karachi Job Search Package',
    subtitle: 'Local Market Opportunity Accelerator',
    price: 'PKR 100,000',
    unit: 'starting from',
    description: 'Designed specifically for candidates seeking strategic job-search assistance and professional profile positioning within Karachi.',
    category: 'Career Services',
    features: [
      'Targeted job-search support in Karachi',
      'Professional profile guidance & CV optimization',
      'Relevant local market opportunity research',
      'Interview preparation guidelines & strategy',
      'Career assistance according to the agreed scope',
      'Dedicated one-on-one progress checkpoints'
    ],
    ctaLabel: 'Request Karachi Package',
    popular: false,
    disclaimer: 'Starting prices transparently stated. Package deliverables, duration, and applicable terms must be agreed upon in writing before payment. Career packages do not guarantee employment, interviews, job offers, visas, or overseas placements.'
  },
  {
    id: 'international-package',
    title: 'International Job Search Package',
    subtitle: 'Global Career Positioning Program',
    price: 'PKR 1,000,000',
    unit: 'starting from',
    description: 'Designed for ambitious professionals exploring international employment opportunities, remote worldwide roles, and global career transitions.',
    category: 'Career Services',
    features: [
      'International opportunity research & market mapping',
      'Global-standard professional profile development',
      'Comprehensive international career roadmap planning',
      'Job-search support according to the agreed scope',
      'Cross-border interview & presentation coaching',
      'Executive networking & outreach best practices'
    ],
    ctaLabel: 'Request International Package',
    popular: true,
    disclaimer: 'Starting prices transparently stated. Package deliverables, duration, and applicable terms must be agreed upon in writing before payment. Career packages do not guarantee employment, interviews, job offers, visas, or overseas placements.'
  },
  {
    id: 'business-tech-solutions',
    title: 'Business & Technology Solutions',
    subtitle: 'Enterprise AI, Engineering & Consulting',
    price: 'Custom Pricing',
    unit: 'tailored scope',
    description: 'Comprehensive corporate solutions spanning B2B business development, bespoke artificial intelligence, software engineering, and cybersecurity.',
    category: 'Enterprise Solutions',
    features: [
      'B2B business development & customer acquisition',
      'Generative AI models & autonomous agent workflows',
      'Full-stack custom software & web application development',
      'Cybersecurity audits & vulnerability assessments',
      'Strategic IT consulting & architecture planning',
      'Digital transformation & operational optimization'
    ],
    ctaLabel: 'Request a Consultation',
    popular: false,
    disclaimer: 'All enterprise engagements are custom-scoped. Formal proposals outlining timelines, service tiers, milestones, and deliverable commitments are finalized prior to contract execution.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Choose Your Service',
    description: 'Select the career, business, or technology service tailored to your personal or organizational objectives.',
    iconName: 'CheckCircle2'
  },
  {
    step: 2,
    title: 'Submit Your Requirements',
    description: 'Complete our structured inquiry form with relevant background information, scope details, and goals.',
    iconName: 'FileText'
  },
  {
    step: 3,
    title: 'Discuss Your Needs',
    description: 'Engage in a direct discovery session to clarify specific objectives, project milestones, and expected deliverables.',
    iconName: 'MessageSquare'
  },
  {
    step: 4,
    title: 'Review the Agreement',
    description: 'Carefully confirm all pricing details, execution timelines, deliverables, and applicable terms in writing.',
    iconName: 'FileCheck'
  },
  {
    step: 5,
    title: 'Complete Payment',
    description: 'Use the authorized, verified payment details provided only after the mutual scope has been agreed upon.',
    iconName: 'CreditCard'
  },
  {
    step: 6,
    title: 'Submit Your Receipt',
    description: 'Send the transaction reference or deposit slip through our official WhatsApp contact channel for verification.',
    iconName: 'Send'
  },
  {
    step: 7,
    title: 'Begin the Service',
    description: 'Project onboarding and execution commence immediately following payment verification and scope sign-off.',
    iconName: 'PlayCircle'
  }
];

export const PAYMENT_DETAILS = {
  bankName: 'Meezan Bank',
  accountTitle: 'MURTUZA KHALID',
  accountNumber: '99330102571482',
  iban: 'PK68MEZN0099330102571482',
  whatsappNumber: '+923060824762',
  whatsappUrl: 'https://wa.me/923060824762',
  safetyNotice: 'Please verify the beneficiary details and agreed service terms before transferring funds. Retain your receipt and submit the transaction reference through our official WhatsApp contact channel. An order is confirmed only after payment verification.'
};

