<script setup>
// import { ref, reactive, defineExpose, watchEffect, watch } from 'vue'
// import {useRouter} from 'vue-router'


let count =  ref(0)

const info = {
  age: 12,
  name: 'tony',
  sex: '男'
}

const reactiveInfo = reactive(info);
console.log('reactiveInfo', reactiveInfo)

defineExpose({info: reactiveInfo}) // 向外暴露属性

defineProps({
  msg: String,
})
const emit = defineEmits(['change'])

console.log('toRaw', toRaw(reactiveInfo) === info) // true

const ageRef = toRef(reactiveInfo, 'age')
ageRef.value++
console.log('reactiveInfo.age',reactiveInfo.age) // 13

const infoRef = toRefs(reactiveInfo)
console.log('infoRef', infoRef)

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
  // console.log(reactiveInfo);
  // console.log(info)
}
watchEffect(() => {
  console.log('count-change', count.value)
})
watch(count, (n,o) => {
  console.log('n-o', n, o)
}, {
  immediate: true,
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{$attrs.name}}</h2>

  <div>info: <input v-model="info.age"> {{info.age}}</div>
  <div>reactiveInfo: <input v-model="reactiveInfo.age"> {{reactiveInfo.age}}</div>


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
