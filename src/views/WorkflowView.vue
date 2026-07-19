<template>
  <div class="workflow-page">

    <!-- ══ HERO ══ -->
    <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24" aria-label="Workflow integration service hero">
      <HeroBackground
        src="/hero-workflow-integration.png"
        overlay-class="bg-gradient-to-r from-navy-900/94 via-navy-900/82 to-navy-900/55"
        image-opacity="opacity-50"
        image-position="object-center"
      />
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[
          { label: 'Services', path: '/services' },
          { label: 'Workflow Integration', path: '/services/workflow-integration' }
        ]" />

        <span class="section-label reveal-up">Service — CRM &amp; Software Integration for Financial Firms</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          CRM &amp; Workflow Integration<br/>
          <span class="text-gradient">for Accounting Firms</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Re-typing the same client details into Xero, your CRM, and an engagement letter means paying three times for one piece of information. We connect your stack so <strong class="text-white/80">data flows once, traceably</strong>—and firms get 8–15 admin hours back per week.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>

        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Get a workflow integration demo for your accounting firm">
            See a Live Demo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
          <RouterLink to="/what-we-do" class="btn-ghost" aria-label="Understand our full digital approach for accountants">
            Our Full Process
          </RouterLink>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ══ ADMIN PROBLEM ══ -->
    <section class="section-padding bg-cream" aria-labelledby="problem-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">The Admin Problem</span>
          <h2 id="problem-heading" class="font-serif text-display-md text-navy-900 mb-4">
            How Much Admin is<br/><em>Your Accounting Team Wasting?</em>
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed mt-6">
            The average SA accounting firm spends <strong>12+ hours per week</strong> on admin that should be automated. At a modest charge-out rate, that's over <strong>R500,000 a year</strong> in copy-paste work—and every re-keyed entry is a fresh chance for the error that costs a client.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          <div
            v-for="(stat, i) in adminStats"
            :key="stat.label"
            class="reveal-up p-6 bg-white border border-navy-900/8 text-center"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="font-serif text-3xl font-bold text-gold-500 mb-2">{{ stat.value }}</div>
            <div class="font-sans text-navy-900 text-sm font-semibold mb-1">{{ stat.label }}</div>
            <div class="font-sans text-charcoal-400 text-xs">{{ stat.detail }}</div>
          </div>
        </div>

        <!-- Contrast: the same client, two onboardings -->
        <div class="max-w-5xl mx-auto">
          <h3 class="font-serif text-display-sm text-navy-900 text-center mb-3 reveal-up">
            The same new client, onboarded two ways
          </h3>
          <p class="font-sans text-charcoal-500 text-sm text-center max-w-2xl mx-auto mb-10 reveal-up">
            One new client, through both versions of your firm.
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div class="reveal-up bg-white border border-navy-900/10 p-6 lg:p-8">
              <h4 class="font-sans font-bold text-charcoal-400 text-xs uppercase tracking-widest mb-6">Manual intake — 2 to 3 weeks</h4>
              <ul class="space-y-4">
                <li v-for="item in manualJourney" :key="item" class="flex items-start gap-3">
                  <svg class="w-4 h-4 text-red-500/70 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <span class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="reveal-up bg-white border border-gold-500/40 p-6 lg:p-8 shadow-card-hover" style="transition-delay: 120ms;">
              <h4 class="font-sans font-bold text-gold-600 text-xs uppercase tracking-widest mb-6">Integrated intake — 2 to 3 days</h4>
              <ul class="space-y-4">
                <li v-for="item in automatedJourney" :key="item" class="flex items-start gap-3">
                  <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="font-sans text-charcoal-600 text-sm leading-relaxed">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
          <p class="font-sans text-charcoal-500 text-sm text-center max-w-2xl mx-auto mt-8 reveal-up">
            Same client. Same engagement letter. A fortnight of chasing—or none.
          </p>
        </div>
      </div>
    </section>

    <!-- ══ INTEGRATIONS ══ -->
    <section class="section-padding bg-navy-900" aria-labelledby="integrations-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">Integration Ecosystem</span>
          <h2 id="integrations-heading" class="font-serif text-display-md text-white mb-4">
            Connect Your Accounting Tools<br/><em class="text-gold-400">Into One Seamless System</em>
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-white/60 text-lg leading-relaxed mt-6">
            Our <strong>CRM integration for accountants</strong> connects all the tools your practice depends on — eliminating double-entry, reducing errors, and giving you a single view of every client relationship.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="(integration, i) in integrations"
            :key="integration.category"
            class="reveal-up group"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="p-6 border border-white/10 hover:border-gold-500/50 hover:bg-white/5 transition-all duration-300 h-full">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 flex items-center justify-center bg-gold-500/10 border border-gold-500/30" aria-hidden="true">
                  <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="integration.icon"></svg>
                </div>
                <h3 class="font-sans font-semibold text-gold-400 text-xs uppercase tracking-wider">{{ integration.category }}</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tool in integration.tools"
                  :key="tool.name"
                  class="inline-flex items-center gap-2 font-sans text-xs text-white/70 bg-white/5 border border-white/10 px-2.5 py-1.5 group-hover:border-white/20 transition-colors"
                >
                  <span
                    v-if="tool.logo"
                    class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[3px] bg-white"
                    aria-hidden="true"
                  >
                    <img
                      :src="tool.logo"
                      :alt="tool.alt"
                      class="h-3.5 w-3.5 object-contain"
                      width="14"
                      height="14"
                      loading="lazy"
                    />
                  </span>
                  {{ tool.name }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ WORKFLOW AUTOMATION ══ -->
    <section class="section-padding bg-cream" aria-labelledby="automation-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-up">
            <span class="section-label">Workflow Automation</span>
            <h2 id="automation-heading" class="font-serif text-display-md text-navy-900 mb-6">
              Automate Client Intake<br/><em>for Bookkeepers &amp; Accountants</em>
            </h2>
            <div class="gold-divider mb-8"></div>
            <p class="font-sans text-charcoal-600 text-lg leading-relaxed mb-8">
              Our <strong>workflow automation for bookkeepers</strong> and accounting firms transforms the way you onboard and service clients. From the moment a prospect fills in your contact form to the moment they sign their engagement letter — the entire process can be automated.
            </p>
            <RouterLink to="/contact" class="btn-primary" aria-label="Automate your accounting firm's client intake">
              Automate My Practice
            </RouterLink>
          </div>

          <div class="space-y-4 reveal-up" style="transition-delay: 150ms;">
            <div
              v-for="(step, i) in automationSteps"
              :key="step.title"
              class="group flex items-start gap-5 p-5 bg-white border border-navy-900/8 hover:border-gold-500/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gold-500 text-navy-900" aria-hidden="true">
                <span class="font-serif font-bold text-sm">{{ i + 1 }}</span>
              </div>
              <div>
                <h3 class="font-sans font-semibold text-navy-900 text-sm mb-1 group-hover:text-gold-600 transition-colors">{{ step.title }}</h3>
                <p class="font-sans text-charcoal-400 text-sm leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CLIENT PORTAL SECTION ══ -->
    <section class="section-padding bg-navy-950" aria-labelledby="portal-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">Client Portals for Accountants</span>
          <h2 id="portal-heading" class="font-serif text-display-md text-white mb-4">
            The Best Client Portal<br/><em class="text-gold-400">for Small Accounting Firms</em>
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-white/60 text-lg leading-relaxed mt-6">
            Give clients a secure, branded portal where they can upload documents, sign agreements, make payments, and track their engagement — all from your own accounting firm website, not a third-party platform.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="(feature, i) in portalFeatures"
            :key="feature.title"
            class="reveal-up p-6 border border-white/10 hover:border-gold-500/50 hover:bg-white/5 transition-all duration-300"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="w-10 h-10 flex items-center justify-center border border-gold-500/30 bg-gold-500/10 mb-5" aria-hidden="true">
              <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="feature.icon"></svg>
            </div>
            <h3 class="font-sans font-semibold text-white text-sm mb-2">{{ feature.title }}</h3>
            <p class="font-sans text-white/40 text-sm leading-relaxed">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ FAQ ══ -->
    <section class="section-padding bg-cream" aria-labelledby="faq-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 lg:mb-16 reveal-up">
          <span class="section-label">FAQ</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            Integration questions, answered straight
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
                :aria-controls="`wf-faq-${i}`"
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
              <dd v-if="openFaq === i" :id="`wf-faq-${i}`" class="px-6 pb-6 pt-0 font-sans text-charcoal-600 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <!-- ══ RELATED SERVICES ══ -->
    <SeoRelatedGuides :slugs="pageSeo.relatedGuides" />
    <RelatedServices :exclude="['workflow']" />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import HeroBackground from '@/components/ui/HeroBackground.vue'
import RelatedServices from '@/components/ui/RelatedServices.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'
import { WORKFLOW_INTEGRATIONS } from '@/data/integration-tools'

const pageSeo = getPageSeo('workflow-integration')

const { initReveal } = useScrollReveal()
const openFaq = ref(null)
onMounted(() => setTimeout(initReveal, 50))

const faqs = [
  {
    question: 'What is the best client portal for small accounting firms?',
    answer:
      'The best client portal for small accounting firms is one that integrates with your existing tools. Zar Media Group builds custom branded client portals that connect to Xero, QuickBooks, and DocuSign — allowing clients to upload documents, sign agreements, and communicate securely, all from your own website.',
  },
  {
    question: 'How does CRM integration help accountants reduce admin?',
    answer:
      'CRM integration for accountants means that when a prospect fills in your contact form, their details automatically flow into HubSpot or Salesforce, trigger a welcome sequence, book an appointment, and create a new client record in your accounting software — without any manual steps.',
  },
  {
    question: 'Which accounting tools do you integrate with?',
    answer:
      'Accounting and practice: Xero, QuickBooks, Sage. CRM: HubSpot, Salesforce, Pipedrive, Zoho. Signatures and onboarding: DocuSign, HelloSign. Scheduling: Calendly, Microsoft Bookings. If your firm runs something else, we scope the connection during the free audit—simple routing is quick; deep two-way sync gets proper mapping and testing before go-live.',
  },
  {
    question: 'Will automation break our existing processes during rollout?',
    answer:
      'No—we never switch everything at once. Integrations go live one workflow at a time, starting with the highest-pain handoff (usually enquiry-to-CRM or document intake). Your team keeps working in the tools they know while each connection is tested with real data, and every automated handoff keeps a traceable log so you can verify it before trusting it.',
  },
  {
    question: 'Is automated client data handling POPIA-compliant?',
    answer:
      'Automation done properly improves POPIA compliance: data is captured once with consent, moved over encrypted connections, and every handoff is logged—unlike email forwarding, where copies of personal information multiply across inboxes. Every integration we build is reviewed for POPIA-conscious data handling before launch.',
  },
]

useSeoMeta({
  title: pageSeo.title,
  description: pageSeo.description,
  keywords: pageSeo.keywords,
  canonical: pageSeo.canonical,
  ogImage: '/hero-workflow-integration.png',
  ogImageAlt: 'CRM and workflow integration for accounting firms — Xero, HubSpot, and client portal automation in South Africa',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Workflow Integration', url: '/services/workflow-integration' },
    ]),
    ...SCHEMAS.servicePage({
      name: 'CRM & Workflow Integration for Accounting Firms',
      description:
        'Zar Media Group connects accounting websites to CRM systems, accounting software (Xero, QuickBooks), and client portals — automating admin and reducing manual data entry for financial professionals.',
      url: '/services/workflow-integration',
    }),
    SCHEMAS.faqPage(faqs),
  ],
})

