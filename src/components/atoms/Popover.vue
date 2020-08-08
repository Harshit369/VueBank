<template>
  <div class="popover-trigger-wrapper">
    <slot name="trigger"></slot>
  </div>
</template>

<script>
export default {
  name: "popover",
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.popover-trigger-wrapper {
  width: fit-content;
}
</style>
