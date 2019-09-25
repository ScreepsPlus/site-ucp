<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const defaultLayout = 'main'
export default {
  computed: {
    layout () {
      return `${this.$route.meta.layout || defaultLayout}-layout`
    }
  }
}
</script>
