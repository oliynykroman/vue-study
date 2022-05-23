<template>
  <div id="app">
    <HeaderComponent />
    <main class="container">
      <SearchComponent />
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
import SearchComponent from "./components/Search.vue";
export default {
  components: {
    FooterComponent,
    HeaderComponent,
    SearchComponent
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
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

// tupical title
.title {
  color: var(--black);
  margin: 1em 0 0 0;
  font-size: 1.2em;
  font-weight: 300;
  text-align: left;
  position: relative;
  padding: 0 0 0 10px;

  &:after {
    content: "";
    position: absolute;
    border-right: 3px solid var(--red);
    height: 100%;
    left: 0;
    top: 0;
  }
}

// typical input
.form-control {
  margin-top: 20px;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px 0 0 5px;
  line-height: 40px;
  border: 1px solid var(--black);
  font-size: 20px;
  width: 100%;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: var(--red);
  }
}

.input--wrap {
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  .searchbutton {
    height: 40px;
    background-color: var(--black);
    border: none;
    width: 150px;
    color: var(--white);
    text-align: center;
    text-transform: uppercase;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      background-color: var(--red);
    }

    &:disabled,
    &button[disabled] {
      opacity: 0.7;
    }
  }
}

.filter-block {
  display: flex;
  flex-direction: row;
  width: 100%;

  .filter-class {
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    margin-right: 2em;

    .filter-class--title {
      color: var(--black);
      padding-bottom: 0.5em;
      font-size: 0.9em;
      line-height: 30px;
      margin-right: 10px;
    }

    .filter-select {
      height: 30px;
      line-height: 20px;
      border-radius: 5px;
      width: 80px;
      padding: 0 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}

.error {
  color: var(--red);
  text-align: center;
  font-size: 20px;
}
</style>
