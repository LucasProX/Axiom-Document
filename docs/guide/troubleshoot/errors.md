# 4.2 常见错误

遇到报错先别慌，对照下表多半能解决。建议先跑一遍 [4.1 自检命令](/guide/troubleshoot/selfcheck) 定位问题层级。

## 401 Unauthorized

**现象：** 日志出现 `401` 或「鉴权失败」。

**原因：** 密钥有拼写错误、密钥被停用 / 删除、协议字段填错（OpenAI 用 `Authorization: Bearer`，Anthropic 用 `x-api-key`）。

**处理：** 到控制台核对密钥状态，对比首尾各 4 位字符；跑自检命令确认。

## 404 Not Found

**现象：** 返回 `404` 或「model not found」。

**原因：** 地址结构不对（Anthropic 协议**不应**带 `/v1`，OpenAI 协议**必须**带 `/v1`）、模型 ID 拼错、或模型未对账户开放。

**处理：** 使用正确的地址格式；从控制台复制官方模型 ID；在设置中确认模型已启用。

## 402 Payment Required

**现象：** `insufficient_balance`、`payment required` 或额度超限。

**处理：** 到 [https://axiomcode.top/billing](https://axiomcode.top/billing) 充值（推荐买 [兑换码](/guide/prepare/redeem)）。

## 429 Too Many Requests

**现象：** 请求过于频繁被限流。

**处理：** 降低并发请求数；避免对大文件持续整页改写；若 IP 被标记，换个网络再试。

## 5xx 服务端错误

**现象：** 后端临时压力或上游波动。

**处理：** 重试即可；若持续超过 10 分钟不稳定，联系客服。

## 网络层故障

**现象：** 连接被拒、SSL 握手失败、超时。

**处理：** 关闭 VPN / 代理；换网络（用手机热点测一下）；校准系统时间。

## 客户端环境问题

**现象：** 找不到 CLI 命令或环境变量不生效。

**处理：** Windows 上 `setx` 后需重启终端；macOS 用 zsh 时写到 `~/.zshrc`；用 `echo $变量名` 确认变量已输出。

## 联系客服前，请准备这些信息

如果对照上面仍未解决，联系客服时附上以下信息，能大幅加快定位：

```text
账号邮箱：
令牌前后 4 位：sk-axiom-XXXX … XXXX（切勿发送完整密钥）
出错时间（含时区）：
客户端 / 版本：如 Codex CLI、Claude Code
协议 & Base URL：OpenAI https://axiomcode.top/v1 或 Anthropic https://axiomcode.top
调用的模型：如 gpt-5-codex、claude-sonnet-4-6
错误码 / 报错信息：
自检结果：粘贴「4.1 自检命令」的输出
```

::: warning 注意密钥安全
只提供令牌的**前后 4 位**，切勿发送完整 `sk-...` 密钥。
:::

---

下一步：[常见问题 FAQ](/guide/faq)
