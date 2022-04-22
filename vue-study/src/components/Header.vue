<template>
  <header class="header">
    <h1>git user search <sub>(task#1)</sub></h1>
  </header>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style lang="scss">
.header {
  background-color: var(--black);
  color: var(--white);
  border-right: 8px solid var(--red);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-area: header;
}
</style>