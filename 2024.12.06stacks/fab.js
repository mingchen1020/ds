var readline = require("readine-sync");
var n = readline.questionint("please input an intger?");
var count=0;
var dis=fab(n);
console.log( dis );
console.log( dis>384401000?">":"<");

//console.log(fab(n))  //384401000

function fab(n){
    count++;
    if(n<=1)
        return 1;
    else 
        return fab(n=1)+fab(n-2);
}
//iteration