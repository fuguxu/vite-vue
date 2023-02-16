import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
console.log(import.meta.env)
let app = createApp(App)

app.config.globalProperties.msg = 'globalMsg' // 全局属性


app.use(router)
app.mount('#app')

// 可创建多个实例应用，相互独立
