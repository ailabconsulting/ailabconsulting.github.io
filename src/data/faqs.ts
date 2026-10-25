export type Faq = { q: string; a: string };

// Home page questions, marked up as FAQPage. Keep answers short and direct.
export const faqs: Faq[] = [
  {
    q: 'What does AI Lab Consulting do?',
    a: 'We help banks, credit unions, insurers and fintechs put AI agents into production with the approvals and records that examiners and auditors expect.',
  },
  {
    q: 'What is an AI governance assessment?',
    a: 'A fixed-scope review of the AI agents you run: what each one can do and who approves its actions. You get the gaps, mapped to SR 11-7, SOX, DORA and the EU AI Act, and a ranked plan to close them.',
  },
  {
    q: 'How do you stop an AI agent from taking actions nobody approved?',
    a: 'Consequential actions need a signed approval from a named person, tied to the exact parameters. The system that runs the action checks the approval first and refuses anything that does not match.',
  },
  {
    q: 'Do you provide legal or compliance sign-off?',
    a: 'No. We design and build the controls and the evidence. Your compliance team, counsel and auditors make the legal calls.',
  },
  {
    q: 'Do you work outside financial services?',
    a: 'Yes. We also build machine learning and computer vision systems, including for manufacturing and retail.',
  },
  {
    q: 'Where are you based?',
    a: 'Laguna Beach, California. We work with clients remotely.',
  },
];
