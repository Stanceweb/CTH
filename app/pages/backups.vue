<script setup lang="ts">
import { pageCopy } from '~/content/site'

useHead({
  title: 'Backups | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.backups.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Backups"
    :title="pageCopy.simple.backups.title"
    :description="pageCopy.simple.backups.description"
    :sections="pageCopy.simple.backups.sections"
    :primary-cta="{ label: 'Compare plans', to: '/pricing' }"
    :secondary-cta="{ label: 'Contact support', to: '/support' }"
    note="Backups are performed automatically and retained based on the active hosting plan."
  />
</template>
