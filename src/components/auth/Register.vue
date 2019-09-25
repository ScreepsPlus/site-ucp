<template>
  <div>
    <v-form v-if="showForm" @submit.prevent="signup" action="/api/auth/register" method="POST">
      <v-layout column>
        <v-text-field
          label="Username"
          type="text"
          v-model="username"
          required
          :error-messages="errors.username"></v-text-field>
        <v-text-field
          label="Email"
          type="email"
          v-model="email"
          required
          :error-messages="errors.email"></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          required
          :error-messages="errors.password"></v-text-field>
        <v-text-field
          label="Confirm Password"
          type="password"
          v-model="confirm_password"
          required
          :error-messages="errors.confirm_password"></v-text-field>
         <v-layout row>
          <v-spacer></v-spacer>
          <v-btn type="submit" text color="primary">Signup</v-btn>
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
  .form-group {
    display: flex;
    max-width: 350px;
  }
  .form-label, .form-control {
    flex: 1;
  }
</style>
<script>
const URL = '/api/auth/register'
// const URL = 'http://localhost:8080/register'
export default {
  data () {
    return {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      showForm: true,
      loading: false,
      success: '',
      errors: {}
    }
  },
  methods: {
    async signup () {
      console.log('signup')
      this.showForm = false
      this.loading = true
      const { data: { status, errors = {}, message = '' } } = await this.$axios.post(URL, {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email
      }, { validateStatus: null })
      if (status === 'success') {
        this.success = message
        this.loading = false
      } else {
        this.showForm = true
        this.loading = false
        this.error = message
        this.errors = errors
      }
    }
  }
}
</script>
