export const PLAN_DATA = [
  {
    key: "starter",
    name: "Starter",
    recommended: false,
    slugs: { monthly: "starter_monthly", yearly: "starter_yearly" },
    prices: {
      USD: { monthly: 3.99, yearly: 39.9, renewMonthly: 6.99, renewYearly: 69.9 },
      NGN: { monthly: 3900, yearly: 39000 },
    },
    features: {
      websites: "Up to 3 websites",
      storage: "Managed storage allocation",
      bandwidth: "Managed traffic allocation",
      ssl: "Free SSL",
      backups: "Automatic backups",
      support: "Standard support",
      bestFor: "New and small business sites",
    },
  },
  {
    key: "business",
    name: "Business",
    recommended: true,
    slugs: { monthly: "business_monthly", yearly: "business_yearly" },
    prices: {
      USD: { monthly: 9.99, yearly: 99.9, renewMonthly: 19.99, renewYearly: 199.9 },
      NGN: { monthly: 9900, yearly: 99000 },
    },
    features: {
      websites: "Up to 10 websites",
      storage: "Expanded managed storage",
      bandwidth: "Higher managed traffic allocation",
      ssl: "Free SSL",
      backups: "Automatic backups",
      support: "Priority support queue",
      bestFor: "Growing businesses and teams",
    },
  },
  {
    key: "pro",
    name: "Pro",
    recommended: false,
    slugs: { monthly: "pro_monthly", yearly: "pro_yearly" },
    prices: {
      USD: { monthly: 24.99, yearly: 249.9, renewMonthly: 49.99, renewYearly: 499.9 },
      NGN: { monthly: 24900, yearly: 249000 },
    },
    features: {
      websites: "Unlimited websites",
      storage: "Highest managed storage tier",
      bandwidth: "Highest managed traffic allocation",
      ssl: "Free SSL",
      backups: "Automatic backups",
      support: "Priority handling",
      bestFor: "High-growth and multi-site operations",
    },
  },
];
