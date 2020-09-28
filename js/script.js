var warriorName;
var name;
var gender;
var heShe;
var hisHer;
var himHer;
var aAn;
var day = 1;
var yesNo;
var leftRight;
var left;
var forward;
var right;
var pickedLeft = 0;
var pickedForward = 0;
var pickedRight = 0;
var foodType;
var foodState;
var apples = 0;
var bananas = 0;
var maxPotions = 0;
var health = 100;
var hunger = 100;
var starving = false;
var hasSword = true;
var hasBow = false;
var hasBattleAxe = false;
var hasRock = false;
var textDelay = 2000;

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

//creates new "p" element
function createPElement (text, direction, idname) {
	var pElement = document.createElement("p");
	var pElementText = document.createTextNode(text);
	pElement.appendChild(pElementText);
	if (idname != undefined) {
		pElement.id = idname;
	}
	else if (direction != undefined) {
		pElement.id = direction + day;
	}
	else {
		pElement.id = "sentence"
	}
	document.getElementById("story").appendChild(pElement);
	window.scrollTo(0,document.body.scrollHeight);
}

//creates new "h1" element
function createH1Element (text, idname) {
	var h1Element = document.createElement("h1");
	var h1ElementText = document.createTextNode(text);
	h1Element.appendChild(h1ElementText);
	if (idname != undefined) {
		h1Element.id = idname;
	}
	else {
		h1Element.id = "title"
	}
	document.getElementById("story").appendChild(h1Element);
	window.scrollTo(0,document.body.scrollHeight);
}

//creates new "h2" element
function createH2Element (text) {
	var h2Element = document.createElement("h2");
	var h2ElementText = document.createTextNode(text);
	h2Element.appendChild(h2ElementText);
	document.getElementById("story").appendChild(h2Element);
	window.scrollTo(0,document.body.scrollHeight);
}

//creates an "img" element
function createImgElement (src) {
	var imgElement = document.createElement("img");
	imgElement.id = "character"
	imgElement.src = src
	document.getElementById("story").appendChild(imgElement);
	window.scrollTo(0,document.body.scrollHeight);
}

async function death(cause) {
	if (cause == "choice") {
		await sleep(textDelay);
		createH1Element("You have chosen the wrong option an let your warrior die. You've made it to day " + day + ". Press f5 to try again.", "bad");

	}
	else if (cause == "starved") {
		await sleep(textDelay);
		createH1Element("You have chosen the wrong option an let your warrior starve. You've made it to day " + day + ". Press f5 to try again.", "bad");
	}
}

async function eatFood() {
	if (hunger < 100) {
		await sleep(textDelay);
		createPElement(warriorName + " looks in " + hisHer + " bag to see what food " + heShe + " has.");
		await sleep(textDelay);
		createPElement(warriorName + " has " + apples + " apple(s) and " + bananas + " banana(s)");
		await sleep(textDelay);
		eat = prompt("What will " + warriorName + " eat? banana/apple");
		eat = eat.toLowerCase();
		if (eat == "banana") {
			await sleep(textDelay);
			createPElement(warriorName + " decides to eat a banana and gains 15 hunger.");
			bananas = bananas - 1;
			if (hunger + 15 > 100){
				hunger = 100;
			}
			else {
				hunger + 15;
			}
		}
		else {
			await sleep(textDelay);
			createPElement(warriorName + " decides to eat an apple and gains 15 hunger.");
			apples = apples - 1;
			if (hunger + 15 > 100){
				hunger = 100;
			}
			else {
				hunger + 15;
			}
		}
		await sleep(textDelay);
		createPElement(warriorName + " now has " + apples + " apple(s) and " + bananas + " banana(s)");
	}
	else {
		await sleep(textDelay);
		createPElement(warriorName + " has full hunger and closes " + hisHer + " bag.");
	}
	var d = document.getElementById("buttons");
	d.parentNode.appendChild(d);

	refreshStats();
}

function determinePathType (type, direction) {
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

async function enemyPath() {
	await sleep(textDelay);
	createPElement(warriorName + " encounters an enemy");
	dayCycle();
}

async function weaponPath() {
	await sleep(textDelay);
	createPElement(warriorName + " finds a weapon but can't take it yet");
	dayCycle();
}



function foodRandom() {
	foodType = Math.floor(Math.random() * 3) + 1;	
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
			foodState = "rotten"
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
			foodState = "rotten"
			return "a rotten banana and moves on"
		}
	}
	//returns colorfull plant
	else {
		foodState = "not food"
		return "something " + heShe + " thought was food but is actually a colorfull plant";
	}
}

