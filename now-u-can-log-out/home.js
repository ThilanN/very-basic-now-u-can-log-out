if(!localStorage.getItem("currentUser")){
    alert("you dont have permission ,plese login first");
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
        document.getElementById(id="logoutBtn").classList.toggle("hidden");
    },6000 // 1min / 60 seconds
);
});

function logout(){
    window.localStorage.removeItem('currentUser');
    window.location.href = "login.html";
}
