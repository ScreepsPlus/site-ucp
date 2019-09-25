<template>
  <div>
    <v-form v-if="showForm" @submit.prevent="submit">
      <v-layout column>
        <div>It appears you do not have an email set, please enter your email below.</div>
        <v-text-field
          label="Email"
          type="text"
          v-model="email"
          required
          :error-messages="errors.email"></v-text-field>
        <v-layout row>
          <v-spacer></v-spacer>
          <v-btn type="submit" text color="primary">Save</v-btn>
        </v-layout>
        <div class="error" v-if="errors['']">
          <v-alert color="error" v-for="(error, index) of errors['']" v-text="error" :key="index"></v-alert>
        </div>
      </v-layout>
    </v-form>
    <v-alert color="success" v-if="success" v-text="success"></v-alert>
  </div>
</template>
<style>
</style>
<script>
const URL = '/api/user/set-email'
export default {
  data () {
    return {
      email: '',
      showForm: true,
      loading: false,
      success: '',
      errors: {}
    }
  },
  methods: {
    async submit () {
      this.showForm = false
      this.loading = true
      const { data: { status, error = '', message = '', location: loc } } = await this.$axios.post(URL, {
        email: this.email
      }, { validateStatus: null, withCredentials: true })
      if (status === 'success') {
        this.success = message
        this.loading = false
        if (loc) {
          this.$router.push(loc)
        }
      } else {
        this.showForm = true
        this.loading = false
        this.errors = { '': [error] }
      }
    }
  }
}
</script>
