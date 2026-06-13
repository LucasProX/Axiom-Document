import { defineConfig } from 'vitepress'

// 原文档的 Telegram 图标（纸飞机）
const TG_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24Zm5.7 7.3l-1.8 8.6c-.1.6-.5.7-1 .4l-2.8-2.1l-1.4 1.3c-.2.2-.3.3-.6.3l.2-3l5.5-5c.2-.2 0-.3-.3-.1l-6.8 4.3l-2.9-.9c-.6-.2-.6-.6.1-.9l11.4-4.4c.5-.2 1 .1.8.9Z"/></svg>'

// 配置文档详见 https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: 'AxiomCode',
  titleTemplate: ':title · AxiomCode',
  description:
    'AxiomCode —— 高速稳定的 AI 中转站。一份文档跑通 Codex、Claude Code、OpenCode、OpenClaw。',

  cleanUrls: true,
  lastUpdated: true,

  // 代码块统一用深色高对比主题，注释 / 变量名等都是亮色，浅色页面下也清晰
  markdown: { theme: 'github-dark' },

  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    ['meta', { name: 'theme-color', content: '#b5392d' }],
    ['meta', { property: 'og:title', content: 'AxiomCode · AI 中转站' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '一个统一的 endpoint，让一切调用从此恒等。'
      }
    ]
  ],

  themeConfig: {
    // 跨语言共享
    socialLinks: [{ icon: { svg: TG_ICON }, link: 'https://axiomcode.top/', ariaLabel: 'Telegram' }],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          },
          en: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: { selectText: 'to select', navigateText: 'to navigate', closeText: 'to close' }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    // ===================== 简体中文（默认） =====================
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        siteTitle: 'AxiomCode 文档',
        nav: [
          { text: '快速上手', link: '/guide/prepare/register' },
          { text: '支持的模型', link: '/guide/models' },
          {
            text: '相关链接',
            items: [
              { text: '控制台', link: 'https://axiomcode.top' },
              { text: '充值 / 兑换码', link: 'https://axiomcode.top/billing' },
              { text: '购买兑换码', link: 'https://pay.ldxp.cn/shop/axiom' }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '第一章 · 准备工作',
              collapsed: false,
              items: [
                { text: '1.1 注册账号', link: '/guide/prepare/register' },
                { text: '1.2 充值与订阅', link: '/guide/prepare/recharge' },
                { text: '1.3 使用兑换码', link: '/guide/prepare/redeem' }
              ]
            },
            {
              text: '第二章 · 创建 API 密钥',
              collapsed: false,
              items: [
                { text: '2.1 进入密钥页面', link: '/guide/apikey/enter' },
                { text: '2.2 新建密钥', link: '/guide/apikey/create' },
                { text: '2.3 查看接入配置', link: '/guide/apikey/config' }
              ]
            },
            {
              text: '第三章 · 客户端接入',
              collapsed: false,
              items: [
                { text: '3.1 Codex 系列', link: '/guide/clients/codex' },
                { text: '3.2 Claude Code 系列', link: '/guide/clients/claude-code' },
                { text: '3.3 OpenCode', link: '/guide/clients/open-code' },
                { text: '3.4 OpenClaw', link: '/guide/clients/open-claw' }
              ]
            },
            {
              text: '第四章 · 验证与排错',
              collapsed: false,
              items: [
                { text: '4.1 自检命令', link: '/guide/troubleshoot/selfcheck' },
                { text: '4.2 常见错误', link: '/guide/troubleshoot/errors' }
              ]
            },
            {
              text: '参考',
              collapsed: false,
              items: [
                { text: '支持的模型', link: '/guide/models' },
                { text: '常见问题 FAQ', link: '/guide/faq' }
              ]
            }
          ]
        },
        outline: false,
        docFooter: { prev: '上一页', next: '下一页' },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        lastUpdatedText: '最后更新',
        langMenuLabel: '切换语言'
      }
    },

    // ===================== English =====================
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        siteTitle: 'AxiomCode Docs',
        nav: [
          { text: 'Get Started', link: '/en/guide/prepare/register' },
          { text: 'Models', link: '/en/guide/models' },
          {
            text: 'Links',
            items: [
              { text: 'Console', link: 'https://axiomcode.top' },
              { text: 'Recharge / Codes', link: 'https://axiomcode.top/billing' },
              { text: 'Buy Codes', link: 'https://pay.ldxp.cn/shop/axiom' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Chapter 1 · Getting Ready',
              collapsed: false,
              items: [
                { text: '1.1 Register', link: '/en/guide/prepare/register' },
                { text: '1.2 Recharge & Subscription', link: '/en/guide/prepare/recharge' },
                { text: '1.3 Redemption Codes', link: '/en/guide/prepare/redeem' }
              ]
            },
            {
              text: 'Chapter 2 · Create an API Key',
              collapsed: false,
              items: [
                { text: '2.1 Open the Keys Page', link: '/en/guide/apikey/enter' },
                { text: '2.2 Create a Key', link: '/en/guide/apikey/create' },
                { text: '2.3 Integration Config', link: '/en/guide/apikey/config' }
              ]
            },
            {
              text: 'Chapter 3 · Client Setup',
              collapsed: false,
              items: [
                { text: '3.1 Codex', link: '/en/guide/clients/codex' },
                { text: '3.2 Claude Code', link: '/en/guide/clients/claude-code' },
                { text: '3.3 OpenCode', link: '/en/guide/clients/open-code' },
                { text: '3.4 OpenClaw', link: '/en/guide/clients/open-claw' }
              ]
            },
            {
              text: 'Chapter 4 · Verify & Troubleshoot',
              collapsed: false,
              items: [
                { text: '4.1 Self-check Commands', link: '/en/guide/troubleshoot/selfcheck' },
                { text: '4.2 Common Errors', link: '/en/guide/troubleshoot/errors' }
              ]
            },
            {
              text: 'Reference',
              collapsed: false,
              items: [
                { text: 'Supported Models', link: '/en/guide/models' },
                { text: 'FAQ', link: '/en/guide/faq' }
              ]
            }
          ]
        },
        outline: false,
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdatedText: 'Last updated',
        langMenuLabel: 'Change language'
      }
    }
  }
})
