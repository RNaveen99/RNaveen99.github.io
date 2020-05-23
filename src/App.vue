<template>
  <v-app id="inspire">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
const default_layout = 'Default'
export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || default_layout}-layout`
    },
  },
}
</script>
