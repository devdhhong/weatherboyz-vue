<template>
    <div id="MainView">
        <HeaderView/>             
        <CurrentView/>             
        <ContentsView/>             
        <TimelyView/>             
    </div>
</template>

<script>
import CurrentView from "../components/CurrentView.vue";
import HeaderView from "../components/HeaderView.vue";
import TimelyView from "../components/TimelyView.vue";
import ContentsView from "../components/ContentsView.vue";


// // 뷰포트 높이 계산
// function getViewportHeight() {
//   var viewportHeight = window.innerHeight;

//   if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
//     let layoutRatio = window.outerHeight / window.innerHeight;
//     let taskBarHeight = window.outerHeight - viewportHeight;
//     viewportHeight = window.innerHeight * layoutRatio - taskBarHeight;
//   }

//   return viewportHeight;
// }

// // 뷰포트 높이를 CSS 변수에 할당
// document.documentElement.style.setProperty('--viewport-height', getViewportHeight() + 'px');



export default {
    data(){
        return{
        // viewportHeight : getViewportHeight(),
//   
        }
    },
    components: {
        ContentsView,    
        TimelyView,
        HeaderView,
        CurrentView   
    },
    methods: {

    }
}
</script>

<!-- 
    scoped 라는 속성은 현재 style 태그 안에 작성된 코드가
    현재 페이지 내에서만 적용된다는 의미를 가진다.
-->
<style lang="scss" scoped>
@import "../scss/reset.scss";
@import "../scss/common.scss";

// // #MainView{
// //     display: flex;
// //     flex-direction: column;
// //     min-height: 100vh;
// //     margin: 0 auto;
// //     max-width: 768px; /* 최대 너비를 768px로 설정 */
// // }

// #MainView {
//   height: var(--viewport-height); // CSS 변수 사용
// }
</style>