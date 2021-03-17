export const homesidenav = [
  { name: "Dashboard", route: "Dashboard", class: "home-icon" },
  {
    name: "Courses",
    children: [
      { name: "New Course", route: "Courses/AddCourse" },
      { name: "Manage Course", route: "Courses/ManageCourse" },
    ],
    isopen: false,
    class: "courses-icon",
  },
  {
    name: "Students",
    children: [
      { name: "New Student", route: "Students/AddStudent" },
      { name: "Manage Students", route: "Students/ManageStudents" },
    ],
    isopen: false,
    class: "students-icon",
  },
  {
    name: "Staff",
    children: [
      { name: "New Staff", route: "Staff/AddStaff" },
      { name: "Manage Staffs", route: "Staff/ManageStaff" },
    ],
    isopen: false,
    class: "staff-icon",
  },
  {
    name: "Fees",
    children: [
      { name: "Generate Fee", route: "Fee/AddFee" },
      { name: "Manage Fees", route: "Fee/ManageFees" },
    ],
    isopen: false,
    class: "fee-icon",
  },
];

export const studentsPie = [
  {
    name: "guitar",
    value: 20,
  },
  {
    name: "Piano",
    value: 30,
  },
  {
    name: "Carnatic Singing",
    value: 40,
  },
  {
    name: "Drums",
    value: 20,
  },
];

export const teachersPie = [
  {
    name: "guitar",
    value: 2,
  },
  {
    name: "Piano",
    value: 3,
  },
  {
    name: "Carnatic Singing",
    value: 2,
  },
  {
    name: "Drums",
    value: 1,
  },
];

export const dashboradcards = [
  { title: "Student", count: 0, isPieChar: true, PieValue: studentsPie },
  { title: "Staffs", count: 0, isPieChar: true, PieValue: teachersPie },
  { title: "Courses", count: 4, isPieChar: false },
];
