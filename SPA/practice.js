

///////////////////////////////////////////////DOM ELEMENT letIABLES////////////////////////////////////////

let inventory = $(".inventory")
let token = $(".token"); 

////////////////////////////////////////////////RASPBERRYHEAD////////////////////////////////////////////////

function Player(inventoryArray, currentLocation, hearts) {
	this.inventoryArray=inventoryArray,
	this.currentLocation=currentLocation,
	this.hearts=hearts;
}

let player = new Player([], $("#library"), 6);
let playerInventory = player.inventoryArray;

/////////////////////////////////////////////////ROOM OBJECTS //////////////////////////////////////////////////////

/*let pusheen = {  
	name: 'Pusheen',  
	age: 7,  
	colors: ['gray', 'tabby']
};
console.log(pusheen.colors[0]);
console.log(pusheen.colors[1]);

var foo = {
  bar: ['foo', 'bar', 'baz']
};

// access
foo.bar[2]; // will give you 'baz'

USE FOR LOOP TO CYCLE THROUGH CANTGO Array AND CHECK IF ROOMCLICKED IS IN IT
*/


let rainRoom =  {
	keys: [$("#seed"), $("#tinyDoll")], 
	tokens: [$("#water"), $("#worm")], 
	location: $("#rain"), 
	cantGo: [$("#stairs"), $("#bread"), $("#flowers"), $("#jewels"), $("#mouths")]
};

let handsRoom =  {
	keys: [$("#ring"), $("#tinyDoll")],
	tokens: [$("#candle"), $("#knife")],
	location: $("#hands"),  
	cantGo: [$("#stairs"), $("#bread"), $("#flowers"), $("#jewels"), $("#mirrors")]
};

let mirrorsRoom =  {
	keys: [$("#radio"), $("#frame")],
	tokens: [$("#glass"), $("#tinyDoll")], 
	location:  $("#mirrors"),
	cantGo: [$("#stairs"), $("#bread"), $("#flowers"), $("#hands"), $("#mouths")]
};

let stairsRoom =  {
	keys: [$("#candle"), $("#glass")], 
	tokens: $("#frame"),
	location: $("#stairs"),
	cantGo:  [$("#rain"), $("#bread"), $("#flowers"), $("#hands"), $("#mouths")]
};

let breadRoom =  {
	keys: [$("#knife"), $("#water")], 
	tokens: $("#bread"),
	location: $("#bread"),
	cantGo: [$("#rain"), $("#jewels"), $("#mirrors"), $("#hands"), $("#mouths")]
};

let mouthsRoom =  {
	keys: [$("#bread"), $("#glass")],
	tokens: [$("#tooth"), $("#radio")],
	location: $("#mouths"),
	cantGo: [$("#stairs"), $("#bread"), $("#rain"), $("#jewels"), $("#mirrors")]
};

let jewelsRoom =  {
	keys: [$("#tooth"), $("#worm")],
	tokens: [$("#ring"), $("#ruby")],
	location: $("#jewels"),
	cantGo: [$("#rain"), $("#bread"), $("#flowers"), $("#hands"), $("#mouths")]
};

let flowersRoom =  {
	keys: [$("#ruby"), $("#tooth")],
	tokens: $("#seed"),
	location:  $("#flowers"), 
	cantGo: [$("#stairs"), $("#mirrors"), $("#rain"), $("#jewels"), $("#hands")]
};


////////////////////////////////////////////////////////CANTGO VARIABLES///////////////////////////////////////////////

let flowersCantGo = Object.values(flowersRoom);
let jewelsCantGo = Object.values(jewelsRoom);
let mouthsCantGo = Object.values(mouthsRoom);
let breadCantGo = Object.values(breadRoom);
let stairsCantGo = Object.values(stairsRoom);
let mirrorsCantGo = Object.values(mirrorsRoom);
let handsCantGo = Object.values(handsRoom);
let rainCantGo = Object.values(rainRoom);

////////////////////////////////////////////////////////KEY VARIABLES///////////////////////////////////////////////

let flowersKeys = flowersCantGo[0];
let jewelsKeys = jewelsCantGo[0];
let mouthsKeys = mouthsCantGo[0];
let breadKeys = breadCantGo[0];
let stairsKeys = stairsCantGo[0];
let mirrorsKeys = mirrorsCantGo[0];
let handsKeys = handsCantGo[0];
let rainKeys = rainCantGo[0];

////////////////////////////////////////////////////////OPENING///////////////////////////////////////////////


