<template>
  <datalist :id="'filterUnitList' + unit.name">
    <option
      v-for="(item, index) in unit.values"
      :key="index"
    >
      {{ item }}
    </option>
  </datalist>
  <input
    type="text"
    :list="'filterUnitList' + unit.name"
    :ref="'filterUnitList' + unit.name"
  />
</template>

<script>
export default {
  name: 'FilterUnit',
  props: {
    unit: {
      type: Object,
      required: true,
    },
  },
}
</script>
