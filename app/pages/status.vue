<script setup lang="ts">
import { pageCopy } from '~/content/site'

useHead({
  title: 'Service Status | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.status.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Status"
    :title="pageCopy.simple.status.title"
    :description="pageCopy.simple.status.description"
    :sections="pageCopy.simple.status.sections"
    :primary-cta="{ label: 'Report an issue', to: '/support' }"
    :secondary-cta="{ label: 'Read about us', to: '/about' }"
    note="No public incident feed is currently connected to this page."
  />
</template>
