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