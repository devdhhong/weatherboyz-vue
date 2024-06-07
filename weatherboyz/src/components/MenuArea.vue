<template>
  <div>
    <nav>
      <i class="fas fa-home" data-index="0" @click="btnTab"></i>
      <i class="fas fa-search-location" data-index="1" @click="btnTab"></i>
      <i class="fas fa-chart-line" data-index="2" @click="btnTab"></i>
      <i class="fas fa-cog" data-index="3" @click="btnTab"></i>
    </nav>
  </div>
</template>

<script>
export default {
  // name : "Menu",
  props: {
    // selectedMenu(newValue, oldValue) {
    //   console.log(`message changed from ${oldValue} to ${newValue}`);
    // }
  },
  // data() { 
  //   return {
  //     selectedTab : "",
  //   }
  // },
  methods : {
    btnTab(event){
      const index = event.target.getAttribute('data-index');
      this.$emit('getSelectedTab', index);
    },

  },
} 
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

nav {
  @include center-sb;
  height: 10vh;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 15%;

  i {
    color: rgb(255, 255, 255);
    font-size: 1.15rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: hsl(55, 100%, 87%);
    }
  }
}
</style>
