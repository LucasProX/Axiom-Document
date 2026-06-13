<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isEn = computed(() => lang.value === 'en')

const CLIENTS = [
  {
    key: 'codex',
    name: 'ChatGPT 系列', nameEn: 'ChatGPT',
    vendor: 'OpenAI', vendorEn: 'OpenAI',
    logo: '/logos/openai.svg',
    protocol: 'openai',
    platforms: ['CLI', 'VSCode', 'Codex'],
    desc: 'CLI、VSCode 插件与移动端，共用同一套配置。',
    descEn: 'CLI, VSCode plugin and mobile app — one shared config.',
    link: '/guide/clients/codex'
  },
  {
    key: 'claude-code',
    name: 'Claude Code', nameEn: 'Claude Code',
    vendor: 'Anthropic', vendorEn: 'Anthropic',
    logo: '/logos/claude.svg',
    protocol: 'anthropic',
    platforms: ['CLI', 'Desktop'],
    desc: 'Anthropic 协议，Base URL 不带 /v1。',
    descEn: 'Anthropic protocol; Base URL without /v1.',
    link: '/guide/clients/claude-code'
  },
  {
    key: 'open-code',
    name: 'OpenCode', nameEn: 'OpenCode',
    vendor: '开源 · 终端', vendorEn: 'Open source · CLI',
    logo: '/logos/opencode.svg',
    protocol: 'openai',
    compatible: true,
    platforms: ['CLI'],
    desc: '终端 AI 编程，多 provider 并存。',
    descEn: 'Terminal AI coding; multiple providers coexist.',
    link: '/guide/clients/open-code'
  },
  {
    key: 'open-claw',
    name: 'OpenClaw', nameEn: 'OpenClaw',
    vendor: '开源 · 终端 / 云端', vendorEn: 'Open source · CLI / Cloud',
    logo: '/logos/openclaw.svg',
    protocol: 'anthropic',
    compatible: true,
    platforms: ['CLI', 'Web'],
    desc: 'Anthropic 协议，本地或托管部署。',
    descEn: 'Anthropic protocol; local or hosted.',
    link: '/guide/clients/open-claw'
  }
]

const t = (c, field) => (isEn.value && c[field + 'En']) ? c[field + 'En'] : c[field]
const href = (c) => (isEn.value ? '/en' + c.link : c.link)
const protoLabel = (c) => {
  const base = c.protocol === 'anthropic' ? 'Anthropic' : 'OpenAI'
  if (!c.compatible) return base
  return isEn.value ? 'Native-grade' : '原生级兼容'
}

// 四个客户端都是 Node CLI，统一支持三大桌面系统
const OS = ['Windows', 'macOS', 'Linux']
</script>

<template>
  <section class="clients-block">
    <h2 class="clients-title">{{ isEn ? 'Connect your client' : '接入你的客户端' }}</h2>

    <div class="client-grid">
      <a v-for="c in CLIENTS" :key="c.key" class="client-card" :href="href(c)">
        <div class="client-card-top">
          <span
            class="client-logo"
            :style="{ '-webkit-mask-image': `url(${c.logo})`, 'mask-image': `url(${c.logo})` }"
          />
          <span class="client-proto" :class="c.protocol">{{ protoLabel(c) }}</span>
        </div>
        <div class="client-name">{{ t(c, 'name') }}</div>
        <div class="client-vendor">{{ t(c, 'vendor') }}</div>
        <div class="client-desc">{{ t(c, 'desc') }}</div>
        <div class="client-badges">
          <span v-for="p in c.platforms" :key="p" class="client-badge">{{ p }}</span>
        </div>
        <div class="client-os">
          <span v-for="o in OS" :key="o" class="client-os-badge">{{ o }}</span>
        </div>
      </a>
    </div>
  </section>
</template>
