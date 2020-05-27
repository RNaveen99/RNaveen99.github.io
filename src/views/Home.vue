<template>
  <div>
    <v-container>
      <v-row class="mx-auto">
        <v-col class="d-flex justify-center">
          <v-card class="mx-auto">
            <!-- <v-img class="pic" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img> -->

            <v-card-title class="d-flex justify-center">
              Naveen Rohilla
            </v-card-title>

            <v-card-subtitle class="d-flex">
              <v-btn href="mailto:naveenrohilla99@gmail.com" target="_blank" text>
                <v-icon>mdi-gmail</v-icon>
              </v-btn>
              <v-btn href="https://github.com/RNaveen99" target="_blank" text>
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                href="https://www.linkedin.com/in/naveen-rohilla-18687b159"
                target="_blank"
                text
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn href="https://www.facebook.com/naveen.rohilla.9883" target="_blank" text
                ><v-icon>mdi-facebook</v-icon></v-btn
              >
              <v-btn href="https://www.instagram.com/naveenrohilla_99/" target="_blank" text
                ><v-icon>mdi-instagram</v-icon></v-btn
              >
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-speed-dial v-model="fab" fab fixed bottom right class="d-sm-none">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
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
export default {
  data() {
    return {
      fab: false,
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
