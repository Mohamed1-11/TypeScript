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


  let i=0
    while(i<friuts2.length)
    {
        console.log("While Loop Fruit " + (i + 1) + ": " + friuts2[i]);
        if(i==2)
            {break;}
        
        i++ // مهم جدا عشان ميعملش لوب مالانهاية عكس فور لوب بيتحط فى الاول
    }
    
    
    // do...while loop
    i=0
    do  {
        console.log("do While Loop Fruit " + (i + 1) + ": " + friuts2[i]);
        i++
        } while(i < 0); // هنا عكس الوايل لوب عشان بيشتغل مرة واحدة على الاقل حتى لو الشرط غلط

    


