<script setup lang="ts">
import { homeContent } from '~/content/site'
</script>

<template>
  <section class="py20 lg:py28">
    <div class="mx-auto max-w-7xl px5 sm-px10 md-px12 lg:px5">
      <div class="overflow-hidden rounded-3xl border border-border bg-bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div class="max-w-2xl space-y-5">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
              Community bonus
            </p>
            <h2 class="text-3xl font-bold text-fg-title lg:text-5xl">
              {{ homeContent.community.title }}
            </h2>
            <p class="text-fg">
              {{ homeContent.community.description }}
            </p>
            <p class="text-sm text-fg-muted">
              {{ homeContent.community.note }}
            </p>
            <a
              :href="homeContent.community.ctaUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex btn btn-lg btn-solid btn-solid-primary rd-xl text-white"
            >
              {{ homeContent.community.ctaLabel }}
            </a>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="benefit in homeContent.community.benefits"
              :key="benefit"
              class="rounded-2xl border border-border bg-bg p-5"
            >
              <span class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span class="i-ph-check-circle flex text-xl"></span>
              </span>
              <h3 class="mt-4 text-base font-semibold text-fg-title">
                {{ benefit }}
              </h3>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
