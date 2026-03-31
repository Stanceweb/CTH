<script setup lang="ts">
import { pageCopy } from '~/content/site'

useHead({
  title: 'Security | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.security.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Security"
    :title="pageCopy.simple.security.title"
    :description="pageCopy.simple.security.description"
    :sections="pageCopy.simple.security.sections"
    :primary-cta="{ label: 'View plans', to: '/pricing' }"
    :secondary-cta="{ label: 'Read support', to: '/support' }"
    note="Free SSL, monitoring, and account protections are built into the hosting workflow."
  />
</template>
