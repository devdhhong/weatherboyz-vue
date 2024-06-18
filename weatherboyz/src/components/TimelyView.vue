<template>
  <div id="TimelyView">
    <div class="scroll-area">
      <div
        class="timelyCard"
        v-for="weather in weatherData"
        :key="weather.date">
        <p class="date">{{ weather.date }} 8시</p>
        <img src="../assets/images/01d.png" alt="" />
        <p class="temperature">{{ weather.minTemp }}°</p>
      </div>
    </div>
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
@import "../scss/common.scss";

#TimelyView {
  width: 100%;
  height: $timely_height;
  background-color: var(--background-color-3);
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

      //날짜
      .date {
        @include text-style-5;
        color : var(--text-color-1);
      }

      //사진
      img {
        width: 40%;
      }

      //온도
      .temperature{
        @include text-style-3;
        color : var(--text-color-1);
      }
    }
  }
}
</style>
