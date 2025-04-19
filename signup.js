document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("signupForm");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        const userData = {
            firstName:document.getElementById("firstName").value,
            lastName:document.getElementById("lastName").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            confirmPassword:document.getElementById("confirmPassword").value,
        }
        console.log(userData)
    
        if (userData.password !== userData.confirmPassword){
            alert("passowrds are not matching");
            return;
        }
    
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Account created successfully!");
        window.location.href = "login.html";
    });
});


/*//with the help of onclick and a function
function signup(){
    const userData = {
        firstName:document.getElementById("firstName").value,
        lastName:document.getElementById("lastName").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        confirmPassword:document.getElementById("confirmPassword").value,
    };

    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Account created successfully!");
    window.location.href = "home.html";
}
    */