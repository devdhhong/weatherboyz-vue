<template>
  <div id="SettingView">
    <li class="settingItem" @click="setNation">
      <div class="title">언어 설정</div>
      <ul class="optionList">
        <li>
          <input id="r1" type="radio" name="language" value="KOR" checked/>
          <label for="r1">한국어</label>
        </li>
        <li>
          <input id="r1" type="radio" name="language" value="ENG" />
          <label for="r1">영어</label>
        </li>
      </ul>
      <!-- <div class=""><input type="radio" name="language" />KOR</div> -->
      <!-- <div class=""><input type="radio" name="language" />ENG</div> -->
    </li>
    <li class="settingItem" @click="setTheme">
      <div class="title">테마 설정</div>
      <button class="btn-select" @click="toggleActive">단체</button>
       <ul class="list-member selectBox" :class="{ active: isActive }">
          <li><button type="button" @click="toggleActive">Python</button></li>
          <li><button type="button" @click="toggleActive">Java</button></li>
          <li><button type="button">JavaScript</button></li>
          <li><button type="button">C#</button></li>
          <li><button type="button">C/C++</button></li>
          <li><button type="button">C/C++</button></li>
          <li><button type="button">C/C++</button></li>
          <li><button type="button">C/C++</button></li>
          <li><button type="button">C/C++</button></li>
          <li><button type="button">C/C++</button></li>
      </ul>
    </li>
    <li class="settingItem" @click="setNation">
      <div class="title">화면 설정</div>
      <ul class="optionList">
        <li>
          <input id="r1" type="radio" name="display" value="LIGHT" checked/>
          <label for="r1">라이트</label>
        </li>
        <li>
          <input id="r1" type="radio" name="display" value="DARK" />
          <label for="r1">다크</label>
        </li>
      </ul>
    </li>
    <li class="settingItem" @click="setNation">
      <div class="title">기타</div>
      <ul class="optionList">
        <li>
          <div class="">이용방법</div>
        </li>
      </ul>
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
    setNation: function () {
      // alert("1");
    },
    setTheme: function () {
      // alert("2");
    },
    toggleActive: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#SettingView {
  width: 100%;
  position: fixed;
  top: 10vh;

  .settingItem,
  .copyRight {
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
      border-radius: 5px;
    }

    ul {

    }

    li {
      margin : 16px;
    }

  }

  .selectBox.active {
    width: 80%;
    max-height: 40%; /* 최대 높이를 설정 */
    overflow-y: auto;  /* 수직 스크롤이 생기도록 설정 */
    // position: fixed;
    // // left: 5%;
    // // top: 30vh;
    background: #ffffff;
    display: block;
  }

  .selectBox {
    display: none;
  }

  //저작권 표기
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
