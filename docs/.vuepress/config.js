// @ts-check

import {defaultTheme, defineUserConfig} from 'vuepress';
import {copyCodePlugin} from 'vuepress-plugin-copy-code2';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '盯梢',
  description: '仅仅是一个消息分发工具',
  head: [['link', {rel: 'icon', href: '/images/favicon.svg'}]],
  theme: defaultTheme({
    navbar: [
      {
        text: '用户指南',
        link: '/guide/',
      },
      {
        text: '脚本文档',
        link: '/script/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '用户指南',
        },
      ],
      '/script/': [
        {
          text: '脚本文档',
          children: [
            '/script/README.md',
            '/script/getting-started.md',
            '/script/scheduling.md',
            '/script/debugging.md',
            '/script/state.md',
            '/script/message.md',
            '/script/demo/',
          ],
        },
      ],
    },
  }),
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  plugins: [copyCodePlugin()],
});
