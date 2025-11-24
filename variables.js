
// create 3 variables to store firstName,
//  middleName, lastName and Generate fullName by joining 3 variable and
//   print full name in console.


var firstName = 'Lakshmi';
var middleName = 'S';
var lastName = 'Srinivas';

var fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName,'...........fullName')


// create variables to store student details like 
// name, contactNo, FatherName, MotherName, Class,RollNo and
//  print it in console

var studentDetails = {
    name : 'Lakshmi',
    contactNo:1234567891,
    FatherName:'Srinivas',
    MotherName:'Jayamma',
    Class:'12th',
    RollNo:123

}

console.log(studentDetails,'.........studentDetails')

// create variable to store 
// address, city ,state and
//  pincode- and print address and city in console

var addressRecord = {
    address:'#89',
     city:'XYZ' ,
     state:"b'lore"
}

console.log(addressRecord,'....addressRecord')


// create currentDate variable and store current Date into it
//  and show that in alert popup


var currentDate = new Date();
alert('todayDate' + " " + currentDate)

// create variables to store patient data -
//  name, age, address, contactNo and print name & age in console

var patientData = {
   name:'XYZ' ,
   age:23,
   address: 'gardencity',
   contactNo:1234567898,
}

console.log(patientData.name,'...........patientData.name');
console.log(patientData.age,'...........patientData.age')


// Create 2 variable num1 assign value = 1122, num2 == 3344
// show both varible in alert popup
// after alert now replace value of num1 with num2 & num2 with num1
// now show updated value in alert again

var num1 = 1122;
var num2 = 3344;
alert("num1 = " + num1 + " num2 = " + num2);

var temp1 = num1;
num1 = num2;
num2 = temp1;

alert("num1 = " + num1 + " num2 = " + num2);

// Advanced Tasks///

// Create a boolean Variable Store some value in it
// if value is true print "Value is Success" if false print "Value is Danger"

var isvalue = "SocialStudies"
 var isPresent = isvalue == "SocialStudies" ? "Value is Success" : "Value is Danger";

 console.log(isPresent,'.......isPresent')

