// @ts-check

import * as Path from 'path';

import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {defaultTheme, defineUserConfig} from 'vuepress';
import {copyCodePlugin} from 'vuepress-plugin-copy-code2';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '盯梢文档',
  description: '仅仅是一个消息分发工具',
  head: [['link', {rel: 'icon', href: '/images/logo.svg'}]],
  theme: defaultTheme({
    logo: '/images/logo.svg',
    navbar: [
      {
        text: '用户指南',
        link: '/guide/',
      },
      {
        text: '脚本文档',
        link: '/script/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/digshare/digshare-docs',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '用户指南',
          children: ['/guide/README.md', '/guide/channel-tags.md'],
        },
      ],
      '/script/': [
        {
          text: '脚本文档',
          children: [
            '/script/README.md',
            '/script/getting-started.md',
            '/script/scheduling.md',
            '/script/dependencies.md',
            '/script/debugging.md',
            '/script/state.md',
            '/script/message.md',
            '/script/advanced-usages.md',
            {
              text: '示例',
              children: ['/script/examples/npm-package-new-release.md'],
              collapsible: true,
            },
          ],
        },
      ],
      '/terms/': [
        {
          text: '协议文本',
          children: [
            '/terms/service-agreement.md',
            '/terms/privacy-statement.md',
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
  plugins: [
    copyCodePlugin(),
    registerComponentsPlugin({
      componentsDir: Path.join(__dirname, 'components'),
    }),
  ],
});
