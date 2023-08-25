<script setup>
  import {SCRIPT_SCHEDULE_MIN_INTERVAL, SCRIPT_TIME_QUOTA} from '../constants';
</script>

# 定时执行

盯梢脚本支持两种定时执行的方式：`rate` 和 `cron`。在 `package.json` 文件中的 `dss` 字段中添加 `schedule` 字段，指定定时执行的方式和时间。

::: warning 频率和时间限制

- 定时执行的时间间隔最小为 {{SCRIPT_SCHEDULE_MIN_INTERVAL}}，低于该时间间隔的脚本将无法部署。
- 定时执行的脚本最近 24 小时内执行总时间不能超过 {{SCRIPT_TIME_QUOTA}}。

:::

::: tip 部署相关
添加定时执行配置后，再次部署即可生效。注意调试环境（通过 `--debug` 部署的）脚本仅支持手动触发。
:::

## rate(...)

`rate()` 表达式用来指定执行时间间隔，格式可以参考 [ms][ms] 库。

::: code-group

```json [package.json] {3}
{
  "dss": {
    "schedule": "rate(1h)"
  }
}
```

:::

## cron(...)

`cron()` 表达式用来指定执行时间，格式可以参考 [cron-parser][cron-parser] 库。

::: code-group

```json [package.json] {3}
{
  "dss": {
    "schedule": "cron(0 9 * * *)"
  }
}
```

:::

[ms]: https://www.npmjs.com/package/ms
[cron-parser]: https://www.npmjs.com/package/cron-parser
