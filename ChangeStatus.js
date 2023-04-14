function updateStudentStatus(id, status) {
  var studentsData = localStorage.getItem("Students");
  var students = JSON.parse(studentsData);

  if (Array.isArray(students) && students.length > 0) {
      for (var i = 0; i < students.length; i++) {
          if (students[i].ID === id) {
              students[i].Status = status;
              localStorage.setItem("Students", JSON.stringify(students));
              break;
          }
      }
  } else {
      console.error("Invalid or empty data in localStorage: ", students);
  }
}
function createStudentRow(student) {
  var row = document.createElement("tr");

  var nameCell = document.createElement("td");
  nameCell.innerHTML = student.Name;
  row.appendChild(nameCell);

  var idCell = document.createElement("td");
  idCell.innerHTML = student.ID;
  row.appendChild(idCell);

  var dobCell = document.createElement("td");
  dobCell.innerHTML = student.DateOfBirth;
  row.appendChild(dobCell);

  var statusCell = document.createElement("td");
  statusCell.innerHTML = student.Status;
  row.appendChild(statusCell);

  var gpaCell = document.createElement("td");
  gpaCell.innerHTML = student.GPA;
  row.appendChild(gpaCell);

  var deptCell = document.createElement("td");
  deptCell.innerHTML = student.Department;
  row.appendChild(deptCell);
  var emailCell = document.createElement("td");
  emailCell.innerHTML = student.Email;
  row.appendChild(emailCell);

 var genderCell = document.createElement("td");
 genderCell.innerHTML = student.Gender;
 row.appendChild(genderCell);

 var levelCell = document.createElement("td");
 levelCell.innerHTML = student.Level;
 row.appendChild(levelCell);

 var phoneCell = document.createElement("td");
 phoneCell.innerHTML = student.PhoneNumber;
 row.appendChild(phoneCell);
 var actionCell = document.createElement("td");

 var statusButton = document.createElement("button");
 statusButton.innerHTML = "Change Status";
 statusButton.addEventListener("click", function() {
 var newStatus;
 if (student.Status === "Active") {
   newStatus = "Inactive";
  } else {
  newStatus = "Active";
 }
 updateStudentStatus(student.ID, newStatus);
 student.Status = newStatus;
 statusCell.innerHTML = newStatus;
 check_Act_InAct_Student();
 });
 actionCell.appendChild(statusButton);
 row.appendChild(actionCell);
 return row;
 }

 function renderStudentsTable() {
 var studentsData = localStorage.getItem("Students");
 var students = JSON.parse(studentsData);
 if (Array.isArray(students) && students.length > 0) {
  var studentsTableBody = document.getElementById("studentsTableBody");

  for (var i = 0; i < students.length; i++) {
      var studentRow = createStudentRow(students[i]);
      studentsTableBody.appendChild(studentRow);
  }
 } else {
  console.error("Invalid or empty data in localStorage: ", students);
 }
 }
 renderStudentsTable();

