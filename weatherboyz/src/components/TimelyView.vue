<template>
  <div id="TimelyView">
    <!-- <div id="todayWeather"> -->
    <!-- <div class="textBox">
        <p>시간대별 날씨 정보</p>
        <p>이번주 날씨 보기</p>
      </div> -->
    <div class="scroll-area">
      <div
        class="timelyCard"
        v-for="weather in weatherData"
        :key="weather.date">
        <p class="date">{{ weather.date }} 8시</p>
        <img src="../assets/images/01d.png" alt="" />
        <!-- <p class="condition">{{ weather.condition }}</p> -->
        <!-- <p class="temperature">{{ weather.minTemp }}° / {{ weather.maxTemp }}°</p> -->
        <p class="temperature">{{ weather.minTemp }}°</p>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  watch: {
    selectedMenu(newValue, oldValue) {
      console.log(`message changed from ${oldValue} to ${newValue}`);
    },
  },
  data() {
    return {
      weatherData: [
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
        { date: "6/4", minTemp: "10", maxTemp: "30", condition: "30" },
      ],
      selectedMenu: "forecast",
    };
  },
  methods: {
    btnForecast() {
      this.selectedMenu = "forecast";
    },
    btnAirQuality() {
      this.selectedMenu = "airQuality";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/reset.scss";

#TimelyView {
  width: 100%;
  height: 14vh;

  background-color: #c0deff79;
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

      .date {
        font-size: 0.9rem;
        font-weight: 600;
        color: #130e50;
      }

      img {
        width: 40%;
      }

      .temperature{
        font-size: 1.0rem;
        font-weight: 600;
        color: #130e50;
      }
    }
  }
}
</style>
