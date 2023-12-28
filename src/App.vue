<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-btn color="primary" label="Primary" />
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="font-size: 2em">
        <q-icon name="mdi-home" />
        <q-icon name="mdi-image" />
      </div>
    </div>
  </div>
    <router-view/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date = ref('2019/02/01')
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
