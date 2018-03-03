<template>
  <div id="app">
    <hf-header></hf-header>
    <router-view></router-view>
    <hf-footer></hf-footer>
  </div>
</template>

<script>
import HfHeader from '@/components/Header'
import HfFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    HfHeader,
    HfFooter
  }
}
</script>

<style>
</style>
