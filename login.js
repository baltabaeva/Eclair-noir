document.getElementById("login").onclick = login_1;

 function login_1(){


 	let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == 0 || password == 0) {
      alert("Enter username and password!")
    }
    else{
      alert(username  + ", you are successfully logged in!");
    }
 }
 document.getElementById("fpass").onclick = fPass;

 function fPass() {
   alert("We sent you a link to recover your password!");
 }