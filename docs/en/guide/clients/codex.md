# 3.1 Codex

> Applies to the **Codex CLI, Codex VSCode extension, and Codex mobile app**. All three share the same API configuration; only the place where you enter it differs.

## Prepare two things

| Setting | Value |
| --- | --- |
| **Base URL** | `https://axiomcode.top/v1` |
| **API Key** | `sk-axiom-xxxx` (from [2.2 Create a Key](/en/guide/apikey/create)) |

## Method 1: Environment variables (fastest)

**macOS / Linux** — append to `~/.zshrc` or `~/.bashrc`:

```bash
export OPENAI_API_KEY="sk-axiom-your-key"
export OPENAI_BASE_URL="https://axiomcode.top/v1"
```

Run `source ~/.zshrc` (or `source ~/.bashrc`) to apply.

**Windows PowerShell** (persisted):

```powershell
[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "sk-axiom-your-key", "User")
[Environment]::SetEnvironmentVariable("OPENAI_BASE_URL", "https://axiomcode.top/v1", "User")
```

Takes effect after closing and reopening the terminal.

## Method 2: Config file

Config file location:

- macOS / Linux: `~/.codex/config.toml`
- Windows: `C:\Users\<username>\.codex\config.toml`

```toml
[provider.axiom]
base_url = "https://axiomcode.top/v1"
api_key = "sk-axiom-your-key"

[default]
provider = "axiom"
model = "gpt-5-codex"
```

## Verify

Run in the terminal:

```bash
codex --version
codex chat "Introduce quicksort in one sentence"
```

If it returns a normal response, the connection is working.

## Codex VSCode extension

1. Search for and install "Codex" in the VSCode extension marketplace.
2. Open Settings (`Ctrl/⌘ + ,`) and search for `codex`.
3. Fill in two fields:
   - `Codex: Api Base Url` → `https://axiomcode.top/v1`
   - `Codex: Api Key` → `sk-axiom-your-key`
4. Press `Ctrl/⌘ + Shift + P`, type `Codex: Reload`, or restart VSCode.
5. Open any file and press the default shortcut `Ctrl/⌘ + I` to test.

## Codex mobile app

1. Search for and install the "Codex" app from the app store.
2. Go to **Settings → API Access**.
3. Fill in:
   - **API URL**: `https://axiomcode.top/v1`
   - **API Key**: `sk-axiom-your-key`
4. Save and start a new conversation to test.

::: tip Recommendation
Generate a dedicated Key for the mobile app. If the device is lost, you only need to disable this Key, without affecting other Keys on your computer or server.
:::

## FAQ

| Question | Notes |
| --- | --- |
| Which model should I pick? | `gpt-5-codex` is the default recommendation; see the Key's "Access Configuration" dialog for available models |
| Returns 401 | 99% of the time the Key is wrong (extra space, missing `sk-` prefix) — check it on the Key management page |
| Returns 404 / model not found | The Base URL is wrong (missing `/v1` or has an extra path), or the model is not available for your account |

---

Next: [3.2 Claude Code](/en/guide/clients/claude-code)
