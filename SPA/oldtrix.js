// Game opens in map view, player icon is in library
// Click begin button to open library screen



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
// var player.inventoryArray = [];



	// function type(message) {
	// 	var str = $(message).html(),
	// 	  i = 0,
	// 	  isTag,
	// 	  text;       
	// 	  text = str.slice(0, ++i);
	// 	  if (text === str) return;
	// 	  $(message).html(text);
	// 	  var char = text.slice(-1);
	// 	  if (char === '<') isTag = true;
	// 	  if (char === '>') isTag = false;
	// 	  if (isTag) return type();
	// 	  setTimeout(type, 80);
	// 	}
 			// type("#welcome");