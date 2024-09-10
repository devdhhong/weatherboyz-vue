<template>
  <div id="OptionView" class="scroll-area">
    <li class="settingItem">
      <div class="title">테마 설정<i class="fa-solid fa-caret-down"></i></div>
      <select name="" class="" v-model="setTheme" @change="changeSetting">
        <option value="TBZ">⠀랜덤 📢</option>
        <option value="SY">⠀상연 🐶</option>
        <option value="JC">⠀제이콥 🍐</option>
        <option value="YH">⠀영훈 🍞</option>
        <option value="HJ">⠀현재 🎁</option>
        <option value="JY">⠀주연 🐱</option>
        <option value="KV">⠀케빈 🌙</option>
        <option value="NW">⠀뉴 🐧</option>
        <option value="QQ">⠀큐 🐿️</option>
        <option value="HN">⠀학년 🍊</option>
        <option value="SW">⠀선우 ☀️</option>
        <option value="ER">⠀에릭 🦄</option>
      </select>
    </li>
    <li class="settingItem">
      <div class="title">화면 설정<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li> 
          <input id="r1" type="radio" name="display" value="light" v-model="setDisplay" @change="changeSetting"/>
          <label for="r1">라이트</label>
        </li>
        <li>
          <input id="r2" type="radio" name="display" value="dark" v-model="setDisplay" @change="changeSetting"/>
          <label for="r2">다크</label>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">언어 설정<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li> 
          <input id="r3" type="radio" name="language" value="KOR" v-model="setLanguage" @change="changeSetting"/>
          <label for="r3">한국어</label>
        </li>
        <li>
          <input id="r4" type="radio" name="language" value="ENG" v-model="setLanguage" @change="changeSetting"/>
          <label for="r4">ENGLISH</label>
        </li>
        <li>
          <input id="r5" type="radio" name="language" value="JPN" v-model="setLanguage" @change="changeSetting"/>
          <label for="r5">日本語</label>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">공유 하기<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <div><i id="btnShare" class="fa-solid fa-share" @click="btnShare"></i></div>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">문의 사항<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li>
          <div class="qna">이용하면서 가장 큰 불편함이 뭐야? 어디가서 말안할게..;;<br>
            @weather_boyz 여기로 연락줘...</div> 
          <!-- <div class="">이용방법<i class="fa-solid"></i></div>  -->
        </li>
      </ul>
    </li>
    <li class="settingItem copyRight">
      <p>© 2024 @weather_boyz. All rights reserved.</p>
    </li>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setLanguage = localStorage.getItem('language') || "KOR"; //KOR or ENG
    this.setTheme = localStorage.getItem('theme') || "TBZ";
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
    },
    btnShare: function () {
      const shareButton = document.getElementById('btnShare');

      shareButton.addEventListener('click', function(){
        if (navigator.share) {
          navigator.share({
              title: 'Web Share API Demo',
              text: 'Check out this cool page!',
              url: "https://weatherboyz.netlify.app/",
            });
        } else {
          console.warn('Web Share API is not supported in this browser');
          alert('Web Share API is not supported in this browser.');
        }
      });

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

        .qna {
          @include text-style-5;
          color: var(--text-color-1);


        }
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
