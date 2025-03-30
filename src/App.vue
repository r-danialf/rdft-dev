<template>
  <div class="r-titlebar">
    <h1>@rdft.dev</h1>
    <div>
      <span @click="lang = 'en'" :class="{ bold: lang == 'en' }">EN</span> - 
      <span @click="lang = 'id'" :class="{ bold: lang == 'id' }">ID</span> - 
      <span @click="lang = 'jv'" :class="{ bold: lang == 'jv' }">JV</span>
    </div>
  </div>
  <div class="r-navbar">
    <ul>
      <li :class="{ navchosen: route.path === '/' }"> 
        <router-link to="/">{{ text[lang][0] }}</router-link> 
      </li>
      <li :class="{ navchosen: route.path === '/projects' }"> 
        <router-link to="/projects">{{ text[lang][1] }}</router-link> 
      </li>
      <li :class="{ navchosen: route.path === '/experiences' }"> 
        <router-link to="/experiences">{{ text[lang][2] }}</router-link>
      </li>
    </ul>
  </div>
  <div class="main">
    <main>
      <router-view />
    </main>
  </div>
  <div class="footer">
    <footer>
      @rdft.dev - 2025
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, provide } from "vue";

const lang = ref("en");
provide("lang", lang);

const route = useRoute();

const text = {
  en: [
    "Who Am I",
    "Projects",
    "Experiences"
  ],
  id: [
    "Siapa Saya",
    "Proyek",
    "Pengalaman"
  ],
  jv: [
    "ꦱꦺꦴꦥꦺꦴꦏꦸꦭ",
    "ꦥ꧀ꦫꦺꦴꦪꦺꦏ꧀",
    "ꦥꦼꦔꦭꦩꦤ꧀"
  ]
}
</script>

<style lang="scss" scoped>
.r-titlebar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin: 0 1em;
  }

  span {
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: #ee2;
    }
  }
}
</style>