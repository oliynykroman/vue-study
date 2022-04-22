<template>
  <footer class="footer">
    <p>© {{ currentYear }} Ovdal.dk</p>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
  computed: {
    currentYear() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  grid-area: footer;
  background-color: var(--black);
  color: var(--white);
  font-size: 12px;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 8px solid var(--red);
}
</style>