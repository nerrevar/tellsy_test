<template>
  <div
    class="table"
    :style="`grid-template-columns: 1fr 1fr repeat(${ headers.length - 2 }, 4fr)`"
  >
    <div class="table__headers">
      <div
        class="table__header"
        v-for="(header, indexHeader) in headers"
        :key="`header-${ indexHeader }`"
      >
        {{ header }}
      </div>
    </div>
    <div class="table__body">
      <div
        class="table__record"
        v-for="(record, indexRecord) in records"
        :key="`record-${ indexRecord }`"
      >
        <div
          class="table__cell"
          v-for="(cellValue, indexCell) in record"
          :key="`cell-${ indexCell }`"
        >
          {{ cellValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
}
</script>
