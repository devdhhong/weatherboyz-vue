<template>
    <div id="cityNameBox">
      <div class="cityName">
        <p>{{ cityName }}</p>
        <p>{{ date }}</p>
        <!-- <p class="isBirthday" v-show="true">🎂</p> -->
      </div>
    </div>
</template>

<script>

import axios from 'axios';
const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/';

// 날짜 형식
const getDate = function () {
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

// 현재 위치 조회 (비동기 함수)
const getLocation = async function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        resolve({ latitude: lat, longitude: lon });
      },
      err => {
        console.error('Error getting location:', err);
        reject(err);
      }
    );
  });
};

// 역지오코딩 (비동기 함수)
const reverseGeocode = async function (latitude, longitude) {
  try {
    const response = await axios.get(`${NOMINATIM_BASE_URL}reverse`, {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json',
        addressdetails: 1,
      },
    });

    return response.data.address;
  } catch (error) {
    console.error('Error reverse geocoding coordinates:', error);
    throw error;
  }
};

// 위치 조회 후 역지오코딩 수행
const executeGeocoding = async function () {
  try {
    // 현재 위치 조회
    const { latitude, longitude } = await getLocation();

    // 역지오코딩 수행
    const address = await reverseGeocode(latitude, longitude);

    // 원하는 주소 정보 출력 (예: cityName)
    console.log(address);
    return address;
  }
  catch (error) {
    console.error('Error during geocoding:', error);
  }
};

const result = await executeGeocoding();
export default {
  mounted() {
    this.cityName = result.quarter || result.city || 'Unknown';
  },
  data() {
    return {
      date: getDate(),
      cityName: "",
    }
  },
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
