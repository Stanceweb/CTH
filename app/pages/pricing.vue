<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { pageCopy, pricingComparisonRows, pricingPlans } from '~/content/site'

type CurrencyCode = 'USD' | 'NGN'
type BillingCycle = 'monthly' | 'yearly'

const currencyStorageKey = 'cto_currency'
const billingStorageKey = 'cto_billing'

const currency = ref<CurrencyCode>('NGN')
const billing = ref<BillingCycle>('monthly')

const cadenceLabel = computed(() => (billing.value === 'monthly' ? 'mo' : 'yr'))

const formatPrice = (code: CurrencyCode, amount: number) =>
  new Intl.NumberFormat(code === 'NGN' ? 'en-NG' : 'en-US', {
    style: 'currency',
    currency: code,
    minimumFractionDigits: code === 'NGN' ? 0 : 2,
    maximumFractionDigits: code === 'NGN' ? 0 : 2,
  }).format(amount)

const detectCurrency = (): CurrencyCode => {
  if (!import.meta.client) return 'NGN'

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? ''
  const language = navigator.language ?? ''
  return timezone.includes('Lagos') || language.includes('-NG') ? 'NGN' : 'USD'
}

const planCards = computed(() =>
  pricingPlans.map((plan) => {
    const price = plan.prices[currency.value]
    const renewalAmount =
      currency.value === 'USD'
        ? billing.value === 'monthly'
          ? price.renewMonthly
          : price.renewYearly
        : null

    return {
      ...plan,
      price: formatPrice(currency.value, price[billing.value]),
      cadence: cadenceLabel.value,
      renewal:
        renewalAmount === null
          ? pageCopy.pricing.introOfferLabel
          : `Renews at ${formatPrice('USD', renewalAmount)} / ${cadenceLabel.value}`,
      ctaUrl: `https://app.continentaltrustonline.online/register?plan=${plan.slugs[billing.value]}`,
      featureList: [
        plan.features.websites,
        plan.features.storage,
        plan.features.bandwidth,
        plan.features.ssl,
        plan.features.backups,
        plan.features.support,
      ],
    }
  }),
)

const comparisonTable = computed(() =>
  pricingComparisonRows.map((row) => ({
    label: row.label,
    values: pricingPlans.map((plan) => {
      const price = plan.prices[currency.value]

      if (row.key === 'price') return formatPrice(currency.value, price[billing.value])
      if (row.key === 'billing')
        return billing.value === 'monthly' ? pageCopy.pricing.monthlyLabel : pageCopy.pricing.yearlyLabel
      if (row.key === 'renewal') {
        if (currency.value === 'NGN') return pageCopy.pricing.introOfferLabel
        return formatPrice(
          'USD',
          billing.value === 'monthly' ? price.renewMonthly : price.renewYearly,
        )
      }

      return plan.features[row.key]
    }),
  })),
)

onMounted(() => {
  const storedCurrency = localStorage.getItem(currencyStorageKey)
  const storedBilling = localStorage.getItem(billingStorageKey)

  currency.value =
    storedCurrency === 'USD' || storedCurrency === 'NGN'
      ? storedCurrency
      : detectCurrency()

  billing.value =
    storedBilling === 'monthly' || storedBilling === 'yearly'
      ? storedBilling
      : 'monthly'
})

watch(currency, (value) => {
  if (import.meta.client) localStorage.setItem(currencyStorageKey, value)
})

watch(billing, (value) => {
  if (import.meta.client) localStorage.setItem(billingStorageKey, value)
})

useHead({
  title: 'Pricing | Continental Trust Hosting',
  meta: [{ name: 'description', content: pageCopy.pricing.description }],
})
</script>

