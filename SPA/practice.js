//var hasBeenClicked = false;
//jQuery('#id').click(function () {
 //   hasBeenClicked = true;
//});

//if (hasBeenClicked) {
    // The link has been clicked.
//} else {
    // The link has not been clicked.
//}




var characterInputs = [
	{"NEW NAME" : updatePlayerName}, 
	{"ENGAGE" : engage}, 
	{"HELP" : help}, 

	{"MOVE SOUTH" : moveSouth}, 
	{"MOVE NORTH" : moveNorth}, 
	{"MOVE EAST" : moveEast}, 
	{"MOVE WEST" : moveWest},

	{"PICK UP SWORD" : pickUpSword},
	{"PICK UP TORCH" : pickUpTorch},
	{"PICK UP CLOAK" : pickUpCloak},
	{"PICK UP KEY" : pickUpKey},
	{"PICK UP DAGGER" : pickUpDagger},
	{"PICK UP RUBY" : pickUpRuby},
	{"PICK UP BREAD" : pickUpBread},
	{"PICK UP WINE" : pickUpWine},
	{"PICK UP MIRROR" : pickUpMirror},

	{"USE SWORD" : useSword},
	{"USE TORCH" : useTorch},
	{"USE CLOAK" : useCloak},
	{"USE KEY" : useKey},
	{"USE DAGGER" : useDagger},
	{"USE RUBY" : useRuby},
	{"USE BREAD" : useBread},
	{"USE WINE" : useWine},
	{"USE MIRROR" : useMirror},
];

var userInput = [];

var newPlayer = {
	locationX: 2,
	locationY: 1,
	inventory: [],
	name: null
}



function updateName(newName) {
	newPlayer.name = newName;
}

function updatePlayerName() {
	newPlayer.name = prompt("Enter Name"); 
	console.log(newPlayer.name);
	$("<p>Welcome, " + newPlayer.name + "!</p>").insertBefore("#placeholder").fadeIn(1000);
}

function help() {
	$("#messageHelp").clone().insertBefore("#placeholder").fadeIn(1000);
}

