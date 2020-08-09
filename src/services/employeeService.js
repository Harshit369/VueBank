const defaultEmployees = [
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
];

export const employeeSchema = [
  {
    label: "ID",
    name: "id",
  },
  {
    label: "Full Name",
    name: "preferredFullName",
  },
  {
    label: "Employee Code",
    name: "employeeCode",
  },
  {
    label: "Job Title",
    name: "jobTitleName",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
  },
  {
    label: "Email ID",
    name: "emailAddress",
  },
  {
    label: "Region",
    name: "region",
  },
  {
    label: "DOB",
    name: "dob",
  },
];

class Employees {
  constructor(defaultList = []) {
    this.employees = defaultList;
  }

  updateLS = () => {
    // updating LS to prevent data loss on refresh 😉
    localStorage.setItem("employees", JSON.stringify(this.employees));
  };

  getAllEmployee = () => {
    return this.employees;
  };

  getEmployee(empId) {
    const empIndex = this.employees.findIndex(({ id }) => id == empId);
    if (empIndex < 0) {
      return undefined;
    }
    return this.employees[empIndex];
  }

  addEmployee(emp) {
    this.employees.push(emp);
    this.updateLS();
    return emp;
  }

  updateEmployee(emp) {
    const empIndex = this.employees.findIndex(({ id }) => id == emp.id);
    if (empIndex < 0) {
      return false;
    }
    this.employees[empIndex] = { ...this.employees[empIndex], ...emp };
    this.updateLS();
    return true;
  }

  deleteEmployee(empId) {
    const empIndex = this.employees.findIndex(({ id }) => id == empId);
    if (empIndex < 0) {
      return false;
    }
    this.employees.splice(empIndex, 1);
    this.updateLS();
    return true;
  }
}

const savedEmployees = localStorage.getItem("employees");
const availableEmployees = savedEmployees
  ? JSON.parse(savedEmployees)
  : defaultEmployees;

export default new Employees([
  // ...availableEmployees,
  // ...availableEmployees,
  ...availableEmployees,
]);
