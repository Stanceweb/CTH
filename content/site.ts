export const site = {
  name: 'Continental Trust Hosting',
  shortName: 'Continental Trust Hosting',
  tagline: 'Managed hosting with practical support, secure billing, and fast onboarding.',
  signInUrl: 'https://app.continentaltrustonline.online/',
  signUpUrl: 'https://app.continentaltrustonline.online/',
  comparePlansUrl: '/pricing',
  telegramSupportUrl: 'https://t.me/continentaltrust',
}

export const mainNavLinks = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'Migrations', to: '/migrations' },
  { label: 'Security', to: '/security' },
  { label: 'Backups', to: '/backups' },
  { label: 'Support', to: '/support' },
  { label: 'About', to: '/about' },
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
      support: 'Standard support',
      bestFor: 'New and small business sites',
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
      support: 'Priority support queue',
      bestFor: 'Growing businesses and teams',
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
      support: 'Priority handling',
      bestFor: 'High-growth and multi-site operations',
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
    eyebrow: 'WEB HOSTING PLATFORM',
    title: 'Launch fast, secure hosting with a control panel built for growth.',
    description:
      'Managed hosting with SSL, backups, monitoring, and practical support for growing teams.',
    primaryCta: { label: 'Create your account', to: site.signUpUrl },
    secondaryCta: { label: 'See plans', to: site.comparePlansUrl },
    image: '/images/hero-hosting-person-small.jpg',
  },
  whyChoose: [
    {
      title: 'Managed Hosting.',
      description:
        'Launch fast with optimized stacks, automated updates, and performance tuning built in.',
      icon: 'i-ph-rocket-launch',
    },
    {
      title: 'Secure Infrastructure.',
      description:
        'Free SSL, DDoS protection, and daily backups keep your data protected.',
      icon: 'i-ph-shield-check',
    },
    {
      title: 'Expert Support.',
      description:
        'Get hands-on help with migrations, setup, and ongoing platform guidance.',
      icon: 'i-ph-chat-centered-text',
    },
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
      title: 'Security Hardening',
      description: 'Threat detection & response',
      icon: 'i-ph-shield-warning',
    },
    {
      title: 'Performance Layer',
      description: 'Caching, tuning, and resource scaling',
      icon: 'i-ph-lightning',
    },
    {
      title: 'Migration Tools',
      description: 'Guided onboarding and domain cutover',
      icon: 'i-ph-arrows-left-right',
    },
    {
      title: 'Billing Automation',
      description: 'Billing & compliance',
      icon: 'i-ph-credit-card',
    },
    {
      title: 'Support Workflows',
      description: 'Ticketing, escalation, and response SLAs',
      icon: 'i-ph-headset',
    },
    {
      title: 'SLA Monitoring',
      description: 'Uptime alerts and status transparency',
      icon: 'i-ph-signal',
    },
  ],
  reliability: {
    title: 'Reliability you can trust.',
    description:
      '99.9% uptime focus, redundant infrastructure, and proactive monitoring keep your sites running.',
    image: '/illustrations/cloud-hosting.svg',
    highlights: [
      'Free SSL and automated backups',
      'Customizable hosting plans',
      'One-click app deployments',
      'Real-time usage monitoring',
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
      question: 'How does billing and verification work?',
      answer:
        'Billing is handled through the account flow and official support channels, with payment instructions shown during checkout.',
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
    title: 'Pricing designed for confident decisions.',
    description:
      'Cards for quick plan choice, comparison table for deeper evaluation, and renewal visibility where applicable.',
    currencyLabel: 'Currency',
    billingLabel: 'Billing cycle',
    monthlyLabel: 'Monthly',
    yearlyLabel: 'Annual',
    yearlyBadge: '2 months free with annual billing',
    introOfferLabel: 'Intro offer for first billing cycle',
    renewalNoticeLabel: 'Renews at standard rate after first term',
    notes: [
      'NGN and USD billing are both available.',
      'Annual billing includes 2 months free compared with monthly pricing.',
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
        'Support is organized around operational severity, with routes for billing, migration, uptime, and account issues.',
      sections: [
        {
          title: 'How support works',
          body:
            'Use the support channel for issue reporting, then triage happens by severity and service impact.',
          bullets: ['Migration help', 'Billing and verification', 'Uptime and reliability', 'Runtime issues'],
        },
        {
          title: 'Contact routes',
          body:
            'The site routes visitors to the account portal and Telegram support for direct help.',
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
        'Reach the team through the account portal or support channels when you need help with setup, billing, or migration.',
      sections: [
        {
          title: 'Direct channels',
          body:
            'Use the account portal for sign-in and the support channel for operational requests.',
          bullets: [
            'Account portal for sign in and billing management',
            'Telegram support for direct assistance',
            'Support requests for migration and uptime issues',
          ],
        },
        {
          title: 'Billing reminder',
          body:
            'Payments are handled through the official Telegram bot and should never be sent to personal accounts.',
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
