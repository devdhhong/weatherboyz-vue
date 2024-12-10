import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SETTING from "../views/SETTING.vue";
import OOTD from "../views/OOTD.vue";
import MAIN from "../views/MAIN.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MAIN",
    component: MAIN,
  },
  {
    path: "/SETTING",
    name: "SETTING",
    component: SETTING,
  },
  {
    path: "/OOTD",
    name: "OOTD",
    component: OOTD,
  },
  // 정의 되지 않은 화면에 접속 시도 시 자동으로 홈화면으로 리다이렉션
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
