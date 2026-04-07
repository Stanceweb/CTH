export const site = {
  name: 'Continental Trust Hosting',
  shortName: 'Continental Trust Hosting',
  tagline: 'Managed hosting for businesses that need technical help, not just server space.',
  signInUrl: 'https://app.continentaltrustonline.online/',
  signUpUrl: 'https://app.continentaltrustonline.online/',
  comparePlansUrl: '/pricing',
  telegramSupportUrl: 'https://t.me/continentaltrust',
}

export const mainNavLinks = [
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Security', to: '/security' },
  { label: 'Backups', to: '/backups' },
  { label: 'Migrations', to: '/migrations' },
  { label: 'Support', to: '/support' },
  { label: 'Contact', to: '/contact' },
]

export const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Status', to: '/status' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Migrations', to: '/migrations' },
      { label: 'Security', to: '/security' },
      { label: 'Backups', to: '/backups' },
      { label: 'Support', to: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Refund Policy', to: '/refunds' },
    ],
  },
]

export const pricingPlans = [
  {
    key: 'starter',
    name: 'Starter',
    recommended: false,
    slugs: { monthly: 'starter_monthly', yearly: 'starter_yearly' },
    prices: {
      USD: { monthly: 3.99, yearly: 39.9, renewMonthly: 6.99, renewYearly: 69.9 },
      NGN: { monthly: 3900, yearly: 39000 },
    },
    features: {
      websites: 'Up to 3 websites',
      storage: 'Managed storage allocation',
      bandwidth: 'Managed traffic allocation',
      ssl: 'Free SSL',
      backups: 'Automatic backups',
      support: 'Standard technical support',
      troubleshooting: 'Deployment troubleshooting and website error support',
      community: 'Telegram community access',
      bestFor: 'Small websites that need dependable hosting and technical help',
    },
  },
  {
    key: 'business',
    name: 'Business',
    recommended: true,
    slugs: { monthly: 'business_monthly', yearly: 'business_yearly' },
    prices: {
      USD: { monthly: 9.99, yearly: 99.9, renewMonthly: 19.99, renewYearly: 199.9 },
      NGN: { monthly: 9900, yearly: 99000 },
    },
    features: {
      websites: 'Up to 10 websites',
      storage: 'Expanded managed storage',
      bandwidth: 'Higher managed traffic allocation',
      ssl: 'Free SSL',
      backups: 'Automatic backups',
      support: 'Priority technical support queue',
      troubleshooting: 'Deployment support and configuration troubleshooting',
      community: 'Telegram community access',
      bestFor: 'Growing businesses that need quicker response handling',
    },
  },
  {
    key: 'pro',
    name: 'Pro',
    recommended: false,
    slugs: { monthly: 'pro_monthly', yearly: 'pro_yearly' },
    prices: {
      USD: { monthly: 24.99, yearly: 249.9, renewMonthly: 49.99, renewYearly: 499.9 },
      NGN: { monthly: 24900, yearly: 249000 },
    },
    features: {
      websites: 'Unlimited websites',
      storage: 'Highest managed storage tier',
      bandwidth: 'Highest managed traffic allocation',
      ssl: 'Free SSL',
      backups: 'Automatic backups',
      support: 'Top-priority handling and faster escalation',
      troubleshooting: 'Advanced deployment assistance and stability troubleshooting',
      community: 'Telegram community access',
      bestFor: 'Serious businesses, teams, and agencies with urgent workloads',
    },
  },
] as const

export const pricingComparisonRows = [
  { label: 'Price', key: 'price' },
  { label: 'Billing cycle', key: 'billing' },
  { label: 'Renewal price', key: 'renewal' },
  { label: 'Websites / domains', key: 'websites' },
  { label: 'Storage', key: 'storage' },
  { label: 'Bandwidth', key: 'bandwidth' },
  { label: 'SSL', key: 'ssl' },
  { label: 'Backups', key: 'backups' },
  { label: 'Support', key: 'support' },
  { label: 'Best for', key: 'bestFor' },
] as const

