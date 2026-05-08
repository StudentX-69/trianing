// ForEach function
var myFriends = ['vinnu','aman','yogesh']
myFriends.forEach(
    function (element,index,array){
        console.log(element + 'index: ' + index + array)
    }
)

// fat arrow function
myFriends.forEach((element,index,array)=> {
    console.log(element + 'index: ' + index + array)
 })

// Searching and filter in  arry
const fruits = ["apple","banana","grapes","guava","watermelon"]
const searchresults = fruits.filter(fruit => fruit.toLocaleLowerCase().includes("on"));
console.log(searchresults);

// Compare an array
// Method A : JSON.stringify (Quick & Dirty)
const arr1 = [1,2,3];
const arr2 = [1,2,3];
console.log(JSON.stringify(arr1)===JSON.stringify(arr2));

// Method B : The .every() method(Reliable)
const isEqual = (a,b) => 
    a.length === b.length &&
    a.every((val,index) => val === b[index])
 console.log(isEqual([1,2],[1,2]))

// Map function
const array1 = [1,2,5,9,16,25];
// let newarr = array1.map((curELem,index,arr)=>{
//     return curELem > 9;
// }
// ) 
// console.log(array1);
// console.log(newarr);
let newarr = array1.map((curElem,index,arr) =>{
    return `index no = ${index} and the value is ${curElem} belong to ${arr}`
})
console.log(newarr);

let newarrfor = array1.forEach((curElem,index,arr)=>{
    return `index no = ${index} and the value is ${curElem} belong to ${arr}`
})
console.log(newarrfor);
// How to fatten an array
// Converting 3d and 2d Array in one dimensional array
const Arr = [
    ["Zone_1","Zone_2" ],
    ["Zone_3","Zone_4" ],
    ["Zone_5","Zone_6" ],
    ["Zone_7","Zone_8" ]
]
let flatArr = Arr.reduce((accum,curval) =>
{
    return accum.concat(curval)
})
console.log(flatArr)

// Extraction of string by splice method
var str = "apple,banana,kiwi,mango";
var res = str.slice(0,3);
console.log(res);

var string = "apple,banana,kiwi,mango";
var result = string.slice(5,-3);
console.log(result);

var Str = "apple,banana,kiwi,mango";
var Res = Str.slice(6);
console.log(Res);

// Math function
console.log(Math.ceil(4.5))
console.log(Math.ceil(5.1))
console.log(Math.floor(4.5))
console.log(Math.floor(90.1))
console.log(Math.random()*10)

// Array Destructuring
const myBio = ["Abhay",'Nirmalkar',20];
let [myFirstname,myAge,myLastname,myDegree='BCA'] = myBio;
console.log(myDegree);

//Object Destructuring
const myBioadata = {
    myName : 'Abhay nimalkar',
    Age : 20,
}
let {myName,Age,MyDegree='BCA'}=myBioadata;
console.log(Age)

//
var age = 17;
if (age >=18){
    console.log("eligible to vote")
} else{
    console.log("under age not eligible to vote")
}

var age = 17 ;
console.log((age >= 18) ? "you can vote " : "you can not vote");

//
var area = "Triangle";
var PI = 3.142 , l=5 , b=6; r=7;

if(area == 'circle'){
    console.log("Area of Circle is : " + PI*r**2)
}else if(area == 'Triangle'){
    console.log("Area of Triangle is : " + (l*b)/2)
}else if(area == 'Rectangle'){
    console.log("Area of Rectangle is : " + l*b)
}

//
var area = "dsfsad";
var PI = 3.142, l=5, b=4, r=3;
switch(area){
    case 'Circle':
    console.log("the area of circle is: " +PI*r**2);
    break;
    case 'Triangle':
    console.log("the area of Triangle is: " +(l*b)/2);
    break;
    case 'Rectangle':
    console.log("the area of Rectangle is: " + (l*b));
    break;
    default:
    console.log("please enter valid data");
}

// While loop
var num = 0 ;
while(num < 10){
    console.log(num);
    num++;
}

// Do While loop statement
var num = 20;
do{
    debugger;
    console.log(num);
    num++;
}while(num < 10);

// for loop
for(var num = 0; num < 10; num++){
    debugger;
    console.log(num);
}
for(var num = 0; num < 10; num++){
    var TableOf = 12;
    console.log(TableOf + "*" + num + "="+TableOf*num);
}

//
function sum(a,b){
    var Total = a+b;
    console.log(Total)
}
sum();
sum(20,10);
sum(23,13);

//
var funExp = function(a,b){
    return Total = a+b;
}

var sum = funExp(15,115);
var sum1 = funExp(20,15);

console.log( sum < sum1);

//
function BioData() {
    let MyFirstName = "Abhay";
    console.log(MyFirstName);

  if(true){
    var MyLastName = "Nirmalkar";
    console.log('inner'+MyLastName);
    console.log('inner'+MyFirstName);
  }
  console.log('innerOuter'+ MyLastName);
}

BioData();

// Template Literals
for(let num = 1 ; num < 10 ; num++){
    let TableOf = 8;
    console.log(`${TableOf} * ${num} = ${TableOf * num}`);
}

//Default parameters
function mult(a,b=5){
    return a * b ;
}
console.log(mult(9))

// Fat arrow Function
const Sum = () => `the sum of the two number is ${(a=5)+(b=4)}`;
console.log(Sum());

// For in loop // index no
 var myFriends = ['vinnu','gajendra','yogesh']

for (let elements in myFriends){
    console.log(elements);
}
// For of loop // elements
for (let elements of myFriends){
    console.log(elements);
}

// Sort an array
const numbers = [5,7,9,4]
numbers.sort();
console.log(numbers);
// Ascending order
numbers.sort((a,b) => a-b)
console.log(numbers);
// Descending order
numbers.sort((a,b) => b-a)
console.log(numbers);

// Challange 1
const months = ['jan','march','april','june','july'];
months.push('dec')
// console.log(months);
months.splice(2,3)
// console.log(months);
months[1] = 'March'
// console.log(months)
months.pop('june')
// console.log(months)

// Challenge 2
let Array = [25,36,49,64,81];
let Result = Array.map(Math.sqrt);
console.log(Result);
// Challenge 3
let Ar = [2,3,4,6,8];
const Result1 = Ar
 .map(num => num *2)
 .filter(num => num > 10);
console.log(Result1);

// challenge 4
const Display = "A 150-word text is a concise, focused piece of writing, typically spanning 0.3 single-spaced or 0.6 double-spaced pages, ideal for short essays, summaries, or paragraphs. It requires a clear introduction, one or two supporting body paragraphs, and a brief conclusion to effectively convey a message without unnecessary detail. To create a 150-word piece, it is recommended to write a longer draft first, then remove filler words and edit strictly for impact. This length is sufficient to convey a complete thought, such as describing a personal experience or arguing a single point, without overwhelming the reader. It is a popular constraint for creative writing, such as short stories, as well as academic examples and movie reviews. Effective 150-word texts focus on direct communication rather than extensive, detailed explanations. It constitutes roughly 10-15 sentences, depending on sentence complexity.";



// The Concat Method
let fName = "Abhay"
let lName = "Nirmalkar"
console.log(fName + lName);
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" ",lName));

// String.trim()
var str = "           hello            world!                         ";
console.log(str.trim());
