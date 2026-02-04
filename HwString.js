//Return the length of the last word in the string. 
let string = "Hello World"
let trimmedstring=string.trim()
let splitword = trimmedstring.split(" ")
console.log(`Length of last word is ${splitword[1].length}`)
console.log(`Last word of string is ${splitword[1]}`)

let s= "   fly me   to   the moon  " 
let trimmeds=s.trim()
let splitwords = trimmeds.split(" ")
let lastwordofs=splitwords[splitwords.length-1]
console.log(`Length of last word is ${lastwordofs.length}`)
console.log(`Last word of string is ${lastwordofs}`)

//code to check if two strings are anagrams
let ana1 = "listen"
let ana2 = "silent"
if (ana1.length === ana2.length)
    console.log("Length of the given strings are same")
let chkana1 = ana1.split("").sort().join()
let chkana2 = ana2.split("").sort().join()
if(chkana1 === chkana2){
    console.log("Given string is Anagram")
    console.log(`string1: ${ana1}`)
    console.log(`string2: ${ana2}`)
}
else
    console.log("Given string is not anagram")

// code to check the given string is palindrome
let palstring="madam"
let revstring = palstring.split('').reverse().join("")
console.log(`reverse of given string: ${revstring}`)
if (palstring === revstring)
    console.log("The given string is palidrome")