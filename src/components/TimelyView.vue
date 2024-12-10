<template>
  <div id="TimelyView">
    <div class="scroll-area">
      <div class="timelyCard" v-for="(weather, index) in weatherTime" :key="index">
        <p class="date">{{ getCurrentTime(weather) }}</p>
        <img :src="getWeatherIcon(weatherCode[index], new Date(weather))" alt="" />
        <p class="temperature">{{ Math.round(weatherTemp[index]) }}°</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as UTIL from "../utils/UTIL";
import moment from "moment";
import { onBeforeMount } from "vue";

let hourly = {};
let weatherTime = [];
let weatherCode = [];
let weatherTemp = [];
let currentTime = "";

onBeforeMount(() => {
  hourly = JSON.parse(localStorage.getItem('weather')).hourly;
  weatherTime = hourly.time;
  weatherCode = hourly.weather_code;
  weatherTemp = hourly.temperature;
});

function getCurrentTime(weather: string){
  return moment(weather).format("MM/DD HH시");
}

function getWeatherIcon(code: string, time: Date){
  return UTIL.getWeatherIcon(code, time);
}

</script>

<style lang="scss" scoped>
@import "../scss/reset.scss";
@import "../scss/common.scss";
@import "../scss/theme.scss";

#TimelyView {
  width: 100%;
  height: $timely_height;
  background-color: var(--background-color-3);
  position: fixed;
  bottom: 0;
  border-radius: 20px 20px 0 0;

  .scroll-area {
    width: 100%;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding-top: 3%;

    .timelyCard {
      text-align: center;
      flex: 0 0 25%;
      /* 기본으로 보이는 아이템 수를 설정 */

      //날짜
      .date {
        @include text-style-5;
        color: var(--text-color-1);
      }

      //사진
      img {
        width: 40%;
      }

      //온도
      .temperature {
        @include text-style-3;
        color: var(--text-color-1);
      }
    }
  }
}
</style>
