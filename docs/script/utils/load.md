# load()

盯梢脚本经常会涉及到网络请求，偶尔会遇到临时的错误，此时盯梢也会像频道主推送错误提示。但很多时候，这些错误是可以忽略的，或者可以通过重试来解决。

## 例子

```ts
import {load} from '@digshare/script';

// 获取文本
const html = await load('https://example.com', 'text');

// 获取 JSON 值
const data = await load('https://api.example.com/list', 'json');

// 获取流
const stream = await load('https://example.com/image.png');
```

## 签名

```ts
type LoadOptions = {
  /**
   * 尝试次数，默认为 3。
   */
  attempts?: number;
  /**
   * 尝试间隔（毫秒），默认为 1000。
   */
  attemptInterval?: number;
} & RequestInit;

type LoadType = 'text' | 'json' | 'blob' | 'arrayBuffer';

declare function load(
  input: NodeJS.fetch.RequestInfo,
  options?: LoadOptions,
): Promise<ReadableStream>;
declare function load<TType extends LoadType>(
  input: NodeJS.fetch.RequestInfo,
  type: TType,
  options?: LoadOptions,
): Promise<Awaited<ReturnType<Response[TType]>>>;
```
