var warriorName;
var name;
var gender;
var heShe;
var hisHer;
var himHer;
var aAn;
var day = 1;
var yesNo;
var left;
var forward;
var right;
var pickedLeft = 0;
var pickedForward = 0;
var pickedRight = 0;
var foodType;
var foodState;


//creates new "p" element
function createPElement (text, direction) {
	var pElement = document.createElement("p");
	var pElementText = document.createTextNode(text);
	pElement.appendChild(pElementText);
	pElement.id = direction + day;
	document.getElementById("story").appendChild(pElement)
}

//creates new "h1" element
function createH1Element (text) {
	var pElement = document.createElement("h1");
	var pElementText = document.createTextNode(text);
	pElement.appendChild(pElementText);
	document.getElementById("story").appendChild(pElement)
}

//creates new "h2" element
function createH2Element (text) {
	var pElement = document.createElement("h2");
	var pElementText = document.createTextNode(text);
	pElement.appendChild(pElementText);
	document.getElementById("story").appendChild(pElement)
}

function determinePathColor (type, direction) {
	if (type == "enemy") {
		document.getElementById(direction + day).id = "enemy"
	}
	else if (type == "weapon") {
		document.getElementById(direction + day).id = "weapon"
	}
	else if (type == "food") {
		document.getElementById(direction + day).id = "food"
	}
	else if (type == "empty road") {
		document.getElementById(direction + day).id = "road"
	}
	else {
		document.getElementById(direction + day).id = "quest"
	}
}

function askWarriorInfo() {
	name = prompt("What will your warriors name be?");
	gender = prompt("What is your warriors gender? male/female ");
	gender = gender.toLowerCase();
	if (gender == "male") {
		heShe = "he"
		hisHer = "his"
		himHer = "him"
	} 
	else {
		heShe = "she"
		hisHer = "her"
		himHer = "her"
	}
	yesNo = prompt("Your warrior will be called " + name + " (" + gender + "). Are you sure? yes/no");
	yesNo = yesNo.toLowerCase();
	return name
}

function leftRandom() {
	left = Math.floor((Math.random() * 30) + 1);
	if ((left > 1) & (left < 8)) {
		left = "enemy"
		return "an enemy"
	}
	else if ((left > 8) & (left < 14)) {
		left = "weapon"
		return "a weapon"
	}
	else if ((left > 14) & (left < 22)){
		left = "food"
		return "some food"
	}
	else if ((left > 22) & (left < 28)) {
		left = "empty road"
		return "an empty road"
	}
	else {
		left = "person with a side quest"
		return "a person who has a side quest"
	}
}

function forwardRandom() {
	forward = Math.floor((Math.random() * 30) + 1);
	if ((forward >= 1) & (forward < 8)) {
		forward = "enemy"
		return "an enemy"
	}
	else if ((forward > 8) & (forward < 14)) {
		forward = "weapon"
		return "a weapon"
	}
	else if ((forward > 14) & (forward < 22)){
		forward = "food"
		return "some food"
	}
	else if ((forward > 22) & (forward <= 28)) {
		forward = "empty road"
		return "an empty road"
	}
	else {
		forward = "person with a side quest"
		return "a person who has a side quest"
	}
}

function rightRandom() {
	right = Math.floor((Math.random() * 30) + 1);
	if ((right >= 1) & (right < 8)) {
		right = "enemy"
		return "an enemy"
	}
	else if ((right > 8) & (right < 14)) {
		right = "weapon"
		return "a weapon"
	}
	else if ((right > 14) & (right < 22)){
		right = "food"
		return "some food"
	}
	else if ((right > 22) & (right <= 28)) {
		right = "empty road"
		return "an empty road"
	}
	else {
		right = "person with a side quest"
		return "a person who has a side quest"
	}
}

function foodPath() {
	createPElement("When " + warriorName + " gets there " + heShe + " finds " + foodRandom() + ".");

	if (foodState == "not rotten") {
		yesNo = prompt(warriorName + " finds " + aAn + " " + foodType + ". Will " + warriorName + " take the " + foodType + "? yes/no");
		yesNo = yesNo.toLowerCase();
	

		if (yesNo == "yes") {
			createPElement(warriorName + " decides to take the " + foodType + ".");
		}
	}
}

