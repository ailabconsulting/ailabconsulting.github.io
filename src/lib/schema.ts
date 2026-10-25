// schema.org JSON-LD for the site: Organization → WebSite → WebPage, plus one
// Service node per service. Search engines and answer engines read this.
import { site } from '../data/site';
import { services } from '../data/services';

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;
type Node = Record<string, unknown>;

const abs = (path: string) => new URL(path, site.url).href;

function organization(): Node {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: site.name,
    url: abs('/'),
    description: site.description,
    logo: { '@type': 'ImageObject', url: abs('/logo.png'), width: 512, height: 512 },
    image: abs('/og.png'),
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    knowsAbout: site.topics,
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function graph(opts: { path: string; title: string; description: string; withServices?: boolean }) {
  const url = abs(opts.path);
  const nodes: Node[] = [
    organization(),
    { '@type': 'WebSite', '@id': WEBSITE_ID, url: abs('/'), name: site.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-US' },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: opts.title,
      description: opts.description,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
  ];
  if (opts.withServices) {
    for (const s of services) {
      nodes.push({
        '@type': 'Service',
        '@id': abs(`/#${s.id}`),
        name: s.name,
        description: s.text,
        provider: { '@id': ORG_ID },
        areaServed: 'Financial services',
      });
    }
  }
  return { '@context': 'https://schema.org', '@graph': nodes };
}
