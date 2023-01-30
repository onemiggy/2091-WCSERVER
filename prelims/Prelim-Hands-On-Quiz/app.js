// Enriquez Juan Miguel T.         WD - 201
var calculate = require('./calculations.js');

// First set of variables
var rate = 300;
var hours = 4;
var days = 6;
var taxrate = 0.1;

// Second set of variables
var sss = 1200;
var pagibig = 300;
var philhealth = 400;

// Third set of variables: Add and multiply the set of variables and print the neccesarry
// Declare the neccesarry equation
var grossPay1 = calculate.multiply(rate, hours);
var grossPay2 = calculate.multiply(grossPay1, days);
var tax = calculate.multiply(grossPay2, taxrate);
var deduction = calculate.add(tax, sss);
var deduction2 = calculate.add(pagibig, philhealth);
var deduction3 = calcucalte.add(deduction, deduction2);
var netsal = calculate.subtract(grossPay2, deduction3);

// Print all of the processing
console.log('The Gross Income is:' + grossPay2);
console.log(' Tax: ' + tax);
console.Log('SSS:' + sss);
console.Log('Pag-Ibig fund: ' + pagibig);
console.log('PhilHealth:' + philhealth);
console.log('Total Deductions: ' + deduction3);
console.log('The Net Salary is:' + netsal);
