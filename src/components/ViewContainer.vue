<template>
  <div class="view-contanier">
    <div class="header">
      <h3 class="heading">{{ title }}</h3>
      <div class="actions">
        <button class="primary" @click="addEmployeeModal = true">
          Create Employee
        </button>
      </div>
    </div>
    <div class="table-wrapper">
      <employee-table
        :viewEmployee="showEmployeeDetails"
        :editEmployee="editEmployeeDetails"
        :deleteEmployee="deleteEmployee"
      ></employee-table>
    </div>
    <add-employee v-if="addEmployeeModal" @close="addEmployeeModal = false" />
    <view-employee
      v-if="viewEmployeeModal"
      :details="viewEmployeeModal"
      @close="viewEmployeeModal = false"
    />
  </div>
</template>

<script>
import AddEmployee from "./AddEmployee.vue";
import ViewEmployee from "./ViewEmployee.vue";
import EmployeeTable from "./EmployeeTable.vue";

export default {
  name: "ViewContainer",
  props: {
    title: String,
  },
  data() {
    return {
      addEmployeeModal: false,
      viewEmployeeModal: false,
    };
  },
  methods: {
    showEmployeeDetails: function(emp) {
      this.viewEmployeeModal = emp;
    },
    editEmployeeDetails: function(emp) {
      this.addEmployeeModal = emp;
    },
    deleteEmployee: function(emp) {
      debugger;
      console.log("delete", emp);
    },
  },
  components: {
    AddEmployee,
    ViewEmployee,
    EmployeeTable,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view-contanier {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow: hidden;
}

.header {
  margin-bottom: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  border-bottom: var(--border);
}

.header .actions {
  display: flex;
  align-items: center;
  margin-left: auto;
  right: 0px;
}

.table-wrapper {
  height: 100%;
}
</style>
