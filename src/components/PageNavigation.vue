<template>
  <div class="page-navigation">
    <span
      class="page-navigation__arrow-left"
      v-if="currentPage !== 1"
      @click="$emit('changePage', { page: currentPage - 1 })"
    >
      &lt;
    </span>
    <span
      :class="[
        'page-navigation__first-page',
        {
          'page-navigation__first-page_active': currentPage === 1,
        }
      ]"
      @click="$emit('changePage', { page: 1 })"
    >
      1
    </span>
    <span
      class="page-navigation__prev-dots"
      v-if="currentPage > 2"
      @click="$emit('changePage', { page: Math.floor(currentPage / 2) })"
    >
      ...
    </span>
    <span
      class="page-navigation__current-page"
      v-if="currentPage !== 1 && currentPage !== lastPage"
      v-text="currentPage.toString()"
    ></span>
    <span
      class="page-navigation__next-dots"
      v-if="currentPage < lastPage - 1"
      @click="$emit('changePage', { page: lastPage - Math.ceil((lastPage - currentPage) / 2) })"
    >
      ...
    </span>
    <span
      :class="[
        'page-navigation__last-page',
        {
          'page-navigation__last-page_active': currentPage === lastPage,
        }
      ]"
      v-if="lastPage !== 1"
      @click="$emit('changePage', { page: lastPage })"
    >
      {{ lastPage }}
    </span>
    <span
      class="page-navigation__arrow-right"
      v-if="currentPage !== lastPage"
      @click="$emit('changePage', { page: currentPage + 1 })"
    >
      &gt;
    </span>
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
    lastPage: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.page-navigation
  font-size 12px

  &__arrow-left, &__arrow-right, &__prev-dots, &__next-dots
    color #459
    cursor pointer

  &__first-page, &__last-page
    color #459
    cursor pointer

    &_active
      color black
      cursor default

  &__current-page
    cursor default
</style>
