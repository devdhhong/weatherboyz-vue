<template>
    <div class="wrap">
        <HeaderView/>             
        <CurrentView/>             
        <MainView/>             
        <TimelyView/>             
    </div>
</template>

<script>
import CurrentView from "../components/CurrentView.vue";
import HeaderView from "../components/HeaderView.vue";
import TimelyView from "../components/TimelyView.vue";
import MainView from "../components/MainView.vue";

export default {
    data(){
        return{
        }
    },
    components: {
        MainView,    
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

.wrap{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 768px; /* 최대 너비를 768px로 설정 */
}
</style>