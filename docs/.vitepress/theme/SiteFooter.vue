<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isEn = computed(() => lang.value === 'en')
const t = (zh, en) => (isEn.value ? en : zh)
const link = (path) => (path.startsWith('http') ? path : isEn.value ? '/en' + path : path)

const tagline = computed(() =>
  t('通过统一接入层连接前沿 AI 模型', 'Connect to frontier AI models through a unified access layer.')
)
const disclaimer = computed(() =>
  t('Axiom 不对中国大陆用户提供服务', 'Axiom does not provide services to users in mainland China.')
)

const columns = computed(() => [
  {
    title: t('产品', 'Product'),
    items: [
      { label: t('中转站', 'Relay'), href: 'https://axiomcode.top' },
      { label: t('支持模型', 'Supported Models'), href: link('/guide/models') },
      { label: t('接入文档', 'Docs'), href: link('/guide/clients/codex') }
    ]
  },
  {
    title: t('组织', 'Organization'),
    items: [
      { label: t('关于我们', 'About'), href: link('/about') },
      { label: t('联系我们', 'Contact'), href: link('/contact') }
    ]
  },
  {
    title: t('法律', 'Legal'),
    items: [
      { label: t('用户协议', 'Terms'), href: link('/terms') },
      { label: t('隐私政策', 'Privacy'), href: link('/privacy') }
    ]
  }
])

const ext = (href) => href.startsWith('http')
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="site-footer-brand">
        <div class="site-footer-name">AxiomCode</div>
        <p class="site-footer-tagline">{{ tagline }}</p>
        <div class="site-footer-legal">
          <div>AxiomCode © 2026</div>
          <div class="site-footer-disclaimer">{{ disclaimer }}</div>
        </div>
      </div>
      <div class="site-footer-cols">
        <div v-for="col in columns" :key="col.title" class="site-footer-col">
          <div class="site-footer-col-title">{{ col.title }}</div>
          <a
            v-for="it in col.items"
            :key="it.label"
            class="site-footer-link"
            :href="it.href"
            :target="ext(it.href) ? '_blank' : undefined"
            :rel="ext(it.href) ? 'noreferrer' : undefined"
            >{{ it.label }}</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