async function foodPath() {
	await sleep(textDelay);
	createPElement("When " + warriorName + " gets there " + heShe + " finds " + foodRandom() + ".");
	if (foodState == "not rotten") {
		await sleep(textDelay);
		yesNo = prompt(warriorName + " finds " + aAn + " " + foodType + ". Will " + warriorName + " take the " + foodType + "? yes/no");
		yesNo = yesNo.toLowerCase();

		if (yesNo == "yes") {
			await sleep(textDelay);
			createPElement(warriorName + " decides to take the " + foodType + ".");
			if (foodType == "apple") {
				apples = apples + 1;
				if (apples == 1) {
					await sleep(textDelay);
					createPElement(warriorName + " now has " + apples + " apple.");
				}
				else {
					await sleep(textDelay);
					createPElement(warriorName + " now has " + apples + " apples.");
				}
			}
			else if (foodType == "banana") {
				bananas = bananas + 1;
				if (bananas == 1) {
					await sleep(textDelay);
					createPElement(warriorName + " now has " + bananas + " banana.");
				}
				else {
					await sleep(textDelay);
					createPElement(warriorName + " now has " + bananas + " bananas.");
				}
			} 
			else {

			}
		}
	}
	dayCycle();
}

async function roadPath() {
	await sleep(textDelay);
	createPElement(warriorName + " found nothing while walking on the road.");
	dayCycle();
}

