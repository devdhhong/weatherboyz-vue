<template>
  <ion-app>
    <!-- <ion-router-outlet />  -->
    <router-view/>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import router from "@/router"; // 라우터 가져오기
// import ToastView from '@/components/ToastView.vue';

let viewportHeight = getViewportHeight();
let isHideModal = localStorage.getItem('isHideModal') == "true";

// 디바이스 정보
if (window?.Android) {
  localStorage.setItem("isAppYn", "Y");
  localStorage.setItem("isAosYn", "N");

  window.receiveLocation = function (latitude, longitude) {
    //위치 정보 저장
    if (latitude && longitude) {
      localStorage.setItem("latitude", latitude);
      localStorage.setItem("longitude", longitude);
    }
    else {
      localStorage.setItem("latitude", "37.5276364");
      localStorage.setItem("longitude", "127.0344407");
    }

    writeLog("Lat: " + latitude + "Lon: " + longitude); // Vue 인스턴스의 메서드를 호출
  };
}
//테스트용
else {
  localStorage.setItem("isAppYn", "N");
  localStorage.setItem("isAosYn", "N");

  localStorage.setItem("latitude", "37.5276364");
  localStorage.setItem("longitude", "127.0344407");
}


// 뷰포트 높이를 CSS 변수에 할당
document.documentElement.style.setProperty('--viewport-height', getViewportHeight() + 'px');

let setLanguage = localStorage.getItem('language') || "kor"; //KOR or ENG
let setDisplay = localStorage.getItem('display') || "dark"; //Light or Dark

// 설정 초기화
document.documentElement.classList.remove('dark-mode');
document.documentElement.classList.remove('light-mode');
document.documentElement.classList.remove('kor-mode');
document.documentElement.classList.remove('eng-mode');

document.documentElement.classList.add(setDisplay + '-mode');
document.documentElement.classList.add(setLanguage + '-mode');

// Android 인터페이스로 메세지 받기
function showToastFromAndroid(message) {
  window.Android.showToast(message); // Android 인터페이스 메서드 호출
}

// function showToast(message, type){
//   $refs.toast.showToast(message, type);
// }

function writeLog(message) {
  window.Android.writeLog("FROM JS", message);
}

/**
 * 아이폰 하단의 도구 막대때문에 뷰포트가 정상적으로 보이지 않는 현상 방지 
 */
// 뷰포트 높이 계산
function getViewportHeight() {
  var viewportHeight = window.innerHeight;

  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    let layoutRatio = window.outerHeight / window.innerHeight;
    let taskBarHeight = window.outerHeight - viewportHeight;
    viewportHeight = window.innerHeight * layoutRatio - taskBarHeight;
  }

  return viewportHeight;
}

</script>

<style lang="scss">
@import "./scss/reset.scss";
@import "./scss/common.scss";
@import "./scss/theme.scss";

html {
  background-color: var(--background-color-2);
}

#MainView,
#SettingView,
#OOTDView {
  height: var(--viewport-height); // CSS 변수 사용
}
</style>
