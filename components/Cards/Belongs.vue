<template>
  <div id="Belongs" class="c-container raised" data-aos="fade-up">
    <v-card width="100%" height="100%" light>
      <div class="c-section_container">
        <v-card-title class="c-section_title c-v_line text-section-title">
          <span class="text-section-title-first">B</span>elongs
        </v-card-title>
      </div>
      <div class="c-section_container">
        <v-card-text>
          <p class="text-body">
            団体・インターンなどでの活動歴の一覧です。
          </p>
          <v-container fluid>
            <v-timeline dense class="p-timeline">
              <v-timeline-item
                v-for="card in timeline"
                :key="card.title"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                fill-dot="fill-dot"
                right
                color="orange"
              >
                <template v-slot:opposite>
                  <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-1">
                  <v-card-title class="headline text-body" v-html="card.title" />
                  <v-card-text class="p-contribution text-body" v-html="cleanMessage(card.description)" />
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <div class="p-sp-timeline">
              <v-card
                v-for="card in timelineSp"
                :key="card.title"
                class="elevation-2"
              >
                <v-card-title class="headline">
                  <p class="text-body p-card-title" v-html="cleanMessage(card.title)" />
                </v-card-title>
                <v-card-text class="p-contribution" v-html="cleanMessage(card.description)" />
              </v-card>
            </div>
          </v-container>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      timeline: [
        { title: '[ 2019.10 ~ ] 株式会社 ChatBox', description: 'Vue.js / Nuxt.jsを用いたフロントエンド開発<br />及び、PHP / Laravelを用いたバックエンド開発' },
        { title: '[ 2019.11 ~ ] 学生エンジニア集団 Cuovision', description: '関西支部で勉強会を開催、学生エンジニアの方々と親交を深める' },
        { title: '[ 2020.3 ] 株式会社 tam-bourin', description: '1ヶ月間の開発インターン<br />boltフレームワーク / GASを用いた Slack bot開発' },
        { title: '[ 2020.4 ~ ] 同志社大学ビジネスサークル Scholar', description: '技術責任者を担い、未経験からの共同開発の導入を行う' }
      ],
      timelineSp: [
        { title: '[ 2019.10 ~ ]<br /> 株式会社 ChatBox', description: 'Vue.js / Nuxt.jsを用いたフロントエンド開発<br />及び、PHP / Laravelを用いたバックエンド開発' },
        { title: '[ 2019.11 ~ ]<br />学生エンジニア集団 <br /> Cuovision', description: '関西支部で勉強会を開催、学生エンジニアの方々と親交を深める' },
        { title: '[ 2020.3 ]<br /> 株式会社 tam-bourin', description: '1ヶ月間の開発インターンboltフレームワーク / GASを用いた Slack bot開発' },
        { title: '[ 2020.4 ~ ]<br /> 同志社大学ビジネスサークル Scholar', description: '技術責任者を担い、未経験からの共同開発の導入を行う' }
      ]
    }
  },
  computed: {
    cleanMessage () {
      return function (msg) {
        return this.$sanitize(msg)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/mixins";
  .headline{
    background-color: $clr-vue-green;
    color: white;
    margin-bottom: 0;
    @include sp{
      margin: auto;
    }
  }
  .p-contribution{
    padding-top: 20px;
  }
  .p-timeline{
    @include sp{
      display: none;
    }
  }
  .p-sp-timeline{
    display: none;
    @include sp{
      display: block;
    }
  }
  .elevation-2{
    margin-bottom: 20px;
  }
  .p-card-title{
    margin-bottom: 0;
    color: white;
  }
</style>
