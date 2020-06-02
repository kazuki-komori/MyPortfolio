<template>
  <div class="c-container p-last-card raised">
    <v-card width="100%" height="100%" light>
      <div class="c-section_container">
        <v-card-title class="c-section_title c-v_line text-section-title">
          <span class="text-section-title-first">S</span>kill Set
        </v-card-title>
      </div>
      <div class="c-section_container">
        <v-card-text>
          <span class="c-text_container">
            <p class="text-body">
              実務経験をによる「使えるスキル」を習得しています。
            </p>
            <p class="text-body">
              また、大学での統計学の学習により、より専門的な知識を習得しています。
            </p>
          </span>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {}
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
  }
</style>
