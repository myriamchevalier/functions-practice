// Best in show

const favoriteDog = (dogBreed) => {
    
    if (dogBreed === "meow"){
        const cats = "I like cats"
        return cats
    }
    const myFavoriteDogBreed = `My favorite dog breed is ${dogBreed}`
        return myFavoriteDogBreed 
}

const myFavorite = favoriteDog("meow")

console.log(`As far as pets go, ${myFavorite}`)
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

