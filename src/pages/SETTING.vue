<template>
    <div id="SettingView">
        <HeaderView :title="title"/>             
        <OptionView/>             
    </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import OptionView from "../components/OptionView.vue";

export default {
    data(){
        return{
            title : "SETTING",
        }
    },
    components: {
        HeaderView,
        OptionView, 
    },
}
</script>

<style lang="scss" scoped>
</style>