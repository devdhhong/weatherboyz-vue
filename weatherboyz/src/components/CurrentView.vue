<template>
  <div id="CurrentView">
    <div class="infoView">
      <div class="currentWeather">
        <div class="temperature">
          <img src="../assets/images/01d.png" alt="" />
          <p>10도</p>
        </div>
        <div class="weatherInfo feelTemp">체감온도 : 30도</div>
        <div class="weatherInfo fineDust">미세먼지: 양호</div>
        <div class="weatherInfo ultraFineDust">초미세먼지: 나쁨</div>
      </div>
    </div>
    <div class="infoView" @click="openMusicSite">
      <div>오늘의 추천곡 🎧</div>
      <div class="songCover">
        <img
          src="https://www.akbobada.com/home/akbobada/archive/akbo/img/20210819092125.JPG"
          alt=""
        />
      </div>
      <div class="songTitle">Thrill Ride</div>
    </div>
  </div>
  <div id="SpecialView">
    <p class="blinking">더러분 우산 꼬옥 챙기세요 ☂️</p>
  </div>
</template>

<script>
export default {
  watch: {},
  data() {
    return {};
  },
  methods: {
    openMusicSite : function(){
      const url = 'https://music.youtube.com/watch?v=LhBbCNaXOpc&si=uxjdwbEAd7kaeTjK';
      window.open(url, '_blank');
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/reset.scss";

// 정보 영역
#CurrentView {
  width: 100%;
  height: 22vh;
  position: fixed;
  top: 10vh;
  display: flex;

  .infoView {
    flex: 1; /* 자식 요소들이 동일한 비율로 공간을 차지하도록 설정 */
    padding: 15px;
    box-sizing: border-box;
    border-radius: 15px;
    margin: 0 5%;
    background-color: #c0deff79;
  }

  // 날씨
  .infoView:nth-child(1) {
    .temperature {
      display: flex;
      align-items: center; /* 가로 중앙 정렬 */
      margin-bottom: 10%;

      img {
        width: 45px;
        height: 45px;
      }

      p {
        margin-left: 3%;
        font-size: 2.2rem;
        font-weight: 1000;
        color: #343666;
      }
    }

    .weatherInfo {
      margin-top: 2.5%;
      font-size: 0.9rem;
      font-weight: 500;
      color: #343666;
    }
  }

  // 오늘의 추천곡
  .infoView:nth-child(2) {
    margin-left: 0%;

    div {
      display: flex;
      justify-content: center; /* 세로 중앙 정렬 */
    }

    div:nth-child(1) {
      font-size: 1.1rem;
      font-weight: 600;
      color: #343666;
    }

    div:nth-child(2) {
      width: 100%;
      padding-top: 5%;
      img {
        width: 60%;
        border-radius: 5%;
      }
    }

    div:nth-child(3) {
      padding: 5%;
    }
  }
}

// 이벤트 메세지
#SpecialView {
  width: 100%;
  height: 7vh;
  position: fixed;
  top: 32vh;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: 600;
    color: #130e50;
  }

  .blinking {
    animation: blink 2s infinite; /* 애니메이션 적용 */
  }

  @keyframes blink {
    0%, 50%, 100% {
      opacity: 1; /* 가시적 상태 */
    }
    25%, 75% {
      opacity: 0; /* 비가시적 상태 */
    }
  }
}
</style>
