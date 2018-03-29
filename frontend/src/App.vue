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
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Oswald|Quicksand');

.thumbnail,
button,
a
{
  border-radius: 0!important;
}
body {
  padding-bottom: 40px;
  font-family: 'Quicksand', sans-serif;
  background-color: #e9eaea!important;
}
h1{
  color: #445365;
  font-family: 'Oswald', sans-serif;
}
.error-messages{
  color: red;
}
a{
  color: #2f915c;
}
a:hover, a:focus, a:active{
  color: #e76d5e;
}
</style>
