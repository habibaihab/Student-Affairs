function AssignDep(){
    let Studentfound = false;
    let Students = JSON.parse(localStorage.getItem("Students"));
    let StudentDep = document.getElementById("dep").value;
    let StudentId = document.getElementById("ID").value;
    for (let i = 0; i < Students.length; i++){
        if (StudentId == Students[i].ID){
            Studentfound = true;
            if (StudentDep != ""){
                Students[i].Department = StudentDep;
            }
        }
    }
    if (Studentfound){
        localStorage.setItem("Students", JSON.stringify(Students));
    }
    else{
        alert("Name of the Student isn't Correct.");
    }
}
function CheckInfo(){
    let trueinfo = true;
    let StudentFound = false;
    let level = false;
    let checklevel;
    let Checkid = document.getElementById("ID").value;
    if (Checkid.length == 8){
        let Students = JSON.parse(localStorage.getItem("Students"));
        for(let i = 0; i < Students.length; i++) {
            if(Students[i].ID == Checkid){
                StudentFound = true;
                checklevel = Students[i].Level;
                break;
            }
        }  
        if(StudentFound){
            if (checklevel == "Level 3" || checklevel == "Level 4"){
                level = true;
            }
            else{
                trueinfo = false;
                alert("Student's Level is under 2");
            }
        }
        else{
            trueinfo = false;
            alert("There is No Student with that ID");
        }
    }
    else{
        trueinfo = false;
        alert("Invalid ID, Please Enter a Valid ID");
    }

    
    return trueinfo;
}

function CallFunction(){
    let success = false;
    if (CheckInfo()){
        AssignDep();
        success = true;
    }
    return success;
}
