import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lezi Notes",
  description: "收集网络沙雕乐子",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始', link: '/start' }
    ],

    sidebar: [
      {
        text: 'Lezi Notes 名人堂',
        items: [
          { text: '开始阅读', link: '/start' },
          { text: '自由世界', link: '/zy123' },
          { text: 'nn2', link: '/nn2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lezinote/lezinote.github.io' }
    ]
  }
})
