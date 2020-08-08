<template>
  <nav class="nav">
    <div class="nav-left">
      <img id="logo" alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="nav-right"></div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {}
};
</script>

<style>
.nav {
  background-color: var(--black);
  padding: 0px 16px;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.nav-left {
  display: flex;
  align-items: center;
}

#logo {
  height: 32px;
}

.nav-left > * {
  margin-right: 8px;
}

.nav-right {
  display: flex;
  align-items: center;
}

.nav-right > * {
  margin-left: 8px;
}
</style>
