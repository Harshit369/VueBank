<template>
  <div class="view-contanier">
    <div class="header">
      <h3 class="heading">{{ title }}</h3>
      <div class="actions">
        <button class="primary" @click="addEmployeeModal = {}">
          Create Employee
        </button>
      </div>
    </div>
    <div class="table-wrapper">
      <div class="filters">
        <dropdown
          :withGroup="'left'"
          :options="employeeSchema"
          :value="filters.column"
          :onChange="onSearchColumnChange"
        ></dropdown>
        <input
          placeholder="Search.."
          class="with-group-right"
          style="width: 120px; display: inline-block"
          v-model="filters.search"
        />
      </div>
      <div class="grid">
        <employee-table
          :viewEmployee="showEmployeeDetails"
          :editEmployee="editEmployeeDetails"
          :deleteEmployee="deleteEmployee"
          :data="filteredData"
          :schema="employeeSchema"
        ></employee-table>
      </div>
    </div>
    <add-employee
      v-if="addEmployeeModal"
      :error="updateError"
      :filledDetails="addEmployeeModal"
      @close="closeEmployeeUpdateModal"
      @submit="onEmployeeUpdate"
    />
    <view-employee
      v-if="viewEmployeeModal"
      :details="viewEmployeeModal"
      @close="viewEmployeeModal = false"
    />
  </div>
</template>

<script>
import Dropdown from "./atoms/Dropdown";

import AddEmployee from "./AddEmployee.vue";
import ViewEmployee from "./ViewEmployee.vue";
import EmployeeTable from "./EmployeeTable.vue";
import employeeService, { employeeSchema } from "../services/employeeService";

const containsSubString = (string = "", substr = "") =>
  string.toLowerCase().includes(substr.toLowerCase());

export default {
  name: "ViewContainer",
  props: {
    title: String
  },
  data() {
    return {
      updateError: false,
      filters: {
        column: "preferredFullName",
        search: ""
      },
      employeeData: employeeService.getAllEmployee(),
      employeeSchema: employeeSchema,
      addEmployeeModal: false,
      viewEmployeeModal: false
    };
  },
  computed: {
    filteredData: function() {
      return (this.employeeData || []).filter(emp => {
        return containsSubString(emp[this.filters.column], this.filters.search);
      });
    }
  },
  methods: {
    onEmployeeUpdate: function(details) {
      let error = false;
      if (this.addEmployeeModal && this.addEmployeeModal.editMode) {
        error = !employeeService.updateEmployee(details);
      } else {
        error = !employeeService.addEmployee(details);
      }
      if (error) {
        this.updateError = true;
      } else {
        this.closeEmployeeUpdateModal();
        this.employeeData = employeeService.getAllEmployee();
      }
    },
    deleteEmployee: function(emp) {
      employeeService.deleteEmployee(emp.id);
    },

    // shallow actions
    onSearchColumnChange: function(val) {
      this.filters.column = val;
    },
    closeEmployeeUpdateModal: function() {
      this.updateError = false;
      this.addEmployeeModal = false;
    },
    showEmployeeDetails: function(emp) {
      this.viewEmployeeModal = emp;
    },
    editEmployeeDetails: function(emp) {
      this.addEmployeeModal = { ...emp, editMode: true };
    }
  },
  components: {
    Dropdown,
    AddEmployee,
    ViewEmployee,
    EmployeeTable
  }
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}

.grid {
  overflow: auto;
  height: 100%;
}

.filters {
  margin-bottom: 16px;
}
</style>
