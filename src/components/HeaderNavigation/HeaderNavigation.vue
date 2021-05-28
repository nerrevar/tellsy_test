<template>
  <div class="header-navigation">
    <NavigationUnit
      :class="{ active: $route.path === unit.path }"
      v-for="(unit, index) in menuItems"
      :key="index"
      :unit="unit"
    />
    <router-link
      class="support-link"
      to="/support"
    >
      Техподдержка
    </router-link>
  </div>
</template>

<script>
import NavigationUnit from './NavigationUnit.vue'

export default {
  name: 'HeaderNavigation',
  components: { NavigationUnit },
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.header-navigation
  display: flex
  flex-flow: column nowrap
</style>
