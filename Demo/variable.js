// take the details from user and store values in tabular format

const userId = 1234
let userName = "Vibhas Pandey"
let userEmail = "Workforvibhas@gmail.com"
let userPassword = "1234@vibhas"
const isUserLoggedIn = false
let userState;

//console.table([userId,userName,userEmail,userPassword,userState]);

/**
 * How to create a object
 * 
 * why use object - because it groups multiple values in pair.
 * using key value pair searching, readness, retrival. will be very much easy.
 */

const person = {
    name : "vibhas",
    age : 18,
    address : "uttar pradesh"
}
//console.log(person);
//console.log(person.address);

/**
 * Another way of grouping the element - Arraay
 */

const Person = ['vibhas', 18, 'true'];
//console.log(Person);

// There are two ways to check data types in js.
let country = "India"
console.log(typeof country); // direct pass variable_name
console.log(typeof(country)); // use typeof function to check data types.





