<template>
  <div class="c-container raised hoge">
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
                v-for="n in 3"
                :key="n"
                fill-dot="fill-dot"
                right
                color="orange"
              >
                <template v-slot:opposite>
                  <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-1">
                  <v-card-title class="headline text-body">
                    Lorem ipsum
                  </v-card-title>
                  <v-card-text class="p-contribution">
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <div class="p-sp-timeline">
              <v-card
                class="elevation-2"
                v-for="n in 3"
                :key="n">
                <v-card-title class="headline text-body">
                  Lorem ipsum
                </v-card-title>
                <v-card-text class="p-contribution">
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                </v-card-text>
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
}
</script>
<style lang="scss" scoped>
  @import "../assets/mixins";
  .headline{
    background-color: $clr-vue-green;
    color: white;
    margin-bottom: 0;
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
</style>
