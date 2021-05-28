<template>
  <HeaderNavigation
    :menuItems="menuItems"
    :support="true"
  />
  <div class="title">Список экспертов по оценке руководителей</div>
  <FilterList
    :items="expertFilters"
  />
  <ExpertTable
    :headers="tableHeaders"
    :records="expertRecords"
  />
  <PageNavigation
    :currentPage="currentPage"
  />
  <div
    class="button add-button"
    @click="setModalAddVisible(true)"
  >
    Добавить пользователя
  </div>
  <ModalAddExpert
    v-if="isModalAddVisible"
  />
</template>

<script>
import { HeaderNavigation } from '@/components/HeaderNavigation.vue'
import { FilterList } from '@/components/FilterList.vue'
import { ExpertTable } from '@/components/ExpertTable.vue'
import { PageNavigation } from '@/components/PageNavigation.vue'
import { ModalAddExpert } from '@/components/ModalAddExpert.vue'

export default {
  name: 'MainView',
  components: {
    HeaderNavigation,
    FilterList,
    ExpertTable,
    PageNavigation,
    ModalAddExpert
  },
  setup () {
    const isModalAddVisible = ref(false)
    const setModalAddVisible = (value) => isModalAddVisible.value = value

    return {
      isModalAddVisible,
      setModalAddVisible,
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
