<template>
  <div class="c-container raised" id="Products">
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
</style>
