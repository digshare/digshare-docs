<script setup>
  import {
    SCRIPT_SCHEDULE_MIN_INTERVAL,
    SCRIPT_TIME_QUOTA,
    SCRIPT_TIMEOUT,
    SCRIPT_CODE_MAX_SIZE,
    SCRIPT_STATE_MAX_SIZE
  } from '../constants';
</script>

# 运行环境

盯梢脚本目前仅支持 Node.js，未来可能添加更多运行时。

| 运行时     | 可选区域         |
| ---------- | ---------------- |
| Node.js 18 | 亚太地区（香港） |

## 限制

| 限制项           | 限制值                                   |
| ---------------- | ---------------------------------------- |
| 定时脚本执行间隔 | {{SCRIPT_SCHEDULE_MIN_INTERVAL}}         |
| 定时脚本执行时间 | 最近 24 小时内总计 {{SCRIPT_TIME_QUOTA}} |
| 脚本超时         | {{SCRIPT_TIMEOUT}}                       |
| 脚本大小         | {{SCRIPT_CODE_MAX_SIZE}}                 |
| 状态对象大小     | {{SCRIPT_STATE_MAX_SIZE}}                |
