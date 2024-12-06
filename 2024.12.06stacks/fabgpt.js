var faball=[]
function faball(n){
    if (n <=1) {
        return 1;
    }

    let a = 1; //fib(0)
    let b = 1; //fib(1)
    let fib = 1;

    for (let i =2; i <= n; i++){
        fib = a + b; //calculate current fibonacci number
        faball.push(fib);
        a = b;   //move forward in the series
        b = fib;   //update the previous fibonacci number
    }

    return fib;   //return the n-th fibonacci number
}
console.log(fab(42))