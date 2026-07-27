<template>
  <div
    class="overflow-hidden rounded-xl sm:rounded-2xl border shadow-screenshot"
    :class="dark ? 'border-white/10 bg-navy-800' : 'border-navy-900/10 bg-white'"
  >
    <!-- Chrome bar -->
    <div
      class="flex items-center gap-3 px-4 py-2.5 border-b"
      :class="dark ? 'border-white/10 bg-navy-900' : 'border-navy-900/8 bg-charcoal-50'"
    >
      <div class="flex items-center gap-1.5" aria-hidden="true">
        <span class="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#28C840]"></span>
      </div>
      <div
        v-if="url"
        class="mx-auto flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-sans"
        :class="dark ? 'bg-white/5 text-white/40' : 'bg-white text-charcoal-400 border border-navy-900/8'"
      >
        <svg class="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
        <span class="truncate max-w-[200px] sm:max-w-none">{{ url }}</span>
      </div>
      <div v-else class="mx-auto"></div>
      <div class="w-12" aria-hidden="true"></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  url: { type: String, default: '' },
  dark: { type: Boolean, default: false },
})
</script>
