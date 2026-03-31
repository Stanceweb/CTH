<script setup lang="ts">
import { homeContent } from '~/content/site'
</script>

<template>
  <section class="py20 lg:py28">
    <div class="mx-auto max-w-7xl px5 sm-px10 md-px12 lg-px5">
      <div class="mx-auto max-w-3xl space-y-4 text-center">
        <h2 class="text-3xl font-bold text-fg-title lg:text-5xl">
          Frequently asked questions
        </h2>
        <p class="text-fg-muted">
          Answers to the most common questions about migration, backups, billing, and support.
        </p>
      </div>

      <div class="mt16 grid gap-6 lg:grid-cols-3">
        <article
          v-for="item in homeContent.faq"
          :key="item.question"
          class="ui-card relative overflow-hidden rounded-2xl border border-border bg-bg-surface p-6 shadow-sm"
        >
          <h3 class="text-lg font-semibold text-fg-title">
            {{ item.question }}
          </h3>
          <p class="mt-3 text-fg-muted">
            {{ item.answer }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
