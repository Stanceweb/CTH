<script setup lang="ts">
import { mainNavLinks, site } from '~/content/site'

const navIsOpen = useState('navIsOpen', () => false)

function toggleNavBar() {
  navIsOpen.value = !navIsOpen.value
  document.body.classList.toggle('overflow-hidden', navIsOpen.value)
}

function closeNavBar() {
  navIsOpen.value = false
  document.body.classList.remove('overflow-hidden')
}
</script>

<template>
  <header class="absolute inset-x-0 top-0 z50 py4 sm:py6">
    <div class="w-full px5 sm-px10 md-px12 lg-px5 mx-a max-w-7xl">
      <nav class="relative flex w-full items-center justify-between gap-3 sm:gap-6">
        <NuxtLink to="/" class="relative flex min-w-0 items-center">
          <ElementBrandLogo compact />
        </NuxtLink>

        <div
          aria-hidden="true"
          class="fixed inset-0 bg-neutral-8/40 backdrop-blur-xl backdrop-filter lg:!hidden"
          :class="navIsOpen ? 'flex' : 'hidden'"
        />

        <div
          class="absolute top-full max-h-[calc(100vh-5rem)] overflow-y-auto flex w-full flex-col gap-x-4 gap-y-6 bg-bg duration-300 ease-linear lg:relative lg:max-h-none lg:flex-row lg:items-center lg:justify-between lg:bg-transparent"
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
            class="lg-hidden lg:invisible relative flex h-auto w8 flex-col bg-transparent outline-none"
            @click="toggleNavBar()"
          >
            <span class="w6 h0.5 rd-full transition-all duration-300 ease-linear" :class="navIsOpen ? 'translate-y-1.5 rotate-40' : ''"></span>
            <span class="w6 origin-center mt1 h0.5 rd-ful transition-all duration-300 ease-linear" :class="navIsOpen ? 'op-0 scale-x-0' : ''"></span>
            <span class="w6 mt1 h0.5 rd-ful transition-all duration-300 ease-linear" :class="navIsOpen ? '-translate-y-1.5 -rotate-40' : ''"></span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
