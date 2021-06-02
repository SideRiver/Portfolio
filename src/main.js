import { createApp } from 'vue'
import App from './App.vue'

export default {
  install(app) {
    // イベント設定用関数
    function noScroll(event) {
      event.preventDefault()
    }
    app.prototype.$noScroll = function () {
      // SP
      document.addEventListener('touchmove', noScroll, { passive: false })
      // PC
      document.addEventListener('mousewheel', noScroll, { passive: false })
    }
    // スクロール禁止を解除
    app.prototype.$returnScroll = function () {
      // SP
      document.removeEventListener('touchmove', noScroll, { passive: false })
      // PC
      document.removeEventListener('mousewheel', noScroll, { passive: false })
    }
  },
}

createApp(App).mount('#app')
