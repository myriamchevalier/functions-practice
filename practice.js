// Best in show

// Does the function require input to do its job?
// in this case, it does. 

// Does the function need to return a value?
// Generally yes

// Am I referencing the return value with a variable?
// Yes, in the function scope before conditional statements if any

// What should I do with the return value?
// Reference it in the global scope

// What happens if I don't provide an argument at all?
// undefined

// What happens when I remove the parameter from the definition of the function?
// Syntax errors


// const favoriteDog = (dogBreed) => {
//     let favoriteDogBreedSentence = ""
//     if (dogBreed === "meow"){
//         favoriteDogBreedSentence = "I like cats"
//     } else {
//         favoriteDogBreedSentence = `My favorite dog breed is ${dogBreed}`
//     }
//     return favoriteDogBreedSentence    
// }

// const myFavorite = favoriteDog("meow")

// console.log(`As far as pets go, ${myFavorite}`)



// Addition

// Switch the order of your parameters. For example, if your parameters are (first, second, third), then change it to (second, first, third). What effect does that have on the unit of work?
// No effect, but could be different with another kind of operation

// Remove one parameter, but not the others. Does the function still work?
// No

// Change the order of the variables when you add them together in the function. Does that affect the output of the function?
// No

// const add = (number1, number2, number3) => {
//     let total = number1 + number2 + number3
//     return total
// }

// const sum = add(17, 4, 11)

// console.log(sum)

// Self-driving cars

const go = (direction, speed) => {
    let sentence = ""
    
    if (speed > 75){
    sentence = `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`
    } else {
    sentence = `The car is moving ${direction} at ${speed} mph.`
    }
    return sentence
}

const movingCar = go ("forwards", 80)

console.log(movingCar)