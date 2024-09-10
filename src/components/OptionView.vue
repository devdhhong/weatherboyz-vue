<template>
  <div id="OptionView" class="scroll-area">
    <li class="settingItem">
      <div class="title">{{ $t('theme') }}<i class="fa-solid fa-caret-down"></i></div>
      <select name="" class="" v-model="setTheme" @change="changeSetting">
        <option value="TBZ">{{ $t('random') }} 📢</option>
        <option value="SY">{{ $t('sangyeon') }} 🐶</option>
        <option value="JC">{{ $t('jacob') }} 🍐</option>
        <option value="YH">{{ $t('younghoon') }} 🍞</option>
        <option value="HJ">{{ $t('hyunjae') }} 🎁</option>
        <option value="JY">{{ $t('juyeon') }} 🐱</option>
        <option value="KV">{{ $t('kevin') }} 🌙</option>
        <option value="NW">{{ $t('new') }} 🐧</option>
        <option value="QQ">{{ $t('Q') }} 🐿️</option>
        <option value="HN">⠀학년 🍊</option>
        <option value="SW">⠀선우 ☀️</option>
        <option value="ER">⠀에릭 🦄</option>
      </select>
    </li>
    <li class="settingItem">
      <div class="title">{{ $t('display') }} {{ $t('setting') }}<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li> 
          <input id="r1" type="radio" name="display" value="light" v-model="setDisplay" @change="changeSetting"/>
          <label for="r1">{{ $t('light') }}</label>
        </li>
        <li>
          <input id="r2" type="radio" name="display" value="dark" v-model="setDisplay" @change="changeSetting"/>
          <label for="r2">{{ $t('dark') }}</label>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">{{ $t('language') }} {{ $t('setting') }}<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li> 
          <input id="r3" type="radio" name="language" value="ko" v-model="setLanguage" @change="changeSetting"/>
          <label for="r3">한국어</label>
        </li>
        <li>
          <input id="r4" type="radio" name="language" value="en" v-model="setLanguage" @change="changeSetting"/>
          <label for="r4">ENGLISH</label>
        </li>
        <li>
          <input id="r5" type="radio" name="language" value="jp" v-model="setLanguage" @change="changeSetting"/>
          <label for="r5">日本語</label>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">{{ $t('share') }}<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li>
          <div class=""><i id="btnShareX" class="fa-solid fa-brands fa-twitter" @click="btnShareX"></i></div>
          <div class=""><i id="btnShare" class="fa-solid fa-share" @click="btnShare"></i></div>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">{{ $t('qna') }}<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li>
          <div class="qna">이용하면서 가장 큰 불편함이 뭐야? 어디가서 말안할게..;;<br><span id="btnOpenX" @click="btnOpenX">@tbz_weatherboyz</span> 여기로 연락줘...</div> 
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
    this.setLanguage = localStorage.getItem('language') || "ko"; //KOR or ENG
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

      this.$i18n.locale = this.setLanguage; // 언어 변경
    },
    //공유하기 버튼
    btnShare: function () {
      //Web Share API는 HTTPS 환경에서만 동작
      const btnShare = document.getElementById('btnShare');

      btnShare.addEventListener('click', function(){
        if (navigator.share) {
          navigator.share({
            title: 'weatherboyz!',
            text: 'https://weatherboyz.netlify.app/',
            url: "https://weatherboyz.netlify.app/",
          });
        } else {
          console.warn('Web Share API is not supported in this browser');
          alert('Web Share API is not supported in this browser.');
        }
      });
    },
    btnShareX: function () {
      const btnShareX = document.getElementById('btnShareX');

      btnShareX.addEventListener('click', function () {
        const text = encodeURIComponent('weatherboyz!\n');
        const url = encodeURIComponent('https://weatherboyz.netlify.app/'+'\n\n');
        const hashtags = encodeURIComponent('더보이즈,THEBOYZ'); // 해시태그 추가 가능
        const via = 'tbz_weatherboyz'; // 트위터 사용자 이름 (@ 없이)

        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}&via=${via}`;

        // 트위터 공유 URL로 이동
        window.open(twitterShareUrl, '_blank');
      });
    },
    btnOpenX: function () {
      const btnOpenX = document.getElementById('btnOpenX');

      btnOpenX.addEventListener('click', function() {
        // 연결하고 싶은 트위터 계정
        const twitterProfileUrl = "https://twitter.com/tbz_weatherboyz";
        
        // 새 창에서 트위터 프로필로 이동
        window.open(twitterProfileUrl, '_blank');
      });
    },
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

        span{
          @include text-style-5;
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
