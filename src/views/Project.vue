<template>
  <v-row class="mx-auto">
    <v-col>
      <v-card>
        <div class="project-card-header">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ project.name }}</h3>
            </div>
          </v-card-title>
          <v-card-subtitle>
            <v-chip
              v-for="(chip, $chipIndex) in project.chips"
              :key="$chipIndex"
              class="ma-2"
              text-color="black"
            >
              <v-avatar left v-if="chip.icon || chip.img">
                <v-icon v-if="chip.icon">{{ chip.icon }}</v-icon>
                <img v-else-if="chip.img" :src="chip.img" />
              </v-avatar>
              {{ chip.name }}
            </v-chip>
          </v-card-subtitle>
        </div>
        <v-divider></v-divider>
        <v-card-text class="display-1">
          {{ project.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="project.deployment"
            text
            color="primary"
            :href="project.deployment"
            target="_blank"
          >
            Deployment
          </v-btn>
          <v-btn text color="primary" :href="project.repo_url" target="_blank">Repo</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getProject']),
    project() {
      return this.getProject(this.$route.params.id)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>