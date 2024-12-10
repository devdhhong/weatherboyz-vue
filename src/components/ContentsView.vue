<template>
  <div id="ContentsView">
    <div class="contentsBox">
      <img :src="imgPath" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
// import { WEATHER } from "../assets/data/WEATHER.js";
import { onBeforeMount } from "vue";
import * as UTIL from "../utils/UTIL";
import { onIonViewDidEnter } from "@ionic/vue";

let weather = {};
let imgPath = "";
let temperature = "";

onBeforeMount(() => {
  weather = JSON.parse(localStorage.getItem('weather'));
  imgPath = UTIL.getWeatherMain(weather.current.weather_code);
});

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
@import "../scss/reset.scss";
@import "../scss/theme.scss";

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
