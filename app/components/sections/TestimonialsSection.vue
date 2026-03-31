<script setup lang="ts">
import { homeContent } from '~/content/site'
</script>

<template>
  <section class="py20 lg:py28">
    <div class="mx-auto max-w-7xl px5 sm-px10 md-px12 lg:px5">
      <div class="mx-auto max-w-3xl space-y-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
          Testimonials
        </p>
        <h2 class="text-3xl font-bold text-fg-title lg:text-5xl">
          Trusted by growing teams.
        </h2>
        <p class="text-fg-muted">
          Reliable infrastructure and security updates without the usual hosting hassle.
        </p>
      </div>

      <div class="mt16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="testimonial in homeContent.testimonials"
          :key="testimonial.name"
          class="rounded-2xl border border-border bg-bg-surface p-6 shadow-sm"
        >
          <span class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span class="i-ph-quotes flex text-xl"></span>
          </span>
          <p class="mt-5 text-fg">
            {{ testimonial.quote }}
          </p>
          <div class="mt-6 border-t border-border pt-4">
            <h3 class="font-semibold text-fg-title">
              {{ testimonial.name }}
            </h3>
            <p class="text-sm text-fg-muted">
              {{ testimonial.role }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
