import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData } from 'vitepress'

// 自托管字体（不依赖 Google Fonts，国内访问可靠）
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import '@fontsource-variable/newsreader'

import './style.css'

// 「公理」引文，放在首页 tagline（一把钥匙…）下方（按语言切换）
const AXIOM: Record<string, string> = {
  'zh-CN':
    '欧几里得的几何中，<strong>公理</strong>是被直接接受为真的命题：一切证明从此出发。' +
    'AxiomCode 把这种结构带入 AI 时代：统一的 endpoint，让一切调用从此<strong>恒等</strong>。',
  en:
    'In Euclid’s geometry, an <strong>axiom</strong> is a proposition accepted as true without proof: ' +
    'every proof begins there. AxiomCode brings that structure into the age of AI: a unified endpoint, ' +
    'where every call becomes <strong>identical</strong>.'
}

const AxiomQuote = {
  setup() {
    const { lang } = useData()
    return () => h('p', { class: 'axiom-axiom', innerHTML: AXIOM[lang.value] || AXIOM['zh-CN'] })
  }
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-after': () => h(AxiomQuote)
    })
  }
}
