<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>
      <div class="icon-container">
      <v-icon icon="mdi-circle-slice-4" />
    </div>
    <h2 class="app-title">
      Gades - CRUD en Vue.js
    </h2>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
//...
</script>

<style>
.v-toolbar__content{
  flex-direction: row;
}

.icon-container{
  display: inline-block;
  width: 10%;
  vertical-align: middle;
}

.app-title{
  display: inline;
  vertical-align: middle;
}
</style>
