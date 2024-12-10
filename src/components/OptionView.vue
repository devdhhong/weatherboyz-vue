<template>
  <div id="OptionView" class="scroll-area">
    <li class="settingItem">
      <div class="title">{{ $t('테마') }} {{ $t('설정') }}<i class="fa-solid fa-caret-down"></i></div>
      <select name="" class="" v-model="setTheme" @change="changeSetting">
        <option value="TBZ">{{ $t('랜덤') }} 📢</option>
        <option value="SY">{{ $t('상연') }} 🐶</option>
        <option value="JC">{{ $t('제이콥') }} 🍐</option>
        <option value="YH">{{ $t('영훈') }} 🍞</option>
        <option value="HJ">{{ $t('현재') }} 🎁</option>
        <option value="JY">{{ $t('주연') }} 🐱</option>
        <option value="KV">{{ $t('케빈') }} 🌙</option>
        <option value="NW">{{ $t('뉴') }} 🐧</option>
        <option value="QQ">{{ $t('큐') }} 🐿️</option>
        <option value="HN">{{ $t('학년') }} 🍊</option>
        <option value="SW">{{ $t('선우') }} ☀️</option>
        <option value="ER">{{ $t('에릭') }} 🦄</option>
      </select>
    </li>
    <li class="settingItem">
      <div class="title">{{ $t('화면') }} {{ $t('설정') }}<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li> 
          <input id="r1" type="radio" name="display" value="light" v-model="setDisplay" @change="changeSetting"/>
          <label for="r1">{{ $t('라이트 모드') }}</label>
        </li>
        <li>
          <input id="r2" type="radio" name="display" value="dark" v-model="setDisplay" @change="changeSetting"/>
          <label for="r2">{{ $t('다크 모드') }}</label>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">{{ $t('언어') }} {{ $t('설정') }}<i class="fa-solid fa-caret-down"></i></div>
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
      <div class="title">{{ $t('공유 하기') }}<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li>
          <div class=""><i id="btnShareX" class="fa-solid fa-brands fa-xmark" @click="btnShareX"></i></div>
          <div class=""><i id="btnShare" class="fa-solid fa-arrow-up-from-bracket" @click="btnShare"></i></div>
        </li>
      </ul>
    </li>
    <li class="settingItem">
      <div class="title">{{ $t('문의 사항') }}<i class="fa-solid fa-caret-down"></i></div>
      <ul class="">
        <li>
          <div class="qna">이용하면서 가장 큰 불편함이 뭐야? 어디가서 말안할게..;;<br><span id="btnOpenX" @click="btnOpenX">@tbz_weatherboyz</span> 여기로 연락줘...</div> 
        </li>
      </ul>
    </li>
    <li class="settingItem copyRight">
      <p>© 2024 @tbz_weatherboyz. All rights reserved.</p>
    </li>
  </div>
</template>

<script setup lang="ts">

import { onBeforeMount } from "vue";
import { useI18n } from "vue-i18n"; // i18n 인스턴스 가져오기

let setLanguage = localStorage.getItem('language') || "ko"; //KOR or ENG
let setTheme = localStorage.getItem('theme') || "TBZ";
let setDisplay = localStorage.getItem('display') || "dark"; //Light or Dark
let isActive = false;

const { locale } = useI18n(); // i18n에서 locale을 가져옴

onBeforeMount(() => {
});

//옵션 변경
function changeSetting() {
  localStorage.setItem("language", setLanguage);
  localStorage.setItem("theme", setTheme);
  localStorage.setItem("display", setDisplay);

  // 설정 초기화
  document.documentElement.classList.remove('dark-mode');
  document.documentElement.classList.remove('light-mode');
  document.documentElement.classList.remove('kor-mode');
  document.documentElement.classList.remove('eng-mode');

  document.documentElement.classList.add(setDisplay + '-mode');
  document.documentElement.classList.add(setLanguage + '-mode');

  locale.value = setLanguage; // 언어 변경
}

//공유하기 버튼
function btnShare() {
  let isAppYn = localStorage.getItem("isAppYn");
  let isAosYn = localStorage.getItem("isAosYn");

  //안드로이드
  if (isAppYn == "Y" && isAosYn == "Y") {
    window.Android.btnShare("weatherboyz! @tbz_weatherboyz");
  }
  //웹
  else {
    //Web Share API는 HTTPS 환경에서만 동작
    const btnShare = document.getElementById('btnShare');

    btnShare.addEventListener('click', function () {
      if (navigator.share) {
        navigator.share({
          title: 'weatherboyz!',
          text: 'https://weatherboyz.netlify.app/',
          url: "https://weatherboyz.netlify.app/",
        });
      }
    });
  }
}

function btnShareX() {
  const btnShareX = document.getElementById('btnShareX');

  btnShareX.addEventListener('click', function () {
    const text = encodeURIComponent('weatherboyz!\n');
    const url = encodeURIComponent('https://weatherboyz.netlify.app/' + '\n\n');
    const hashtags = encodeURIComponent('더보이즈,THEBOYZ'); // 해시태그 추가 가능
    const via = 'tbz_weatherboyz'; // 트위터 사용자 이름 (@ 없이)

    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}&via=${via}`;

    // 트위터 공유 URL로 이동
    window.open(twitterShareUrl, '_blank');
  });
}

function btnOpenX() {
  const btnOpenX = document.getElementById('btnOpenX');

  btnOpenX.addEventListener('click', function () {
    // 연결하고 싶은 트위터 계정
    const twitterProfileUrl = "https://twitter.com/tbz_weatherboyz";

    // 새 창에서 트위터 프로필로 이동
    window.open(twitterProfileUrl, '_blank');
  });
}

</script>

<style lang="scss" scoped>
// @import "../scss/reset.scss";
@import "../scss/common.scss";
@import "../scss/theme.scss";

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

        span {
          @include text-style-5;
        }

        div {
          padding-right: 5%;
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
