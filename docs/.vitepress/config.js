// @ts-check

import {defineConfig} from 'vitepress';

// https://vitepress.dev/reference/site-config

export default defineConfig({
  lang: 'zh-CN',
  title: '盯梢文档',
  description: '快速上手盯梢应用',
  themeConfig: {
    logo: '/images/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '用户指南',
        link: '/guide/',
      },
      {
        text: '脚本文档',
        link: '/script/',
      },
    ],
    sidebar: [
      {
        text: '用户指南',
        link: '/guide/index.md',
        items: [{text: '频道标签', link: '/guide/channel-tags.md'}],
        collapsed: true,
      },
      {
        text: '脚本文档',
        link: '/script/index.md',
        items: [
          {text: '快速上手', link: '/script/getting-started.md'},
          {text: '定时执行', link: '/script/scheduling.md'},
          {text: '添加依赖', link: '/script/dependencies.md'},
          {text: '调试脚本', link: '/script/debugging.md'},
          {text: '状态 State', link: '/script/state.md'},
          {text: '消息 Message', link: '/script/message.md'},
          {text: '高级用法', link: '/script/advanced-usages.md'},
          {
            text: '示例',
            items: [
              {
                text: 'NPM 包新版本发布',
                link: '/script/examples/npm-package-new-release.md',
              },
            ],
            collapsed: true,
          },
        ],
        collapsed: true,
      },
      {
        text: '协议文本',
        items: [
          {
            text: '服务协议',
            link: '/terms/service-agreement.md',
          },
          {
            text: '隐私声明',
            link: '/terms/privacy-statement.md',
          },
        ],
        collapsed: true,
      },
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/digshare/digshare-docs'},
    ],
    editLink: {
      text: '编辑此页',
      pattern:
        'https://github.com/digshare/digshare-docs/edit/master/docs/:path',
    },
    outline: {
      label: '当前页面',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
});
