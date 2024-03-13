'use strict';

console.log("I am in the HTML")
alert("Welcome to my page");

// let usersName = ("");

function getName(){
  const usersName = prompt("what's your name");

  return usersName;
//  console.log(getName);
 
}

console.log("Hey + usersName + Nice to meet you");


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

else{
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
        // console.log(" Welcome new Bowler ");
    }

function bowlersHand(type_of_bowler){
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
        // console.log("Welcome new Bowler");
    }

    
function yourBowlType(){
   let yourBowlType = prompt('What hand do you bowl with? Right, Left or Two hands');
        
   while (yourBowlType == ''){
   yourBowlType = prompt('Come on Bro, Just pick a hand!');
  }


  alert('Alright ' + theirName + ' You Got it!');
}


    

   

function rateMyPage(){
   let rating = prompt("How many stars would you rate my page? 1-5");

   console.log(rating);
   
   for (let i = 0; i < rating; i++){
    document.write("<img class='loop-img' src='img/Strike.jpg' alt='Chi Ching' />");
   }
}




function Thanks(){
    document.write(" Thanks for coming by  " + theirName + "    Keep Bowling!!");
}
