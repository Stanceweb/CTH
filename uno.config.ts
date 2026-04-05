// uno.config.ts
import {
  defineConfig, presetIcons, presetWind3, presetMini, presetWebFonts
} from 'unocss'

import { presetUI } from "@unifydev/preset-ui"

export default defineConfig({
  safelist: [
    // Dynamic icon classes from content data/components
    'i-ph-rocket-launch',
    'i-ph-shield-check',
    'i-ph-chat-centered-text',
    'i-ph-shield-warning',
    'i-ph-lightning',
    'i-ph-arrows-left-right',
    'i-ph-credit-card',
    'i-ph-headset',
    'i-ph-activity',
    'i-ph-currency-circle-dollar',
    'i-ph-article',
    'i-ph-eye',
    'i-ph-trend-up',
    'i-ph-quotes',
    'i-carbon-signal-strength',
  ],
  transformers: [
  ],
  presets: [
    presetWind3(),
    presetMini({
      dark: "class"
    }),
    presetWebFonts({
      provider: "none",
      fonts: {
        dms: ["'DM Sans'", 'sans-serif'],
      },
    }),
    presetUI(),
    presetIcons(
      {
        collections: {
          // carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        }
      }
    ),
  ],
})
