<template>
  <v-row class="mx-auto mt-8">
    <v-col
      v-for="(project, $projectIndex) in projects"
      cols="12"
      class="col-md-6"
      :key="$projectIndex"
    >
      <v-card>
        <div class="project-card-header" @click="goToProject(project)">
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
    <div v-if="isProjectOpen">
      <v-dialog v-model="dialog">
        <router-view />
      </v-dialog>
    </div>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
const PROJECT_MODAL = 'ProjectModal'
const PROJECT = 'Project'
export default {
  data() {
    return {
      dialog: true,
    }
  },
  computed: {
    ...mapState(['projects']),
    project_to_be_opened_at() {
      return this.$vuetify.breakpoint.smAndUp ? PROJECT_MODAL : PROJECT
    },
    isProjectOpen() {
      return this.$route.name === PROJECT_MODAL
    },
  },
  watch: {
    dialog() {
      if (this.dialog === false) this.close()
    },
  },
  methods: {
    goToProject(project) {
      const route = { name: this.project_to_be_opened_at, params: { id: project.id } }
      this.$router.push(route).catch(() => {})
      this.dialog = true
    },
    close() {
      this.$router.push({ name: 'Projects' })
    },
  },
}
</script>
<style lang="scss" scoped>
.project-card-header:hover {
  cursor: pointer;
}
</style>