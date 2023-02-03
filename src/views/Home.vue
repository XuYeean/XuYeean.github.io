<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
const modules = import.meta.globEager("./ChildPage/*.vue");
const router = useRouter();
let project = [];
Object.keys(modules).map((key) => {
  project.push(key.split("/")[2].split(".")[0]);
});
const to = (index) => {
  router.push({ path: `/${index}` });
};
const projectImg = computed(() => {
  return (param) => `../assets/resources/${param}/${param}.png`;
});
</script>
<template>
  <div id="home">
    <div class="top">
      <div class="picture"></div>
      <h1>徐乔年</h1>
      <span>在校摆烂大学生</span>
    </div>
    <div class="bottom">
      <div
        v-for="index in project"
        @click="to(index)"
        class="block"
        style="
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          padding: 0 40px;
        "
      >
        <img
          :src="projectImg(index)"
          style="width: 100px; border-radius: 20px; margin-bottom: 80px"
        />
        <div style="font-size: 3.6rem; font-weight: 100">{{ index }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 3.2em;
}

#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top {
  transform: translateY(-120px);
}
.bottom {
  width: 88vw;
  height: 40vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  transform: translateY(120px);
}
.block {
  height: 400px;
  background-color: #eaeef1;
  border-radius: 24px;
}
.picture {
  width: 100px;
  height: 100px;
  background-image: url("../picture.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
}
</style>