function engage() {
	if (currentLocation == "s_gate") {
			$("<p>The southern gate of the Castle looms above you. The wind is quiet and no danger is in sight. MOVE NORTH to reach the Castle entrance, and keep your sword close.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else if (currentLocation == "s_west") {
			$("<p>The southwestern corner of this realm is known for its vengeful spirits. A wail strikes the wind and your heart seizes. A shadow whips around you. Stories say the spirits in this realm are afraid of nothing but their own reflection. With stiff limbs you reach into your satchel praying to find a mirror.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else if (currentLocation == "s_east") {
			$("<p>The southeastern corner is home to the humans of this realm. You hear the sounds of industrious life all around you, and long for the home you left behind.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else if (currentLocation == "castle"){
			$("<p>The Castle is more remarkable than you could have imagined. The entrance is finely carved with curiosities of the realm - Spirits, ogres, and treasures you've only heard of in legend. You wish to enter, but the door is locked.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else if (currentLocation == "west") {
			$("<p>The day is at its end and the western realm is dark. Your surroundings are blurred by the setting sun, leaving you vulnerable to creatures unknown.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else if (currentLocation == "east") {
			$("<p>The eastern sunrise is stunning, but your hunger is consuming you.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else if (currentLocation == "n_west") {
			$("<p>The northwestern corner of this realm is marked with bare treasure coves, all raided long ago by creatures seeking riches. It is now home to the ogres, hostile beasts motivated by hunger and greed. The ground shakes beneath you, and you know an ogre has caught your scent. You have three choices: Try to strike him with your sword, pierce his eyes with your dagger, or buy his mercy with your ruby...</p>").insertBefore("#placeholder").fadeIn(1000);
		} else if (currentLocation == "n_gate") {
			$("<p>You have strayed far from your entry into this realm, and you feel your journey coming to an end. Your thirst is as acute as your desire for a safe haven, and you search in your satchel for something to drink.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else if (currentLocation == "n_east") {
			$("<p>The northeastern corner of this realm is deathly cold. You've heard tales of the ghosts trapped here, frozen from the inside out and eternally searching for the warmth of the living. One such ice creature is making its way towards you in the distance. You have time for just one move: wrap yourself in a warm layer to save yourself from freezing, or brandish your sword against the enemy.</p>")
		}
}


function moveSouth() {
	newPlayer.locationY = newPlayer.locationY - 1;
	//location conditionals 
	console.log(newPlayer.locationY);
}

function moveNorth() {
	newPlayer.locationY = newPlayer.locationY + 1;
	//location conditionals 

}

function moveEast() {
	newPlayer.locationX = newPlayer.locationX + 1;
	//location conditionals 

}

function moveWest() {
	newPlayer.locationX = newPlayer.locationX - 1;
	//location conditionals 
	
}




function updateInventory() {
	$(".inventory li").remove();
		newPlayer.inventory.forEach( function (el) {
			$(".inventory").append("<li>" + el + "</li>");
		});
}

function pickUpSword() {
	if (currentLocation == "s_gate") {
			// newPlayer.inventory.push("Sword");
			newPlayer.inventory.push("Sword")
			updateInventory();
			$("<p>You picked up the sword. The weight of it feels powerful, and you are emboldened to explore the world around you. Move NORTH, SOUTH, EAST, or WEST.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else {
			$("<p>The sword is not here. Proceed to the South Gate to find the sword, or continue to explore.</p>").insertBefore("#placeholder");
		}
}

function pickUpTorch() {
	if (currentLocation == "west") {
		newPlayer.inventory.push("Torch");
		updateInventory();
		$("<p>You picked up the torch, desperate for light.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
	} else {
		$("<p>The torch is not here. Proceed to the West to find the torch, or continue to explore.</p>").insertBefore("#placeholder");
	} 
}

function pickUpCloak() {
	if(currentLocation == "n_east") {
		newPlayer.inventory.push("Cloak");
		updateInventory();	
		$("<p>You picked up the cloak.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
	} else {
		$("<p>The cloak is not here. Proceed to the northwest for an extra layer of protection, or continue to explore.</p>").insertBefore("#placeholder");
	}
}

function pickUpKey() {
	if(currentLocation == "castle") {
		newPlayer.inventory.push("Key");
		updateInventory();
		$("<p>You picked up the key, and are compelled to engage with your surroundings before entering the Castle.</p>").insertBefore("#placeholder").fadeIn(1000);
		} else {
			$("<p>The key is not here. Proceed to the Castle to find the key, or continue to explore.</p>").insertBefore("#placeholder");
		} 
}

function pickUpDagger() {
	if(currentLocation == "s_east") {
		newPlayer.inventory.push("Dagger");
		updateInventory();	
		$("<p>You picked up the dagger.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
	} else {
		$("<p>The dagger is not here. Proceed to the southeast for a weapon, or continue to explore.</p>").insertBefore("#placeholder");
	}
}

function pickUpRuby() {
	if(currentLocation == "n_west") {
		newPlayer.inventory.push("Ruby");
		updateInventory();	
		$("<p>You picked up the ruby, and are compelled to engage with your surroundings before moving on.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
	} else {
		$("<p>The ruby is not here. Proceed to the northwest to find treasure, or continue to explore.</p>").insertBefore("#placeholder");
	}
}

function pickUpBread() {
	if(currentLocation == "east") {
		newPlayer.inventory.push("Bread");
		updateInventory();
		$("<p>You picked up the bread, weak with hunger.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
	} else {
		$("<p>The bread is not here. Proceed to the East to find food, or continue to explore.</p>").insertBefore("#placeholder");
	}	
}

function pickUpWine() {
	if(currentLocation == "n_gate") {
		newPlayer.inventory.push("Wine");
		updateInventory();	
		$("<p>You picked up the wine.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
	} else {
		$("<p>The wine is not here. Proceed to the Northern Gate to quench your thirst, or continue to explore.</p>").insertBefore("#placeholder");
	}
}

function pickUpMirror() {
	if (currentLocatino == "s_west") {
		newPlayer.inventory.push("Mirror");
		updateInventory();	
		$("<p>You picked up the mirror, and are compelled to engage with your surroundings before moving on.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
	} else {
		$("<p>The mirror is not here. Proceed to the southwest to see your reflection, or continue to explore.</p>").insertBefore("#placeholder");
	}
}


///// USE FUNCTIONS /////

        //REMOVE ITEMS FROM INVENTORY ARRAY
        function removeItem(array, item) {
		    for(var i in array) {
		        if(array[i]==item){
		            array.splice(i,1);

		            break;
            	}
    		}
		}


function useSword() {
	removeItem(newPlayer.inventory, "Sword");
	updateInventory();
	console.log(newPlayer.inventory);
	$("<p>You wield your sword against your enemy. The blade strikes him and he slows, but does not die. Run!</p>").insertBefore("#placeholder").fadeIn(1000);
}

function useTorch() {
	removeItem(newPlayer.inventory, "Torch");
	updateInventory();
	$("<p>You light the torch to illuminate your path, and continue to explore.</p>").insertBefore("#placeholder").fadeIn(1000);
}

function useCloak() {
	removeItem(newPlayer.inventory, "Cloak");
	updateInventory();
	$("<p>You pull the cloak from your satchel and wrap it around your body. You can feel your strength return.</p>").insertBefore("#placeholder").fadeIn(1000);
}

function useKey() {
	removeItem(newPlayer.inventory, "Key");
	updateInventory();
	$("<p>You grasp the heavy key in both hands and turn it in the expertly crafted lock. It clicks open, you enter. A castle guard is stationed directly inside, poised for battle. You have three choices, run, bribe, or fight.</p>").insertBefore("#placeholder").fadeIn(1000);
}

function useDagger() {
	removeItem(newPlayer.inventory, "Dagger");
	updateInventory();
	$("<p>You grip the dagger and bury it into your enemy's good eye. He bellows in pain, and falls to the ground, clutching his face. You have time to escape!</p>").insertBefore("#placeholder").fadeIn(1000);
}

function useRuby() {
	removeItem(newPlayer.inventory, "Ruby");
	updateInventory();
	$("<p>Reluctantly, you reveal the ruby and offer it to your enemy. Their greed is enough to spare you, this time.</p>").insertBefore("#placeholder").fadeIn(1000);
}

function  useBread() {
	removeItem(newPlayer.inventory, "Bread");
	updateInventory();
	$("<p>You savor the bread slowly, and feel your strength return. Continue to explore.</p>").insertBefore("#placeholder").fadeIn(1000);
}

function useWine() {
	removeItem(newPlayer.inventory, "Wine");
	updateInventory();
	$("<p>You drink your wine with relief. Continue to explore.</p>").insertBefore("#placeholder").fadeIn(1000);
}

function useMirror() {
	removeItem(newPlayer.inventory, "Mirror");
	updateInventory();
	$("<p>You pull the mirror from your satchel and thrust it towards the spirit. It shrieks at the sight of its own reflection and retreats, leaving a trail of dust in its path.</p>").insertBefore("#placeholder").fadeIn(1000);
}


//START LOCATION

var currentLocation = $("#library");


$(document).ready(function () {



	//Fade in inventory and map
	$(".inventory").fadeIn(1000);
	$(".map").fadeIn(1000);

	//Transfer blue highlight to clicked room
	$(".rooms").click(function(){
		var roomClicked = this;
		currentLocation = roomClicked;
		console.log(roomClicked);
		$(".rooms").removeClass("mapArrival");
		$(roomClicked).addClass("mapArrival");
		// $(".map").fadeOut();

	$(".backToLibrary").click(function(){
	
	});
	});



	$("form").submit(function(e){
		e.preventDefault();


		//ANIMATE SCROLL
		var $console = $('#console');
		$console.animate({ scrollTop: $console[0].scrollHeight }, "slow");

		//CLEAR MAP --- Need this to fire every move, not every form submit
		function clearMap() {
			$(".rooms").removeClass("mapArrival");
		}



		////NAVIGATE MAP////


		var arriveNorthwest = "<p>You are now at the northwestern corner of this world. You've heard legends of treasures in this realm, and peel your eyes for riches around you. Against all odds, a faint red glow is flickering against a tree root nearby. A ruby!</p>";
		arriveNorthGate = "<p>You are now at the northern gate of the Castle. Your journey has made you thirsty. A wine cellar is beyond the northern Castle grounds, and you see an unattended wagon stacked with flasks of wine.</p>";
		arriveNortheast = "<p>You are now at northeastern corner of this world. There is a chill in the north, and you see a cast-off cloak waiting for you the road.</p>";
		arriveWest = "<p>You are now at the western most territory of this world. The sun is setting, and you find a torch to light the way.</p>";
		arriveCastle = "<p>You are now at the foot of the Castle. You feel a fleeting pull at your hem and turn around to find someone has left an intricate key at your feet.</p>";
		arriveEast = "<p>You are now at the eastern most territory of this world. The sun is rising, and you feel an aching hunger. A baker in the East Market is giving away last week's bread, and the stale scent draws you there.</p>";
		arriveSouthwest = "<p>You are now at the southwestern corner of this world. The sun catches the surface of a small, flickering mirror on your path.</p>";
		arriveSouthGate = "<p>You are now at the Southern Gate of the Castle grounds. You see a glint of light obscured in the soil and crouch towards it, wiping away the leaves and earth to find ... a sword!</p>";
		arriveSoutheast = "<p>You are now at the southeastern corner of this world. In a clearing you see a young girl pantomiming a knight in battle. She is clutching a small hunting dagger in her hand, which she drops and kicks away at the sound of someone calling her home.</p>";
		outerLimits = "<p>You've reached the outer limits of this world. Explore in another direction.</p>";

		



		//MOVE NORTH
		if (input == "MOVE NORTH" && currentLocation == "s_gate") {
			clearMap();
			currentLocation = "castle";
			$("#castle").addClass("mapArrival");
			$(arriveCastle).insertBefore("#placeholder");
			
		} else if (input == "MOVE NORTH" && currentLocation == "s_west") {
			clearMap();
			currentLocation = "west";
			$(arriveWest).insertBefore("#placeholder");
			$("#west").addClass("mapArrival");
			
		} else if (input == "MOVE NORTH" && currentLocation == "s_east") {
			clearMap();
			currentLocation = "east";
			$(arriveEast).insertBefore("#placeholder");
			$("#east").addClass("mapArrival");
			
		} else if (input == "MOVE NORTH" && currentLocation == "west") {
			clearMap();
			currentLocation = "n_west";
			$(arriveNorthwest).insertBefore("#placeholder");
			$("#northWest").addClass("mapArrival");
			
		} else if (input == "MOVE NORTH" && currentLocation == "east") {
			clearMap();
			currentLocation = "n_east";
			$(arriveNortheast).insertBefore("#placeholder");
			$("#northEast").addClass("mapArrival");
			
		} else if (input == "MOVE NORTH" && currentLocation == "castle") {
			clearMap();
			currentLocation = "n_gate";
			$(arriveNorthGate).insertBefore("#placeholder");
			$("#northGate").addClass("mapArrival");
			
		} else if (input == "MOVE NORTH" && (currentLocation == "n_west" || "n_gate" || "n_east")) {
			$(outerLimits).insertBefore("#placeholder");
		
		}

		

		//MOVE EAST
		if (input == "MOVE EAST" && currentLocation == "s_gate") {
			clearMap();
			currentLocation = "s_east";
			$(arriveSoutheast).insertBefore("#placeholder");
			$("#southEast").addClass("mapArrival");
			
		} else if (input == "MOVE EAST" && currentLocation == "s_west") {
			clearMap();
			currentLocation = "s_gate";
			$(arriveSouthGate).insertBefore("#placeholder");
			$("#southGate").addClass("mapArrival");
			
		} else if (input == "MOVE EAST" && currentLocation == "west") {
			clearMap();
			currentLocation = "castle";
			$(arriveCastle).insertBefore("#placeholder");
			$("#castle").addClass("mapArrival");
			
		} else if (input == "MOVE EAST" && currentLocation == "castle") {
			clearMap();
			currentLocation = "east";
			$(arriveEast).insertBefore("#placeholder");
			$("#east").addClass("mapArrival");
			
		} else if (input == "MOVE EAST" && currentLocation == "n_west") {
			clearMap();
			currentLocation = "n_gate";
			$(arriveNorthGate).insertBefore("#placeholder");
			$("#northGate").addClass("mapArrival");
			
		} else if (input == "MOVE EAST" && currentLocation == "n_gate") {
			clearMap();
			currentLocation = "n_east";
			$(arriveNortheast).insertBefore("#placeholder");
			$("#northEast").addClass("mapArrival");
			
		} else if (input == "MOVE EAST" && (currentLocation == "s_east" || "east" || "n_east")) {
			$(outerLimits).insertBefore("#placeholder");

		}
		

		//MOVE SOUTH
		if (input == "MOVE SOUTH" && currentLocation == "west") {
			clearMap();
			currentLocation = "s_west";
			$(arriveSouthwest).insertBefore("#placeholder");
			$("#southWest").addClass("mapArrival");
			
		} else if (input == "MOVE SOUTH" && currentLocation == "castle") {
			clearMap();
			currentLocation = "s_gate";
			$(arriveSouthGate).insertBefore("#placeholder");
			$("#southGate").addClass("mapArrival");
			
		} else if (input == "MOVE SOUTH" && currentLocation == "east") {
			clearMap();
			currentLocation = "s_east";
			$(arriveSoutheast).insertBefore("#placeholder");
			$("#southEast").addClass("mapArrival");
			
		} else if (input == "MOVE SOUTH" && currentLocation == "n_west") {
			clearMap();
			currentLocation = "west";
			$(arriveWest).insertBefore("#placeholder");
			$("#west").addClass("mapArrival");
			
		} else if (input == "MOVE SOUTH" && currentLocation == "n_gate") {
			clearMap();
			currentLocation = "castle";
			$(arriveCastle).insertBefore("#placeholder");
			$("#castle").addClass("mapArrival");
			
		} else if (input == "MOVE SOUTH" && currentLocation == "n_east") {
			clearMap();
			currentLocation = "east";
			$(arriveEast).insertBefore("#placeholder");
			$("#east").addClass("mapArrival");
			
		} else if (input == "MOVE SOUTH" && (currentLocation == "s_east" || "s_gate" || "s_west")) {
			$(outerLimits).insertBefore("#placeholder");

		}

		//MOVE WEST
		if (input == "MOVE WEST" && currentLocation == "s_gate") {
			clearMap();
			currentLocation = "s_west";
			$(arriveSouthwest).insertBefore("#placeholder");
			$("#southWest").addClass("mapArrival");
			
		} else if (input == "MOVE WEST" && currentLocation == "s_east") {
			clearMap();
			currentLocation = "s_gate";
			$(arriveSouthGate).insertBefore("#placeholder");
			$("#southGate").addClass("mapArrival");
			
		} else if (input == "MOVE WEST" && currentLocation == "castle") {
			clearMap();
			currentLocation = "west";
			$(arriveWest).insertBefore("#placeholder");
			$("#west").addClass("mapArrival");
			
		} else if (input == "MOVE WEST" && currentLocation == "east") {
			clearMap();
			currentLocation = "castle";
			$(arriveCastle).insertBefore("#placeholder");
			$("#castle").addClass("mapArrival");
			
		} else if (input == "MOVE WEST" && currentLocation == "n_gate") {
			clearMap();
			currentLocation = "n_west";
			$(arriveNorthwest).insertBefore("#placeholder");
			$("#northWest").addClass("mapArrival");
			
		} else if (input == "MOVE WEST" && currentLocation == "n_east") {
			clearMap();
			currentLocation = "n_gate";
			$(arriveNorthGate).insertBefore("#placeholder");
			$("#northGate").addClass("mapArrival");
			
		} else if (input == "MOVE WEST" && (currentLocation == "s_west" || "west" || "n_west")) {
			$(outerLimits).insertBefore("#placeholder");

		}

	
	// end form submit function
	});


// end document ready
});

