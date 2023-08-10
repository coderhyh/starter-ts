import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { resolve } from 'path'

import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  title: ' ',
  description: 'starter-ts是一个npm库的起始模板',
  base: '/starter-ts',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: './vue-icon.svg'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,height=device-height, maximum-scale=1.0,minimum-scale=1.0'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/coderhyh/starter-ts' }],
    search: {
      provider: 'local'
    }
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  vite: {
    resolve: { alias: { 'starter-ts': resolve(__dirname, '../') } },
    plugins: [
      AutoImport({
        dts: '../auto-imports.d.ts',
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dts: '../components.d.ts',
        resolvers: [ElementPlusResolver()]
      }),
      Unocss()
    ]
  }
})
