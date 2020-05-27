<template>
  <div>
    <NavigationBar :links="links" :drawer="drawer" @toggle-drawer="toggleDrawer" />
    <!-- <NavigationDrawer :links="links" @close-drawer="closeDrawer" :drawer="drawer" /> -->
    <v-content>
      <slot />
    </v-content>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
// import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default {
  components: {
    NavigationBar,
    // NavigationDrawer,
  },
  data: () => ({
    drawer: false,
    links: [
      { icon: 'mdi-laptop', text: 'Projects', name: 'Projects' },
      { icon: 'mdi-file-account', text: 'Resume', name: 'Resume' },
    ],
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    closeDrawer(navigationDrawer) {
      this.drawer = navigationDrawer
    },
  },
}
</script>

<style lang="scss" scoped></style>
