// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
 cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    cats.pop()
}
function destructivelyRemoveFirstCat(name) {
    cats.shift()
}
function appendCat(name) {
    const copyCats = [...cats, name]
    return copyCats
} 
function prependCat(name) {
    const copyCatsTwo = [name, ...cats]
    return copyCatsTwo
}
function removeLastCat(name) {
    const removeCats = cats.slice(0,-1)
    return removeCats
}
function removeFirstCat(name) {
   const removeOneCat = cats.slice(1)
   return removeOneCat
}

    
