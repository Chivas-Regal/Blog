import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'Camellia-Rainbow',
  description: 'Blog',
  theme: 'reco',
  dest: 'public',
  themeConfig: {
      style: '@vuepress-reco/style-default',
      logo: '/logo.png',
      author: 'Camellia-Rainbow',
      authorAvatar: '/logo.png',
      docsRepo: 'https://github.com/Chivas-Regal/Blog',
      docsBranch: 'main',
      docsDir: 'example',
      lastUpdatedText: '',
      autoAddCategoryToNavbar: true,
      mode: 'light',
      modePicker: true
  },
})
