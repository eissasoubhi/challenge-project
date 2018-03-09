<template>
  <div class="col-lg-3 col-md-4 col-xs-6 shop-item  ">
    <div class="thumbnail">
      <h4> {{ shop.name }} </h4>
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
    shop: { type: Object, required: true },
    requestConfig: { type: Object, required: true },
    type: { type: String, required: true }
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
