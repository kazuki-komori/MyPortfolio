<template>
  <v-footer
    padless
    absolute
    class="footer"
  >
    <v-card
      width="100%"
      flat
      tile
      class="lighten-1 white--text text-center"
      color="#35495eff"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text icons"
          icon
        >
          <v-icon size="32px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="mail">
        <p>kazuki.komori.eng@gmail.com</p>
      </v-card-text>
      <v-divider />
      <v-card-text class="white--text">
        ©{{ new Date().getFullYear() }} — <strong>Kazuki Komori All Rights Reserved.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data () {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "./assets/mixins";
  .icons{
    margin: 0 1%;
  }
  .footer{
    display: block;
    margin-top: 100px;
  }
</style>
