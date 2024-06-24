<template>
  <div id="OOTDView">
    <HeaderView :title="title" />
    <FashionView></FashionView>
    <LuckyView></LuckyView>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import LuckyView from "@/components/LuckyView.vue";
import FashionView from "@/components/FashionView.vue";

export default {
  data() {
    return {
      title: "OOTBZ",
    };
  },
  components: {
    HeaderView,
    LuckyView,
    FashionView
  },
  methods: {
    btnClose: function () {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped></style>
