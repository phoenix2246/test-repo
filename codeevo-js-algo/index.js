
// factorialnumber
// const fun=(n)=>{
// let result = 1
// for(let i=2;i<=n;i++){
//     result = result * i
// }
// return result
// }

// console.log(fun(5))

// prime number
const fun = (n)=>{
    if(n<2){
        return false
    }
    for(let i =2 ; i < n ; i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}

console.log(fun(7))

//powerof2
const powerof2 = (n) =>{
    if(n < 1){
        return false
    }
    while(n>1){
        if(n%2 !== 0){
            n = n/2
        }
        return false
    }
    return true
}

console.log(powerof2(1))
console.log(powerof2(2))
console.log(powerof2(5))


