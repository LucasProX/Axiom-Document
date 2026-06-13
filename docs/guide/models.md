# 支持的模型

Axiom 聚合了 Anthropic、OpenAI、Google、xAI 以及主流国产厂商的模型，统一通过 OpenAI 兼容接口调用。下表中的 **模型名称** 即为请求里 `model` 字段应填写的值。

::: tip 实时模型与价格
模型列表会持续更新。最新的完整清单与实时倍率，请以控制台的 **「模型价格 / 定价」** 页面为准：<a href="https://axiomcode.top" target="_blank" rel="noreferrer">axiomcode.top</a>。
:::

## Anthropic · Claude

| 模型名称 | 说明 |
| --- | --- |
| `claude-opus-4-8` | Opus 旗舰，复杂推理与长文写作首选 |
| `claude-opus-4-7` | Opus 上一代 |
| `claude-opus-4-6` | Opus 早期版本 |
| `claude-sonnet-4-6` | 性能与成本均衡，适合日常与编码 |
| `claude-haiku-4-5-20251001` | 轻量极速，适合高并发与短任务 |
| `claude-fable-5` | Fable 系列 |

## OpenAI · GPT

| 模型名称 | 类型 | 说明 |
| --- | --- | --- |
| `gpt-5.5` | 对话 | 旗舰通用模型 |
| `gpt-5.5-openai-compact` | 对话 | 紧凑版 |
| `gpt-5.4` | 对话 | 上一代旗舰 |
| `gpt-5.4-mini` | 对话 | 轻量低成本 |
| `gpt-5.4-openai-compact` | 对话 | 紧凑版 |
| `codex-auto-review` | 编码 | 代码审查 |
| `gpt-image-2` | 生图 | 文生图 |
| `codex-gpt-image-2` | 生图 | 代码场景生图 |

## Google · Gemini

| 模型名称 | 类型 | 说明 |
| --- | --- | --- |
| `gemini-3.1-pro-preview-thinking` | 推理 | 最新 Pro 思考模型 |
| `gemini-3-pro-preview-thinking` | 推理 | Pro 思考模型（含 `-128` / `-512` 思考预算变体） |
| `gemini-3.1-pro-preview` | 对话 | 最新 Pro |
| `gemini-3-pro-preview` | 对话 | Pro |
| `gemini-3-flash-preview` | 对话 | Flash，快速响应 |
| `gemini-3.5-flash-c` | 对话 | Flash 高缓存（`-low-c` 为低缓存变体） |
| `gemini-2.5-pro` | 对话 | 上一代 Pro（`-thinking` 为思考版） |
| `gemini-2.5-flash` | 对话 | 上一代 Flash |
| `gemini-2.5-flash-lite` | 对话 | 更轻量的 Flash |
| `gemini-3-pro-image-preview` | 生图 | 原生多模态生图 |

## xAI · Grok

| 模型名称 | 类型 | 说明 |
| --- | --- | --- |
| `grok-3` | 对话 | 通用对话 |
| `grok-420-fast` | 对话 | 快速版 |
| `grok-420-fast-deepsearch` | 联网 | 内置深度联网搜索 |
| `grok-imagine-video` | 视频 | 文生视频 |
| `grok-imagine1.5-video` | 视频 | 文生视频 1.5 |
| `grok-imagine-video-1.5-preview` | 视频 | 文生视频 1.5 预览 |

## 国产模型

| 模型名称 | 厂商 | 说明 |
| --- | --- | --- |
| `deepseek-v4-pro` | DeepSeek | 旗舰推理 |
| `deepseek-v4-flash` | DeepSeek | 快速版 |
| `qwen3.7-max` | 通义千问 | 旗舰 |
| `qwen3.7-plus` / `qwen3.6-plus` / `qwen3.5-plus` | 通义千问 | Plus 系列 |
| `glm-5.1` / `glm-5` | 智谱 GLM | 通用对话 |
| `kimi-k2.6` / `kimi-k2.5` | 月之暗面 Kimi | 长上下文 |
| `minimax-m3` / `minimax-m2.7` / `minimax-m2.5` | MiniMax | 通用对话 |
| `hy3-preview` | 腾讯混元 | 预览版 |

## 小米 · MiMo

| 模型名称 | 类型 | 说明 |
| --- | --- | --- |
| `mimo-v2.5-pro` / `mimo-v2-pro` | 对话 | Pro 对话 |
| `mimo-v2.5` | 对话 | 标准对话 |
| `mimo-v2-omni` | 多模态 | 全模态理解 |
| `mimo-v2.5-asr` | 语音识别 | 语音转文字 |
| `mimo-v2.5-tts` / `mimo-v2-tts` | 语音合成 | 文字转语音 |
| `mimo-v2.5-tts-voiceclone` | 语音合成 | 声音克隆 |
| `mimo-v2.5-tts-voicedesign` | 语音合成 | 音色设计 |

---

::: info 模型分组（分组倍率）
后台按渠道将模型划分为不同 **分组**（如 `Claude - Max`、`哈吉米 Gemini`、`国产模型` 等）。不同分组对应不同的稳定性与价格倍率，可在控制台创建密钥时选择。计费方式见 [充值与订阅](/guide/prepare/recharge)。
:::
