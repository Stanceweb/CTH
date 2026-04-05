<script setup lang="ts">
import { pageCopy, site } from '~/content/site'

useHead({
  title: 'Contact | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.simple.contact.description }],
})
</script>

<template>
  <ElementSimplePage
    badge="Contact"
    :title="pageCopy.simple.contact.title"
    :description="pageCopy.simple.contact.description"
    :sections="pageCopy.simple.contact.sections"
    :primary-cta="{ label: 'Get Technical Support', to: '/support' }"
    :secondary-cta="{ label: 'Open Account Portal', to: site.signInUrl }"
    note="Use one clear route: Contact Sales, Ask Billing, Get Technical Support, or Request Migration Help. Telegram remains optional support only."
  />
</template>
