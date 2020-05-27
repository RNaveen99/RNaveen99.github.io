<template>
  <div>
    <NavigationBar :links="links" :drawer="drawer" @toggle-drawer="toggleDrawer" />
    <!-- <NavigationDrawer :links="links" @close-drawer="closeDrawer" :drawer="drawer" /> -->
    <v-content>
      <slot />
    </v-content>
    <v-speed-dial v-model="fab" fab fixed bottom right class="d-sm-none">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-btn text @click="toggleTheme">
        <v-icon>fas fa-moon</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo" :to="{ name: 'Resume' }">
        <v-icon>mdi-file-account</v-icon>
      </v-btn>
      <v-btn fab dark small color="green" :to="{ name: 'Projects' }">
        <v-icon>mdi-laptop</v-icon>
      </v-btn>
    </v-speed-dial>
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
    fab: false,
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
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.themeDark = this.$vuetify.theme.dark
    },
  },
}
</script>

<style lang="scss" scoped></style>
