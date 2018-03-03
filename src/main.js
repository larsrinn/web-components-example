// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import MarkdownEditor from './components/MarkdownEditor'

Vue.config.productionTip = false

const MarkdownEditorElement = wrap(Vue, MarkdownEditor)

window.customElements.define('markdown-editor', MarkdownEditorElement)
