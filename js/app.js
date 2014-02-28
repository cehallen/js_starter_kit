var max = 5;
var number = Math.floor(Math.random() * max + 1);
var name = prompt("What's your name?");

debugger;
var guess = prompt("Guess a number between 0 and " + max);
if (guess === number) {
  alert(name + ", you got it.")
} else {
  alert("Sorry " + name + ", you didn't get it.")
}
