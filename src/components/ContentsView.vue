<template>
  <div id="ContentsView">
    <div class="contentsBox">
      <img :src="imgPath" alt="">
    </div>
  </div>
</template>

<script>
// import { WEATHER } from "../assets/data/WEATHER.js";
import * as UTIL from "../utils/UTIL.js";

export default {
  mounted() {
    let weather = JSON.parse(localStorage.getItem('weather'));
    // let language = localStorage.getItem('language') || "KOR"; //KOR or ENG
    // let theme = localStorage.getItem('theme') || "TBZ"; 
    // let display = localStorage.getItem('display') || "DARK"; //Light or Dark
    // this.temperature = Math.round(weather.temperature);
    this.imgPath = UTIL.getWeatherMain(weather.current.weather_code);
  },
  data() { 
    return {
      imgPath: "",
      temperature: "",
    }
  },
  methods : {
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
