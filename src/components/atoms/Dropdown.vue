<template>
  <select
    v-bind:class="{
      'with-group-right': withGroup == 'right',
      'with-group-left': withGroup == 'left',
    }"
    @change="onChange($event.target.value)"
  >
    <option
      v-for="item in options"
      :selected="value == item.name"
      :key="item.name"
      :title="item.label"
      :value="item.name"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "dropdown",
  props: {
    options: Array,
    withGroup: String,
    onChange: Function,
    value: String,
  },
};
</script>
