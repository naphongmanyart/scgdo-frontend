<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand to="/" style="font-weight: 700;">SCGDO</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="(item, index) in menu" :key="index" :to="item.path">{{ item.name }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { id: 1, path: "/DOSCG/sequences", name: "Sequences" },
        { id: 2, path: "/DOSCG/equation", name: "Equation" },
        { id: 3, path: "/DOSCG/routes", name: "Routes" },
        { id: 4, path: "/DOSCG/cv", name: "CV" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #e80a1d;
}
</style>