<template>
  <div id="contentsView">
    <div class="contentsBox">
      <!-- <div class="weatherBox"> -->
        <!-- <div class="weatherIcon"> -->
          <!-- <img src="https://img.insight.co.kr/static/2022/02/11/700/img_20220211115820_05ed80hn.webp" alt="MainLogo"> -->
        <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>

import * as CONST from '../utils/CONST.js';
import axios from 'axios';

// 날씨정보 조회
const getWeather = async function (latitude, longitude) {
  try {
    const response = await axios.get(`${CONST.NOW_FORECAST_URL}`, {
      params: {
        latitude: latitude,
        longitude: longitude,
        current_weather: true,
        hourly: "rain" 
      }
    });
    console.log(response.data);
    return response.data.current_weather.temperature;
  } catch (error) {
    console.error('Error reverse geocoding coordinates:', error);
    throw error;
  }
};

let lat = localStorage.getItem('latitude');
let lon = localStorage.getItem('longitude');
let temperature = await getWeather(lat, lon);
export default {
  mounted() {
    this.imageSrc = CONST["IMG_HOT_NEW"];
    this.temperature = Math.round(temperature);
  },
  data() { 
    return {
      CONST : {},
      imageSrc: "",
      temperature: "",
      weatherData: [
        {
          date: "6/4",
          minTemp: "10",
          maxTemp: "30",
          condition: "30",
        },
        {
          date: "6/4",
          minTemp: "10",
          maxTemp: "30",
          condition: "30",
        },
        {
          date: "6/4",
          minTemp: "10",
          maxTemp: "30",
          condition: "30",
        },
        {
          date: "6/4",
          minTemp: "10",
          maxTemp: "30",
          condition: "30",
        },
        {
          date: "6/4",
          minTemp: "10",
          maxTemp: "30",
          condition: "30",
        },
      ],
    }
  },
  methods : {
    btnForecast(){
      this.selectedMenu = "forecast";
    },
    btnAirQuality(){
      this.selectedMenu = "airQuality";
    },
  },
} 

</script>

<style lang="scss" scoped>
@import "../scss/reset.scss";
// @import "../scss/MAIN.scss";

// #MainView {
//   width: 100%;
//   height: 47vh;
//   position: fixed;
//   top: 39vh;

//   .contentsBox {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   img {
//     width: 80%;
//     border-radius: 1%;
//   }
// }
</style>
