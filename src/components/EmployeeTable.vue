<template>
  <grid :columns="schema" :data="data" :hasActions="hasActions">
    <template v-slot:actions="slotProps">
      <popover>
        <template v-slot:trigger="">
          <i
            class="material-icons cursor-pointer"
            @click="editEmployee(slotProps.employee)"
            >more_horiz</i
          >
        </template>
      </popover>
    </template>
  </grid>
</template>

<script>
import Grid from "./atoms/Grid";
import Popover from "./atoms/Popover";

export default {
  name: "employee-table",
  components: {
    Grid,
    Popover,
  },
  props: {
    viewEmployee: Function,
    editEmployee: Function,
    deleteEmployee: Function,
    data: Array,
    schema: Array,
  },
  data() {
    return {
      hasActions: true,
    };
  },
};
</script>
