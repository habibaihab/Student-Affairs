
// Let studentarray = JSON.parse(localStorage.getItem("Students"));
function searchStudent() {
    let studentarray = JSON.parse(localStorage.getItem("Students"));
    var name = document.getElementById("name").value;
    if(name != ""){
        var result = document.getElementById("result");
        var tableHtml = "";
        var found = false;

        for (var i = 0; i < studentarray.length; i++) {
            if (studentarray[i].Name.toLowerCase()==name.toLowerCase() && studentarray[i].Status == "Active") {
                found = true;
                tableHtml += "<tr><td>" +studentarray[i].ID + "</td><td>" + studentarray[i].Name + "</td><td>"+ studentarray[i].GPA + "</td><td>"+ studentarray[i].Level +
                    "</td><td>"+ studentarray[i].Department + "</td><td>"+ studentarray[i].Email + "</td><td>"+ studentarray[i].PhoneNumber +
                    "</td><td>"+ studentarray[i].DateOfBirth + "</td><td>"+ studentarray[i].Gender + "</td></tr>";
            }
        }
        if (found) {
            result.innerHTML = "<table><thead><tr><th>ID</th><th>Name</th><th>GPA</th><th>Level</th><th>Department</th><th>Email</th><th>Phone Number</th><th>Date of Birth</th><th>Gender</th></thead><tbody>" + tableHtml + "</tbody></table>";
        }
        else {
            result.innerHTML = "No active students with similar names found.";
        }
    }

}
