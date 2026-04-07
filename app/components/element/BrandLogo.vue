<script setup lang="ts">
withDefaults(
  defineProps<{
    compact?: boolean
    showTagline?: boolean
    logoOnly?: boolean
  }>(),
  {
    compact: false,
    showTagline: false,
    logoOnly: false,
  },
)
</script>

<template>
  <div class="flex min-w-0 items-center" :class="compact ? 'gap-3' : 'gap-4'">
    <div
      class="relative isolate flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-primary/30 bg-slate-900/80 p-1"
      :class="compact ? 'h-11 w-11' : 'h-13 w-13'"
      style="box-shadow: 0 18px 40px -24px rgba(59, 130, 246, 0.95);"
    >
      <img
        src="/cth-icon.svg"
        alt="Continental Trust Hosting logo"
        class="h-full w-full rounded-xl object-cover"
        loading="eager"
        decoding="async"
      />
    </div>

    <div v-if="!logoOnly" class="min-w-0 leading-none">
      <p class="truncate text-[0.63rem] font-semibold uppercase tracking-[0.24em] text-primary/80">
        Continental Trust
      </p>
      <p
        class="mt-1 truncate font-semibold text-fg-title"
        :class="compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'"
      >
        Hosting
      </p>
      <p v-if="showTagline" class="mt-2 max-w-xs text-xs leading-relaxed text-fg-muted">
        Managed hosting for businesses that need technical help, not just server space.
      </p>
    </div>
  </div>
</template>
