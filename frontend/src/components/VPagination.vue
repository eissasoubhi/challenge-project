<template>
  <nav class="text-center">
    <ul class="pagination text-center">
      <li
        v-for="page in pages"
        :key="page"
        :class="paginationClass(page)"
        @click.prevent="changePage(page)"
      >
        <a class="page-link" href>{{page}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    /**
     * the list of pages numbers
     */
    pages: {
      type: Array,
      required: true
    },

    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage (goToPage) {
      if (goToPage === this.currentPage) return
      this.$emit('update:currentPage', goToPage)
    },

    /**
     * highlights the current page number
     */
    paginationClass (page) {
      return {
        'page-item': true,
        active: this.currentPage === page
      }
    }
  }
}
</script>
