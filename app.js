'use strict';

console.log("I am in the HTML")
alert("Welcome to my page");

const usersName = prompt("What is your name");
console.log(usersName);

document.write("Hi " + usersName + " Welcome to my page! ");

if (usersName == "Luke"){
    alert("What it Do!");
}
if (usersName == "Lukie"){
    alert("Whaaaaat it Do!");

}
else {
    alert("Glad you Stopped by " + usersName);
}

const bowlingball = prompt("What type bowling ball do you use: ceramic, urathan, reactive?");

    if (bowlingball == "ceramic"){
        console.log("Ceramic");

        document.write(" You're a straight bowler! ")
    }
    if (bowlingball == "urathan"){
        console.log("Urathan");

        document.write(" You Like spreading the oil! ")
    }
    if (bowlingball == "reactive"){
        console.log("Reactive");

        document.write(" You like the curve ball knocking down the pins! ")
    }
    else{
        console.log(" Welcome new Bowler ");
    }

const type_of_bowler = prompt("What type of bowler are you: right hand, left, two hand?");

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

    document.write("Thanks for coming by " + usersName + " Keep Bowling")
