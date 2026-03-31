<script setup lang="ts">
import { homeContent } from '~/content/site'
</script>

<template>
  <section class="py20">
    <div class="mx-auto max-w-7xl space-y-10 px5 sm-px10 md-px12 lg:px5">
      <div class="mx-auto max-w-2xl space-y-6 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
          Trusted by growing teams
        </p>
        <h2 class="text-3xl font-bold capitalize text-fg-title">
          Fast setup. Secure billing. Real support.
        </h2>
        <p class="text-fg-muted">
          The platform is built for businesses that want stable hosting without the usual complexity.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap4 children:flex children:items-center children:justify-center">
        <div
          v-for="logo in homeContent.trustLogos"
          :key="logo.label + logo.src"
          class="group min-wmax rounded-lg border border-gray-1 p4 sm-p5 dark-border-gray-9"
        >
          <img
            :src="logo.src"
            height="60"
            :alt="logo.label"
            class="h7 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover-scale-105 sm-h10"
          />
        </div>
      </div>
    </div>
  </section>
</template>
