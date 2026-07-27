<template>
  <div>
    <p
      v-if="label"
      class="font-sans text-xs tracking-wider uppercase text-center mb-5"
      :class="variant === 'dark' ? 'text-white/35' : 'text-charcoal-400'"
    >
      {{ label }}
    </p>

    <div class="marquee-mask" role="list" :aria-label="ariaLabel">
      <div class="marquee-track">
        <!-- Track duplicated once for a seamless -50% loop -->
        <div
          v-for="copy in 2"
          :key="copy"
          class="flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4"
          :aria-hidden="copy === 2 ? 'true' : undefined"
        >
          <div
            v-for="tool in tools"
            :key="`${copy}-${tool.name}`"
            class="flex items-center gap-2.5 rounded-full border px-4 py-2 whitespace-nowrap"
            :class="variant === 'dark'
              ? 'border-white/10 bg-white/5'
              : 'border-navy-900/10 bg-white shadow-soft'"
            role="listitem"
          >
            <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white" aria-hidden="true">
              <img
                v-if="tool.logo"
                :src="tool.logo"
                :alt="tool.alt"
                class="h-3.5 w-3.5 object-contain"
                width="14"
                height="14"
                loading="lazy"
              />
            </span>
            <span
              class="font-sans text-sm font-medium"
              :class="variant === 'dark' ? 'text-white/70' : 'text-charcoal-600'"
            >
              {{ tool.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
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
  ariaLabel: { type: String, default: 'Integration partners' },
})
</script>
