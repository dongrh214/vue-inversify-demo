<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Inversify msg="Welcome to Your Vue.js App" text="text from home"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inversify from '@/components/Inversify'

export default {
  name: 'Home',
  components: {
    Inversify
  }
}
</script>