async function quest1() {
	await sleep(textDelay);
	createH1Element("The quest to save the lost friend of Theodre Olasatra");
	await sleep(textDelay);
	createImgElement("pictures/Theodre Olasatra.png");
	await sleep(textDelay);
	createPElement("Theodre Olasatra: Hello warrior my name is Theodre Olasatra and i have lost my friend Aimon Elyra and he might be this cave.");
	await sleep(textDelay);
	createPElement("Theodre Olasatra: It is way too dangerous for me to go in as i don't have any weapons.");
	await sleep(textDelay);
	createPElement("Theodre Olasatra: If you decide to help me, i will give you a health potion that heals you to full health.");
	await sleep(textDelay);
	createPElement("Theodre Olasatra: Will you help me?");
	await sleep(textDelay);
	yesNo = prompt("Theodre Olasatra asks if you will help him find his friend. will you help him? yes/no");
	yesNo = yesNo.toLowerCase();
	if (yesNo == "yes") {
		await sleep(textDelay);
		createPElement(warriorName + " decides to help Theodre Olasatra");
		await sleep(textDelay);
		createPElement("Theodre Olasatra: Thank you so much!!!");
		await sleep(textDelay);
		createPElement("Theodre Olasatra: Good luck warrior!!! (Kindness +10)");
		await sleep(textDelay);
		createPElement(warriorName + " walks towards the entrance of the cave and sees a note hanging there.");
		await sleep(textDelay);
		createPElement("The note reads:");
		await sleep(textDelay);
		createPElement("'Beware this is a very dangerous cave. you will need a decent amount of gear to get out alive again. proceed with caution'", undefined, "note");
		await sleep(textDelay);
		createPElement(warriorName + " enters the cave which is very damp.");
		await sleep(textDelay);
		createPElement(heShe + " wanders further into the depths of the cave.");
		await sleep(textDelay);
		createPElement("Around two minutes of walking through a small tunnel the cave gets wider and splits up into two tunnels.");
		await sleep(textDelay);
		createPElement("On " + hisHer + " left " + warriorName + " sees a dark tunnel.");
		await sleep(textDelay);
		createPElement("On " + hisHer + " right " + warriorName + " hears some faint noises");
		await sleep(textDelay);
		leftRight = prompt("Which side will " + warriorName + " decide to go? left/right");
		leftRight = leftRight.toLowerCase();
		if (leftRight == "left") {
			await sleep(textDelay);
			createPElement(warriorName + " decides to take the left tunnel.");
			await sleep(textDelay);
			createPElement("After around a minute of walking " + heShe + " finds out it's a dead end so " + heShe + " walks back to take the other tunnel.");
			await sleep(textDelay);
			createPElement("After yet another minute " + warriorName + " makes it back to the split an takes the other tunnel.");
			leftRight = "right"
			await sleep(textDelay);
			createPElement(heShe + " decides to take the right tunnel.");
		} 
		else {
			await sleep(textDelay);
			createPElement(warriorName + " decides to take the right tunnel.");
		}
		if (leftRight == "right") {
			await sleep(textDelay);
			createPElement(warriorName + " walks into the tunnel which seems endless and is very cold");
			await sleep(textDelay);
			createPElement("After around 10 minutes of walking " + warriorName + " finds a large rock.", undefined, "item");
			await sleep(textDelay);
			yesNo = prompt("Will " + warriorName + " take the large rock? yes/no");
			yesNo = yesNo.toLowerCase();
			if (yesNo == "yes") {
				await sleep(textDelay);
				createPElement(warriorName + " decides to take the large rock.");
				hasRock = true;
			} 
			else {
				await sleep(textDelay);
				createPElement(warriorName + " decides to leave the large rock");
			}
			await sleep(textDelay);
			createPElement(heShe + " moves on to find another split in the cave.");
			await sleep(textDelay);
			leftRight = prompt("Which side will " + warriorName + " decide to go? left/right");
			leftRight = leftRight.toLowerCase();
			if (leftRight == "left"){
				await sleep(textDelay);
				createPElement(heShe + " decides to take the left tunnel.");
				await sleep(textDelay);
				createPElement("After a bit of " + warriorName + " hears a faint scream and ups the pace.");
				await sleep(textDelay);
				createPElement("Not long after the scream there is a room that splits into three tunnels.");
				await sleep(textDelay);
				leftRight = prompt("Which side will " + warriorName + " decide to go? left/middle/right");
				leftRight = leftRight.toLowerCase();
				if (leftRight == "left") {
					await sleep(textDelay);
					createPElement(heShe + " decides to take the left tunnel.");
					await sleep(textDelay);
					createPElement(warriorName + " runs into the tunnel thinking it was the right one.");
					await sleep(textDelay);
					createPElement("But not long after " + heShe + " started running " + heShe + " falls into a deep hole dying from the impact.");
					death();
					return
				}
				else if (leftRight == "middle"){
					await sleep(textDelay);
					createPElement(heShe + " decides to take the middle tunnel.");
					await sleep(textDelay);
					createPElement(warriorName + " runs into the tunnel thinking it was the right one.");
					await sleep(textDelay);
					createPElement("But what " + heShe + " didn't realize is that " + heShe + " ran straight into an underground enemy camp.");
					await sleep(textDelay);
					createPElement(warriorName + " manages to kill a few but after 5 minutes of fighting the amount of enemies gets too much and " + heshe + " dies from the many stab wounds.");
					death();
					return
				}
				else {
					await sleep(textDelay);
					createPElement(heShe + " decides to take the right tunnel.");
					await sleep(textDelay);
					createPElement(warriorName + " runs into the tunnel thinking it was the right one.");
					await sleep(textDelay);
					createPElement("Which it was because " + heShe + " hears another scream from the tunnel.");
					await sleep(textDelay);
					createPElement(warriorName + " turns up the pace even more sprinting towards the scream.");
					await sleep(textDelay);
					createPElement("When " + heShe + " gets there " + heShe + " is in a small room with multiple cells.");
					await sleep(textDelay);
					createPElement("I one of the cells was Theodre Olasatra's friend Aimon Elyra screaming for help.");
					await sleep(textDelay);
					createPElement(warriorName + " sees there is a lock on the door.");
					if (hasRock == true) {
						await sleep(textDelay);
						createPElement(heShe + " grabs the rock " + heShe + " found a bit ago and smashes the lock with it.");
						await sleep(textDelay);
						createPElement("Aimon Elyra barges out of the cell thanking " + warriorName);
						await sleep(textDelay);
						createImgElement("pictures/Aimon Elyra.png");
						await sleep(textDelay);
						createPElement("Aimon Elyra: Thank you ow so much!");
						await sleep(textDelay);
						createPElement("Aimon Elyra: Did Theodre send you?");
						await sleep(textDelay);
						createPElement("Aimon Elyra: Doesn't matter, help me get the hell out of here!");
						await sleep(textDelay);
						createPElement("Aimon Elyra: I was captured by those stupid orcs for no reason.");
						await sleep(textDelay);
						createPElement("Aimon Elyra: Anyway how do we get out.");
						await sleep(textDelay);
						createPElement(warriorName + " gives Aimon the rock and they start walking towards the exit of the cave.");
						await sleep(textDelay);
						createPElement("On their way to the exit they encount a few orcs which get angry very quick");
						await sleep(textDelay);
						createPElement("Aimon bashes one in the head with the rock and " + warriorName + " kills the remaing two with " + hisHer + " sword losing 10 hp");
						health = health - 10;
						await sleep(textDelay);
						createPElement(warriorName + " and Aimon make it to the exit with just a few minor cuts.");
						await sleep(textDelay);
						createPElement("When they get outside they get meet by Theodre who is clearly very happy to see his friend again.");
						await sleep(textDelay);
						createImgElement("pictures/Theodre Olasatra.png");
						await sleep(textDelay);
						createPElement("Theodre Olasatra: You have saved my friend!!!");
						await sleep(textDelay);
						createPElement("Theodre Olasatra: Thank you so much!!! and as a reward here is a max healt potion.");
						maxPotions = maxPotions + 1;
						await sleep(textDelay);
						createPElement(warriorName + " now has " + maxPotions + " max healt potions.");
						await sleep(textDelay);
						createPElement("Aimon thanks " + warriorName + " again and they walk off on a small dirt path.");
						await sleep(textDelay);
						createH1Element("The quest to save the lost friend of Theodre Olasatra (COMPLETED)", "good");

					}
					else {
						await sleep(textDelay);
						createPElement(warriorName + " doesn't have anything to open the lock with.");
						await sleep(textDelay);
						createPElement(heShe + " remembers the rock that was laying on the floor");
						await sleep(textDelay);
						createPElement(warriorName + " comforts Aimon Elyra and goes back to grab the rock.");
						await sleep(textDelay);
						createPElement("On " + hisHer + " way back " + warriorName + " hears to voices coming from another tunnel.");
						await sleep(textDelay);
						createPElement("Not long after that a large group of enemies walk straight into " + himHer + ".");
						await sleep(textDelay);
						createPElement(warriorName + " tries to win the battle but loses the large group of enemies.");
						death();
						return
					}
				}
			}
			else {
				await sleep(textDelay);
				createPElement(heShe + " decides to take the right tunnel.");
				await sleep(textDelay);
				createPElement(warriorName + " hears a noise");
				await sleep(textDelay);
				createPElement("Before " + heShe + " can turn around " + heShe + " gets jumped by three enemies");
				await sleep(textDelay);
				createPElement("After a bit of struggle " + heShe + " loses the battle and dies");
				death();
				return
			}
		}
	}
	else {
		await sleep(textDelay);
		createPElement("Theodre Olasatra: Well that's a bit of a dissapointment.");
		await sleep(textDelay);
		createPElement("Theodre Olasatra: Oh well good luck on your survival warrior. (Kindness -10)");
	}
	dayCycle();
}

