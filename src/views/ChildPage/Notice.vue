<script setup>
import { ref } from "vue";
const app = defineProps({
  name: String,
});
let url = ref("");
let WinUrl = ref("");
let MacUrl = ref("");
fetch(`https://hsuqnian.top/assets/resources/Notice/Notice.json`)
  .then((res) => res.text())
  .then((data) => {
    const json = JSON.parse(data);
    url.value = `https://gitee.com/YeeanXu/XuYeean.github.io/releases/download/Noticev${json.version}/Notice`;
    WinUrl.value = `${url.value}-${json.version}.exe`;
    MacUrl.value = `${url.value}-${json.version}.dmg`;
  });
</script>
<template>
  <div class="notice">
    <h1>Notice</h1>
    <p>Notice</p>
    <a :href="WinUrl">Windows</a>
    <br />
    <a :href="MacUrl">Mac</a>
  </div>
</template>
<style scoped></style>
