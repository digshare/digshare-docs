# 简介

为了方便频道主使用脚本发掘消息，盯梢提供了简单易用的命令行 SDK，频道主可以一键将 Node.js 脚本部署到云端，实现定时自动执行。

[快速上手](/script/getting-started)

## 示例

```js
import {script} from '@digshare/script';

export default script((state = 1) => {
  return {
    message: `你好，世界！这是第 ${state} 条消息。`,
    state: state + 1,
  };
});
```
