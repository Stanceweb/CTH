<script setup lang="ts">
import { homeContent } from '~/content/site'

const includedHighlights = [
  {
    label: 'Free SSL and automated backups',
    icon: 'i-ph-shield-check',
  },
  {
    label: 'Migration support in 24 to 72 hours',
    icon: 'i-ph-arrows-left-right',
  },
  {
    label: 'Secure billing and account controls',
    icon: 'i-ph-credit-card',
  },
  {
    label: 'NGN and USD friendly plans',
    icon: 'i-ph-currency-circle-dollar',
  },
]
</script>

<template>
  <section class="relative mt12 md:mt16">
    <div class="mx-auto flex max-w-7xl flex-col items-start gap-10 px5 sm-px10 md-px12 lg-px5 xl-gap-14">
      <div class="mx-auto max-w-3xl space-y-3 text-center lg:mx-0 lg:text-left">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
          about us
        </p>
        <h2 class="text-3xl font-bold text-fg-title lg:text-5xl">
          Why teams choose Continental Trust Hosting.
        </h2>
        <p class="text-fg-muted">
          Launch fast with optimized stacks, secure infrastructure, and hands-on support.
        </p>
      </div>

      <div class="mx-a grid max-w-5xl grid-cols-1 gap-4 rounded-3xl border border-border bg-bg-muted/70 p5 shadow-lg shadow-neutral3/50 dark-shadow-transparent sm:grid-cols-2 md:grid-cols-3 sm-p6 py6 sm-py8 md-divide-x divide-border lg-mx-0 lg-gap-12">
        <article
          v-for="item in homeContent.whyChoose"
          :key="item.title"
          class="space-y-3 text-center"
        >
          <div class="mx-auto flex size-12 items-center justify-center rounded-xl bg-bg-surface text-fg-title">
            <span :class="['text-2xl', item.icon]"></span>
          </div>
          <h2 class="text-xl font-semibold text-fg-title sm-text-2xl">
            {{ item.title }}
          </h2>
          <p class="text-fg">
            {{ item.description }}
          </p>
        </article>
      </div>

      <div class="mx-a w-full max-w-5xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
          What&apos;s included
        </p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in includedHighlights"
            :key="item.label"
            class="flex items-start gap-3 rounded-2xl border border-border bg-bg-surface p-4"
          >
            <span class="mt-0.5 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span :class="['text-lg', item.icon]"></span>
            </span>
            <p class="text-sm text-fg">
              {{ item.label }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
