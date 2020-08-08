<template>
  <modal @close="$emit('close')">
    <div slot="header">
      <h2>Create Employee</h2>
    </div>
  </modal>
</template>

<script>
import Modal from "./atoms/Modal";

export default {
  name: "add-employee",
  components: {
    Modal
  }
};
</script>
