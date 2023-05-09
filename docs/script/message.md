# 消息 Message

盯梢脚本通过在返回值中指定 `message` 字段发送消息。

```js
export default script(async () => {
  return {
    message: '你好，世界！',
  };
});
```

## message.content

`message.content` 是消息正文。当 `message` 是字符串时，其实正等价于 `message.content`。所以以下用法和上方的例子是等价的。

```js
export default script(async () => {
  return {
    message: {
      content: '你好，世界！',
    },
  };
});
```

`message.content` 支持常见的内联 markdown 样式，比如 *`*斜体*`*、**`**加粗**`**、`` `内联代码` `` 等。同时也支持部分块级元素：

- `>` 引用。
- ` ``` ` 代码片段。
- `1.` 有序列表。
- `-` 无序列表。
- `![alt][0]` 图片。注意图片仅支持通过引用指定，详见下方的 `message.images`。

## message.title

除了消息正文外，还可以通过 `message.title` 指定消息标题。注意消息标题是纯文本。

```js
export default script(async () => {
  return {
    message: {
      title: '友善的标题',
      content: '友善的内容',
    },
  };
});
```

## message.images

脚本可以通过 `message.images` 数组来提供图片，每一个数组元素支持如下类型：

- URL 字符串
- `ArrayBuffer`
- `Blob`
- `ReadableStream`

以 URL 和 `ReadableStream` 为例：

:::: code-group
::: code-group-item URL 字符串

```js
export default script(async () => {
  return {
    message: {
      content: '你好，世界！',
      images: [
        'https://example.com/image1.png',
        'https://example.com/image2.png',
      ],
    },
  };
});
```

:::
::::

:::: code-group
::: code-group-item ReadableStream

```js
export default script(async () => {
  const response = await fetch('https://example.com/image.png');

  if (!response.ok) {
    throw new Error('图片请求失败');
  }

  return {
    message: {
      content: '你好，世界！',
      images: [response.body],
    },
  };
});
```

:::
::::

`message.images` 中的图片会自动追加到消息正文的末尾。除此之外，还可以通过内联 markdown 语法将图片插入到正文中：

```js
export default script(async () => {
  return {
    message: {
      content: `\
你好，世界！

这是第一张图片：

![图片1][0]

这是第二张图片：

![图片2][1]
`,
      images: [
        'https://example.com/image1.png',
        'https://example.com/image2.png',
      ],
    },
  };
});
```

::: tip 提示
注意 Markdown 中的图片序号是从 0 开始的，即 `[0]` 是第一张，`[1]` 是第二张，以此类推。
:::
