<template>
  <div>
    <v-form v-if="showForm" @submit.prevent="reset" action="/api/auth/recover" method="POST">
      <v-layout column>
        <v-text-field
          label="Username"
          type="text"
          v-model="username"
          required
          :error-messages="errors.username"></v-text-field>
        <v-layout row>
          <v-spacer></v-spacer>
          <v-btn type="submit" text color="primary">Reset Password</v-btn>
        </v-layout>
        <div class="error" v-if="errors['']">
          <div v-for="(error, index) of errors['']" v-text="error" :key="index"></div>
        </div>
      </v-layout>
    </v-form>
    <v-alert color="success" v-if="success" v-text="success"></v-alert>
  </div>
</template>
<style>
</style>
<script>
const URL = '/api/auth/recover'
export default {
  data () {
    return {
      username: '',
      showForm: true,
      loading: false,
      success: '',
      errors: {}
    }
  },
  methods: {
    async reset () {
      console.log('reset')
      this.showForm = false
      this.loading = true
      const { data: { status, error = '', message = '' } } = await this.$axios.post(URL, {
        username: this.username
      }, { validateStatus: null })
      if (status === 'success') {
        this.success = message
        this.loading = false
      } else {
        this.showForm = true
        this.loading = false
        this.errors = { '': [error] }
      }
    }
  }
}
</script>
