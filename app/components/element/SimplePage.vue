<script setup lang="ts">
type PageSection = {
  title: string
  body: string
  bullets?: string[]
}

const props = defineProps<{
  badge?: string
  title: string
  description: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  note?: string
  sections: PageSection[]
}>()
</script>

<template>
  <main class="flex-1 py24">
    <section class="mx-auto max-w-7xl px-5 sm-px10 md-px12 lg:px5">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div class="space-y-6">
          <span v-if="props.badge" class="ui-size-sm rd-xl ui-outline ui-outline-gray">
            {{ props.badge }}
          </span>
          <h1 class="text-4xl font-bold text-fg-title lg:text-6xl">
            {{ props.title }}
          </h1>
          <p class="max-w-2xl text-lg text-fg">
            {{ props.description }}
          </p>
          <div v-if="props.primaryCta || props.secondaryCta" class="flex flex-wrap gap-3">
            <NuxtLink
              v-if="props.primaryCta"
              :to="props.primaryCta.to"
              class="btn btn-lg btn-solid btn-solid-primary rd-xl text-white"
            >
              {{ props.primaryCta.label }}
            </NuxtLink>
            <NuxtLink
              v-if="props.secondaryCta"
              :to="props.secondaryCta.to"
              class="btn btn-lg btn-outline btn-outline-gray rd-xl text-fg"
            >
              {{ props.secondaryCta.label }}
            </NuxtLink>
          </div>
        </div>

        <aside class="rounded-2xl border border-border bg-bg-surface p-6 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
            {{ props.badge || 'Overview' }}
          </p>
          <p v-if="props.note" class="mt-4 text-fg-muted">
            {{ props.note }}
          </p>
          <ul class="mt-6 space-y-3 text-fg">
            <li
              v-for="section in props.sections.slice(0, 3)"
              :key="section.title"
              class="rounded-xl border border-border bg-bg px4 py3"
            >
              {{ section.title }}
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="mx-auto mt16 grid max-w-7xl gap-6 px-5 sm-px10 md-px12 lg:px5 lg:grid-cols-2">
      <article
        v-for="section in props.sections"
        :key="section.title"
        class="rounded-2xl border border-border bg-bg-surface p-6 shadow-sm"
      >
        <h2 class="text-2xl font-semibold text-fg-title">
          {{ section.title }}
        </h2>
        <p class="mt-4 text-fg">
          {{ section.body }}
        </p>
        <ul v-if="section.bullets?.length" class="mt-4 space-y-2 text-fg-muted">
          <li v-for="bullet in section.bullets" :key="bullet" class="flex gap-3">
            <span class="mt-2 h-2 w-2 rounded-full bg-primary"></span>
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>
