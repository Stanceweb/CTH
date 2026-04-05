<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { mainNavLinks, site } from '~/content/site'

const navIsOpen = useState('navIsOpen', () => false)
const headerSolid = ref(false)

function syncHeaderState() {
  headerSolid.value = window.scrollY > 10
}

function toggleNavBar() {
  navIsOpen.value = !navIsOpen.value
  document.body.classList.toggle('overflow-hidden', navIsOpen.value)
}

function closeNavBar() {
  navIsOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

onMounted(() => {
  syncHeaderState()
  window.addEventListener('scroll', syncHeaderState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', syncHeaderState)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z50 py4 sm:py6 transition-all duration-300"
    :class="headerSolid || navIsOpen ? 'bg-bg/80 backdrop-blur-xl border-b border-border/70 shadow-sm' : 'bg-transparent'"
  >
    <div class="w-full px5 sm-px10 md-px12 lg-px5 mx-a max-w-7xl">
      <nav class="relative flex w-full items-center justify-between gap-3 sm:gap-6">
        <NuxtLink to="/" class="relative flex min-w-0 items-center">
          <ElementBrandLogo compact logo-only />
        </NuxtLink>

        <div
          aria-hidden="true"
          class="fixed inset-0 z40 bg-neutral-8/40 backdrop-blur-xl backdrop-filter lg:!hidden"
          :class="navIsOpen ? 'flex' : 'hidden'"
          @click="closeNavBar"
        />

        <div
          id="mobile-nav"
          class="absolute top-full z50 max-h-[calc(100vh-5rem)] overflow-y-auto flex w-full flex-col gap-x-4 gap-y-6 bg-bg duration-300 ease-linear border border-border shadow-lg lg:relative lg:z-auto lg:top-auto lg:max-h-none lg:overflow-visible lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:border-0 lg:shadow-none"
          :class="navIsOpen ? 'translate-y-0 visible op-100' : 'translate-y-10 invisible op-0 lg:visible lg:op-100 lg:translate-y-0'"
        >
          <ul
            class="w-full flex flex-col gap-x-3 gap-y-4 px-5 pt-5 text-base text-fg sm:px-6 sm:text-lg lg:flex-row lg:items-center lg:justify-center lg:px-0 lg:pt-0"
          >
            <li v-for="navItem in mainNavLinks" :key="navItem.to">
              <NuxtLink
                :to="navItem.to"
                class="py2 font-medium duration-300 ease-linear hover:text-primary sm:py3"
                @click="closeNavBar"
              >
                {{ navItem.label }}
              </NuxtLink>
            </li>
          </ul>

          <div class="flex w-full items-center px5 pb-5 sm:px6 sm:pb-6 sm-w-max lg:min-w-max lg:px-0 lg:pb-0">
            <a
              :href="site.signInUrl"
              class="justify-center w-full sm-w-max btn btn-sm rd-md btn-outline btn-outline-gray"
            >
              Sign In
            </a>
          </div>
        </div>

        <div class="min-w-max flex items-center gap-x-3">
          <ClientOnly>
            <ui-toggle-theme />
          </ClientOnly>
          <a
            :href="site.comparePlansUrl"
            class="hidden sm:inline-flex justify-center btn btn-sm rd-md btn-solid btn-solid-primary text-white"
          >
            Compare Plans
          </a>
          <button
            aria-label="toggle navbar"
            :aria-expanded="navIsOpen ? 'true' : 'false'"
            aria-controls="mobile-nav"
            class="lg-hidden lg:invisible relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-surface text-fg-title outline-none"
            @click="toggleNavBar()"
          >
            <span class="flex text-xl transition-transform duration-300 ease-linear" :class="navIsOpen ? 'i-ph-x-bold rotate-90' : 'i-ph-list-bold'"></span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
