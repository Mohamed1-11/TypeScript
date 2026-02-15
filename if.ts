

let prushSum = 2500


if (prushSum > 2000) {
    
    let discount = prushSum * 20 / 100
    console.log(`You got 20% discount , you need to pay ${prushSum - discount} INSTEAD OF ${prushSum}`)
}
else if (prushSum > 1000) {
    let discount = prushSum * 10 / 100
    console.log("You got 10% discount , you need to pay  " + (prushSum - discount) + " INSTEAD OF " + prushSum)


}
else {
    console.log("You didn't get any discount , you need to pay  " + prushSum)
}