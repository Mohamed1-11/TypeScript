let person = {
    name: "mohamed",
    ID: 28,
    employed: true,
    phoneNumber: [{
        primary: "010",
        secondary: "011"
    },

    {
        home: "012",
        mobile: "015"


    }]

}
console.log(person.ID);
console.log((person.phoneNumber[0] as any).primary);

// making object as a Type
type Employee = {
    name :string ,
    ID : number,
    Employeed : boolean
}

let employee1: Employee = {
    name: "Ahmed",
    ID: 30 ,                                                                                                                                                                                   
    Employeed: true
}
console.log(employee1.name);

let car: [string, string] = ["BMW", "black"] ;
