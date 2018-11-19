/*
 * Hello. 2 points.
 */

function hello() {
  document.getElementById("output1").innerHTML = "Hello, AP Computer Science Principles!";
  // WRITE YOUR EXERCISE 1 CODE HERE

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {
  var input = prompt("Enter your name:");
  document.getElementById("output2").innerHTML = "Hello, " + input + "!";
  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  // WRITE YOUR EXERCISE 2 CODE HERE

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {
  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY
  var cel1 = cels * (9/5);
  var cel2 = cel1 + 32;
  var cel3 = cel2.toFixed(2);
  document.getElementById("output3").innerHTML = cels + " degrees Celsius equals " + cel3 + " degrees Fahrenheit.";
  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {
  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY
  var fah1 = fahr - 32;
  var fah2 = fah1 * 5;
  var fah3 = fah2 / 9;
  var fah4 = fah3.toFixed(2);
  document.getElementById("output4").innerHTML = fahr + " degrees Fahrenheit equals " + fah4 + " degrees Celsius.";
  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  if (inches >= 63360) {
    var mile1 = inches / 63360;
    var mile2 = Math.trunc(mile1);
    inches = inches - (63360 * mile2);
  }

  else {
    var mile2 = 0;
  }

  if (inches >= 36) {
    var yard1 = inches / 36;
    var yard2 = Math.trunc(yard1);
    inches = inches - (36 * yard2);
  }

  else {
    var yard2 = 0;
  }

  if (inches >= 12) {
    var feet1 = inches / 12;
    var feet2 = Math.trunc(feet1);
    inches = inches - (12 * feet2);
  }

  else {
    var feet2 = 0;
  }

  document.getElementById("output5").innerHTML = "Miles:" + mile2 + "Yards: " + yard2  +  "Feet: " + feet2 + "Inches: " + inches;
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  if (centimeters >= 100000) {
    var cent1 = centimeters / 100000;
    var cent2 = Math.trunc(cent1);
    centimeters = centimeters - (100000 * cent2);
  }

  else {
    var cent2 = 0;
  }

  if (centimeters >= 100) {
    var met1 = centimeters / 100;
    var met2 = Math.trunc(met1);
    centimeters = centimeters - (36 * met2);
  }

  else {
    var met2 = 0;

document.getElementById("output6").innerHTML = "Kilometers: " + cent2 + "Meters: " + met2  +  "Centimeters: " + centimeters;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  if (fluidOunces >= 128) {
    var floun1 = fluidOunces / 128;
    var floun2 = Math.trunc(floun1);
    fluidOunces = fluidOunces - (128 * floun2);
  }

  else {
    var floun2 = 0;
  }

  if (fluidOunces >= 32) {
    var quarts1 = fluidOunces / 32;
    var quarts2 = Math.trunc(quarts1);
    fluidOunces = fluidOunces - (32 * quarts2);
  }

  else {
    var quarts2 = 0;
  }

  if (fluidOunces >= 16) {
    var pints1 = fluidOunces / 16;
    var pints2 = Math.trunc(pints1);
    fluidOunces = fluidOunces - (32 * pints2);
  }

  else {
    var pints2 = 0;
  }

  if (fluidOunces >= 8) {
    var cups1 = fluidOunces / 8;
    var cups2 = Math.trunc(cups1);
    fluidOunces = fluidOunces - (8 * cups2);
  }

  else {
    var cups2 = 0;
  }

  document.getElementById("output7").innerHTML = "Gallons: " + floun2 + "Quarts: " + quarts2  +  "Pints: " + pint2 + "Cups:" + cups2 + "Fluid Ounces" + fluidOunces;
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  if (ounces >= 32000) {
    var ton1 = ounces / 8;
    var ton2 = Math.trunc(oun1);
    fluidOunces = fluidOunces - (32000 * ton2);
  }

  else {
    var ton2 = 0;
  }

  if (ounces >= 16) {
    var pounds1 = ounces / 8;
    var pounds2 = Math.trunc(pounds1);
    fluidOunces = fluidOunces - (32000 * pounds2);
  }

  else {
    var pounds2 = 0;
  }

  document.getElementById("output8").innerHTML = "Tons: " + ton2 + "Pounds" + pounds2 + "Ounces:" + ounces;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  if (pennies >= 100) {
    var dol1 = pennies / 8;
    var dol2 = Math.trunc(dol1);
    fluidOunces = fluidOunces - (100 * dol2);
  }

  else {
    var dol2 = 0;
  }

  if (pennies >= 0.25) {
    var quarters1 = pennies / 0.25;
    var quarters2 = Math.trunc(quarters1);
    pennies = pennies - (0.25 * quarters2);
  }

  else {
    var quarters2 = 0;
  }

  if (pennies >= 0.10) {
    var dimes1 = pennies / 0.10;
    var dimes2 = Math.trunc(dimes1);
    pennies = pennies - (0.10 * dimes2);
  }

  else {
    var dimes2 = 0;
  }

  if (pennies >= 0.05) {
    var nickels1 = pennies / 0.05;
    var nickels2 = Math.trunc(nickels1);
    pennies = pennies - (0.05 * nickels2);
  }

  else {
    var nickels2 = 0;
  }

  document.getElementById("output8").innerHTML = "Dollars: " + dol2 + "Quarters" + quarters2 + "Dimes:" + dimes2 + "Pennies:" + pennies;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  if (amount >= 0.25) {
    var quar1 = amount / 0.25;
    var quar2 = Math.trunc(quar1);
    amount = amount - (0.25 * quar2);
  }

  else {
    var quar2 = 0;
  }

  if (amount >= 0.10) {
    var dim1 = amount / 0.10;
    var dim2 = Math.trunc(dim1);
    amount = amount - (0.10 * dim2);
  }

  else {
    var dim2 = 0;
  }

  if (amount >= 0.05) {
    var nick1 = amount / 0.05;
    var nick2 = Math.trunc(nick1);
    amount = amount - (0.05 * nick2);
  }

  else {
    var nick2 = 0;
  }

  if (amount >= 0.01) {
    var pen1 = amount / 0.01;
    var pen2 = Math.trunc(pen1);
    amount = amount - (0.01 * pen2);
  }

  else {
    var pen2 = 0;
  }

  document.getElementById("output8").innerHTML = "Quarters" + quar2 + "Dimes" + dim2 + "Nickels" + nick2 + "Pennies" + pen2; 

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
