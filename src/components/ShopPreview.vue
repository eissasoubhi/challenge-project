<template>
  <div class="col-lg-3 col-md-4 col-xs-6">
    <h4> {{ shop.name }} </h4>
    <img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="">
    <hf-shop-actions :shop="shop"></hf-shop-actions>
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
    shop: { type: Object, required: true }
  }
}
</script>
