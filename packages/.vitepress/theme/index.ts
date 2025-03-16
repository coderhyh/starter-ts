import { NaiveUIContainer } from '@vitepress-demo-preview/component'
// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import '@vitepress-demo-preview/component/dist/style.css'
import './base.css'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('demo-preview', NaiveUIContainer)
  },
}
