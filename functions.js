
// Task 1
// Create a simple function with name firstFunction().
// and store the value in console ('This is my first function')
// and call the function firstFunction().

 function firstFunction(){
    var storeValue = 'This is my first function'
    console.log(storeValue,'.......storeValue2');
    return storeValue;
    
}


 var res = firstFunction();
console.log(res,'.......storeValue1');

// Task 2
// Create a function with name square().
// The function square() takes one parameter and parameter name is num.
// Return the parameter (num) multiplied by itself.
// Example like (num * num)
// and call the function square() and store the result in console.

 function square(num){
    return num*num
 }

 var storeData = square(12)
 console.log(storeData,'....storeData');

//  Task 3
// Create one function with name as Addition()
// The function Addition() takes Four parameter like num1,num2,num3,num4.
// take a one variable in function that is result and stored the addition of this
//  four paramater in the result
// Return the result variable under the function
// and now call the Addition() function

function Addition(num1,num2,num3,num4){
    // debugger;
 var result = num1+num2+num3+num4;
 return result;
}
// debugger;
Addition(3,4,5,6)

// Advanced Task
// Task 1
// Create a function which has a parameter where we can send a word as parameter.
// And converts the first letter of word into upper case and Return New String.





function conversionCharacter(word ){
    // debugger;
    var firstLetter = word[0].toUpperCase();
    var remaining = word.slice(1);
    var finalWord = firstLetter + remaining;
    return finalWord
}
// debugger;
conversionCharacter('Lakshmi')

//  Task 2
// Create a function which has a parameter and converts 
// the first letter of each word into upper case and Return New String

// function wordUppercase(sentence){
//     // debugger;
//     var store = sentence.toUpperCase();
//     return store;
// }

// wordUppercase('Put debugger AFTER calling the function')

function capitalizeWords(sentence) {
//  debugger;
    // Step 1: Split sentence into words
    var words = sentence.split(" ");

    // Step 2: Convert each word's first letter to uppercase
    var result = words.map(function(word) {
        var first = word[0].toUpperCase();
        var rest = word.slice(1).toLowerCase();
        return first + rest;
    });

    // Step 3: Join the words back into a string
    return result.join(" ");
}
console.log(capitalizeWords("i am learning javascript"));


// Task 3
// Create a function which accept any no of parameter - it should return sum all parameeter.
// Ex: testFun(1,3) output: 4, testFun(1,3,2,3) output: 9

// function summationOfNum(num1=0,num2 = 0){
//     debugger;
//   var storeNum = num1+num2;
//   return storeNum;
// }

// summationOfNum(1,3)
function summationOfNum(...nums) {
    var total = 0;

    for (var i = 0; i < nums.length; i++) {
        total = total + nums[i];
    }

    return total;
}
console.log(summationOfNum(1, 3));           
console.log(summationOfNum(1, 3, 2, 3)); 
console.log(summationOfNum(5, 10, 20, 50));

// Task 4
// create 2 Buttons
// => "Button 1" => "Button 2"
// we need to record how many times user has click both 
// buttons and show clicked counter in the p tag
// Task 4 - Button Click Counter

  var count1 = 0;
  var count2 = 0;
 function chkBtn1(){
   count1++;
   updateText();
}

 function chkBtn2(){
   count2++;
   updateText();
}

function updateText(){
    document.getElementById('output').innerText = count1 + " " + count2;
}

// Step 1: Select HTML elements
// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var output = document.getElementById("output");

// // Step 2: Create counters
// var count1 = 0;
// var count2 = 0;

// // Step 3: Add click events
// btn1.addEventListener("click", function () {
//     count1++;
//     updateText();
// });

// btn2.addEventListener("click", function () {
//     count2++;
//     updateText();
// });

// // Step 4: Function to update paragraph text
// function updateText() {
//     output.innerText =
//         "Button 1 clicked: " + count1 + " times | Button 2 clicked: " + count2 + " times";
// }


// Task 5
// Create a function with a parameter which will tell you DataType 
// of any parametr value you passed to the function
// Ex: testFun("Chetan") output: string, testFun(12)
//  output: number, testFun({}) output: object, testFun([]) output: array



function chkDataType(data){
 var chkData = typeof(data);
 return chkData;
}

 var store1 = chkDataType('Lakshmi');
 var store2 = chkDataType(12345);
 var store3 = chkDataType({});
 var store4 = chkDataType([]);
console.log(store1,'.store1');
console.log(store2,'.store2');
console.log(store3,'.store3');
console.log(store4,'.store4');   //here array it will shows object bcoz in this
//  method we didn't wrote the code for array.so chk below method//
 
function chkArrData(data){
    if(Array.isArray(data)){
        return "array";
    }
    return typeof(data);
}
console.log(chkArrData('Lakshmi'));  // string
console.log(chkArrData(12345));      // number
console.log(chkArrData({}));         // object
console.log(chkArrData([]));         // array


// Task 6
// Create a function which have 2 parameter -
//  write logic to check if both parameter has same value n if yes return true else return false
// Ex: testFun("Chetan","Chetan") output: true, testFun(12,"12")
//  output: false, testFun(12,12) output: true



function chkSameVlue(data1,data2){
 var storeValue = data1 === data2 ? 'True' : 'false';
 return storeValue
//  if(data1 == data2){
//     return true
//  }else{
//     false
//  }
}

var sameValue1 = chkSameVlue('lakshmi','lakshmi');
var sameValue2 = chkSameVlue(123,'123');
var sameValue3 = chkSameVlue(12,12);

console.log(sameValue1,'.........sameValue1');
console.log(sameValue2,'.........sameValue2');
console.log(sameValue3,'.........sameValue3');

// Task 7
// Create a function with parameter to check if value is number or not - 
// return true or false
// Ex: testFun("Chetan") output: false,
//  testFun(12) output: true, testFun("33") output: true

function chkValues(data){
  return !isNaN(data);
}

console.log(chkValues('anu'),'....1');
console.log(chkValues(12),'....1');
console.log(chkValues('33'),'....1');


// Task 8
// Create a fun with 2 paramater which will check if both parameter
//  in number the it will add num and return sum else return msg - "Number Not Found"
// Ex: testFun("Chetan",23) output: "Number Not Found", testFun(12,12) output: 24

function sumOrMsg(sum,msg){
 if(!isNaN(sum) && !isNaN(msg)){
     return sum + msg;
 }else{
   return 'Number Not Found'
 }
}

console.log(sumOrMsg(12,12),'.........sum');
console.log(sumOrMsg(12,'anu'),'.........msg');
console.log(sumOrMsg(12,'13'),'.........msg');
console.log(sumOrMsg('anu','anu'),'.........msg');


// Task 9
// Create a function which has a parameter -
//  if parameter has string data - create an array of words that we have in parameter to
//   this function n return array of string else show alert as "NO String Found"
// Ex: testFun("This is my Word") output : ["This","is","my","Word"]
// Ex: testFun("Welcome to My Channel") output : ["Welcome","to","My","Channel"]
// Ex: testFun(23123) output : "NO String Found"

function strData(a){
  if(typeof(a) === 'string'){
     return a.split(' ')
  }
  else{
      alert("NO String Found")
  }
}

console.log(strData('This is my Word'),'........str1');
console.log(strData("Welcome to My Channel"),'........str1');
console.log(strData(1231),'........str1');