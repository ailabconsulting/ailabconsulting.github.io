// Company facts used across pages, structured data and llms.txt.
// Keep this the single source of truth for contact details.
export const site = {
  name: 'AI Lab Consulting',
  url: 'https://ailabconsulting.com',
  tagline: 'AI agents that hold up in an audit.',
  description:
    'AI Lab Consulting helps banks, credit unions, insurers and fintechs put AI agents into production with the approvals and records that examiners and auditors expect. Based in Laguna Beach, California.',
  // Home page meta description (≤160 characters).
  metaDescription:
    'We help banks, credit unions, insurers and fintechs put AI agents into production with the approvals and audit trail examiners expect.',
  email: 'contact@ailabconsulting.com',
  phone: '+1-650-429-8850',
  phoneDisplay: '(650) 429-8850',
  address: {
    street: '1968 S. Coast Hwy #119',
    locality: 'Laguna Beach',
    region: 'CA',
    postalCode: '92651',
    country: 'US',
  },
  topics: [
    'AI governance',
    'Agentic AI',
    'Agent authorization',
    'Human-in-the-loop authorization',
    'Decision lineage',
    'Model risk management',
    'SR 11-7',
    'SOX',
    'DORA',
    'EU AI Act',
    'AI-assisted software development',
  ],
  // Getform endpoint and invisible reCAPTCHA v2 key carried over from the previous site.
  formEndpoint: 'https://getform.io/f/f31fe965-e20a-4528-bc75-9ecceccf8853',
  recaptchaSiteKey: '6LcoD-8aAAAAAHGMvGRhL-pi9DP-iW9IymR6N-qE',
  // GA4 measurement ID (G-XXXXXXXXXX). Empty disables analytics.
  // The old Universal Analytics property (UA-197538615-1) stopped collecting data in 2023.
  ga4Id: '',
  // Public profiles (LinkedIn, GitHub, Crunchbase…) — used for schema.org sameAs.
  sameAs: [] as string[],
};

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/#how', label: 'How we work' },
  { href: '/about/', label: 'About' },
];
