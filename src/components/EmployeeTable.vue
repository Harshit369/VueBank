<template>
  <grid
    :columns="employeeColumns"
    :data="employeeData"
    :hasActions="hasActions"
  >
    <template v-slot:actions="slotProps">
      <popover>
        <template v-slot:trigger="">
          <i
            class="material-icons cursor-pointer"
            @click="viewEmployee(slotProps.employee)"
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
import { employeeSchema } from "../services/employeeService";

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
  },
  data() {
    return {
      hasActions: true,
      employeeColumns: employeeSchema,
      employeeData: [
        {
          id: 1,
          jobTitleName: "Developer",
          firstName: "Romin",
          lastName: "Irani",
          preferredFullName: "Romin Irani",
          employeeCode: "E1",
          region: "CA",
          dob: "01/10/1993",
          phoneNumber: "408-1234567",
          emailAddress: "romin.k.irani@gmail.com",
        },
        {
          id: 2,
          jobTitleName: "Developer",
          firstName: "Neil",
          lastName: "Irani",
          preferredFullName: "Neil Irani",
          employeeCode: "E2",
          region: "CA",
          dob: "01/10/1992",
          phoneNumber: "408-1111111",
          emailAddress: "neilrirani@gmail.com",
        },
        {
          id: 3,
          jobTitleName: "Program Directory",
          firstName: "Tom",
          lastName: "Hanks",
          dob: "05/12/1995",
          preferredFullName: "Tom Hanks",
          employeeCode: "E3",
          region: "CA",
          phoneNumber: "408-2222222",
          emailAddress: "tomhanks@gmail.com",
        },
      ],
    };
  },
};
</script>
