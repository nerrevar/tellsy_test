<template>
  <div class="filter-list">
    <FilterUnit
      v-for="(unit, index) in userFilters"
      :key="index"
      :unit="unit"
    />
    <div
      class="button"
      @click="applyFilters"
    >
      Применить фильтры
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

import FilterUnit from './FilterUnit.vue'

export default {
  name: 'FilterList',
  components: { FilterUnit },
  props: {
    userFilters: {
      type: Array,
      required: true,
    },
  },
  setup () {
    return { applyFilters: inject('applyFilters') }
  },
}
</script>
