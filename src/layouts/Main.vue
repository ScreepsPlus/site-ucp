<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>ScreepsPlus</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer permanent app width="200">
      <Menu/>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid class="fill-height">
        <slot></slot>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Menu from '@/components/Menu'
export default {
  components: {
    Menu
  }
}
</script>
