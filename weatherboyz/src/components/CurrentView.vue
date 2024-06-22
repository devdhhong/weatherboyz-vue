<template>
  <div id="CurrentView">
    <div class="infoView">
        <div class="temperature">
          <img src="../assets/images/01d.png" alt="" />
          <p>{{ temperature }}도</p>
        </div>
        <div class="weatherInfo">
          <div class="feelTemp">체감온도 : {{ this.apparent_temperature }}도</div>
          <div class="fineDust">미세먼지: {{ this.pm10 }}</div>
          <div class="ultraFineDust">초미세먼지: {{ this.pm2_5 }}</div>
        </div>
    </div>
    <div class="infoView" @click="openMusicSite">
      <div>오늘의 노래 🎹</div>
      <div class="songCover">
        <img :src="musicImgPath" alt=""/>
      </div>
      <div>{{ musicTitle }}</div>
    </div>
  </div>
  <div id="MessageView">
    <p class="blinking">더러분 우산 꼬옥 챙기세요 ☂️</p>
  </div>
</template>

<script>

import { MUSIC } from "../assets/data/MUSIC.js";
import * as UTIL from "../utils/UTIL.js";


//미세먼지 상태 조회 함수
const getAirQualityStatus = function(degree1, degree2){
  let pm10 = ""; //미세먼지
  let pm2_5 = ""; //초미세먼지

  //대한민국 기준
  if(degree1 <= 30){ pm10 = "좋음"; }
  else if(degree1 <= 80){ pm10 = "보통"; }
  else if(degree1 <= 150){ pm10 = "나쁨"; }
  else { pm10 = "매우나쁨"; }
  
  if(degree2 <= 15){ pm2_5 = "좋음"; }
  else if(degree2 <= 35){ pm2_5 = "보통"; }
  else if(degree2 <= 75){ pm2_5 = "나쁨"; }
  else { pm2_5 = "매우나쁨"; }

  return [pm10, pm2_5];
};

export default {
  mounted() {
    //날씨
    let weather = JSON.parse(localStorage.getItem('weather'));
    this.temperature = Math.round(weather.current.temperature);
    this.apparent_temperature = Math.round(weather.current.apparent_temperature);

    //미세먼지
    let airQuality = JSON.parse(localStorage.getItem('airQuality'));
    this.pm10 = getAirQualityStatus(airQuality.current.pm10, airQuality.current.pm2_5)[0]
    this.pm2_5 = getAirQualityStatus(airQuality.current.pm10, airQuality.current.pm2_5)[1]

    //노래
    this.musicImgPath = MUSIC[0].coverImgPath;
    this.musicTitle = MUSIC[0].musicTitle;

    UTIL.getWeatherIcon();
  },
  data() {
    return {
      temperature: "",          //온도
      apparent_temperature: "", //체감온도

      pm10: "",                 //미세먼지
      pm2_5: "",                //초미세먼지

      musicImgPath: "",
      musicTitle: "",
    };
  },
  methods: {
    openMusicSite : function(){
      const url = 'https://music.youtube.com/watch?v=LhBbCNaXOpc&si=uxjdwbEAd7kaeTjK';
      window.open(url, '_blank');
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
@import "../scss/reset.scss";

// 정보 영역
#CurrentView {
  @include center-sb;
  width: 100%;
  height: $current_height;
  position: fixed;
  top: $header_height;

  .infoView {
    padding: 3%;
    height: 100%;
    flex: 1; 
    box-sizing: border-box;
    border-radius: 15px;
    margin: 0 5%;
    background-color: var(--background-color-3);
  }

  // 날씨
  .infoView:nth-child(1) {
    .temperature {
      @include left;
      width: 100%;
      height: 30%;

      img {
        height: 100%;
      }

      p {
        @include text-style-2;
        color : var(--text-color-1);
      }
    }

    .weatherInfo {
      width: 100%;
      height: 70%;
      padding-top: 5%;

      div {
        @include text-style-4;
        color : var(--text-color-1);
        padding-left: 3%;
      }
    }
  }

  // 오늘의 추천곡
  .infoView:nth-child(2) {
    margin-left: 0%;

    div {
      @include center;
    }

    //타이틀
    div:nth-child(1) {
      @include text-style-3;
      color : var(--text-color-1);
      width: 100%;
      height: 10%;
    }

    //앨범커버
    div:nth-child(2) {
      width: 100%;
      height: 80%;
      padding: 5% 0;

      img {
        height: 100%;
        border-radius: 5%;
      }
    }

    //노래명
    div:nth-child(3) {
      @include text-style-4;
      color : var(--text-color-1);
      width: 100%;
      height: 10%;
    }
  }
}

// 이벤트 메세지
#MessageView {
  @include center;
  width: 100%;
  height: $message_height;
  position: fixed;
  top: $header_height + $current_height;

  p {
    @include text-style-3;
    color : var(--text-color-1);
  }
}
</style>
