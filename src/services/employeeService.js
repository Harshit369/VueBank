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
    emailAddress: "romin.k.irani@gmail.com"
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
    emailAddress: "neilrirani@gmail.com"
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
    emailAddress: "tomhanks@gmail.com"
  },
  {
    id: 4,
    jobTitleName: "Developer",
    firstName: "Harshal",
    lastName: "Patel",
    dob: "25/12/1985",
    preferredFullName: "Harshal Patel",
    employeeCode: "E4",
    region: "IS",
    phoneNumber: "408-2123822",
    emailAddress: "patel.harshal@gmail.com"
  },
  {
    id: 5,
    jobTitleName: "Eng. Manager",
    firstName: "David",
    lastName: "Warner",
    dob: "07/11/1988",
    preferredFullName: "David Warner",
    employeeCode: "E5",
    region: "AUS",
    phoneNumber: "408-6376382",
    emailAddress: "Warner.david@gmail.com"
  },
  {
    id: 6,
    jobTitleName: "Designer",
    firstName: "Sayyam",
    lastName: "Sachdev",
    dob: "22/07/1993",
    preferredFullName: "Sayyam Sachdev",
    employeeCode: "E6",
    region: "AUS",
    phoneNumber: "408-2352372",
    emailAddress: "sachdevs@gmail.com"
  },
  {
    id: 7,
    jobTitleName: "Team Lead",
    firstName: "Saurabh",
    lastName: "Ganguly",
    dob: "05/11/1982",
    preferredFullName: "Saurabh Ganguly",
    employeeCode: "E7",
    region: "CA",
    phoneNumber: "408-2232826",
    emailAddress: "ganguly@bcci.com"
  },
  {
    id: 8,
    jobTitleName: "Backend Developer",
    firstName: "Dale",
    lastName: "Steyn",
    dob: "05/07/1984",
    preferredFullName: "Dale Steyn",
    employeeCode: "E8",
    region: "PK",
    phoneNumber: "413-3738362",
    emailAddress: "dale.steyn@gmail.com"
  },
  {
    id: 9,
    jobTitleName: "Frontend Developer",
    firstName: "Harshit",
    lastName: "Thukral",
    dob: "09/07/1994",
    preferredFullName: "Harshit Thukral",
    employeeCode: "E9",
    region: "PR",
    phoneNumber: "463-7483633",
    emailAddress: "h.thakral369@gmail.com"
  },
  {
    id: 10,
    jobTitleName: "Devops",
    firstName: "Rajan",
    lastName: "Middha",
    dob: "28/09/1993",
    preferredFullName: "Rajan Middha",
    employeeCode: "E10",
    region: "US",
    phoneNumber: "363-7483836",
    emailAddress: "middha.rajan@gmail.com"
  },
  {
    id: 11,
    jobTitleName: "Developer",
    firstName: "Abhishek",
    lastName: "Jha",
    dob: "15/02/1994",
    preferredFullName: "Abhishek Jha",
    employeeCode: "E11",
    region: "PL",
    phoneNumber: "262-3352422",
    emailAddress: "jhaa.abhskek@gmail.com"
  },
  {
    id: 12,
    jobTitleName: "Designer",
    firstName: "Vishal",
    lastName: "Jain",
    dob: "05/12/1995",
    preferredFullName: "Vishal jain",
    employeeCode: "E12",
    region: "CA",
    phoneNumber: "408-35363733",
    emailAddress: "jainvishal@gmail.com"
  },
  {
    id: 13,
    jobTitleName: "Product Manager",
    firstName: "Aakanksh",
    lastName: "Dhar",
    dob: "15/04/1992",
    preferredFullName: "Aakanksh Dhar",
    employeeCode: "E13",
    region: "JA",
    phoneNumber: "353-8373535",
    emailAddress: "aakanksh.pm@gmail.com"
  }
];

export const employeeSchema = [
  {
    label: "ID",
    name: "id",
    sortable: true
  },
  {
    label: "Full Name",
    name: "preferredFullName",
    sortable: true
  },
  {
    label: "Employee Code",
    name: "employeeCode"
  },
  {
    label: "Job Title",
    name: "jobTitleName",
    sortable: true
  },
  {
    label: "Phone Number",
    name: "phoneNumber"
  },
  {
    label: "Email ID",
    name: "emailAddress"
  },
  {
    label: "Region",
    name: "region",
    sortable: true
  },
  {
    label: "DOB",
    name: "dob"
  }
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
    if (!emp.id || this.getEmployee(emp.id)) {
      return false;
    }
    this.employees.push(emp);
    this.updateLS();
    return emp;
  }

  updateEmployee(emp) {
    const empIndex = this.employees.findIndex(({ id }) => id == emp.id);
    if (empIndex < 0) {
      return false;
    }
    this.employees.splice(empIndex, 1, emp);
    this.updateLS();
    return emp;
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

export default new Employees([...availableEmployees]);
