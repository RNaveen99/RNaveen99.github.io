<template>
  <v-navigation-drawer
    v-model="myDrawer"
    @input="toggleDrawer"
    app
    :clipped="$vuetify.breakpoint.smAndDown"
  >
    <v-list dense>
      <template v-for="link in links">
        <v-list-item :key="link.text" :to="{ name: link.name }">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
    },
    drawer: {},
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
      this.$emit('close-drawer', this.myDrawer)
    },
  },
}
</script>

<style lang="scss" scoped></style>
