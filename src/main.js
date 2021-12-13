import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import MyApp from './MyApp.vue'
import './index.css'

const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComp.vue'))

const app = createApp(App)
app.component('async-comp', AsyncComp)
app.directive('focus', {
  beforeMount(el, binding, vnode, prevVnode) {
    console.log(binding.instance)
  },
  mounted(el) {
    el.focus()
  },
  unmounted() {
    alert('我被卸载了')
  }
})

app.mount('#app')



const myApp = createApp(MyApp)

myApp.mount('#myapp')
