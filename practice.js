// Best in show

// Does the function require input to do its job?
// in this case, it does. 

// Does the function need to return a value?
// Yes, otherwise it is not "pure", would return undefined

// Am I referencing the return value with a variable?
// Yes, through the function

// What should I do with the return value?
// Reference it in a new variable

// What happens if I don't provide an argument at all?
// undefined

// What happens when I remove the parameter from the definition of the function?
// Syntax errors


const favoriteDog = (dogBreed) => {
    
    if (dogBreed === "meow"){
        const cats = "I like cats"
        return cats
    }
    const myFavoriteDogBreed = `My favorite dog breed is ${dogBreed}`
        return myFavoriteDogBreed 
}

const myFavorite = favoriteDog("meow")

// console.log(`As far as pets go, ${myFavorite}`)

// Addition

// Switch the order of your parameters. For example, if your parameters are (first, second, third), then change it to (second, first, third). What effect does that have on the unit of work?
// No effect, but could be different with another kind of operation.

// Remove one parameter, but not the others. Does the function still work?
// No

// Change the order of the variables when you add them together in the function. Does that affect the output of the function?
// No

const add = (number1, number2, number3) => {
    const sum = number2 + number3 + number1  
    return sum
}
console.log(add (17, 4, 11))

