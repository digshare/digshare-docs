# NPM 包新版本发布

::: code-group

```js [script.js]
import {script} from '@digshare/script';

export default script(async state => {
  const response = await fetch('https://registry.npmjs.org/typescript');

  const {
    'dist-tags': {latest},
  } = await response.json();

  if (!state) {
    // 初始化 state 为当前版本。
    return {
      state: {latest},
    };
  }

  if (state.latest === latest) {
    // 当前版本没有更新，不发送消息。
    return;
  }

  return {
    message: `TypeScript 发布了新版本 ${latest}。`,
    state: {latest},
  };
});
```

```json [package.json]
{
  "name": "script",
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
