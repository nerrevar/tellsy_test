<template>
  <HeaderNavigation
    :menuItems="menuItems"
    :support="true"
  />
  <div class="title">Список экспертов по оценке и руководителей</div>
  <FilterList
    :items="userFilters"
    @applyFilters="applyFilters($event)"
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
import {
  ref,
  computed,
  onBeforeMount,
} from 'vue'
import { useStore } from 'vuex'

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
    const store = useStore()

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

    const userFilters = ref([])

    const tableHeaders = ref([])

    const currentPage = ref(1)
    const lastPage = computed(() => Math.ceil(store.state.users.length / 20))

    const userRecords = computed(() => store.state.users.slice(
      (currentPage.value - 1) * 20,
      currentPage.value * 20
    ))

    const changePage = payload => {
      if (currentPage.value !== payload.page)
        currentPage.value = payload.page
    }

    const isModalAddVisible = ref(false)
    const setModalAddVisible = value => isModalAddVisible.value = value

    const getUsers = async () => {
      let users = []
      await fetch('/db/users.json')
        .then(r => r.json())
        .then(r => users = r)
      return users
    }

    const getFilters = async () => {
      let filters = []
      await fetch('/db/filters.json')
        .then(r => r.json())
        .then(r => filters = r)
      return filters
    }

    const getHeaders = async () => {
      let headers = []
      await fetch('/db/schema.json')
        .then(r => r.json())
        .then(r => headers = r)
      return headers
    }

    onBeforeMount(async () => {
      const users = await getUsers()
      const filters = await getFilters()
      const headers = await getHeaders()

      for (const filterName in filters)
        userFilters.value.push({
          name: filterName,
          displayName: filters[filterName].displayName,
          placeholder: filters[filterName].placeholder,
          values: [...new Set(users.slice(0, 50).map(u => u[filterName]))]
        })

      Object.keys(...users.slice(0, 1)).forEach(k => tableHeaders.value.push(headers[k]))

      store.commit('setUsers', { users: users })
    })

    const applyFilters = async filters => {
      const users = await getUsers()

      store.commit('setUsers', {
        users: users.filter(user => {
          for (const filterName in filters)
            if (user[filterName] !== filters[filterName])
              return false
          return true
        }),
      })
    }

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
      applyFilters,
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
