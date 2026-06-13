# 4.1 自检命令

> 接入出问题时，先用一条 `curl` 命令直接打中转，**绕开客户端**，快速判断是"后端 / 密钥"的问题，还是"客户端配置"的问题。

## 一、OpenAI 协议自检（Codex / OpenCode 等）

::: code-group

```bash [macOS / Linux]
curl https://axiomcode.top/v1/chat/completions \
  -H "Authorization: Bearer sk-axiom-你的Key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5-codex",
    "messages": [{"role": "user", "content": "ping"}]
  }'
```

```powershell [Windows PowerShell]
curl https://axiomcode.top/v1/chat/completions `
  -H "Authorization: Bearer sk-axiom-你的Key" `
  -H "Content-Type: application/json" `
  -d '{ "model": "gpt-5-codex", "messages": [{"role":"user","content":"ping"}] }'
```

:::

成功响应大致如下：

```json
{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "choices": [{ "message": { "role": "assistant", "content": "pong" } }]
}
```

## 二、Anthropic 协议自检（Claude Code / OpenClaw 等）

```bash
curl https://axiomcode.top/v1/messages \
  -H "x-api-key: sk-axiom-你的Key" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-6",
    "max_tokens": 64,
    "messages": [{"role": "user", "content": "ping"}]
  }'
```

返回带 `content` 字段的 JSON 即成功。

## 三、如何用自检结果判断问题

| 结果 | 含义 | 下一步 |
| --- | --- | --- |
| **200 OK**（JSON） | 后端正常、密钥有效 | 问题在客户端，去检查环境变量 / 配置文件 |
| **401** Unauthorized | 密钥无效 / 已停用 | 到控制台核对，必要时重建 |
| **402** | 余额不足 | 去 [充值](/guide/prepare/recharge) |
| **404** Not Found | 地址或模型 ID 不对 | 检查 `/v1` 路径、确认模型名 |
| **429** Too Many Requests | 触发限流 | 降低并发或稍后重试 |
| **5xx** | 后端临时波动 | 几分钟后重试，持续则联系客服 |
| 网络超时 | DNS / 防火墙问题 | 换网络，关闭代理 / VPN 再试 |

## 四、给 curl 加详细日志

加上 `-v` 可以看到完整的请求 / 响应头，便于排查代理是否篡改了请求：

```bash
curl -v https://axiomcode.top/v1/chat/completions ...
```

---

下一步：[4.2 常见错误](/guide/troubleshoot/errors)