const adminStats = [
  { value: '12h', label: 'Admin Hours Wasted', detail: 'Per week in average SA accounting firm' },
  { value: '43%', label: 'Data Re-entry Rate', detail: 'Information entered in multiple systems' },
  { value: '3.2x', label: 'Slower Onboarding', detail: 'Manual vs automated client intake' },
  { value: '70%', label: 'Admin Reduction', detail: 'Achieved by our integrated clients' },
]

const integrations = WORKFLOW_INTEGRATIONS

const manualJourney = [
  'Enquiry sits in a partner\'s inbox until Friday',
  'Details typed into a spreadsheet, re-typed into the CRM',
  'Engagement letter printed, scanned, emailed—wrong version signed first',
  'FICA documents trickle in over WhatsApp, half unusable',
  'First impression of your firm: chaos',
]

const automatedJourney = [
  'Enquiry fires straight into HubSpot; booking goes out in minutes',
  'Engagement letter and FICA pack via DocuSign the same day',
  'Documents uploaded to the portal—encrypted, logged',
  'Everything syncs to Xero automatically',
  'First impression of your firm: precision',
]

const automationSteps = [
  { title: 'Prospect fills in enquiry form', description: 'Smart forms on your accounting website capture name, services needed, and preferred contact time.' },
  { title: 'CRM record created automatically', description: 'The prospect is instantly added to HubSpot or your CRM with full context — no manual data entry.' },
  { title: 'Appointment auto-booked', description: 'Calendly integration books a consultation call and sends confirmation emails to both parties.' },
  { title: 'Onboarding documents sent', description: 'Engagement letter, ID requirements, and KYC forms are dispatched via DocuSign automatically.' },
  { title: 'Documents signed & filed', description: 'Signed documents sync to your practice management system and client file in Xero/QuickBooks.' },
  { title: 'Client portal activated', description: 'The new client receives access to their branded portal for ongoing document exchange and billing.' },
]

const portalFeatures = [
  {
    title: 'Secure Document Exchange',
    description: 'Clients upload tax documents, bank statements, and identification — directly into your encrypted client portal.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    title: 'E-Signature Integration',
    description: 'Engagement letters, service agreements, and authorities signed online — no printing, scanning, or emailing.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>',
  },
  {
    title: 'Online Invoicing & Payments',
    description: 'Clients pay invoices directly through their portal, reducing debtor days and eliminating payment chasing.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',
  },
  {
    title: 'Work Status Tracker',
    description: 'Clients see real-time status of their tax return, audit, or financial statement preparation — reducing status calls.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>',
  },
  {
    title: 'Secure Messaging',
    description: 'Compliant, encrypted client communication that replaces insecure email for sensitive financial information.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>',
  },
  {
    title: 'Xero/QuickBooks Sync',
    description: 'Portal data syncs bidirectionally with your accounting software — no re-keying, no errors, no wasted time.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  },
]
</script>
