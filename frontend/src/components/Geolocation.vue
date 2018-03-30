<template>
  <div class="text-center">
    <span v-if="loading" class="alert alert-info">{{ message }}</span>
    <span v-if="error" class="alert alert-warning">{{ error }} <button class="btn btn-default" @click="reloadPage">Reload</button></span>
  </div>
</template>
<script>

export default {
  name: 'HfGeolocation',
  data () {
    return {
      error: '',
      message: '',
      loading: true,
      location: {}
    }
  },
  methods: {
    startGeolocation () {
      this.message = 'Loading coordinates...'
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getLocation, this.getErrors)
      } else {
        this.error = '<strong>We can not sort shops by distance</strong>: Geolocation is not supported by this browser.'
      }
    },
    /**
     * set coordinates
     */
    getLocation (position) {
      this.location.latitude = position.coords.latitude
      this.location.longitude = position.coords.longitude

      this.$emit('coordinatesLoaded', {coordinates: this.location})
      this.$emit('success')

      this.loading = false
    },
    /**
     * set api errors
     */
    getErrors (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
        case error.TIMEOUT:
          this.error = 'Please grant the request for Geolocation to sort the shops by distance.'
          break
        case error.POSITION_UNAVAILABLE:
          this.error = 'Location information is unavailable.'
          break
        case error.UNKNOWN_ERROR:
          this.error = '<strong>We can not sort shops by distance</strong>: An unknown error occurred for Geolocation .'
          break
      }
      this.loading = false
    },

    reloadPage () {
      window.location.reload()
    }
  },

  mounted () {
    this.startGeolocation()
  }
}
</script>

<style scoped>

</style>
