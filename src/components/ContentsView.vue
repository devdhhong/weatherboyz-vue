<template>
  <div id="ContentsView">
    <div class="contentsBox">
      <img :src="imgPath" alt="">

      <div class="bubbleArea kevin">
        <div class="msg">날씨좋다</div>
      </div>
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
      padding-bottom: 8%;
      // padding: 0 10%;
      height: 90%;
    }
  }

}

//HERE
.bubbleArea {
  position: absolute; 
  // opacity: 0;
  background-size: contain;
  background-repeat: no-repeat; /* 반복 방지 */
  background-position: center; /* 가운데 정렬 */
  width: 20%; 
  height: 20%;

  &.kevin {
    left: 50%; 
    bottom: 55%; 
    background-image: url("../../public/images/bubble.png");
  }

	.msg {
    @include text-style-4;
    @include center;
    padding-bottom: 5%;
    color: var(--text-color-2);

    width: 100%; 
    height: 100%;
  }
}

</style>
