// Builds /llms.txt and /llms-full.txt (https://llmstxt.org) from the same data
// as the page. The site is one page, so both files carry its full content.
import { site } from '../data/site';
import { services } from '../data/services';

const abs = (path: string) => new URL(path, site.url).href;

export function llmsIndex() {
  return `# ${site.name}

> ${site.description}

## Services

${services.map((s) => `- [${s.name}](${abs(`/#${s.id}`)}): ${s.text}`).join('\n')}

## How engagements work

Engagements start with a fixed-scope assessment of your agents and controls. If you continue, we build the controls with your team on one workflow first, then extend them and hand over the documentation and evidence. You can stop after any step.

## About

A small senior team with backgrounds in enterprise architecture and compliance at regulated financial firms, based in ${site.address.locality}, California. We design and build controls; legal interpretation and attestation stay with the client's compliance team and auditors.

## Contact

- Email: ${site.email}
- Phone: ${site.phoneDisplay}
- Web: ${abs('/#contact')}
`;
}
