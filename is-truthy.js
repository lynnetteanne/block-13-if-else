// Input Values	      Expected Print
// "I am a string"	  true
// false	          "The boolean value false is falsy"
// null	              "The null value is falsy"
// undefined	      "undefined is falsy"
// 0	              "The number 0 is falsy (the only falsy number)"
// ""	              "The empty string is falsy (the only falsy string)"

const input = "I am a string";

if ("I am a sting"){
    console.log("true");
} else {
    console.log("false");
}

const isFalse = true;

if (isFalse){
    console.log("The boolean value false is falsy");
} else {
    console.log("false");
}

const isNull = false;

if (isNull){
    console.log("true");
} else {
    console.log("The null value is falsy");
}

const isUndefined = false;

if (isUndefined){
    console.log("true");
} else{
    console.log("undefined is falsy");
}

const num = 0;

if (num){
    console.log("true");
} else{
    console.log("The number 0 is falsy (the only falsy number)");
}

if (""){
    console.log("true");
} else {
    console.log("The empty string is falsy (the only falsy string)");
}