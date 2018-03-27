<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Need an account?
            </router-link>
          </p>
          <ul v-if="errors" class="error-messages">
            <li
              v-for="(v, k) in errors"
              :key="k">
              {{k}} {{ v | error }}
            </li>
          </ul>
          <form v-on:submit="onSubmit(email, password)">
            <fieldset class="form-group">
              <input
                id="email"
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input
                id="password"
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password">
            </fieldset>
            <button :disabled="isLoading" id="submit" class="btn btn-lg btn-primary pull-xs-right">
              Sign in
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
import { LOGIN } from '@/store/actions.type'

export default {
  name: 'HfLogin',
  data () {
    return {
      email: null,
      password: null,
      isLoading: false
    }
  },
  methods: {
    onSubmit (email, password) {
      this.isLoading = true

      this.$store
        .dispatch(LOGIN, { email, password })
        .then(() => this.$router.push({ name: 'nearbyShops' }))
        .catch(() => {
          this.isLoading = false
        })
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>
