document.getElementById("registr").onclick = Registr;
function Registr() {
	var audio = new Audio('audio.mp3');
audio.play();
	let name = document.getElementById("text").value;
	let pass1 = document.getElementById("password").value;
	let pass2 = document.getElementById("pass2").value;
	if (name == 0 || pass1 == 0 || pass2 == 0) {
		alert("Enter your Phone number/email and password");
	}
	
	else if (pass1 != pass2) {
		alert("Passwords do not match, try again!");
	}
	else if (name != 0 || pass1 != 0 || pass1 < 8 || pass2 < 8 ) {
		alert("Your password shoud contain more than 8 characters");
	}
	else{
		alert("You have successfully registered!");
	}
	

}
