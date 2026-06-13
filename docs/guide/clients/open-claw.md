# 3.4 OpenClaw

> OpenClaw 走 **Anthropic 协议**，Base URL **不要带 `/v1`**。

## 准备两样东西

| 配置项 | 值 |
| --- | --- |
| **Base URL** | `https://axiomcode.top`（**无** `/v1`） |
| **API Key** | `sk-axiom-你的Key` |

## 本地安装

```bash
npm install -g openclaw
```

配置文件位置：

- Linux / macOS：`~/.openclaw/config.yaml`
- Windows：`%USERPROFILE%\.openclaw\config.yaml`

```yaml
provider:
  type: anthropic
  base_url: https://axiomcode.top
  api_key: sk-axiom-你的Key

model:
  default: claude-sonnet-4-6
```

启动：

```bash
openclaw
```

## Web / 云端部署

使用托管版 OpenClaw 时，进入 **Settings → Provider** 配置：

1. Provider 类型选择「Anthropic Compatible」。
2. Base URL 填 `https://axiomcode.top`。
3. API Key 填以 `sk-axiom-` 开头的密钥。
4. 测试连接，返回 `200 OK / Connected` 即成功。

## 排错

| 现象 | 处理 |
| --- | --- |
| **401** | 核对 Key，直接从控制台复制以避免空格 |
| **404** | 确认 Base URL **不带** `/v1` |
| 速度异常 | AxiomCode 已做国内优化，叠加额外代理反而可能变慢，可尝试关闭 |

---

下一步：[第四章 · 验证与排错](/guide/troubleshoot/selfcheck)
