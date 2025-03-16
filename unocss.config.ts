import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

// https://github.com/unocss/unocss

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.vue$/, /pages.json?$/]
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      autoInstall: true,
      prefix: 'i-'
    }),
    presetTagify({
      extraProperties: { display: 'block' },
      prefix: 'un-'
    })
  ],
  rules: [['center', { 'align-items': 'center', display: 'flex', 'justify-content': 'center' }]],
  theme: {
    colors: {}
  },
  transformers: [transformerDirectives(), transformerCompileClass(), transformerVariantGroup()]
})
