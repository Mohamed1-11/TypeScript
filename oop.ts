// learn OOP in TypeScript - in english


class car { }

console.log(car.name); // هيطبع "car" رغم إن الكلاس فاضي تماماً! // لانه بياخد
// خلى بالك لو مدتش للكلاس نيم هو بيعمل اسمه نفس اسم الكلاس



class animal {

    // attributes
    static name: string = "Animal name";
    age: number = 0;
    size: string = "big";
    static tall: string = "high";
    static color: string = "white";


    // constructors





    // functions 
    // inside calss we dont need to write function keyword
    // using this
    static nameFunction() {
        console.log(this.name); // using this to access the static attribute inside the class
    }

    static sleep() {
        console.log("sleep")
    }
    static eat(animalfood: string) {
        console.log(animalfood);
    }
    static voice(animalVoice: string): string {
        return animalVoice;

    }
    static animaltall() {
        console.log(this.tall);
    }

    static animalColor(color: string = this.color) { // default parameter
        console.log(color);
    }



     greeting() { // non static function
        console.log("hello my name is " + animal.name);
    }


}


class dog extends animal {
    animalsize: string = "normal";



}

console.log(animal.name); // using static in the calss
console.log(dog.name);
dog.nameFunction();
dog.sleep();
animal.eat("animalfood");
dog.eat("dogfood")
console.log(animal.voice("animal voice"));
console.log(dog.voice("woof"));
animal.animaltall();
animal.animalColor(); // using default parameter
dog.animalColor("black"); // using parameter to override the default parameter and inherit the function from the animal class   

// animal.greeting() // error because its non static function
let greeting = new animal();
greeting.greeting() // hello my name is Animal name
let doggreeting = new dog();
doggreeting.greeting()  // hello my name is Animal name  because the dog class inherits from the animal class and the greeting function uses the static attribute name which is "Animal name" in the animal class


let cat = new animal(); // for non static
console.log(cat.age)
console.log(cat.size)
// console.log(cat.age(5)) // error because age is not a function its an attribute
cat.greeting()

let soltan = new dog(); // نقدر نغير فى قيمة اتربيوت 
console.log(soltan.animalsize)
soltan.age = 3 ; 
console.log(soltan.age)
// console.log(soltan.voice("wooooooooof")) // مش هتنفع لانها ستاتك
// console.log(cat.name) // name is static attribute so we cant access it from an instance of the class we have to access it from the class itself



