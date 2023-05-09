# 快速上手

::: tip 注意
盯梢脚本使用 Node.js 编写，需要一定的编程基础。当然，对于喜欢折腾的同学来说，没有基础也不是障碍。

为了顺利完成这个教程，请提前安装 [Node.js][node-js] 和一款趁手的代码编辑器，比如目前流行的 [VS Code][vs-code]。

:::

## 创建脚本

最简单的盯梢脚本源代码由两个文件组成：

- `package.json`：用于配置脚本信息，包括脚本入口（`exports`）、依赖、执行时间或频率等。
- `script.js`：与 `package.json` 中的脚本入口对应。

接下来我们新建一个脚本文件夹，并在文件夹中分别创建以上两个文件，内容如下：

:::: code-group
::: code-group-item package.json

```json
{
  "exports": "./script.js",
  "dependencies": {
    "@digshare/script": "^0.4.0"
  }
}
```

:::
::::

:::: code-group
::: code-group-item script.js

```js
import {script} from '@digshare/script';

export default script((state = 1) => {
  return {
    message: `你好，世界！这是第 ${state} 条消息。`,
    state: state + 1,
  };
});
```

:::
::::

## 安装依赖

创建好以上文件后，我们需要在所在文件夹中执行以下命令，安装脚本依赖：

```bash
npm install
```

## 测试脚本

安装依赖后，我们可以在当前文件夹中执行以下命令，测试脚本是否能正常运行：

```bash
npx dss local-run
```

如果一切正常，我们可以看到这样的输出：

```log
发布消息 { title: undefined, content: '你好，世界！这是第 1 条消息。', images: undefined }
```

## 部署脚本

```bash
npx dss deploy
```

执行脚本后会提示覆盖线上脚本，此时输入 `y` 即可确认：

```log
部署后将覆盖线上脚本，使用 --debug 选项可部署到调试环境。
? 确认继续？ › (y/N)
```

如果是第一次部署脚本，`dss` 会自动打开浏览器，让我们选择频道进行授权，授权成功后将继续完成部署。

::: tip 授权信息
授权成功后，密钥将会被自动保存到当前项目下的 `.dssrc` 文件中。该密钥可随时重新授权获得，如果你通过 Git 进行版本管理，建议将 `.dssrc` 文件加入 `.gitignore` 中。
:::

::: tip 脚本网络环境
盯梢脚本默认部署在境外，所以请求国内网站的速度可能会受到影响，未来将会支持指定不同地区。
:::

::: warning 大小限制
盯梢脚本部署限制大小为打包后 1MB，超过限制的脚本将无法部署。
:::

## 执行脚本

```bash
npx dss run
```

执行结果类似：

```log
执行成功，正在等待日志…
[2099-01-01T00:00:00.000Z] 执行开始 (00000000-0000-0000-0000-000000000000)
[2099-01-01T00:00:00.001Z] 发布消息 { content: '你好，世界！' }
[2099-01-01T00:00:01.000Z] 执行结束 (00000000-0000-0000-0000-000000000000)
```

如果你订阅了这个频道（创建频道后会自动订阅）并且一切顺利的话，应该已经收到了这条消息的推送。

## 配置定时执行

在手动执行脚本的基础上，我们可以通过配置实现比如每天的某个时间，或者每隔一段时间自动执行脚本。

此时我们需要在 `package.json` 文件中添加相应的配置：

:::: code-group
::: code-group-item package.json

```json {3-5}
{
  "exports": "./script.js",
  "dss": {
    "schedule": "rate(1h)"
  },
  "dependencies": {
    "@digshare/script": "^0.4.0"
  }
}
```

:::
::::

以上配置表示脚本将每隔一小时运行一次，盯梢支持 `rate(...)` 和 `cron(...)` 两种表达式，但实际执行间隔不能低于 30 分钟，配置详情请参考[定时执行](/script/scheduling.md)。

配置完成后，别忘了执行命令，将脚本部署到服务器上：

```bash
npx dss deploy
```

部署成功后，脚本就会按照配置的时间自动执行了。

我们提供了常见的脚本类型作为[示例](/script/examples/)，供用户参考复制和修改。

[node-js]: https://nodejs.org/
[vs-code]: https://code.visualstudio.com/
