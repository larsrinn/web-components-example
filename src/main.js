// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import wrap from '@vue/web-component-wrapper'

Vue.config.productionTip = false

const Component = {
  template: '<span>Click counting button <button v-on:click="counter += 1">{{ counter }}</button></span>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return {
      counter: 0
    }
  }
}

const CustomElement = wrap(Vue, Component)

window.customElements.define('my-element', CustomElement)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
