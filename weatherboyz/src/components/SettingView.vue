<template>
  <div class="setting-container">
    <li class="setting-item" @click="setNation">
      <div class="" >언어 설정</div>  
    </li>
    <li class="setting-item" @click="setTheme">
      <div class="" >테마 설정</div>  
    </li>
  </div>
</template>

<script>
 
export default {
  methods: {
    setNation: function(){
      alert("1");
    },
    setTheme: function(){
      alert("2");
    },
  }
} 

</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.setting-container {
  width: 100%;
  height: 90%;
  padding-top: 10%;

  .setting-item {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.522);
    padding: 5% 10%;
    color: white;

    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.522);
    }

  }
}



</style>
