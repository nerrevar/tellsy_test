<template>
  <div class="filter-list">
    <FilterUnit
      v-for="(unit, index) in items"
      :key="index"
      :unit="unit"
      :ref="'filter' + index"
      @updateFilterValue="updateFilterValue($event)"
    />
    <div
      class="button filter-list__button"
      @click="$emit('applyFilters', filterValues)"
    >
      Применить фильтры
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import FilterUnit from './FilterUnit.vue'

export default {
  name: 'FilterList',
  components: { FilterUnit },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup () {
    const filterValues = ref({})
    const updateFilterValue = filterObj => Object.assign(filterValues.value, filterObj)

    return {
      filterValues,
      updateFilterValue,
    }
  },
}
</script>

<style lang="stylus" scoped>
.filter-list
  display flex
  flex-flow row nowrap

  &__button
    align-self flex-end
</style>
