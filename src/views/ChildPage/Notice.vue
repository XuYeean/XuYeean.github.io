<script setup>
import { ref } from "vue";
const app = defineProps({
  name: String,
});
let url =
  "https://gitee.com/YeeanXu/XuYeean.github.io/releases/download/Notice";
let exeUrl = ref("");
let zipUrl = ref("");
fetch(`${url}.json`)
  .then((res) => res.text())
  .then((data) => {
    const json = JSON.parse(data);
    exeUrl.value = `${url}-${json.version}.exe`;
    zipUrl.value = `${url}-${json.version}-win.zip`;
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
