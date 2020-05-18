<template>
  <v-layout
    column
    justify-center
    align-center
    class="page"
  >
    <span class="triangle" />
    <div class="c-container p-first-card">
      <v-card width="100%" height="500px" light>
        <p>hogehoge</p>
      </v-card>
    </div>
    <div class="c-container">
      <v-card width="100%" height="500px" light>
        <p>hogehoge</p>
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
    position: relative;
  }
  .p-first-card{
    margin-top: 50%;
  }
</style>
