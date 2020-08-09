<template>
  <div class="popover-trigger-wrapper" @click="togglePopover" ref="trigger">
    <slot name="trigger"></slot>
    <div v-if="open" class="popover-body">
      <slot name="body"></slot>
    </div>
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
  methods: {
    togglePopover(event) {
      event.stopPropagation();
      this.open ? this.closePopover() : this.openPopover();
    },
    closePopover() {
      this.open = false;
    },
    openPopover() {
      this.open = true;
    },
  },
  mounted() {
    document.addEventListener("click", this.closePopover);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closePopover);
  },
};
</script>

<style scoped>
.popover-trigger-wrapper {
  position: relative;
  overflow: visible;
  width: fit-content;
}

.popover-body {
  z-index: 1;
  right: 0px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  position: absolute;
}
</style>
