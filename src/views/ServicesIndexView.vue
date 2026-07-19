<template>
  <div class="services-index-page">
    <section
      class="relative min-h-[70vh] flex items-center bg-navy-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
      aria-label="Services for accounting firms"
    >
      <HeroBackground
        src="/hero-services-index.png"
        overlay-class="bg-gradient-to-r from-navy-900/94 via-navy-900/82 to-navy-900/50"
        image-opacity="opacity-42"
        image-position="object-right object-center"
        :corners="false"
      />
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }]" />

        <span class="section-label reveal-up">South Africa · Accountants, tax &amp; bookkeeping</span>
        <h1 class="font-serif text-display-lg text-white mt-6 mb-8 max-w-4xl reveal-up" style="transition-delay: 100ms;">
          Digital services for <span class="text-gradient">accounting firms</span>
        </h1>
        <p class="font-sans text-white/65 text-lg max-w-3xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          <strong class="text-white/90">Client portals</strong>,
          <strong class="text-white/90">managed firm websites</strong>,
          <strong class="text-white/90">CRM integration</strong>, and
          <strong class="text-white/90">POPIA-conscious compliance</strong>—one programme, purpose-built for regulated financial work in South Africa.
        </p>
        <div class="gold-divider mt-10 reveal-up" style="transition-delay: 300ms;"></div>
        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 350ms;">
          <RouterLink to="/contact" class="btn-primary">Book a strategy call</RouterLink>
          <RouterLink to="/resources" class="btn-ghost">Read free guides</RouterLink>
        </div>
      </div>
    </section>

    <section class="section-padding bg-cream" aria-labelledby="services-list-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="services-list-heading" class="font-serif text-display-md text-navy-900 mb-4">
          Our services for financial professionals
        </h2>
        <p class="font-sans text-charcoal-600 text-lg max-w-3xl leading-relaxed mb-14">
          Your firm loses hours and takes on POPIA risk wherever client information moves by hand.
          Each service below closes one of those gaps—and together they run as
          <strong>one managed programme</strong> with one audit trail.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article
            v-for="(service, i) in offerings"
            :key="service.path"
            class="reveal-up bg-white border border-navy-900/8 p-8 lg:p-10 hover:border-gold-500/40 hover:shadow-card-hover transition-all duration-300"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <h3 class="font-serif text-2xl text-navy-900 mb-4">
              <RouterLink :to="service.path" class="hover:text-gold-600 transition-colors">
                {{ service.name }}
              </RouterLink>
            </h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed mb-6">{{ service.summary }}</p>
            <RouterLink :to="service.path" class="btn-text text-xs">
              View {{ service.shortLabel }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ FAQ ══ -->
    <section class="section-padding bg-white border-t border-navy-900/8" aria-labelledby="faq-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 lg:mb-16 reveal-up">
          <span class="section-label">FAQ</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            Before you pick a service
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-navy-900/10 bg-cream overflow-hidden rounded-sm"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <dt>
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 min-h-[3.25rem] py-5 px-6 text-left font-sans font-semibold text-navy-900 text-base hover:text-gold-600 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`svc-faq-${i}`"
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
              <dd v-if="openFaq === i" :id="`svc-faq-${i}`" class="px-6 pb-6 pt-0 font-sans text-charcoal-600 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
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
import HeroBackground from '@/components/ui/HeroBackground.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'

const seo = getPageSeo('services-index')
const relatedGuides = seo.relatedGuides

const offerings = SERVICE_OFFERINGS.map((s) => ({
  ...s,
  shortLabel: s.id === 'client-portal' ? 'portal tour' : 'service details',
}))

const { initReveal } = useScrollReveal()
const openFaq = ref(null)
onMounted(() => setTimeout(initReveal, 50))

const faqs = [
  {
    question: 'What services does Zar Media Group offer accounting firms?',
    answer:
      'We offer client portals and CRM integration, Website as a Service for firm sites, workflow integration with Xero and HubSpot, compliance-first website architecture, and a dedicated accounting client portal product tour for South African practices.',
  },
  {
    question: 'Do you only work with accountants in South Africa?',
    answer:
      'We are based in South Africa and specialise exclusively in POPIA, FSCA, FAIS, SAICA, and South African web accessibility requirements for accounting and financial services firms.',
  },
  {
    question: 'Which service should our firm start with?',
    answer:
      'Start where the pain is loudest. If your team spends hours chasing documents on WhatsApp and email, start with the client portal. If your website is outdated or not producing enquiries, start with Website as a Service. If data is re-keyed between systems, start with workflow integration. The free audit tells you which gap costs you most—then we sequence the rest.',
  },
  {
    question: 'Can we combine services into one monthly programme?',
    answer:
      'Yes—that is how most firms run it. Portal, firm website, integrations, and compliance review are delivered and billed as one managed programme, so there is one team, one roadmap, and one compliant stack instead of three vendors pointing at each other.',
  },
]

useSeoMeta({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  canonical: seo.canonical,
  ogImage: '/hero-services-index.png',
  ogImageAlt: 'Digital services for accounting firms in Cape Town and South Africa — client portals, managed websites, CRM integration',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/services#collection`,
      url: `${BASE_URL}/services`,
      name: seo.title,
      description: seo.description,
      inLanguage: 'en-ZA',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: SERVICE_OFFERINGS.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.name,
          url: `${BASE_URL}${s.path}`,
          description: s.summary,
        })),
      },
    },
    SCHEMAS.faqPage(faqs),
  ],
})
</script>
