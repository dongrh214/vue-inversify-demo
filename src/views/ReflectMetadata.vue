<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ReflectMetadata msg="Reflect Metadata demo" text="text from ReflectMetadata"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ReflectMetadata from '@/components/ReflectMetadata.vue'

export default {
  name: 'Home',
  components: {
    ReflectMetadata
  }
}
</script>
