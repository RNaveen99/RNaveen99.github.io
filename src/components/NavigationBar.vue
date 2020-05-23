<template>
  <v-app-bar app color="blue darken-3" dark :clipped-left="$vuetify.breakpoint.smAndDown">
    <v-app-bar-nav-icon @click.stop="toggleDrawer" class="d-sm-none"></v-app-bar-nav-icon>
    <v-toolbar-title :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''">
      <v-btn :to="{ name: 'Home' }" class="ml-n5 font-weight-bold title" exact text>
        Naveen Rohilla
      </v-btn>
    </v-toolbar-title>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>
    </template>
    <div class="d-none d-sm-inline">
      <v-btn
        v-for="link in links"
        :key="`${link.text}-header-link`"
        text
        rounded
        :to="{ name: link.name }"
      >
        {{ link.text }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
    },
    links: {
      type: Array,
    },
  },
  data() {
    return {
      myDrawer: this.drawer,
    }
  },
  watch: {
    drawer() {
      this.myDrawer = this.drawer
    },
  },
  methods: {
    toggleDrawer() {
      this.$emit('toggle-drawer')
    },
  },
}
</script>

<style lang="scss" scoped></style>
