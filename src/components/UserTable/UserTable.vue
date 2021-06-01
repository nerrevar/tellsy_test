<template>
  <div class="table">
    <div class="table__headers">
      <div class="table__header table__header_empty"></div>
      <div
        class="table__header"
        v-for="(header, indexHeader) in headers"
        :key="`header-${ indexHeader }`"
      >
        {{ header }}
      </div>
    </div>

    <div
      :class="[
        'table__record',
        {
          'table__record_selected': selectedRows.indexOf(indexRecord) !== -1,
        }
      ]"
      v-for="(record, indexRecord) in records"
      :key="`record-${ indexRecord }`"
    >
      <div class="table__cell record-selector">
        <input
          class="record-selector__input"
          type="checkbox"
          @click="changeSelectState(indexRecord, $event.target.checked)"
        />
      </div>
      <div
        :class="[
          'table__cell',
          {
            'table__cell_email': indexCell === 'email',
            'table__cell_password': indexCell === 'password' && !isPasswordVisible,
          }
        ]"
        v-for="(cellValue, indexCell) in record"
        :key="`cell-${ indexCell }`"
      >
        <span
          v-if="indexCell !== 'password' || isPasswordVisible"
        >
          {{ cellValue }}
        </span>
        <span v-else>*******</span>
        <img
          v-if="indexCell === 'password'"
          src="@/assets/eye.svg"
          alt=""
          style="vertical-align: bottom; margin-left: 3px;"
          @click="setPasswordVisible(!isPasswordVisible)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'UserTable',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    records: {
      type: Array,
      required: true,
    },
  },
  setup () {
    const selectedRows = ref([])

    const changeSelectState = (index, state) => {
      if (state)
        if (selectedRows.value.indexOf(index) === -1)
          selectedRows.value.push(index)

      if (!state) {
        const unselectIndex = selectedRows.value.indexOf(index)
        if (unselectIndex !== -1)
          selectedRows.value.splice(unselectIndex, 1)
      }
    }

    const isPasswordVisible = ref(false)
    const setPasswordVisible = val => isPasswordVisible.value = val

    return {
      selectedRows,
      changeSelectState,
      isPasswordVisible,
      setPasswordVisible,
    }
  },
}
</script>

<style lang="stylus" scoped>
.table
  display table
  margin-left -40px

  padding 1em 0

  &__headers
    display table-row

  &__header
    display table-cell
    padding: 1em
    border 1px solid lightgrey
    color #459

    &:first-child
      width 40px
      border none

  &__body
    display table

  &__record
    display table-row

    &_selected
      background-color #4593

      & > :first-child
        background-color white

  &__cell
    display table-cell
    padding 1em
    border 1px solid lightgrey

    &:first-child
      max-width 30px
      border none

    &_email
      color: #459
</style>
