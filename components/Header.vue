<template>
  <v-toolbar color="#60C799" flat class="header">
    <v-app-bar-nav-icon class="nav-icon" />
    <v-toolbar-title>Navigation</v-toolbar-title>
    <v-spacer />
    <v-card flat class="tabs" color="#60C799">
      <v-tabs right>
        <v-tab v-scroll-to="'#Top'">Top</v-tab>
        <v-tab v-scroll-to="'#About'">About</v-tab>
        <v-tab v-scroll-to="'#SkillSet'">Skill Set</v-tab>
        <v-tab v-scroll-to="'#Belongs'">Belongs</v-tab>
        <v-tab v-scroll-to="'#Products'">Products</v-tab>
        <v-tab v-scroll-to="'#Contact'">Contact</v-tab>
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
