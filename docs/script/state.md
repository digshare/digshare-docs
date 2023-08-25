<script setup>
  import {SCRIPT_STATE_MAX_SIZE} from '../constants';
</script>

# 状态 State

盯梢脚本提供了一个状态对象用于储存脚本执行过程中产生的需要持久化的数据：

```js
import {script} from '@digshare/script';

export default script(async state => {
  // ...
});
```

状态的初始值是 `undefined`，可以通过返回值进行更新。比如我们可以将状态作为一个简单的计数器使用：

```js
import {script} from '@digshare/script';

export default script(async (state = 0) => {
  return {
    state: state + 1,
  };
});
```

更多的时候，状态可以用于记录已经处理过的数据，避免重复发送消息。

```js
export default script(async ({handled} = {handled: []}) => {
  const response = await fetch('https://example.com/latest-message');

  const {id, content} = await response.json();

  if (handled.includes(id)) {
    // 已经处理过，直接返回。
    return;
  }

  return {
    // 将新的 id 加入 state 中。
    state: {
      handled: [...handled, id],
    },
    message: content,
  };
});
```

::: warning 序列化和大小限制
状态对象将会被序列化为 JSON 后传输，请确保对应的值可以被正确序列化。同时，状态对象被序列化为 JSON 字符串并进行 utf-8 编码后，大小不能超过 {{SCRIPT_STATE_MAX_SIZE}}。

介于一般只需要储存最近的数据用于去重，当记录数量很大时，可以考虑移除最早的数据。
:::
