# 3.3 OpenCode

> OpenCode 走 **OpenAI 协议**，Base URL 为 `https://axiomcode.top/v1`。

## 安装

任选一种：

```bash
# npm 全局安装
npm install -g opencode-ai

# 或 Homebrew（macOS）
brew install sst/tap/opencode

# 或安装脚本
curl -fsSL https://opencode.ai/install | bash
```

验证：

```bash
opencode --version
```

## 配置

OpenCode 读取 `~/.config/opencode/config.json`（Windows：`%USERPROFILE%\.config\opencode\config.json`）：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "axiom": {
      "name": "AxiomCode",
      "npm": "@ai-sdk/openai-compatible",
      "options": {
        "baseURL": "https://axiomcode.top/v1",
        "apiKey": "sk-axiom-你的Key"
      },
      "models": {
        "gpt-5-codex": { "name": "GPT-5 Codex" },
        "claude-sonnet-4-6": { "name": "Claude Sonnet 4.6" },
        "claude-opus-4-7": { "name": "Claude Opus 4.7" }
      }
    }
  }
}
```

## 使用

进入项目目录后启动，按 `Ctrl + P` 打开 Provider 菜单，选择 **axiom** 与想用的模型：

```bash
cd path/to/project
opencode
```

## 说明

- 日志位于 `~/.config/opencode/log/`。
- 一个配置文件里可以同时保留多个 provider。
- `models` 里的模型 ID 必须与控制台中可用的模型一致，完整列表见 [支持的模型](/guide/models)。

---

下一步：[3.4 OpenClaw](/guide/clients/open-claw)
