<template>
  <div class="page-navigation">
    <span class="page-navigation__arrow-left">&lt;</span>
    <span class="page-navigation__prev-dots">...</span>
    <span class="page-navigation__prev-page" v-text="(currentPage - 1).toString()"></span>
    <span class="page-navigation__current-page" v-text="currentPage.toString()"></span>
    <span class="page-navigation__next-page" v-text="(currentPage + 1).toString()"></span>
    <span class="page-navigation__next-dots">...</span>
    <span class="page-navigation__arrow-right">&gt;</span>
  </div>
</template>

<script>
export default {
  name: 'PageNavigation',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
  },
}
</script>
