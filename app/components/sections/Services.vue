<script setup lang="ts">
import { homeContent } from '~/content/site'
</script>

<template>
  <section class="py20 lg:py32">
    <div class="mx-auto w-full px5 sm-px10 md-px12 lg:px5 lg:max-w-7xl">
      <div class="mx-auto max-w-3xl space-y-4 text-center">
        <h2 class="text-balance text-4xl font-semibold text-fg-title lg-text-5xl">
          What our support actually helps with.
        </h2>
        <p class="text-fg-muted">
          Real technical help for deployment problems, configuration issues, and website stability concerns.
        </p>
      </div>

      <div class="mt16 grid gap6 sm:grid-cols-2 lg:grid-cols-3 lg-gap8">
        <article
          v-for="item in homeContent.capabilities"
          :key="item.title"
          class="ui-card relative overflow-hidden rounded-xl border border-border bg-bg-surface p-6 shadow-sm sm-p-6 lg-p-8"
        >
          <div class="inner-radius relative wmax bg-bg-muted p3 text-fg-title">
            <span :class="['flex text-2xl', item.icon]"></span>
          </div>
          <div class="relative mt6 space-y-4">
            <h3 class="text-lg font-semibold text-fg-title md-text-xl">
              {{ item.title }}
            </h3>
            <p class="text-fg-muted">
              {{ item.description }}
            </p>
          </div>
          <span class="absolute -bottom-16 -right-16 aspect-square w32 rounded-full bg-primary/10 blur-xl"></span>
        </article>
      </div>
      <p class="mx-auto mt8 max-w-4xl text-center text-sm text-fg-muted">
        Support is focused on hosting-related technical issues, deployment troubleshooting,
        configuration assistance, and minor site fixes.
      </p>
    </div>
  </section>
</template>
