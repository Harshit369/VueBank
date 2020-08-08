<template>
  <table>
    <thead>
      <tr>
        <th
          align="left"
          v-for="(column, columnIndex) in columns"
          :key="columnIndex"
        >
          {{ column.label }}
        </th>
        <th v-if="hasActions"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
          {{
            typeof column.template == "function"
              ? column.template(row)
              : row[column.name]
          }}
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
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

thead,
tbody {
}

tr {
  border-bottom: var(--border);
}

th,
td {
  padding: 8px;
}
</style>
