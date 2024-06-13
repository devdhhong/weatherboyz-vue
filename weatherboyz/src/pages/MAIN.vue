<template>
    <div id="MainView">
        <HeaderView :title="title"/>             
        <CurrentView/>             
        <ContentsView/>             
        <TimelyView/>             
    </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import CurrentView from "../components/CurrentView.vue";
import ContentsView from "../components/ContentsView.vue";
import TimelyView from "../components/TimelyView.vue";

export default {
    data(){
        return{
            title : "MAIN",
        }
    },
    components: {
        HeaderView,
        CurrentView,   
        ContentsView,    
        TimelyView,
    },
}
</script>

<style lang="scss" scoped>
</style>