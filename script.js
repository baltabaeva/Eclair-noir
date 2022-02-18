// Online Appointment 

document.getElementById("button").onclick = appointment;

function appointment() {


   let audio  = document.getElementById("audio").value;

	let select = document.getElementById("mySelect").value;    
	let name = document.getElementById("getName").value;
    let phone = document.getElementById("getphone").value;

   if (name == 0 || phone == 0) {
       alert("Enter name and phone number!");
   }
   else {
    let nameCount = name.length;
    let upperCase = name.slice(0,1);
    let lowerCase = name.slice(1,nameCount);
    let date = ["20.02.2022", "21.02.2022", "22.02.2022", "23.02.2022", "24.02.2022", "25.02.2022", "26.02.2022", "27.02.2022"];
    let random = date[Math.floor(Math.random() * date.length)];
    let time = ["14:00 p.m", "15:00 p.m", "16:00 p.m", "17:00 p.m", "18:00 p.m", "19:00 p.m"];
    let randomTime = time[Math.floor(Math.random() * time.length)];
	alert ("Hello, " + upperCase.toUpperCase() + lowerCase.toLowerCase() + " you have successfully signed up for " + select + "." + " You have an appointment for " + random + " at " + randomTime + ".");
}
}

