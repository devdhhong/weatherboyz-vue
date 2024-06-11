<template>
  <div id="SettingView" class="scroll-area">
    <li class="settingItem">
      <div class="title">언어 설정<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li>
          <input id="r1" type="radio" name="language" value="KOR" v-model="setLanguage" @change="changeSetting"/>
          <label for="r1">한국어</label>
        </li>
        <li>
          <input id="r2" type="radio" name="language" value="ENG" v-model="setLanguage" @change="changeSetting"/>
          <label for="r2">영어</label>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">테마 설정<i class="fa-solid fa-caret-down"></i></div>
      <select name="" class="" v-model="setTheme" @change="changeSetting">
        <option value="0">📚 단체</option>
        <option value="1">🎀 상</option>
        <option value="2">🎁 콥</option>
        <option value="3">🎨 빵</option>
        <option value="4">🎉 현</option>
        <option value="5">🎃 주</option>
        <option value="6">🎆 켑</option>
        <option value="7">🕶 뉴</option>
        <option value="8">⚽ 큐</option>
        <option value="9">👟 학</option>
        <option value="10">👑 선</option>
        <option value="11">🎹 릭</option>
      </select>
    </li>
    <li class="settingItem">
      <div class="title">화면 설정<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li> 
          <input id="r3" type="radio" name="display" value="LIGHT" v-model="setDisplay" @change="changeSetting"/>
          <label for="r3">라이트</label>
        </li>
        <li>
          <input id="r4" type="radio" name="display" value="DARK" v-model="setDisplay" @change="changeSetting"/>
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
    this.setLanguage = localStorage.getItem('language') || "KOR"; //KOR or ENG
    this.setTheme = localStorage.getItem('theme') || "8"; //1~11
    this.setDisplay = localStorage.getItem('display') || "DARK"; //Light or Dark
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
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#SettingView {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: 10vh;

  .settingItem {
    padding: 5% 7%;

    .title {
      width: 100%;
      height: 40px;
      background-color: #c0deff79;
      display: flex;
      align-items: center;
      padding-left: 4%; /* 세로 중앙 정렬 */
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 5px;
    }

    //라디오 버튼
    ul {
      margin : 16px;
      
      li {
        margin: 3% 0;
      }
    }

    //셀렉트 박스
    select {
      width: 60%;
      line-height: 2rem;
      font-size: 0.85rem;
      border: 1px solid #C4C4C4;
      margin : 16px;
      border-radius: 5px;
      padding: 0 10px;
      color: grey;
      font-weight: 350;
    }
  }

  //저작권 표기
  .copyRight {
    p {
      text-align: right;
      margin-bottom: 5%;
      font-size: 10px;
      font-weight: 300;
      color: green($color: #000000);
    }
  }
}

//스크롤 관련
.scroll-area {
  overflow: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.fa-caret-down {
  margin-left: 2%;
}

</style>
