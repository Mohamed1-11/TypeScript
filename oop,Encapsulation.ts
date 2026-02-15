class AccessModifier {
    private name: string = "private";
    protected age: number = 25;
    public email: string = "public@example.com";
    adreess: string = "default address"; // default is public
}

// Encapsulation { get & sett }

class car {
    private model: string
    year: number
    color: string

    // constractors // its better way from retunt function and use many values in one time
    constructor(model: string, year: number, color: string, public price: number) { // you also can declare new parameter in constractors like price
        this.model = model, this.year = year, this.color = color, this.price = price


    }


    // get & sett funiction to use private value and use function as a value 
    get CarModel() {
        return this.model
    }


}


class toyota extends car { // فى حالة عازي تغير فى الكونسركتر باستخدام super

    constructor(model: string, year: number,) {

        super(model, year, "red", 2400)
    }

    get CarColor() {
        return this.color

    }
}

let f1 = new toyota("formela", 2005,)      // child constractors
console.log(f1.CarModel);
console.log(f1.CarColor);

let sunny = new car("sunny", 2006, "red", 2500)  // father constractors
console.log(sunny.CarModel)
// console.log(sunny.CarColor); // this dunction not in father class(car)
console.log(sunny.color) // call the value 


// abstract

abstract class animal {
    abstract get speed(): string

}

class dog extends animal {
    get speed(): string {
        return "fast"
    }
}

class turtle extends animal {
    get speed(): string {
        return "slow"
    }
}

// interface
interface shape {
    area(): number
}

interface volume {
    volume(): number
}

class oppjective implements shape, volume {
    area(): number {
        return 100
    }

    volume(): number {
        return 200
    }
}











