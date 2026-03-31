<script setup lang="ts">
import { homeContent } from '~/content/site'
</script>

<template>
  <section class="py20 lg:py28">
    <div class="mx-auto max-w-7xl px5 sm-px10 md-px12 lg:px5">
      <div class="mx-auto max-w-3xl space-y-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
          Resources
        </p>
        <h2 class="text-3xl font-bold text-fg-title lg:text-5xl">
          Guides and updates.
        </h2>
        <p class="text-fg-muted">
          Practical setup notes, migration tips, billing guidance, and platform updates.
        </p>
      </div>

      <div class="mt16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="resource in homeContent.resources"
          :key="resource.title"
          class="rounded-2xl border border-border bg-bg-surface p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between gap-4">
            <span class="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span class="i-ph-article flex text-xl"></span>
            </span>
            <div class="text-right">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
                {{ resource.category }}
              </p>
              <p class="text-sm text-fg-muted">
                {{ resource.readTime }}
              </p>
            </div>
          </div>
          <h3 class="mt-5 text-xl font-semibold text-fg-title">
            {{ resource.title }}
          </h3>
          <p class="mt-3 text-sm text-fg-muted">
            {{ resource.date }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
