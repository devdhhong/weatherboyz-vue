<template>
  <div id="SettingView">
    <li class="settingItem" @click="setNation">
      <div class="title">언어 설정</div>  
      <div class=""><input type="radio" name="language">KOR</div>
      <div class=""><input type="radio" name="language">ENG</div>
    </li>
    <li class="settingItem" @click="setTheme">
      <div class="title">멤버 설정</div>  
      <div class=""><input type="radio" name="member">상연</div>
      <div class=""><input type="radio" name="member">제이콥</div>
      <div class=""><input type="radio" name="member">영훈</div>
      <div class=""><input type="radio" name="member">현재</div>
      <div class=""><input type="radio" name="member">주연</div>
      <div class=""><input type="radio" name="member">케빈</div>
      <div class=""><input type="radio" name="member">뉴</div>
      <div class=""><input type="radio" name="member">큐</div>
      <div class=""><input type="radio" name="member">학년</div>
      <div class=""><input type="radio" name="member">선우</div>
      <div class=""><input type="radio" name="member">에릭</div>
    </li>
    <li class="settingItem" @click="setNation">
      <div class="title">테마 설정</div>  
      <div class=""><input type="radio" name="theme">밝은 모드</div>
      <div class=""><input type="radio" name="theme">어두운 모드</div>
    </li>
    <li class="copyRight">
     <p>© 2024 dhhong. All rights reserved.</p>
    </li>
  </div>
</template>

<script>
 
export default {
  methods: {
    setNation: function(){
      // alert("1");
    },
    setTheme: function(){
      // alert("2");
    },
  }
} 

</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#SettingView {
  width: 100%;
  position: fixed;
  top: 10vh;

  li {
    padding: 5% 7%;

  }

  .settingItem {
    
    .title {
      width: 100%;
      height: 40px;
      background-color: #c0deff79;

      display: flex;
      align-items: center; /* 세로 중앙 정렬 */

      padding-left: 4%;
      font-size: 1.1rem;
      font-weight: 600;
    }

    input {
      font-size: 30px;
      font-weight: 600;
    }
  }

  .copyRight {
    // display: flex;
    // align-items: center; /* 세로 중앙 정렬 */
    position: fixed;
    bottom: 0;
    right: 0;
    
    p {
      // font-size: 0.5rem;
      font-size: 10px;
      font-weight: 300;
      color: green($color: #000000);
    }
  }

  
}



</style>
