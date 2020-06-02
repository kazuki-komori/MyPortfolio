<template>
  <div class="c-container raised hoge">
    <v-card width="100%" height="100%" light class="p-last-card ">
      <div class="c-section_container">
        <v-card-title class="c-section_title c-v_line text-section-title">
          <span class="text-section-title-first">S</span>kill Set
        </v-card-title>
      </div>
      <div class="c-section_container">
        <v-card-text>
          <p class="text-body">
            実務経験をによる「使えるスキル」を習得しています。
          </p>
          <p class="text-body">
            また、大学での統計学の学習により、より専門的な知識を習得しています。
          </p>
        </v-card-text>
      </div>
      <div class="c-section_container p-sub-container">
        <span class="c-section_title text-sub-section-title">
          <span class="text-sub-section-title-first">F</span>or Web Engineer
        </span>
        <v-row justify="space-between">
          <v-col v-for="card in cards" :key="card" cols="md-4">
            <v-card width="100%" height="100%" class="d-flex" tile>
              <div class="c-section_container">
                <v-img class="p-section_img" width="200" height="200" :src="card.image"></v-img>
                <div class="text-center p-rate">
                  <v-rating background-color="orange lighten-3" color="orange" :value="card.rate" readonly="true"></v-rating>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="c-section_container p-sub-container">
        <span class="c-section_title text-sub-section-title">
          <span class="text-sub-section-title-first">F</span>or Statistics
        </span>
        <v-row justify="space-between">
          <v-col v-for="card in cards" :key="card" cols="md-4">
            <v-card width="100%" height="100%" class="d-flex" tile>
              <div class="c-section_container">
                <v-img class="p-section_img" width="200" height="200" :src="card.image"></v-img>
                <div class="text-center p-rate">
                  <v-rating background-color="orange lighten-3" color="orange" :value="card.rate" readonly="true"></v-rating>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cards: [
        { image: 'https://cdn.vuetifyjs.com/images/cards/store.jpg', rate: '3' },
        { image: 'https://cdn.vuetifyjs.com/images/cards/store.jpg', rate: '3' },
        { image: 'https://cdn.vuetifyjs.com/images/cards/store.jpg', rate: '3' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/mixins";
  .p-first-card{
    margin-top: 20%;
  }
  .p-purpose{
    text-align: center;
    font-size: 22px;
    @include sp{
      font-size: 13px;
    }
  }
  .p-name{
    font-size: 25px;
    @include sp{
      font-size: 18px;
    }
  }
 .p-last-card{
    margin-bottom: 20%;
    @include sp{
      margin-bottom: 55%;
    }
  }
  .p-sub-container{
    padding-top: 0;
  }
  .p-section_img{
    margin: 0 auto;
  }
  .p-rate{
    margin-top: 5%;
  }
</style>
