<template>
  <v-app>
    <IHeader class="header" />
    <v-content>
      <nuxt />
    </v-content>
    <IFooter />
  </v-app>
</template>

<script>
import IHeader from '../components/Header'
import IFooter from '../components/Footer'
export default {
  components: {
    IHeader,
    IFooter
  }
}
</script>
<style lang="scss" scoped>
  @import "./assets/mixins";
  .icons{
    margin: 0 1%;
  }
  .mail{
    display: flex;
  }
  .footer{
    display: block;
    margin-top: 100px;
  }
</style>
