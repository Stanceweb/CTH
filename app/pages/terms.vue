<script setup lang="ts">
import { pageCopy } from '~/content/site'

useHead({
  title: 'Terms & Conditions | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.terms.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Legal"
    :title="pageCopy.simple.terms.title"
    :description="pageCopy.simple.terms.description"
    :sections="pageCopy.simple.terms.sections"
    :primary-cta="{ label: 'View pricing', to: '/pricing' }"
    :secondary-cta="{ label: 'Read privacy', to: '/privacy' }"
    note="These terms govern account use, billing expectations, and acceptable use of the hosting platform."
  />
</template>
