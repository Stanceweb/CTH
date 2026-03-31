<script setup lang="ts">
import { pageCopy } from '~/content/site'

useHead({
  title: 'About Continental Trust Hosting',
  meta: [
    { name: 'description', content: pageCopy.simple.about.description },
  ],
})
</script>

<template>
  <ElementSimplePage
    badge="Company"
    :title="pageCopy.simple.about.title"
    :description="pageCopy.simple.about.description"
    :sections="pageCopy.simple.about.sections"
    :primary-cta="{ label: 'Compare plans', to: '/pricing' }"
    :secondary-cta="{ label: 'Contact support', to: '/contact' }"
    note="Managed hosting with practical operations support."
  />
</template>
