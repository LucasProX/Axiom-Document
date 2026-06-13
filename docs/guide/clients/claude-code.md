# 3.2 Claude Code 系列

> Claude Code 走 **Anthropic 协议**，Base URL **不要带 `/v1`**，否则会 404。

## 准备两样东西

| 配置项 | 值 |
| --- | --- |
| **Base URL** | `https://axiomcode.top`（注意：**无** `/v1`） |
| **API Key** | `sk-axiom-你的Key` |

## 安装

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

## 环境变量

**macOS / Linux** —— 追加到 `~/.zshrc` 或 `~/.bashrc`：

```bash
export ANTHROPIC_API_KEY="sk-axiom-你的Key"
export ANTHROPIC_BASE_URL="https://axiomcode.top"
```

**Windows PowerShell**：

```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "sk-axiom-你的Key", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://axiomcode.top", "User")
```

## 配置文件方式

`settings.json` 位置：

- macOS：`~/Library/Application Support/Claude/settings.json`
- Linux：`~/.config/claude/settings.json`
- Windows：`%APPDATA%\Claude\settings.json`

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-axiom-你的Key",
    "ANTHROPIC_BASE_URL": "https://axiomcode.top"
  }
}
```

为单个项目指定默认模型，可在项目根目录创建 `.claude/config.json`：

```json
{
  "model": "claude-sonnet-4-6"
}
```

## 验证

进入任意项目目录，运行 `claude`，让它分析一下项目文件：

```bash
cd path/to/project
claude
```

模型能正常读取并回应项目内容，即接入成功。可用模型见 [支持的模型](/guide/models)。

::: warning 最常见的两个坑
- **404**：Base URL 带了 `/v1`，去掉即可。
- **401**：Key 复制时多了空格或缺了前缀，直接从控制台复制。
:::

---

下一步：[3.3 OpenCode](/guide/clients/open-code)
