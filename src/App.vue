<template>
  <v-app id="app">
    <v-main>
      <v-img src="./assets/logo.svg" alt="vue logo" class="app-img"></v-img>
      <h1>my personal costs</h1>
      <v-tabs class="nav">
        <v-tab>
          <router-link :to="'/'" class="nav-item">main</router-link>
        </v-tab>
        <v-tab>
          <router-link :to="'/statistics'" class="nav-item">statistics</router-link>
        </v-tab>
        <v-tab>
          <router-link :to="'/about'" class="nav-item">about</router-link>
        </v-tab>
      </v-tabs>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {

    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
  width: 100%;
  max-width: 600px;
}

.app-img {
  width: 200px;
  margin: 0 auto;
}

.nav {
  display: flex;
  justify-content: center;

  &-item {
    text-decoration: none;
  }
}
</style>

