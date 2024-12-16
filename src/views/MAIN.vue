<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <div id="MainView">
          <HeaderView :title="title"/>
          <CurrentView/>             
          <ContentsView/>             
          <TimelyView/>             
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import HeaderView from "../components/HeaderView.vue";
import CurrentView from "../components/CurrentView.vue";
import ContentsView from "../components/ContentsView.vue";
import TimelyView from "../components/TimelyView.vue";
import ModalView from "../components/ModalView.vue";

import * as CONST from "../utils/CONST";
import axios from "axios";
import * as UTIL from "@/utils/UTIL.js";
// import moment from "moment";

import { onIonViewDidEnter } from "@ionic/vue";
import { onMounted, onBeforeMount } from "vue";

let title = "MAIN";
let isHideModal = UTIL.getLocalStorageItem("isHideModal");

onBeforeMount(() => {
  // 역지오코딩
  getReverseGeocode();

  // 날씨정보 조회
  getWeather();

  // 대기정보 조회
  getAirQuality();
});

// 역지오코딩
const getReverseGeocode = function () {
  axios.get(`${CONST.NOMINATIM_BASE_URL}reverse`, {
    params: {
      latitude: UTIL.getLocalStorageItem('latitude'),
      longitude: UTIL.getLocalStorageItem('longitude'),
      lat: UTIL.getLocalStorageItem('latitude'),
      lon: UTIL.getLocalStorageItem('longitude'),
      format: "json",
      // addressdetails: 1,
    }
  })
  .then((response) => {
    UTIL.setLocalStorageItem("address", response.data); // 성공적으로 받아온 데이터
  })
  .catch((error) => {
    console.error(error); // 오류 처리
  });
};

// 날씨정보 조회
const getWeather = function () {
  axios.get(`${CONST.NOW_FORECAST_URL}`, {
    params: {
      latitude: UTIL.getLocalStorageItem('latitude'),
      longitude: UTIL.getLocalStorageItem('longitude'),
      hourly: "temperature,showers,rain,snowfall,weather_code",
      current: "rain,temperature,apparent_temperature,weather_code",
      daily: "sunrise,sunset,temperature_2m_max,temperature_2m_min",
      forecast_hours: "25",
      timezone: "auto"
    }
  })
    .then((response) => {
      UTIL.setLocalStorageItem("weather", response.data); // 성공적으로 받아온 데이터
    })
    .catch((error) => {
      console.error(error); // 오류 처리
    });
};


// 대기정보 조회
const getAirQuality = function () {
  axios.get(`${CONST.NOW_AIRQUALITY_URL}`, {
    params: {
      latitude: UTIL.getLocalStorageItem('latitude'),
      longitude: UTIL.getLocalStorageItem('longitude'),
      current: "pm10,pm2_5,uv_index"
    }
  })
    .then((response) => {
      UTIL.setLocalStorageItem("airQuality", response.data); // 성공적으로 받아온 데이터
    })
    .catch((error) => {
      console.error(error); // 오류 처리
    });
};

</script>

<style lang="scss" scoped>
</style>