# Webhook

盯梢支持通过 webhook 调用脚本，支持调用参数（query string 和 body）和设定返回内容。

参考例子：https://github.com/digshare-scripts/webhook-message

## 获取 webhook

```sh
npx dss webhook
npx dss webhook --debug # 获取调试环境对应的 webhook
```

## 读取参数

盯梢 webhook 将 query string 和 body 参数合并为 `params` 对象，其中 query string 优先级更高，body 则支持 `application/json` 和 `application/x-www-form-urlencoded` 两种格式。

在脚本中，可以通过第二个参数的 `params` 属性获得：

```js
import {script} from '@digshare/script';

export default script((_state, {params: {message}}) => {
  return {
    message: `这是来自 webhook 的消息：${message}`,
  };
});
```

在调试时，可以通过 `--params` 选项传递参数：

```sh
# 使用 URL 编码
npx dss local-run --params message=hello
# 使用 JSON 格式
npx dss local-run --params {\"message\":\"hello\"}

# 其他支持 --params 的命令/参数组合
npx dss run --params message=hello
npx dss deploy --run --params message=hello
npx dss deploy --dry-run --params message=hello
```

## 返回内容

如果调用 webhook 的服务要求特定的返回内容，可以通过 `response` 属性传递：

```js
import {script} from '@digshare/script';

export default script(() => {
  return {
    response: '这是返回内容',
  };
});
```

也可以设置特定的响应头，比如想返回 JSON 格式的内容，建议同时设定 `content-type` 响应头：

```js
import {script} from '@digshare/script';

export default script(() => {
  return {
    response: {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        status: 'ok',
      }),
    },
  };
});
```

## 异步 webhook

盯梢脚本 webhook 默认会等待脚本执行结果，这可能需要 2~3 秒的时间。如果你不关心盯梢脚本响应内容以及是否成功执行，可以使用异步 webhook：在原有 webhook 后加上 `/async` 即可。

如，原有 webhook 为：

```
https://www.dingshao.cn/webhook/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

则异步 webhook 为：

```
https://www.dingshao.cn/webhook/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/async
```

异步 webhook 将始终响应 200 状态码和空内容。
