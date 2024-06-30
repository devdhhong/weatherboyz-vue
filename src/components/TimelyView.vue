<template>
  <div id="TimelyView">
    <div class="scroll-area">
      <div class="timelyCard" v-for="(weather, index) in weatherTime" :key="index">
        <p class="date">{{ this.getFormmatedDate(new Date(weather), "mm/dd hh시") }}</p>
        <img :src="this.getWeatherIcon(this.weatherCode[index], new Date(weather))" alt="" />
        <p class="temperature">{{ Math.round(this.weatherTemp[index]) }}°</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as UTIL from "../utils/UTIL.js";

export default {
  mounted(){
    let hourly = JSON.parse(localStorage.getItem('weather')).hourly;
    this.weatherTime = hourly.time;
    this.weatherCode = hourly.weather_code;
    this.weatherTemp = hourly.temperature;
  },
  data() {
    return {
      weatherTime: [],
      weatherCode: [],
      weatherTemp: [],
    };
  },
  methods: {
    getFormmatedDate : function(getDate, format){
      return UTIL.getFormmatedDate(getDate, format);
    },
    getWeatherIcon : function(code, time){
      return UTIL.getWeatherIcon(code, time);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/reset.scss";
@import "../scss/common.scss";

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
      flex: 0 0 25%; /* 기본으로 보이는 아이템 수를 설정 */

      //날짜
      .date {
        @include text-style-5;
        color : var(--text-color-1);
      }

      //사진
      img {
        width: 40%;
      }

      //온도
      .temperature{
        @include text-style-3;
        color : var(--text-color-1);
      }
    }
  }
}
</style>
