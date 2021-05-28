<template>
  <router-link
    class="navigation-unit"
    :to="unit.path"
  >
    {{ unit.text }}
  </router-link>
</template>

<script>
export default {
  name: 'NavigationUnit',
  props: {
    unit: {
      type: Object,
      required: true,
    },
  },
}
</script>
