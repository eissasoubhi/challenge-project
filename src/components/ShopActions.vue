<template>
  <div class="btn-group btn-group-justified" role="group">
    <div class="btn-group" role="group">
      <button class="btn btn-danger btn-dislike" :disabled="shop.favorited === 0" v-on:click="dislike(shop.id)" >Dislike</button>
    </div>
    <div class="btn-group" role="group">
      <button class="btn btn-success btn-like" :disabled="shop.favorited === 1"  v-on:click="like(shop.id)" >Like</button>
    </div>
  </div>
</template>

<script>
import { FAVORITE_ADD, FAVORITE_REMOVE } from '@/store/actions.type'

export default {
  name: 'HfShopActions',
  props: {
    shop: { type: Object, required: true }
  },
  methods: {
    like (id) {
      this.$store.dispatch(FAVORITE_ADD, id)
    },
    dislike (id) {
      this.$store.dispatch(FAVORITE_REMOVE, id)
    }
  }
}
</script>
