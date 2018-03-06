<template>
  <div>
    <div v-if="isLoading" class="shop-preview">
      Loading shops...
    </div>
    <div v-else>
      <div v-if="shops.length === 0" class="no-shop">
        No shops are here... yet.
      </div>
      <div v-else class="shops-list">
        <h1 class="text-center">Shops Nearby</h1>
        <div class="row text-center text-lg-left">
          <hf-shop-preview
            v-for="(shop, index) in shops"
            :shop="shop"
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

export default {
  name: 'hf-shop-list',
  components: {
    HfShopPreview,
    VPagination
  },
  props: {
    favorited: {
      type: String,
      required: false
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 16
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
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
    currentPage (newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage
      this.fetchshops()
    },
    favorited () {
      this.resetPagination()
      this.fetchshops()
    }
  },
  mounted () {
    this.fetchshops()
  },
  methods: {
    fetchshops () {
      this.$store.dispatch('fetch_shops', this.listConfig)
    },
    resetPagination () {
      this.listConfig.offset = 0
      this.currentPage = 1
    }
  }
}
</script>
