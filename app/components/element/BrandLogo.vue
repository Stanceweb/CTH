<script setup lang="ts">
withDefaults(
  defineProps<{
    compact?: boolean
    showTagline?: boolean
  }>(),
  {
    compact: false,
    showTagline: false,
  },
)
</script>

<template>
  <div class="flex min-w-0 items-center" :class="compact ? 'gap-3' : 'gap-4'">
    <div
      class="relative isolate flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-primary/20"
      :class="compact ? 'h-11 w-11' : 'h-13 w-13'"
      style="background: linear-gradient(180deg, rgba(59, 130, 246, 0.24), rgba(7, 18, 40, 0.96)); box-shadow: 0 18px 40px -24px rgba(59, 130, 246, 0.95);"
    >
      <span
        aria-hidden="true"
        class="absolute inset-[1px] rounded-[15px]"
        style="background: radial-gradient(circle at top, rgba(191, 219, 254, 0.22), transparent 55%), linear-gradient(180deg, rgba(10, 19, 40, 0.98), rgba(8, 15, 30, 0.95));"
      />
      <svg
        viewBox="0 0 44 44"
        class="relative z-1"
        :class="compact ? 'h-7 w-7' : 'h-8 w-8'"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 5.5L12 9.2V20c0 6.6 3.9 12.1 10 14.5c6.1-2.4 10-7.9 10-14.5V9.2L22 5.5Z"
          fill="rgba(59, 130, 246, 0.16)"
          stroke="rgba(191, 219, 254, 0.9)"
          stroke-width="1.6"
        />
        <path
          d="M17 15.25C18.7 13.95 20.37 13.3 22 13.3c1.63 0 3.3 0.65 5 1.95"
          stroke="rgba(219, 234, 254, 0.82)"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <circle cx="18" cy="19" r="1.15" fill="#93C5FD" />
        <circle cx="18" cy="23" r="1.15" fill="#93C5FD" />
        <circle cx="18" cy="27" r="1.15" fill="#93C5FD" />
        <path d="M21 19H26.5" stroke="#EFF6FF" stroke-width="1.7" stroke-linecap="round" />
        <path d="M21 23H27.5" stroke="#EFF6FF" stroke-width="1.7" stroke-linecap="round" />
        <path d="M21 27H25.5" stroke="#EFF6FF" stroke-width="1.7" stroke-linecap="round" />
      </svg>
    </div>

    <div class="min-w-0 leading-none">
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
        Managed web infrastructure for fast launches, trusted uptime, and practical support.
      </p>
    </div>
  </div>
</template>
