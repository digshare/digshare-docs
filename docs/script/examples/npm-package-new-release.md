<script setup>
  import {SCRIPT_SDK_VERSION} from '../../variables';
</script>

# NPM 包新版本发布

::: code-group

```json-vue [package.json]
{
  "name": "script",
  "exports": "./script.js",
  "dss": {
    "schedule": "rate(1h)"
  },
  "dependencies": {
    "@digshare/script": "^{{SCRIPT_SDK_VERSION}}"
  }
}
```

:::

::: code-group

```js [script.js]
import {script} from '@digshare/script';

export default script(async state => {
  const response = await fetch('https://registry.npmjs.org/typescript/latest');

  const {version: latest} = await response.json();

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

:::
