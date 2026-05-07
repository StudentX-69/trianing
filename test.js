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