<template>
  <main class="flex-1 py24">
    <section class="mx-auto max-w-7xl px-5 sm-px10 md-px12 lg:px5">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div class="space-y-6">
          <span class="ui-size-sm rd-xl ui-outline ui-outline-gray">Plans</span>
          <h1 class="text-4xl font-bold text-fg-title lg:text-6xl">
            {{ pageCopy.pricing.title }}
          </h1>
          <p class="max-w-2xl text-lg text-fg">
            {{ pageCopy.pricing.description }}
          </p>
          <div class="flex flex-wrap gap-3">
            <div class="rounded-2xl border border-border bg-bg-surface p-2">
              <p class="px-3 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
                {{ pageCopy.pricing.currencyLabel }}
              </p>
              <div class="mt-2 flex gap-2">
                <button
                  type="button"
                  class="rounded-xl px-4 py-2 text-sm font-medium transition"
                  :class="
                    currency === 'NGN'
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-bg text-fg-muted hover:text-fg'
                  "
                  @click="currency = 'NGN'"
                >
                  NGN
                </button>
                <button
                  type="button"
                  class="rounded-xl px-4 py-2 text-sm font-medium transition"
                  :class="
                    currency === 'USD'
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-bg text-fg-muted hover:text-fg'
                  "
                  @click="currency = 'USD'"
                >
                  USD
                </button>
              </div>
            </div>

            <div class="rounded-2xl border border-border bg-bg-surface p-2">
              <p class="px-3 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
                {{ pageCopy.pricing.billingLabel }}
              </p>
              <div class="mt-2 flex gap-2">
                <button
                  type="button"
                  class="rounded-xl px-4 py-2 text-sm font-medium transition"
                  :class="
                    billing === 'monthly'
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-bg text-fg-muted hover:text-fg'
                  "
                  @click="billing = 'monthly'"
                >
                  {{ pageCopy.pricing.monthlyLabel }}
                </button>
                <button
                  type="button"
                  class="rounded-xl px-4 py-2 text-sm font-medium transition"
                  :class="
                    billing === 'yearly'
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-bg text-fg-muted hover:text-fg'
                  "
                  @click="billing = 'yearly'"
                >
                  {{ pageCopy.pricing.yearlyLabel }}
                </button>
              </div>
            </div>
          </div>
          <p
            v-if="billing === 'yearly'"
            class="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            {{ pageCopy.pricing.yearlyBadge }}
          </p>
        </div>

        <aside class="rounded-2xl border border-border bg-bg-surface p-6 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
            Billing notes
          </p>
          <ul class="mt-4 space-y-3 text-fg">
            <li v-for="note in pageCopy.pricing.notes" :key="note" class="flex gap-3">
              <span class="mt-2 h-2 w-2 rounded-full bg-primary"></span>
              <span>{{ note }}</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="mx-auto mt16 max-w-7xl px-5 sm-px10 md-px12 lg:px5">
      <div class="grid gap-6 lg:grid-cols-3">
        <article
          v-for="plan in planCards"
          :key="plan.key"
          class="rounded-2xl border border-border bg-bg-surface p-6 shadow-sm"
          :class="plan.recommended ? 'ring-2 ring-primary/40' : ''"
        >
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-2xl font-semibold text-fg-title">{{ plan.name }}</h2>
            <span
              v-if="plan.recommended"
              class="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              Popular
            </span>
          </div>
          <div class="mt-4 flex items-end gap-2">
            <span class="text-4xl font-bold text-fg-title">{{ plan.price }}</span>
            <span class="pb-1 text-fg-muted">/ {{ plan.cadence }}</span>
          </div>
          <p class="mt-3 text-sm text-fg-muted">{{ plan.renewal }}</p>
          <ul class="mt-6 space-y-2 text-fg">
            <li v-for="feature in plan.featureList" :key="feature" class="flex gap-3">
              <span class="mt-2 h-2 w-2 rounded-full bg-primary"></span>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <a
            :href="plan.ctaUrl"
            class="mt-8 inline-flex w-full justify-center btn btn-solid btn-solid-primary rd-xl text-white"
          >
            Start Hosting
          </a>
        </article>
      </div>
    </section>

    <section class="mx-auto mt16 max-w-7xl px-5 sm-px10 md-px12 lg:px5">
      <div class="overflow-hidden rounded-2xl border border-border bg-bg-surface shadow-sm">
        <div class="border-b border-border px-6 py-5">
          <h2 class="text-2xl font-semibold text-fg-title">Plan comparison</h2>
          <p class="mt-2 max-w-3xl text-fg-muted">
            Plan inclusions and billing cycle behavior are visible before checkout, with
            renewal context available for USD plans.
          </p>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full text-left">
            <thead class="bg-bg">
              <tr>
                <th class="px-6 py-4 text-sm font-semibold text-fg-muted">Plan details</th>
                <th
                  v-for="plan in pricingPlans"
                  :key="plan.key"
                  class="px-6 py-4 text-sm font-semibold text-fg-title"
                >
                  {{ plan.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonTable"
                :key="row.label"
                class="border-t border-border align-top"
              >
                <th class="px-6 py-4 text-sm font-medium text-fg-title">
                  {{ row.label }}
                </th>
                <td
                  v-for="value in row.values"
                  :key="`${row.label}-${value}`"
                  class="px-6 py-4 text-sm text-fg"
                >
                  {{ value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <SectionsFaqSection />
  </main>
</template>
