<template>
  <div class="home-page">

    <!-- ==================== HERO ==================== -->
    <section
      class="home-hero relative overflow-hidden bg-navy-900 pt-28 pb-8 lg:min-h-svh lg:max-h-svh lg:flex lg:flex-col lg:justify-center lg:pt-32 lg:pb-6"
      aria-label="Hero"
    >
      <HeroBackground
        src="/hero-home-video-poster.png"
        overlay-class="bg-gradient-to-r from-navy-900/93 via-navy-900/78 to-navy-900/30"
        image-opacity="opacity-50"
        image-position="object-center"
        priority="high"
        :corners="false"
      >
        <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl"></div>
        <div class="absolute top-1/3 left-[12%] w-48 h-48 rounded-full bg-gold-500/5 blur-3xl animate-float hidden lg:block"></div>
      </HeroBackground>

      <div class="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 lg:items-center gap-6 lg:gap-8">
          <div class="hero-content lg:col-span-12 xl:col-span-7 max-w-xl relative z-10 lg:pr-4">
          <div class="reveal-up hidden lg:block">
            <span class="section-label lg:text-[0.65rem] lg:tracking-[0.18em]">POPIA-conscious client portals · Built for regulated SA firms</span>
            <div class="gold-divider lg:mt-3 lg:mb-3"></div>
          </div>

          <!--
            SEO H1: Primary focus client portals for accountants; firm website managed in the same programme.
            One H1 per page — never duplicated.
          -->
          <h1 class="font-serif text-display-lg text-white mb-3 lg:mb-3 leading-tight max-lg:text-[clamp(1.75rem,7.5vw,2.35rem)] lg:text-[clamp(2rem,3.1vw,3.15rem)] reveal-up" style="transition-delay: 100ms;">
            Stop Paying Senior Staff<br class="hidden sm:inline"/>
            <span class="text-gradient">to Chase Documents in WhatsApp</span>
          </h1>

          <p class="lg:hidden font-sans text-white/60 text-base leading-relaxed mb-5 max-w-lg reveal-up" style="transition-delay: 200ms;">
            POPIA-conscious portal on your domain—encrypted uploads, audit trail, less admin chasing.
          </p>
          <p class="hidden lg:block font-sans text-white/60 text-base leading-relaxed mb-4 max-w-lg reveal-up" style="transition-delay: 200ms;">
            WhatsApp and email are an admin drain—and a compliance liability. We build and run a <strong class="text-white/80">POPIA-conscious client portal on your domain</strong>: encrypted uploads, access controls, and a full audit trail. Your <strong class="text-white/80">firm website is managed in the same compliant programme</strong>. Less chasing. Defensible records. One stack.
          </p>

          <ul class="hidden lg:block font-sans text-white/55 text-xs space-y-1.5 mb-5 max-w-lg reveal-up" style="transition-delay: 250ms;" aria-label="What you get">
            <li v-for="line in heroQuickWins" :key="line" class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{{ line }}</span>
            </li>
          </ul>

          <div class="flex flex-col sm:flex-row gap-4 reveal-up" style="transition-delay: 300ms;">
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

          <div class="hidden lg:block mt-8 pt-8 border-t border-white/10 reveal-up" style="transition-delay: 350ms;">
            <p class="font-sans text-white/30 text-xs tracking-wider uppercase mb-4">Every build reviewed for POPIA, SA web accessibility &amp; FSCA requirements</p>
            <div class="flex items-center gap-4 sm:gap-6 flex-wrap">
              <div v-for="badge in trustBadges" :key="badge" class="flex items-center gap-2">
                <svg class="w-4 h-4 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span class="font-sans text-white/50 text-xs">{{ badge }}</span>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>

      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span class="font-sans text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>

    <!-- ==================== THE OFFER ==================== -->
    <section aria-labelledby="offer-heading">
      <div class="relative py-12 md:py-20 lg:py-24 bg-navy-950 border-y border-white/5 overflow-hidden">
        <div class="absolute inset-0 pointer-events-none opacity-[0.02]" aria-hidden="true" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 80px 80px;"></div>

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
              <figure class="relative">
                <div class="absolute -top-3 -right-3 w-full h-full border border-gold-500/25 pointer-events-none hidden lg:block" aria-hidden="true"></div>
                <div class="relative border border-white/10 bg-navy-900 shadow-card-hover overflow-hidden aspect-video">
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
                  <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" aria-hidden="true"></div>
                  <div class="absolute top-0 right-0 w-5 h-5 bg-gold-500" aria-hidden="true"></div>
                  <div class="absolute bottom-0 left-0 w-5 h-5 border-2 border-gold-500" aria-hidden="true"></div>
                </div>
              </figure>

              <div class="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-white/10">
                <IntegrationLogoStrip
                  :tools="homeFeaturedTools"
                  label="Connects to the tools you already run"
                  variant="dark"
                  compact
                  show-link
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 stagger-children">
            <article
              v-for="(feature, i) in offerFeatures"
              :key="feature.title"
              class="reveal-up group p-5 lg:p-6 border border-white/10 bg-white/[0.03] hover:border-gold-500/40 hover:bg-white/[0.05] transition-all duration-300"
              :style="{ transitionDelay: (i * 80) + 'ms' }"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 flex-shrink-0 flex items-center justify-center border border-gold-500/30 bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors" aria-hidden="true">
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
                <article class="relative h-full bg-white border border-navy-900/8 p-6 lg:p-8 transition-all duration-500 hover:border-gold-500/50 hover:shadow-card-hover group-hover:-translate-y-2 overflow-hidden">
                  <div class="absolute top-6 right-6 font-serif text-6xl font-bold text-navy-900/10 group-hover:text-gold-500/10 transition-colors" aria-hidden="true">
                    {{ String(i + 1).padStart(2, '0') }}
                  </div>
                  <div class="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center border border-gold-500/20 bg-gold-500/5 mb-4 lg:mb-8 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300" aria-hidden="true">
                    <svg class="w-6 h-6 text-gold-900 group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="service.icon"></svg>
                  </div>
                  <h3 class="font-serif text-lg lg:text-xl text-navy-900 mb-2 lg:mb-4 group-hover:text-navy-900 transition-colors">{{ service.title }}</h3>
                  <p class="hidden lg:block font-sans text-charcoal-500 text-sm leading-relaxed mb-6">{{ service.description }}</p>
                  <div class="hidden lg:flex flex-wrap gap-2 mb-6">
                    <span v-for="tag in service.tags" :key="tag" class="font-sans text-xs text-gold-700 bg-gold-500/10 px-2.5 py-1 border border-gold-500/20">
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
        <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px); background-size: 80px 80px;"></div>
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
              POPIA-conscious portal on your domain—8–15 admin hours back per week, with records you can defend.
            </p>
            <p class="hidden lg:block font-sans text-white/60 text-lg leading-relaxed mb-10 reveal-up" style="transition-delay: 200ms;">
              You cannot defend a tax file built from WhatsApp forwards. We move documents, signatures, and client status into a <strong class="text-white/80">POPIA-conscious portal on your domain</strong>—encrypted storage, role-based access, full audit log—wired to Xero, HubSpot, and DocuSign. Typical result: <strong class="text-white/80">8–15 admin hours back per week</strong>, with records you can stand behind.
            </p>

            <div class="space-y-4 lg:space-y-6 stagger-children">
              <div
                v-for="(point, i) in valuePoints"
                :key="point.title"
                class="flex items-start gap-4 lg:gap-5 reveal-up"
                :style="{ transitionDelay: (300 + i * 100) + 'ms' }"
              >
                <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-500/40 bg-gold-500/10" aria-hidden="true">
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
              <div class="flex items-start gap-6 p-6 border border-white/10 hover:border-gold-500/40 transition-all duration-300 hover:bg-white/5">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center" aria-hidden="true">
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

    <!-- ==================== TESTIMONIALS ==================== -->
    <section class="py-10 md:py-20 lg:py-32 bg-cream" aria-labelledby="testimonials-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
          <span class="section-label reveal-up hidden lg:inline">Proof</span>
          <h2 id="testimonials-heading" class="font-serif text-display-md text-navy-900 mb-4 reveal-up max-lg:text-[clamp(1.5rem,6vw,2rem)]" style="transition-delay: 100ms;">
            <span class="lg:hidden">Partners who made the switch</span>
            <span class="hidden lg:inline">Compliant intake. Less admin. Partners who made the switch.</span>
          </h2>
          <div class="gold-divider-center reveal-up" style="transition-delay: 150ms;"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="(testimonial, i) in testimonials"
            :key="testimonial.author"
            class="reveal-up"
            :style="{ transitionDelay: (i * 100) + 'ms' }"
          >
            <div class="h-full bg-white border border-navy-900/8 p-6 lg:p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div class="flex gap-1 mb-6" aria-label="5 out of 5 stars" role="img">
                <svg v-for="n in 5" :key="n" class="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <blockquote>
                <p class="font-sans text-charcoal-600 text-sm leading-relaxed mb-8 italic">"{{ testimonial.quote }}"</p>
              </blockquote>
              <footer class="flex items-center gap-4 pt-6 border-t border-navy-900/8">
                <div class="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span class="font-serif text-gold-500 font-bold text-sm">{{ testimonial.initials }}</span>
                </div>
                <div>
                  <cite class="font-sans font-semibold text-navy-900 text-sm not-italic">{{ testimonial.author }}</cite>
                  <div class="font-sans text-charcoal-400 text-xs mt-0.5">{{ testimonial.role }}</div>
                </div>
              </footer>
            </div>
          </article>
        </div>
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
              class="reveal-up group p-4 sm:p-6 border border-white/10 hover:border-gold-500/50 transition-all duration-300 text-center"
              :style="{ transitionDelay: sector.delay }"
            >
              <div class="w-10 h-10 mx-auto mb-4 flex items-center justify-center border border-gold-500/30 bg-gold-500/10 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all" aria-hidden="true">
                <svg class="w-5 h-5 text-gold-500 group-hover:text-navy-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="sector.icon"></svg>
              </div>
              <div class="font-sans text-white/70 text-xs font-semibold uppercase tracking-wide group-hover:text-white transition-colors">{{ sector.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== INTEGRATIONS ==================== -->
    <section class="py-10 lg:py-16 bg-navy-950 border-y border-white/5" aria-label="Accounting software and CRM integrations">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 reveal-up">
        <IntegrationLogoStrip
          :tools="homeFeaturedTools"
          label="Compliant integrations—Xero, HubSpot, DocuSign, and your existing stack"
          variant="dark"
          show-link
          aria-label="Accounting software, CRM, and practice management integrations"
        />
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
            class="reveal-up border border-navy-900/10 bg-white overflow-hidden"
            :style="{ transitionDelay: (i * 60) + 'ms' }"
          >
            <dt>
              <button
                class="w-full flex items-center justify-between gap-4 p-6 text-left font-sans font-semibold text-navy-900 text-sm hover:text-gold-600 transition-colors"
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
          In 30 minutes we map where client documents enter your firm today (email, WhatsApp, shared drives), flag the compliance gaps, estimate the admin cost, and outline a POPIA-conscious portal on your domain. <strong class="text-white/80">127+ regulated practices</strong> trust us with their client intake. No obligation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center reveal-up" style="transition-delay: 300ms;">
          <RouterLink to="/contact" class="btn-primary" aria-label="Book a free compliance and intake audit">
            Book my free audit
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </RouterLink>
          <RouterLink to="/resources" class="btn-ghost" aria-label="View case studies of accounting firms we've helped">
            View Case Studies
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
import HeroBackground from '@/components/ui/HeroBackground.vue'
import SeoRelatedGuides from '@/components/seo/SeoRelatedGuides.vue'
import IntegrationLogoStrip from '@/components/ui/IntegrationLogoStrip.vue'
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
      'A POPIA-conscious client portal on your domain (encrypted uploads, compliance calendar, document audit trail), your firm website managed in the same programme, and integrations to Xero, QuickBooks, HubSpot, DocuSign, and your practice stack. We host it, secure it, review it for compliance, and improve it monthly. You don\'t hire a dev team.',
  },
  {
    question: 'How much admin can a compliant portal save my firm?',
    answer:
      'Firms we work with typically reclaim 8–15 hours per week previously lost to chasing documents, re-keying data, and answering "did you get my file?" calls—while keeping a defensible record of every upload. We map the exact number in your free audit.',
  },
  {
    question: 'Why not just use Karbon, TaxDome, or another off-the-shelf portal?',
    answer:
      'Off-the-shelf tools work—but clients log into their platform, not yours, and compliance configuration varies. We build on your domain with POPIA-conscious architecture from day one, wired to your CRM and accounting software. You own the asset with records you can stand behind.',
  },
  {
    question: 'What happens on the free audit call?',
    answer:
      'In 30 minutes we walk through where documents enter your firm today, flag POPIA and intake compliance gaps, estimate admin hours lost, and outline what a portal on your domain would look like—including security, access controls, and timeline. No obligation.',
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

const heroQuickWins = [
  'POPIA-conscious hosting, access controls, and document audit trail—built in, not bolted on',
  'Branded portal on your domain; clients upload once, your team works one compliant queue',
  'Integrations to Xero, HubSpot, and DocuSign—we host, secure, and review monthly',
]

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
  { value: 127, label: 'Regulated Practices Served', prefix: '', suffix: '+' },
  { value: 100, label: 'Compliance Review Before Launch', prefix: '', suffix: '%' },
  { value: 15, label: 'Admin Hours Saved Per Week', prefix: 'Up to ', suffix: '' },
  { value: 8, label: 'Years in Financial Sector Digital', prefix: '', suffix: '+' },
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
    title: 'Workflow Integration',
    description:
      'Connect compliant portal intake to Xero, QuickBooks, HubSpot, and DocuSign—data flows once, with a traceable handoff. From enquiry to signed engagement letter, auditable.',
    link: '/services/workflow-integration',
    tags: ['Traceable Handoffs', 'CRM Sync', 'Zero Re-keying'],
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  },
  {
    title: 'Compliance & Trust',
    description:
      'POPIA review, South African web accessibility standards, encrypted storage, and FSCA sign-off on every build. Because a compliance failure costs more than any website ever will.',
    link: '/services/compliance-trust',
    tags: ['POPIA Review', 'SA Accessibility', 'FSCA Sign-off'],
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

const processSteps = [
  { title: 'Free audit — intake & compliance gaps', desc: 'We trace where documents enter your firm today and flag POPIA, accessibility, and admin risks before proposing anything.' },
  { title: 'Compliance review & architecture', desc: 'POPIA-conscious data handling, role-based access, encryption, and South African web accessibility standards scoped before a single page is designed.' },
  { title: 'Portal & site build', desc: 'Your compliant portal on your domain, firm website in sync, integrations wired to your existing stack.' },
  { title: 'Launch with audit trail', desc: 'Clients get one secure place to upload. Your team gets one queue—with who, what, when, logged.' },
  { title: 'Managed, secured & reviewed monthly', desc: 'We host, patch, speed-test, and re-check compliance as regulations and your practice evolve.' },
]

const testimonials = [
  {
    quote: 'We came for the admin relief—half a day a week lost to chasing tax packs by email. We stayed because the POPIA audit trail finally gave us defensible records. Document collection is now a checklist clients follow, not a compliance gamble.',
    author: 'Michael Chen, CA(SA)',
    role: 'Managing Partner, Chen & Associates',
    initials: 'MC',
  },
  {
    quote: 'They flagged our WhatsApp intake as a POPIA risk in the first call—then showed us exactly what a compliant portal on our domain would fix. No jargon, no hard sell. Our clients upload securely; we have records we can stand behind.',
    author: 'Sarah Johnson',
    role: 'CEO, Pinnacle Tax Advisory',
    initials: 'SJ',
  },
  {
    quote: 'The admin reduction paid for the service before onboarding finished. Enquiry to signed engagement letter—automated and auditable. I wish we\'d moved off email intake two seasons ago.',
    author: 'David Martinez',
    role: 'Partner, Martinez Financial Group',
    initials: 'DM',
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
