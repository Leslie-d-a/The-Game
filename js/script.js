var warriorName;
var name;
var gender;
var heShe;
var hisHer;
var day;
var yesNo;

function askWarriorInfo() {
	name = prompt("What will your warriors name be?");
	gender = prompt("What is your warriors gender? male/female ");
	gender = gender.toLowerCase();
	if (gender == "male") {
		heShe = "he"
		hisHer = "his"
	} 
	else {
		heShe = "she"
		hisHer = "her"
	}
	yesNo = prompt("Your warrior will be called " + name + ". Are you sure? yes/no");
	yesNo = yesNo.toLowerCase();
	return name
}

alert("Welcome to a great adventure!");

do {
	warriorName = askWarriorInfo();
	if (yesNo == "no") {
		alert("please enter a name again")
	}
} while (yesNo == "no")

document.write("<h1>" + warriorName + " starts a great adventure to see how long he can stay alive.</h1>");
document.write("<p>On " + warriorName + "'s first day " + heShe + " finds a sword. " + heShe + " shall take this weapon as " + hisHer + " starter weapon.</p>");
document.write("<p id=bad>" + warriorName + " encounters an enemy. What will " + heShe + " do?</p>");