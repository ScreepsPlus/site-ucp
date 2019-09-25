<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Control Panel</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'Hosted Agent', icon: 'mdi-view-dashboard', to: '/hosted-agent' },
        { title: 'Logout', icon: 'mdi-logout', to: '/logout' }
      ]
    }
  }
}
</script>
