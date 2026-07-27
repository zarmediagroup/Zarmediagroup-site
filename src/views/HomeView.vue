<template>
  <div class="home-page">

    <!-- ==================== HERO ==================== -->
    <section
      class="home-hero relative overflow-hidden bg-navy-950 pt-28 pb-10 lg:pt-36 lg:pb-14"
      aria-label="Hero"
    >
      <!-- Backdrop: faint grid + glow -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.035]" style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);"></div>
        <div class="hero-glow w-[46rem] h-[30rem] -top-52 left-1/2 -translate-x-1/2"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Announcement pill -->
          <RouterLink
            to="/services/client-portal"
            class="reveal-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs font-medium text-white/70 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true"></span>
            POPIA-conscious client portals for regulated SA firms
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </RouterLink>

          <!--
            SEO H1: Primary focus client portals for accountants; firm website managed in the same programme.
            One H1 per page — never duplicated.
          -->
          <h1 class="font-serif text-display-xl text-white mt-6 mb-5 text-balance reveal-up" style="transition-delay: 100ms;">
            Stop paying senior staff<br class="hidden sm:inline"/>
            <span class="text-gradient">to chase documents in WhatsApp</span>
          </h1>

          <p class="font-sans text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto reveal-up" style="transition-delay: 200ms;">
            A <strong class="text-white/85">POPIA-conscious client portal on your domain</strong>—encrypted uploads,
            full audit trail, firm website managed in the same programme. Less chasing. Defensible records.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 justify-center reveal-up" style="transition-delay: 300ms;">
            <RouterLink to="/contact" class="btn-primary" aria-label="Book a free compliance and intake audit for your accounting firm">
              Get a free compliance audit
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </RouterLink>
            <RouterLink to="/services/client-portal" class="btn-ghost" aria-label="See the client portal product tour">
              See the portal tour
            </RouterLink>
          </div>

          <div class="mt-7 flex items-center justify-center gap-x-5 gap-y-2 flex-wrap reveal-up" style="transition-delay: 350ms;">
            <div v-for="badge in trustBadges" :key="badge" class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-gold-500/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="font-sans text-white/45 text-xs">{{ badge }}</span>
            </div>
          </div>
        </div>

        <!-- Product screenshot in browser frame -->
        <div class="relative mt-12 lg:mt-16 max-w-5xl mx-auto reveal-up" style="transition-delay: 400ms;">
          <div class="hero-glow w-3/4 h-44 -top-16 left-1/2 -translate-x-1/2" aria-hidden="true"></div>
          <BrowserFrame url="portal.yourfirm.co.za" dark>
            <div class="relative aspect-video bg-navy-900">
              <video
                ref="platformVideo"
                class="absolute inset-0 w-full h-full object-cover object-center"
                poster="/hero-home-video-poster.png"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                aria-label="Overview of Zar Media Group POPIA-conscious client portal for accounting firms"
              >
                <source src="/hero-home-cinematic.mp4" type="video/mp4" />
              </video>
            </div>
          </BrowserFrame>
        </div>

        <!-- Integration marquee -->
        <div class="relative mt-12 lg:mt-16">
          <LogoMarquee
            :tools="homeFeaturedTools"
            label="Connects to the tools you already run"
            variant="dark"
            aria-label="Accounting software, CRM, and practice management integrations"
          />
        </div>
      </div>
    </section>

    <!-- ==================== THE OFFER ==================== -->
    <section aria-labelledby="offer-heading">
      <div class="relative py-12 md:py-20 lg:py-24 bg-navy-950 border-y border-white/5 overflow-hidden">
        <div class="absolute inset-0 pointer-events-none opacity-[0.02]" aria-hidden="true" style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 80px 80px;"></div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 lg:items-start mb-10 lg:mb-14">
            <div class="reveal-up order-2 lg:order-1 lg:pt-2">
              <span class="section-label">The offer</span>
              <h2 id="offer-heading" class="font-serif text-display-md text-white mt-4 mb-5 max-lg:text-[clamp(1.5rem,6vw,2rem)] leading-tight">
                Your portal. Your domain.<br/>
                <span class="text-gradient">One compliant programme.</span>
              </h2>
              <div class="w-16 h-px bg-gold-500/50 mb-5"></div>
              <p class="lg:hidden font-sans text-white/60 text-base leading-relaxed mb-6 max-w-md">
                Encrypted document vault, firm website, and POPIA review—managed as one stack.
              </p>
              <p class="hidden lg:block font-sans text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                Clients upload to a branded vault on your domain. Your firm website, integrations, and POPIA review run in the same programme—we host, secure, and improve it monthly.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <RouterLink to="/contact" class="btn-primary" aria-label="Book a free compliance and intake audit">
                  Get a free audit
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </RouterLink>
                <RouterLink to="/services/client-portal" class="btn-ghost" aria-label="View the client portal and document vault tour">
                  See the portal tour
                </RouterLink>
              </div>
            </div>

            <div class="order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto reveal-right">
              <div class="relative">
                <div class="hero-glow w-2/3 h-32 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true"></div>
                <BrowserFrame url="portal.yourfirm.co.za/documents" dark>
                  <img
                    src="/client-documents.png"
                    alt="Client document vault with categories and status badges"
                    class="w-full h-auto block"
                    width="1400"
                    height="900"
                    loading="lazy"
                    decoding="async"
                  />
                </BrowserFrame>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 stagger-children">
            <article
              v-for="(feature, i) in offerFeatures"
              :key="feature.title"
              class="reveal-up group p-5 lg:p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300"
              :style="{ transitionDelay: (i * 80) + 'ms' }"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors" aria-hidden="true">
                  <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="feature.icon"></svg>
                </div>
                <h3 class="font-sans font-semibold text-white text-sm tracking-wide">{{ feature.title }}</h3>
              </div>
              <p class="hidden sm:block font-sans text-white/45 text-sm leading-relaxed">{{ feature.desc }}</p>
            </article>
          </div>
        </div>
      </div>

      <div class="py-12 md:py-20 lg:py-24 bg-cream border-b border-navy-900/8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12 reveal-up">
            <div class="max-w-xl">
              <span class="section-label">Four programmes</span>
              <h2 class="font-serif text-display-sm text-navy-900 mt-4 leading-tight">
                <span class="lg:hidden">Portal, site, integrations &amp; compliance</span>
                <span class="hidden lg:inline">Portal, website, integrations &amp; compliance—one managed stack</span>
              </h2>
            </div>
            <RouterLink to="/services" class="btn-text self-start lg:self-auto shrink-0" aria-label="View all Zar Media Group services">
              All services
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </RouterLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 stagger-children">
            <div
              v-for="(service, i) in services"
              :key="service.title"
              class="reveal-up group cursor-pointer"
              :style="{ transitionDelay: (i * 100) + 'ms' }"
            >
              <RouterLink :to="service.link" class="block h-full" :aria-label="`${service.title} — ${service.description}`">
                <article class="relative h-full bg-white rounded-2xl border border-navy-900/8 p-6 lg:p-8 transition-all duration-500 hover:border-navy-900/20 hover:shadow-soft-lg group-hover:-translate-y-2 overflow-hidden">
                  <div class="absolute top-6 right-6 font-serif text-6xl font-bold text-navy-900/10 group-hover:text-gold-500/10 transition-colors" aria-hidden="true">
                    {{ String(i + 1).padStart(2, '0') }}
                  </div>
                  <div class="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/5 mb-4 lg:mb-8 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300" aria-hidden="true">
                    <svg class="w-6 h-6 text-navy-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="service.icon"></svg>
                  </div>
                  <h3 class="font-serif text-lg lg:text-xl text-navy-900 mb-2 lg:mb-4 group-hover:text-navy-900 transition-colors">{{ service.title }}</h3>
                  <p class="hidden lg:block font-sans text-charcoal-500 text-sm leading-relaxed mb-6">{{ service.description }}</p>
                  <div class="hidden lg:flex flex-wrap gap-2 mb-6">
                    <span v-for="tag in service.tags" :key="tag" class="font-sans text-xs text-charcoal-600 bg-charcoal-100 px-2.5 py-1 rounded-full border border-navy-900/8">
                      {{ tag }}
                    </span>
                  </div>
                  <div class="btn-text text-xs" aria-hidden="true">
                    Learn More
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                  <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-500 group-hover:w-full transition-all duration-500" aria-hidden="true"></div>
                </article>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SeoRelatedGuides :slugs="homeSeo.relatedGuides" />

    <!-- ==================== STATS ==================== -->
    <section class="bg-navy-950 py-10 lg:py-24 border-y border-white/5" aria-label="Key statistics">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          <StatCounter
            v-for="stat in stats"
            :key="stat.label"
            :value="stat.value"
            :label="stat.label"
            :prefix="stat.prefix"
            :suffix="stat.suffix"
            class="reveal-up lg:px-8"
          />
        </div>
      </div>
    </section>

    <!-- ==================== VALUE PROPOSITION ==================== -->
    <section class="py-10 md:py-20 lg:py-32 bg-navy-900 relative overflow-hidden" aria-labelledby="outcomes-heading">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 80px 80px;"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <div>
            <span class="section-label reveal-up hidden lg:inline">Why regulated firms switch</span>
            <h2 id="outcomes-heading" class="font-serif text-display-md text-white mb-4 lg:mb-6 reveal-up max-lg:text-[clamp(1.5rem,6vw,2rem)]" style="transition-delay: 100ms;">
              Admin hours back.<br/><em class="text-gold-400">Compliance trail intact.</em>
            </h2>
            <div class="gold-divider reveal-up hidden lg:block" style="transition-delay: 150ms;"></div>
            <p class="lg:hidden font-sans text-white/60 text-base leading-relaxed mb-6 reveal-up" style="transition-delay: 200ms;">
              POPIA-conscious portal on your domain—built to win back the hours lost to chasing, with records you can defend.
            </p>
            <p class="hidden lg:block font-sans text-white/60 text-lg leading-relaxed mb-10 reveal-up" style="transition-delay: 200ms;">
              You cannot defend a tax file built from WhatsApp forwards. We move documents and status into an encrypted portal on your own domain, running alongside the stack you already use. Most firms we speak to are losing <strong class="text-white/80">8–15 admin hours a week</strong> to the chase—the free audit counts yours.
            </p>

            <div class="space-y-4 lg:space-y-6 stagger-children">
              <div
                v-for="(point, i) in valuePoints"
                :key="point.title"
                class="flex items-start gap-4 lg:gap-5 reveal-up"
                :style="{ transitionDelay: (300 + i * 100) + 'ms' }"
              >
                <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg border border-gold-500/40 bg-gold-500/10" aria-hidden="true">
                  <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="point.icon"></svg>
                </div>
                <div>
                  <h3 class="font-sans font-semibold text-white text-sm tracking-wide mb-0 lg:mb-1">{{ point.title }}</h3>
                  <p class="hidden lg:block font-sans text-white/50 text-sm leading-relaxed">{{ point.desc }}</p>
                </div>
              </div>
            </div>

            <div class="mt-10 flex flex-wrap gap-4 reveal-up" style="transition-delay: 700ms;">
              <RouterLink to="/contact" class="btn-primary" aria-label="Book a free compliance and intake audit">
                Book my free audit
              </RouterLink>
              <RouterLink to="/services/compliance-trust" class="btn-secondary" aria-label="Read about POPIA and compliance-first website architecture">
                Compliance approach
              </RouterLink>
            </div>
          </div>

          <div class="hidden lg:block space-y-4">
            <div
              v-for="(step, i) in processSteps"
              :key="step.title"
              class="group reveal-right"
              :style="{ transitionDelay: (i * 100) + 'ms' }"
            >
              <div class="flex items-start gap-6 p-6 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 hover:bg-white/5">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center" aria-hidden="true">
                    <span class="font-serif text-gold-500 font-bold text-sm">{{ String(i + 1).padStart(2, '0') }}</span>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-sans font-semibold text-white text-sm mb-1 group-hover:text-gold-400 transition-colors">{{ step.title }}</h3>
                  <p class="font-sans text-white/40 text-sm leading-relaxed">{{ step.desc }}</p>
                </div>
                <svg class="w-5 h-5 text-white/20 group-hover:text-gold-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== CONTRAST: BEFORE / AFTER ==================== -->
    <section class="py-10 md:py-20 lg:py-28 bg-navy-950 border-y border-white/5" aria-labelledby="contrast-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <span class="section-label reveal-up hidden lg:inline">The difference</span>
          <h2 id="contrast-heading" class="font-serif text-display-md text-white mb-4 reveal-up max-lg:text-[clamp(1.5rem,6vw,2rem)]">
            Tax season without a portal.<br/><em class="text-gold-400">Tax season with one.</em>
          </h2>
          <div class="gold-divider-center reveal-up"></div>
          <p class="hidden lg:block font-sans text-white/60 text-base leading-relaxed mt-6 reveal-up">
            Same firm, same clients, same deadlines. What changes is what you can prove.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div class="reveal-up rounded-3xl rounded-3xl bg-white/[0.03] border border-white/10 p-6 lg:p-10">
            <h3 class="font-sans font-bold text-white/50 text-xs uppercase tracking-widest mb-6">
              Your firm today
            </h3>
            <ul class="space-y-4">
              <li v-for="item in contrastBefore" :key="item" class="flex items-start gap-3">
                <svg class="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <span class="font-sans text-white/55 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
            <p class="font-sans text-red-400/80 text-sm font-semibold mt-8 pt-6 border-t border-white/10">
              The bill: 8–15 admin hours a week.
            </p>
          </div>

          <div class="reveal-up rounded-3xl rounded-3xl bg-gold-500/[0.06] border border-gold-500/30 p-6 lg:p-10" style="transition-delay: 120ms;">
            <h3 class="font-sans font-bold text-gold-400 text-xs uppercase tracking-widest mb-6">
              Your firm 30 days after launch
            </h3>
            <ul class="space-y-4">
              <li v-for="item in contrastAfter" :key="item" class="flex items-start gap-3">
                <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="font-sans text-white/70 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
            <p class="font-sans text-gold-400 text-sm font-semibold mt-8 pt-6 border-t border-gold-500/20">
              The result: senior staff back on billable work.
            </p>
          </div>
        </div>

        <div class="text-center mt-10 lg:mt-12 reveal-up">
          <RouterLink to="/contact" class="btn-primary" aria-label="Book a free compliance and intake audit to see which column your firm is in">
            Find out which column you're in—free audit
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ==================== TESTIMONIALS ==================== -->
    <section class="py-10 md:py-20 lg:py-32 bg-cream" aria-labelledby="testimonials-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
          <span class="section-label reveal-up hidden lg:inline">Proof</span>
          <h2 id="testimonials-heading" class="font-serif text-display-md text-navy-900 mb-4 reveal-up max-lg:text-[clamp(1.5rem,6vw,2rem)]" style="transition-delay: 100ms;">
            <span class="lg:hidden">Proof — the honest version</span>
            <span class="hidden lg:inline">Proof — the honest version. One live practice, a guarantee, a pilot.</span>
          </h2>
          <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="(point, i) in proofPoints"
            :key="point.title"
            class="reveal-up"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="h-full bg-white rounded-2xl border border-navy-900/8 p-6 lg:p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h3 class="font-serif text-lg text-navy-900 mb-4">{{ point.title }}</h3>
              <p class="font-sans text-charcoal-600 text-sm leading-relaxed mb-6 flex-1">{{ point.body }}</p>
              <RouterLink :to="point.link" class="btn-text text-xs self-start" :aria-label="`${point.title} — learn more`">
                {{ point.footnote }}
              </RouterLink>
            </div>
          </article>
        </div>
        <p class="text-center font-sans text-charcoal-400 text-xs mt-8 reveal-up">
          We're early, and we'd rather show you exactly where we are than invent a logo wall. Our buyers audit claims for a living — so do we.
        </p>
      </div>
    </section>

    <!-- ==================== SECTOR EXPERTISE ==================== -->
    <section class="section-padding-sm bg-navy-900 border-y border-white/5" aria-labelledby="sectors-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="reveal-up">
            <span class="section-label">Who this is for</span>
            <h2 id="sectors-heading" class="font-serif text-display-sm text-white mb-4">
              Accounting. Tax. Advisory. Bookkeeping.<br/>All regulated. All require defensible records.
            </h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              v-for="sector in sectors"
              :key="sector.name"
              class="reveal-up group p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 text-center"
              :style="{ transitionDelay: sector.delay }"
            >
              <div class="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/10 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all" aria-hidden="true">
                <svg class="w-5 h-5 text-gold-500 group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="sector.icon"></svg>
              </div>
              <div class="font-sans text-white/70 text-xs font-semibold uppercase tracking-wide group-hover:text-white transition-colors">{{ sector.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== FAQ ==================== -->
    <section class="py-10 md:py-20 lg:py-32 bg-cream" aria-labelledby="faq-heading">
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-10 lg:mb-14 reveal-up">
          <span class="section-label">Questions before you book</span>
          <h2 id="faq-heading" class="font-serif text-display-md text-navy-900 mb-4">
            Straight answers—no agency fluff
          </h2>
          <div class="gold-divider-center"></div>
        </div>

        <dl class="space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal-up rounded-xl border border-navy-900/10 bg-white overflow-hidden"
            :style="{ transitionDelay: (i * 60) + 'ms' }"
          >
            <dt>
              <button
                class="w-full flex items-center justify-between gap-4 p-6 text-left font-sans font-semibold text-navy-900 text-sm hover:text-charcoal-500 transition-colors"
                :aria-expanded="openFaq === i"
                :aria-controls="`faq-answer-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span>{{ faq.question }}</span>
                <svg
                  class="w-4 h-4 flex-shrink-0 text-navy-400 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === i }"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </dt>
            <Transition name="accordion">
              <dd
                v-if="openFaq === i"
                :id="`faq-answer-${i}`"
                class="px-6 pb-6 font-sans text-charcoal-500 text-sm leading-relaxed"
              >
                {{ faq.answer }}
              </dd>
            </Transition>
          </div>
        </dl>
      </div>
    </section>

    <!-- ==================== CTA SECTION ==================== -->
    <section class="py-10 md:py-20 lg:py-32 bg-navy-900 relative overflow-hidden" aria-labelledby="cta-heading">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-gold-500/20 to-transparent"></div>
      </div>

      <div class="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span class="section-label reveal-up hidden lg:inline">Your next step</span>
        <h2 id="cta-heading" class="font-serif text-display-md text-white mb-4 lg:mb-6 reveal-up max-lg:text-[clamp(1.5rem,6vw,2rem)]" style="transition-delay: 100ms;">
          <span class="lg:hidden">Free compliance &amp; intake audit</span>
          <span class="hidden lg:inline">Free compliance &amp; intake audit—<br/><em class="text-gold-400">see where your firm stands on POPIA</em></span>
        </h2>
        <div class="gold-divider-center reveal-up hidden lg:block" style="transition-delay: 150ms;"></div>
        <p class="lg:hidden font-sans text-white/60 text-base leading-relaxed mb-8 reveal-up" style="transition-delay: 200ms;">
          30-minute call—map your intake gaps and outline a POPIA-conscious portal. No obligation.
        </p>
        <p class="hidden lg:block font-sans text-white/60 text-lg leading-relaxed mb-10 reveal-up" style="transition-delay: 200ms;">
          30 minutes. We map where documents enter your firm, flag the POPIA gaps, and cost the admin drain. And if email intake is genuinely fine for your firm, <strong class="text-white/80">we'll tell you that too</strong>. No obligation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Book a free compliance and intake audit">
            Book my free audit
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </RouterLink>
          <RouterLink to="/resources/abc-inc-chartered-accountants-website-case-study" class="btn-ghost" aria-label="See the live client build for a SAICA-registered Cape Town practice">
            See a live build
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeoMeta, SCHEMAS } from '@/composables/useSeoMeta'
import { getPageSeo } from '@/data/seo-pages'
import StatCounter from '@/components/ui/StatCounter.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'
import BrowserFrame from '@/components/ui/BrowserFrame.vue'
import LogoMarquee from '@/components/ui/LogoMarquee.vue'
import { HOME_FEATURED_TOOLS } from '@/data/integration-tools'

const { initReveal } = useScrollReveal()
const openFaq = ref(null)
const platformVideo = ref(null)

function onVideoMotionChange(event) {
  if (event.matches) {
    platformVideo.value?.pause()
  } else {
    platformVideo.value?.play().catch(() => {})
  }
}

onMounted(() => {
  setTimeout(initReveal, 50)
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (!motionQuery.matches) {
    nextTick(() => platformVideo.value?.play().catch(() => {}))
  }
  motionQuery.addEventListener('change', onVideoMotionChange)
})

onUnmounted(() => {
  window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', onVideoMotionChange)
})

// ── SEO ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: 'Is this POPIA-compliant—and what does that actually mean for my firm?',
    answer:
      'Yes. Every portal we build is reviewed for POPIA-conscious data handling before launch: where client records are stored, who can access them, how uploads are encrypted, and what audit trail exists. WhatsApp forwards and shared-drive links don\'t give you that. We also align with South African web accessibility standards, FSCA and FAIS requirements where applicable, and SAICA conduct standards. Compliance is the foundation—not a checkbox after go-live.',
  },
  {
    question: 'What exactly do I get when I work with Zar Media Group?',
    answer:
      'A POPIA-conscious client portal on your domain (encrypted uploads, compliance calendar, document audit trail), your firm website managed in the same programme, and client intake mapped to the tools you already run—no rip-and-replace. We host it, secure it, review it for compliance, and improve it monthly. You don\'t hire a dev team.',
  },
  {
    question: 'How much admin can a compliant portal save my firm?',
    answer:
      'Most practices we audit are losing 8–15 hours a week to chasing documents, re-keying data, and answering "did you get my file?" calls. The portal is built to hand those hours back while keeping a defensible record of every upload—and the free audit maps your firm\'s exact number before you commit to anything.',
  },
  {
    question: 'Why not just use Karbon, TaxDome, or another off-the-shelf portal?',
    answer:
      'Off-the-shelf tools work—but clients log into their platform, not yours, and compliance configuration varies. We build on your domain with POPIA-conscious architecture from day one, designed around your CRM and accounting workflow. You own the asset with records you can stand behind.',
  },
  {
    question: 'What happens on the free audit call?',
    answer:
      'In 30 minutes we walk through where documents enter your firm today, flag POPIA and intake compliance gaps, estimate admin hours lost, and outline what a portal on your domain would look like—including security, access controls, and timeline. No obligation.',
  },
  {
    question: 'What is a POPIA-conscious client portal?',
    answer:
      'A POPIA-conscious client portal is a secure, branded area on an accounting firm\'s own domain where clients upload documents into encrypted storage with role-based access controls and a full audit trail—so the firm can show who uploaded, accessed, or changed any file. It replaces WhatsApp forwards and email attachments, which leave personal information scattered across devices with no defensible record.',
  },
  {
    question: 'How much does a client portal and managed website cost in South Africa?',
    answer:
      'Managed firm website plans start from R2,999 per month, with the Professional plan (portal integration, CRM sync, monthly SEO and compliance monitoring) at R5,999 per month. Portal builds are scoped to your firm\'s workflow and client volume during the free audit—so you get a fixed number before committing, not an open-ended dev project.',
  },
  {
    question: 'Where in South Africa do you work—and do you work remotely?',
    answer:
      'Zar Media Group is based in Cape Town and serves accounting, tax, bookkeeping, and advisory practices across South Africa—including Johannesburg, Pretoria, Durban, and Gqeberha. Audits, builds, and monthly reviews run remotely over video, so your location never delays a launch.',
  },
]

