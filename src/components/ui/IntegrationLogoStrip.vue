<template>
  <div :class="compact ? '' : 'text-center'">
    <p
      v-if="label"
      :class="[
        'font-sans text-xs tracking-wider uppercase',
        variant === 'dark' ? 'text-white/35' : 'text-charcoal-400',
        compact ? 'mb-3' : 'mb-6',
      ]"
    >
      {{ label }}
    </p>

    <ul
      class="flex flex-wrap items-center gap-3 sm:gap-4"
      :class="compact ? '' : 'justify-center'"
      role="list"
      :aria-label="ariaLabel"
    >
      <li
        v-for="tool in tools"
        :key="tool.name"
        class="group flex items-center gap-2 border px-3 py-2 transition-colors duration-300"
        :class="variant === 'dark'
          ? 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]'
          : 'border-navy-900/10 bg-white hover:border-gold-500/40 hover:shadow-sm'"
        :title="tool.name"
      >
        <img
          v-if="tool.logo"
          :src="tool.logo"
          :alt="tool.alt"
          class="h-5 w-5 flex-shrink-0 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          :class="variant === 'dark' ? 'brightness-0 invert' : ''"
          width="20"
          height="20"
          loading="lazy"
        />
        <span
          class="font-sans text-xs font-medium whitespace-nowrap transition-colors"
          :class="variant === 'dark'
            ? 'text-white/65 group-hover:text-white/85'
            : 'text-charcoal-600 group-hover:text-navy-900'"
        >
          {{ tool.name }}
        </span>
      </li>
    </ul>

    <RouterLink
      v-if="showLink"
      to="/services/workflow-integration"
      class="inline-flex items-center gap-1.5 font-sans text-xs font-semibold mt-6 transition-colors"
      :class="variant === 'dark' ? 'text-gold-500/90 hover:text-gold-400' : 'text-navy-900 hover:text-gold-600'"
    >
      See all integrations
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </RouterLink>
  </div>
</template>

<script setup>
defineProps({
  tools: { type: Array, required: true },
  label: { type: String, default: '' },
  variant: {
    type: String,
    default: 'dark',
    validator: (v) => ['dark', 'light'].includes(v),
  },
  compact: { type: Boolean, default: false },
  showLink: { type: Boolean, default: false },
  ariaLabel: { type: String, default: 'Accounting software and CRM integrations' },
})
</script>
