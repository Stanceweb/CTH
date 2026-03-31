<script setup lang="ts">
import { pageCopy } from '~/content/site'

useHead({
  title: 'Privacy Policy | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.privacy.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Legal"
    :title="pageCopy.simple.privacy.title"
    :description="pageCopy.simple.privacy.description"
    :sections="pageCopy.simple.privacy.sections"
    :primary-cta="{ label: 'Contact support', to: '/contact' }"
    :secondary-cta="{ label: 'Read terms', to: '/terms' }"
    note="This page explains how account and billing information is handled across the hosting workflow."
  />
</template>
