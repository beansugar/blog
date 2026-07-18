import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "bean blog",
  description: "code share ",
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'articles', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'articles',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {text:"care",link:"/posts/care"},
          {text:"ddd",link:"/posts/ddd"},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/beansugar' }
    ]
  }
})