$(document).ready(function () {

	$(player.currentLocation).addClass("mapArrival");

	//Fade in message
	$("#welcome").fadeIn(1000);

		// WELCOME ANIMATION: https://jsfiddle.net/victor_007/4jy6xjr9/ 
		let str = $('#welcome').html(),
		  i = 0,
		  isTag,
		  text;       
		(function type() {
		  text = str.slice(0, ++i);
		  if (text === str) return;
		  $("#welcome").html(text);
		  let char = text.slice(-1);
		  if (char === '<') isTag = true;
		  if (char === '>') isTag = false;
		  if (isTag) return type();
		  setTimeout(type, 80);
		}());
	
/////////////////////////////////////////////FADE IN INVENTORY AND MAP////////////////////////////////////////////

	$(".inventory").delay(6000).fadeIn(1000);
	$(".map").delay(6000).fadeIn(1000);
	//Fade out message
	$("#welcome").delay(5000).fadeOut(1000);


	$(inventory).fadeIn(1000);
	$(".map").fadeIn(1000);
	

////////////////////////////////////////////////ROOM GENERAL FUNCTIONS /////////////////////////////////////////////
// LOCKEDDOOR FUNCTION: ACCESS ROOM OBJECT ROOMKEY ARRAYS TO SEE IF YOU CAN ENTER BASED ON CANTGO 
	function lockedDoor(roomWeClick) {

		if (!$(roomWeClick).hasClass("beenHere")) {	
				console.log("notBeenHere");
				roomSelect(roomWeClick);			
			} else {
				if (playerInventory.includes(Object.values(roomWeClick[0]))) {
			      roomSelect(roomWeClick);
		  	      console.log('unlocked');
		        } else {
			      cantGo();
		  	      console.log('locked');
				
			}
		}
	}


	function geographicalImpossibility(roomWereIn, roomWeClick) {

		if( Object.values(roomWereIn[3]).includes(roomWeClick)) {
			cantGo();
		  	console.log('yes');
		} else {
			roomSelect();
		  	console.log('no');
		  	//lockedDoor
		  	//check if you've been there, if no check if you have the right key
		}

	}

	
	function clearMap() {
		$(".room").removeClass("mapArrival roomShrink");
	}	

	function cantGo(roomWeClick) {
		// nothing happens on map and warning says can't go here
		console.log("can't go");

		}


	function roomSelect(roomWeClick) {

		clearMap();

		//function that will happen if you arent allowed to go in a room
		cantGo(roomWeClick);

		
		// FINISH ROOMSELECT FUNCTION WITH THREE IF STATEMENTS IN EXACT ORDER
		let  currentRoom = player.currentLocation;
		currentRoom = roomWeClick;
		console.log(currentRoom);

		

		// when you click on a room, addClass beenHere. this function will check if hasClass beenHere
		// if it doesn't have the class beenHere, it will check for the keys
        
        //makes room you clicked blue and makes it grow 
		$(roomWeClick).addClass("mapArrival roomGrow");
		$(".hiddenLink").fadeIn();
        
        //for clicking the back button
		$(".hiddenLink").click(function(){
			$(this).fadeOut();
			$(roomWeClick).addClass("roomShrink beenHere").removeClass("roomGrow");
		});	



		
	}

	function librarySelect(roomWeClick) {
		clearMap();

		$(roomWeClick).addClass("mapArrival");
		$(".hiddenLink").fadeIn();

		$(".hiddenLink").click(function(){
			$(this).fadeOut();
		});	
	}


/////////////////////////////////////////PICK UP ITEM AND ADD TO INVENTORY/////////////////////////////////////////


	function pickUp(token) {
		player.inventoryArray.push(token);
		$(token).detach().appendTo(".inventory");
		console.log(player.inventoryArray);
	}

 	function removeItem(array, token) {
		    for(let i in array) {
		        if(array[i]===token){
		            array.splice(i,1);
		            break;
            	}
    		}  	
		}


	function use(token) {
		removeItem(player.inventoryArray, token);
			$(token).detach();
		console.log(player.inventoryArray);	
	}

	function clickToken(token) {
		if  ($(".map").has(token).length)  {
			pickUp(token);

		} else {
			use(token);
		}
	}
			
	$(".token").click(function() {
		clickToken(this);
	})


//////////////////////////////////////////////////ROOM CLICK FUNCTIONS /////////////////////////////////////////////

////////////////////////////////////////////////////LIBRARY ///////////////////////////////////////////////////////

	$("#begin").click(function() {

		roomSelect("#library");
		$("#begin").fadeOut();
		$("#bookShelf").css("visibility","visible");


		$("#bookShelf").click(function() {
			$("#bookShelf").css("visibility","inherit");
			$("#shelfRoom").fadeIn();	
		})


////////////////////////////////////////////////////CHOOSING A SECRET //////////////////////////////////////////////

		$("#secretOne").click(function() {	
			pickUp("#secretBookOne");
			$("#tinyDoll").detach().appendTo("#library");			
			$("#emptyBook, #secretBookOne").fadeIn();
		})


		$("#secretTwo").click(function() {	
			pickUp("#secretBookTwo");
			$("#glass").detach().appendTo("#library");
			$("#emptyBook, #secretBookTwo").fadeIn();
		})

		$("#secretThree").click(function() {
			pickUp("#secretBookThree");	
			$("#water").detach().appendTo("#library");
			$("#emptyBook, #secretBookThree").fadeIn();
		})


		$(".continue").click(function() {
			$(".insideLibrary").fadeOut();
			$("#libraryObject").fadeIn();
			$("#bookshelfDisappears").delay(1000).fadeIn(1000);

				/// BOOKSHELF TYPEWRITER ANIMATION: https://jsfiddle.net/victor_007/4jy6xjr9/ 
				let str = $('#bookshelfDisappears').html(),
				  i = 0,
				  isTag,
				  text;       
				(function type() {
				  text = str.slice(0, ++i);
				  if (text === str) return;
				  $('#bookshelfDisappears').html(text);
				  let char = text.slice(-1);
				  if (char === '<') isTag = true;
				  if (char === '>') isTag = false;
				  if (isTag) return type();
				  setTimeout(type, 60);
				}());

			$("#bookshelfDisappears").delay(600).fadeOut(600);
			$(".hiddenLink").delay(20000).fadeIn(500);
		})
	})

	$("#library").click(function() {
		librarySelect("#library");
	})

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

// SCENARIO ONE: INVENTORY INCLUDES BOOK 1 AND TINY DOLL

// SCENARIO TWO: INVENTORY INCLUDES BOOK 2 AND GLASS

// SCENARIO THREE: INVENTORY INCLUDES BOOK 3 AND WATER



// end document ready
});

