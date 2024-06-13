<template>
  <div id="CurrentView">
    <div class="infoView">
        <div class="temperature">
          <img src="../assets/images/01d.png" alt="" />
          <p>10도</p>
        </div>
        <div class="weatherInfo">
          <div class="feelTemp">체감온도 : 30도</div>
          <div class="fineDust">미세먼지: 양호</div>
          <div class="ultraFineDust">초미세먼지: 나쁨</div>
        </div>
    </div>
    <div class="infoView" @click="openMusicSite">
      <div>오늘의 노래 🎹</div>
      <div class="songCover">
        <img src="https://www.akbobada.com/home/akbobada/archive/akbo/img/20210819092125.JPG" alt=""/>
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
    return {
    };
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
@import "../scss/common.scss";
@import "../scss/reset.scss";

// 정보 영역
#CurrentView {
  @include center-sb;
  width: 100%;
  height: $current_height;
  position: fixed;
  top: $header_height;

  .infoView {
    padding: 3%;
    height: 100%;
    flex: 1; /* 자식 요소들이 동일한 비율로 공간을 차지하도록 설정 */
    box-sizing: border-box;
    border-radius: 15px;
    margin: 0 5%;
    background-color: $light_bg_color_1;
  }

  // 날씨
  .infoView:nth-child(1) {
    .temperature {
      @include left;
      width: 100%;
      height: 30%;

      img {
        height: 100%;
      }

      p {
        @include text-style-1;
      }
    }

    .weatherInfo {
      width: 100%;
      height: 70%;
      padding-top: 5%;

      div {
        @include text-style-4;
        padding-left: 3%;
      }
    }
  }

  // 오늘의 추천곡
  .infoView:nth-child(2) {
    margin-left: 0%;

    div {
      @include center;
    }

    //타이틀
    div:nth-child(1) {
      @include text-style-3;
      width: 100%;
      height: 10%;
    }

    //앨범커버
    div:nth-child(2) {
      width: 100%;
      height: 80%;
      padding: 5% 0;

      img {
        height: 100%;
        border-radius: 5%;
      }
    }

    //노래명
    div:nth-child(3) {
      @include text-style-4;
      width: 100%;
      height: 10%;
    }
  }
}

// 이벤트 메세지
#SpecialView {
  @include center;
  width: 100%;
  height: $special_height;
  position: fixed;
  top: $header_height + $current_height;

  p {
    @include text-style-3;
  }
}
</style>
