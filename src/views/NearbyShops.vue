<template>
  <div class="home">
    <hf-shop-list>Nearby Shops</hf-shop-list>
  </div>
</template>

<script>
import HfShopList from '@/components/ShopList'

export default {
  name: 'HfNearbyShops',
  components: {
    HfShopList
  }
}
</script>
