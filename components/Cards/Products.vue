<template>
  <div id="Products" class="c-container raised" data-aos="fade-up">
    <v-card width="100%" height="100%" light>
      <div class="c-section_container">
        <v-card-title class="c-section_title c-v_line text-section-title">
          <span class="text-section-title-first">P</span>roducts
        </v-card-title>
      </div>
      <div class="c-section_container">
        <v-card-text>
          <div class="p-github-title">
            <p class="text-body">
              過去の制作物の一覧です。
            </p>
            <span class="p-github-btn">
              <v-btn
                color="#24292E"
                class="ma-2 white--text"
                large
                href="https://github.com/kazuki-komori"
              >
                Githubへ
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </span>
          </div>
          <v-row dense>
            <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12"
            >
              <v-card
                :color="item.color"
                dark
              >
                <div class="p-card-contents flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="headline text-body color-white p-Product-title"
                      v-text="item.title"
                    />

                    <v-card-subtitle class="text-body color-white" v-text="item.lang" />
                    <v-card-text class="text-body color-white" v-text="item.description" />
                  </div>

                  <v-avatar
                    class="ma-3"
                    size="125"
                    tile
                  >
                    <v-img :src="item.src" />
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          color: '#F4B223',
          src: require('../../assets/image/ProductsImage/Slack_Mark_Web.png'),
          title: 'slack 書籍管理Bot',
          lang: '(Bolt-js / Node.js / TypeScript / GAS / Slack API /  heroku)',
          description: '複数の場所に保管された書籍をデスク上からスマートに探すことができるBot'
        },
        {
          color: '#662C91',
          src: require('../../assets/image/ProductsImage/scholar.png'),
          title: '同志社大学 Scholar 公式HP',
          lang: '(HTML / CSS / JavaScript / Scss)',
          description: 'メンテナンス性を重視したHP制作'
        },
        {
          color: '#326496',
          src: require('../../assets/image/ProductsImage/LineOutlook.jpg'),
          title: 'Outlook × Line bot',
          lang: '(GAS / Line API)',
          description: '大学からの通知を見落とさないツールを作成'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/mixins";
  .p-github-title{
    display: flex;
    @include sp{
      display: block;
    }
  }
  .p-github-btn{
    padding-left: 10%;
    @include sp{
    }
  }
  .v-avatar{
    background-color: white;
  }
  .p-Product-title{
    margin: 0;
  }
  .p-card-contents{
    display: flex;
    @include md{
      display: block;
    }
  }
</style>