function foodRandom() {
	foodType = Math.floor(Math.random() * 4) + 1;	
	//returns apple or rotten apple
	if (foodType == 1) {
		foodType = Math.floor(Math.random() * 2) + 1;	
		if (foodType == 1) {
			foodState = "not rotten"
			foodType = "apple"
			aAn = "an"
			return "an apple"
		}
		else {
			return "a rotten apple and moves on"
		}
		
	}
	//returns banana or rotten apple
	else if (foodType == 2) {
		foodType = Math.floor(Math.random() * 2) + 1;	
		if (foodType == 1) {
			foodState = "not rotten"
			foodType = "banana"
			aAn = "a"
			return "a banana"
		}
		else {
			return "a rotten banana and moves on"
		}
	}
	//returns colorfull plant
	else {
		return "something " + heShe + " thought was food but is actually a colorfull plant"
	}
}

//chooses path on left

function leftButton(){
	createPElement(warriorName + " decides to walk left towards the " + left + ".");

	if (left == "food") {
		foodPath();
	}
	
	pickedRight = pickedLeft + 1;

	dayCycle();

	window.scrollTo(0,document.body.scrollHeight);
}

//chooses path in front

function forwardButton(){
	createPElement(warriorName + " decides to walk forward towards the " + forward + ".");

	if (forward == "food") {
		foodPath();
	}

	pickedForward = pickedForward + 1;

	dayCycle();

	window.scrollTo(0,document.body.scrollHeight);
}

//chooses path on right

function rightButton(){
	createPElement(warriorName + " decides to walk right towards the " + right + ".");

	if (right == "food") {
		foodPath();
	}

	pickedRight = pickedRight + 1;

	dayCycle();

	window.scrollTo(0,document.body.scrollHeight);
}


function dayCycle() {
	
	createH2Element("Day " + day);

	if (day<100) {
		createPElement("On " + hisHer + " left. " + warriorName + " sees " + leftRandom() + ".", "left");
		determinePathColor(left, "left");

		createPElement("Infront of " + himHer + ". " + warriorName + " sees " + forwardRandom() + ".", "forward");
		determinePathColor(forward, "forward");

		createPElement("On " + hisHer + " right. " + warriorName + " sees " + rightRandom() + ".", "right");
		determinePathColor(right, "right")

		//moves buttons down

		var d = document.getElementById("buttons");
		d.parentNode.appendChild(d);

		day = day + 1;
	} 

	//when you've reached 100 days

	else {
		createPElement("Congrats " + warriorName + " for making it to the end!!!");

		createPElement("You've picked left " + pickedLeft + " times.");

		createPElement("You've picked forward " + pickedForward + " times.");

		createPElement("You've picked right " + pickedRight + " times.");
	}
}


//creates story div

var divStory = document.createElement("div");
divStory.id = "story";
document.body.appendChild(divStory);

//creates buttons div

var divButtons = document.createElement("div");
divButtons.id = "buttons";
document.getElementById("story").appendChild(divButtons);

//creates button left

var button1 = document.createElement("button");
button1.onclick = function() {
	leftButton();
};
var button1Text = document.createTextNode("Walk Left");
button1.appendChild(button1Text);
document.getElementById("buttons").appendChild(button1);

//creates button forward

var button2 = document.createElement("button");
button2.onclick = function() {
	forwardButton();
};
var button2Text = document.createTextNode("Walk Forward");
button2.appendChild(button2Text);
document.getElementById("buttons").appendChild(button2);

//creates button right

var button3 = document.createElement("button");
button3.onclick = function() {
	rightButton();
};
var button3Text = document.createTextNode("Walk Right");
button3.appendChild(button3Text);
document.getElementById("buttons").appendChild(button3);




//asks warrior info

alert("Welcome to a great adventure!");

do {
	warriorName = askWarriorInfo();
	if (yesNo == "no") {
		alert("please enter a name again")
	}
} while (yesNo == "no")

//start of story

createH1Element(warriorName + " starts a great adventure to see if " + heShe + " can stay alive till day 100.");
createH1Element("On " + warriorName + "'s first day " + heShe + " finds a sword. " + heShe + " shall take this weapon as " + hisHer + " starter weapon.");

//starts the first day

dayCycle();