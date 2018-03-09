<template>
  <div class="home">
    <hf-shop-list :favorited="favorited">My preferred shops</hf-shop-list>
  </div>
</template>

<script>
import HfShopList from '@/components/ShopList'
import { mapGetters } from 'vuex'

export default {
  name: 'HfPreferredShops',
  components: {
    HfShopList
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ]),
    favorited () {
      // return 'johnDon'
      return this.currentUser.name
    }
  }
}
</script>
