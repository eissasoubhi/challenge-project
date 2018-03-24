<template>
  <div class="text-center">
    <span v-if="error" class="alert alert-warning">{{ error }}</span>
  </div>
</template>
<script>

export default {
  name: 'HfGeolocation',
  data () {
    return {
      error: '',
      location: {}
    }
  },
  methods: {
    startGeolocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getLocation, this.getErrors)
      } else {
        this.error = '<strong>We can not sort shops by distance</strong>: Geolocation is not supported by this browser.'
      }
    },

    getLocation (position) {
      this.location.latitude = position.coords.latitude
      this.location.longitude = position.coords.longitude

      this.$emit('coordinatesLoaded', {coordinates: this.location})
    },

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
    }
  },

  mounted () {
    this.startGeolocation()
  }
}
</script>

<style scoped>

</style>
