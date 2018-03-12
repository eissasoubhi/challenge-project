<template>
  <div id="app">
    <hf-header></hf-header>
    <div class="container">
      <router-view></router-view>
    </div>
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
.thumbnail,
button,
a
{
  border-radius: 0!important;
}
body {
  padding-bottom: 40px;
}
</style>
