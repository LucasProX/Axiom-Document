# AxiomCode 文档 / Docs

[AxiomCode](https://axiomcode.top) 的官方文档站 —— 高速稳定的 AI 中转站,一份文档跑通 Codex / ChatGPT、Claude Code、OpenCode、OpenClaw 等主流 AI 编程客户端。

基于 [VitePress](https://vitepress.dev) 构建,**中文 / English 双语**,采用自定义「古籍 · 朱砂」主题,字体自托管(Geist / Newsreader)。

## 本地开发

需要 Node.js 18+。

```bash
npm install          # 安装依赖
npm run docs:dev     # 启动开发服务器（默认 http://localhost:5173）
npm run docs:build   # 构建静态产物到 docs/.vitepress/dist
npm run docs:preview # 本地预览构建产物
```

## 目录结构

```
docs/
├─ .vitepress/
│  ├─ config.mts          # 站点配置（导航、侧边栏、双语 locales）
│  ├─ theme/              # 自定义主题
│  │  ├─ index.ts         # 入口（字体、组件注册、布局插槽）
│  │  ├─ style.css        # 主题样式（古籍 / 朱砂、明暗双色）
│  │  ├─ ClientCards.vue  # 首页「接入你的客户端」卡片
│  │  └─ SiteFooter.vue   # 多列页脚
│  └─ dist/               # 构建产物（不入库）
├─ index.md               # 中文首页
├─ guide/                 # 中文文档（准备 / 密钥 / 客户端接入 / 排错 / 参考）
├─ en/                    # English 文档（与 guide 同构）
├─ about.md / contact.md / terms.md / privacy.md   # 关于 / 联系 / 协议 / 隐私
└─ public/                # 静态资源
   ├─ images/             # 截图
   └─ logos/              # 客户端 / 厂商 logo
```

## 部署

构建后,`docs/.vitepress/dist` 即为可直接托管的静态站点。

服务器上拉取并构建:

```bash
git clone https://github.com/LucasProX/Axiom-Document.git
cd Axiom-Document
npm ci          # 或 npm install
npm run docs:build
```

用 Caddy 托管 `docs/.vitepress/dist`(示例域名 `axiomdoc.axiomcelest.space`):

```caddy
axiomdoc.axiomcelest.space {
    root * /path/to/Axiom-Document/docs/.vitepress/dist
    encode gzip zstd
    file_server
    try_files {path} {path}/ {path}.html /index.html
}
```

更新时:`git pull && npm run docs:build`,Caddy 无需重启即生效。

## 许可

文档内容版权归 AxiomCode 所有。
