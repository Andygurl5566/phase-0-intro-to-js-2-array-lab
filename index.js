// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}




function appendCat(name){
    let newcats = [...cats,"Broom"]
    return newcats
}


function prependCat(name){
    let newcats = ["Arnold",...cats]
    return newcats
}

function removeLastCat(){
   let newcats = [...cats.slice(0,2)]
   return newcats

}


function removeFirstCat(){
    let newcats = [...cats.slice(1,3)]
    return newcats
}
