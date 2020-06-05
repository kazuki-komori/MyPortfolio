<template>
  <div class="c-container p-first-card raised" id="About">
    <v-card width="100%" height="100%" light>
      <div class="c-section_container">
        <v-card-title class="c-section_title c-v_line text-section-title">
          <span class="text-section-title-first">A</span>bout Me
        </v-card-title>
      </div>
      <div class="c-section_container">
        <v-card-text>
          <v-row>
            <v-col cols="sm-3">
              <v-img :src="myPicture" height="200" width="200" />
            </v-col>
            <v-col class="c-text_container">
              <p class="text-body p-name">
                小森 一輝 / Kazuki Komori
              </p>
              <p class="text-body">
                大学：同志社大学 文化情報学部 2回
              </p>
              <p class="text-body">
                専門：統計学・データサイエンス
              </p>
              <p class="text-body">
                WEBエンジニア歴：フロントエンド・バックエンドエンジニア（実務経験7ヶ月）
              </p>
            </v-col>
          </v-row>
          <span class="c-text_container">
            <p class="text-body p-purpose">Web系エンジニア ✕ データサイエンスを用いたビジネスの実践</p>
          </span>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      myPicture: require('../../assets/image/mike.jpg')
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
</style>
