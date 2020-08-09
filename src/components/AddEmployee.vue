<template>
  <modal :size="'medium'" @close="$emit('close')">
    <template v-slot:header="">
      <h2>Create Employee</h2>
    </template>
    <template v-slot:body="">
      <div class="row">
        <div class="col col-6">
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
          <input :placeholder="'MM-DD-YYYY'" v-model="dob" />
        </div>
      </div>
    </template>
    <template v-slot:footer="">
      <div class="footer-wrapper">
        <button class="primary" @click="save">Save</button>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from "./atoms/Modal";

export default {
  name: "add-employee",
  props: {
    filledDetails: Object,
  },
  data() {
    return {
      id: "",
      firstName: "",
      lastName: "",
      jobTitleName: "",
      emailAddress: "",
      phoneNumber: "",
      region: "",
      dob: "",
      ...(this.filledDetails || {}),
    };
  },
  computed: {
    preferredFullName: function() {
      return [this.firstName, this.lastName].join(" ");
    },
  },
  methods: {
    save() {
      console.log(this);
      debugger;
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
