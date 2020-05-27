<template>
  <v-container dark>
    <v-row>
      <v-col>
        <h1 class="text-center display-4">Oops!</h1>
        <v-divider></v-divider>
        <div class="d-flex flex-column align-center">
          <h3 class="align-self-start mt-12 mb-8 display-2">
            The page you are looking for is not here.
          </h3>
          <router-link :to="{ name: 'Home' }" class="display-1">Back to home page</router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {}
</script>

<style scoped></style>
