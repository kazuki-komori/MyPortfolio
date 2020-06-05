<template>
  <v-toolbar color="#60C799" flat class="header">
    <v-toolbar-title class="navigation">Navigation</v-toolbar-title>
    <v-spacer />
    <v-card flat class="tabs">
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
<style lang="scss">
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
  .v-tabs:not(.v-tabs--vertical).v-tabs--right > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__next{
    display: none;
  }
  .navigation{
    display: none;
  }
}
</style>
