
/* What to do when button gets clicked, upper wala code niche wale se liya gya h, bass thoda chota h wo;
document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
  alert("I got clicked!");
}*/

//detecting buttton press on screen
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// querySelectorAll will select all buttons present in index.html.it can be anywhere, so for more specification we have used drum class also

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      // jab click hoyega, tabhi wo function call hoyega jo iske andar h like makeSound and animation wala
    var buttonInnerHTML = this.innerHTML; //button innerhtml mein words aayege like w,k,a,s, yeh andar wale html ka btadeta h
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });

  //detecting keyboard press
  document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);//yeh dono anonymous functions h, so in event listener as these are written they both will be executed
    //if you have written function with fnc name in the input, then you must have made a fnc with that name only inside the event listener
  });
  //selecting each individual button,whichever is pressed and adding the event listener to it correspondingly, niche wale code ki hi modifications h isme basss
}

function makeSound(key) {
  switch (key) {     // earlier we have used switch(buttonInnerHTMl) to detect which button was pressed on screen, now as key is used we so are using 
                      //this key ,now both will work fine with this, key press and also screen press
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

//study about constructor function,this keyword, getelementby id,class,tag, select query,switch case,function method, jquery=js library etc.
//closures, hoisting,event,significance of $0,higher order functions, callback functions,cdn, 

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);// we have used . to indicate that we are using button of that class eg .w, .d, .j

  activeButton.classList.add("pressed");//class pressed is added here frpm CSS,classList gives all the classes name associated with that element & can add other class to it also
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);//100ms is used here
}
