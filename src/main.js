// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

Vue.config.productionTip = false

const ClickCountingButton = {
  template: '<span>Click counting button <button v-on:click="counter += 1">{{ counter }}</button></span>',
  data: function () {
    return {
      counter: 0
    }
  }
}

const ClickCountingButtonElement = wrap(Vue, ClickCountingButton)

window.customElements.define('click-counting-button', ClickCountingButtonElement)
