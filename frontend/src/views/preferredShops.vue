<template>
  <div class="home">
    <hf-shop-list :favorited="favorited">My preferred shops</hf-shop-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HfShopList from '@/components/ShopList'

export default {
  name: 'HfPreferredShops',
  components: {
    HfShopList
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ]),

    /**
    * the current user email to filter the shops by the preferred
    */
    favorited () {
      return this.currentUser.email
    }
  }
}
</script>
