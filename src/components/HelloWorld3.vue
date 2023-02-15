<script>
import { ref } from 'vue'

export default {
  setup(props, {attrs, slots, emit, expose}) {

    let name = ref('setup')
    return {
      name,
    }
  }
}
  
</script>

<template>
  <h1 class="name">{{ name }}</h1>
</template>

<style scoped lang="scss">
  .name {
    color: red;
  }

</style>
