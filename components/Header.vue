<template>
  <v-toolbar color="#60C799" flat class="header">
    <v-toolbar-title class="navigation">
      Navigation
    </v-toolbar-title>
    <v-spacer />
    <v-card flat class="tabs">
      <v-tabs v-model="tab" right>
        <v-tab v-scroll-to="'#Top'" href="#Top">
          Top
        </v-tab>
        <v-tab key="About" v-scroll-to="'#About'" href="#About">
          About
        </v-tab>
        <v-tab key="SkillSet" v-scroll-to="'#SkillSet'" href="#SkillSet">
          Skill Set
        </v-tab>
        <v-tab v-scroll-to="'#Belongs'" href="#Belongs">
          Belongs
        </v-tab>
        <v-tab v-scroll-to="'#Products'" href="#Products">
          Products
        </v-tab>
        <v-tab v-scroll-to="'#Contact'" href="#Contact">
          Contact
        </v-tab>
      </v-tabs>
    </v-card>
  </v-toolbar>
</template>
<script>
export default {
  data () {
    return {
      tab: '',
      scrollY: 0,
      screenWidth: 0,
      deviceType: 'PC'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.calculateScrollY)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    onScroll (num) {
      if (this.deviceType === 'PC') {
        if (num <= 900 && num >= 450) {
          this.tab = 'About'
        } else if (num < 450) {
          this.tab = 'Top'
        } else if (num > 900 && num <= 4600) {
          this.tab = 'SkillSet'
        } else if (num > 4600 && num <= 5700) {
          this.tab = 'Belongs'
        } else if (num > 5700 && num <= 6300) {
          this.tab = 'Products'
        } else {
          this.tab = 'Contact'
        }
      } else if (this.deviceType === 'tablet') {
        if (num <= 900 && num >= 250) {
          this.tab = 'About'
        } else if (num < 250) {
          this.tab = 'Top'
        } else if (num > 900 && num <= 4200) {
          this.tab = 'SkillSet'
        } else if (num > 4200 && num <= 5400) {
          this.tab = 'Belongs'
        } else if (num > 5400 && num <= 5600) {
          this.tab = 'Products'
        } else {
          this.tab = 'Contact'
        }
      }
    },
    calculateScrollY () {
      this.scrollY = window.scrollY
      this.onScroll(this.scrollY)
    },
    handleResize () {
      this.screenWidth = document.body.clientWidth
      if (this.screenWidth > 1900) {
        this.deviceType = 'PC'
      } else if (this.screenWidth > 1000 || this.screenWidth <= 1900) {
        this.deviceType = 'tablet'
      } else {
        this.deviceType = 'smartPhone'
      }
    }
  }
}
</script>
<style lang="scss">
.v-slide-group__wrapper{
  background-color: #60C799;
}
.nav-icon{
  display: none;
}
.header{
  width: 100%;
  position: fixed;
  z-index: 5;
}
@media (max-width: 768px) {
  .v-tabs:not(.v-tabs--vertical).v-tabs--right > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__next{
    display: none;
  }
  .navigation{
    display: none;
  }
}
</style>
