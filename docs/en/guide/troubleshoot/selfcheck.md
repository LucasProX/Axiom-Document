# 4.1 Self-check Commands

> When something goes wrong with your integration, start with a single `curl` command that hits the relay directly, **bypassing the client**, to quickly tell whether the problem is on the "backend / key" side or the "client configuration" side.

## 1. OpenAI Protocol Self-check (Codex / OpenCode, etc.)

::: code-group

```bash [macOS / Linux]
curl https://axiomcode.top/v1/chat/completions \
  -H "Authorization: Bearer sk-axiom-YourKey" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5-codex",
    "messages": [{"role": "user", "content": "ping"}]
  }'
```

```powershell [Windows PowerShell]
curl https://axiomcode.top/v1/chat/completions `
  -H "Authorization: Bearer sk-axiom-YourKey" `
  -H "Content-Type: application/json" `
  -d '{ "model": "gpt-5-codex", "messages": [{"role":"user","content":"ping"}] }'
```

:::

A successful response looks roughly like this:

```json
{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "choices": [{ "message": { "role": "assistant", "content": "pong" } }]
}
```

## 2. Anthropic Protocol Self-check (Claude Code / OpenClaw, etc.)

```bash
curl https://axiomcode.top/v1/messages \
  -H "x-api-key: sk-axiom-YourKey" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-6",
    "max_tokens": 64,
    "messages": [{"role": "user", "content": "ping"}]
  }'
```

A JSON response containing a `content` field means success.

## 3. Interpreting the Self-check Result

| Result | Meaning | Next step |
| --- | --- | --- |
| **200 OK** (JSON) | Backend healthy, key valid | The problem is on the client side; check environment variables / config files |
| **401** Unauthorized | Key invalid / deactivated | Verify it in the console, and recreate it if necessary |
| **402** | Insufficient balance | Go to [Recharge](/en/guide/prepare/recharge) |
| **404** Not Found | Wrong URL or model ID | Check the `/v1` path and confirm the model name |
| **429** Too Many Requests | Rate limit triggered | Lower concurrency or retry later |
| **5xx** | Temporary backend fluctuation | Retry after a few minutes; contact support if it persists |
| Network timeout | DNS / firewall issue | Switch networks, disable proxy / VPN and retry |

## 4. Adding Verbose Logging to curl

Add `-v` to see the full request / response headers, which helps diagnose whether a proxy has tampered with the request:

```bash
curl -v https://axiomcode.top/v1/chat/completions ...
```

---

Next: [4.2 Common Errors](/en/guide/troubleshoot/errors)
