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
    const updateFilterValue = filterObj => {
      if (Object.values(filterObj)[0])
        Object.assign(filterValues.value, filterObj)
      else
        delete filterValues.value[Object.keys(filterObj)[0]]
    }

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
  justify-content space-between

  &__button
    align-self flex-end
</style>
