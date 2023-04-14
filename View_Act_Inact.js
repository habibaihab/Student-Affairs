function check_Act_InAct_Student() {
    var studentsData = localStorage.getItem("Students");
    var students = JSON.parse(studentsData);
    var activeTable = document.querySelector(".active");
    var inactiveTable = document.querySelector(".inActive");
    for (var i = 0; i < students.length; i++) {
        if (students[i].Status === "active" || students[i].Status === "Active") {
            var activeRow = "<tr>" +
                "<td>" + students[i].ID + "</td> <td>" + students[i].Name + "</td> <td>"+ students[i].GPA +
                "</td> <td>" + students[i].Level + "</td> <td>"+ students[i].Department +
                "</td> <td>"+ students[i].Email + "</td> <td>"+ students[i].PhoneNumber +
                "</td> <td>"+ students[i].DateOfBirth + "</td> <td>"+ students[i].Gender + "</td>" +
                " </tr>";
            activeTable.innerHTML += activeRow;
        }else {
            var inactiveRow = "<tr>" +
                "<td>" + students[i].ID + "</td> <td>" + students[i].Name + "</td> <td>"+ students[i].GPA +
                "</td> <td>" + students[i].Level + "</td> <td>"+ students[i].Department +
                "</td> <td>"+ students[i].Email + "</td> <td>"+ students[i].PhoneNumber +
                "</td> <td>"+ students[i].DateOfBirth + "</td> <td>"+ students[i].Gender + "</td>" +
                " </tr>";
            inactiveTable.innerHTML += inactiveRow;
        }
    }
}

check_Act_InAct_Student();
