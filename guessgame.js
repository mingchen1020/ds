var readline = require("readline-sync");

var Ans=Math.floor(Math.random()*10) //0 1 2 3 4 5 6 7 8 9
var win=false;

while(!win){
    do{
        var G = readline.questionInt("Please input an intger 0-9 ?");
    }while(G<0 || G>9)
    if(Ans == G){
        console.log("You Win!")
        var again=readline.question("Again? Y/N");
        if(again=="Y"){
            Ans=Math.floor(Math.random()*9)+1 
        }else{
            win=true;
        }  
    }else{
        console.log("Wrong");
    }
}
