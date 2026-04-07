<script setup lang="ts">
import { onMounted, ref } from 'vue'

const zohoWidgetUrl = 'https://salesiq.zohopublic.com/widget?wc=siq87dbae343a4d60e77b60846805f4a6293a9ae448021831060240d77cc90fe883'

useHead({
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/cth-icon.svg' },
    { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  script: [
    {
      key: 'zoho-salesiq-init',
      children: 'window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{};$zoho.salesiq.ready=function(){try{if($zoho.salesiq.chatwindow&&$zoho.salesiq.chatwindow.visible){$zoho.salesiq.chatwindow.visible("hide")}}catch(e){}try{if($zoho.salesiq.floatwindow&&$zoho.salesiq.floatwindow.visible){$zoho.salesiq.floatwindow.visible("show")}}catch(e){}}',
    },
    {
      key: 'zoho-salesiq-widget',
      id: 'zsiqscript',
      src: zohoWidgetUrl,
      defer: true,
    },
  ],
})

const preloaderVisible = ref(true)
const preloaderLeaving = ref(false)

function startPreloaderExit() {
  if (preloaderLeaving.value) return
  preloaderLeaving.value = true
}

function completePreloaderExit() {
  preloaderVisible.value = false
}

onMounted(() => {
  const triggerExit = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(startPreloaderExit)
    })
  }

  if (document.readyState === 'complete') {
    triggerExit()
  } else {
    window.addEventListener('load', triggerExit, { once: true })
  }
})
</script>

<template>
  <div>
    <div
      v-if="preloaderVisible"
      role="status"
      aria-live="polite"
      aria-label="Loading Continental Trust Hosting"
      :style="{
        position: 'fixed',
        inset: '0',
        zIndex: '9999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at top, rgba(59, 130, 246, 0.24), transparent 34%), radial-gradient(circle at bottom right, rgba(96, 165, 250, 0.18), transparent 30%), linear-gradient(180deg, #050816 0%, #09111e 100%)',
        opacity: preloaderLeaving ? '0' : '1',
        visibility: preloaderLeaving ? 'hidden' : 'visible',
        pointerEvents: 'none',
        transition: 'opacity 420ms ease, visibility 0s linear 420ms',
      }"
      @transitionend.self="completePreloaderExit"
    >
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
          textAlign: 'center',
          padding: '24px',
        }"
      >
        <div
          :style="{
            width: '92px',
            height: '92px',
            borderRadius: '28px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(147, 197, 253, 0.28)',
            background:
              'linear-gradient(180deg, rgba(59, 130, 246, 0.28) 0%, rgba(7, 18, 40, 0.98) 100%)',
            boxShadow: '0 18px 50px -24px rgba(59, 130, 246, 0.95)',
          }"
        >
          <svg
            viewBox="0 0 92 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :style="{
              position: 'absolute',
              inset: '0',
              width: '100%',
              height: '100%',
            }"
          >
            <defs>
              <linearGradient id="preloaderStroke" x1="18" y1="12" x2="76" y2="80" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DBEAFE" />
                <stop offset="1" stop-color="#60A5FA" />
              </linearGradient>
              <radialGradient id="preloaderGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46 30) rotate(90) scale(34 34)">
                <stop stop-color="#93C5FD" stop-opacity="0.35" />
                <stop offset="1" stop-color="#93C5FD" stop-opacity="0" />
              </radialGradient>
            </defs>
            <circle cx="46" cy="46" r="35" fill="url(#preloaderGlow)" />
            <circle
              cx="46"
              cy="46"
              r="24"
              stroke="rgba(147, 197, 253, 0.2)"
              stroke-width="1.6"
            />
            <path
              d="M46 12C27.2 12 12 27.2 12 46C12 64.8 27.2 80 46 80C64.8 80 80 64.8 80 46C80 27.2 64.8 12 46 12Z"
              stroke="url(#preloaderStroke)"
              stroke-width="3.4"
              stroke-linecap="round"
              stroke-dasharray="86 31"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 46 46"
                to="360 46 46"
                dur="1.15s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M33.5 37.5C37 34.9 41.1 33.6 46 33.6C50.9 33.6 55 34.9 58.5 37.5"
              stroke="#EFF6FF"
              stroke-width="2.3"
              stroke-linecap="round"
            />
            <circle cx="36.5" cy="46" r="1.8" fill="#BFDBFE" />
            <circle cx="36.5" cy="52.3" r="1.8" fill="#BFDBFE" />
            <circle cx="36.5" cy="58.6" r="1.8" fill="#BFDBFE" />
            <path d="M42.5 46H56" stroke="#F8FBFF" stroke-width="2.6" stroke-linecap="round" />
            <path d="M42.5 52.3H58" stroke="#F8FBFF" stroke-width="2.6" stroke-linecap="round" />
            <path d="M42.5 58.6H53" stroke="#F8FBFF" stroke-width="2.6" stroke-linecap="round" />
          </svg>
        </div>

        <div
          :style="{
            display: 'grid',
            gap: '8px',
          }"
        >
          <div
            :style="{
              fontSize: '12px',
              lineHeight: '1',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#93C5FD',
              fontWeight: '700',
            }"
          >
            Continental Trust Hosting
          </div>
          <div
            :style="{
              fontSize: '17px',
              lineHeight: '1.3',
              fontWeight: '700',
              color: '#F8FBFF',
            }"
          >
            Preparing your secure hosting experience
          </div>
          <div
            :style="{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#B9D2F7',
              maxWidth: '26rem',
            }"
          >
            Loading the interface and synchronizing the brand system for a clean first paint.
          </div>
        </div>
      </div>
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
