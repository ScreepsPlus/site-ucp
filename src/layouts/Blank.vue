<template>
  <v-app>
    <v-container fluid class="fill-height">
      <v-content>
        <v-row align="center" justify="center">
          <v-col />
          <v-col class="text-center">
            <img class="logo" src="@/assets/logo.png" />
            <slot></slot>
          </v-col>
          <v-col />
        </v-row>
      </v-content>
    </v-container>
  </v-app>
</template>
<style lang="stylus">

</style>
