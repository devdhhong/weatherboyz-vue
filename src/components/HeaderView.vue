<template>
  <div id="HeaderView">
    <!-- MAIN -->
    <div v-if="props.title == 'MAIN'">
      <div class="btnLeft" @click="btnEvent">
        <i class="fa-solid fa-shirt"></i>
      </div>
      <!-- <div class="btnLeft" @click="btnRefresh">
        <i class="fa-solid fa-arrows-rotate"></i>
      </div> -->
      <div class="title">
        <p>{{ address.borough }}</p>
      </div>
      <div class="btnRight" @click="btnSetting">
        <i class="fa-solid fa-gear fa-lg"></i>
      </div>
    </div>
    <!-- MAIN -->

    <!-- SETTING -->
    <div v-else-if="props.title == 'SETTING'">
      <div class="btnClose" @click="btnClose" style="visibility: hidden;">
        <i class="fa-solid fa-xmark fa-xl"></i>
      </div>
      <div class="title">
        <p>{{ props.title }}</p>
      </div>
      <div class="btnClose" @click="btnClose">
        <i class="fa-solid fa-xmark fa-xl"></i>
      </div>
    </div>
    <!-- SETTING -->

    <!-- OOTBZ -->
    <div v-else-if="props.title == 'OOTBZ'">
      <div class="btnClose" @click="btnClose" style="visibility: hidden;">
        <i class="fa-solid fa-xmark fa-xl"></i>
      </div>
      <div class="title">
        <p>{{ props.title }}</p>
      </div>
      <div class="btnClose" @click="btnClose">
        <!-- <ion-back-button defaultHref="/"><i class="fa-solid fa-xmark fa-xl"></i></ion-back-button> -->
        <i class="fa-solid fa-xmark fa-xl"></i>
      </div>
    </div>
    <!-- OOTBZ -->
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeMount } from "vue";
import router from "@/router";
import { useIonRouter } from '@ionic/vue';

const ionRouter = useIonRouter();

let cityName: any;
let props = defineProps(["title"]);
let address = {};

onBeforeMount(() => {
  address = JSON.parse(localStorage.getItem('address')).address;
});

function btnRefresh() {
  window.Android.writeLog("FROM JS", "CLICK btnRefresh");
}

function btnEvent() {
  router.push("/OOTD");
}

function btnSetting() {
  router.push("/SETTING")
}

function btnClose() {
  router.back();
}

</script>

<style lang="scss" scoped>
// @import "../scss/reset.scss";
@import "../scss/common.scss";
@import "../scss/theme.scss";

#HeaderView {
  width: 100%;
  height: $header_height;
  position: fixed;
  top: 0;
  align-content: center;

  div {
    @include center-sb;

    div {
      padding: 5%;
    }

    .title {
      p {
        @include text-style-1;
        color: var(--text-color-1);
      }
    }
  }
}
</style>
