<script setup lang="ts">
import { homeContent } from '~/content/site'
</script>

<template>
  <section class="py20 lg:py32">
    <div class="mx-auto flex w-full flex-col gap12 px5 sm-px10 md-px12 lg:max-w-7xl lg:flex-row lg:gap16 lg:px5">
      <div class="md:w1/2 md:py16 lg:w45% lg:py20 xl:w45%">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
          our promise
        </p>
        <h2 class="max-w-xl text-3xl/snug font-medium text-fg-title">
          {{ homeContent.reliability.title }}
        </h2>
        <p class="mt-6 max-w-md text-fg-muted">
          {{ homeContent.reliability.description }}
        </p>

        <ul class="mt7 grid gap-4 border-t border-border-light pt6 sm:grid-cols-2">
          <li v-for="item in homeContent.reliability.highlights" :key="item" class="space-y-2 rounded-xl border border-border bg-bg-surface p-4">
            <h3 class="text-lg font-medium text-fg-title">
              {{ item }}
            </h3>
            <p class="text-sm text-fg-muted">
              Built into the managed hosting workflow.
            </p>
          </li>
        </ul>

        <div class="mt8 flex">
          <NuxtLink to="/pricing" class="btn btn-lg btn-solid btn-solid-primary rd-xl text-white">
            Compare plans
          </NuxtLink>
        </div>
      </div>

      <div class="relative flex flex-1 justify-center lg:pl20">
        <div class="flex w-full max-w-xl justify-center md:hfull">
          <img
            :src="homeContent.reliability.image"
            alt="Cloud hosting illustration"
            class="relative wfull min-h72 object-contain rd-xl bg-bg-surface p-6 md:hfull md-min-hauto"
          />
        </div>

        <div
          class="absolute -left-4 top-10 hidden items-start gap3 rounded-xl border b-border bg-bg p4 shadow-lg shadow-bg-subtle/60 sm:left-8 lg:flex lg:left-12"
        >
          <span>
            <span class="i-ph-eye flex text-fg"></span>
          </span>
          <div class="flex flex-col">
            <h3 class="font-medium text-fg-title">Monitoring</h3>
            <p class="text-sm text-fg-muted">24/7 uptime checks</p>
          </div>
        </div>

        <div
          class="pointer-event-none absolute right-0 bottom-4 hidden w54 flex-col gap-2 overflow-hidden rounded-xl border b-border bg-bg shadow-lg shadow-bg-subtle/60 select-none lg:flex"
        >
          <div class="flex items-center justify-between pt5 px5">
            <h3 class="font-medium text-fg-title">Backups</h3>
            <p class="text-sm text-fg-muted">Daily</p>
          </div>
          <span class="flex items-center gap-x2 px5 pb10 text-success6">
            <span class="i-ph-trend-up flex"></span>
            <span class="text-xl font-semibold">Included</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
