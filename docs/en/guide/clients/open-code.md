# 3.3 OpenCode

> OpenCode uses the **OpenAI protocol**, with the Base URL `https://axiomcode.top/v1`.

## Installation

Choose any one method:

```bash
# Global install via npm
npm install -g opencode-ai

# Or Homebrew (macOS)
brew install sst/tap/opencode

# Or the install script
curl -fsSL https://opencode.ai/install | bash
```

Verify:

```bash
opencode --version
```

## Configuration

OpenCode reads `~/.config/opencode/config.json` (Windows: `%USERPROFILE%\.config\opencode\config.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "axiom": {
      "name": "AxiomCode",
      "npm": "@ai-sdk/openai-compatible",
      "options": {
        "baseURL": "https://axiomcode.top/v1",
        "apiKey": "sk-axiom-YourKey"
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

## Usage

Start it from your project directory, press `Ctrl + P` to open the Provider menu, and select **axiom** along with the model you want to use:

```bash
cd path/to/project
opencode
```

## Notes

- Logs are located in `~/.config/opencode/log/`.
- A single config file can hold multiple providers at the same time.
- The model IDs under `models` must match the models available in the console. For the full list, see [Supported Models](/en/guide/models).

---

Next: [3.4 OpenClaw](/en/guide/clients/open-claw)
