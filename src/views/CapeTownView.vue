<template>
  <div class="cape-town-page">
    <!-- ══ HERO ══ -->
    <section
      class="relative flex items-center bg-navy-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
      aria-label="Client portals and websites for Cape Town accounting firms"
    >
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.035]" style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);"></div>
        <div class="hero-glow w-[40rem] h-[26rem] -top-40 left-1/2 -translate-x-1/2"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'Home', path: '/' }, { label: 'Cape Town', path: '/cape-town' }]" />

        <span class="section-label reveal-up">Cape Town · Western Cape · South Africa</span>
        <h1 class="font-serif text-display-lg text-white mt-6 mb-8 max-w-4xl reveal-up" style="transition-delay: 100ms;">
          Client portals &amp; websites for <span class="text-gradient">Cape Town accounting firms</span>
        </h1>
        <p class="font-sans text-white/65 text-lg max-w-3xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Zar Media Group is a <strong class="text-white/90">Cape Town-based team</strong> that builds and manages
          POPIA-conscious client document portals and firm websites for accounting, tax, and bookkeeping practices.
          Plans from <strong class="text-white/90">R2,999/month</strong>, portals on your own domain, and support in
          your timezone — for firms across the Cape Town metro and the rest of South Africa.
        </p>
        <div class="gold-divider mt-10 reveal-up" style="transition-delay: 300ms;"></div>
        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 350ms;">
          <RouterLink to="/contact" class="btn-primary">Get a free audit</RouterLink>
          <RouterLink to="/pricing" class="btn-ghost">See pricing</RouterLink>
        </div>
      </div>
    </section>

    <!-- ══ WHY LOCAL ══ -->
    <section class="section-padding bg-cream" aria-labelledby="local-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="local-heading" class="font-serif text-display-md text-navy-900 mb-4">
          Why Cape Town firms choose a local portal partner
        </h2>
        <p class="font-sans text-charcoal-600 text-lg max-w-3xl leading-relaxed mb-14">
          Most portal software is American: billed in USD, supported nine timezones away, with client data
          on US servers. For a practice handling South African tax records, three local factors change the decision.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article
            v-for="(reason, i) in localReasons"
            :key="reason.title"
            class="reveal-up bg-white rounded-2xl border border-navy-900/8 p-8 hover:border-gold-500/40 hover:shadow-soft-lg transition-all duration-300"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <h3 class="font-serif text-xl text-navy-900 mb-3">{{ reason.title }}</h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ reason.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ LOCAL PROOF ══ -->
    <section class="section-padding bg-white border-t border-navy-900/8" aria-labelledby="proof-heading">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 reveal-up">
          <span class="section-label">Built in Cape Town</span>
          <h2 id="proof-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            A Cape Town chartered accounting practice, live on this stack
          </h2>
          <div class="gold-divider-center"></div>
        </div>
        <p class="font-sans text-charcoal-600 text-base leading-relaxed mb-8 reveal-up">
          ABC INC (A Level Business Consultants) is a SAICA-registered chartered accounting practice in
          Cape Town. We delivered its public firm website plus a secure, branded client portal — chartered-quality
          positioning, consultation scheduling, and a POPIA-conscious document vault that replaced unsecured email
          attachments between the firm and its clients.
        </p>
        <div class="text-center reveal-up">
          <RouterLink to="/resources/abc-inc-chartered-accountants-website-case-study" class="btn-primary inline-flex items-center gap-2">
            Read the Cape Town case study
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ══ SERVICES ══ -->
    <section class="section-padding bg-cream border-t border-navy-900/8" aria-labelledby="ct-services-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="ct-services-heading" class="font-serif text-display-md text-navy-900 mb-4">
          What we run for Cape Town practices
        </h2>
        <p class="font-sans text-charcoal-600 text-lg max-w-3xl leading-relaxed mb-14">
          One managed programme — portal, firm website, integrations, and compliance — delivered remotely over
          video for firms from the City Bowl to the northern suburbs, and everywhere else in South Africa.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article
            v-for="(service, i) in offerings"
            :key="service.path"
            class="reveal-up bg-white rounded-2xl border border-navy-900/8 p-8 lg:p-10 hover:border-gold-500/40 hover:shadow-soft-lg transition-all duration-300"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <h3 class="font-serif text-2xl text-navy-900 mb-4">
              <RouterLink :to="service.path" class="hover:text-charcoal-500 transition-colors">
                {{ service.name }}
              </RouterLink>
            </h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed mb-6">{{ service.summary }}</p>
            <RouterLink :to="service.path" class="btn-text text-xs">
              View service
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ FAQ ══ -->
    <section class="section-padding bg-white border-t border-navy-900/8" aria-labelledby="ct-faq-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 lg:mb-16 reveal-up">
          <span class="section-label">Cape Town FAQ</span>
          <h2 id="ct-faq-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            What local firms ask us
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-navy-900/10 bg-cream overflow-hidden rounded-xl"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <dt>
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 min-h-[3.25rem] py-5 px-6 text-left font-sans font-semibold text-navy-900 text-base hover:text-charcoal-500 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`ct-faq-${i}`"
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
              <dd v-if="openFaq === i" :id="`ct-faq-${i}`" class="px-6 pb-6 pt-0 font-sans text-charcoal-600 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>

        <div class="mt-12 text-center reveal-up">
          <RouterLink to="/contact" class="btn-primary">Book a free audit</RouterLink>
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
import { getPageSeo, SERVICE_OFFERINGS } from '@/data/seo-pages'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'

