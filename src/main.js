// import Vue, { createApp } from 'vue';
// import App from './App.vue';
// import router from "./routes/index.js";
// import VueGeolocationApi from 'vue-geolocation-api';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index.js';


// import VueGeolocationApi from 'vue-geolocation-api';
// Vue.use(router);
// Vue.use(VueGeolocationApi);
// createApp(App).mount('#app');


// Vue 애플리케이션 인스턴스 생성
const app = createApp(App);

// 플러그인 등록
app.use(router);
// app.use(VueGeolocationApi);

// 애플리케이션 마운트
app.mount('#app');