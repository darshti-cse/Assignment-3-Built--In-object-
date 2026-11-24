// Assignment -3 Built-in object in js 

// ● Math Object
// Math.random(), Math.floor(), Math.ceil(), Math.round()
// Math.abs(), Math.pow(), Math.sqrt(), Math.min(), Math.max()
// ● String Methods
// slice(), split(), replace(), includes(), trim(), endsWith()
// ● Number Methods
// toFixed()
// ● Date Object
// Date(), Date.now()

//Q.1 Random Number

console.log(Math.random());

//Q.2 any whole number between the 1 to 10 

let min=1;
let max=10;

let ran=Math.floor(Math.random()*(max-min+1))+min;
console.log(ran);


//Q.3 round the number

console.log(Math.round(4.6));

//Q.4 floor and the ceil

console.log(Math.floor(7.3));
console.log(Math.ceil(7.3));

//Q.5 Absoulte value

console.log(Math.abs(-25));

//Q.6 power and the square root

console.log(Math.pow(2,3));
console.log(Math.sqrt(64));

//Q.7 minimum and maximum

console.log(Math.min(10,25,5,18));
console.log(Math.max(10,25,5,18));

//SECTION-2 String built-in Methods

//Q.8 Extract part of a string
let str="JavaScript Programming";
console.log(str.slice(0,10));

//Q.9 Split a String
let str2="HTML,CSS,JavaScript";
console.log(str2.split(","));

//Q.10 Replace text 

let str3="Hello World";
console.log(str3.replace("World","JavaScript"));


//Q.11 Check email

let email="darshtisaini@gmail.com";
console.log(email.includes("@"));

//Q.12 check file extension
 
let myphoto="drishit.png";
console.log(myphoto.endsWith(".png"));


//Q.13 remove the extra space

let str5="   Hello Javascript  ";
console.log(str5.trim());

//Q.14 Replace a greeting

let con="Hello User";
console.log(con.replace("User","Drishti"))

//SECTION- 3 Number Built-in Methods

//Q.15 format a Decimal Number

let num=12.56789;
console.log(num.toFixed(2));

//Q.16 format a price

let input=99.5;
console.log(input.toFixed(2));


//SECTION-4 Date object 

//Q.17 current Date amd the Time

let today=new Date();
console.log(today);
console.log(today.getDay());  //2  its start with [0]
console.log(today.getMonth());//10   [but now is the Nov->11]

console.log(today.getDate());
console.log(today.toDateString());
console.log(today.toLocaleDateString());

//Q.18 Current timestamp

let timestamp=Date.now();
console.log(timestamp);


