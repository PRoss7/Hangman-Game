window.onload = function () {

var wins = 0;
var lettersGuessed = [];
var lives = 8;
var counter ;
var space ;

var words = [
  "Minnesota",
  "Vikings",
  "JavaScript",
  "YouTube",
  "Twitter",
  "GitHub"
];

// randomly select word
var word = words[Math.floor(Math.random() * words.length)];

var randomWord = function() {
  return words[Math.floor(Math.random() * words.length)];
}

// create lettersGuessed ul
result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      userGuess = document.createElement('li');
      userGuess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        userGuess.innerHTML = "-";
        space = 1;
      } else {
        userGuess.innerHTML = "_";
      }

      lettersGuessed.push(userGuess);
      wordHolder.appendChild(correct);
      correct.appendChild(userGuess);
    }
  }

  // show wins, lives, lettersGuessed
  comments = function(event) {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "GAME OVER";
    }
    for (var i = 0; i < lettersGuessed.length; i++) {
      if (counter + space === lettersGuessed.length) {
        showLives.innerHTML = "You Survived!!";
      }
    }
  }

  



// Start onkeyup function

document.onkeyup = function(event) {
    var userGuess = (this.innerHTML);
    this.onkeyup = null;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === userGuess) {
        lettersGuessed[i].innerHTML = userGuess;
        counter += 1;
      }
    }

    var j = (word.indexOf(userGuess));
    if (j === -1) {
      lives -= 1;
      comments();
      //animate();
    }

    else {
      comments();
    }
  }	

var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in users guess


var showWins = document.getElementById("wins");
var showLives = document.getElementById("lives");
var showLettersGuessed = document.getElementById("lettersGuessed");







  // animate man 

 /* canvas = function () {
  	myStickman = document.getElementById("stickman");
  	context = myStickman.getContext('2d');
  	context.beginPath();
  	context.strokeStyle = "#FF0000";
  	context.lineWidth = 1.5;
  };

  head = funtion () {
  	myStickman = document.getElementById("stickman");
  	context = myStickman.getContext('2d');
  	context.beginPath();
  	context.arc(60, 25, 10, 0, Math.PI*2, true);
  	context.stroke();
  }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
  	context.moveTo($pathFromx, $pathFromy);
  	context.lineTo($pathTox. $pathToy);
  	context.stroke();
  }

  frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];

}

*/ 


}