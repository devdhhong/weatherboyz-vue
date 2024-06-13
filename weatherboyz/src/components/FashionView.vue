<template>
  <div id="FashionView">
    <img src="https://pokemoncard.co.kr/info/images/renew/1_0-1.png" alt="" />
    <div id="SpecialView">
      <p class="blinking">오늘의 필수템 ☂️</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

  },
  data() { 

  },
  methods : {

  },
} 

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
@import "../scss/reset.scss";

#FashionView {
  width: 100%;
  height: 60vh;
  position: fixed;
  top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 75%;
  }
}

// 이벤트 메세지
#SpecialView {
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: 600;
    color: #130e50;
  }
}
</style>
