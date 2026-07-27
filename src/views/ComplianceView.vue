<template>
  <div class="compliance-page">

    <!-- ══ HERO ══ -->
    <section class="relative flex items-center bg-navy-900 overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-24" aria-label="Compliance service hero">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.035]" style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);"></div>
        <div class="hero-glow w-[40rem] h-[26rem] -top-40 left-1/2 -translate-x-1/2"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav :crumbs="[
          { label: 'Services', path: '/services' },
          { label: 'Compliance & Trust', path: '/services/compliance-trust' }
        ]" />

        <span class="section-label reveal-up">Service — Compliant Digital Presence for Regulated Industries</span>
        <h1 class="font-serif text-display-lg text-white mt-4 mb-6 max-w-3xl reveal-up" style="transition-delay: 100ms;">
          Compliant Website Design<br/>
          <span class="text-gradient">for Financial Services</span>
        </h1>
        <p class="font-sans text-white/60 text-lg max-w-2xl leading-relaxed reveal-up" style="transition-delay: 200ms;">
          Your website collects names, ID numbers, and financial records right now. If you can't say where that data goes, <strong class="text-white/80">the liability already exists</strong>. Every build is reviewed against POPIA, FSCA, FAIS, SAICA, and SA accessibility standards—before launch and as the rules evolve.
        </p>
        <div class="gold-divider mt-8 reveal-up" style="transition-delay: 250ms;"></div>

        <div class="flex flex-col sm:flex-row gap-4 mt-10 reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Get a compliance audit for your accounting firm website">
            Request Compliance Audit
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
          <RouterLink to="/resources" class="btn-ghost" aria-label="Read our compliance guides for accountants">
            Compliance Resources
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ══ REGULATIONS OVERVIEW ══ -->
    <section class="section-padding bg-cream" aria-labelledby="regulations-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-14 reveal-up">
          <span class="section-label">Regulatory Framework</span>
          <h2 id="regulations-heading" class="font-serif text-display-md text-navy-900 mb-6">
            Compliant Digital Presence<br/><em>for Every Regulation That Matters</em>
          </h2>
          <div class="gold-divider mb-8"></div>
          <p class="font-sans text-charcoal-600 text-lg leading-relaxed">
            Regulated industries like accounting, financial advisory, and tax services cannot afford compliance gaps online. A poorly built accounting firm website can create POPIA violations, Information Regulator complaints, accessibility failures, and FSCA sanctions — before you've served a single client through it.
          </p>
          <p class="font-sans text-charcoal-600 text-base leading-relaxed mt-4">
            POPIA fines reach R10 million, but the real cost is the review you can't recover from: <em>"they mishandled my data."</em> The fix isn't a footer disclaimer—it's architecture. <strong>We design compliance in before the first page is styled, then review it monthly.</strong>
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="(regulation, i) in regulations"
            :key="regulation.name"
            class="reveal-up p-7 bg-white rounded-2xl border border-navy-900/8 hover:border-gold-500/50 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-10 flex items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/5 flex-shrink-0" aria-hidden="true">
                <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="regulation.icon"></svg>
              </div>
              <div>
                <div class="font-sans font-bold text-navy-900 text-sm">{{ regulation.name }}</div>
                <div class="font-sans text-charcoal-600 text-xs">{{ regulation.scope }}</div>
              </div>
            </div>
            <p class="font-sans text-charcoal-500 text-sm leading-relaxed mb-4">{{ regulation.description }}</p>
            <ul class="space-y-1.5">
              <li
                v-for="req in regulation.requirements"
                :key="req"
                class="flex items-center gap-2 text-charcoal-400 text-xs font-sans"
              >
                <svg class="w-3 h-3 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ req }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ══ COMPLIANCE CHECKLIST ══ -->
    <section class="section-padding bg-navy-900" aria-labelledby="checklist-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div class="reveal-up">
            <span class="section-label">Compliance Checklist</span>
            <h2 id="checklist-heading" class="font-serif text-display-md text-white mb-6">
              Is Your Financial Services<br/><em class="text-gold-400">Website Truly Compliant?</em>
            </h2>
            <div class="gold-divider mb-8"></div>
            <p class="font-sans text-white/60 text-lg leading-relaxed mb-8">
              Most accounting firm websites fail at least half of these compliance requirements. Our free audit identifies every gap and gives you a prioritised remediation plan.
            </p>
            <RouterLink to="/contact" class="btn-secondary" aria-label="Get a free compliance audit for your financial services website">
              Get Free Audit
            </RouterLink>
          </div>

          <div class="space-y-3 reveal-up" style="transition-delay: 150ms;">
            <div
              v-for="item in complianceChecklist"
              :key="item.check"
              class="flex items-start gap-4 p-4 rounded-xl border transition-all duration-200"
              :class="item.common
                ? 'border-red-500/20 bg-red-500/5'
                : 'border-white/10 hover:border-white/20'"
            >
              <div
                class="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5 border"
                :class="item.common ? 'border-red-500 bg-red-500/20' : 'border-gold-500 bg-gold-500/10'"
                aria-hidden="true"
              >
                <svg v-if="item.common" class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <svg v-else class="w-3 h-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <p class="font-sans text-white/80 text-sm">{{ item.check }}</p>
                <p v-if="item.common" class="font-sans text-red-400 text-xs mt-1">⚠ Commonly failed by accounting firm websites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SECURITY CERTIFICATIONS ══ -->
    <section class="section-padding bg-cream" aria-labelledby="security-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 reveal-up">
          <span class="section-label">Security Standards</span>
          <h2 id="security-heading" class="font-serif text-display-md text-navy-900 mb-4">
            Enterprise-Grade Security<br/><em>for Financial Websites</em>
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          <div
            v-for="(cert, i) in securityCerts"
            :key="cert.name"
            class="reveal-up p-6 bg-white rounded-2xl border border-navy-900/8 text-center hover:border-gold-500/50 transition-all duration-300"
            :style="{ transitionDelay: (i * 80) + 'ms' }"
          >
            <div class="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/5" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="cert.icon"></svg>
            </div>
            <div class="font-sans font-bold text-navy-900 text-xs uppercase tracking-wide">{{ cert.name }}</div>
            <div class="font-sans text-charcoal-400 text-xs mt-1">{{ cert.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CONTRAST: BOLT-ON VS BUILT-IN ══ -->
    <section class="section-padding bg-navy-950 border-y border-white/5" aria-labelledby="contrast-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16 reveal-up">
          <span class="section-label">Two ways firms handle compliance</span>
          <h2 id="contrast-heading" class="font-serif text-display-md text-white mt-4 mb-4">
            Bolted on after launch vs <em class="text-gold-400">built in from day one</em>
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div class="reveal-up rounded-3xl bg-white/[0.03] border border-white/10 p-6 lg:p-10">
            <h3 class="font-sans font-bold text-white/50 text-xs uppercase tracking-widest mb-6">Compliance as an afterthought</h3>
            <ul class="space-y-4">
              <li v-for="item in contrastBoltOn" :key="item" class="flex items-start gap-3">
                <svg class="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <span class="font-sans text-white/55 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="reveal-up rounded-3xl bg-gold-500/[0.06] border border-gold-500/30 p-6 lg:p-10" style="transition-delay: 120ms;">
            <h3 class="font-sans font-bold text-gold-400 text-xs uppercase tracking-widest mb-6">Compliance-first architecture</h3>
            <ul class="space-y-4">
              <li v-for="item in contrastBuiltIn" :key="item" class="flex items-start gap-3">
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

    <!-- ══ FAQ ══ -->
    <section class="section-padding bg-cream" aria-labelledby="faq-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 lg:mb-16 reveal-up">
          <span class="section-label">FAQ</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            Compliance questions firms ask us
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
      </div>
    </section>

    <!-- ══ RELATED SERVICES ══ -->
    <SeoRelatedGuides :slugs="pageSeo.relatedGuides" />
    <RelatedServices :exclude="['compliance']" />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav.vue'
import RelatedServices from '@/components/ui/RelatedServices.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'

const pageSeo = getPageSeo('compliance-trust')

const { initReveal } = useScrollReveal()
const openFaq = ref(null)
onMounted(() => setTimeout(initReveal, 50))

const faqs = [
  {
    question: 'What compliance regulations apply to accounting firm websites in South Africa?',
    answer:
      'Accounting firm websites in South Africa must comply with POPIA (Protection of Personal Information Act) for data collection, PAIA for information access requests, South African web accessibility standards for inclusive access, and relevant FSCA (Financial Sector Conduct Authority) and FAIS Act requirements for firms that provide financial advice.',
  },
  {
    question: 'What does a compliant digital presence mean for regulated industries?',
    answer:
      'A compliant digital presence for South African regulated industries means your website handles client data according to POPIA, is accessible under South African web accessibility standards, displays required FSCA and FAIS disclosures, uses secure data collection forms, and has appropriate POPIA-compliant cookie consent mechanisms.',
  },
  {
    question: 'What can happen if our firm website is not POPIA-compliant?',
    answer:
      'POPIA provides for administrative fines of up to R10 million for serious contraventions, and the Information Regulator can investigate complaints from any client. In practice the earlier costs are reputational: a complaint means producing records of how personal information was collected and handled—records most firms relying on email and WhatsApp intake cannot produce.',
  },
  {
    question: 'Is a privacy policy and cookie banner enough to make our website compliant?',
    answer:
      'No. A policy describes what you do—compliance is what the site actually does. If your forms over-collect, your uploads are unencrypted, or third-party scripts fire before consent, a well-written policy just documents the gap. We fix the architecture first (encryption, access controls, minimal data collection, audit logging), then make sure the disclosures match reality.',
  },
  {
    question: 'Do you provide legal advice on POPIA and FSCA compliance?',
    answer:
      'No—we implement the technical and structural side: secure data handling, consent mechanisms, disclosures, accessibility, and audit trails. Your legal and compliance advisers sign off on policy content; we make sure the website behaves the way the policy says it does. Where a firm has no adviser, we work from published regulator guidance and flag anything that needs a legal opinion.',
  },
]

useSeoMeta({
  title: pageSeo.title,
  description: pageSeo.description,
  keywords: pageSeo.keywords,
  canonical: pageSeo.canonical,
  ogImage: '/compliance-data-protection-financial-services.png',
  ogImageAlt: 'Legal compliance and data protection for financial services websites — POPIA, FSCA, and regulatory trust in South Africa',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Compliance & Trust', url: '/services/compliance-trust' },
    ]),
    ...SCHEMAS.servicePage({
      name: 'Compliant Website Design for Financial Services',
      description:
        'Purpose-built compliant digital presence for South African regulated industries. Every website reviewed against POPIA, FSCA, FAIS, SAICA standards, and South African web accessibility requirements.',
      url: '/services/compliance-trust',
    }),
    SCHEMAS.faqPage(faqs),
  ],
})

