<template>
  <div id="MainView">
    <div id="contentsBox">
      <!-- <div class="buttonBox">
        <div class="buttonBackground">
          <button :class="{ selected : selectedMenu == 'forecast' }" class="forecast" @click="btnForecast()">forecast</button>
          <button :class="{ selected : selectedMenu == 'airQuality' }" class="airQuality" @click="btnAirQuality()">airQuality</button>
        </div>
      </div> -->
      <!-- <div class="now">현재는?</div> -->
      <div class="weatherBox">
        <!-- <div class="weatherDegree">
          <p>{{ this.temperature }}&deg;</p>
        </div> -->
        <!-- <div class="weatherComment">
          <p>☂️ 🌨️ 🌪️</p>
        </div> -->
        <div class="weatherIcon">
          <!-- <img src="../assets/images/01d.png" alt="MainLogo"> -->
          <!-- <img src="../assets/weather/hot_kevin.png" alt="MainLogo"> -->
          <!-- <img :src="imageSrc" alt="MainLogo"> -->
          <!-- <img src="" alt="MainLogo"> -->
        </div>
      </div>
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
@import "../scss/main.scss";

#MainView {
  background-color: rgba(234, 195, 195, 0.138);
  width: 100%;
  height: 47vh;
  position: fixed;
  top: 39vh;

  .weatherBox {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .weatherDegree {
      @include center;
      width: 100%;
      height: 20%;

      p {
        font-size: 3.5rem;
        font-weight: 500;
        font-family: 'Be Vietnam Pro', sans-serif;
        color: white;
      }
    }
    
    .weatherComment {
      @include center;
      width:  80%;
      height: 8%;
      border-radius: 15px;
      background-color: rgba(255, 255, 255, 0.3);

      p {
        font-size: 1.5rem;
        font-weight: 500;
        font-family: 'Be Vietnam Pro', sans-serif;
        color: white;
      }
    }

    .weatherIcon {
      @include center;
      width: 100%;
      height: 40%;

      img {
        height: 200px;
      }
    }
  }
}
</style>
