<template>
  <v-layout
    column
    justify-center
    align-center
    class="page"
  >
    <span class="triangle" />
    <div class="c-container p-title">
      <p class="t-title">
        Welcome to My Portfolio
      </p>
    </div>
    <div class="c-container p-first-card raised">
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
                <v-img src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg" />
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
    <div class="c-container last-card raised">
      <v-card width="100%" height="500px" light>
        <div class="c-section_container">
          <v-card-title class="c-section_title c-v_line text-section-title">
            <span class="text-section-title-first">A</span>bout Me
          </v-card-title>
        </div>
        <div class="c-section_container">
          <p>hogehoge</p>
        </div>
      </v-card>
    </div>
  </v-layout>
</template>

<script>

export default {
  components: {
  }
}
</script>
<style lang="scss" scoped>
  @import "../assets/mixins";
  .page{
    background-color: $clr-back-ground;
  }
  .triangle{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 200px 200px 0 0;
    border-color: #40b884 transparent transparent transparent;
    position: absolute;
    top: 0;
    left: 0;
  }
  .p-title{
    margin-top: 20%;
    @include sp{
      margin-top: 40%;
    }
  }
  .t-title{
    font-size: 50px;
    text-align: left;
    @include sp{
      text-align: center;
      font-size: 35px;
    }
  }
  .p-first-card{
    margin-top: 20%;
  }
  .last-card{
    margin-bottom: 20%;
  }
  .p-mb{
    display: block;
    margin-bottom: 3rem;
  }
  .p-name{
    font-size: 30px;
    @include sp{
      font-size: 18px;
    }
  }
  .p-purpose{
    text-align: center;
    font-size: 22px;
    @include sp{
      font-size: 13px;
    }
  }
</style>
