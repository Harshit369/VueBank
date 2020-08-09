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

export default new Employees(savedEmployees ? JSON.parse(savedEmployees) : []);
