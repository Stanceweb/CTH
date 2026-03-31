<script setup lang="ts">
import { site } from '~/content/site'
</script>

<template>
  <section class="py24">
    <div class="mx-auto max-w-7xl px-5 sm-px10 md-px12 lg:px5">
      <div
        class="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-neutral-1 to-neutral-2 px6 py8 md-px8 md-py10 dark-from-neutral-9"
      >
        <div class="absolute right-0 top-0 flex h-full w-full justify-end">
          <div class="relative flex h28 w28 overflow-hidden rounded-xl blur-2xl">
          <span class="absolute -top-1 -right-1 h16 w16 rounded-md bg-primary-500 rotate-45"></span>
          <span class="absolute -bottom-1 -right-1 h16 w16 rounded-md bg-primary-400 rotate-45"></span>
          <span class="absolute -bottom-1 -left-1 h16 w16 rounded-md bg-primary-300 rotate-45"></span>
          </div>
        </div>

        <div class="absolute left-0 bottom-0 flex h-full w-full items-end">
          <div class="relative flex h28 w28 overflow-hidden rounded-xl blur-2xl">
          <span class="absolute -top-1 -right-1 h16 w16 rounded-md bg-primary-500 rotate-45"></span>
          <span class="absolute -bottom-1 -right-1 h16 w16 rounded-md bg-primary-400 rotate-45"></span>
          <span class="absolute -bottom-1 -left-1 h16 w16 rounded-md bg-primary-300 rotate-45"></span>
          </div>
        </div>

        <div class="relative mx-auto max-w-3xl space-y-8 text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
            Get started
          </p>
          <h2 class="text-3xl/tight font-bold text-fg-title sm-text-4xl/tight md-text-5xl/tight">
            Launch your hosting account today.
          </h2>
          <p class="text-fg">
            Create your Continental Trust Hosting account and access the control panel in minutes.
          </p>

          <form
            :action="site.signUpUrl"
            method="get"
            class="mx-auto grid max-w-4xl gap-4 rounded-2xl border border-border bg-bg/90 p-4 shadow-sm backdrop-blur-sm sm:p-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]"
          >
            <label class="sr-only" for="business-name">Business name</label>
            <input
              id="business-name"
              name="business"
              type="text"
              placeholder="Business name"
              class="w-full rounded-xl border border-border bg-bg-surface px4 py3 text-fg outline-none placeholder:text-fg-muted focus:border-primary"
            >

            <label class="sr-only" for="work-email">Work email</label>
            <input
              id="work-email"
              name="email"
              type="email"
              placeholder="Work email"
              class="w-full rounded-xl border border-border bg-bg-surface px4 py3 text-fg outline-none placeholder:text-fg-muted focus:border-primary"
            >

            <button type="submit" class="btn btn-lg btn-solid btn-solid-primary rd-xl text-white sm:col-span-2 lg:col-span-1">
              Create account
            </button>
          </form>

          <div class="flex flex-wrap justify-center gap-3 text-sm text-fg-muted">
            <span class="rounded-full border border-border bg-bg-surface px-4 py-2">24/7 support</span>
            <span class="rounded-full border border-border bg-bg-surface px-4 py-2">Daily backups</span>
            <span class="rounded-full border border-border bg-bg-surface px-4 py-2">Free SSL</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
