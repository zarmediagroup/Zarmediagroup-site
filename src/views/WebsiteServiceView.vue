<template>
  <div class="website-service-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24" aria-label="Service page hero">
      <HeroBackground
        src="/hero-website-as-a-service.png"
        overlay-class="bg-gradient-to-r from-navy-900/94 via-navy-900/82 to-navy-900/50"
        image-opacity="opacity-45"
        image-position="object-right object-center"
      />
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[
          { label: 'Services', path: '/services' },
          { label: 'Website as a Service', path: '/services/website-as-a-service' }
        ]" />

        <span class="section-label reveal-up">Website as a Service — for Accountants, Advisors &amp; Bookkeepers</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          Your Firm Website Was Finished<br/>
          <span class="text-gradient">the Day It Started Decaying</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          You paid R40,000 for a website three years ago. Today it ranks nowhere and collects client data through forms nobody has reviewed for POPIA. <strong class="text-white/80">Website as a Service</strong> replaces the one-off project with a <strong class="text-white/80">managed site on a monthly subscription</strong>—designed, hosted, optimised, and compliance-reviewed continuously.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>

        <!-- Hero CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Request a demo for your accounting firm website">
            Request a Demo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
          <button class="btn-ghost" @click="goToPricing" aria-label="View Website as a Service pricing for accountants">
            View Pricing
          </button>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ══ PAS NARRATIVE ══ -->
    <section class="section-padding bg-white border-b border-navy-900/8" aria-labelledby="pas-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <div class="reveal-up">
          <span class="section-label">Why one-off websites fail accounting firms</span>
          <h2 id="pas-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            The most expensive website is the one<br class="hidden lg:inline"/> <em>you already paid for</em>
          </h2>
          <div class="gold-divider mb-8"></div>
        </div>

        <div class="reveal-up space-y-6 font-sans text-charcoal-600 text-base lg:text-lg leading-relaxed">
          <p>
            After a traditional project, the agency invoices and moves on. Nobody updates the content, re-tests the forms, or re-checks POPIA. Every month your site slips further down Google for <em>"accountant in Cape Town"</em>—and a competitor takes the enquiry that should have been yours.
          </p>
          <p>
            One subscription ends the decay: design, hosting, SEO, and a standing POPIA review, run by the same team as your client portal. <strong class="text-navy-900">You stop owning a depreciating asset and start subscribing to an appreciating one.</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- ══ CONTRAST: PROJECT VS PROGRAMME ══ -->
    <section class="section-padding bg-navy-950 border-b border-white/5" aria-labelledby="contrast-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16 reveal-up">
          <span class="section-label">Side by side</span>
          <h2 id="contrast-heading" class="font-serif text-display-md text-white mt-4 mb-4">
            One-off project vs <em class="text-gold-400">managed programme</em>
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div class="reveal-up bg-white/[0.03] border border-white/10 p-6 lg:p-10">
            <h3 class="font-sans font-bold text-white/50 text-xs uppercase tracking-widest mb-6">The one-off website project</h3>
            <ul class="space-y-4">
              <li v-for="item in contrastProject" :key="item" class="flex items-start gap-3">
                <svg class="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <span class="font-sans text-white/55 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="reveal-up bg-gold-500/[0.06] border border-gold-500/30 p-6 lg:p-10" style="transition-delay: 120ms;">
            <h3 class="font-sans font-bold text-gold-400 text-xs uppercase tracking-widest mb-6">Website as a Service</h3>
            <ul class="space-y-4">
              <li v-for="item in contrastWaas" :key="item" class="flex items-start gap-3">
                <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="font-sans text-white/70 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ KEY BENEFITS ══ -->
    <section class="section-padding bg-cream" aria-labelledby="benefits-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-14 reveal-up">
          <span class="section-label">Why WaaS for Financial Firms?</span>
          <h2 id="benefits-heading" class="font-serif text-display-md text-navy-900 mb-6">
            Everything Your Accounting Firm<br/><em>Website Needs, Managed for You</em>
          </h2>
          <div class="gold-divider"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed mt-6">
            Your public site stays current, compliant, and converting—maintained in the same programme as your <strong>client portal and workflows</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          <article
            v-for="(benefit, i) in benefits"
            :key="benefit.title"
            class="reveal-up group p-7 bg-white border border-navy-900/8 hover:border-gold-500/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="w-12 h-12 flex items-center justify-center border border-gold-500/20 bg-gold-500/5 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300 mb-6" aria-hidden="true">
              <svg class="w-6 h-6 text-gold-500 group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="benefit.icon"></svg>
            </div>
            <h3 class="font-sans font-semibold text-navy-900 text-sm mb-3 group-hover:text-gold-600 transition-colors">{{ benefit.title }}</h3>
            <p class="font-sans text-charcoal-500 text-sm leading-relaxed">{{ benefit.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ TAB SECTION: FEATURES / PRICING / ROI ══ -->
    <section class="section-padding bg-navy-900" aria-label="Features, pricing, and ROI calculator" ref="tabSectionRef">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Tab Nav -->
        <div class="flex gap-0 border-b border-white/10 mb-8 sm:mb-12 overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0" role="tablist" aria-label="Service information tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="font-sans text-sm font-semibold px-6 py-4 transition-all duration-200 whitespace-nowrap flex-shrink-0"
            :class="activeTab === tab.id
              ? 'text-gold-400 border-b-2 border-gold-500 -mb-px'
              : 'text-white/40 hover:text-white/70'"
            role="tab"
            :aria-selected="activeTab === tab.id"
            :id="`tab-${tab.id}`"
            :aria-controls="`tabpanel-${tab.id}`"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Features Tab -->
        <div
          v-if="activeTab === 'features'"
          id="tabpanel-features"
          role="tabpanel"
          aria-labelledby="tab-features"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div v-for="group in featureGroups" :key="group.category" class="reveal-up">
              <h3 class="font-sans font-semibold text-gold-400 text-xs uppercase tracking-wider mb-4">{{ group.category }}</h3>
              <ul class="space-y-3">
                <li v-for="feature in group.items" :key="feature" class="flex items-start gap-3">
                  <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-sans text-white/70 text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Pricing Tab -->
        <div
          v-if="activeTab === 'pricing'"
          id="tabpanel-pricing"
          role="tabpanel"
          aria-labelledby="tab-pricing"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article
              v-for="tier in pricing"
              :key="tier.name"
              class="reveal-up relative border transition-all duration-300"
              :class="tier.featured
                ? 'border-gold-500 bg-gold-500/5'
                : 'border-white/10 hover:border-white/20'"
            >
              <div v-if="tier.featured" class="absolute -top-3 left-0 right-0 text-center">
                <span class="font-sans text-xs font-semibold text-navy-900 bg-gold-500 px-4 py-1">Most Popular for SA Accounting Firms</span>
              </div>
              <div class="p-8">
                <h3 class="font-serif text-white text-xl mb-2">{{ tier.name }}</h3>
                <div class="flex items-end gap-2 mb-4">
                  <span class="font-serif text-3xl text-gold-400 font-bold">{{ tier.price }}</span>
                  <span class="font-sans text-white/40 text-sm mb-1">/month</span>
                </div>
                <p class="font-sans text-white/50 text-sm mb-8">{{ tier.description }}</p>
                <ul class="space-y-3 mb-8">
                  <li v-for="feature in tier.features" :key="feature" class="flex items-start gap-3">
                    <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="font-sans text-white/70 text-sm">{{ feature }}</span>
                  </li>
                </ul>
                <RouterLink to="/contact" :class="tier.featured ? 'btn-primary w-full text-center' : 'btn-ghost w-full text-center'" :aria-label="`Start the ${tier.name} plan for your accounting firm`">
                  Get Started
                </RouterLink>
              </div>
            </article>
          </div>
        </div>

        <!-- ROI Tab -->
        <div
          v-if="activeTab === 'roi'"
          id="tabpanel-roi"
          role="tabpanel"
          aria-labelledby="tab-roi"
        >
          <div class="max-w-2xl mx-auto">
            <h3 class="font-serif text-white text-xl mb-8 text-center">
              ROI Calculator — Accounting Firm Website
            </h3>
            <div class="space-y-6 mb-8">
              <div>
                <label class="font-sans text-white/60 text-sm mb-2 block" for="current-clients">
                  Current monthly client enquiries
                </label>
                <input
                  id="current-clients"
                  v-model.number="roi.enquiries"
                  type="range" min="1" max="50" step="1"
                  class="w-full accent-gold-500"
                  :aria-valuenow="roi.enquiries"
                  :aria-valuetext="`${roi.enquiries} enquiries per month`"
                />
                <div class="flex justify-between mt-1">
                  <span class="font-sans text-white/30 text-xs">1</span>
                  <span class="font-sans text-gold-400 text-sm font-semibold">{{ roi.enquiries }} / month</span>
                  <span class="font-sans text-white/30 text-xs">50</span>
                </div>
              </div>
              <div>
                <label class="font-sans text-white/60 text-sm mb-2 block" for="avg-value">
                  Average client lifetime value (ZAR)
                </label>
                <input
                  id="avg-value"
                  v-model.number="roi.clientValue"
                  type="range" min="5000" max="200000" step="5000"
                  class="w-full accent-gold-500"
                  :aria-valuenow="roi.clientValue"
                  :aria-valuetext="`R${roi.clientValue.toLocaleString()} lifetime value`"
                />
                <div class="flex justify-between mt-1">
                  <span class="font-sans text-white/30 text-xs">R5k</span>
                  <span class="font-sans text-gold-400 text-sm font-semibold">R{{ roi.clientValue.toLocaleString() }}</span>
                  <span class="font-sans text-white/30 text-xs">R200k</span>
                </div>
              </div>
              <div>
                <label class="font-sans text-white/60 text-sm mb-2 block" for="conversion-rate">
                  Current enquiry-to-client conversion rate
                </label>
                <input
                  id="conversion-rate"
                  v-model.number="roi.conversionRate"
                  type="range" min="5" max="80" step="5"
                  class="w-full accent-gold-500"
                  :aria-valuenow="roi.conversionRate"
                  :aria-valuetext="`${roi.conversionRate}% conversion rate`"
                />
                <div class="flex justify-between mt-1">
                  <span class="font-sans text-white/30 text-xs">5%</span>
                  <span class="font-sans text-gold-400 text-sm font-semibold">{{ roi.conversionRate }}%</span>
                  <span class="font-sans text-white/30 text-xs">80%</span>
                </div>
              </div>
            </div>

            <div class="border border-white/10 p-6 space-y-4">
              <div class="flex justify-between items-center">
                <span class="font-sans text-white/60 text-sm">Current monthly revenue from web</span>
                <span class="font-sans text-white text-sm">R{{ currentRevenue.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-sans text-white/60 text-sm">Illustrative scenario with WaaS (+127%)</span>
                <span class="font-sans text-gold-400 text-sm font-semibold">R{{ projectedRevenue.toLocaleString() }}</span>
              </div>
              <div class="border-t border-white/10 pt-4 flex justify-between items-center">
                <span class="font-sans text-white font-semibold text-sm">Monthly ROI uplift</span>
                <span class="font-serif text-gold-500 text-2xl font-bold">R{{ roiUplift.toLocaleString() }}</span>
              </div>
            </div>
            <p class="font-sans text-white/30 text-xs text-center mt-4">
              Illustrative scenario only — not a performance claim. Your result depends on your baseline, market, and how much of the playbook we run together.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ FAQ ══ -->
    <section class="section-padding bg-cream" aria-labelledby="faq-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 lg:mb-16 reveal-up">
          <span class="section-label">FAQ</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            What firm principals ask before subscribing
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up border border-navy-900/10 bg-white overflow-hidden rounded-sm"
            :style="{ transitionDelay: i * 60 + 'ms' }"
          >
            <dt>
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 min-h-[3.25rem] py-5 px-6 text-left font-sans font-semibold text-navy-900 text-base hover:text-gold-600 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`waas-faq-${i}`"
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
              <dd v-if="openFaq === i" :id="`waas-faq-${i}`" class="px-6 pb-6 pt-0 font-sans text-charcoal-600 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <!-- ══ RELATED SERVICES ══ -->
    <SeoRelatedGuides :slugs="pageSeo.relatedGuides" />
    <RelatedServices :exclude="['waas']" />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import HeroBackground from '@/components/ui/HeroBackground.vue'
import RelatedServices from '@/components/ui/RelatedServices.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'

const pageSeo = getPageSeo('website-as-a-service')

const { initReveal } = useScrollReveal()
onMounted(() => setTimeout(initReveal, 50))

const activeTab = ref('features')
const tabSectionRef = ref(null)
const openFaq = ref(null)

// Re-run reveal whenever a new tab panel is rendered into the DOM
watch(activeTab, () => {
  nextTick(() => setTimeout(initReveal, 50))
})

function goToPricing() {
  activeTab.value = 'pricing'
  nextTick(() => {
    tabSectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

// ROI calculator
const roi = ref({ enquiries: 10, clientValue: 30000, conversionRate: 20 })
const currentRevenue = computed(() =>
  Math.round((roi.value.enquiries * roi.value.conversionRate / 100) * roi.value.clientValue)
)
const projectedRevenue = computed(() => Math.round(currentRevenue.value * 2.27))
const roiUplift = computed(() => projectedRevenue.value - currentRevenue.value)

const faqs = [
  {
    question: 'What is Website as a Service (WaaS) for accounting firms?',
    answer:
      'Website as a Service is a monthly subscription where Zar Media Group designs, builds, hosts, maintains, and continuously optimises your firm website. It is structured to stay aligned with your client portal and intake automations so prospects and logged-in clients see one coherent, compliant experience.',
  },
  {
    question: 'How much does a managed website for accountants cost?',
    answer:
      'Our Website as a Service plans for accounting firms in South Africa start from R2,999/month for the Essentials plan, with Professional at R5,999/month and Enterprise from R9,999/month. All plans include hosting, maintenance, monthly updates, and compliance monitoring.',
  },
  {
    question: 'Why not just pay once for a website and be done with it?',
    answer:
      'Because a firm website is never done. Google\'s ranking factors, POPIA guidance, browser security requirements, and your own service lines all change—usually within months of launch. A one-off site starts decaying the day it goes live; a managed site is re-tested, re-optimised, and compliance-reviewed every month. Most firms spend more rescuing a dead project site than a year of WaaS costs.',
  },
  {
    question: 'How long does it take to launch a managed accounting firm website?',
    answer:
      'Most firm websites launch within 4–6 weeks of the free audit: week one for compliance review and architecture, weeks two to four for design and build, then integration testing and go-live. Portal integration and CRM wiring run in parallel, so the programme starts delivering before the full stack is finished.',
  },
  {
    question: 'Do we own our domain and content if we cancel?',
    answer:
      'Yes. Your domain stays registered to your firm, and your content, brand assets, and client data are yours. WaaS is month to month after the initial term—we keep your business by performing, not by locking you in.',
  },
  {
    question: 'Do you work with firms outside Cape Town?',
    answer:
      'Yes. We are Cape Town-based and run the full programme remotely for accounting, tax, and bookkeeping firms across South Africa—including Johannesburg, Pretoria, Durban, and Gqeberha. Audits, design reviews, and monthly reporting all happen over video.',
  },
]

useSeoMeta({
  title: pageSeo.title,
  description: pageSeo.description,
  keywords: pageSeo.keywords,
  canonical: pageSeo.canonical,
  ogImage: '/hero-website-as-a-service.png',
  ogImageAlt: 'Managed website design and wireframes for accounting firms — Website as a Service by Zar Media Group, South Africa',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Website as a Service', url: '/services/website-as-a-service' },
    ]),
    ...SCHEMAS.servicePage({
      name: 'Website as a Service for Accountants',
      description:
        'Managed accounting firm website on a monthly subscription—design, hosting, compliance, SEO, and CRO—delivered as part of the same programme as your client portal and connected workflows.',
      url: '/services/website-as-a-service',
    }),
    SCHEMAS.faqPage(faqs),
  ],
})

const contrastProject = [
  'R30,000–R80,000 upfront, before a single enquiry',
  'Content frozen on launch day',
  'POPIA reviewed once—if at all',
  'Something breaks: log a ticket, wait, pay hourly',
]

const contrastWaas = [
  'From R2,999/month—no capital outlay',
  'Content and SEO updated every month',
  'Standing POPIA and accessibility review',
  'We fix things before you notice them',
]

const tabs = [
  { id: 'features', label: 'What\'s Included' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'roi', label: 'ROI Calculator' },
]

const benefits = [
  {
    title: 'Always Optimised Accounting Website',
    description: 'We continuously test and improve your accounting firm website — A/B testing CTAs, improving page speed, and updating content to reflect your services.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>',
  },
  {
    title: 'Financial Sector SEO',
    description: 'Rank for "accountant in [city]" and high-intent financial keywords that bring clients actively looking for your services across South Africa.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
  },
  {
    title: 'Compliance-Ready Architecture',
    description: 'Every accounting firm website we manage is reviewed against POPIA, FSCA, and FAIS requirements — protecting your firm and your clients.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    title: 'Client Portal Integration',
    description: 'Secure, branded client portals for accountants — document exchange, e-signatures, and billing all accessible from your own website.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
  },
  {
    title: 'CRM & Software Integration',
    description: 'Connect your accounting website to Xero, QuickBooks, HubSpot, or your practice management system — no more manual data entry.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  },
  {
    title: 'Zero Maintenance Headaches',
    description: 'We handle all hosting, updates, security patches, and backups. You focus on billable work — we keep your digital presence running perfectly.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
  },
]

const featureGroups = [
  {
    category: 'Design & Brand',
    items: [
      'Premium accounting firm website design with brand system',
      'Mobile-first responsive design optimised for all devices',
      'Quarterly design refresh to stay current',
      'Custom landing pages for specific service lines (audit, tax, advisory)',
    ],
  },
  {
    category: 'Compliance & Security',
    items: [
      'POPIA-compliant data collection forms',
      'South African web accessibility standards',
      'Monthly compliance monitoring and audit reports',
      'SSL, DDoS protection, and daily backups',
    ],
  },
  {
    category: 'SEO & Performance',
    items: [
      'On-page SEO optimisation for financial keywords',
      'Google Business Profile management',
      'Lighthouse score 90+ guaranteed',
      'Core Web Vitals monitoring and optimisation',
    ],
  },
  {
    category: 'Integrations',
    items: [
      'CRM integration: HubSpot, Salesforce, or Pipedrive',
      'Accounting software: Xero, QuickBooks, Sage',
      'Booking: Calendly, Microsoft Bookings',
      'E-signature: DocuSign or HelloSign integration',
    ],
  },
]

const pricing = [
  {
    name: 'Essentials',
    price: 'R2,999',
    description: 'Perfect for solo accountants and small bookkeeping practices getting started online.',
    featured: false,
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
    description: 'The most popular plan for established accounting and tax firms in South Africa.',
    featured: true,
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
    price: 'Custom',
    description: 'For multi-partner firms, wealth managers, and complex financial services requiring bespoke solutions.',
    featured: false,
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
</script>
