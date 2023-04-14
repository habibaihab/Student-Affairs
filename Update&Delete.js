function CheckInfo1(){
    let Checkid = document.getElementById("ID").value;
    if(Checkid.length != 8 ){
        alert("Invalid ID, Please Enter Valid ID");
        return false;
    }
    let Checkn = document.getElementById("Name").value;
    const regex2 = /^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$/;
    if(!regex2.test(Checkn) && Checkn != ""){
        alert("Invalid Name, Please Enter Valid Name");
        return false;
    }
    let Checkgpa = document.getElementById("gpa").value;
    if((Checkgpa < 0 || Checkgpa > 4) && Checkgpa != ""){
        alert("Invalid GPA, Please Enter Valid GPA");
        return false;
    }
    let CheckE = document.getElementById("email").value;
    const regex1 = /^[0-9]+@stud.uni.edu.eg$/;
    if(!regex1.test(CheckE) && CheckE != ""){
        alert("Invalid Email, Please Enter Valid Email");
        return false;
    }
    let CheckPhone = document.getElementById("phone").value;
    if((CheckPhone.length != 11 || CheckE[0] != 0 || CheckE[1] != 1) && CheckPhone != ""){
        alert("Invalid Mobile Number, Please Enter Valid Mobile Number");
        return false;
    }
    let Checkdate = document.getElementById("date").value;
    let inputdate = new Date(Checkdate);
    let currentdate = new Date()
    if(inputdate > currentdate && Checkdate != ""){
        alert("Invalid Date, Please Enter Valid Date");
        return false;
    }
    return true;
}
function CheckInfo2(){
    let Checkid = document.getElementById("ID2").value;
    if(Checkid.length != 8 ){
        alert("Invalid ID, Please Enter Valid ID");
        return false;
    }
    return true;
}
function UpdateStudent(){
    let updForm = document.getElementById("update");
    let Students = JSON.parse(localStorage.getItem("Students"));
    let Studentid = document.getElementById("ID").value;
    let Studentgpa = document.getElementById("gpa").value;
    let Studentname = document.getElementById("Name").value;
    let Studentemail = document.getElementById("email").value;
    let Studentphone = document.getElementById("phone").value;
    let Studentlevel = document.getElementById("level").value;
    let StudentDob = document.getElementById("date").value;
    let StudentStatus = document.getElementById("status").value;
    let StudentGender = document.getElementById("gender").value;
    updForm.addEventListener("submit", function(event){
        let updinfo = CheckInfo1();
        if(updinfo){
            let Studentfound = false;
            for(let i = 0;i < Students.length;i++){
                if(Studentid == Students[i].ID){
                    Studentfound = true;
                    if(Studentgpa != ""){
                        Students[i].GPA = Studentgpa;
                    }
                    if(Studentname != ""){
                        Students[i].Name = Studentname;
                    }
                    if(Studentemail != ""){
                        Students[i].Email = Studentemail;
                    }
                    if(Studentphone != ""){
                        Students[i].PhoneNumber = Studentphone;
                    }
                    if(Studentlevel != "" && Studentlevel != "--Choose Level--"){
                        Students[i].Level = Studentlevel;
                    }
                    if(StudentDob != ""){
                        Students[i].DateOfBirth = StudentDob;
                    }
                    if(StudentStatus != "" && StudentStatus != "--Choose Activeness--"){
                        Students[i].Status = StudentStatus;
                    }
                    if(StudentGender != "" && StudentGender != "--Choose Gender--"){
                        Students[i].Gender = StudentGender;
                    }
                }
            }
            if(Studentfound){
                localStorage.setItem("Students", JSON.stringify(Students));
            }
            else{
                alert("There is no Student with this Id to be Updated")
            }
        }
    });
    
}
function DeleteStudent(){
    let delForm = document.getElementById("delete");
    let Students = JSON.parse(localStorage.getItem("Students"));
    let Studentid = document.getElementById("ID2").value; 
    delForm.addEventListener("submit", function(){
        let delinfo = CheckInfo2();
        if(delinfo){
            let Studentfound = false;
            for(let i = 0;i < Students.length;i++){
                if(Students[i].ID == Studentid){
                    Students = Students.filter((element, index) => index != i);
                    Studentfound = true;
                    break;
                }
            }
            if(Studentfound){
                localStorage.setItem("Students", JSON.stringify(Students));
            }
            else{
                alert("There is no Student with this Id to be Deleted")
            }
        }
    });
}
