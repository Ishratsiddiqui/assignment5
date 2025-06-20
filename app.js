 //  chapter 9 // 
// question no 1: whrite a program to take "city name as input from user. if user enters "karachi" 
var city = prompt("Enter your city name:");
if(city === "karachi"){
    alert("Welcome to the city of lights!");
}
// question no 2: write a program to take "gender" as put from user.if the user is male, give the message "GOOD MORNING SIR". 
var gender = prompt("Enter your gender");
if( gender === "male"){
    alert("Good Morning Sir");
}
else if( gender === "Female"){
    console.log("Good Morning Ma'am");
}

// question no 3: write a program to take inpute color of road traffic signal from User. and show the message according to this table.
var color = prompt("enter the color of traffic signal ");
if(color === "Red" ){
    alert("must stop");
}
else if( color === "Yellow"){
    alert("Ready to move");
}
else if(color === "Green"){
    alert("Move now");
}

// question no 4: write a program to take input remaining fuel in a car (in liters) from user. 
var fuel = prompt("Enter the remaining fuel in your car (0.25 liters):");
if(fuel < 0.25){
    alert("Please refill the fuel in your car.");
}
// question no 6: write a program to take input marks obtained in three subjects and total marks.
var subject = prompt("Enter the name of subject:");
var subject = prompt("Enter the name of subject: 1");
var subject = prompt("Enter the name of subject: 2");
var subject = prompt("Enter the name of subject: 3");
var totalmarks = prompt("Enter the total marks");
var marksobtained = prompt("Enter the marks obtained in subject 1");
var marksobtained = prompt("Enter the marks obtained in subject 2");
var marksobtained = prompt("Enter the marks obtained in subject 3");
var percentage = (marksobtained) *100;
var grade;
if(percentage >= 80){
    grade = "A+";
}
else if(percentage >= "70"){
    grade = "A";
}
else if(percentage >= "60"){
    grade = "B";
}
else if(percentage <= "50"){
    grade = "c";
}
else{
    grade = "D";
}
alert("percentage: " + percentage + "%, \n" + "Grade: " + grade + "\n" + "Marks obtained:" + marksobtained +
     "\n" + "Total Marks:" + tatoalmarks +"\n"+ "subject 1:" + subject + "\n" + "subject 2:" + subject + "\n"
      + "subject 3" + subject + "\n" + "Total mark" + "\n" + "marks obtained" + "\n" + "percentage" + "\n" + "grade");
   
//  question no 7: write a program to take input a number from user and check wheather the number is divisible by 3 or not.
var number = prompt("Enter a number");
if(number % 3 === 0){
    alert("The number ' + number + ' is divisible by 3.");
} 
else{
    alert("The number ' + number + '  is not divisible by 3.");
} 

// question no 8:  write a program to take input a number from user and check weather the number is even or odd.
var number = prompt(" Enter a number");
if(number % 2 === 0){
    console.log("The number '+ number + ' is even.");  
}
else{
    console.log(" The number '+ number + ' is odd.");
}

// question no 9: store a secret number (ranging from 1 to 10) in a variable. prompt user to guess the secret number.

var secretNumber = 9;
var userGuess = +prompt("Enter a secret number between 1 to 10:");
if(userGuess === secretNumber){
    alert("Bingo! Correct answer.");
} 
 else if(userGuess === secretNumber + 1){
   alert("Close enough to the correct answer.");
}

// question  no 10: write a program that takes temperature as input and shows a message based on following criteria:

var temperature = +prompt("Enter the temperature in Celsius:");
if( temperature > 40){
      alert("it is too hot outside");
}
else if( temperature > 30){
      alert("The weather today is normal");
}
else if( temperature > 20){
    alert("Today's weather is cool");
}
else if ( temperature > 10){
    alert("OMG! Today's weather is so cool");
}

     //  The End of chapter 9 // 









