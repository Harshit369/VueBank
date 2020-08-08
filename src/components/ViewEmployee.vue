<template>
  <modal
    :size="'medium'"
    @outside-click="$emit('close')"
    @close="$emit('close')"
  >
    <template v-slot:header="">
      <h3 class="text-light">{{ details.id }}</h3>
      <h2>{{ details.preferredFullName }}</h2>
    </template>
    <template v-slot:body="">
      <div
        class="detail-row"
        v-for="(column, index) in employeeSchema"
        :key="index"
      >
        <div class="label">{{ column.label }}</div>
        <div class="value">{{ details[column.name] }}</div>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from "./atoms/Modal";
import { employeeSchema } from "../services/employeeService";

export default {
  name: "add-employee",
  props: {
    details: Object,
  },
  data() {
    return { employeeSchema };
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
.detail-row {
  margin-bottom: 16px;
  display: flex;
}

.detail-row > * {
  width: 50%;
}

.detail-row .label {
  color: var(--text-light);
  width: 50%;
}
</style>
