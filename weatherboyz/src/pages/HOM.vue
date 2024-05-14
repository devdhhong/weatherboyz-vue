<template>
    <div class="wrap">
        <div class="container">
            <MainView/>        
        </div>
    </div>
</template>

<script>
import MainView from "../components/MainView.vue";
export default {
      components: {
        MainView
      }
}
</script>

<!-- 
    scoped 라는 속성은 현재 style 태그 안에 작성된 코드가
    현재 페이지 내에서만 적용된다는 의미를 가진다.
-->
<style lang="scss" scoped>
@import "../scss/main.scss";

.wrap{
    @include center;
    width: 100%;
    height: 100vh;
    font-size: 16px;

    .container{
        @include center-sb;
        width: 55%;
        height: 90%;
        max-width: 1920px;
        max-height: 1354px;
    }
}
</style>