<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        <router-link class="navbar-brand"
            :to="'/'">
           <span class="part1">HF</span> <span class="part2">web</span><span class="part3">Coding</span><span class="part4">Challenge</span>
        </router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul  v-if="isAuthenticated" class="nav navbar-nav navbar-right">
            <li>
              <div class="user-menu dropdown ">
                  <button class="btn btn-default dropdown-toggle" type="button" id="header-right-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  {{currentUser.email}}
                  <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="header-right-menu">
                      <li>
                          <a id="logout" href="#" @click.prevent="logout"> Logout </a>
                      </li>
                  </ul>
              </div>
            </li>
          </ul>
          <ul v-else class="nav navbar-nav navbar-right">
            <li class="nav-item">
              <router-link class="nav-link"
                active-class="active"
                exact
                :to="'login'">
                <i class="ion-compose"></i>Sign in
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                active-class="active"
                exact
                :to="'register'">
                <i class="ion-compose"></i>Sign up
              </router-link>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>
<script>
import { LOGOUT } from '@/store/actions.type'
import { mapGetters } from 'vuex'

export default {
  name: 'HfHeader',
  computed: {
    ...mapGetters([
      'currentUser',
      'isAuthenticated'
    ])
  },
  methods: {
    logout () {
      this.$store
        .dispatch(LOGOUT)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
    }
  }
}
</script>

<style scoped>
  .navbar-brand{
    font-family: 'Oswald', sans-serif;
  }
  .navbar-brand .part1{
    color: #445365;
    font-weight: bold;
  }
  .navbar-brand .part2{
    color: #5aba86;
  }
  .navbar-brand .part3{
    color: #e76d5e;
  }
  .navbar-brand .part4{
    color: #445365;
    text-decoration: underline;
  }
  .user-menu{
    margin-top: 8px;
  }
</style>
