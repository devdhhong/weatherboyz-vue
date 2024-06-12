<template>
  <div id="ContentsView">
    <div class="contentsBox">
      <img :src="imageSrc" alt="">
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
    // let language = localStorage.getItem('language') || "KOR"; //KOR or ENG
    let theme = localStorage.getItem('theme') || "T0"; //1~11
    // let display = localStorage.getItem('display') || "DARK"; //Light or Dark
    
    this.temperature = Math.round(temperature);
    this.imageSrc = CONST.IMG_URL[theme]["HOT"];
  },
  data() { 
    return {
      imageSrc: "",
      temperature: "",
    }
  },
  methods : {
    setImage(){
      this.imageSrc = CONST[this.setLanguage]["HOT"];
    }
  },
} 

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
@import "../scss/reset.scss";

#ContentsView {
  width: 100%;
  height: 47%;
  position: fixed;
  top: $header_height + $current_height + $special_height;

  .contentsBox {
    @include center;
    height: 100%;
    // overflow: hidden;

    img {
      height: 90%;
    }
  }

}
</style>
