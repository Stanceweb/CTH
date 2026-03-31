<script setup lang="ts">
import { pageCopy } from '~/content/site'

useHead({
  title: 'Migration Support | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.migrations.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Migration"
    :title="pageCopy.simple.migrations.title"
    :description="pageCopy.simple.migrations.description"
    :sections="pageCopy.simple.migrations.sections"
    :primary-cta="{ label: 'Start setup', to: '/pricing' }"
    :secondary-cta="{ label: 'Talk to support', to: '/support' }"
    note="Most standard migrations complete within 24 to 72 hours depending on size and complexity."
  />
</template>
