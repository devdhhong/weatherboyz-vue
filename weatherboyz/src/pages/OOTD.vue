<template>
    <div>
        <div id="HeaderView">
            <div class="cityInfo">
            <p>OOTBZ</p>
            </div>
            <div class="btnClose" @click="btnClose"><i class="fa-solid fa-xmark fa-xl"></i></div>
        </div>
        <SettingView/>             
    </div>
</template>

<script>
import SettingView from "../components/SettingView.vue";

export default {
    data(){
        return{
        }
    },
    components: {
        SettingView, 
        // HeaderView, 
    },
    methods: {
        btnClose : function(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>

.wrap{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 768px; /* 최대 너비를 768px로 설정 */
}


#HeaderView {
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10%;

  .cityInfo {
    p {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
}
</style>