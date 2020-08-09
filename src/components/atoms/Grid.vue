<template>
  <table>
    <thead>
      <tr>
        <th
          :class="{ 'cursor-pointer': column.sortable }"
          v-for="(column, columnIndex) in columns"
          @click="
            column.sortable
              ? onSort({
                  column: column.name,
                  type: sort.type == 'asc' ? 'desc' : 'asc'
                })
              : null
          "
          :key="columnIndex"
        >
          {{ column.label }}
          <i
            class="material-icons sort-icon"
            v-if="sort.column == column.name"
            >{{ sort.type == "asc" ? "arrow_upward" : "arrow_downward" }}</i
          >
        </th>
        <th v-if="hasActions"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
          {{ row[column.name] }}
        </td>
        <td v-if="hasActions">
          <slot name="actions" v-bind:employee="row"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "grid",
  props: {
    columns: Array,
    data: Array,
    hasActions: Boolean,
    sort: Object,
    onSort: Function
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
table {
  position: relative;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th {
  z-index: 2;
  background-color: white;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
}

tr {
  border-bottom: var(--border);
}

th,
td {
  padding: 8px;
}

.sort-icon {
  font-size: var(--font-small);
}
</style>
