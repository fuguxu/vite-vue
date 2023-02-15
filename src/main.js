import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
console.log(import.meta.env)
let app = createApp(App)
.use(router)
.mount('#app')

// 可创建多个实例应用，相互独立
