// Using if/else statements and strict equality 
// operators, JavaScript code in a script tag that 
// compares two sets of two values. Print true if at 
// least one of the pairs is truthy.

// Values to test:

// param1A	param1B	 param2A  param2B	Expected Print
// "cat"	"cat"	   6	  "6"	     true
// "five"	 5	     "dog"	 "dawg"	     false
// 0	    false	 "horse" "horse"	 true
// "eight"	"eight"	 "ate"	 "ate"	     true
// 11	   "eleven"	 "four"	 "for"	     false
// "cake"	"cake"	 "pie"	 "pie"	     true

if ("cat" === "cat" || 6 === "6"){
    console.log("true");
} else{
    console.log("false");
}

if ("five" === 5 || "dog" === "dawg"){
    console.log("true");
} else{
    console.log("false");
}

if (0 === false || "horse" === "horse"){
    console.log("true");
} else{
    console.log("false");
}

if ("eight" === "eight" || "ate" === "ate"){
    console.log("true");
} else{
    console.log("false");
}

if (11 === "eleven" || "four" === "for"){
    console.log("true");
} else{
    console.log("false");
}

if ("cake" === "cake" || "pie" === "pie"){
    console.log("true");
} else{
    console.log("false");
}