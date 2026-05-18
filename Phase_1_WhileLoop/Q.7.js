//  7. Calculate the sum of all even numbers from 1 up to n. 

let n = 1
let z = 0


while(n <= 100){
    if(n % 2 == 0){
        z += n
        

    }
    n++;
}

console.log(z)


// 8. Calculate the sum of all odd numbers from 1 up to n.

let a = 1 ;
let b = 0

while(a <= 100){
    if(a % 2 !== 0 ){
       b += a 
    }
    a++;
}


console.log(b)