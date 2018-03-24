<template>
  <div class="home">
    <hf-geolocation v-on:coordinatesLoaded="getCoordinates"></hf-geolocation>
    <hf-shop-list :loadingLocation="loading" :userLocation="coordinates" >Nearby Shops</hf-shop-list>
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
