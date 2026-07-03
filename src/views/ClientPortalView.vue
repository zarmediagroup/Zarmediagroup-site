<template>
  <div class="client-portal-page">
    <section
      class="relative min-h-[72vh] flex items-center bg-navy-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
      aria-label="Client document portal for accountants"
    >
      <HeroBackground
        src="/client-dashboard.png"
        overlay-class="bg-gradient-to-r from-navy-900/95 via-navy-900/88 to-navy-900/70"
        image-opacity="opacity-35"
        image-position="object-right object-center"
        :corners="false"
      />
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <BreadcrumbNav
          :crumbs="[
            { label: 'Home', path: '/' },
            { label: 'Services', path: '/services' },
            { label: 'Client portal & CRM', path: '/services/client-portal' },
          ]"
        />

        <span class="section-label reveal-up">Client portal &amp; CRM for SA accounting firms</span>
        <h1 class="font-serif text-display-lg text-white mt-6 mb-8 max-w-4xl reveal-up" style="transition-delay: 100ms;">
          Stop losing tax packs in<br />
          <span class="text-gradient">WhatsApp and email threads</span>
        </h1>
        <p class="font-sans text-white/65 text-base sm:text-lg max-w-2xl leading-relaxed reveal-up mb-6" style="transition-delay: 200ms;">
          Every season, the same drain: attachments in three inboxes, clients asking “did you get it?”, and your team chasing files instead of doing the work.
          This portal puts uploads, compliance deadlines, and document status on <strong class="text-white/90">your domain, under your brand</strong>.
        </p>
        <p class="font-sans text-white/55 text-sm sm:text-base max-w-2xl leading-relaxed reveal-up mb-8" style="transition-delay: 210ms;">
          Clients know exactly where to send PAYE, VAT, and bank statements. Your staff work one queue—with a clear audit trail.
        </p>
        <p
          class="font-sans text-white/50 text-xs sm:text-sm max-w-2xl leading-relaxed mb-10 pl-4 border-l-2 border-gold-500/60 reveal-up"
          style="transition-delay: 220ms;"
          role="note"
        >
          <strong class="text-white/80">Demo screenshots below.</strong> Every firm, client, and file shown is fictional—we use demo data so you can judge the workflow without exposing real matters.
        </p>
        <div class="gold-divider reveal-up" style="transition-delay: 250ms;"></div>
        <div class="flex flex-col sm:flex-row gap-4 mt-12 reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Book a walkthrough of the client portal on your domain">
            Book a walkthrough
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RouterLink>
          <RouterLink to="/services/workflow-integration" class="btn-ghost" aria-label="Read about CRM and workflow integration for accountants">
            CRM &amp; integrations
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Portals & CRM positioning -->
    <section class="section-padding bg-cream border-b border-navy-900/8" aria-labelledby="definitions-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-12 reveal-up">
          <span class="section-label">What you get</span>
          <h2 id="definitions-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            Accounting portal and client-facing CRM—on your domain
          </h2>
          <div class="gold-divider"></div>
          <p class="font-sans text-charcoal-600 text-base leading-relaxed mt-8">
            We build the secure client-facing layer—uploads, compliance, intake—and connect it to HubSpot, Xero, QuickBooks, and DocuSign. Your team keeps working in the tools you already use.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <article
            v-for="(block, i) in definitionBlocks"
            :key="block.title"
            class="reveal-up p-8 bg-white border border-navy-900/8"
            :style="{ transitionDelay: i * 80 + 'ms' }"
          >
            <h3 class="font-serif text-xl text-navy-900 mb-3">{{ block.title }}</h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed m-0">{{ block.body }}</p>
          </article>
        </div>

        <div class="reveal-up grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start p-8 lg:p-10 bg-navy-900 border border-white/10">
          <div>
            <span class="section-label">POPIA-conscious by design</span>
            <p class="font-sans text-white/65 text-sm leading-relaxed mt-4 m-0">
              Encrypted uploads, access controls, audit-friendly workflows, and clear consent—aligned with our
              <RouterLink to="/services/compliance-trust" class="text-gold-400 hover:underline">Compliance &amp; Trust</RouterLink>
              approach for financial services websites.
            </p>
            <ul class="font-sans text-white/50 text-sm space-y-2 list-disc pl-5 mt-5 mb-0">
              <li>Structured document exchange for tax and audit season</li>
              <li>Engagement letters and KYC via e-signature, synced to your stack</li>
              <li>Delivered through <RouterLink to="/services/website-as-a-service" class="text-gold-400 hover:underline">Website as a Service</RouterLink>—portal and firm site in one programme</li>
            </ul>
          </div>
          <div class="font-sans text-white/70 text-sm leading-relaxed border-t border-white/10 lg:border-t-0 lg:border-l lg:pl-10 pt-8 lg:pt-0">
            <p class="mb-4 m-0">
              <strong class="text-white">Client-facing CRM</strong> in our projects means prospects and clients interact through your website—forms, booking, portal, email automation—while your team works in HubSpot, Salesforce, or Zoho. We connect the edges; CRM stays the source of truth.
            </p>
            <p class="m-0">
              We are not a CRM vendor. We <strong class="text-white">integrate and implement</strong> the client-facing side for SA accounting firms.
              <RouterLink to="/services/workflow-integration" class="text-gold-400 hover:underline ml-1">See workflow integration →</RouterLink>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots -->
    <section class="section-padding bg-white border-b border-navy-900/8" aria-labelledby="screens-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20 reveal-up">
          <span class="section-label">The actual product</span>
          <h2 id="screens-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            The screens your clients and staff use every day
          </h2>
          <div class="gold-divider-center"></div>
          <p class="font-sans text-charcoal-600 text-sm mt-8 leading-relaxed">
            Seven views below—four for clients, three for your admin team. Not a slide deck. The interface you brand and ship on your own domain.
          </p>
        </div>

        <div class="space-y-16 lg:space-y-20">
          <div>
            <h3 class="font-sans text-[11px] font-bold uppercase tracking-widest text-gold-600 mb-8 lg:mb-10 text-center">
              Client experience
            </h3>
            <div class="space-y-20 lg:space-y-28">
              <figure
                v-for="(shot, i) in clientScreenshots"
                :key="shot.anchor"
                class="reveal-up scroll-mt-28"
                :id="shot.anchor"
                :style="{ transitionDelay: i * 40 + 'ms' }"
              >
                <figcaption class="mb-5 lg:mb-6 space-y-1">
                  <span class="sr-only">Screenshot: </span>
                  <h4 class="font-sans font-semibold text-navy-900 text-base m-0">{{ shot.title }}</h4>
                  <p class="font-sans text-charcoal-500 text-sm m-0 max-w-2xl">{{ shot.caption }}</p>
                </figcaption>
                <div class="rounded-none border border-navy-900/15 bg-navy-950/5 shadow-card-hover overflow-hidden max-w-6xl mx-auto">
                  <img
                    :src="shot.src"
                    :alt="shot.alt"
                    class="w-full h-auto block object-top object-contain bg-[#f5f2eb]"
                    :loading="i === 0 ? 'eager' : 'lazy'"
                    :fetchpriority="i === 0 ? 'high' : undefined"
                    decoding="async"
                    width="1400"
                    height="900"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div>
            <h3 class="font-sans text-[11px] font-bold uppercase tracking-widest text-gold-600 mb-8 lg:mb-10 text-center">
              Admin experience
            </h3>
            <div class="space-y-20 lg:space-y-28">
              <figure
                v-for="(shot, i) in adminScreenshots"
                :key="shot.anchor"
                class="reveal-up scroll-mt-28"
                :id="shot.anchor"
                :style="{ transitionDelay: i * 40 + 'ms' }"
              >
                <figcaption class="mb-5 lg:mb-6 space-y-1">
                  <span class="sr-only">Screenshot: </span>
                  <h4 class="font-sans font-semibold text-navy-900 text-base m-0">{{ shot.title }}</h4>
                  <p class="font-sans text-charcoal-500 text-sm m-0 max-w-2xl">{{ shot.caption }}</p>
                </figcaption>
                <div class="rounded-none border border-navy-900/15 bg-navy-950/5 shadow-card-hover overflow-hidden max-w-6xl mx-auto">
                  <img
                    :src="shot.src"
                    :alt="shot.alt"
                    class="w-full h-auto block object-top object-contain bg-[#f5f2eb]"
                    loading="lazy"
                    decoding="async"
                    width="1400"
                    height="900"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How admin portal works -->
    <section class="section-padding bg-cream border-b border-navy-900/8" aria-labelledby="how-admin-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-16 lg:mb-20 reveal-up">
          <span class="section-label">How it works</span>
          <h2 id="how-admin-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">
            Six steps from client upload to firm-wide review
          </h2>
          <div class="gold-divider"></div>
          <p class="font-sans text-charcoal-600 text-base leading-relaxed mt-8">
            Here is exactly how a document moves through the portal—so you can picture your own workflow before we configure categories, statuses, and branding.
          </p>
        </div>

        <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 stagger-children list-none p-0 m-0">
          <li
            v-for="(step, i) in adminSteps"
            :key="step.title"
            class="reveal-up bg-white border border-navy-900/10 p-8 lg:p-10 flex flex-col gap-3"
            :style="{ transitionDelay: i * 80 + 'ms' }"
          >
            <span class="font-serif text-gold-600 text-base font-bold">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="font-sans font-semibold text-navy-900 text-base m-0">{{ step.title }}</h3>
            <p class="font-sans text-charcoal-600 text-sm leading-relaxed m-0 flex-1">{{ step.body }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Client vs admin note -->
    <section class="section-padding bg-navy-900 border-y border-white/5" aria-labelledby="roles-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div class="reveal-up space-y-4">
          <span class="section-label">For your clients</span>
          <h2 id="roles-heading" class="font-serif text-display-sm text-white m-0">
            They stop guessing where to send files
          </h2>
          <p class="font-sans text-white/60 text-sm leading-relaxed m-0 max-w-md">
            One login. Your logo. A dashboard that tells them what you need and when—without cc'ing three people on a zip file or a blurry WhatsApp photo.
          </p>
        </div>
        <div class="reveal-up space-y-4">
          <span class="section-label">For your team</span>
          <h2 class="font-serif text-display-sm text-white m-0">
            You stop rebuilding history from inboxes
          </h2>
          <p class="font-sans text-white/60 text-sm leading-relaxed m-0 max-w-md">
            One admin console: invites, cross-client queues, status updates, and audit trail—so tax season feels controlled, not reactive.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding bg-cream" aria-labelledby="faq-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 lg:mb-16 reveal-up">
          <span class="section-label">FAQ</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mt-4 mb-6">Questions firm principals ask us</h2>
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
                :aria-controls="`cp-faq-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span class="pr-2">{{ faq.question }}</span>
                <svg
                  class="w-5 h-5 flex-shrink-0 text-navy-400 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === i }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </dt>
            <Transition name="accordion">
              <dd v-if="openFaq === i" :id="`cp-faq-${i}`" class="px-6 pb-6 pt-0 font-sans text-charcoal-600 text-sm leading-relaxed">
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <section class="section-padding bg-navy-900" aria-labelledby="cta-heading">
      <div class="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <h2 id="cta-heading" class="font-serif text-display-md text-white mb-6 reveal-up">
          Picture this on your domain
        </h2>
        <p class="font-sans text-white/60 text-base mb-4 reveal-up" style="transition-delay: 80ms;">
          Scroll the screens above. Then book a walkthrough—we show you branding, POPIA-conscious workflows, and how this ships as Website as a Service or a dedicated portal build.
        </p>
        <p class="font-sans text-white/45 text-sm mb-12 reveal-up" style="transition-delay: 100ms;">
          No obligation. Twenty minutes. You leave knowing whether this fits your firm.
        </p>
        <RouterLink to="/contact" class="btn-primary reveal-up" style="transition-delay: 120ms;" aria-label="Book a client portal walkthrough with Zar Media Group">
          Book my walkthrough
        </RouterLink>
      </div>
    </section>

    <SeoRelatedGuides :slugs="pageSeo.relatedGuides" />
    <RelatedServices :exclude="['client-portal']" />
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

const pageSeo = getPageSeo('client-portal')

const { initReveal } = useScrollReveal()
const openFaq = ref(null)

onMounted(() => setTimeout(initReveal, 50))

const definitionBlocks = [
  {
    title: 'Accounting portal',
    body:
      'The secure, branded area on your site where clients upload PAYE, VAT, and bank statements, track requests, and see status—without email attachments or WhatsApp threads.',
  },
  {
    title: 'Client-facing CRM',
    body:
      'Prospects and clients trigger the right automations from your website: enquiry capture, nurture, meeting booking, and handoff to onboarding—visible as one smooth journey on your domain.',
  },
]

const adminSteps = [
  {
    title: 'Client dashboard',
    body: 'Your client logs in and sees KPIs and alerts first—the gaps you used to explain on a follow-up call.',
  },
  {
    title: 'Document uploads',
    body: 'They upload into categories you define. Each file gets a status your team controls from admin.',
  },
  {
    title: 'Compliance calendar',
    body: 'SARS and statutory deadlines in one shared calendar—client and firm see the same dates, the same urgency.',
  },
  {
    title: 'Admin overview',
    body: 'Your team opens one screen: new uploads overnight, items under review, and what needs a partner sign-off.',
  },
  {
    title: 'Client management',
    body: 'Search the roster, send an invite in minutes, open any client workspace—document counts included.',
  },
  {
    title: 'Cross-client documents',
    body: 'The firm register: filter by client, category, tax year, or status. Update and act without switching tabs.',
  },
]

const clientScreenshots = [
  {
    anchor: 'client-dashboard',
    src: '/client-dashboard.png',
    title: 'Client dashboard',
    caption: 'One screen shows what is overdue, what is at risk, and what you still need—before you send a reminder.',
    alt: 'Client portal dashboard with document KPIs, alerts, and compliance preview',
  },
  {
    anchor: 'client-documents',
    src: '/client-documents.png',
    title: 'Client documents',
    caption: 'PAYE, VAT, bank statements, AFS—each in its lane. Status badges end the “did you get my email?” loop.',
    alt: 'Client document vault with filters and status badges',
  },
  {
    anchor: 'client-compliance',
    src: '/client-compliance.png',
    title: 'Client compliance',
    caption: 'SARS and statutory dates in one calendar. Your client sees the deadline; your team sees the same date in admin.',
    alt: 'Compliance calendar with statutory deadlines',
  },
  {
    anchor: 'client-notifications',
    src: '/client-notifications.png',
    title: 'Client notifications',
    caption: 'Alerts when files land, statuses change, or reviews complete—inside the portal, not buried in inbox noise.',
    alt: 'Notification centre for document and status alerts',
  },
]

const adminScreenshots = [
  {
    anchor: 'admin-overview',
    src: '/admin-overview.png',
    title: 'Admin overview',
    caption: 'One morning view: everything pending across the firm, who uploaded overnight, and what needs action today.',
    alt: 'Practice admin overview with firm-wide activity',
  },
  {
    anchor: 'admin-clients',
    src: '/admin-clients.png',
    title: 'Client management',
    caption: 'Invite a client in minutes. Profile, services, and document count—without opening six tabs.',
    alt: 'Client management with invites and document counts',
  },
  {
    anchor: 'admin-documents',
    src: '/admin-documents.png',
    title: 'Document register',
    caption: 'Every client, every category, every year—filter the register and update status on the spot.',
    alt: 'Cross-client document register with filters',
  },
]

const faqs = [
  {
    question: 'Do we need a separate website—or will clients trust the login?',
    answer:
      'The portal runs on your domain, beside your firm website—not a generic SaaS URL clients do not recognise. Same POPIA-conscious architecture as your managed presence. Clients log in at yourfirm.co.za. CRM and workflow links plug in when you are ready.',
  },
  {
    question: 'Can document statuses match how we already work internally?',
    answer:
      'Yes—and we insist on it. During implementation we map labels to your workflow: Received, Under Review, With Partner, Processed, or whatever your team already uses. The portal should mirror your process, not force a template.',
  },
  {
    question: 'Will clients still email and WhatsApp documents anyway?',
    answer:
      'Some will—until you train them once. The portal gives you a better default: structured upload, visible status, audit history. You cut POPIA risk from ad-hoc attachments and stop the “please resend” loop. Email stays for conversation; documents live in the vault.',
  },
  {
    question: 'Is this built for South African tax and accounting—not a US product localised?',
    answer:
      'Built around how SA practices actually work: PAYE, VAT, EMP501, bank statements, management accounts, AFS. Categories and labels are configured for your firm—not a foreign template with Rand bolted on.',
  },
  {
    question: 'Do you sell a standalone CRM system for accountants?',
    answer:
      'No. We build the client-facing portal and integrate with the CRM and accounting tools you already use—or help you choose them—so enquiry-to-client workflows run end-to-end without duplicate records.',
  },
  {
    question: 'How is this different from off-the-shelf client portal software?',
    answer:
      'Off-the-shelf products solve one piece. We brand the portal on your domain, connect it to your stack, and maintain your firm website in the same programme—so the experience matches how your practice actually works.',
  },
]

const primaryOgImage = '/client-dashboard.png'

useSeoMeta({
  title: pageSeo.title,
  description: pageSeo.description,
  keywords: pageSeo.keywords,
  canonical: pageSeo.canonical,
  ogImage: primaryOgImage,
  ogImageAlt: 'Accounting client portal product tour — stop losing tax documents in WhatsApp and email; firm admin console for South African practices — Zar Media Group',
  schemas: [
    SCHEMAS.breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Client portal & CRM for accountants', url: '/services/client-portal' },
    ]),
    ...SCHEMAS.servicePage({
      name: 'Client Portal & CRM for Accountants — South Africa',
      description:
        'Branded client portal and CRM-connected intake for SA accounting firms—document vault, compliance calendar, admin console, and integrations with Xero, HubSpot, and DocuSign.',
      url: '/services/client-portal',
      image: primaryOgImage,
    }),
    SCHEMAS.faqPage(faqs),
  ],
})
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
