<script setup>
import { ref } from "vue";
const app = defineProps({
  name: String,
});
let url = ref("");
let exeUrl = ref("");
let zipUrl = ref("");
fetch(`https://hsuqnian.top/assets/resources/Notice/Notice.json`)
  .then((res) => res.text())
  .then((data) => {
    const json = JSON.parse(data);
    url.value = `https://gitee.com/YeeanXu/XuYeean.github.io/releases/download/Noticev${json.version}/Notice`;

    exeUrl.value = `${url.value}-${json.version}.exe`;
    zipUrl.value = `${url.value}-${json.version}-win.zip`;
  });
</script>
<template>
  <div class="notice">
    <h1>Notice</h1>
    <p>Notice</p>
    <a :href="exeUrl">exe</a>
    <br />
    <a :href="zipUrl">zip</a>
  </div>
</template>
<style scoped></style>
