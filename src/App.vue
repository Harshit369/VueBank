<template>
  <div id="app">
    <Nav />
    <ViewContainer title="Employee" />
  </div>
</template>

<script>
import ViewContainer from "./components/ViewContainer.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
    ViewContainer
  }
};
</script>

<style src="./App.css"></style>
