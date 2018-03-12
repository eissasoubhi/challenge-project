<template>
  <span>
    <div v-if="type == 'all'" class="btn-group btn-group-justified" role="group">
      <div class="btn-group" role="group">
        <button class="btn btn-danger btn-dislike" :disabled="shop.favorited === 0" v-on:click="dislike(shop.id)" >Dislike</button>
      </div>
      <div class="btn-group" role="group">
        <button class="btn btn-success btn-like" :disabled="shop.favorited === 1"  v-on:click="like(shop.id)" >Like</button>
      </div>
    </div>
    <div v-if="type == 'favorited'" class="text-center" role="group">
        <button class="btn btn-danger btn-unlike" :disabled="shop.favorited === null"  v-on:click="unlike(shop.id)" >Remove</button>
    </div>
  </span>
</template>

<script>
import { SHOP_DISLIKE, FETCH_SHOPS, FAVORITE_ADD, FAVORITE_REMOVE } from '@/store/actions.type'

export default {
  name: 'HfShopActions',
  props: {
    /**
     * the shop the actions will be applied to
     */
    shop: {
      type: Object,
      required: true
    },

    /**
     * the refreshShops request params
     */
    requestConfig: {
      type: Object,
      required: true
    },

    /**
     * the type of the shop item, favorited for a preferred shop or all for a nearby shop
     */
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    /**
     * like a shop
     */
    like (id) {
      this.$store
        .dispatch(FAVORITE_ADD, id)
        .then(() => {
          this.refreshShops()
        })
    },

    /**
     * unlike a shop
     */
    unlike (id) {
      this.$store
        .dispatch(FAVORITE_REMOVE, id)
        .then((res) => {
          this.refreshShops()
        })
    },

    /**
     * dislike a shop
     */
    dislike (id) {
      this.$store
        .dispatch(SHOP_DISLIKE, id)
        .then((res) => {
          this.refreshShops()
        })
    },

    /**
     * refresh the list of shops
     */
    refreshShops (delay = 600) {
      setTimeout(() => {
        this.$store.dispatch(FETCH_SHOPS, this.requestConfig)
      }, delay)
    }
  }
}
</script>
