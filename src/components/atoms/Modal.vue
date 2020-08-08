<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('outside-click')">
      <div class="modal-container" v-bind:class="dimensionObj">
        <div class="modal-header">
          <slot name="header">Modal header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">Modal body</slot>
        </div>

        <div v-if="hasFooterSlot" class="modal-footer">
          <slot name="footer">default footer</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    size: String,
  },
  data() {
    return {
      dimensionObj: {
        small: this.size == "small",
        medium: this.size == "medium",
        large: this.size == "large",
      },
    };
  },
  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  max-width: 100%;
  min-width: 240px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-container.small {
  width: 320px;
}

.modal-container.medium {
  width: 480px;
}
.modal-container.large {
  width: 600px;
}

.modal-container > * {
  padding: 24px;
}

.modal-header {
  border-bottom: var(--border);
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
