<template>
    <div id="cityNameBox">
      <div class="cityName">
        <p>서울특별시</p>
        <p>{{ date }}</p>
        <!-- <p class="isBirthday" v-show="true">🎂</p> -->
      </div>
    </div>
</template>

<script>

function getDate() {
  const date = new Date();

  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString(); // 월은 0부터 시작하므로 1을 더해줌
  let day = date.getDate().toString();

  // 두 자리 형식으로 맞춤
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return `${year}년 ${month}월 ${day}일`;
}

export default {
  data() {
    return {
      date : getDate(),
    }
  }
} 
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#cityNameBox {
  width: 100%;
  height: 20vh;

  .cityName {
    @include c-center;
    width: 100%;
    height: 100%;

    p {
      color: white;
      font-family: "Poppins", sans-serif;
      line-height: 2.5;
      text-align: center;

      &:first-child {
        // width: 241px;
        // height: 33px;
        font-size: 2.5rem;
      }

      &:last-child {
        // width: 160px;
        // height: 19px;
        font-size: 1.3rem;
        font-weight: 100;
        // padding-top: 4%;
      }
    }
  }
}
</style>
