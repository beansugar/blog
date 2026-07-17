import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "bean blog",
  description: "code share ",
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
          {text:"first",link:"/first"},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/beansugar' }
    ]
  }
})
