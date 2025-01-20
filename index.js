// PI
function pi() {
    return Math.PI;
}


console.log(pi()); 

//Kvadrats
function kvadrata(x) {
    return Math.pow(x, 2);
}


console.log(kvadrata(5)); 
console.log(kvadrata(2)); 
console.log(kvadrata(-3));

//lielakais
function lielakais(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}


console.log(lielakais(5, 10));  
console.log(lielakais(20, 15)); 
console.log(lielakais(-3, -7)); 
