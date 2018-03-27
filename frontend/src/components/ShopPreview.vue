<template>
  <div class="col-lg-3 col-md-4 col-xs-6 shop-item  ">
    <div class="thumbnail">
      <h4> {{ shop.name }} </h4>
      <div v-if="shop.distance" class="text-muted">
        ({{ shop.distance }} away)
      </div>
      <img class="img-fluid " src="http://placehold.it/400x300" alt="">
      <hr>
      <hf-shop-actions :shop="shop" :type="type" :requestConfig="requestConfig"></hf-shop-actions>
    </div>
  </div>
</template>

<script>

import HfShopActions from '@/components/ShopActions'

export default {
  name: 'HfShopPreview',
  components: {
    HfShopActions
  },
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
  }
}
</script>
<style scoped>
  .shop-item {
    margin-bottom: 20px;
  }
  .thumbnail {
    margin: 0 10px;
  }
</style>
