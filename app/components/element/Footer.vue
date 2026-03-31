<script setup lang="ts">
import { footerGroups, site } from '~/content/site'
</script>

<template>
  <footer pt="16 md:20" bg="neutral-1 dark:neutral-9">
    <div
      class="mx-auto box-border w-full max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5"
      style="padding-inline: 20px;"
    >
      <div
        text="neutral-7 dark:neutral-3"
        border-b="~ neutral-2 dark:neutral-8"
        class="grid w-full grid-cols-2 gap-8 pb4 lg-grid-cols-4"
      >
        <div class="flex flex-col gap-2">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <ElementBrandLogo :show-tagline="false" />
          </NuxtLink>
          <p class="max-w-xs text-sm">
            Managed hosting with secure billing, practical setup support, and stable operations.
          </p>
        </div>

        <div class="flex items-center space-x-2">
          <span i-carbon-location flex text-xl></span>
          <span>NGN and USD pricing</span>
        </div>
        <div class="flex items-center space-x-2">
          <span i-carbon-phone flex text-xl></span>
          <span>Support through the account portal</span>
        </div>
        <div class="flex items-center space-x-2">
          <span i-carbon-email flex text-2xl></span>
          <span>info@continentaltrustonline.online</span>
        </div>
      </div>

      <nav
        text="neutral-7 dark:neutral-3"
        class="grid grid-cols-2 gap-8 gap-y-10 py-10 md-grid-cols-3 lg-grid-cols-4"
      >
        <div v-for="footerItem in footerGroups" :key="footerItem.title" class="space-y-5">
          <h1 text="lg neutral-9 dark:neutral-1" class="font-semibold">
            {{ footerItem.title }}
          </h1>
          <ul class="space-y-3">
            <li v-for="item in footerItem.links" :key="item.to">
              <NuxtLink :to="item.to" class="duration-200 hover:text-primary">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-span-2 space-y-5 md-col-span-3 lg-col-span-1">
          <h1 text="lg neutral-9 dark:neutral-1" class="font-semibold">
            Account access
          </h1>
          <p class="max-w-xl">
            Sign in to manage hosting, billing, and service controls from the secure account portal.
          </p>
          <div class="grid gap-3 sm:grid-cols-2">
            <a :href="site.signInUrl" class="btn btn-solid btn-solid-primary text-white rd-xl">
              Sign In
            </a>
            <NuxtLink to="/contact" class="btn btn-outline btn-outline-gray rd-xl text-fg">
              Contact Support
            </NuxtLink>
          </div>
        </div>
      </nav>

      <div
        border-t="~ neutral-2 dark:neutral-8"
        un-text="neutral-7 dark:neutral-3"
        class="flex w-full flex-col items-center gap-4 py3 md-flex-row sm-justify-between"
      >
        <div text="center sm:left" class="flex sm-min-w-max">
          <p>&copy; 2026 Continental Trust Hosting. All rights reserved.</p>
        </div>
        <div class="flex w-full justify-center gap-3 sm:justify-end">
          <a :href="site.telegramSupportUrl" aria-label="Telegram support" class="transition-colors hover:text-primary">
            <span i-carbon-chat text-2xl flex></span>
          </a>
          <NuxtLink to="/support" aria-label="Support" class="transition-colors hover:text-primary">
            <span i-carbon-headset text-2xl flex></span>
          </NuxtLink>
          <NuxtLink to="/status" aria-label="Status" class="transition-colors hover:text-primary">
            <span i-carbon-signal-strength-3 text-2xl flex></span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
