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
var inventoryArray = [];
var inventory = $(".inventory")
var token = $(".token"); 



var currentLocation = $("#library");

$(document).ready(function () {
	$(currentLocation).addClass("mapArrival");

	// //Fade in message
	// $(".dialogueBox").fadeIn(1000);
	// //Fade in inventory and map
	// $(".inventory").delay(6000).fadeIn(1000);
	// $(".map").delay(6000).fadeIn(1000);
	// //Fade out message
	// $(".dialogueBox").delay(5000).fadeOut(1000);


	$(inventory).fadeIn(1000);
	$(".map").fadeIn(1000);
	

///////////////// ROOM GENERAL FUNCTIONS /////////////////////


	function clearMap() {
		$(".rooms").removeClass("mapArrival roomShrink");
	}

		


	function roomSelect(room) {
		clearMap();

		$(room).addClass("mapArrival roomGrow");

		$(".hiddenLink").fadeIn();

		$(".hiddenLink").click(function(){
			$(this).fadeOut();
			$(room).addClass("roomShrink").removeClass("roomGrow");
		});	
	}

//////// PICK UP ITEM AND ADD TO INVENTORY


	function pickUp(token) {
		inventoryArray.push(token);
		$(token).detach().appendTo(".inventory");
		console.log(inventoryArray);
	}

 	function removeItem(array, item) {
		    for(var i in array) {
		        if(array[i]==item){
		            array.splice(i,1);
		            break;
            	}
    		}
		}


	function use(token) {
		removeItem(inventoryArray, token);
		console.log(inventoryArray);
	}

///////////////// ROOM CLICK FUNCTIONS /////////////////////

////////////////////////////// LIBRARY /////////////////////////////////

	$("#library").click(function() {

		roomSelect("#library");
		$("#begin").fadeOut();
		$("#bookShelf").css("visibility","visible");


		$("#bookShelf").click(function() {
			$("#bookShelf").css("visibility","inherit");
			$("#shelfRoom").fadeIn();	
		})

//////////////////// CONDENSE INTO ONE CLICK FUNCTION /////////////////////////////

		$("#secretOne").click(function() {	
			$("#tinyDoll").detach().appendTo("#library");			
			$("#emptyBook").fadeIn();
		})


//////////////////////////FIX THISSSSSSS/////////////////////////////////////

		// $("#tinyDoll").click(function() {

		// 	var x = document.getElementById("tinyDoll").parentElement.nodeName;
			
		// 	if  (x = ".map") {
		// 		pickUp("#tinyDoll");
		// 	}


		// 	} 

		// 	// else if (".inventory").contains("#tinyDoll") = true {
		// 	// 	use("#tinyDoll");
		// 	// }

		// })





		$("#secretTwo").click(function() {	
			$("#glass").detach().appendTo("#library");
			$("#emptyBook").fadeIn();

		})

		$("#secretThree").click(function() {	
			$("#water").detach().appendTo("#library");
			$("#emptyBook").fadeIn();

		})

		

/////////////////////////////////////////////////////////////////////////////


		$(".continue").click(function() {
			$(".insideLibrary").fadeOut();
			$("#libraryObject").fadeIn();
		})

	})

	
		



	// $(libraryObject).click(function() {
	// 		$(this).fadeOut();
	// 		pickUp("#libraryToken");
	// 		console.log(inventoryArray[0]);
	// })
	





	$("#stairs").click(function() {
		roomSelect("#stairs");

	})

	$("#bread").click(function() {
		roomSelect("#bread");
	})

	$("#flowers").click(function() {
		roomSelect("#flowers");
	})

	$("#jewels").click(function() {
		roomSelect("#jewels");
	})

	$("#mouths").click(function() {
		roomSelect("#mouths");
	})

	$("#mirrors").click(function() {
		roomSelect("#mirrors");
	})

	$("#rain").click(function() {
		roomSelect("#rain");
	})

	$("#hands").click(function() {
		roomSelect("#hands");
	})




// end document ready
});

/////////////// BUGS /////////////////
// FIX BACK BUTTON
// BOOKSHELF WONT DISAPPEAR!!!! [FIXED W/ VISIBILITY INSTEAD OF DISPLAY, BUT I DON'T KNOW WHY IT WORKED]
// GET RID OF BACK BUTTON DURING LIBRARY SEQUENCE
// NEXT PART OF LIBRARY SEQUENCE: TEXT ABOUT DISAPPEARING BOOKSHELF AND EMPTY BOOK
// PICK UP OBJECTS IN LIBRARY???
// STORE WHICH SECRET PLAYER CHOOSES
// HOW TO ADD THINGS TO INVENTORY
// ROOMS WILL HAVE DARKROOM OVERLAY UNTIL THEY ARE UNLOCKED SO OBJECTS DO NOT HAVE TO BE INVISIBLE





