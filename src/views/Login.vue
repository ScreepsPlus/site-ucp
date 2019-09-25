<template>
  <v-row align="center" justify="center">
    <v-card width="300">
      <v-card-text>
        <v-tabs grow>
          <v-tab>Login</v-tab>
          <v-tab>Register</v-tab>
          <v-tabs-slider />
          <v-tab-item>
            <Login />
          </v-tab-item>
          <v-tab-item>
            <Register />
          </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
export default {
  components: {
    Login,
    Register
  }
}
</script>
