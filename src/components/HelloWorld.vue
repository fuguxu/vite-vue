<script setup>
// import { ref } from 'vue'
// import {useRouter} from 'vue-router'


let count =  ref(0)

const info = {
  age: 12,
  name: 'tony',
  sex: '男'
}

const reactiveInfo = reactive(info);

defineProps({
  msg: String,
})
const emit = defineEmits(['change'])


const router = useRouter();
const jump = () => {
  router.push({path: '/about'})
}
const jumpHome = () => {
  router.push({path: '/'})
}
const changeCount = () => {
  count.value++ ;
  emit('change', count);
  // info.age++;
  reactiveInfo.age++;
  console.log(reactiveInfo);
  console.log(info)
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{$attrs.name}}</h2>

  <div>info: <input v-model="info.age"> {{info.age}}</div>
  <div>reactiveInfo: <input v-model="reactiveInfo.age"> {{reactiveInfo.age}}</div>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="changeCount">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <el-button @click="jump">about</el-button>
  <el-button @click="jumpHome">home</el-button>
  <div class="test">
    test sass
    <span class="text">哈哈</span>
  </div>
  <router-view></router-view>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}
.test {
  .text {
    color: red;
  }
}
</style>
