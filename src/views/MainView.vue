<template>
  <HeaderNavigation
    :menuItems="menuItems"
    :support="true"
  />
  <div class="title">Список экспертов по оценке и руководителей</div>
  <FilterList
    :items="userFilters"
  />
  <UserTable
    :headers="tableHeaders"
    :records="userRecords"
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
  <ModalAddUser
    v-if="isModalAddVisible"
  />
</template>

<script>
import { ref } from 'vue'

import HeaderNavigation from '@/components/HeaderNavigation/HeaderNavigation.vue'
import FilterList from '@/components/FilterList/FilterList.vue'
import UserTable from '@/components/UserTable.vue'
import PageNavigation from '@/components/PageNavigation.vue'
import ModalAddUser from '@/components/ModalAddUser.vue'

export default {
  name: 'MainView',
  components: {
    HeaderNavigation,
    FilterList,
    UserTable,
    PageNavigation,
    ModalAddUser,
  },
  setup () {
    const menuItems = [
      {
        path: '/about',
        text: 'О платформе',
      },
      {
        path: '/user_upload',
        text: 'Загрузка пользователей',
      },
      {
        path: '/', // TODO: Replace with /user_list
        text: 'Список пользователей',
      }
    ]

    const userFilters = [
      {
        name: 'Test',
        values: [
          'test1',
          'test2'
        ],
      }
    ]

    const tableHeaders = [
      '',
      'id',
      'testHeader'
    ]

    const userRecords = [
      [
        'checked',
        '1',
        'testCell'
      ]
    ]

    const currentPage = 1

    const isModalAddVisible = ref(false)
    const setModalAddVisible = value => isModalAddVisible.value = value

    return {
      menuItems,
      userFilters,
      tableHeaders,
      userRecords,
      currentPage,
      isModalAddVisible,
      setModalAddVisible,
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
