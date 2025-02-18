let h1 = document.querySelector("h1")
h1.innerHTML = "My First Assignment"

//Step 1. converted the given identifers to camel case notation
let someMonth
function theMonth(){}
let currentMonth
let summerMonth
let myLibraryFunction

//Step 2. Numeric literal 
9
//String literal
'Cool'
//boolean literal 
true
//null literal
null

//Step 3. complex variable expressions
let myName = 'Chitra'
let myAssignmentScores = 10 + 20


//Step 4 & 5. declaring variables and three way of declaring 
//first method of variable declaration
let firstName           // camelcase notation
let lastName     
let referralSource      
let weMayContactYou     

//second method of variable declaration
let strAddress, strCity, strState, intZipCode   // hungarian notataion
//third method of variable declaration
let yourAge     = 35        

//Step 6. example of coerced result 
let myFavoriteName = 'Sai'
let lengthofName = myFavoriteName.length
window.console.log('My favorite name has ' + lengthofName +' letters')

//Step 7. String and boolean coerced result 
let isStudent = true
window.console.log(isStudent + ' ' + myName + ' is a student')

//number, boolean and string coerced result 
let classNumber =690
window.console.log(isStudent + ' class number ' + classNumber)

//Step 8.fixed the invalid string with escape characters

let someString = 'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"'
window.console.log(someString)

//Step 9. variable with null value
let number1= null
console.log(number1)

//variable with undefined value
let number2
console.log(number2)

//Step 10. unary operators
let i = 8
i++
console.log(i)                  //increamental
i--
console.log(i)                  //decremental

console.log(typeof myName)      //typeof 

console.log(typeof number2)           //undefined variable

let num1 =5, num2 = 8
console.log(num1<num2)          //return boolean result

//Step 11. concatenation
alert("Hello Chitra" + ", " + "welcome to the Javascript class!")

//Step 12. Using myName variable in the place of name
alert("Hello " + myName + ", " + "welcome to the Javascript class!")

//Step 13. Using myName variable in the place of name

let myCourse = ' Javascript'
alert("Hello " + myName + ", " + "welcome to the" + myCourse + " class!")

//Step 14. add new line in alert
alert("Hello " + myName + ".\n welcome to the " + myCourse + " class!")

//Step 15. Get name from user and pop up welcome message
myName = prompt("Enter your Name")
alert("Hello " + myName + ". \nwelcome to the " + myCourse + " class!")

//Step 16. Get the course name from user and pop up welcome message
myCourse = prompt("Enter the course you have enrolled")
alert("Hello " + myName + ". \nwelcome to the " + myCourse + " class!")

//Step 17. sum of x and y
let x = 10, y= 20
console.log(x+y)

//Step 18. add and assign 20 to x
x = 20
console.log(x+=20)

//Step 19. multiple and assign 5 to x
x = 20
console.log(x*=5)

//Step 20. value equals to the remainder of 20 divided by 3
x=20
console.log(x%=3)
console.log(x/=1)

//Step 21.Use comparison and logical operator to return true
x= 200, y = 20
if(x>100 || y == 10){
    console.log('True one of the number is greater than 100')
}

///Step 21.Use comparison and logical operator to return false
num1= 19 , num2 = 19 
if(num1 != num2){
    console.log('True both the numbers are not same')
}
else{
    console.log('False both the numbers are same')
}

