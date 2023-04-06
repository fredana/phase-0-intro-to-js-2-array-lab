const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    const newCats = cats.push(name);
    return newCats;
} 
function destructivelyPrependCat(name){
    const newCats = cats.unshift(name);
    return newCats;
}

function destructivelyRemoveLastCat(name){
    const newCats = cats.pop(name);
    return newCats;
}
function destructivelyRemoveFirstCat(name){
    const newCats = cats.shift(name);
    return newCats;
}
function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
}
function prependCat(name){
    const newCats = [name,...cats];
    return newCats;
}

function removeLastCat(){
    const newCats = cats.slice(0,2);
    return newCats;
}
function removeFirstCat(){
    const newCats = cats.slice(1,3);
    return newCats;
}
