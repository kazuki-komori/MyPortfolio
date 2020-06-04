<template>
  <div class="c-container raised">
    <v-card width="100%" height="100%" light>
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
          <v-col v-for="card in engineerCards" :key="card.rate" cols="md-6 lg-4">
            <v-card width="100%" height="100%" class="d-flex" tile>
              <div class="c-section_container">
                <v-img class="p-section_img" :height="card.height" :width="card.width" :src="card.image" />
                <v-img class="p-section_img__sp" width="100" :src="card.image" />
                <div class="text-center p-rate">
                  <v-rating background-color="orange lighten-3" color="orange" :value="card.rate" readonly />
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
          <v-col v-for="card in statisticsCards" :key="card.rate" cols="md-6 lg-4">
            <v-card width="100%" height="100%" class="d-flex" tile>
              <div class="c-section_container" :class="card.class">
                <v-img class="p-section_img" :height="card.height" :width="card.width" :src="card.image" />
                <v-img class="p-section_img__sp" width="100" :src="card.image" />
                <div class="text-center p-rate">
                  <v-rating background-color="orange lighten-3" color="orange" :value="card.rate" readonly />
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="md-6 lg-4">
            <v-card width="100%" height="100%" class="d-flex" tile>
              <div class="c-section_container p-python_img">
                <v-img class="p-section_img" height="100" width="350" src="https://www.python.org/static/community_logos/python-logo-inkscape.svg" />
                <v-img class="p-section_img__sp" width="120" src="https://www.python.org/static/community_logos/python-logo-inkscape.svg" />
                <div class="text-center p-rate">
                  <v-rating background-color="orange lighten-3" color="orange" :value="2" readonly />
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
      engineerCards: [
        { image: require('../../assets/image/CardLogo/github-logo.svg'), rate: 5, height: 200, width: 200 },
        { image: require('../../assets/image/CardLogo/vue.png'), rate: 4, height: 200, width: 200 },
        { image: 'https://ja.nuxtjs.org/logos/nuxt-square.svg', rate: 4, height: 200, width: 200 },
        { image: require('../../assets/image/CardLogo/google-apps-script.svg'), rate: 4, height: 200, width: 200 },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', rate: 3, height: 200, width: 350 },
        { image: require('../../assets/image/CardLogo/javascript.svg'), rate: 3, height: 200, width: 200 },
        { image: require('../../assets/image/CardLogo/bolt-js-logo.svg'), rate: 3, height: 200, width: 200 },
        { image: require('../../assets/image/CardLogo/ts.svg'), rate: 2, height: 200, width: 200 },
        { image: 'https://www.php.net/images/logos/new-php-logo.svg', rate: 2, height: 200, width: 400 },
        { image: require('../../assets/image/CardLogo/laravel-logo.png'), rate: 2, height: 200, width: 200 },
        { image: require('../../assets/image/CardLogo/c-programming-language-seeklogo.com.svg'), rate: 1, height: 200, width: 200 },
        { image: require('../../assets/image/CardLogo/angular.svg'), rate: 1, height: 200, width: 200 },
        { image: require('../../assets/image/CardLogo/AWS-Serverless-Application-Repository.svg'), rate: 1, height: 200, width: 200 }
      ],
      statisticsCards: [
        { image: require('../../assets/image/CardLogo/JSSC_name_logo_col.jpg'), rate: 3, height: 100, width: 350, class: 'p-JSCC_img' },
        { image: 'https://www.r-project.org/logo/Rlogo.svg', rate: 2, height: 150, width: 195 }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/mixins";
  .p-sub-container{
    padding-top: 0;
  }
  .p-section_img{
    margin: 0 auto;
    @include sp{
      display: none;
    }
  }
  .p-section_img__sp{
    display: none;
    @include sp{
      display: block;
      margin: 0 auto;
    }
  }
  .p-rate{
    margin-top: 5%;
  }
  .p-python_img{
    margin: auto;
    padding-top: 10%;
  }
  .p-JSCC_img{
    padding-top: 10%;
  }
</style>
