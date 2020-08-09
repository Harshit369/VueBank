<template>
  <grid
    :columns="schema"
    :data="sortedData"
    :hasActions="hasActions"
    :sort="sort"
    :onSort="handleSortChange"
  >
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
      sort: {
        column: "id",
        type: "asc",
      },
      hasActions: true,
    };
  },
  methods: {
    handleSortChange: function(obj) {
      this.sort = obj;
    },
  },
  computed: {
    sortedData: function() {
      if (this.sort && this.sort.column) {
        return (this.data || []).sort((a, b) => {
          const valA = a[this.sort.column];
          const valB = b[this.sort.column];
          if (valA == valB) {
            return 0;
          }
          return this.sort.type === "asc"
            ? valA > valB
              ? 1
              : -1
            : valA > valB
            ? -1
            : 1;
        });
      } else {
        return this.data;
      }
    },
  },
};
</script>
