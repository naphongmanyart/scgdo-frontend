<template>
  <div id="app">
    <Navbar />
    <Doscg />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Doscg from '@/views/Doscg';
export default {
  components: {
    Navbar,
    Footer,
    Doscg
  }
};
</script>

<style lang="scss">
#app {
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.body-content {
  min-height: calc(100vh - 140px);
  margin-top: 15px;
  margin-bottom: 15px;
}

a:hover,
a.router-link-active,
a.router-link-exact-active {
  color: #fff !important;
  cursor: pointer;
}
</style>
