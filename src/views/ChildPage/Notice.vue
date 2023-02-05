<script setup>
import { ref } from "vue";
const app = defineProps({
  name: String,
});
let url = "https://hsuqnian.top/assets/resources/Notice/Notice";
let { exeUrl, zipUrl } = { exeUrl: ref(""), zipUrl: ref("") };
console.log(exeUrl, zipUrl);
fetch(`${url}.json`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})
  .then((res) => res.text())
  .then((data) => {
    const json = JSON.parse(data);
    console.log(json);
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
