<template>
  <div class="row">
    <div class="col-md-12">
      <div class="home-toggle">
        <ul class="nav nav-pills navbar-right">
          <li class="nav-item">
            <router-link
              :to="{name: 'home'}"
              class="nav-link"
              exact
              active-class="active">
              Nearby Shops
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{name: 'home-preferred-shops'}"
              class="nav-link"
              active-class="active">
              My preferred Shops
            </router-link>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HfHome'
}
</script>

<style scoped>
  .nav-item a:hover{
    border-bottom: 2px solid #ccc;
  }
  .nav-item .active{
    border-bottom: 2px solid;
  }
</style>
