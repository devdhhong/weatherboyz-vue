<template>
  <div id="HeaderView">
    <div class="btnLeft" @click="btnLeft"><i class="fa-solid fa-shirt"></i></div>
    <div class="cityInfo">
      <p>{{ cityName }}</p>
    </div>
    <div class="btnRight" @click="btnRight"><i class="fa-solid fa-gear fa-lg"></i></div>
  </div>
</template>

<script>
import * as CONST from "../utils/CONST.js";
import axios from "axios";

// 현재 위치 조회 (비동기 함수)
const getLocation = async function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        localStorage.setItem("latitude", lat);
        localStorage.setItem("longitude", lon);
        
        resolve({ latitude: lat, longitude: lon });
      },
      function (err) {
        // alert(JSON.stringify(err.code))
        // 1: 권한 거부 (Permission denied)
        // 2: 위치를 사용할 수 없음 (Position unavailable)
        // 3: 타임아웃 (Timeout)
        console.error("Error getting location:", err);
        reject(err);
      }
    );
  });
};

// 위치 조회 후 역지오코딩 수행
const executeGeocoding = async function () {
  try {
    // 현재 위치 조회
    const { latitude, longitude } = await getLocation();

    // 역지오코딩 수행
    const address = await reverseGeocode(latitude, longitude);

    // 원하는 주소 정보 출력 (예: cityName)
    return address.borough || address.quarter || address.city || "Unknown";
  } catch (error) {
    console.error("Error during geocoding:", error);
    
    const tempLat = 37.2343242;
    const tempLon = 127.453432;

    localStorage.setItem("latitude", tempLat);
    localStorage.setItem("longitude", tempLon);

    const address = await reverseGeocode(tempLat, tempLon);
    return address.borough || address.quarter || address.city || "Unknown";
  }
};

// 역지오코딩 (비동기 함수)
const reverseGeocode = async function (latitude, longitude) {
  try {
    const response = await axios.get(`${CONST.NOMINATIM_BASE_URL}reverse`, {
      params: {
        lat: latitude,
        lon: longitude,
        format: "json",
        addressdetails: 1,
      },
    });

    return response.data.address;
  } 
  catch (error) {
    console.error("Error reverse geocoding coordinates:", error);
    throw error;
  }
};

const result = await executeGeocoding();
export default {
  mounted() {
    this.cityName = result;
    // this.cityName = result.quarter || result.city || 'Unknown';
  },
  data() {
    return {
      cityName: "",
    };
  },
  methods: {
    btnLeft : function(){
      this.$router.push('/OOTD');
    },
    btnRight : function(){
      this.$router.push('/SETTING');
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../scss/reset.scss";
@import "../scss/common.scss";

#HeaderView {
  @include center-sb;
  width: 100%;
  height: $header_height;
  position: fixed;
  top: 0;
  padding: 5%;

  .cityInfo {
    p {
      @include text-style-2;
    }
  }
}
</style>
