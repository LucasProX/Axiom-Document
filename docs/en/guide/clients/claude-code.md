# 3.2 Claude Code

> Claude Code uses the **Anthropic protocol**. The Base URL **must not include `/v1`**, otherwise you'll get a 404.

## Prepare two things

| Setting | Value |
| --- | --- |
| **Base URL** | `https://axiomcode.top` (note: **no** `/v1`) |
| **API Key** | `sk-axiom-your-key` |

::: info System requirements

- **Node.js** 18 or later (LTS recommended)
- **OS**: Windows 10/11 · macOS · Linux (major distros; WSL also works on Windows)
- Network access to `axiomcode.top`

:::

## Install

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

## Environment variables

Set the address and key as environment variables (pick your OS):

::: code-group

```bash [macOS / Linux]
# Append to ~/.zshrc or ~/.bashrc, then run source to apply
export ANTHROPIC_API_KEY="sk-axiom-your-key"
export ANTHROPIC_BASE_URL="https://axiomcode.top"
```

```powershell [Windows PowerShell]
# Permanently writes user environment variables; takes effect after reopening the terminal
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "sk-axiom-your-key", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://axiomcode.top", "User")
```

:::

## Config file method

`settings.json` location:

- macOS: `~/Library/Application Support/Claude/settings.json`
- Linux: `~/.config/claude/settings.json`
- Windows: `%APPDATA%\Claude\settings.json`

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-axiom-your-key",
    "ANTHROPIC_BASE_URL": "https://axiomcode.top"
  }
}
```

To set a default model for a single project, create `.claude/config.json` in the project root:

```json
{
  "model": "claude-sonnet-4-6"
}
```

## Verify

Enter any project directory, run `claude`, and ask it to analyze the project files:

```bash
cd path/to/project
claude
```

If the model reads and responds to the project content normally, the connection is working. See [Supported Models](/en/guide/models) for available models.

::: warning The two most common pitfalls
- **404**: The Base URL includes `/v1` — just remove it.
- **401**: The Key has an extra space or is missing its prefix when copied — copy it directly from the console.
:::

---

Next: [3.3 OpenCode](/en/guide/clients/open-code)
