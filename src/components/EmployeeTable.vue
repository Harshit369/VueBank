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
          <i class="material-icons cursor-pointer">more_horiz</i>
        </template>
        <template v-slot:body="">
          <div @click="viewEmployee(slotProps.employee)" class="dd-option">
            View
          </div>
          <div @click="editEmployee(slotProps.employee)" class="dd-option">
            Edit
          </div>
          <div @click="deleteEmployee(slotProps.employee)" class="dd-option">
            Delete
          </div>
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
    Popover
  },
  props: {
    viewEmployee: Function,
    editEmployee: Function,
    deleteEmployee: Function,
    data: Array,
    schema: Array
  },
  data() {
    return {
      sort: {
        column: "id",
        type: "asc"
      },
      hasActions: true
    };
  },
  methods: {
    handleSortChange: function(obj) {
      this.sort = obj;
    }
  },
  computed: {
    sortedData: function() {
      if (this.sort && this.sort.column) {
        return (this.data || []).sort((a, b) => {
          const valA = a[this.sort.column] || "";
          const valB = b[this.sort.column] || "";
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
    }
  }
};
</script>

<style scoped>
.dd-option {
  cursor: pointer;
  width: 120px;
  padding: 8px 12px;
}

.dd-option:hover {
  background-color: var(--secondary-light);
}
</style>
