<template>
  <div class="pricing-page">
    <!-- ══ HERO ══ -->
    <section
      class="relative flex items-center bg-navy-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
      aria-label="Pricing for accounting firm websites and client portals"
    >
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.035]" style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);"></div>
        <div class="hero-glow w-[40rem] h-[26rem] -top-40 left-1/2 -translate-x-1/2"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'Home', path: '/' }, { label: 'Pricing', path: '/pricing' }]" />

        <span class="section-label reveal-up">Transparent pricing · Rand-billed · No lock-in surprises</span>
        <h1 class="font-serif text-display-lg text-white mt-6 mb-8 max-w-4xl reveal-up" style="transition-delay: 100ms;">
          Client portal &amp; website pricing for <span class="text-gradient">accounting firms</span>
        </h1>
        <p class="font-sans text-white/65 text-lg max-w-3xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Managed plans start at <strong class="text-white/90">R2,999/month</strong> (Essentials),
          <strong class="text-white/90">R5,999/month</strong> for Professional with client portal integration and CRM sync,
          and from <strong class="text-white/90">R9,999/month</strong> for Enterprise with a custom portal build.
          Every plan includes hosting, maintenance, monthly updates, and compliance monitoring — billed in rand, so
          exchange-rate swings never touch your fee.
        </p>
        <div class="gold-divider mt-10 reveal-up" style="transition-delay: 300ms;"></div>
        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 350ms;">
          <RouterLink to="/contact" class="btn-primary">Get a fixed quote — free audit</RouterLink>
          <RouterLink to="/lp/client-portal-demo" class="btn-ghost">Book a portal demo</RouterLink>
        </div>
      </div>
    </section>

    <!-- ══ PLANS ══ -->
    <section class="section-padding bg-cream" aria-labelledby="plans-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="plans-heading" class="font-serif text-display-md text-navy-900 mb-4">
          Three plans, one managed programme
        </h2>
        <p class="font-sans text-charcoal-600 text-lg max-w-3xl leading-relaxed mb-14">
          Each plan is a monthly subscription covering design, hosting, updates, and compliance — no
          R40,000 upfront build that starts decaying the day it launches. Custom portal builds are
          scoped during the free audit, so you get a <strong>fixed number before you commit</strong>,
          not a surprise during development.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article
            v-for="(tier, i) in tiers"
            :key="tier.name"
            class="reveal-up bg-white rounded-2xl border p-8 lg:p-10 transition-all duration-300 flex flex-col"
            :class="tier.featured ? 'border-gold-500/60 shadow-soft-lg relative' : 'border-navy-900/8 hover:border-gold-500/40 hover:shadow-soft-lg'"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <span
              v-if="tier.featured"
              class="absolute -top-3 left-8 inline-block bg-navy-900 text-gold-500 font-sans text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
            >Most popular</span>
            <h3 class="font-serif text-2xl text-navy-900 mb-2">{{ tier.name }}</h3>
            <p class="font-sans text-navy-900 mb-1">
              <span class="text-3xl font-semibold">{{ tier.price }}</span>
              <span class="text-charcoal-500 text-sm">{{ tier.per }}</span>
            </p>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed mb-6">{{ tier.description }}</p>
            <ul class="space-y-3 mb-8 flex-1">
              <li v-for="feature in tier.features" :key="feature" class="flex items-start gap-3 font-sans text-charcoal-600 text-sm leading-relaxed">
                <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <RouterLink :to="tier.ctaLink" class="btn-text text-xs">
              {{ tier.ctaLabel }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ SAAS COMPARISON ══ -->
    <section class="section-padding bg-white border-t border-navy-900/8" aria-labelledby="comparison-heading">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 reveal-up">
          <span class="section-label">Cost comparison</span>
          <h2 id="comparison-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            Integrated portal vs. another SaaS subscription
          </h2>
          <div class="gold-divider-center"></div>
        </div>
        <p class="font-sans text-charcoal-600 text-base leading-relaxed mb-10 reveal-up">
          Off-the-shelf portal software typically costs <strong>R400–R1,200 per user per month</strong> for
          South African practices once converted from USD pricing — R1,200–R3,600/month for a 3-person firm,
          before you have spent a cent on your website. A portal integrated into your own site consolidates
          both into one rand-billed programme.
        </p>

        <div class="reveal-up overflow-x-auto">
          <table class="w-full border-collapse bg-cream rounded-2xl overflow-hidden text-left">
            <caption class="sr-only">Cost and feature comparison between off-the-shelf SaaS portals and a Zar Media Group integrated portal</caption>
            <thead>
              <tr class="bg-navy-900">
                <th scope="col" class="font-sans text-white/90 text-sm font-semibold px-6 py-4"></th>
                <th scope="col" class="font-sans text-white/90 text-sm font-semibold px-6 py-4">Off-the-shelf SaaS portal</th>
                <th scope="col" class="font-sans text-gold-500 text-sm font-semibold px-6 py-4">Integrated portal (ZMG)</th>
              </tr>
            </thead>
            <tbody class="font-sans text-sm text-charcoal-600">
              <tr class="border-b border-navy-900/8">
                <th scope="row" class="px-6 py-4 font-semibold text-navy-900">Typical cost (3-person firm)</th>
                <td class="px-6 py-4">R1,200–R3,600/month, per-user, USD-linked</td>
                <td class="px-6 py-4">Included in Professional at R5,999/month with your firm website</td>
              </tr>
              <tr class="border-b border-navy-900/8">
                <th scope="row" class="px-6 py-4 font-semibold text-navy-900">Client login</th>
                <td class="px-6 py-4">Generic SaaS URL clients don't recognise</td>
                <td class="px-6 py-4">Your own domain, your brand</td>
              </tr>
              <tr class="border-b border-navy-900/8">
                <th scope="row" class="px-6 py-4 font-semibold text-navy-900">Firm website</th>
                <td class="px-6 py-4">Separate cost, separate vendor</td>
                <td class="px-6 py-4">Managed in the same programme</td>
              </tr>
              <tr class="border-b border-navy-900/8">
                <th scope="row" class="px-6 py-4 font-semibold text-navy-900">Workflow &amp; labels</th>
                <td class="px-6 py-4">Foreign template with Rand bolted on</td>
                <td class="px-6 py-4">Configured for SA practice work: PAYE, VAT, EMP501, AFS</td>
              </tr>
              <tr>
                <th scope="row" class="px-6 py-4 font-semibold text-navy-900">Ownership</th>
                <td class="px-6 py-4">Subscription forever, no asset</td>
                <td class="px-6 py-4">Custom builds amortised over 2 years typically cost 40–60% less — and you own the asset</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ══ FAQ ══ -->
    <section class="section-padding bg-cream border-t border-navy-900/8" aria-labelledby="pricing-faq-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 lg:mb-16 reveal-up">
          <span class="section-label">Pricing FAQ</span>
          <h2 id="pricing-faq-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            What firms ask before committing
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-navy-900/10 bg-white overflow-hidden rounded-xl"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <dt>
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 min-h-[3.25rem] py-5 px-6 text-left font-sans font-semibold text-navy-900 text-base hover:text-charcoal-500 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`pricing-faq-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span class="pr-2">{{ faq.question }}</span>
                <svg
                  class="w-5 h-5 flex-shrink-0 text-navy-400 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === i }"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </dt>
            <Transition name="accordion">
              <dd v-if="openFaq === i" :id="`pricing-faq-${i}`" class="px-6 pb-6 pt-0 font-sans text-charcoal-600 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>

        <div class="mt-12 text-center reveal-up">
          <RouterLink to="/contact" class="btn-primary">Book the free audit</RouterLink>
        </div>
      </div>
    </section>

    <SeoRelatedGuides :slugs="relatedGuides" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS, BASE_URL } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'

const seo = getPageSeo('pricing')
const relatedGuides = seo.relatedGuides

const { initReveal } = useScrollReveal()
const openFaq = ref(null)
onMounted(() => setTimeout(initReveal, 50))

const tiers = [
  {
    name: 'Essentials',
    price: 'R2,999',
    per: '/month',
    description: 'Perfect for solo accountants and small bookkeeping practices getting started online.',
    featured: false,
    ctaLink: '/contact',
    ctaLabel: 'Start with Essentials',
    features: [
      '5-page accounting firm website',
      'Mobile-first design',
      'Basic SEO setup',
      'SSL & hosting included',
      'Monthly content updates',
      'Contact form & appointment booking',
    ],
  },
  {
    name: 'Professional',
    price: 'R5,999',
    per: '/month',
    description: 'The most popular plan for established accounting and tax firms in South Africa.',
    featured: true,
    ctaLink: '/lp/client-portal-demo',
    ctaLabel: 'See the portal in action',
    features: [
      'Up to 15-page accounting website',
      'Client portal integration',
      'CRM sync (HubSpot or Xero)',
      'Monthly SEO optimisation',
      'Compliance monitoring',
      'Conversion rate optimisation',
      'Monthly performance report',
    ],
  },
  {
    name: 'Enterprise',
    price: 'From R9,999',
    per: '/month',
    description: 'For multi-partner firms, wealth managers, and complex financial services requiring bespoke solutions.',
    featured: false,
    ctaLink: '/contact',
    ctaLabel: 'Scope an Enterprise build',
    features: [
      'Unlimited pages',
      'Custom client portal build',
      'Full API integration stack',
      'Dedicated compliance officer',
      'Weekly performance reviews',
      'Priority support SLA',
      'White-label options',
    ],
  },
]

const faqs = [
  {
    question: 'How much does an accounting firm website and client portal cost in South Africa?',
    answer:
      'Zar Media Group plans start at R2,999/month (Essentials, managed 5-page firm website), R5,999/month for Professional (up to 15 pages with client portal integration, CRM sync, monthly SEO and compliance monitoring), and from R9,999/month for Enterprise with a custom portal build. All plans include hosting, maintenance, monthly updates, and compliance monitoring.',
  },
  {
    question: 'Is there a large upfront build cost?',
    answer:
      'No. The programme is a monthly subscription instead of a R40,000-style once-off build. Custom portal work under Enterprise is scoped during the free audit, so you receive a fixed quote before committing — the number is agreed up front, not discovered during development.',
  },
  {
    question: 'How does this compare with off-the-shelf portal software like TaxDome or Karbon?',
    answer:
      'Off-the-shelf portals typically cost R400–R1,200 per user per month for South African firms once converted from USD — R1,200–R3,600/month for a 3-person practice, excluding your website. The Professional plan includes portal and website together at R5,999/month, billed in rand, with the login on your own domain rather than a third-party URL.',
  },
  {
    question: 'What is included in every plan?',
    answer:
      'Every plan includes design, hosting, SSL, ongoing maintenance, monthly content updates, and compliance monitoring against POPIA and South African financial-sector requirements. Higher tiers add client portal integration, CRM sync with Xero or HubSpot, monthly SEO, conversion optimisation, and performance reporting.',
  },
  {
    question: 'Is pricing different for Cape Town firms versus the rest of South Africa?',
    answer:
      'No — pricing is the same nationwide. The programme is delivered remotely over video for firms in Cape Town, Johannesburg, Pretoria, Durban, Gqeberha, and smaller centres, and everything is billed in rand so exchange-rate movements never affect your fee.',
  },
  {
    question: 'How do we get an exact number for our firm?',
    answer:
      'Book the free audit. We review your current website, document workflow, and integrations, then send a scoped, fixed quote for the plan that fits — most firms know their exact monthly number within a week.',
  },
]

useSeoMeta({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  canonical: seo.canonical,
  ogImage: '/hero-website-as-a-service.png',
  ogImageAlt: 'Transparent pricing for accounting firm websites and client portals in South Africa — plans from R2,999 per month',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Pricing', url: '/pricing' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${BASE_URL}/pricing#webpage`,
      url: `${BASE_URL}/pricing`,
      name: seo.title,
      description: seo.description,
      inLanguage: 'en-ZA',
      isPartOf: { '@type': 'WebSite', '@id': `${BASE_URL}/#website`, name: 'Zar Media Group', url: BASE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/pricing#service`,
      serviceType: 'Managed client portals and websites for accounting firms',
      name: 'Website as a Service & Client Portals for Accountants',
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Zar Media Group', url: BASE_URL },
      areaServed: { '@type': 'Country', name: 'South Africa' },
      url: `${BASE_URL}/pricing`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Monthly plans for accounting firms',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Essentials',
            description: 'Managed 5-page accounting firm website with hosting, updates, and basic SEO.',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: 2999,
              priceCurrency: 'ZAR',
              unitText: 'per month',
            },
          },
          {
            '@type': 'Offer',
            name: 'Professional',
            description: 'Up to 15-page firm website with client portal integration, CRM sync, monthly SEO, and compliance monitoring.',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: 5999,
              priceCurrency: 'ZAR',
              unitText: 'per month',
            },
          },
          {
            '@type': 'Offer',
            name: 'Enterprise',
            description: 'Custom client portal build, full API integration stack, and priority support for multi-partner firms.',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              minPrice: 9999,
              priceCurrency: 'ZAR',
              unitText: 'per month',
            },
          },
        ],
      },
    },
    SCHEMAS.faqPage(faqs),
  ],
})
</script>
