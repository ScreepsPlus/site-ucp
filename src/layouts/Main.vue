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
    <v-navigation-drawer permanent app width="200" :right="right">
      <Menu/>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid class="fill-height">
        <slot></slot>
      </v-container>
    </v-content>
    <v-footer app>
      <v-btn @click="right = !right" icon title="Switch Menu Side"><v-icon>mdi-view-dashboard</v-icon></v-btn>
      <v-spacer />
    </v-footer>
  </v-app>
</template>
<script>
import Menu from '@/components/Menu'
export default {
  components: {
    Menu
  },
  data () {
    return {
      right: false
    }
  }
}
</script>
