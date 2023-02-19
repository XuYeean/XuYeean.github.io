<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import back from "./components/back.vue";
const route = useRoute();
const orSo = ref("ToOther");
watch(
  () => route.path,
  (val) => {
    orSo.value = val == "/" ? "ToOther" : "ToHome";
  }
);
window.jsonLink = "https://hsuqnian.top/assets/resources/";
window.downloadLink =
  "https://gitee.com/YeeanXu/XuYeean.github.io/releases/download/";
</script>

<template>
  <transition name="back">
    <back v-if="route.path != '/'" />
  </transition>
  <router-view v-slot="{ Component }">
    <transition :name="orSo" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.ToHome-enter,
.ToHome-leave,
.ToHome-enter-active,
.ToOther-enter-active,
.ToHome-leave-active,
.ToOther-leave-active {
  transition: all 0.36s ease;
}

.ToHome-leave-to,
.ToOther-enter-from {
  transform: translateX(-100%);
}
.ToHome-enter-from,
.ToOther-leave-to {
  transform: translateX(100%);
}
.back-enter,
.back-enter-active {
  transition: all 0.36s ease 0.36s;
}
.back-leave,
.back-leave-active {
  transition: all 0.36s ease;
}
.back-leave-to,
.back-enter-from {
  transform: translateX(-200%);
}
</style>
