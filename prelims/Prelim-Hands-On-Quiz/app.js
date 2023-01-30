// Enriquez Juan Miguel T.         WD - 201
var calculate = require('./calculations.js');

// First set of variables
var rate = 300;
var hours = 4;
var days = 6;
var taxrate = 0.1;

// Second set of variables
var sss = 1200;
var pifund = 300;
var phfund = 400;

// Third set of variables: Add and multiply the set of variables and print the neccesarry
// Declare the neccesarry equation
var grossPay1 = calculate.multiply(rate, hours);
var grossPay2 = calculate.multiply(grossPay1, days);
var tax = calculate.multiply(grossPay2, taxrate);
var deduction = calculate.sum(tax, sss);
var deduction2 = calculate.sum(pifund, phfund);
var deduction3 = calculate.sum(deduction, deduction2);
var netsal = calculate.minus(grossPay2, deduction3);

// Print all of the processing
console.log('Gross Income: ' + grossPay2);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig Fund: ' + pifund);
console.log('PhilHealth: ' + phfund);
console.log('Total Deductions: ' + deduction3);
console.log('Total Net Salary: ' + netsal);
