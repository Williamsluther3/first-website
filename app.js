'use strict';

console.log("I am in the HTML")
alert("Welcome to my page");

function getName(){
const usersName = prompt("What is your name");
return usersName;
}

// usersName();

 let theirName = getName();

 console.log(theirName);

 function greetUser(){
    document.write("   Hi " + theirName + " Welcome to my page!");
 }

 


if (theirName == "Luke"){
    alert("What it Do!");
}
if (theirName == "Lukie"){
    alert("Whaaaaat it Do!");

}
if (theirName == null){
    alert("Hello Guest");

}
else {
    alert("Glad you Stopped by " + theirName);
}

function bowlingShoes(){
    document.write(" Hey " + theirName + " Don't forget to get some comfortable shoes");
}

function ballType(bowlingball){
    if (bowlingball == "ceramic"){
        console.log("Ceramic");

        document.write(" Ceramic, You're a straight bowler! ")
    }
    if (bowlingball == "urathan"){
        console.log("Urathan");

        document.write(" Urathan, You Like spreading the oil! ")
    }
    if (bowlingball == "reactive"){
        console.log("Reactive");

        document.write(" Reactive, You like the curve ball knocking down the pins! ")
    }
    else{
        console.log(" Welcome new Bowler ");
    }

}


const bowlingball = prompt("What type bowling ball do you use: ceramic, urathan, reactive?");

    if (bowlingball == "ceramic"){
        console.log("Ceramic");

       // document.write(" Ceramic, You're a straight bowler! ")
    }
    if (bowlingball == "urathan"){
        console.log("Urathan");

      //  document.write(" Urathan, You Like spreading the oil! ")
    }
    if (bowlingball == "reactive"){
        console.log("Reactive");

      //  document.write(" Reactive, You like the curve ball knocking down the pins! ")
    }
    else{
        console.log(" Welcome new Bowler ");
    }

function bowlersHand(type_of_bolwer){
    if (type_of_bowler == "right hand"){
        console.log("Right Hand");

        document.write(" Right handed bowler after my own heart!")
    }
    if (type_of_bowler == "left hand"){
        console.log("Left Hand");

        document.write(" Left handed you're a rare breed!")
    }
    if (type_of_bowler == "two hand"){
        console.log("Two Hand");

        document.write(" Two Handed you bowl with power!")
    }
    else{
        console.log("Welcome new Bowler");
    }

}    

    

const type_of_bowler = prompt("What type of bowler are you: right hand, left hand, two hand?");

    if (type_of_bowler == "right hand"){
        console.log("Right Hand");

       // document.write(" Right handed bowler after my own heart!")
    }
    if (type_of_bowler == "left hand"){
        console.log("Left Hand");

       // document.write(" Left handed you're a rare breed!")
    }
    if (type_of_bowler == "two hand"){
        console.log("Two Hand");

       // document.write(" Two Handed you bowl with power!")
    }
    else{
        console.log("Welcome new Bowler");
    }

function Thanks(){
    document.write(" Thanks for coming by  " + theirName + "    Keep Bowling!!");
}
