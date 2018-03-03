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
           HF webCodingChallenge
        </router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul  v-if="isAuthenticated" class="nav navbar-nav navbar-right">
            <li>
              <div class="user-menu dropdown ">
                  <button class="btn btn-default dropdown-toggle" type="button" id="header-right-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  {{currentUser.name}}
                  <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="header-right-menu">
                      <li>
                          <router-link class=""
                          :to="'logout'">
                              Logout
                          </router-link>
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

export default {
  name: 'HfHeader',
  props: {
    isAuthenticated: {
      default: false
    },
    currentUser: {
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .user-menu{
    margin-top: 8px;
  }
</style>
