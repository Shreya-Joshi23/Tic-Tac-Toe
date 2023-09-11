var box=document.querySelectorAll(".box");
var turnDisplay=document.querySelector(".turn");
var reset=document.querySelector(".reset");

let WinningConditions=[
    //rows
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //columns
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //diagonals
    [0,4,8],
    [2,4,6]
];

var gamestart=false;
var xturn=true;
var x="X";
var o="O";
var won=false;
var gameover=false;

for(var i=0;i<box.length;i++){
    box[i].addEventListener("click",function(e){
       if(gameover==false){
        if(e.target.innerHTML===""){  
            if(xturn===true){
                e.target.innerHTML=x;
                xturn=false;
                turnDisplay.innerHTML="Player : O";
            }
            else{
                e.target.innerHTML="O";
                xturn=true;
                turnDisplay.innerHTML="Player : X";
            }
            var sound=new Audio("./sounds/click.mp3");
            sound.play();
            gamestart=true;
            if(gameover==false)
            checkwin();
        }
    }
    });
}

//Winning logic
function checkwin(){
WinningConditions.forEach(e=>{
    if((box[e[0]].innerHTML===box[e[1]].innerHTML) && (box[e[1]].innerHTML===box[e[2]].innerHTML)  && (box[e[0]].innerHTML!="" && box[e[1]].innerHTML!="" && box[e[2]].innerHTML!="")){
        turnDisplay.innerHTML=box[e[1]].innerHTML+" Won 😎";
        gameover=true;
        var sound2=new Audio("./sounds/applause.mp3");
        sound2.play();
    }
    if(allboxesfilled() && gameover==false){
        turnDisplay.innerHTML="MATCH TIE💔";
    }
});
}

function allboxesfilled(){
    for(var i=0;i<box.length;i++){
        if(box[i].innerHTML=="" && gamestart ){
            return false;
        }
    }
    return true;
}

//Reset
reset.addEventListener("click",function(){
    for(var i=0;i<box.length;i++){
        box[i].innerHTML="";
    }
    turnDisplay.innerHTML="Player : X";
    gamestart=false;
    gameover=false;
    xturn=true;
});


