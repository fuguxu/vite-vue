<script setup>
import HelloWorld2 from './components/HelloWorld2'
import HelloWorld from './components/HelloWorld.vue'

const changeCount =(count) => {
  console.log(count)
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" name="测试props" @change="changeCount" />
  <HelloWorld2  />
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