const contrastBoltOn = [
  'Privacy policy copied from someone else\'s template',
  'Scripts fire before anyone consents',
  'Forms collect ID numbers "just in case"',
  'When the Regulator asks, history is reconstructed from memory',
]

const contrastBuiltIn = [
  'Data flows mapped before design starts',
  'Consent captured before non-essential scripts load',
  'Forms collect only what the engagement needs',
  'When anyone asks, the answer is an audit-trail export',
]

const regulations = [
  {
    name: 'POPIA',
    scope: 'South Africa — Mandatory',
    description: 'The Protection of Personal Information Act governs how accounting firms collect, store, and process client data on their websites.',
    requirements: ['Lawful data processing basis', 'Privacy policy requirements', 'Cookie consent mechanisms', 'Data breach notification'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>',
  },
  {
    name: 'PAIA',
    scope: 'South Africa — Mandatory',
    description: 'The Promotion of Access to Information Act gives clients the right to request access to personal information your firm holds—with clear procedures published on your website.',
    requirements: ['Published PAIA manual or access procedure', 'Information Officer contact details', 'Documented response timeframes', 'Reasonable access request process'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
  },
  {
    name: 'Web Accessibility',
    scope: 'South Africa — Required',
    description: 'South African web accessibility standards ensure your accounting website is usable by clients with visual, hearing, motor, or cognitive impairments—aligned with government web guidelines and equality law.',
    requirements: ['Keyboard navigation support', 'Screen reader compatibility', 'Sufficient colour contrast', 'Alt text on all images'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>',
  },
  {
    name: 'FSCA Requirements',
    scope: 'South Africa — Financial Advisors',
    description: 'Financial Sector Conduct Authority guidelines mandate specific disclosures and licensing information on financial services websites.',
    requirements: ['FSP licence number display', 'Regulatory disclosures', 'Complaint process information', 'FAIS Act compliance'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
  },
  {
    name: 'SAICA Standards',
    scope: 'South Africa — CA Firms',
    description: 'South African Institute of Chartered Accountants membership requires specific conduct standards reflected in how CA firms present themselves online.',
    requirements: ['Professional conduct standards', 'Accurate qualifications display', 'Avoiding misleading claims', 'Testimonial guidelines'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>',
  },
  {
    name: 'SSL & Data Security',
    scope: 'South Africa — Mandatory',
    description: 'TLS 1.3 encryption, secure contact forms, and data-at-rest encryption for any financial information processed through your website—meeting South African financial-sector security expectations.',
    requirements: ['TLS 1.3 SSL certificate', 'Encrypted data transmission', 'Secure form handling', 'Secure payment processing'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
]

const complianceChecklist = [
  { check: 'Privacy policy accurately describes all data collection activities', common: false },
  { check: 'Cookie consent banner with granular opt-in/opt-out controls', common: true },
  { check: 'Contact forms collect only data that is necessary (POPIA minimum data principle)', common: true },
  { check: 'All images have descriptive alt text (South African web accessibility standards)', common: true },
  { check: 'Website passes keyboard-only navigation test', common: true },
  { check: 'Colour contrast ratio meets South African web accessibility standards (4.5:1 for normal text)', common: false },
  { check: 'FSCA licence number prominently displayed (for financial advisors)', common: false },
  { check: 'SSL certificate active and enforced (HTTPS everywhere)', common: false },
  { check: 'Data breach response process documented and accessible', common: true },
  { check: 'Third-party scripts (analytics, chat) included in cookie disclosure', common: true },
]

const securityCerts = [
  {
    name: 'SSL/TLS',
    description: 'TLS 1.3 encryption on all pages',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    name: 'DDoS Protection',
    description: 'Enterprise-grade attack mitigation',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    name: 'Daily Backups',
    description: 'Automated off-site backups',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>',
  },
  {
    name: 'WAF',
    description: 'Web Application Firewall active',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
]
</script>
