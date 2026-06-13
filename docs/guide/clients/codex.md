# 3.1 Codex 系列

> 适用于 **Codex CLI、Codex VSCode 插件、Codex 移动端 App**。三者共用同一套 API 配置，只是填写位置不同。

## 准备两样东西

| 配置项 | 值 |
| --- | --- |
| **Base URL** | `https://axiomcode.top/v1` |
| **API Key** | `sk-axiom-xxxx`（来自 [2.2 新建密钥](/guide/apikey/create)） |

## 方式一：环境变量（最快）

**macOS / Linux** —— 追加到 `~/.zshrc` 或 `~/.bashrc`：

```bash
export OPENAI_API_KEY="sk-axiom-你的Key"
export OPENAI_BASE_URL="https://axiomcode.top/v1"
```

执行 `source ~/.zshrc`（或 `source ~/.bashrc`）使其生效。

**Windows PowerShell**（永久写入）：

```powershell
[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "sk-axiom-你的Key", "User")
[Environment]::SetEnvironmentVariable("OPENAI_BASE_URL", "https://axiomcode.top/v1", "User")
```

关闭并重新打开终端后生效。

## 方式二：配置文件

配置文件位置：

- macOS / Linux：`~/.codex/config.toml`
- Windows：`C:\Users\<用户名>\.codex\config.toml`

```toml
[provider.axiom]
base_url = "https://axiomcode.top/v1"
api_key = "sk-axiom-你的Key"

[default]
provider = "axiom"
model = "gpt-5-codex"
```

## 验证

在终端执行：

```bash
codex --version
codex chat "用一句话介绍 quicksort"
```

能正常返回回答，即表示接入成功。

## Codex VSCode 插件

1. 在 VSCode 扩展市场搜索并安装「Codex」。
2. 打开设置（`Ctrl/⌘ + ,`），搜索 `codex`。
3. 填写两项：
   - `Codex: Api Base Url` → `https://axiomcode.top/v1`
   - `Codex: Api Key` → `sk-axiom-你的Key`
4. 按 `Ctrl/⌘ + Shift + P`，输入 `Codex: Reload`，或重启 VSCode。
5. 打开任意文件，按默认快捷键 `Ctrl/⌘ + I` 测试。

## Codex 移动端 App

1. 在应用商店搜索并安装「Codex」App。
2. 进入 **设置 → API 接入**。
3. 填写：
   - **API 地址**：`https://axiomcode.top/v1`
   - **API Key**：`sk-axiom-你的Key`
4. 保存，新建对话测试。

::: tip 建议
给移动端单独生成一把 Key。设备丢失时，只停用这把 Key 即可，不影响电脑 / 服务器上的其他 Key。
:::

## 常见问题

| 问题 | 说明 |
| --- | --- |
| 选哪个模型？ | 默认推荐 `gpt-5-codex`；可用模型见密钥的「接入配置」弹窗 |
| 返回 401 | 99% 是 Key 不对（多了空格、少了 `sk-` 前缀），到密钥管理页核对 |
| 返回 404 / 模型不存在 | Base URL 不对（少了 `/v1` 或多了路径），或该模型未对你的账户开放 |

---

下一步：[3.2 Claude Code 系列](/guide/clients/claude-code)
