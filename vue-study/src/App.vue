<template>
  <div id="app">
    <HeaderComponent />
    <main class="container">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
export default {
  components: {
    FooterComponent,
    HeaderComponent,
  },
};
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

html, body{
  height: 100%;
}

:root {
  --black: #25262d;
  --white: #fff;
  --red: #ef4f50;
}

#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-areas: "header header header" ". main ." "footer footer footer";
  grid-template-rows: 100px 1fr 100px;
  grid-template-columns: 1fr minmax(300px, 1170px) 1fr;
  height: 100%;
  width: 100%;
  min-height: 100%;
}

.container {
  grid-area: main;
  padding: 50px 20px;
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
