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
  <div class="control-panel">
    <PageNavigation
      class="control-panel__page-navigation"
      :currentPage="currentPage"
      :lastPage="lastPage"
      @changePage="changePage($event)"
    />
    <div
      class="button control-panel__add-button"
      @click="setModalAddVisible(true)"
    >
      Добавить пользователя
    </div>
  </div>
  <ModalAddUser
    v-if="isModalAddVisible"
    @closeModal="setModalAddVisible(false)"
  />
</template>

<script>
import { ref } from 'vue'

import HeaderNavigation from '@/components/HeaderNavigation/HeaderNavigation.vue'
import FilterList from '@/components/FilterList/FilterList.vue'
import UserTable from '@/components/UserTable/UserTable.vue'
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
        displayName: 'ID',
        placeholder: 'Введите ID',
        values: [
          'test1',
          'test2'
        ],
      }
    ]

    const tableHeaders = [
      'id',
      'testHeader'
    ]

    const userRecords = [
      [
        '1',
        'testCell'
      ]
    ]

    const currentPage = ref(1)
    const lastPage = ref(1)

    const changePage = payload => {
      if (currentPage.value !== payload.page)
        currentPage.value = payload.page
    }

    const isModalAddVisible = ref(false)
    const setModalAddVisible = value => isModalAddVisible.value = value

    return {
      menuItems,
      userFilters,
      tableHeaders,
      userRecords,
      currentPage,
      lastPage,
      changePage,
      isModalAddVisible,
      setModalAddVisible,
    }
  },
}
</script>

<style lang="stylus" scoped>
.title
  font-size 16px
  font-weight 600
  padding: 16px

.control-panel
  display flex
  flex-flow row nowrap

  &__page-navigation
    flex 1 0
    align-self center

    display flex
    justify-content center

  &__add-button
    position relative
</style>
