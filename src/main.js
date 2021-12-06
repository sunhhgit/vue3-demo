import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import MyApp from './MyApp.vue'
import './index.css'

const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComp.vue'))

const app = createApp(App)
app.component('async-comp', AsyncComp)
app.mount('#app')



const myApp = createApp(MyApp)

myApp.mount('#myapp')