async function quest2() {
	await sleep(textDelay);
	createH1Element("Quest2");
	dayCycle();
}

async function quest3() {
	await sleep(textDelay);
	createH1Element("Quest3");
	dayCycle();
}

function questRandom() {
	questType = Math.floor(Math.random() * 3) + 1;
	if (questType == 1) {
		quest1();
	}
	else if (questType == 2) {
		quest2();
	}
	else {
		quest3();
	}
}

async function questPath() {
	await sleep(textDelay);
	createPElement("Once " + warriorName + " gets to the person " + heShe + " asks what the person needs help with.");
	questRandom();
}

function pathAction(type) {
	if (type == "enemy") {
		enemyPath();
	}
	else if (type == "weapon") {
		weaponPath();
	}
	else if (type == "food") {
		foodPath();
	}
	else if (type == "empty road") {
		roadPath();
	}
	else if (type == "person with a side quest") {
		questPath();
	}
	else {
		createPElement("something went wrong");
	}
}

//chooses path on left

async function leftButton() {
	createPElement(warriorName + " decides to walk left towards the " + left + ".");
	pathAction(left);
	
	pickedLeft = pickedLeft + 1;
}

//chooses path in front

async function forwardButton(){
	createPElement(warriorName + " decides to walk forward towards the " + forward + ".");
	pathAction(forward);

	pickedForward = pickedForward + 1;
}

