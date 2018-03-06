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

export default {
  name: 'HfShopActions',
  props: {
    shop: { type: Object, required: true }
  },
  methods: {
    like (id) {
      this.$store.dispatch('favorite_add', id)
    },
    dislike (id) {
      this.$store.dispatch('favorite_remove', id)
    }
  }
}
</script>
