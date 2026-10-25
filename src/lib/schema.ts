// schema.org JSON-LD builders. Every page emits one @graph that links
// Organization → WebSite → WebPage (→ BreadcrumbList, Service, FAQ) by @id,
// which is what search engines and answer engines use to understand who we are.
import { site } from '../data/site';
import type { Faq } from '../data/faqs';

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

export type Crumb = { name: string; href: string };
export type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
type Node = Record<string, unknown>;

const abs = (path: string) => new URL(path, site.url).href;

export function organization(): Node {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: site.name,
    url: abs('/'),
    description: site.description,
    slogan: site.tagline,
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
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      telephone: site.phone,
      availableLanguage: 'English',
    },
    knowsAbout: site.topics,
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function website(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: abs('/'),
    name: site.name,
    description: site.description,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

export function webPage(opts: {
  path: string;
  title: string;
  description: string;
  type?: PageType;
  crumbs?: Crumb[];
  faqs?: Faq[];
}): Node[] {
  const url = abs(opts.path);
  const types: string[] = [opts.type ?? 'WebPage'];
  if (opts.faqs?.length) types.push('FAQPage');

  const page: Node = {
    '@type': types.length === 1 ? types[0] : types,
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
  const nodes: Node[] = [page];

  if (opts.faqs?.length) {
    page.mainEntity = opts.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    }));
  }

  if (opts.crumbs?.length) {
    page.breadcrumb = { '@id': `${url}#breadcrumb` };
    const trail = [{ name: 'Home', href: '/' }, ...opts.crumbs];
    nodes.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: trail.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: abs(c.href),
      })),
    });
  }

  return nodes;
}

export function service(opts: { path: string; name: string; description: string; audience?: string }): Node {
  const url = abs(opts.path);
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url,
    provider: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    ...(opts.audience ? { audience: { '@type': 'BusinessAudience', name: opts.audience } } : {}),
  };
}
