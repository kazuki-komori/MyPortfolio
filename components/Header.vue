<template>
  <v-toolbar color="#60C799" flat class="header">
    <v-app-bar-nav-icon class="nav-icon" />
    <v-toolbar-title>Navigation</v-toolbar-title>
    <v-spacer />
    <v-card flat class="tabs" color="#60C799">
      <v-tabs right>
        <v-tab>About</v-tab>
        <v-tab>Belongs</v-tab>
        <v-tab>Products</v-tab>
        <v-tab>Contact</v-tab>
      </v-tabs>
    </v-card>
  </v-toolbar>
</template>
<script>
export default {
}
</script>
<style>
  .v-slide-group__wrapper{
    background-color: #60C799;
  }
.nav-icon{
  display: none;
}
.header{
  width: 100%;
  position: fixed;
  z-index: 5;
}
@media (max-width: 768px) {
  .tabs{
    display: none;
  }
  .nav-icon{
    display: block;
  }
}
</style>
