# 调试脚本

脚本调试可以在本地和线上进行。

## 本地调试

::: tip 注意
本地调试时，脚本并不会实际发布消息。
:::

```bash
npx dss local-run
```

本地调试时，`dss` 将默认输出打包后的脚本及状态文件到项目下的 `.local` 文件夹。

如果需要在执行时重置状态，可以使用 `--reset-state` 选项：

```bash
npx dss local-run --reset-state
```

## 线上调试

线上调试主要提供了两个选项：

### --debug

使用 `--debug` 选项将脚本部署到调试环境。该环境不会自动执行脚本，不会覆盖已发布的正式环境脚本，其他行为与正式环境一致。

:::: code-group
::: code-group-item 使用示例

```bash
npx dss deploy --debug
npx dss deploy --debug --run
npx dss run --debug
npx dss logs --debug
```

:::
::::

::: warning 特别注意

1. 调试环境默认也会按照脚本执行实际发布消息。
2. 调试环境与正式环境共享状态读写，即调试环境中获得的状态与正式环境中获得的状态相同，且默认会按照脚本执行更新状态。

:::

### --dry-run

正式环境和调试环境下，都可以使用 `--dry-run` 选项。启用该选项后，脚本不会实际发布消息，也不会更新状态。

:::: code-group
::: code-group-item 使用示例

```bash
npx dss deploy --dry-run
npx dss deploy --dry-run --debug
npx dss run --dry-run
npx dss run --dry-run --debug
```

:::
::::

## 部署后执行

部署脚本后，可以通过 `npx dss run` 执行脚本，也可以在部署时通过 `--run` 或 `--dry-run` 直接执行。

:::: code-group
::: code-group-item 使用示例

```bash
npx dss deploy --run
npx dss deploy --dry-run
npx dss deploy --debug --run
npx dss deploy --debug --dry-run
```

:::
::::

## 查看日志

脚本执行时，会自动拉取日志。如果需要单独查看日志、或需要查看历史日志，则可以使用 `npx dss logs` 命令。

:::: code-group
::: code-group-item 使用示例

```bash
npx logs
npx logs --debug
npx logs --last=1d
```

:::
::::
