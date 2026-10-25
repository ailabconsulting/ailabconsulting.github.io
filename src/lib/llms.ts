// Builds /llms.txt (an index) and /llms-full.txt (the full text) following
// https://llmstxt.org, from the same data that renders the site.
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { faqs } from '../data/faqs';
import { process } from '../data/process';

const abs = (path: string) => new URL(path, site.url).href;

const services = async () =>
  (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);

const contactBlock = [
  `- Email: ${site.email}`,
  `- Phone: ${site.phoneDisplay}`,
  `- Location: ${site.address.locality}, ${site.address.region}`,
  `- Book a call: ${abs('/contact/')}`,
].join('\n');

const howWeWork = process.map((p, i) => `${i + 1}. ${p.title}: ${p.text}`).join('\n');

export async function llmsIndex() {
  const list = await services();
  return `# ${site.name}

> ${site.description}

## Services

${list.map((s) => `- [${s.data.title}](${abs(`/services/${s.id}/`)}): ${s.data.summary}`).join('\n')}

## How we work

${howWeWork}

## Contact

${contactBlock}

## Optional

- [About](${abs('/about/')})
- [Full text of this site](${abs('/llms-full.txt')})
`;
}

export async function llmsFull() {
  const list = await services();
  const qa = (items: { q: string; a: string }[]) => items.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n');

  const parts = [
    `# ${site.name}\n\n> ${site.description}\n\nWebsite: ${abs('/')}\n\n## Contact\n\n${contactBlock}`,
    `## How we work\n\n${howWeWork}`,
    ...list.map(
      (s) => `## ${s.data.title}

Source: ${abs(`/services/${s.id}/`)}

${s.body?.trim()}

What you get:

${s.data.deliverables.map((d) => `- ${d}`).join('\n')}${s.data.faqs.length ? `\n\n${qa(s.data.faqs)}` : ''}`,
    ),
    `## Questions\n\n${qa(faqs)}`,
  ];

  return parts.join('\n\n---\n\n') + '\n';
}
