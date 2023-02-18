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
    url.value = `https://gitee.com/YeeanXu/XuYeean.github.io/releases/download/${AppName.value}v${json.version}/${AppName.value}`;
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
      <h1>{{ AppName }}</h1>
      <div>{{ version }}</div>
      <div id="link">
        <a :href="WinUrl">Windows</a>
        <!-- <a :href="MacUrl">Mac</a> -->
      </div>
    </div>
    <div class="describe">
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<style scoped>
.Notice {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#link {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
