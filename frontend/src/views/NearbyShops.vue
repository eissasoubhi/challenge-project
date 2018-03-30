<template>
  <div class="home">
    <hf-geolocation v-on:success="geolocationSucceeded = true" v-on:coordinatesLoaded="getCoordinates"></hf-geolocation>
    <hf-shop-list v-show="geolocationSucceeded" :loadingLocation="loading" :userLocation="coordinates" >Nearby Shops</hf-shop-list>
  </div>
</template>

<script>
import HfShopList from '@/components/ShopList'
import HfGeolocation from '@/components/Geolocation'

export default {
  name: 'HfNearbyShops',

  data () {
    return {
      userCoordinates: {},
      geolocationSucceeded: false,
      loading: true
    }
  },

  computed: {
    coordinates () {
      return this.userCoordinates.latitude + ',' + this.userCoordinates.longitude
    }
  },

  methods: {
    getCoordinates (payload) {
      this.userCoordinates = payload.coordinates
      this.loading = false
    }
  },

  components: {
    HfShopList,
    HfGeolocation
  }
}
</script>
