<template>
  <div>
    <div v-if="isLoading" class="shop-preview text-center">
      <div>
        <img src="@/assets/loading.gif" alt="">
      </div>
      Loading shops...
    </div>
    <div v-else>
      <div v-if="shops.length === 0" class="no-shop">
        No shops are here... yet.
      </div>
      <div v-else class="shops-list">
        <h1 class="text-center"><slot></slot></h1>
        <div class="row text-center text-lg-left">
          <hf-shop-preview
            v-for="(shop, index) in shops"
            :shop="shop"
            :type="type"
            :requestConfig="listConfig"
            :key="index">
          </hf-shop-preview>
        </div>
        <v-pagination
          :pages="pages"
          :currentPage.sync="currentPage"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HfShopPreview from '@/components/ShopPreview'
import VPagination from '@/components/VPagination'
import { FETCH_SHOPS } from '@/store/actions.type'

export default {
  name: 'hf-shop-list',
  components: {
    HfShopPreview,
    VPagination
  },
  props: {
    /**
     * the username of the current user to get the preferred shops or null for nearby shops only
     */
    favorited: {
      type: String,
      required: false
    },

    /**
     * pagination items per page
     */
    itemsPerPage: {
      type: Number,
      required: false,
      default: 16
    }
  },
  data () {
    return {
      /**
       * pagination currentPage
       */
      currentPage: 1
    }
  },
  computed: {
    /**
     * the type of the list, favorited for the preferred shops or all for a nearby shops
     */
    type () {
      if (this.favorited) {
        return 'favorited'
      }

      return 'all'
    },

    /**
     * construct the request query
     */
    listConfig () {
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      }
      if (this.favorited) {
        filters.favorited = this.favorited
      }
      return {
        filters
      }
    },

    /**
     * get the numbers of the pages as a list
     */
    pages () {
      if (this.isLoading || this.shopsCount <= this.itemsPerPage) {
        return []
      }
      return [...Array(Math.ceil(this.shopsCount / this.itemsPerPage)).keys()].map(e => e + 1)
    },

    ...mapGetters([
      'shopsCount',
      'isLoading',
      'shops'
    ])
  },
  watch: {
    /**
     * refresh the shops list if the page changes
     */
    currentPage (newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage
      this.fetchShops()
    },

    /**
     * refresh the shops list if the type of list changes
     */
    favorited () {
      this.resetPagination()
      this.fetchShops()
    }
  },

  mounted () {
    this.fetchShops()
  },

  methods: {
    /**
     * get the shops list
     */
    fetchShops () {
      this.$store.dispatch(FETCH_SHOPS, this.listConfig)
    },

    resetPagination () {
      this.listConfig.offset = 0
      this.currentPage = 1
    }
  }
}
</script>
<style scoped>
  h1 {
    margin-bottom: 50px;
  }
</style>
