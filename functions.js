
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