const seo = getPageSeo('cape-town')
const relatedGuides = seo.relatedGuides
const offerings = SERVICE_OFFERINGS

const { initReveal } = useScrollReveal()
const openFaq = ref(null)
onMounted(() => setTimeout(initReveal, 50))

const localReasons = [
  {
    title: 'POPIA data residency',
    text: 'Many international SaaS portals store client documents on US servers. A locally built portal can keep records on South African or EU-based infrastructure — an easier POPIA position for a practice holding ID numbers and financial records.',
  },
  {
    title: 'Rand pricing, no FX surprises',
    text: 'USD-billed subscriptions rise every time the rand weakens. Our plans are priced and billed in rand — from R2,999/month — so your portal cost is the same in month 14 as in month 1.',
  },
  {
    title: 'Support in your timezone',
    text: 'Walkthroughs, configuration, and monthly reviews happen over video during South African business hours — with a team based in Cape Town, not a ticket queue nine timezones away.',
  },
]

const faqs = [
  {
    question: 'What is the best accounting document portal for a firm in Cape Town?',
    answer:
      'For most small Cape Town practices, a branded document portal integrated into the firm\'s own website beats adding another SaaS login: clients upload securely on your domain, data can stay on South African or EU-based servers for POPIA, and pricing is in rand. Off-the-shelf tools like TaxDome or Karbon suit firms that accept per-user USD fees for faster rollout. Zar Media Group builds integrated portals from its Cape Town base.',
  },
  {
    question: 'Is Zar Media Group actually based in Cape Town?',
    answer:
      'Yes — Zar Media Group (ZARMEDIAGROUP (PTY) LTD) is registered and based in Cape Town, Western Cape. The programme is delivered remotely over video, which is how we serve both Cape Town firms and practices in Johannesburg, Pretoria, Durban, and smaller centres.',
  },
  {
    question: 'How much does a client portal cost for a Cape Town accounting firm?',
    answer:
      'The same as anywhere in South Africa: managed plans from R2,999/month, with the Professional plan (portal integration, CRM sync, monthly SEO, and compliance monitoring) at R5,999/month and Enterprise custom portal builds from R9,999/month. Off-the-shelf SaaS portals typically run R400–R1,200 per user per month once converted from USD.',
  },
  {
    question: 'Do you only work with firms in Cape Town?',
    answer:
      'No. Cape Town is home base, but the portal is cloud-hosted on your domain and the whole programme is delivered remotely — accounting, tax, and bookkeeping practices in Johannesburg, Pretoria, Durban, Gqeberha, and smaller centres run it exactly the same way.',
  },
  {
    question: 'Is the portal POPIA compliant for South African client data?',
    answer:
      'The portal is built POPIA-conscious: access-controlled document storage instead of unsecured email attachments, encrypted uploads, audit trails, and hosting choices that keep data on South African or EU-based servers. Every build is reviewed against POPIA and South African financial-sector requirements.',
  },
]

useSeoMeta({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  canonical: seo.canonical,
  ogImage: '/accounting-firm-office-cape-town.png',
  ogImageAlt: 'Accounting firm office in Cape Town — client portals and firm websites by Zar Media Group',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Cape Town', url: '/cape-town' },
    ]),
    SCHEMAS.localBusiness(),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/cape-town#service`,
      serviceType: 'Client portals and managed websites for accounting firms',
      name: 'Client Portals & Firm Websites — Cape Town',
      description: seo.description,
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Zar Media Group', url: BASE_URL },
      areaServed: [
        { '@type': 'City', name: 'Cape Town' },
        { '@type': 'AdministrativeArea', name: 'Western Cape' },
        { '@type': 'Country', name: 'South Africa' },
      ],
      url: `${BASE_URL}/cape-town`,
    },
    SCHEMAS.faqPage(faqs),
  ],
})
</script>
