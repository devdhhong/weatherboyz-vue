<template>
    <div id="MainView">
        <HeaderView :title="title"/>             
        <CurrentView/>             
        <ContentsView/>             
        <TimelyView/>             
    </div>
    <ModalView v-show="!isHideModal"/>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import CurrentView from "../components/CurrentView.vue";
import ContentsView from "../components/ContentsView.vue";
import TimelyView from "../components/TimelyView.vue";
import ModalView from "../components/ModalView.vue";

import * as CONST from "../utils/CONST.js";
// import * as UTIL from "../utils/UTIL.js";
import axios from "axios";
// import moment from "moment";

// 역지오코딩
const reverseGeocode = function () {
  axios.get(`${CONST.NOMINATIM_BASE_URL}reverse`, {
    params: {
      latitude: localStorage.getItem('latitude'),
      longitude: localStorage.getItem('longitude'),
      lat: localStorage.getItem('latitude'),
      lon: localStorage.getItem('longitude'),
      format: "json",
      // addressdetails: 1,
    }})
    .then((response) => {
      localStorage.setItem("address", JSON.stringify(response.data)); // 성공적으로 받아온 데이터
    })
    .catch((error) => {
      console.error(error); // 오류 처리
    });
};

// 날씨정보 조회
const getWeather = function () {
  axios.get(`${CONST.NOW_FORECAST_URL}`, {
    params: {
      latitude: localStorage.getItem('latitude'),
      longitude: localStorage.getItem('longitude'),
      hourly: "temperature,showers,rain,snowfall,weather_code",
      current: "rain,temperature,apparent_temperature,weather_code",
      daily: "sunrise,sunset",
      forecast_hours: "25",
      timezone: "auto"
    }})
    .then((response) => {
      localStorage.setItem("weather", JSON.stringify(response.data)); // 성공적으로 받아온 데이터
    })
    .catch((error) => {
      console.error(error); // 오류 처리
    });
};


// 대기정보 조회
const getAirQuality = function () {
  axios.get(`${CONST.NOW_AIRQUALITY_URL}`, {
    params: {
      latitude: localStorage.getItem('latitude'),
      longitude: localStorage.getItem('longitude'),
      current: "pm10,pm2_5,uv_index"
    }
  })
  .then((response) => {
      localStorage.setItem("airQuality", JSON.stringify(response.data)); // 성공적으로 받아온 데이터
    })
    .catch((error) => {
      console.error(error); // 오류 처리
    });
};

export default {
  beforeCreate() {
    reverseGeocode();
    getWeather();
    getAirQuality();
  },
  data() {
    return {
      title: "MAIN",
      isHideModal: localStorage.getItem("isHideModal"),
    }
  },
  methods: {

  },
  components: {
    HeaderView,
    CurrentView,
    ContentsView,
    TimelyView,
    ModalView
  },
}
</script>

<style lang="scss" scoped></style>