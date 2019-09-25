<template>
  <div>
    <v-form v-if="showForm" @submit.prevent="login">
      <v-layout column>
        <v-text-field
          label="Username"
          type="text"
          v-model="username"
          required
          :error-messages="errors.username"></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          required
          :error-messages="errors.password"></v-text-field>
        <v-layout row>
          <v-btn to="recover" text>Reset Password</v-btn>
          <v-spacer></v-spacer>
          <v-btn type="submit" text color="primary">Login</v-btn>
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
const URL = '/api/auth/login'
export default {
  data () {
    return {
      username: '',
      password: '',
      showForm: true,
      loading: false,
      success: '',
      errors: {}
    }
  },
  methods: {
    async login () {
      console.log('login')
      this.showForm = false
      this.loading = true
      const { data: { status, error = '', message = '', location: loc } } = await this.$axios.post(URL, {
        username: this.username,
        password: this.password
      }, { validateStatus: null, withCredentials: true })
      if (status === 'success') {
        this.success = message
        this.loading = false
        if (loc) {
          // location.href = loc
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
