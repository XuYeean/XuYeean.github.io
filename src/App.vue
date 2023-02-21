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
window.assetLink = "https://hsuqnian.top/assets/resources/";
window.downloadLink =
  "https://gitee.com/YeeanXu/XuYeean.github.io/releases/download/";
</script>

<template>
  <transition name="back">
    <back v-if="route.path != '/'" />
  </transition>
  <video id="backVideo" loop muted autoplay preload>
    <source src="../public/back.mp4" type="video/mp4" />
  </video>
  <router-view v-slot="{ Component }">
    <transition :name="orSo" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
#backVideo {
  top: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
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
