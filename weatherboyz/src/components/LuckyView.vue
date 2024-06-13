<template>
  <div id="LuckyView">
    <div
      class="infoView"
      @click="toggleClass1"
      :class="{ flipped: isFlipped1 }"
    >
      <div class="front">🎨 행운의 컬러 🎨</div>
      <div class="back">빨강</div>
    </div>
    <div
      class="infoView"
      @click="toggleClass2"
      :class="{ flipped: isFlipped2 }"
    >
      <div class="front">🍀 행운의 아이템 🍀</div>
      <div class="back">목도리</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

  },
  data() { 
    return {
      isFlipped1: false,
      isFlipped2: false,
    }
  },
  methods : {
    toggleClass1: function () {
      this.isFlipped1 = !this.isFlipped1;
    },
    toggleClass2: function () {
      this.isFlipped2 = !this.isFlipped2;
    },
  },
} 

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
@import "../scss/reset.scss";


//행운 카드
#LuckyView {
  width: 100%;
  height: $lucky_height;
  position: fixed;
  top: $header_height + $fashion_height;
  display: flex;

  .infoView {
    flex: 1;
    box-sizing: border-box;
    border-radius: 15px;
    margin: 0 5%;
    background-color: #c0deff79;
    perspective: 1000px;
    transition: transform 0.6s;
    transform-style: preserve-3d;

    &.flipped {
      transform: rotateY(180deg);
    }

    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
    }

    .front {
    }

    .back {
      transform: rotateY(180deg);
    }
  }

  .infoView:nth-child(2) {
    margin-left: 0;
  }
}

</style>
