//console log just to test that your JS is linked properly

console.log("Test of console");
//create a variable for the number of buildings in the city and start it at zero
var buildings = 0;
document.getElementById('city').innerHTML="You have "+buildings+" buildings in your city";
//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads

//Functions -- 
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
    //-- Print a message to teh console
    //--Add one to the variable that is tracking the number of buildings
    //---Print a message with the number of buildings
    //---Place an image graphic into the other div
function buildOne(){
    console.log("buildOne Test");
    // ++ shortcut to add one to a var
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" buildings in your city";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock1.png'>"

}

//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building
function buildTwo(){
    console.log("buildTwo Test");
    // ++ shortcut to add one to a var
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" buildings in your city";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock2.png'>"

}


//Create a function for the third button that prints a message with the number of buildings and the graphic for the third building
function buildThree(){
    console.log("buildThree Test");
    // ++ shortcut to add one to a var
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" buildings in your city";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock3.png'>"

}

function buildFour(){
    console.log("buildThree Test");
    // ++ shortcut to add one to a var
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" buildings in your city";
    document.getElementById('cityGraphic').innerHTML+="<img src='resources/FreeSample/Building3.png'>"

}