// Builds /llms.txt (an index) and /llms-full.txt (the full text) following
// https://llmstxt.org, from the same content collections that render the site.
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { faqs } from '../data/faqs';
import { process } from '../data/process';
import { crossIndustry } from '../data/use-cases';

const abs = (path: string) => new URL(path, site.url).href;

async function load() {
  const services = (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);
  const industries = (await getCollection('industries')).sort((a, b) => a.data.order - b.data.order);
  return { services, industries };
}

const contactBlock = [
  `- Email: ${site.email}`,
  `- Phone: ${site.phoneDisplay}`,
  `- Address: ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`,
  `- Contact form: ${abs('/contact/')}`,
].join('\n');

export async function llmsIndex() {
  const { services, industries } = await load();
  return `# ${site.name}

> ${site.description}

Engagements run in four stages: ${process.map((p) => p.title.toLowerCase()).join(', ')}.

## Services

${services.map((s) => `- [${s.data.title}](${abs(`/services/${s.id}/`)}): ${s.data.summary}`).join('\n')}

## Industries

${industries.map((i) => `- [AI for ${i.data.title.toLowerCase()}](${abs(`/industries/${i.id}/`)}): ${i.data.summary}`).join('\n')}
- [Cross-industry use cases](${abs('/industries/#cross-industry')}): ${crossIndustry.map((u) => u.title).join(', ')}.

## Company

- [About](${abs('/about/')}): Who we are and how we work.
- [Process](${abs('/process/')}): How an engagement runs, stage by stage.
- [Contact](${abs('/contact/')}): Book an assessment call.

## Contact

${contactBlock}

## Optional

- [Full text of this site](${abs('/llms-full.txt')}): Every page's content in one Markdown file.
`;
}

export async function llmsFull() {
  const { services, industries } = await load();
  const qa = (list: { q: string; a: string }[]) => list.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n');

  const parts = [
    `# ${site.name}\n\n> ${site.description}\n\nWebsite: ${abs('/')}\n\n## Contact\n\n${contactBlock}`,
    `## Frequently asked questions\n\n${qa(faqs)}`,
    `## Process\n\nSource: ${abs('/process/')}\n\n${process
      .map((p, i) => `### ${i + 1}. ${p.title}\n\n${p.summary} ${p.detail}`)
      .join('\n\n')}`,
    ...services.map(
      (s) => `## Service: ${s.data.title}

Source: ${abs(`/services/${s.id}/`)}

${s.body?.replace(/^## /gm, '### ').trim()}

### What you get

${s.data.deliverables.map((d) => `- ${d}`).join('\n')}

### Typical projects

${s.data.useCases.map((u) => `- ${u}`).join('\n')}${s.data.faqs.length ? `\n\n${qa(s.data.faqs).replace(/^### /gm, '#### ')}` : ''}`,
    ),
    ...industries.map(
      (i) => `## Industry: AI for ${i.data.title.toLowerCase()}

Source: ${abs(`/industries/${i.id}/`)}

${i.body?.trim()}

### Use cases

${i.data.useCases.map((u) => `- ${u.title}: ${u.text}`).join('\n')}${i.data.faqs.length ? `\n\n${qa(i.data.faqs)}` : ''}`,
    ),
    `## Cross-industry use cases\n\n${crossIndustry.map((u) => `- ${u.title}: ${u.text}`).join('\n')}`,
  ];

  return parts.join('\n\n---\n\n') + '\n';
}
