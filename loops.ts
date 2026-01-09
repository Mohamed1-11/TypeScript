let name ;
name = "mohamed ahmed";
const courseName = "playwright" ;
var courseTime = 5;
console.log("my name is " + name + " and I am learning " + courseName + " at " + courseTime+ " pm");

let vegitables = ["tomates", "carrot", "cucamber", "onion"];
for (let i = 0; i < vegitables.length; i++) {
    console.log(vegitables[i]);
}

let friuts = ["apple", "banana", "cherry", "mango"];
for (let i = 0; i < 2; i++) // outer loop دى كده اللوب الكبيرة اللى هتكرر مره واحدة  جواها اللوب العادية
    {
	for (let i = 0; i < friuts.length; i++) {
		console.log("Fruit " + (i + 1) + ": " + friuts[i]);
	}
  }

  let friuts2 = ["apple", "banana", "cherry", "mango"];
  for(const fruit of friuts2) // enhanced for...of loop فى حالة مش مهتم بالانديكس ومش عايز لخبطة
  {
    console.log(fruit);
  }

  

  



