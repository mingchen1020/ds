var readline = require("readline-sync");

//var weight= Number(document.getElementById("weight").value);
var weight = readline.question("Please input ur weight(kg)?")
//var height= Number(document.getElementById("height").value);
var height = readline.question("Please input ur height(cm)?")
var  bmi = weight/((height/100)**2);
  //document.getElementById("bmi").innerHTML = bmi
  if (bmi<18.5){
    console.log('過輕');
  }else if (bmi>18.5 & bmi<24){
    console.log('正常')
  }else if (bmi>24 & bmi<27){
    console.log('過重')
  }else if (bmi>27){
    console.log('肥胖')
  }
console.log("Hello! Your BMI value is "+ bmi);
