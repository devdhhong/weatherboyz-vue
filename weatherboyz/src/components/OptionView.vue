<template>
  <div id="OptionView" class="scroll-area">
    <li class="settingItem">
      <div class="title">언어 설정<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li>
          <input disabled id="r1" type="radio" name="language" value="kor" v-model="setLanguage" @change="changeSetting"/>
          <label for="r1">한국어</label>
        </li>
        <li>
          <input disabled id="r2" type="radio" name="language" value="eng" v-model="setLanguage" @change="changeSetting"/>
          <label for="r2">영어</label>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">테마 설정<i class="fa-solid fa-caret-down"></i></div>
      <select name="" class="" v-model="setTheme" @change="changeSetting">
        <option value="T0">⠀단체 📢</option>
        <option value="T1">⠀상연 🐶</option>
        <option value="T2">⠀제이콥 🍐</option>
        <option value="T3">⠀영훈 🍞</option>
        <option value="T4">⠀현재 🎁</option>
        <option value="T5">⠀주연 🐱</option>
        <option value="T6">⠀케빈 🌙</option>
        <option value="T7">⠀뉴 🐧</option>
        <option value="T8">⠀큐 🐿️</option>
        <option value="T9">⠀학년 🍊</option>
        <option value="T10">⠀선우 ☀️</option>
        <option value="T11">⠀에릭 🦄</option>
      </select>
    </li>
    <li class="settingItem">
      <div class="title">화면 설정<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li> 
          <input id="r3" type="radio" name="display" value="light" v-model="setDisplay" @change="changeSetting"/>
          <label for="r3">라이트</label>
        </li>
        <li>
          <input id="r4" type="radio" name="display" value="dark" v-model="setDisplay" @change="changeSetting"/>
          <label for="r4">다크</label>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">이용 방법<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li>
          <div class="">이용방법<i class="fa-solid fa-caret-down"></i></div> 
        </li>
      </ul>
    </li>
    <li class="settingItem copyRight">
      <p>© 2024 dhhong. All rights reserved.</p>
    </li>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setLanguage = localStorage.getItem('language') || "kor"; //KOR or ENG
    this.setTheme = localStorage.getItem('theme') || "T0"; //1~11
    this.setDisplay = localStorage.getItem('display') || "dark"; //Light or Dark
  },
  data() {
    return {
      setLanguage : "",
      setTheme : "",
      setDisplay : "",
      isActive: false,
    };
  },
  methods: {
    changeSetting : function(){
      localStorage.setItem("language", this.setLanguage);
      localStorage.setItem("theme", this.setTheme);
      localStorage.setItem("display", this.setDisplay);

      // 설정 초기화
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.remove('kor-mode');
      document.documentElement.classList.remove('eng-mode');

      document.documentElement.classList.add(this.setDisplay + '-mode');
      document.documentElement.classList.add(this.setLanguage + '-mode');
    }
  },
};
</script>

<style lang="scss" scoped>
// @import "../scss/reset.scss";
@import "../scss/common.scss";

#OptionView {
  width: 100%;
  height: $option_height;
  position: fixed;
  top: $header_height;

  .settingItem {
    padding: 5% 7%;

    .title {
      @include left;
      @include text-style-1;
      color: var(--text-color-2);
      width: 100%;
      height: 40px;
      background-color: var(--background-color-1);
      padding-left: 4%;
      border-radius: 5px;
    }

    //라디오 버튼
    ul {
      margin: 16px;

      li {
        @include left;
        margin: 3% 0;
      }
    }
  }

  //저작권 표기
  .copyRight {
    p {
      @include text-style-99;
      color: var(--text-color-1);
      text-align: right;
      margin-bottom: 5%;
    }
  }

  .fa-caret-down {
    margin-left: 2%;
  }
}

</style>
