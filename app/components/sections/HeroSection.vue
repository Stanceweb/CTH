<script setup lang="ts">
import { homeContent, site } from '~/content/site'
</script>

<template>
  <section class="relative overflow-hidden pt24 sm:pt28 lg:pt36">
    <div class="mx-auto flex w-full flex-col gap-12 px5 sm-px10 md-px12 lg:max-w-7xl lg:flex-row lg:gap-16 lg:px5">
      <div class="absolute inset-y-0 right-0 hidden wfull lg:block lg:w-1/2">
        <span class="absolute right-4 bottom-12 size-24 rd-3xl bg-primary blur-xl op40"></span>
      </div>
      <span
        class="absolute -top-5 w-4/12 aspect-square rd-full bg-gradient-to-tr from-primary to-info blur-2xl op30 rotate-90 skew-x-12 skew-y-12 lg:left-0 lg:w-2/12"
      ></span>

      <div
        class="relative order-2 mx-a flex max-w-3xl flex-col items-center text-center lg:order-1 lg:mx-0 lg:flex-1 lg:max-w-none lg:items-start lg:text-left lg:py7 xl:py8 lg:w-1/2"
      >
        <span class="ui-size-sm rd-xl ui-outline ui-outline-gray">
          {{ homeContent.hero.eyebrow }}
        </span>
        <h1 class="mt-8 text-3xl/tight font-bold text-fg-title sm-text-4xl/tight md-text-5xl/tight xl-text-6xl/tight">
          {{ homeContent.hero.title }}
        </h1>
        <p class="mt8 max-w-md text-fg">
          {{ homeContent.hero.description }}
        </p>

        <ul class="mt-8 grid max-w-md gap-3 text-sm text-fg-muted sm:grid-cols-2 lg:max-w-none">
          <li class="rounded-xl border border-border bg-bg-surface px4 py3">Free SSL and automated backups</li>
          <li class="rounded-xl border border-border bg-bg-surface px4 py3">Migration support in 24 to 72 hours</li>
          <li class="rounded-xl border border-border bg-bg-surface px4 py3">Secure billing and account controls</li>
          <li class="rounded-xl border border-border bg-bg-surface px4 py3">NGN and USD friendly plans</li>
        </ul>

        <div class="mt10 flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
          <a
            :href="site.signUpUrl"
            class="justify-center btn btn-lg btn-solid btn-solid-primary rd-xl text-white"
          >
            {{ homeContent.hero.primaryCta.label }}
          </a>
          <NuxtLink
            :to="homeContent.hero.secondaryCta.to"
            class="justify-center btn btn-lg btn-outline btn-outline-gray rd-xl text-fg"
          >
            {{ homeContent.hero.secondaryCta.label }}
          </NuxtLink>
        </div>
      </div>

      <div class="relative order-1 mx-auto flex max-w-3xl flex-1 lg:order-2 lg:mx-0 lg:w-1/2 lg:max-w-none">
        <div class="relative w-full overflow-hidden rd-2xl shadow-xl shadow-neutral-9/20">
        <img
          :src="homeContent.hero.image"
          alt="Black woman working in a server room"
          loading="eager"
          fetchpriority="high"
          class="block aspect-[4/3] w-full object-cover object-center lg:absolute lg:inset-0 lg:h-full lg:max-h-none"
        />
        <div
          class="absolute left-1/2 -bottom-6 hidden w66 -translate-x-1/2 items-center rounded-xl border b-border-strong/50 bg-bg/80 p-2 shadow-sm shadow-bg-bg-muted/40 backdrop-blur-md before:absolute before:-bottom-2 before:left-3 before:right-3 before:h-2 before:rounded-b-xl before:border before:border-b-0 before:border-border-strong/50 before:bg-bg/80 md:flex"
        >
          <span aria-hidden="true" class="mr-4 flex size-12 items-center justify-center rd-lg ui-soft ui-soft-primary">
            <span class="flex i-ph-shield-check text-2xl"></span>
          </span>
          <div class="flex flex-col">
            <span class="text-xl font-semibold text-fg-title">24/7</span>
            <span class="text-sm text-fg-muted">Monitoring and support</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
