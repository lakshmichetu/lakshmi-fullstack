
// Task 1
// Create 2 variables store 2 numbers in it
// Create 4 varibale to store addition, substraction, multiplication, division
// show addition and substraction in Alert popup
// show multiplication and division in console

var num1 = 12;
var num2 = 5;
var addition = num1 + num2;
var substraction = num1 - num2;
alert(addition + "\n" + substraction);

var multiplication = num1*num2;
var division = num1 / num2;

console.log(multiplication,'........multiplication');
console.log(division,'........division');


// Task 2
// store ProductPrice in a variable and Discount in another variable
// now create one more variable to store calculate discounted Price into another variable
// Discount will be in %
// Show Discounted Product Price in Confirm Popup

var productPrice = 100;
var discount = 2;
var discountPrice = productPrice * discount/100;
var discountedPrice = productPrice - discountPrice;
confirm(discountedPrice);

// Task 3
// store 23 into variable and incremnt it by 5 times by using incremnt Operator print it in console
// decremnt that value by 6 time and show updated value in alert popup

var number = 23;
number = number + 1;
// number ++;
number = number + 1;
number = number + 1;
number = number + 1;
number = number + 1;
console.log(number,'.......number')
number = number - 1;
number = number - 1;
number = number - 1;
number = number - 1;
number = number - 1;
number = number - 1;
alert(number);

// Task 4
// store student names into 3 variable
// store student states into other 3 variables
// now check if student has same name and same state and print it in console

 var studentName1 = 'anuma';
 var studentName2 = 'anuma';
 var studentName3 = 'manuma';

 var studentState1 = "MP";
  var studentState2 = "MP";
   var studentState3 = "AP";

   var studentSame1 = (studentName1 === studentName2) && (studentState1 === studentState2);
    var studentSame2 = (studentName1 === studentName3) && (studentState1 === studentState3);
     var studentSame3 = (studentName2 === studentName3) && (studentState2 === studentState3);

   console.log(studentSame1,'....studentSame1');
    console.log(studentSame2,'....studentSame2');
     console.log(studentSame3,'....studentSame3');


//      Task 5
// create 2 variable to store names of state
// check if both states having same no of charactors
//  (to get charactors legth you need use length property of string)

var stateName1 = "AndhraPradesh";
var stateName2 = "Telangana";
var chkCharlength1 = (stateName1.length === stateName2.length);
// var chkCharlength2 = (stateName1.length >= stateName2.length);
// var chkCharlength3 = (stateName1.length <= stateName2.length);
console.log(chkCharlength1,'.......chkCharlength1');
// console.log(chkCharlength2,'.......chkCharlength2');
// console.log(chkCharlength3,'.......chkCharlength3');
// var name = stateName1.length;
// debugger;

// Task 6
// create a boolean variable and store false value
// now reverse value to true by using Not Operator
// print value in console

var isCheck = false;
var isCheck1 = !false;
console.log(isCheck1,'.........isCheck1');