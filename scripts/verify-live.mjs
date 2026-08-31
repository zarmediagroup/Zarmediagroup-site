/**
 * Live smoke check — fetches the deployed site the way a non-JS crawler does
 * (GPTBot, ClaudeBot, PerplexityBot) and fails if real content is not served.
 *
 * Usage:  node scripts/verify-live.mjs [base-url]
 *         npm run verify:live
 */
const BASE = (process.argv[2] || process.env.LIVE_BASE_URL || 'https://zarmediagroup.com').replace(/\/$/, '')

const UA = 'Mozilla/5.0 (compatible; ZMG-SEO-Check/1.0; +https://zarmediagroup.com)'

const CHECKS = [
  {
    path: '/',
    tests: {
      'has <h1> content': (html) => /<h1[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(html),
      'has ≥2 JSON-LD blocks': (html) => (html.match(/application\/ld\+json/gi) || []).length >= 2,
      'body is not an empty SPA shell': (html) => !/<div id="app"><\/div>/.test(html),
    },
  },
  {
    path: '/resources/best-client-portal-small-accounting-firms',
    tests: {
      'has article title': (html) => /<title>Best Client Portals/i.test(html),
      'has <h1> content': (html) => /<h1[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(html),
      'has BlogPosting schema': (html) => /"@type":\s*"BlogPosting"/.test(html),
      'has FAQPage schema': (html) => /"@type":\s*"FAQPage"/.test(html),
    },
  },
  {
    path: '/services/client-portal',
    tests: {
      'has <h1> content': (html) => /<h1[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(html),
      'body is not an empty SPA shell': (html) => !/<div id="app"><\/div>/.test(html),
    },
  },
  {
    path: '/pricing',
    tests: {
      'serves the Pricing page, not the SPA fallback': (html) => /<title>Pricing:/i.test(html),
      'has <h1> content': (html) => /<h1[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(html),
      'shows R2,999 pricing': (html) => /R2,999/.test(html),
      'has Offer schema': (html) => /"@type":\s*"Offer"/.test(html),
      'has FAQPage schema': (html) => /"@type":\s*"FAQPage"/.test(html),
    },
  },
  {
    path: '/cape-town',
    tests: {
      'serves the Cape Town page, not the SPA fallback': (html) => /<title>Client Portals for Cape Town/i.test(html),
      'has <h1> content': (html) => /<h1[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(html),
      'mentions Cape Town': (html) => /Cape Town/.test(html),
      'has LocalBusiness/ProfessionalService schema': (html) => /"@type":\s*"ProfessionalService"/.test(html),
      'has FAQPage schema': (html) => /"@type":\s*"FAQPage"/.test(html),
    },
  },
  {
    path: '/resources/sars-2026-draft-tax-bills-mtd-deadlines-accountants',
    tests: {
      'is not a 404 (newest article live)': (html) => !/Page not found/i.test(html),
      'has <h1> content': (html) => /<h1[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(html),
    },
  },
  {
    path: '/llms.txt',
    tests: {
      'serves the real llms.txt, not the HTML shell': (text) => text.trimStart().startsWith('# Zar Media Group'),
    },
  },
]

let failed = 0

for (const { path, tests } of CHECKS) {
  const url = `${BASE}${path}`
  let body
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA } })
    if (!res.ok) {
      console.error(`FAIL ${path}: HTTP ${res.status}`)
      failed++
      continue
    }
    body = await res.text()
  } catch (err) {
    console.error(`FAIL ${path}: ${err.message}`)
    failed++
    continue
  }

  for (const [name, test] of Object.entries(tests)) {
    if (test(body)) {
      console.log(`  ok  ${path} — ${name}`)
    } else {
      console.error(`FAIL ${path} — ${name}`)
      failed++
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} live check(s) failed — crawlers are NOT seeing real content on ${BASE}.`)
  process.exit(1)
}
console.log(`\nAll live checks passed on ${BASE} — crawlers receive fully rendered HTML.`)
