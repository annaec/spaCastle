//var hasBeenClicked = false;
//jQuery('#id').click(function () {
 //   hasBeenClicked = true;
//});

//if (hasBeenClicked) {
    // The link has been clicked.
//} else {
    // The link has not been clicked.
//}


/////////////////INVENTORY FUNCTION//////////////////////

// function updateInventory() {
// 	$(".inventory li").remove();
// 		newPlayer.inventory.forEach( function (el) {
// 			$(".inventory").append("<li>" + el + "</li>");
// 		});
// }

/////////////////PICK UP FUNCTION//////////////////////

// function pickUpSword() {
// 	if (currentLocation == "s_gate") {
// 			// newPlayer.inventory.push("Sword");
// 			newPlayer.inventory.push("Sword")
// 			updateInventory();
// 			$("<p>You picked up the sword. The weight of it feels powerful, and you are emboldened to explore the world around you. Move NORTH, SOUTH, EAST, or WEST.</p>").insertBefore("#placeholder").fadeIn(1000);
// 		} else {
// 			$("<p>The sword is not here. Proceed to the South Gate to find the sword, or continue to explore.</p>").insertBefore("#placeholder");
// 		}
// }


/////////////////REMOVE FROM INVENTORY ARRAY FUNCTION//////////////////////
  //       function removeItem(array, item) {
		//     for(var i in array) {
		//         if(array[i]==item){
		//             array.splice(i,1);

		//             break;
  //           	}
  //   		}
		// }

/////////////////USE OBJECT FUNCTION//////////////////////

// function useSword() {
// 	removeItem(newPlayer.inventory, "Sword");
// 	updateInventory();
// 	console.log(newPlayer.inventory);
// 	$("<p>You wield your sword against your enemy. The blade strikes him and he slows, but does not die. Run!</p>").insertBefore("#placeholder").fadeIn(1000);
// }


// store last page clicked in a variable

var currentLocation = $("#library");

$(document).ready(function () {
	$(currentLocation).addClass("mapArrival");

	//Fade in inventory and map
	$(".inventory").fadeIn(1000);
	$(".map").fadeIn(1000);



//Changed to ease new room into full screen then back 
	$(".rooms").click(function(){
		var roomClicked = this;
		currentLocation = roomClicked;
		console.log(roomClicked);

		$(".rooms").removeClass("mapArrival roomShrink");
		$(roomClicked).addClass("mapArrival roomGrow");

		$(".hiddenLink").fadeIn();

		$(".hiddenLink").click(function(){
			$(this).fadeOut();
			$(roomClicked).addClass("roomShrink").removeClass("roomGrow");

		});	

	});
// look into shopping cart behavior
	$(".backToLibrary").click(function(){
		console.log(parent.history);
		 parent.history.back();
		return false;

	});

//CLEAR MAP 
	function clearMap() {
		$(".rooms").removeClass("mapArrival");
	}


// end document ready
});

