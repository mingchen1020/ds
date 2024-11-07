//download live.server

const Live = 1; //1=live
const Dead = 0; //0=dead

class Life{
   constructor(_row, _col){
        this.row = _row;
        this.col = _col;
        this.grid=[];//new Array()
        //2d array
        for(var _row=0;_row < this.row;_row++){
            this.grid.push([]);
            for(var _col=0;_col < this.col;_col++){
                this.grid[_row].push(Dead); //待理解
            }
        }
        
    }
    initialize = function(){
        this.grid[1][1] = Live;
        this.grid[1][2] = this.grid[1][3] = this.grid[1][4] =Live; 
    }

    update = function(){
          var nextGrid = JSON.parse(JSON.stringify(this.grid)); //待理解  
          //travse all elements, count its neighbor
          var neighbor;
          for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.row; _col++) {
                neighbor = this.neighborCount(_row, _col);
                // update by 4 rules
                if(this.getStatusAt(_row,_col)==Live && (neighbor<=1 || neighbor>=4)){
                    nextGrid[_row][_col] = Dead;
                }
                if(this.getStatusAt(_row,_col)==Dead && neighbor==3){
                    nextGrid[_row][_col] = Live;
                }

            }
            
          }

          this.grid = null;
          this.grid = nextGrid;
    } 

    //抓格子附近的鄰居 
    neighborCount = function(row, col){
        var count=0;
        count += this.getStatusAt(row-1, col-1);
        count += this.getStatusAt(row-1, col); 
        count += this.getStatusAt(row-1, col+1); 
        
        count += this.getStatusAt(row, col-1);

        count += this.getStatusAt(row, col+1); 
        
        count += this.getStatusAt(row+1, col-1); 
        count += this.getStatusAt(row+1, col); 
        count += this.getStatusAt(row+1, col+1);      
        return count;   
    }
    getStatusAt = function(row, col){
        if(row<0 || col<0 || row >= this.row || col >= this.col){
           return Dead;
        }else{
            return this.grid[row][col];
        }
    }
}

draw = function(_canvas){
    var canvas = document.getElementById(_canvas).getContext("2d");
    this.size=Math.min(canvas.canvas.height/this.row, canvas.canvas.width/this.col);
    for(var _row=0;_row<this.row;_row++){
        for(var _col=0;_col<this.col;_col++){
            //ar2d[_row][_col]=>0,1
            if(this.grid[_row][_col]==Live){
                canvas.fillStyle="#ff0000"
            }else{
                canvas.fillStyle="#ffffff"
            }
            //600/5=>120  coordinate x,y , width, heigth
            canvas.fillRect(_col*this.size,_row*this.size,this.size,this.size);
            canvas.strokeRect(_col*this.size,_row*this.size,this.size,this.size);
        }
    }
}
drawPoint = function(_canvas,_row,_col){
    var canvas = document.getElementById(_canvas).getContext("2d");
    //this.size=Math.min(canvas.canvas.height/this.row, canvas.canvas.width/this.col);
    if(this.grid[_row][_col]==Live){
        canvas.fillStyle="#ff0000"
    }else{
        canvas.fillStyle="#ffffff"
    }
    canvas.fillRect(_col*this.size,_row*this.size,this.size,this.size);//filRect =
    canvas.strokeRect(_col*this.size,_row*this.size,this.size,this.size);//strokeRect =
}



// Life.prototype.update= function(){

// }

function tonext(){
    myGame.update();
    myGame.draw("map")//下一個世代
}

//判斷是死是活 0=dead 1=live
function mouseclick(event){
    var _row = math.floor(event.offsetY/myGame.size);
    var _col = math.floor(event.offsetx/myGame.size);
    myGame.grid[_row][_col] = (myGame.getStatusAt(_row,_col)==Live) ? Dead : Live;// if()else = ()? :
    myGame.drawPoint("map",_row,_col);
}

function random(){
    myGame.initialize(true);
    myGame.draw("map");//待理解
 }
 
 var myTime;
 function run(){
    var step = document.getElementById("step").value;//將step 設成基礎值
    myTime = setInterval(tonext, Number(step));//number 轉成數值
 }
 function stop(){
     clearInterval(myTime);//clearInterval 終止
 }

var myGame = new Life(100,100);
var myGame2 = new Life(100,100);

myGame.initialize();
myGame.draw("map")

var runnng = setInterval(tonext,1000); //runnng是中斷 , setinterval 是每過幾秒,便執行某程式
