<template>
  <modal :size="'medium'" @close="$emit('close')">
    <template v-slot:header="">
      <h2 v-if="editMode">Update Employee</h2>
      <h2 v-else>Create Employee</h2>
    </template>
    <template v-slot:body="">
      <div class="row">
        <div style="padding-right: 12px" class="col col-6">
          <label class="text-light">ID</label>
          <input :placeholder="'eg: EM01'" v-model="id" />
        </div>
      </div>
      <div class="row">
        <div class="col col-6">
          <label class="text-light">First Name</label>
          <input :placeholder="'John'" v-model="firstName" />
        </div>
        <div class="col col-6">
          <label class="text-light">Last Name</label>
          <input :placeholder="'Doe'" v-model="lastName" />
        </div>
      </div>
      <div class="row">
        <div class="col col-12">
          <label class="text-light">Job Title</label>
          <input :placeholder="'eg: Designer'" v-model="jobTitleName" />
        </div>
      </div>
      <div class="row">
        <div class="col col-12">
          <label class="text-light">Email</label>
          <input :placeholder="'john@doe.com'" v-model="emailAddress" />
        </div>
      </div>
      <div class="row">
        <div class="col col-12">
          <label class="text-light">Phone Number</label>
          <input :placeholder="'123-5557777'" v-model="phoneNumber" />
        </div>
      </div>
      <div class="row">
        <div class="col col-6">
          <label class="text-light">Region</label>
          <input :placeholder="'eg: CA'" v-model="region" />
        </div>
        <div class="col col-6">
          <label class="text-light">DOB</label>
          <input :placeholder="'DD/MM/YYYY'" v-model="dob" />
        </div>
      </div>
    </template>
    <template v-slot:footer="">
      <div class="footer-wrapper">
        <button class="primary" @click="save">
          {{ editMode ? "Save" : "Create" }}
        </button>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from "./atoms/Modal";

const initialData = {
  editMode: false,
  id: "",
  firstName: "",
  lastName: "",
  jobTitleName: "",
  emailAddress: "",
  phoneNumber: "",
  region: "",
  dob: "",
};

export default {
  name: "add-employee",
  props: {
    filledDetails: Object,
  },
  data() {
    const prefilledData = Object.keys(initialData).reduce((result, key) => {
      result[key] = this.filledDetails[key];
      return result;
    }, {});
    return {
      ...initialData,
      ...prefilledData,
    };
  },
  computed: {
    preferredFullName: function() {
      return [this.firstName, this.lastName].join(" ");
    },
    employeeCode: function() {
      return this.id ? "E" + this.id : this.id;
    },
  },
  methods: {
    save() {
      const details = [
        "id",
        "firstName",
        "lastName",
        "jobTitleName",
        "emailAddress",
        "phoneNumber",
        "region",
        "dob",
        "employeeCode",
        "preferredFullName",
      ].reduce((result, key) => {
        result[key] = this[key];
        return result;
      }, {});

      this.$emit("submit", details);
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  margin-bottom: 16px;
}

.row:last-child {
  margin-bottom: 0px;
}

.col {
  padding-right: 12px;
}

.col-6 {
  width: 50%;
}

.col-6:last-child {
  padding-right: 0px;
}

.col-12 {
  width: 100%;
  padding-right: 0px;
}

.footer-wrapper {
  display: flex;
}

.footer-wrapper button {
  margin-right: 8px;
}
</style>
