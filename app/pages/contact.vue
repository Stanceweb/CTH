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
    :primary-cta="{ label: 'Sign in', to: site.signInUrl }"
    :secondary-cta="{ label: 'Open support', to: '/support' }"
    note="Payments are handled through the official Telegram bot and should never be sent to personal accounts."
  />
</template>
