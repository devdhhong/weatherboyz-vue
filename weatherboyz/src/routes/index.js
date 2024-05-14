import { createRouter, createWebHashHistory } from "vue-router";
// import HOM from "~/pages/HOM";
import HOM from "../pages/HOM.vue";

export default createRouter({
    //hash모드 : 특정 페이지에서 새로고침했을 때, '페이지를 찾을 수 없음'과 같은 메세지 알림을 방지
    history: createWebHashHistory(),

    //pages : page를 구분해주는 개념
    routes: [{
        //페이지 경로
        path: "/",
        name: HOM,
        component: HOM,
    }],

});