function greetting(name: string) {

    console.log(`hello ${name}`);
}

// greetting ("mohamed") 
greetting("essam")



function countTheDiscountOf(prushSum: number) {

    if (prushSum > 2000) {

        let discount = prushSum * 20 / 100
        console.log(`You got 20% discount , you need to pay ${prushSum - discount} instead of ${prushSum}`)
    }
    else if (prushSum > 1000) {
        let discount = prushSum * 10 / 100
        console.log("You got 10% discount , you need to pay  " + (prushSum - discount) + " instead of " + prushSum)


    }
    else {
        console.log("You didn't get any discount , you need to pay  " + prushSum)
    }
}

countTheDiscountOf(2500)
countTheDiscountOf(1200)
countTheDiscountOf(500)

// add return to function make it keeps value 

function sum(firststNumber: number, secondNumber: number): number {
    return firststNumber + secondNumber;



}
//console.log (sum(2,8))


function cross(Number: number): number {
    return Number * 1000;

}
console.log(cross(sum(3, 5)))

function Substract(Number: number) {
    console.log(`finalresult is ${Number - 500}`)

}
Substract(cross(sum(3, 5)))

// Arrow function = =>
const sumArrowFunction = (firstNumber: number, secondNumber: number): number => {

    return firstNumber + secondNumber
}
console.log(sumArrowFunction(4, 7))

// default parameter value Function
function sum1(a: number, b: number = 10): number {
    return a + b
}
console.log(sum1(1, 2)) // 1 + 2 
console.log(sum1(1)) // 1 + 10 
