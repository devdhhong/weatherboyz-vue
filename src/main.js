
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index.js';
import { createI18n } from 'vue-i18n';

// 언어파일 가져옴
import ko from './locales/ko.json';
import en from './locales/en.json';
import jp from './locales/jp.json';

const messages = {
    en,
    ko,
    jp
};

const i18n = createI18n({
    locale: localStorage.getItem("language") || "ko",
    fallbackLocale: 'en',
    messages,
});

// Vue 애플리케이션 인스턴스 생성
const app = createApp(App);

// 플러그인 등록
app.use(router);

// Vue 애플리케이션에 i18n 사용
app.use(i18n); 

// 애플리케이션 마운트
app.mount('#app');