<template>
  <router-view/>
  <ToastView ref="toast" />
</template>

<script>
import ToastView from '@/components/ToastView.vue';

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

/* eslint-disable no-unused-vars */
function receiveLocation(){
  alert(333)
}

export default {
  data(){
    return{
        viewportHeight : getViewportHeight(),
        isHideModal : localStorage.getItem('isHideModal') == true,
    }
  },
  methods: {
    receiveLocation(latitude, longitude) {
      this.showToast("receiveLocation", "info");
      this.writeLog("receiveLocation", "receiveLocation");
    },
    // Android 인터페이스로 메세지 받기
    showToastFromAndroid() {
        window.Android.showToast("tetetetet"); // Android 인터페이스 메서드 호출
    },
    showToast(message, type) {
      this.$refs.toast.showToast(message, type);
    },
    writeLog(title, message){
      window.Android.writeLog("VUE---------->"+title, message);
    }
  },
  mounted() {
    // Android에서 위치 정보를 받기 위해 아래의 메서드를 사용합니다.
    if (window.Android) {
      this.writeLog("Android", "Android");
      this.showToast(JSON.stringify(window.Android.receiveLocation), "info")
      
      // 위치 정보 수신을 위한 JavaScript 메서드 호출
      // window.Android.receiveLocation = this.receiveLocation;
    }
  },
  components: {
    ToastView
  },
}

</script>

<style lang="scss">
@import "./scss/reset.scss";
@import "./scss/common.scss";

html {
  background-color: var(--background-color-2) ;
}
  
#MainView,
#SettingView,
#OOTDView{
  height: var(--viewport-height); // CSS 변수 사용
  background-color: var(--background-color-2) ;
}
</style>
