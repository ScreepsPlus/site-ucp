<template>
  <v-row class="home" align="start" justify="center">
    <v-card>
      <v-card-title>Manage Stats</v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-spacer />
        <v-dialog v-model="clearStatsConfirm" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn color="error" v-on="on">Clear All</v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Clear All Stats?</v-card-title>
            <v-card-text>
              Are you sure you want to permanently clear your stats?
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn text @click="clearStatsConfirm = false">Cancel</v-btn>
              <v-btn color="red" text @click="clearAllStats">Confirm</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      clearStatsConfirm: false
    }
  },
  components: {
  },
  methods: {
    async clearAllStats () {
      this.clearStatsConfirm = false
      // const { data: { status, error = '', message = '', location: loc } } =
      await this.$axios({
        method: 'DELETE',
        url: '/api/user/stats',
        body: {
          username: this.username,
          password: this.password
        },
        validateStatus: null,
        withCredentials: true
      })
    }
  }
}
</script>
