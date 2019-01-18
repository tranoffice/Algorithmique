let p=5;
//
function ffibo_recursive(n) {
    let fibo = 0;

    if ( n < 0 ) {
        console.log("Erreur : valeur incorrecte - " + n);
    } else {
        if ( n < 2 ) {
            fibo = n;
        } else {
            fibo = ffibo_recursive(n - 1) + ffibo_recursive(n - 2);
        }
    }
    
    console.log(fibo);
    return fibo;
}

function ffibo_direct(n) {
    let fibo = 0;
    let n_1 = 1;
    let n_2 = 0;

    let temp;
    for (let pas = 2; pas <= n; pas++) {
        fibo = n_1 + n_2;
        console.log("direct : " + fibo);
        temp = n_1;
        n_1 = fibo;
        n_2 = temp;
    }
    console.log(fibo);
    return fibo;
}

let res_fibo;
console.log("p = " + p);
res_fibo = ffibo_recursive(p);
console.log("fibonacci récursive = " + res_fibo);
res_fibo = ffibo_direct(p);
console.log("fibonacci directe = " + res_fibo);
