import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "bean blog",
  description: "code share ",
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'articles', link: '/' }
    ],

    sidebar: [
      {
        text: 'articles',
        items: [
          {text:"care",link:"/posts/care"},
          {text:"ddd",link:"/posts/ddd"},
          {text:"nonthing",link:"/posts/nothing"}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/beansugar' }
    ]
  }
})