export const homeContent = {
  hero: {
    eyebrow: 'Managed Hosting Platform',
    title: 'Managed Hosting with 24/7 Technical Support',
    description:
      'Hosting for businesses that need real help with deployments, website issues, SSL setup, troubleshooting, and day-to-day technical problems.',
    supportLine:
      'Plus access to our Telegram community for free website templates and launch resources.',
    primaryCta: { label: 'Start Hosting', to: site.signUpUrl },
    secondaryCta: { label: 'Join the Community', to: site.telegramSupportUrl },
    image: '/images/hero-hosting-person-small.jpg',
  },
  whyChoose: [
    {
      title: 'Managed hosting',
      description:
        'Managed hosting for businesses that need technical help, not just server space.',
      icon: 'i-ph-rocket-launch',
    },
    {
      title: '24/7 technical support',
      description:
        'Get practical troubleshooting and managed assistance when deployments or production issues need attention.',
      icon: 'i-ph-headset',
    },
    {
      title: 'Deployment troubleshooting',
      description:
        'Receive help with deployment-related code issues, environment checks, and launch-day stability tasks.',
      icon: 'i-ph-arrows-left-right',
    },
    {
      title: 'Configuration support',
      description:
        'Get guidance for SSL, DNS, email, and minor technical fixes that affect uptime and reliability.',
      icon: 'i-ph-gear-six',
    },
  ],
  valueStack: [
    { label: 'Managed hosting', icon: 'i-ph-stack' },
    { label: '24/7 technical support', icon: 'i-ph-headset' },
    { label: 'Deployment troubleshooting', icon: 'i-ph-arrows-left-right' },
    { label: 'Website error support', icon: 'i-ph-bug-beetle' },
    { label: 'SSL, DNS, and email setup help', icon: 'i-ph-shield-check' },
    { label: 'Automatic backups', icon: 'i-ph-database' },
    { label: 'Access to Telegram community', icon: 'i-ph-telegram-logo' },
    { label: 'Free templates and launch resources', icon: 'i-ph-layout' },
  ],
  trustLogos: [
    { label: 'Spotify', src: '/logos/spotify.png' },
    { label: 'Slack', src: '/logos/slack.png' },
    { label: 'PayPal', src: '/logos/paypallogo.png' },
    { label: 'Logo Ipsum', src: '/logos/logoipsum-1.svg' },
    { label: 'Logo Ipsum', src: '/logos/logoipsum-2.svg' },
    { label: 'Logo Ipsum', src: '/logos/logoipsum-3.svg' },
  ],
  capabilities: [
    {
      title: 'Failed deployments',
      description: 'Help troubleshooting deployment-related code and environment issues.',
      icon: 'i-ph-warning-circle',
    },
    {
      title: 'Broken SSL setup',
      description: 'Assistance issuing, renewing, or restoring HTTPS and certificate setup.',
      icon: 'i-ph-shield-check',
    },
    {
      title: 'DNS misconfiguration',
      description: 'Practical fixes for DNS records, propagation, and domain routing errors.',
      icon: 'i-ph-globe-hemisphere-west',
    },
    {
      title: 'Email setup issues',
      description: 'Support for mailbox routing and core email configuration checks.',
      icon: 'i-ph-envelope-simple-open',
    },
    {
      title: 'Plugin or theme conflicts',
      description: 'Help isolating update-related conflicts affecting site stability.',
      icon: 'i-ph-puzzle-piece',
    },
    {
      title: 'Website errors after updates',
      description: 'Troubleshooting for runtime and configuration problems after changes.',
      icon: 'i-ph-lifebuoy',
    },
  ],
  reliability: {
    title: 'Hosting plus technical assistance.',
    description:
      'You get managed hosting, practical troubleshooting, and support paths that keep websites stable when technical issues appear.',
    image: '/illustrations/cloud-hosting.svg',
    highlights: [
      'Automatic backups with recovery help',
      'SSL, DNS, and email setup support',
      'Priority issue handling on higher plans',
      'Website stability and monitoring workflows',
    ],
  },
  community: {
    title: 'Join Our Telegram Community',
    description:
      'Get access to free website templates, launch resources, practical website tips, and helpful updates.',
    ctaLabel: 'Join the Community',
    ctaUrl: site.telegramSupportUrl,
    note:
      'Community access is an added benefit. Core technical support stays available through official support channels.',
    benefits: [
      'Free website templates',
      'Launch checklists and setup resources',
      'Practical hosting and deployment tips',
      'Helpful updates for ongoing maintenance',
    ],
  },
  faq: [
    {
      question: 'Can you help migrate my existing site?',
      answer:
        'Yes. We review the current site, plan the cutover window, and validate the transfer after it is complete.',
    },
    {
      question: 'Do plans include SSL and backups?',
      answer:
        'Yes. SSL and backups are included in the managed workflow.',
    },
    {
      question: 'How does billing and plan activation work?',
      answer:
        'After signup, your selected plan is prepared for activation. NGN checkout can complete in-flow, and if manual review is needed the team guides the next step.',
    },
  ],
  testimonials: [
    {
      quote:
        'Reliable infrastructure and security updates without the usual hosting hassle.',
      name: 'Priya Shah',
      role: 'Product Manager, Harbor & Co',
    },
    {
      quote: 'Simple pricing and easy scaling as our traffic grew over the last year.',
      name: 'Liam Walker',
      role: 'Owner, Walker Creative',
    },
    {
      quote: 'Setup was smooth, SSL was instant, and our team felt supported at every step.',
      name: 'Sophia Nguyen',
      role: 'Founder, Bloom Commerce',
    },
    {
      quote:
        'Continental Trust Hosting moved our sites in a day and cut load times in half.',
      name: 'Marvin Coleman',
      role: 'Founder, Brightline Studio',
    },
    {
      quote:
        'The control panel is clean, backups are automatic, and support is always responsive.',
      name: 'Ava Hernandez',
      role: 'CTO, MarketRise',
    },
    {
      quote: 'We get consistent uptime and real help when DNS or SSL needs attention.',
      name: 'Ethan Brooks',
      role: 'Operations Lead, Northwind',
    },
  ],
  resources: [
    {
      title: 'Move your website in a single migration window',
      category: 'Migration',
      date: 'March 20, 2025',
      readTime: '3 min read',
    },
    {
      title: 'Set up email and domain routing quickly',
      category: 'Setup',
      date: 'March 24, 2025',
      readTime: '5 min read',
    },
    {
      title: 'Keep billing simple with annual savings',
      category: 'Billing',
      date: 'March 28, 2025',
      readTime: '4 min read',
    },
    {
      title: 'Getting started with Continental Trust Hosting',
      category: 'Guide',
      date: 'March 2, 2025',
      readTime: '5 min read',
    },
    {
      title: 'Protect your site with SSL and daily backups',
      category: 'Security',
      date: 'March 10, 2025',
      readTime: '4 min read',
    },
    {
      title: 'Scale traffic with managed resources',
      category: 'Performance',
      date: 'March 16, 2025',
      readTime: '6 min read',
    },
  ],
}

