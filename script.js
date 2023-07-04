"use struct";

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // toFixed method

// // The toFixed() method is a built-in JavaScript function that is used to format a number with a fixed number of decimal places and return it as a string. It allows you to specify the number of digits after the decimal point. //

//============================================================================================================================================//

const num = 3.1416;

console.log(num.toFixed(5));
console.log(num.toFixed(2));
console.log(num.toFixed(1));
// toFixed method returns the valuse as string. We can solve this problem by using Number method. //
console.log(Number(num.toFixed(2)));

//--------------------------------------------------------------------------------------------------------------------------------------------//

const a = 0.1;
const b = 0.2;
const sum = a + b;

console.log(+sum.toFixed());
console.log(+sum.toFixed(3));
console.log(+sum.toFixed(1));
// (+) can turn the string to number. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // parsing

// // Parsing is the process of converting a string representation of data into its corresponding data type or structure in a programming language. It involves extracting relevant information and transforming it into a format that can be used and manipulated within the program. In JavaScript, there are several built-in functions and methods for parsing different types of data. //

//============================================================================================================================================//

console.log(parseInt("8.25rem"));
console.log(parseFloat("8.25rem"));
console.log(parseFloat("8 rem"));
console.log(parseInt("s8 rem")); // resule: NaN

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // parseInt can turn binary into decimal and decimal into binary. //

console.log(parseInt("1011010", 2));
console.log(parseInt(100, 2));
console.log(parseInt(1010, 2));
// 2 stands for binary //
console.log(parseInt(1010, 10));
console.log(parseInt(100, 10));
// 10 stands for decimal //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Math methods

// // JavaScript provides a built-in Math object that contains various mathematical methods and constants. These methods and constants allow you to perform common mathematical operations and calculations. //

//============================================================================================================================================//

// // Math.sqrt

// // The Math.sqrt() method is used to calculate the square root of a number. It takes a single argument and returns the square root as a result. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(Math.sqrt(25));
console.log(Math.sqrt(100));
console.log(Math.sqrt(20));

//============================================================================================================================================//

// //  Math.min and Math.max

// // The Math.min() and Math.max() functions are part of the Math object in JavaScript and are used to find the minimum and maximum values, respectively, among a set of numbers. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

const arr = [7, 2, 8, 1, 3, 5, 9];

console.log(Math.min(...arr));
console.log(Math.max(...arr));

//============================================================================================================================================//

// // Math.PI

// // Math.PI is a property of the Math object in JavaScript that represents the mathematical constant π (pi), which is the ratio of the circumference of a circle to its diameter. It is a predefined constant in JavaScript and is accurate to approximately 15 decimal places. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(Math.PI);
console.log(Math.PI * 12 ** 2);
console.log(2 * Math.PI * 12);

//============================================================================================================================================//

// // Math.trunc

// // The Math.trunc() function is a method provided by the Math object in JavaScript. It is used to truncate the decimal part of a number and return the integer part. In other words, it removes the fractional digits from a number and returns the integer portion. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(Math.trunc(3.1));
console.log(Math.trunc(10.9));
console.log(Math.trunc(0.334545));
console.log(Math.trunc(-5.234));

//============================================================================================================================================//

// // Math.random

// // Math.random() is a method provided by the Math object in JavaScript that generates a random floating-point number between 0 (inclusive) and 1 (exclusive). It returns a random number that is greater than or equal to 0 and less than 1. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(Math.random()); // 0 - 99999
console.log(Math.random() * 20); // 0 - 19.9999
console.log(Math.trunc(Math.random() * 100)); // 0 - 99

//============================================================================================================================================//

// // Math.floor

// // the Math.floor() method, it is used to round a number down to the nearest integer. The Math.floor() function returns the largest integer less than or equal to a given number. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(Math.floor(2.9));
console.log(Math.floor(2.1));
console.log(Math.floor(2.5));

//============================================================================================================================================//

// // Math.seal

// // The Math.ceil() function is a method provided by the Math object in JavaScript. It is used to round a number up to the nearest integer, rounding away from zero. The ceil in Math.ceil() stands for "ceiling." //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(Math.ceil(2.1));
console.log(Math.ceil(2.9));
console.log(Math.ceil(2.5));

//============================================================================================================================================//

// // Math.round

// // The Math.round() function is a method provided by the Math object in JavaScript. It is used to round a number to the nearest integer. The round in Math.round() stands for "rounding." //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(Math.round(2.5));
console.log(Math.round(2.1));
console.log(Math.round(2.4));
console.log(Math.round(2.9));
console.log(Math.round(-2.9));
console.log(Math.round(-2.1));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // bigInt

// // BigInt is a built-in object in JavaScript that provides a way to represent and work with arbitrarily large integers. It was introduced in ECMAScript 2020 to address the limitations of the Number type, which has a maximum safe integer value. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(BigInt(29765235657923647236726582768567589678947694766));
console.log(29765235657923647236726582768567589678947694766n);
console.log(100000n * 100000n);
console.log(10n === 10);
console.log(typeof 9275829234923498247927465746537n);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // dates

// // In JavaScript, the Date object provides a way to work with dates and times. The Date object can be used to create new instances representing specific dates and times, as well as perform various operations and retrieve information about dates and times. //

//============================================================================================================================================//

const date = new Date();
console.log(date);
// new Date() method returns the current date and time. //

console.log(new Date("july 14 2020 10:45:12"));
console.log(new Date(2023, 6, 15, 4, 55, 10));
// mounth in 0 based. (january = 0 ------ decenber = 11) //

//--------------------------------------------------------------------------------------------------------------------------------------------//

console.log(new Date(0));
// When you execute console.log(new Date(0)), it creates a new Date object representing the date and time corresponding to the Unix timestamp 0. The Unix timestamp 0 represents the starting point of Unix time, which is January 1, 1970, 00:00:00 UTC. //

console.log(new Date(3 * 24 * 60 * 60 * 1000));
// thes in 3 days after. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

const time = new Date(2023, 6, 2, 3, 19, 44, 639);
console.log(time);
console.log(time.getDate());
console.log(time.getFullYear());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());
console.log(time.getTimezoneOffset());

//--------------------------------------------------------------------------------------------------------------------------------------------//

const myTime = new Date(2023, 6, 2, 3, 19, 44, 639);

console.log(myTime.getTime(2023, 6, 2, 3, 19, 44, 639)); // timestamp

console.log(new Date(1688246384639));
// we can get the time from the time stamp using new Date(). /
