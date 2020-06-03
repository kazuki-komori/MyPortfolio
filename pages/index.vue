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
        Welcome to Kazuki's Portfolio
      </p>
    </div>
    <About-me />
    <Skill-set />
    <Belongs />
    <Products />
    <Contact />
  </v-layout>
</template>

<script>
import AboutMe from '../components/Cards/AboutMe'
import SkillSet from '../components/Cards/SkillSet'
import Belongs from '../components/Cards/Belongs'
import Products from '../components/Cards/Products'
import Contact from '../components/Cards/Contact'
export default {
  components: {
    AboutMe,
    SkillSet,
    Belongs,
    Products,
    Contact
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
</style>
