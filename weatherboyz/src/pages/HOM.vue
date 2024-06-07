<template>
    <div class="wrap">
        <!-- <div class="container"> -->
            <CityInfo v-show="selectedTab!=3"/>             
            <MainView v-show="selectedTab==0"/>             
            <SettingView v-show="selectedTab==3"/>             
            <MenuArea @getSelectedTab="setSelectedTab"/>        
        <!-- </div>    -->
    </div>
</template>

<script>
import MainView from "../components/MainView.vue";
import SettingView from "../components/SettingView.vue";
import CityInfo from "../components/CityInfo.vue";
import MenuArea from "../components/MenuArea.vue";

export default {
    data(){
        return{
            selectedTab : "",
            weatherInfo: {},
        }
    },
    components: {
        MainView,    
        SettingView, 
        MenuArea,
        CityInfo   
    },
    methods: {
        setSelectedTab: function(index){
            this.selectedTab = index;
        } 
    }
}
</script>

<!-- 
    scoped 라는 속성은 현재 style 태그 안에 작성된 코드가
    현재 페이지 내에서만 적용된다는 의미를 가진다.
-->
<style lang="scss" scoped>
// @import "../scss/main.scss";
// @import "../scss/reset.scss";

.wrap{
    // // @include center;
    // width: 100%;
    // height: 100%;
    // // height: 100vh;
    // font-size: 16px;

    // line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 768px; /* 최대 너비를 768px로 설정 */
    // max-width: 768px; /* 최대 너비를 768px로 설정 */
    // border-radius: 10px;
    background: linear-gradient(#16455F, #0e1239);
    // box-shadow: 5px 5px 10px gray;

    .container{
        // @include center-sb;
        // width: 55%;
        // height: 90%;
        // max-width: 1920px;
        // max-height: 1354px;
    }

    // .mainContainer {
    //     width: 100%;
    //     // min-width: 324px;
    //     height: 100%;
    //     border-radius: 50px;
    //     background: linear-gradient(#16455F, #0e1239);
    //     box-shadow: 5px 5px 10px gray;
    // }
}
</style>