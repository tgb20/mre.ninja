import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'mre.ninja',
  description: 'MRE guides and help',
  repo: 'tgb20/mre.ninja',
  theme: defaultTheme({
    logo: 'siteassets/logo.png',
    navbar: [
      {
        text: 'Getting Started ⭐',
        link: '/getting-started/',
      },
      {
        text: 'Guides',
        children: [
          {
            text: "Basics",
            children: [
              {
                text: 'Getting Started',
                link: '/getting-started/',
              },
            ]
          },
        ],
      },
      {
        text: 'Reference',
        children: [
          {
            text: 'Getting Started',
            link: '/getting-started/',
          },
          {
            text: 'Getting Started',
            link: '/getting-started/',
          }
        ],
      },
      {
        text: 'Discussion',
        children: [
          {
            text: 'Getting Started',
            link: '/getting-started/',
          },
          {
            text: 'Getting Started',
            link: '/getting-started/',
          }
        ],
      },
    ],
  }),
});