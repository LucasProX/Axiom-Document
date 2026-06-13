# 3.4 OpenClaw

> OpenClaw uses the **Anthropic protocol**. The Base URL **must not include `/v1`**.

## Two Things to Prepare

| Setting | Value |
| --- | --- |
| **Base URL** | `https://axiomcode.top` (**without** `/v1`) |
| **API Key** | `sk-axiom-YourKey` |

::: info System requirements

- **Node.js** 18 or later
- **OS**: Windows 10/11 · macOS · Linux (major distros)
- Network access to `axiomcode.top`

:::

## Local Installation

```bash
npm install -g openclaw
openclaw --version  # verify: printing a version number means it installed
```

Config file location:

- Linux / macOS: `~/.openclaw/config.yaml`
- Windows: `%USERPROFILE%\.openclaw\config.yaml`

```yaml
provider:
  type: anthropic
  base_url: https://axiomcode.top
  api_key: sk-axiom-YourKey

model:
  default: claude-sonnet-4-6
```

Start:

```bash
openclaw
```

## Web / Cloud Deployment

When using the hosted version of OpenClaw, go to **Settings → Provider** to configure:

1. Select "Anthropic Compatible" as the Provider type.
2. Set the Base URL to `https://axiomcode.top`.
3. Set the API Key to a key starting with `sk-axiom-`.
4. Test the connection; a response of `200 OK / Connected` means success.

## Troubleshooting

| Symptom | Resolution |
| --- | --- |
| **401** | Check the Key; copy it directly from the console to avoid stray spaces |
| **404** | Confirm the Base URL does **not** include `/v1` |
| Abnormal speed | AxiomCode is already optimized for China; adding an extra proxy on top may actually slow things down, so try disabling it |

---

Next: [Chapter 4 · Verification and Troubleshooting](/en/guide/troubleshoot/selfcheck)
