import type { APIRoute } from 'astro';

// Search engines and AI answer engines are explicitly welcome: being quoted
// by ChatGPT, Claude, Perplexity and Google AI Overviews is the point of AEO.
const aiAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Meta-ExternalAgent',
  'Amazonbot',
  'DuckAssistBot',
  'MistralAI-User',
];

export const GET: APIRoute = ({ site }) => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# AI search and answer engines',
    ...aiAgents.map((a) => `User-agent: ${a}`),
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', site)}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
