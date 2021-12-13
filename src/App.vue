<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <async-comp></async-comp>
  <teleport to="#root">
    <input />
  </teleport>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      show: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 2000)

  }
}
</script>
