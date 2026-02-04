//code to check number is odd or even

let num = 20
if (num%2==0){
    console.log ("Number is even")
}else{
    console.log("Number is odd")
}


// Code to find the number type
let number=-12
if (number>0){
    console.log("Number is greaterthan 0")
}else if(number<0){
    console.log("Number is lessthan 0")
}else if(number==0){
    console.log("Number is neutral")
}

//code to check  launchBrowser, runTests
let browserName = "chrome"
if (browserName == "chrome")
    console.log ("launch chrome browser")
else
    console.log("No browser launched")

let runtest= "sanity"
switch (runtest){
    case "smoke":
        console.log("Run test smoke")
        break
    case "sanity":
        console.log("Run test sanity")
        break
    case "regression":
        console.log("Run test regression")
        break
    default:
        console.log("Run default smoke")
}