const homeSeo = getPageSeo('home')

useSeoMeta({
  title: homeSeo.title,
  description: homeSeo.description,
  keywords: homeSeo.keywords,
  canonical: homeSeo.canonical,
  ogImage: '/hero-home-video-poster.png',
  ogImageAlt: 'POPIA-conscious client portal on your domain for South African accounting firms — compliant document intake by Zar Media Group',
  schemas: [
    SCHEMAS.localBusiness(),
    SCHEMAS.faqPage(faqs),
    SCHEMAS.videoObject({
      name: 'POPIA-Conscious Client Portal on Your Domain | Zar Media Group',
      description: 'See how South African accounting firms run compliant client intake, encrypted document vaults, and POPIA-conscious workflows from one branded portal.',
      contentUrl: '/hero-home-cinematic.mp4',
      thumbnailUrl: '/hero-home-video-poster.png',
    }),
  ],
})

// ── Data ─────────────────────────────────────────────────────────────────────
const homeFeaturedTools = HOME_FEATURED_TOOLS

const trustBadges = ['POPIA-Conscious', 'SA Accessibility', 'Encrypted Storage', 'Full Audit Trail']

const offerFeatures = [
  {
    title: 'Document vault',
    desc: 'Encrypted uploads with a full audit trail—who uploaded, when, who accessed.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    title: 'Compliance calendar',
    desc: 'PAYE and VAT reminders so tax packs arrive before deadline panic.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
  },
  {
    title: 'POPIA-conscious hosting',
    desc: 'Role-based access on your domain—built for SA accounting and tax firms.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
]

const stats = [
  { value: 14, label: 'Days from kickoff to live — or the setup fee back', prefix: '', suffix: '' },
  { value: 100, label: 'Builds POPIA-reviewed before launch', prefix: '', suffix: '%' },
  { value: 15, label: 'Admin hours a week firms lose to document chasing', prefix: 'Up to ', suffix: '' },
  { value: 5, label: 'Pilot seats open for 2026 — setup fee waived', prefix: '', suffix: '' },
]

const services = [
  {
    title: 'Client Portal & CRM',
    description:
      'POPIA-conscious portal on your domain—encrypted document vault, compliance calendar, audit trail, and CRM-connected intake. Defensible records. Clients know where to send files.',
    link: '/services/client-portal',
    tags: ['POPIA-Conscious', 'Audit Trail', 'Your Domain'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
  },
  {
    title: 'Website as a Service',
    description:
      'Your public firm site—managed, fast, built to South African web accessibility standards, and kept in sync with your compliant portal. No one-time build that decays into a compliance risk.',
    link: '/services/website-as-a-service',
    tags: ['SA Accessibility', 'Managed', 'Always Current'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  },
  {
    title: 'Workflow & Intake',
    description:
      'Client intake mapped to how your practice already works—SARS document categories, structured requests, and clean handoffs to the tools you run. Deeper integrations are scoped per firm, never promised off a logo wall.',
    link: '/services/workflow-integration',
    tags: ['Structured Intake', 'Traceable Handoffs', 'Your Stack'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  },
  {
    title: 'Compliance & Trust',
    description:
      'POPIA review, South African web accessibility standards, encrypted storage, and build reviews aligned to FSCA record-keeping expectations. Because a compliance failure costs more than any website ever will.',
    link: '/services/compliance-trust',
    tags: ['POPIA Review', 'SA Accessibility', 'FSCA-Aware'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
]

const valuePoints = [
  {
    title: 'Compliance before design',
    desc: 'POPIA, South African web accessibility standards, and FSCA/SAICA review happen first—not as a bolt-on after launch when the liability already exists.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    title: 'We only work with regulated firms',
    desc: 'No retail brands. Every workflow, encryption standard, and access control is built for accountants handling confidential financial records.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
  },
  {
    title: 'Admin hours back—with records you can defend',
    desc: 'We track documents collected without chasing, intake completed without re-keying, and hours returned to billable work—all with a full audit trail.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
  },
]

const contrastBefore = [
  'Tax packs arrive in three inboxes—zero audit trail',
  'Senior staff spend afternoons on "did you get my file?" calls',
  'Every SARS deadline is a fire drill',
  'A POPIA question means digging through inboxes',
]

const contrastAfter = [
  'Every document in one encrypted vault—logged automatically',
  'Clients see what\'s outstanding; your team stops chasing',
  'A shared calendar gets packs in before the panic',
  'Any POPIA question answered from the audit trail in minutes',
]

const processSteps = [
  { title: 'Free audit — intake & compliance gaps', desc: 'We trace where documents enter your firm today and flag POPIA, accessibility, and admin risks before proposing anything.' },
  { title: 'Compliance review & architecture', desc: 'POPIA-conscious data handling, role-based access, encryption, and South African web accessibility standards scoped before a single page is designed.' },
  { title: 'Portal & site build', desc: 'Your compliant portal on your domain, firm website in sync, intake mapped to the stack you already run.' },
  { title: 'Launch with audit trail', desc: 'Clients get one secure place to upload. Your team gets one queue—with who, what, when, logged.' },
  { title: 'Managed, secured & reviewed monthly', desc: 'We host, patch, speed-test, and re-check compliance as regulations and your practice evolve.' },
]

// Honest proof: one real deployment, one guarantee with teeth, one pilot
// offer that puts the risk on us. No invented logos, no invented quotes —
// our buyers verify claims for a living.
const proofPoints = [
  {
    title: 'Live in production',
    body: 'A-Level Business Consultants — a SAICA-registered Cape Town practice — runs its public site and secure client portal on our stack today. The full case study, with their numbers, is being written with them now.',
    footnote: 'See the build →',
    link: '/resources/abc-inc-chartered-accountants-website-case-study',
  },
  {
    title: 'A guarantee with teeth',
    body: 'Live on your domain within 14 days of kickoff, or your setup fee back. We control every step of delivery, so we can put money on it — most IT projects can\'t.',
    footnote: 'How we deliver →',
    link: '/what-we-do',
  },
  {
    title: 'The 2026 pilot cohort',
    body: 'Five firms get the setup fee waived in exchange for a written case study. After day 60, cancel with 30 days\' notice and pay nothing further. If it isn\'t working, the risk was ours.',
    footnote: 'Claim a seat →',
    link: '/contact',
  },
]

const sectors = [
  {
    name: 'Accounting',
    delay: '0ms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>',
  },
  {
    name: 'Tax Services',
    delay: '100ms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"/>',
  },
  {
    name: 'Financial Advisory',
    delay: '200ms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>',
  },
  {
    name: 'Bookkeeping',
    delay: '300ms',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
  },
]
</script>
