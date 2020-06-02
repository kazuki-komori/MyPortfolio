<template>
  <div class="c-container raised hoge">
    <v-card width="100%" height="100%" light class="p-last-card ">
      <div class="c-section_container">
        <v-card-title class="c-section_title c-v_line text-section-title">
          <span class="text-section-title-first">C</span>ontact
        </v-card-title>
      </div>
      <div class="c-section_container">
        <v-card-text>
          <p class="text-body">
            団体・インターンなどでの活動歴の一覧です。
          </p>
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
  .p-last-card{
    margin-bottom: 20%;
    @include sp{
      margin-bottom: 55%;
    }
  }
</style>
