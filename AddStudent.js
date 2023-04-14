function validate() {
    let Checkname = document.getElementById("name").value;
    const regex2 = /^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$/;
    if (!regex2.test(Checkname) && Checkname != "") {
        alert("Invalid Name, Please enter your full name.");
        return false;
    }
    let Checkid = document.getElementById("id").value;
    if (Checkid.length != 8) {
        alert("Invalid ID, Please Enter Valid ID");
        return false;
    }
    let Checkgpa = document.getElementById("gpa").value;
    const regex3 = /^([0-3](\.[0-9]{1,2})?|4(\.0{1,2})?)$/;
    if (Checkgpa == "" || !regex3.test(Checkgpa)) {
        alert("Invalid GPA, Please Enter Valid GPA");
        return false;
    }
    let CheckEmail = document.getElementById("email").value;
    const regex = /^[0-9]+@stud.uni.edu.eg$/;
    if (!regex.test(CheckEmail) && CheckEmail != "") {
        alert("Invalid Email, Please Enter Valid Email");
        return false;
    }
    let Checkdate = document.getElementById("dob").value;
    let inputdate = new Date(Checkdate);
    let currentdate = new Date()
    if (inputdate > currentdate && Checkdate != "") {
        alert("Invalid Date, Please Enter Valid Date");
        return false;
    }
    
    let CheckPhone = document.getElementById("phone").value;
    if ((CheckPhone.length != 11 || CheckPhone[0] != 0 || CheckPhone[1] != 1) && CheckPhone != "") {
        alert("Invalid Mobile Number, Please Enter Valid Mobile Number");
        return false;
    }
    let level = document.getElementById("level").value;
    let dep = document.getElementById("dep").value;
    if(dep != "General" && (level == "Level 1" || level == "Level 2")){
        alert("Invalid Department, Levels below 3 must be General");
        return false;
    }
    return true;
}

function submitForm(event) {
    event.preventDefault(); 
    let info = validate();
    if (info) {
        let form = document.getElementById("myForm");
        let N = document.getElementById("name").value;
        let ID = document.getElementById("id").value;
        let L = document.getElementById("level").value;
        let D = document.getElementById("dep").value;
        let Gpa = document.getElementById("gpa").value;
        let Gen = document.getElementById("gender").value;
        let S = document.getElementById("status").value;
        let Ph = document.getElementById("phone").value;
        let Dob = document.getElementById("dob").value;
        let Em = document.getElementById("email").value;
        let newstudent = new Student(N, ID, Dob, S, Gpa, Gen, L, D, Em, Ph);
        Students.push(newstudent);
        localStorage.setItem('Students', JSON.stringify(Students));
        form.reset(); 
    }
}

function SaveStudent() {
    let form = document.getElementById("myForm");
    form.addEventListener("submit", submitForm);
}
// function validate() {
//     let Checkname = document.getElementById("name").value;
//     const regex2 = /^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$/;
//     if (!regex2.test(Checkname) && Checkname != "") {
//         alert("Invalid Name, Please enter your full name.");
//         return false;
//     }
//     let Checkid = document.getElementById("id").value;
//     if (Checkid.length != 8) {
//         alert("Invalid ID, Please Enter Valid ID");
//         return false;
//     }
//     let Checkgpa = document.getElementById("gpa").value;
//     const regex3 = /^([0-3](\.[0-9]{1,2})?|4(\.0{1,2})?)$/;
//     if (Checkgpa == "" || !regex3.test(Checkgpa)) {
//         alert("Invalid GPA, Please Enter Valid GPA");
//         return false;
//     }
//     let CheckEmail = document.getElementById("email").value;
//     const regex = /^[0-9]+@stud.uni.edu.eg$/;
//     if (!regex.test(CheckEmail) && CheckEmail != "") {
//         alert("Invalid Email, Please Enter Valid Email");
//         return false;
//     }
//     let Checkdate = document.getElementById("dob").value;
//     let inputdate = new Date(Checkdate);
//     let currentdate = new Date()
//     if (inputdate > currentdate && Checkdate != "") {
//         alert("Invalid Date, Please Enter Valid Date");
//         return false;
//     }
    
//     let CheckPhone = document.getElementById("phone").value;
//     if ((CheckPhone.length != 11 || CheckPhone[0] != 0 || CheckPhone[1] != 1) && CheckPhone != "") {
//         alert("Invalid Mobile Number, Please Enter Valid Mobile Number");
//         return false;
//     }
//     let level = document.getElementById("level").value;
//     let dep = document.getElementById("dep").value;
//     if(dep != "General" && (level == "Level 1" || level == "Level 2")){
//         alert("Invalid Department, Levels below 3 must be General");
//         return false;
//     }
//     return true;
// }
// function SaveStudent(){
//     let form = document.getElementById("myForm");
//     let N = document.getElementById("name").value;
//     let ID = document.getElementById("id").value;
//     let L = document.getElementById("level").value;
//     let D = document.getElementById("dep").value;
//     let Gpa = document.getElementById("gpa").value;
//     let Gen = document.getElementById("gender").value;
//     let S = document.getElementById("status").value;
//     let Ph = document.getElementById("phone").value;
//     let Dob = document.getElementById("dob").value;
//     let Em = document.getElementById("email").value;
//     form.addEventListener("submit", function(){
//         let info = validate();
//         if(info){
//             let newstudent = new Student(N, ID, Dob, S, Gpa, Gen, L, D, Em, Ph);
//             Students.push(newstudent);
//             localStorage.setItem('Students', JSON.stringify(Students));
//         }
//     });
    
// }
