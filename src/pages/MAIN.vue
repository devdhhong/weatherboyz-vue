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
import * as UTIL from "../utils/UTIL.js";
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
        hourly: "temperature,showers,rain,snowfall,weather_code",
        current: "rain,temperature,apparent_temperature,weather_code",
        daily: "sunrise,sunset",
        forecast_hours : "25",
        timezone : "auto"
      }
    });

    return response.data;
};


// 대기정보 조회
const getAirQuality = async function () {
    const response = await axios.get(`${CONST.NOW_AIRQUALITY_URL}`, {
      params: {
        latitude: localStorage.getItem('latitude'),
        longitude: localStorage.getItem('longitude'),
        current: "pm10,pm2_5,uv_index" 
      }
    });

    return response.data;
};

let calledTime = localStorage.getItem("calledTime");
let location = undefined;
let weather = undefined;
let airQuality = undefined;

//한번 호출 후 5분 이내에는 재호출 하지 않음 (과도한 API 호출방지를 위함)
if(calledTime && UTIL.getFormmatedDate() - calledTime < 2){
    //재호출 X
    location = localStorage.getItem("location");
    weather = localStorage.getItem("weather");
    airQuality = localStorage.getItem("airQuality");
}
else{
    //재호출 O
    localStorage.setItem("calledTime", UTIL.getFormmatedDate());
    location = await executeGeocoding();
    weather = await getWeather();
    airQuality = await getAirQuality();
    
    localStorage.setItem("location", location);
    localStorage.setItem("weather", JSON.stringify(weather));
    localStorage.setItem("airQuality", JSON.stringify(airQuality));
    console.log('재호출');
}

export default {
    beforeCreate() {

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