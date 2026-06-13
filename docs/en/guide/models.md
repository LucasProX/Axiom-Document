# Supported Models

Axiom aggregates models from Anthropic, OpenAI, Google, xAI, and major Chinese providers, all callable through a unified OpenAI-compatible interface. The **Model Name** in the tables below is the value to put in the `model` field of your request.

::: tip Live models and pricing
The model list is continuously updated. For the most current full list and real-time ratios, refer to the **"Model Pricing"** page in the console: <a href="https://axiomcode.top" target="_blank" rel="noreferrer">axiomcode.top</a>.
:::

## Anthropic · Claude

| Model Name | Description |
| --- | --- |
| `claude-fable-5` | (Temporarily unavailable due to US government policy) Fable series |
| `claude-opus-4-8` | Opus flagship; top choice for complex reasoning and long-form writing |
| `claude-opus-4-7` | Previous-generation Opus |
| `claude-opus-4-6` | Early Opus version |
| `claude-sonnet-4-6` | Balanced performance and cost; suited for everyday use and coding |
| `claude-haiku-4-5-20251001` | Lightweight and ultra-fast; suited for high concurrency and short tasks |

## OpenAI · GPT

| Model Name | Type | Description |
| --- | --- | --- |
| `gpt-5.5` | Chat | Flagship general-purpose model |
| `gpt-5.5-openai-compact` | Chat | Compact version |
| `gpt-5.4` | Chat | Previous-generation flagship |
| `gpt-5.4-mini` | Chat | Lightweight and low-cost |
| `gpt-5.4-openai-compact` | Chat | Compact version |
| `codex-auto-review` | Coding | Code review |
| `gpt-image-2` | Image | Text-to-image |
| `codex-gpt-image-2` | Image | Image generation for coding scenarios |

## Google · Gemini

| Model Name | Type | Description |
| --- | --- | --- |
| `gemini-3.1-pro-preview-thinking` | Reasoning | Latest Pro thinking model |
| `gemini-3-pro-preview-thinking` | Reasoning | Pro thinking model (includes `-128` / `-512` thinking-budget variants) |
| `gemini-3.1-pro-preview` | Chat | Latest Pro |
| `gemini-3-pro-preview` | Chat | Pro |
| `gemini-3-flash-preview` | Chat | Flash; fast responses |
| `gemini-3.5-flash-c` | Chat | Flash with high caching (`-low-c` is the low-cache variant) |
| `gemini-2.5-pro` | Chat | Previous-generation Pro (`-thinking` is the thinking version) |
| `gemini-2.5-flash` | Chat | Previous-generation Flash |
| `gemini-2.5-flash-lite` | Chat | More lightweight Flash |
| `gemini-3-pro-image-preview` | Image | Native multimodal image generation |

## xAI · Grok

| Model Name | Type | Description |
| --- | --- | --- |
| `grok-3` | Chat | General-purpose chat |
| `grok-420-fast` | Chat | Fast version |
| `grok-420-fast-deepsearch` | Web search | Built-in deep web search |
| `grok-imagine-video` | Video | Text-to-video |
| `grok-imagine1.5-video` | Video | Text-to-video 1.5 |
| `grok-imagine-video-1.5-preview` | Video | Text-to-video 1.5 preview |

## Chinese Models

| Model Name | Provider | Description |
| --- | --- | --- |
| `deepseek-v4-pro` | DeepSeek | Flagship reasoning |
| `deepseek-v4-flash` | DeepSeek | Fast version |
| `qwen3.7-max` | Tongyi Qianwen | Flagship |
| `qwen3.7-plus` / `qwen3.6-plus` / `qwen3.5-plus` | Tongyi Qianwen | Plus series |
| `glm-5.1` / `glm-5` | Zhipu GLM | General-purpose chat |
| `kimi-k2.6` / `kimi-k2.5` | Moonshot Kimi | Long context |
| `minimax-m3` / `minimax-m2.7` / `minimax-m2.5` | MiniMax | General-purpose chat |
| `hy3-preview` | Tencent Hunyuan | Preview version |

## Xiaomi · MiMo

| Model Name | Type | Description |
| --- | --- | --- |
| `mimo-v2.5-pro` / `mimo-v2-pro` | Chat | Pro chat |
| `mimo-v2.5` | Chat | Standard chat |
| `mimo-v2-omni` | Multimodal | Omni-modal understanding |
| `mimo-v2.5-asr` | Speech recognition | Speech-to-text |
| `mimo-v2.5-tts` / `mimo-v2-tts` | Speech synthesis | Text-to-speech |
| `mimo-v2.5-tts-voiceclone` | Speech synthesis | Voice cloning |
| `mimo-v2.5-tts-voicedesign` | Speech synthesis | Voice design |

---

::: info Model groups (group ratios)
On the backend, models are divided into different **groups** by channel (such as `Claude - Max`, `哈吉米 Gemini`, `国产模型` (Chinese Models), etc.). Different groups correspond to different stability and price ratios, which you can select when creating a key in the console. For billing details, see [Recharge & Subscription](/en/guide/prepare/recharge).
:::
