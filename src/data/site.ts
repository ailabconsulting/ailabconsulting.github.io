// Company facts used by the page, structured data and llms.txt.
// Keep this the single source of truth for contact details.
export const site = {
  name: 'AI Lab Consulting',
  url: 'https://ailabconsulting.com',
  description:
    'AI Lab Consulting helps banks, credit unions, insurers and fintechs put AI agents into production with the approvals and records that examiners and auditors expect.',
  // Meta description (≤160 characters).
  metaDescription:
    'AI governance consulting for banks, insurers and fintechs: agent assessments, approval and audit controls, and compliant AI-assisted engineering.',
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
    'AI agents',
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
  ga4Id: '',
  // Public profiles (LinkedIn, GitHub…) for schema.org sameAs.
  sameAs: [] as string[],
};
