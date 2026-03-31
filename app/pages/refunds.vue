<script setup lang="ts">
import { pageCopy } from '~/content/site'

useHead({
  title: 'Refund Policy | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.refunds.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Refunds"
    :title="pageCopy.simple.refunds.title"
    :description="pageCopy.simple.refunds.description"
    :sections="pageCopy.simple.refunds.sections"
    :primary-cta="{ label: 'Contact support', to: '/support' }"
    :secondary-cta="{ label: 'View terms', to: '/terms' }"
    note="Refund eligibility depends on service term, payment timing, and account standing."
  />
</template>
