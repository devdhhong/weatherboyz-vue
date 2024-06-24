<template>
  <div id="ContentsView">
    <div class="contentsBox">
      <img :src="imgPath" alt="">
    </div>
  </div>
</template>

<script>
import { WEATHER } from "../assets/data/WEATHER.js";

export default {
  mounted() {
    // let language = localStorage.getItem('language') || "KOR"; //KOR or ENG
    let theme = localStorage.getItem('theme') || "T0"; //1~11
    // let display = localStorage.getItem('display') || "DARK"; //Light or Dark
    
    let weather = JSON.parse(localStorage.getItem('weather'));
    
    this.temperature = Math.round(weather.temperature);
    this.imgPath = WEATHER[theme]["HOT"];
  },
  data() { 
    return {
      imgPath: "",
      temperature: "",
    }
  },
  methods : {
    setImage(){
      // this.imageSrc = CONST[this.setLanguage]["HOT"];
      // this.imageSrc = WEATHER["T2"]["HOT"];
    }
  },
} 

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
@import "../scss/reset.scss";

#ContentsView {
  width: 100%;
  height: 47%;
  position: fixed;
  top: $header_height + $current_height + $message_height;

  .contentsBox {
    @include center;
    height: 100%;
    // overflow: hidden;

    img {
      height: 90%;
    }
  }

}
</style>
