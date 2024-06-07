<template>
  <div class="leftContainer">
    <div id="cityNameBox">
      <div class="cityName">
        <p>Seoul</p>
        <p>May 14, 2024</p>
      </div>
    </div>
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button :class="{ selected : selectedMenu == 'forecast' }" class="forecast" @click="btnForecast()">forecast</button>
          <button :class="{ selected : selectedMenu == 'airQuality' }" class="airQuality" @click="btnAirQuality()">airQuality</button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="weatherDegree">
          <p>10&deg;</p>
        </div>
        <div class="weatherIcon">
          <img src="../assets/images/01d.png" alt="MainLogo">
        </div>
      </div>
    </div>
    <div id="todayWeather">
      <div class="textBox">
        <p>시간대별 날씨 정보</p>
        <p>이번주 날씨 보기</p>
      </div>
      <div class="scroll-area">
        <div class="weather-card" v-for="weather in weatherData" :key="weather.date">
          <p class="date">{{ weather.date }}</p>
          <p class="condition">{{ weather.condition }}</p>
          <p class="temperature">{{ weather.minTemp }}° / {{ weather.maxTemp }}°</p>
        </div>  
        <!-- <div class="timelyWeatherBox">
          <div class="timelyWeather">
            <div class="icon">
              <img src="../assets/images/01n.png" alt="">
            </div>
            <div class="data">
              <p class="time">5PM</p>
              <p class="currentDegree">32&deg;</p>
              <div>
                <img src="../assets/images/50d.png" alt="">
                <p class="fall">15%</p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <nav>
      <i class="fas fa-home"></i>
      <i class="fas fa-search-location"></i>
      <i class="fas fa-chart-line"></i>
      <i class="fas fa-cog"></i>
    </nav>
  </div>
</template>

<script>
 
export default {
  watch: {
    selectedMenu(newValue, oldValue) {
      console.log(`message changed from ${oldValue} to ${newValue}`);
    }
  },
  data() { 
    return {
      // 임시 데이터
      // TemporaryData: [
      //   {
      //     title: "습도",
      //     value: "10%",
      //   },
      //   {
      //     title: "풍속",
      //     value: "10m/s",
      //   },
      //   {
      //     title: "풍향",
      //     value: "WS",
      //   },
        
      // ],
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
      selectedMenu : "forecast",
    }
  },
  methods : {
    btnForecast(){
      this.selectedMenu = "forecast";
    },
    btnAirQuality(){
      this.selectedMenu = "airQuality";
    }
  }
} 

</script>

<style lang="scss" scoped>
@import "../scss/reset.scss";
@import "../scss/main.scss";
@import "../scss/mainView.scss";


.weather-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 10px;
  margin: 10px 0;
  // border-top: 1px solid grey;
  // border: 1px solid grey;
  // border-radius: 5px;
  // background-color: #ffffff;
  // transition: background-color 0.3s ease;
  color: white;
  padding: 13px 35px;
}

.scroll-area {
  max-height: 100%;
  overflow-y: auto;
  // padding: 10px;
  // background-color: #ffffff;
  // border: 1px solid #ccc;
  // border-radius: 5px;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    // background-color: #00796b;
    // border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    // background-color: #f1f1f1;
  }
}
</style>
