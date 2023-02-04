<script setup>
import { ref } from "vue";
let url = "https://hsuqnian.top/assets/resources/Notice/Notice";
let [exeUrl, zipUrl] = [ref(""), ref("")];
console.log(exeUrl, zipUrl);
fetch("https://hsuqnian.top/assets/resources/Notice/Notice.json")
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
