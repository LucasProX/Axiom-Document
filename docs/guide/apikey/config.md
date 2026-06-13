# 2.3 查看接入配置

> 接入任何客户端，本质上只需要两样东西：**接口地址（Base URL）** 和 **API Key**。本节说明如何获取它们，以及两种协议的地址区别。

## 两个 Base URL

AxiomCode 同时提供两套协议，**地址不同，别填错**：

| 协议 | Base URL | 适用客户端 |
| --- | --- | --- |
| **OpenAI 兼容** | `https://axiomcode.top/v1` | Codex、OpenCode、OpenAI SDK |
| **Anthropic 兼容** | `https://axiomcode.top` | Claude Code、OpenClaw |

::: warning 注意 `/v1`
- OpenAI 协议地址**必须带** `/v1`。
- Anthropic 协议地址**不要带** `/v1`，否则会 404。
:::

::: tip 以控制台显示为准
实际 Base URL 请以控制台 / 密钥页面显示的为准，AxiomCode 偶尔会调整接入域名。
:::

## 查看凭证与余额

进入控制台仪表盘 [https://axiomcode.top](https://axiomcode.top)，在右侧的「凭证与余额」区域可以看到接入信息；点击密钥列表中的「接入配置」按钮，会弹出该 Key 的地址、可用模型等信息。

![查看接入配置](/images/apikey/08-view-config.png)

完整的模型 ID 列表见 [支持的模型](/guide/models)。

## 环境变量示例

把地址和密钥写入环境变量，大多数客户端会自动读取。

**OpenAI 协议（Codex / OpenCode）：**

```bash
# macOS / Linux
export OPENAI_API_KEY="sk-axiom-你的Key"
export OPENAI_BASE_URL="https://axiomcode.top/v1"
```

**Anthropic 协议（Claude Code / OpenClaw）：**

```bash
# macOS / Linux
export ANTHROPIC_API_KEY="sk-axiom-你的Key"
export ANTHROPIC_BASE_URL="https://axiomcode.top"
```

Windows 用户用 PowerShell 永久写入：

```powershell
[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "sk-axiom-你的Key", "User")
[Environment]::SetEnvironmentVariable("OPENAI_BASE_URL", "https://axiomcode.top/v1", "User")
```

::: danger 切勿泄露密钥
最常见的事故，就是把含密钥的 `.env`、`config.toml`、`config.json` 推到了公开仓库。提交前务必把它们加入 `.gitignore`。
:::

---

下一步：[第三章 · 客户端接入](/guide/clients/codex)
