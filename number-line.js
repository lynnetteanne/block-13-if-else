// PRINT
// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";
// Values to test:
// num1	  num2	Expected Print
// 50	  51	"101 is greater than 100"
// 99	  -2	"97 is greater than 0"
// 0	  101	"101 is greater than 100"
// 500	  -500	"0 is equal to 0"
// -1000	0	"-1000 is a negative number"
// -5	   0	"-5 is a negative number"

let num1 = 50;
let num2 = 51;

if (num1 + num2 > 100){
    console.log(num1 + num2 + " is greater than 100");
} else{
    console.log("nope");
}

if (99 + -2 > 0){
    console.log(99 + -2 + " is greater than 0");
} else{
    console.log("nope");
}

if (0 + 101 > 100){
    console.log(0 + 101 + " is greater than 100");
} else{
    console.log("nope")
}

if (500 + -500 === 0){
    console.log(500 + -500 + " is equal to 0");
} else{
    console.log("nope");
}

if (-1000 + 0 < 0){
    console.log(-1000 + 0 + " is a negative number");
} else{
    console.log("nope");
}

if (-5 + 0 < 0){
    console.log(-5 + 0 + " is a negative number");
} else{
    console.log("nope");
}