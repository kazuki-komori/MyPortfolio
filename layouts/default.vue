<template>
  <v-app>
    <IHeader class="header" />
    <v-content>
      <nuxt />
    </v-content>
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
        <v-card-text>
          <div class="mail">
            <v-icon size="28px" class="icons">
              mdi-mail
            </v-icon>
            <p>kazuki.komori.eng@gmail.com</p>
          </div>
        </v-card-text>
        <v-divider />

        <v-card-text class="white--text">
          ©{{ new Date().getFullYear() }} — <strong>Kazuki Komori All Rights Reserved.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import IHeader from '../components/Header'
export default {
  components: {
    IHeader
  },
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
  .mail{
    display: flex;
  }
  .footer{
    display: block;
    margin-top: 100px;
  }
</style>
