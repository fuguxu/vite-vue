<script setup>
// import { ref } from 'vue'
import HelloWorld2 from './components/HelloWorld2'
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld3 from './components/HelloWorld3.vue'
import { onMounted } from 'vue'
provide('provide', '123')
const changeCount =(count) => {
  console.log(count)
}
let img = ref()
let helloInstance = ref()
onMounted(() => {
  console.log('img', img.value)
  console.log('helloInstance', helloInstance.value.info)
})

</script>

<template>
<div>
    <img ref="img" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :ref="el => helloInstance = el" msg="Hello Vue 3 + Vite" name="测试props" @change="changeCount" />
    <HelloWorld2  />
    <HelloWorld3 message="333" />
</div>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
