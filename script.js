//assignment no 1 //
var age = parseInt(prompt("Please enter your age:"));

if (age >= 18) {
  alert("You are an adult.");
} else {
  alert("You are a minor.");
}

//assignment no 2//

var username = prompt("Enter your username:");
var password = prompt("Enter your password:");

// Replace 'correctUsername' and 'correctPassword' with the actual values
var correctUsername = "your_username";
var correctPassword = "your_password";

if (username === correctUsername && password === correctPassword) {
  alert("Login successful.");
} else {
  alert("Login failed.");
}

//assignment no 3//
var randomNumber = Math.floor(Math.random() * 100) + 1;

if (randomNumber % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

// assignment no 4//
var favoriteColor = prompt("What is your favorite color?");

if (favoriteColor.toLowerCase() === "red") {
  alert("Red is a beautiful color.");
} else {
  alert("I like your choice of color.");
}

//assignment no 5//
var grade = prompt("What is your grade in school?");

if (grade.toUpperCase() === "A") {
  alert("Congratulations on your excellent work!");
} else {
  alert("Keep working hard!");
}
