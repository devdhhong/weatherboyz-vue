<template>
    <div id="MainView">
        <HeaderView :title="title"/>             
        <CurrentView/>             
        <ContentsView/>             
        <TimelyView/>             
    </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import CurrentView from "../components/CurrentView.vue";
import ContentsView from "../components/ContentsView.vue";
import TimelyView from "../components/TimelyView.vue";

import * as CONST from "../utils/CONST.js";
import axios from "axios";

// 현재 위치 조회 (비동기 함수)
const getLocation = async function () {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        localStorage.setItem("latitude", lat);
        localStorage.setItem("longitude", lon);

        resolve({ latitude: lat, longitude: lon });
      },
    );
  });
};

// 위치 조회 후 역지오코딩 수행
const executeGeocoding = async function () {
    // 현재 위치 조회
    const { latitude, longitude } = await getLocation();

    // 역지오코딩 수행
    const address = await reverseGeocode(latitude, longitude);

    // 원하는 주소 정보 출력 (예: cityName)
    return address.borough || address.quarter || address.city || "Unknown";
};

// 역지오코딩 (비동기 함수)
const reverseGeocode = async function (latitude, longitude) {
    const response = await axios.get(`${CONST.NOMINATIM_BASE_URL}reverse`, {
      params: {
        lat: latitude,
        lon: longitude,
        format: "json",
        addressdetails: 1,
      },
    });

    return response.data.address;
};

// 날씨정보 조회
const getWeather = async function () {
    const response = await axios.get(`${CONST.NOW_FORECAST_URL}`, {
      params: {
        latitude: localStorage.getItem('latitude'),
        longitude: localStorage.getItem('longitude'),
        current_weather: true,
        hourly: "rain,apparent_temperature" 
        // hourly: "apparent_temperature" 
      }
    });

    return response.data.current_weather;
};


// 날씨정보 조회
const getAirQuality = async function () {
    const response = await axios.get(`${CONST.NOW_AIRQUALITY_URL}`, {
      params: {
        latitude: localStorage.getItem('latitude'),
        longitude: localStorage.getItem('longitude'),
        current_weather: true,
        hourly: "pm10,pm2_5" 
      }
    });
    console.log(response.data);

    return response.data;
};

let location = await executeGeocoding();
let weather = await getWeather();
let airQuality = await getAirQuality();

export default {
    beforeCreate() {
      localStorage.setItem("location", location);
      localStorage.setItem("weather", JSON.stringify(weather));
      localStorage.setItem("airQuality", JSON.stringify(airQuality));
    },
    data(){
        return{
            title : "MAIN",
        }
    },
    components: {
        HeaderView,
        CurrentView,   
        ContentsView,    
        TimelyView,
    },
}
</script>

<style lang="scss" scoped>
</style>