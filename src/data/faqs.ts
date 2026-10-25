export type Faq = { q: string; a: string };

// General questions, shown on the home page and marked up as FAQPage.
// Answers lead with the direct answer so search and answer engines can quote them.
export const faqs: Faq[] = [
  {
    q: 'What does AI Lab Consulting do?',
    a: 'We advise banks, credit unions, insurers and fintechs on governing AI agents. Most engagements start with an assessment of the agents a firm already runs. After that we design approval and audit systems, set up controls for AI-assisted software development, build knowledge graphs for agents to draw on, and run multi-model reviews of documents and code.',
  },
  {
    q: 'What is an agentic AI governance assessment?',
    a: 'It is a fixed-scope review of the AI agents in part or all of an organization. For each agent we record what it can access and who approves its consequential actions, then test whether its past decisions can be reconstructed. Gaps are mapped to SR 11-7, SOX, DORA and the EU AI Act and ranked in a remediation roadmap.',
  },
  {
    q: 'How do you stop an AI agent from taking actions nobody approved?',
    a: 'The agent has to obtain a signed approval from a named person before any consequential action. Each approval covers one tool call with specific parameters and expires after a few minutes. The system that carries out the action checks the approval first; if the parameters differ, or the approval has expired or been revoked, the action is refused.',
  },
  {
    q: 'What makes human-in-the-loop approval hold up in an audit?',
    a: "Evidence that exists outside the agent. A button click logged in the agent's own database proves very little. A signed record that names the approver, the action and its parameters, written when the decision was made and linked to any later revocation, is something an auditor can check independently.",
  },
  {
    q: 'Why review AI output with models from more than one vendor?',
    a: "Models from the same vendor tend to share blind spots, and a model asked to review another model's output is inclined to agree with it. In a cross-vendor review no model rules on findings raised by its own vendor's models, and a blocking finding needs support from at least two vendors.",
  },
  {
    q: 'Do you provide legal or compliance sign-off?',
    a: 'No. We map technical controls and evidence to regulatory frameworks and help implement them. Interpreting the law and attesting to compliance remain with your compliance team, counsel and auditors; our work gives them material to review.',
  },
  {
    q: 'How do engagements usually run?',
    a: 'Most begin with the fixed-scope assessment. Follow-on work is staged as a proof of concept, a build and a roll-out, with a decision about whether to continue after each stage. How long each stage takes depends on the scope agreed at the start. Adversarial review and fractional leadership can also run as retainers.',
  },
  {
    q: 'Where is AI Lab Consulting located?',
    a: 'In Laguna Beach, California. We work with client teams remotely.',
  },
];
