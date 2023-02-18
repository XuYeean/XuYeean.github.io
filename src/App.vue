<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const orSo = ref("ToOther");
watch(
  () => route.path,
  (val) => {
    orSo.value = val == "/" ? "ToOther" : "ToHome";
  }
);
</script>

<template>
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
</style>
