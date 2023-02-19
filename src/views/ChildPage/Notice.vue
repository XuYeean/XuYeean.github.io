<script setup>
import { ref } from "vue";
import back from "../../components/back.vue";
let AppName = "Notice";
let url = ref("");
let version = ref("");
let WinUrl = ref("");
// let MacUrl = ref("");
let description = ref("");
fetch(`https://hsuqnian.top/assets/resources/${AppName}/${AppName}.json`)
  .then((res) => res.text())
  .then((data) => {
    const json = JSON.parse(data);
    url.value = `https://gitee.com/YeeanXu/XuYeean.github.io/releases/download/${AppName}v${json.version}/${AppName}`;
    WinUrl.value = `${url.value}-${json.version}.exe`;
    // MacUrl.value = `${url.value}-${json.version}.dmg`;
    version.value = json.version;
    description.value = json.description;
  });
</script>
<template>
  <div>
    <back />
    <div class="Notice">
      <h1 style="font-size: 4rem;">{{ AppName }}</h1>
      <p>{{ description }}</p>
      <div>当前版本 : {{ version }}</div>
      <div id="link">
        <a :href="WinUrl">Windows</a>
        <!-- <a :href="MacUrl">Mac</a> -->
      </div>
    </div>
    <div class="describe"></div>
  </div>
</template>
<style scoped>
.Notice {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
}
#link {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
