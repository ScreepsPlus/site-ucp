<template>
  <v-row align="center" justify="center">
    <v-card width="300">
      <v-card-text>
        <RecoverEnd :token="token" />
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import RecoverEnd from '@/components/auth/RecoverEnd'
export default {
  props: ['token'],
  components: {
    RecoverEnd
  }
}
</script>
