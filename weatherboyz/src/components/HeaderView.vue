<template>
  <div id="HeaderView">
    <!-- MAIN -->
    <div v-if="title == 'MAIN'">
      <div class="btnLeft" @click="btnLeft">
        <i class="fa-solid fa-shirt"></i>
      </div>
      <div class="title">
        <p>{{ cityName }}</p>
      </div>
      <div class="btnRight" @click="btnRight">
        <i class="fa-solid fa-gear fa-lg"></i>
      </div>
    </div>
    <!-- MAIN -->

    <!-- SETTING -->
    <div v-else-if="title == 'SETTING'">
      <div class="btnClose" @click="btnClose" style="visibility: hidden;">
        <i class="fa-solid fa-xmark fa-xl"></i>
      </div>
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="btnClose" @click="btnClose">
        <i class="fa-solid fa-xmark fa-xl"></i>
      </div>
    </div>
    <!-- SETTING -->

    <!-- OOTBZ -->
    <div v-else-if="title == 'OOTBZ'">
      <div class="btnClose" @click="btnClose" style="visibility: hidden;">
        <i class="fa-solid fa-xmark fa-xl"></i>
      </div>
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="btnClose" @click="btnClose">
        <i class="fa-solid fa-xmark fa-xl"></i>
      </div>
    </div>
    <!-- OOTBZ -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.cityName = localStorage.getItem('location');
  },
  data() {
    return {
      cityName: "",
    };
  },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  methods: {
    btnLeft: function () {
      this.$router.push("/OOTD");
    },
    btnRight: function () {
      this.$router.push("/SETTING");
    },
    btnClose : function(){
      this.$router.back();
    }
  },
};
</script>

<style lang="scss" scoped>
// @import "../scss/reset.scss";
@import "../scss/common.scss";

#HeaderView {
  width: 100%;
  height: $header_height;
  position: fixed;
  top: 0;
  align-content: center;

  div {
    @include center-sb;
    
    div {
      padding: 5%;
    }

    .title {
      p {
        @include text-style-1;
        color: var(--text-color-1);
      }
    }
  }
}
</style>