export const pageCopy = {
  pricing: {
    title: 'Managed hosting plans with real technical support.',
    description:
      'Choose the plan that fits your workload and support needs. Every plan includes managed hosting plus practical troubleshooting and technical assistance.',
    currencyLabel: 'Currency',
    billingLabel: 'Billing cycle',
    monthlyLabel: 'Monthly',
    yearlyLabel: 'Annual',
    yearlyBadge: '2 months free with annual billing',
    introOfferLabel: 'Intro offer for first billing cycle',
    renewalNoticeLabel: 'Renews at standard rate after first term',
    notes: [
      'Managed hosting for businesses that need technical help, not just server space.',
      'Support includes deployment troubleshooting, configuration assistance, and minor stability fixes.',
      'Telegram community access includes free templates and launch resources.',
      'USD plans show renewal visibility before checkout.',
    ],
    plans: pricingPlans,
    faq: homeContent.faq,
  },
  simple: {
    about: {
      title: 'We are a trusted hosting partner for growing businesses.',
      description:
        'Managed hosting with practical support, secure billing, and clear operations.',
      sections: [
        {
          title: 'Who we are',
          body:
            'We prioritize clarity over complexity. That means structured onboarding, responsive support, and hosting operations that stay predictable.',
          bullets: [
            'Managed hosting built for production use',
            'Transparent plan and billing structure',
            'Support pathways for migration, billing, and runtime issues',
          ],
        },
        {
          title: 'Our promise',
          body:
            'Our infrastructure is monitored 24/7 to keep your sites online and performing at their best.',
        },
      ],
    },
    migrations: {
      title: 'Migration support',
      description:
        'Move an existing site with guided onboarding, timeline clarity, and a support path that helps reduce cutover risk.',
      sections: [
        {
          title: 'Typical migration flow',
          body:
            'We review the current environment, confirm access needs, plan the cutover window, and validate the site after transfer.',
          bullets: [
            'Discovery and environment review',
            'Access and DNS preparation',
            'Cutover window and post-move checks',
          ],
        },
        {
          title: 'Timing',
          body:
            'Most standard migrations complete within 24 to 72 hours depending on size and complexity.',
        },
      ],
    },
    security: {
      title: 'Security',
      description:
        'Security is part of the hosting workflow, with SSL, monitoring, and operational controls designed to reduce risk.',
      sections: [
        {
          title: 'Included protections',
          body:
            'Free SSL, DDoS protection, monitoring, and account-level controls are part of the managed setup.',
          bullets: ['SSL provisioning', 'Monitoring and alerting', 'Account access controls', 'DDoS protection'],
        },
        {
          title: 'Operational focus',
          body:
            'Security is paired with support so issues can be triaged, communicated, and resolved with context.',
        },
      ],
    },
    backups: {
      title: 'Backups',
      description:
        'Backups are automated so teams can recover from mistakes or incidents without building their own backup workflow.',
      sections: [
        {
          title: 'Backup policy',
          body:
            'Backups are performed automatically and retained based on the active hosting plan.',
          bullets: ['Automated backup cadence', 'Plan-based retention', 'Recovery support when needed'],
        },
        {
          title: 'Why it matters',
          body:
            'Daily backups reduce operational risk and make routine changes safer for growing teams.',
        },
      ],
    },
    support: {
      title: 'Support',
      description:
        'Managed hosting with 24/7 technical support for deployment issues, website stability concerns, and day-to-day operational troubleshooting.',
      sections: [
        {
          title: 'Choose the right support route',
          body:
            'Start with the request type so the team can triage faster and guide activation or issue resolution clearly.',
          bullets: [
            'Contact Sales for plan-fit and pre-purchase questions',
            'Ask Billing for invoice, renewal, and payment clarifications',
            'Get Technical Support for runtime, SSL, and platform issues',
            'Request Migration Help for transfer planning and cutover',
          ],
        },
        {
          title: 'What support helps with',
          body:
            'Support focuses on hosting-related technical issues, deployment troubleshooting, configuration assistance, and minor site fixes. Telegram is optional community chat, not the primary support workflow.',
          bullets: [
            'Failed deployments and launch-day troubleshooting',
            'Broken SSL, DNS misconfiguration, and email setup issues',
            'Plugin/theme conflicts and website errors after updates',
          ],
        },
      ],
    },
    status: {
      title: 'Service status',
      description:
        'Service availability is monitored continuously and incident notices are published through support channels.',
      sections: [
        {
          title: 'Current state',
          body: 'Core hosting services are currently monitored and operational.',
        },
        {
          title: 'Monitoring scope',
          body:
            'Infrastructure health, uptime signals, and billing-critical workflows are tracked.',
          bullets: ['Issue detected and triaged by severity', 'Impact updates shared through support channels', 'Resolution update and follow-up checks communicated'],
        },
        {
          title: 'Incident log',
          body: 'No public incident feed is currently connected to this page.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      description:
        'Reach the right team quickly for sales, billing, technical support, migration help, or general inquiries.',
      sections: [
        {
          title: 'Business contact routes',
          body:
            'Use your request category so support can route and respond with the right next steps.',
          bullets: [
            'Contact Sales: pre-purchase guidance and plan selection',
            'Ask Billing: invoices, renewals, and payment questions',
            'Get Technical Support: hosting runtime and account issues',
            'Request Migration Help: move planning and onboarding',
            'General inquiries: info@continentaltrustonline.online',
          ],
        },
        {
          title: 'Primary channels',
          body:
            'Use the secure account flow and official support guidance for activation and billing. Telegram can be used for optional chat follow-up, but it is not required for payment or verification.',
        },
      ],
    },
    refunds: {
      title: 'Refund policy',
      description:
        'Refund eligibility depends on service term, payment timing, and account standing.',
      sections: [
        {
          title: 'How refunds are reviewed',
          body:
            'We review the service term, payment status, and the reason for the request before confirming eligibility.',
        },
        {
          title: 'What to include',
          body:
            'When contacting support, include the account email, service name, and the billing reference so the request can be handled faster.',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'This page explains how account and billing information is handled across the hosting workflow.',
      sections: [
        {
          title: 'What we collect',
          body:
            'We collect the details needed to provision hosting, manage billing, and support the account.',
          bullets: ['Account identifiers', 'Billing details', 'Support request context'],
        },
        {
          title: 'How it is used',
          body:
            'Information is used to deliver hosting services, verify access, process payments, and handle support requests.',
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'These terms govern account use, billing expectations, and acceptable use of the hosting platform.',
      sections: [
        {
          title: 'Account use',
          body:
            'Accounts should be used for legitimate hosting activity and maintained with accurate details.',
        },
        {
          title: 'Billing and service',
          body:
            'Plan billing, renewals, and service changes are managed through the account workflow and support channels.',
        },
      ],
    },
  },
}
