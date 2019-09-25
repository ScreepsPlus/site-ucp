<template>
  <div>
    <v-form v-if="showForm" @submit.prevent="submit">
      <v-layout column>
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
          <v-btn type="submit" text color="primary">Update Password</v-btn>
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
const URL = '/api/auth/recover/end'
export default {
  props: ['token'],
  data () {
    return {
      password: '',
      confirm_password: '',
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
      const { data: { status, errors = {}, message = '', location: loc } } = await this.$axios.post(URL, {
        password: this.password,
        confirm_password: this.confirm_password,
        token: this.token
      }, { validateStatus: null })
      if (status === 'success') {
        this.success = message
        this.loading = false
        if (loc) {
          setTimeout(() => {
            location.href = loc
          }, 5000)
        }
      } else {
        this.showForm = true
        this.loading = false
        this.errors = errors
      }
    }
  }
}
</script>