/// if you're in library and you click on corner rooms, an error message pops up. else roomSelect function fires

/////////////// BUGS /////////////////
// WHY WHY WHY YY DOESN'T INVENTORY .INCLUDES COMMAND WORK? SHOULD WE TURN THE ARRAYS INTO A STRING?
// LOCKEDDOOR FUNCTION: ACCESS ROOM OBJECT ROOMKEY ARRAYS TO SEE IF YOU CAN ENTER BASED ON CANTGO 
// FINISH ROOMSELECT FUNCTION WITH THREE IF STATEMENTS IN EXACT ORDER (ANAHIT'S DIAGRAM)
// -figure out how to attach functions to objects 
// -figure out how to trigger token events in each room
// -USE SECRET IN INVENTORY TO AFFECT END OF GAME (if secret x in inventory and special token used in certain room, end game)
// HOW TO PUT TYPE FUNCTION INTO A letIABLE TO REUSE 
// ROOMS WILL HAVE DARKROOM OVERLAY UNTIL THEY ARE UNLOCKED SO OBJECTS DO NOT HAVE TO BE INVISIBLE
// MAKE SURE PLAYER CAN ONLY CLICK ONE OBJECT IN ROOM AT A TIME
// MAKE SURE YOU CANT PICK UP HIDDEN ITEMS BY ACCIDENT


/////////// ACCOMPLISHMENTS /////////////
// CREATED KEY ARRAYS AND SUCCESSFULLY POINTED TO THEM IN THE CODE WITH VARIABLES
// FIGURE OUT HOW TO ACCESS ROOM OBJECT ARRAYS TO SEE IF YOU CAN ENTER BASED ON CANTGO 
// TRY TO REWRITE ROOM OBJECTS IN THE OTHER WAY
// USE .INCLUDES TO LOOK THROUGH CANTGO Array AND CHECK IF ROOMCLICKED IS IN IT
// REASSIGN PLAYER.CURRENTLOCATION TO ROOM CLICKED AT END OF ROOMSELECT FUNCTION
// BEENHERE SYNTAX AND CHECKING WHETHER YOUVE BEEN IN A ROOM
// NOT OPERATOR :]
// WHY DOES BEENHERE CLASS ONLY GET ADDED AFTER YOU'VE CLICKED LIBRARY
// LEARN OBJECT ORIENTED PROGRAMMING LOL: 
// -how to point to existing html elements in JS objects
// -how to consolidate existing code into objects section 
// PICK UP OBJECTS IN LIBRARY
// HOW TO ADD THINGS TO INVENTORY
// STORE WHICH SECRET PLAYER CHOOSES
// if you click [secretOne / Two / Three] add to inventory (or player object) and hide it . function clickBook(secret)
// FLOAT INVENTORY
// GET RID OF BACK BUTTON DURING LIBRARY SEQUENCE
// HOW DO WE WRAP TEXT? HOW DO WE MAKE PARAGRAPHS? 
// NEXT PART OF LIBRARY SEQUENCE: TEXT ABOUT DISAPPEARING BOOKSHELF AND EMPTY BOOK: FIX TYPING ANIMATION!!!!!
// WHEN SHOULD BACK BUTTON BE VISIBLE? HOW DO WE STOP PLAYER FROM GOING BACK DURING ANIMATIONS, ETC



