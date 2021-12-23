
import {createRouter,createWebHashHistory} from "vue-router";
import Home from './home'
const About = { 
    render(){
        return h('div',{}, 'about')
    }
}


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router