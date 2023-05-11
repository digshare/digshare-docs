# 高级用法

## 发布多条消息或状态更新

盯梢脚本支持通过生成器函数多次提交更新：

```js
export default script(async function* () {
  yield {
    message: {
      content: '第一条消息',
      tags: ['分类1'],
    },
    state: 1,
  };

  yield {
    message: {
      content: '第二条消息',
      tags: ['分类2'],
    },
    state: 2,
  };

  yield {
    message: {
      content: '第三条消息',
      tags: ['分类3'],
    },
    state: 3,
  };
});
```
