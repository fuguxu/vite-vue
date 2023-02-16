<script>
import { ref, getCurrentInstance, inject } from 'vue'

export default {
  props:{
      message:{
          type:String
      }
  },
  setup(props, {attrs, slots, emit, expose}) {
    let {message} =  toRefs(props)
    console.log('message', message.value)


    const { msg } = getCurrentInstance().appContext.config.globalProperties
    console.log('msg', msg)


    let name = ref('setup')
    let inj = inject('provide')
    console.log('inject', inj)

    let color = ref('blue')
    return {
      name,
      color,
      message,
    }
  },
  mounted () {
    console.log(this.msg)
  }
}
  
</script>

<template>
  <div>
    <h1 class="name">{{ name }}</h1>
    <div>{{message}}</div>
    <div class="css-bind">css的v-bind</div>
    <div class="teleport-fake">
      <Teleport to="body">
        <span>测试 teleport</span>
      </Teleport>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .name {
    color: red;
  }
  .css-bind {
    color: v-bind(color);
  }
</style>