//chooses path on right

async function rightButton(){
	createPElement(warriorName + " decides to walk right towards the " + right + ".");
	pathAction(right);

	pickedRight = pickedRight + 1;
}


async function dayCycle() {
	await sleep(textDelay);
	createH2Element("Day " + day);

	if (health < 1) {
		death("hunger");
		return
	}

	if (day<100) {
		await sleep(textDelay);
		createPElement("On " + hisHer + " left. " + warriorName + " sees " + leftRandom() + ".", "left");
		determinePathType(left, "left");

		await sleep(textDelay);
		createPElement("Infront of " + himHer + ". " + warriorName + " sees " + forwardRandom() + ".", "forward");
		determinePathType(forward, "forward");

		await sleep(textDelay);
		createPElement("On " + hisHer + " right. " + warriorName + " sees " + rightRandom() + ".", "right");
		determinePathType(right, "right");

		//moves buttons down

		var d = document.getElementById("buttons");
		d.parentNode.appendChild(d);

		if (day != 1){
			if (hunger > 0) {
				hunger = hunger - 10
			}
			else {
				starving = true
			}

			if (starving == true) {
				health = health - 10
			}
		}
		
		refreshStats();

		day = day + 1;
	} 

	//when you've reached 100 days

	else {
		await sleep(textDelay);
		createPElement("Congrats " + warriorName + " for making it to the end!!!");
		await sleep(textDelay);
		createPElement("You've picked left " + pickedLeft + " times.");
		await sleep(textDelay);
		createPElement("You've picked forward " + pickedForward + " times.");
		await sleep(textDelay);
		createPElement("You've picked right " + pickedRight + " times.");
		await sleep(textDelay);
		if (apples = 1){
			createPElement(warriorName + " had " + apples + " apple left.");
		}
		else {
			createPElement(warriorName + " had " + apples + " apples left.");
		}
		await sleep(textDelay);
		if (bananas = 1){
			createPElement(warriorName + " had " + bananas + " banana left.");
		}
		else {
			createPElement(warriorName + " had " + bananas + " bananas left.");
		}
	}
}

function refreshStats() {
	if (day > 1){
		//removes stats div if there is one

		var element = document.getElementById("stats");
    	element.parentNode.removeChild(element);
	}
	
	//creates stats div

	var divStats = document.createElement("div");
	divStats.id = "stats";
	document.getElementById("story").appendChild(divStats);

	//creates health stat

	var pElement = document.createElement("p");
	var pElementText = document.createTextNode("health: " + health + " hp.");
	pElement.appendChild(pElementText);
	document.getElementById("stats").appendChild(pElement);

	var pElement = document.createElement("p");
	var pElementText = document.createTextNode("hunger: " + hunger);
	pElement.appendChild(pElementText);
	document.getElementById("stats").appendChild(pElement);
}

async function startGame(){
	//creates story div

	var divStory = document.createElement("div");
	divStory.id = "story";
	document.body.appendChild(divStory);

	//creates buttons div

	var divButtons = document.createElement("div");
	divButtons.id = "buttons";
	document.getElementById("story").appendChild(divButtons);
	
	//asks warrior info

	alert("Welcome to a great adventure!");

	do {
		warriorName = askWarriorInfo();
		if (yesNo == "no") {
			alert("please enter a name again")
		}
	} while (yesNo == "no")

	//start of game

	createH1Element(warriorName + " starts a great adventure to see if " + heShe + " can stay alive till day 100.");
	await sleep(textDelay)
	createH1Element("On " + warriorName + "'s first day " + heShe + " finds a sword. " + heShe + " shall take this weapon as " + hisHer + " starter weapon.");

	//starts the first day

	await dayCycle();

	await sleep(textDelay);

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


	//creates eat button

	var button4 = document.createElement("button");
	button4.onclick = function() {
		eatFood();
	};
	var button4Text = document.createTextNode("Eat Food");
	button4.appendChild(button4Text);
	document.getElementById("buttons").appendChild(button4);


}

startGame();
