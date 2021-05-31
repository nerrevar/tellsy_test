<template>
  <datalist :id="'filterUnitList' + unit.name">
    <option
      v-for="(item, index) in unit.values"
      :key="index"
    >
      {{ item }}
    </option>
  </datalist>
  <div class="filter-group">
    <span class="filter-group__label">
      {{ unit.displayName }}
    </span>
    <div class="filter-group__input-group input-group">
      <input
        class="input-group__input"
        type="text"
        :list="'filterUnitList' + unit.name"
        :ref="'filterUnitList' + unit.name"
        :placeholder="unit.placeholder"
        @change="$emit('updateFilterValue', { [unit.name]: $event.target.value })"
      />
      <div class="input-group__arrow">^</div>
    </div>
  </div>
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

<style lang="stylus" scoped>
shadow()
  box-shadow 1px 1px 5px 1px lightgrey

.filter-group
  display flex
  flex-flow column nowrap
  align-items flex-start
  padding-right 2em

.input-group
  &__input
    shadow()
    text-align left

  &__arrow
    display inline-block
    transform rotate(180deg)
    margin-left -1.5em
    color #459
</style>
