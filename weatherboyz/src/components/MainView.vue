<template>
  <div class="mainContainer">
    <div id="contentsBox">
      <!-- <div class="buttonBox">
        <div class="buttonBackground">
          <button :class="{ selected : selectedMenu == 'forecast' }" class="forecast" @click="btnForecast()">forecast</button>
          <button :class="{ selected : selectedMenu == 'airQuality' }" class="airQuality" @click="btnAirQuality()">airQuality</button>
        </div>
      </div> -->
      <div class="now">현재는?</div>
      <div class="weatherBox">
        <div class="weatherDegree">
          <p>10&deg; / 나쁨</p>
        </div>
        <div class="weatherIcon">
          <img src="../assets/images/01d.png" alt="MainLogo">
        </div>
        <!-- <div class="weatherData"> -->
          <!-- 
            key값을 적어주는 이유?
            Vue.js 공식문서에 따르면 특수한 속성인 key는 주로 Vue의 가상 DOM 알고리즘이 
            노트의 ID를 식별하기 위한 힌트로 사용되기 때문에, 혹여 키값을 부여하지 않으면
            재정렬과 재생성이 필요한 때가 언제인지 제대로 파악하지 못할 수도 있기 때문이다.
           -->
          <!-- <div v-for="Temporary in TemporaryData" :key="Temporary.title" class="detailData">
            <p>{{ Temporary.title }}</p>
            <p>{{ Temporary.value }}</p>
            <p></p>
          </div> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- <div id="todayWeather">
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
      </div>
    </div> -->
  </div>
</template>

<script>

export default {
  mounted() {
  },
  data() { 
    return {
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
// @import "../scss/mainView.scss";

#contentsBox {
      width: 100%;
      height: 80vh;
  
      .now {
        color: white;
        display: flex;
        justify-content: center; /* 수평 중앙 정렬 */
        align-items: center; /* 수직 중앙 정렬 */
      }

      .buttonBox {
        @include center;
        width: 100%;
        height: 20%;
  
        .buttonBackground {
          width: 224px;
          height: 35px;
          background-color: #052137;
          border-radius: 10px;
          display: flex;
  
          button {
            width: 112px;
            height: 35px;
            border: 0;
            border-radius: 7.5px;
            outline: 0;
            cursor: pointer;
            color: grey;
  
            &.selected {
              background-color: #0889ff;
              color: white;
            }
  
            // &.forecast {
            //   background-color: #0889ff;
            //   color: white;
            // }
  
            // &.airquality {
            //   background: transparent;
            //   color: #467599;
            // }
          }
        }
      }
  
      .weatherBox {
        width: 100%;
        height: 80%;
  
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
  
        .weatherIcon {
          @include center;
          width: 100%;
          height: 60%;
  
          img {
            height: 160px;
          }
        }
      }
    }
// .weather-card {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   // padding: 10px;
//   margin: 10px 0;
//   // border-top: 1px solid grey;
//   // border: 1px solid grey;
//   // border-radius: 5px;
//   // background-color: #ffffff;
//   // transition: background-color 0.3s ease;
//   color: white;
//   padding: 13px 35px;
// }

// .scroll-area {
//   max-height: 100%;
//   overflow-y: auto;
//   // padding: 10px;
//   // background-color: #ffffff;
//   // border: 1px solid #ccc;
//   // border-radius: 5px;

//   /* 스크롤바 스타일링 */
//   &::-webkit-scrollbar {
//     width: 0px;
//   }

//   &::-webkit-scrollbar-thumb {
//     // background-color: #00796b;
//     // border-radius: 10px;
//   }

//   &::-webkit-scrollbar-track {
//     // background-color: #f1f1f1;
//   }
// }
</style>
