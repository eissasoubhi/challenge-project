<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">
              Have an account?
            </router-link>
          </p>
          <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{k}} {{ v | error }}</li>
          </ul>
          <form v-on:submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input class="form-control form-control-lg" id="email" type="text" v-model="email" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" id="password" type="password" v-model="password" placeholder="Password">
            </fieldset>
            <button :disabled="isLoading" class="btn btn-lg btn-primary pull-xs-right" id="submit">
              Sign up
            </button>
            <span v-if="isLoading" class="text-center">
              <img width="40" src="@/assets/loading.gif" alt="">
            </span>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState } from 'vuex'
import { REGISTER } from '@/store/actions.type'

export default {
  name: 'HfRegister',
  data () {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit () {
      this.isLoading = true

      this.$store.dispatch(REGISTER, {
        email: this.email,
        password: this.password
      })
        .then(() => this.$router.push({name: 'nearbyShops'}))
        .catch(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
