<template>
  <div id="SettingView">
    <li class="settingItem" @click="setNation">
      <div class="title">언어 설정</div>  
      <div class=""><input type="radio" name="language">KOR</div>
      <div class=""><input type="radio" name="language">ENG</div>
    </li>
    <li class="settingItem" @click="setTheme">
      <div class="title">멤버 설정</div>  
        <div class="selectBtn" @click="toggleActive">
            <span class="sBtn-text">단체</span>
            <!-- <i class="bx bx-chevron-down"></i> -->
        </div>
        <ul class="optionList" :class="{ active: isActive }">
            <li class="option" @click="toggleActive">
                <i class="bx bxl-github" style="color: #171515;"></i>
                <span class="option-text">Github</span>
            </li>
            <li class="option">
                <i class="bx bxl-instagram-alt" style="color: #E1306C;"></i>
                <span class="option-text">Instagram</span>
            </li>
            <li class="option">
                <i class="bx bxl-linkedin-square" style="color: #0E76A8;"></i>
                <span class="option-text">Linkedin</span>
            </li>
            <li class="option">
                <i class="bx bxl-facebook-circle" style="color: #4267B2;"></i>
                <span class="option-text">Facebook</span>
            </li>
            <li class="option">
                <i class="bx bxl-twitter" style="color: #1DA1F2;"></i>
                <span class="option-text">Twitter</span>
            </li>
        </ul>
    </li>
    <li class="settingItem" @click="setNation">
      <div class="title">테마 설정</div>  
      <div class=""><input type="radio" name="theme">밝은 모드</div>
      <div class=""><input type="radio" name="theme">어두운 모드</div>
    </li>
    <li class="settingItem" @click="setNation">
      <div class="title">기타</div>  
      <div class="">이용방법</div>
    </li>
    <li class="copyRight">
     <p>© 2024 dhhong. All rights reserved.</p>
    </li>
  </div>
</template>

<script>
 
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    setNation: function(){
      // alert("1");
    },
    setTheme: function(){
      // alert("2");
    },
    toggleActive: function(){
      this.isActive = !this.isActive;
    }
  }
} 

</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#SettingView {
  width: 100%;
  position: fixed;
  top: 10vh;

  .settingItem, .copyRight {
    padding: 5% 7%;
  }
  
  .settingItem {
    .title {
      width: 100%;
      height: 40px;
      background-color: #c0deff79;
      display: flex;
      align-items: center;
      padding-left: 4%; /* 세로 중앙 정렬 */
      font-size: 1.1rem;
      font-weight: 600;
    }
    
    select {
      width: 100%;
      // font-size: 1rem;
      color: #60666d;

      option {
      }
    }
  }

  .optionList.active {
    display: block;
  }

  .optionList {
    display: none;
  }

  .copyRight {
    position: fixed;
    bottom: 0;
    right: 0;

    p {
      font-size: 10px;
      font-weight: 300;
      color: green($color: #000000);
    }
  }
}

</style>
