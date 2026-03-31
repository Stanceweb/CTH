<script setup lang="ts">
import { pageCopy, site } from '~/content/site'

useHead({
  title: 'Support | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.support.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Support"
    :title="pageCopy.simple.support.title"
    :description="pageCopy.simple.support.description"
    :sections="pageCopy.simple.support.sections"
    :primary-cta="{ label: 'Sign in', to: site.signInUrl }"
    :secondary-cta="{ label: 'Open status', to: '/status' }"
    note="Use the account portal for sign in and the support channel for operational requests."
  />
</template>
