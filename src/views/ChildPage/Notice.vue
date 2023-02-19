<script setup>
import { ref } from "vue";
import back from "../../components/back.vue";
let AppName = "Notice";
let url = ref("");
let version = ref("");
let WinUrl = ref("");
// let MacUrl = ref("");
let describe = ref("");
let description = ref("");
fetch(`${jsonLink}${AppName}/${AppName}.json`)
// fetch(`../../../public/assets/resources/Notice/Notice.json`)
  .then((res) => res.text())
  .then((data) => {
    const json = JSON.parse(data);
    url.value = `${downloadLink}/${AppName}v${json.version}/${AppName}`;
    WinUrl.value = `${url.value}-${json.version}.exe`;
    // MacUrl.value = `${url.value}-${json.version}.dmg`;
    version.value = json.version;
    describe.value = json.describe;
    description.value = json.description;
  });
</script>
<template>
  <div class="Notice">
    <div class="introduce" style="flex: 1">
      <h1 style="font-size: 4rem">{{ AppName }}</h1>
      <p>{{ description }}</p>
      <div>当前版本 : {{ version }}</div>
      <div id="link">
        <a :href="WinUrl">Windows</a>
        <br />
        <a :href="MacUrl">Mac</a>
      </div>
      <h4 style="position: absolute; bottom: 12px">下划了解更多</h4>
    </div>
    <div class="describe">
      <div v-for="(item, index) in describe" :key="index">
        <img
          :src="`../../../public/assets/resources/Notice/picture${
            index + 1
          }.png`"
        />
        <div v-html="item"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Notice {
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  overflow: scroll !important;
  scroll-snap-type: y mandatory;
}
.introduce {
  min-height: 100vh !important;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  position: relative;
}
#link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 200px;
  height: 120px;
  border-radius: 12px;
}

.describe > div {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: contrast(0.5);
  border: 1px solid var(--theme);
  border-radius: 10px;
  scroll-snap-align: end;
  display: flex;
  justify-content: center;
  align-items: center;
}
.describe > div > img {
  transition: all 0.24s ease-in-out;
}
.describe > div > div {
  width: 40%;
  height: 80%;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1342px) {
  .describe > div > img {
    width: 40%;
  }
}
@media screen and (max-width: 650px) {
  .describe > div > img {
    width: 80%;
  }
  .describe > div {
    flex-direction: column;
  }
  .describe > div > div {
    margin-top: 20px;
    width: 80%;
    height: 10%;
  }
}
</style>
