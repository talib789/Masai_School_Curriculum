let arguments = process.argv.slice(2);
let crypto = require("crypto");
let operation = "";
let a; 
let b;

if (arguments[0] === "random") {
        a = crypto.randomInt((+arguments[2]));
        b = crypto.randomInt((+arguments[2]));
        operation = arguments[1]
} else {
        operation = arguments[0]
        a = arguments[1];
        b = arguments[2];
}

const { add, sub, mult, divide, sin, cos, tan, test } = require("./functions.js")

switch (operation) {
        case "add":
                console.log(add(a, b))
                break;
        case "sub":
                console.log(sub(a, b));
                break;
        case "mult":
                console.log(mult(a, b));
                break;
        case "divide":
                console.log(divide(a, b));
                break;
        case "sin":
                console.log(sin(a));
                break;
        case "cos":
                console.log(cos(a));
                break;
        case "tan":
                console.log(tan(a));
                break;
        default:
                console.log("Put arguments")
}

