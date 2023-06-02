# 添加依赖

频道主可以根据脚本需要添加依赖，以 `cheerio` 为例，执行命令：

```bash
npm install cheerio
```

然后即可在脚本中引入：

::: code-group

```js [script.js]
import * as Cheerio from 'cheerio';

export default script(async () => {
  const $ = Cheerio.load('<h2 class="title">Hello world</h2>');

  return {
    message: {
      content: $('.title').text(),
    },
  };
});
```

:::

::: tip 注意
添加依赖可能会显著增加脚本打包后的大小，如果部署时提示脚本超过大小限制，可以尝试使用 `--minify` 选项压缩代码，或尝试对依赖进行优化。

优先使用支持 ESM 的包可以减少依赖打包后的大小。
:::
