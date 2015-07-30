/* Created by Heark 7/30/2015 
//
// Playable @ http://hearkrps.no-ip.org
//
*/

// Create a function to shuffle an array easier.
function shuffle(contents) {
    this.contents = contents;
    var method = this.contents[Math.floor(Math.random() * this.contents.length)];
    return method;

}
// Create Variables
var compchoices = ["rock", "paper", "scissors"];
var comp_choice = shuffle(compchoices);
var user_choice = prompt("Rock, Paper, or Scissors?", "Rock");

// Create Game
if (compchoices.indexOf(user_choice.toLowerCase()) !== -1){
    if (user_choice.toLowerCase() == "paper") {
        if (comp_choice == "rock") {
            alert("You chose paper and the CPU chose rock! You Win!");
        } else if (comp_choice == "paper") {
            alert("You chose paper and the CPU chose paper! Tie Game!");
        } else if (comp_choice == "scissors") {
            alert("You chose paper and the CPU chose scissors! You Lose!");
        }
    } else if (user_choice.toLowerCase() == "rock") {
        if (comp_choice == "rock") {
            alert("You chose rock and the CPU chose rock! Tie Game!");

        } else if (comp_choice == "paper") {
            alert("You chose rock and the CPU chose paper! You Lose!");
        } else if (comp_choice == "scissors") {
            alert("You chose rock and the CPU chose scissors! You Win!");
        }
    } else if(user_choice.toLowerCase() == "scissors") {
      if(comp_choice == "rock") {
        alert("You chose scissors and the CPU chose rock! You Lose!");
      } else if(comp_choice == "paper") {
        alert("You chose scissors and the CPU chose paper! You win!");
      } else if(comp_choice == "scissors") {
        alert("You chose scissors and the CPU chose scissors! Tie Game!");
      }
  else {
        alert("Invalid Input!");
    }
    }
}
