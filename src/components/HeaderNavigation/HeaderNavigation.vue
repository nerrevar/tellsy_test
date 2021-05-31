<template>
  <div class="header-navigation">
    <div class="header-navigation__navigation">
      <NavigationUnit
        :class="{ 'header-navigation__unit_active': $route.path === unit.path }"
        v-for="(unit, index) in menuItems"
        :key="index"
        :unit="unit"
      />
    </div>
    <router-link
      class="header-navigation__support-link"
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
  display flex
  flex-flow row nowrap

  border-bottom 2px solid #eee

  & > *
    margin-bottom -2px

  &__navigation
    flex 1 0

    display flex
    justify-content center

  &__support-link
    color black
    text-decoration none
    padding: 1em
    font-weight 600

  &__unit_active
    color #459
    border-bottom 2px solid @color

    &::after
      display inline-block
      content '^'
      transform rotate(180deg)
      margin-left 5px
</style>
