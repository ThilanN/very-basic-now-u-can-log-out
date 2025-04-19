document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("loginform");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        const EnterduserData = {
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
        }
        
        const savedUserData = JSON.parse(localStorage.getItem("userData"));

        if(!savedUserData){
            alert("no user found,please try again or sign up");
            return;
        }

        if(EnterduserData.email === savedUserData.email && EnterduserData.password === savedUserData.password){
            localStorage.setItem("currentUser", EnterduserData.email);
            alert("login successful!");
            window.location.href = "home.html";
        } else{
            alert("Invalid email or password please try again");
        }
    });
});