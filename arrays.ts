let names = ["Mohamed", "Ahmed", "Ali", "Omar", "adel"]; // Array of strings
console.log("Names Array: " + names);
console.log("First Name: " + names[0]); // Accessing first element
console.log("Second Name: " + names[1]); // Accessing second element 
names[2] = "Hassan"; // Modifying third element 
console.log("Modified Names Array: " + names);
names.unshift("Sayed"); // Adding element at the beginning
console.log("After unshift: " + names);
names.push("Youssef"); // Adding element at the end
console.log("After push: " + names);
names.shift(); // Removing first element
names.pop(); // Removing last element
console.log("After shift and pop: " + names);

let producctpriceInstring = "15$"; // Array of strings
let producctpriceInnumber = producctpriceInstring.slice(0, 2); // لو 150 $ كنت هعمل القوس (0,3)
console.log("Product price in number: " + producctpriceInnumber);
console.log(typeof producctpriceInnumber); // type is string
console.log(typeof Number(producctpriceInnumber)); // convert string to number
console.log(typeof producctpriceInnumber); // type back to string you must but Number() function to convert it
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8]; // Array of numbers 
let num = numbers.filter(num => num > 4); // Filter numbers greater than 4
console.log(num);
let mixedArray: (string | number | boolean)[] = ["Mohamed", 25, true, "Ahmed", 30, false]; // Array of mixed types
console.log(mixedArray);
let arayofArrays: any[][] = [[1, 2, 3], ["mohamed", 5, 6], [7, 8, 9]]; // Array of arrays (2D array)
console.log(arayofArrays)
console.log("First element of second array: " + arayofArrays[1]?.[0]); // Accessing element (?. to avoid error if undefined)









