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
    :primary-cta="{ label: 'Open Account Portal', to: site.signInUrl }"
    :secondary-cta="{ label: 'Contact Sales or Billing', to: '/contact' }"
    note="Choose the right queue quickly: Sales, Billing, Technical, or Migration. We triage by issue severity and guide the next step."
  />
</template>
