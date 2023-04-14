function validate(){
    const Form = document.getElementById("loginForm");
    Form.addEventListener('submit', function(event){
        event.preventDefault();
        let e = document.getElementById("email").value;
        let p = document.getElementById("pass").value;
        if(e == localStorage.getItem("AffairsEmail") && p == localStorage.getItem("AffairsPass")){
            window.location.href = 'HomePageSA.html';
        }
        else{
            alert("Invalid Account");
        }
    });
    
}

