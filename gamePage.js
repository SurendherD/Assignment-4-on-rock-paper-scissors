var logos=document.querySelectorAll(".image");
var image2=document.getElementById("img2");
var image1=document.getElementById("img1");
var score1=document.getElementById("player1-score");
var score2=document.getElementById("player2-score");
var win=document.getElementById("win");
var playAgain=document.getElementById("playAgainbtn");

var num;
var player1Score=0;
var player2Score=0;

function gameOver(){
    if(player1Score == 5 || player2Score == 5){
        logos.forEach((ele)=>{ele.style.display="none"});

        if(player1Score > player2Score){
            win.innerHTML="'You' Won the Game";
        }
        else{
            win.innerHTML="'Com' Won the Game";
        }
    }
}

function displayScore(){
    score1.innerHTML=player1Score;
    score2.innerHTML=player2Score;
}

function computer(){
    num=Math.floor(Math.random()*3)+1;
    if(num==1){
        image2.src="./assets/rock-hand.png";
    }
    else if(num==2){
        image2.src="./assets/paper-hand.png";
    }
    else if(num==3){
        image2.src="./assets/scissors-hand.png";
    }
}


for(let i=0;i<3;i++){
    logos[i].addEventListener("click",(e)=>{
        if(e.target.id == 1){
            image1.src="./assets/rock-hand.png";
            computer();
            if(e.target.id==1 && num==1 || e.target.id==2 && num==2 || e.target.id==3 && num==3 ){
                displayScore();
                gameOver();
            }
            else if(e.target.id==1 && num==3 || e.target.id==2 && num==1 || e.target.id==3 && num==2){
                player1Score++;
                displayScore();
                gameOver();
            }
            else if(e.target.id==1 && num==2 || e.target.id==2 && num==3 || e.target.id==3 && num==1){
                player2Score++;
                displayScore();
                gameOver();
            }
        }
        else if(e.target.id == 2){
            image1.src="./assets/paper-hand.png";
            computer();
            if(e.target.id==1 && num==1 || e.target.id==2 && num==2 || e.target.id==3 && num==3 ){
                displayScore();
                gameOver();
            }
            else if(e.target.id==1 && num==3 || e.target.id==2 && num==1 || e.target.id==3 && num==2){
                player1Score++;
                displayScore();
                gameOver();
            }
            else if(e.target.id==1 && num==2 || e.target.id==2 && num==3 || e.target.id==3 && num==1){
                player2Score++;
                displayScore();
                gameOver();
            }
        }
        else if(e.target.id == 3){
            image1.src="./assets/scissors-hand.png";
            computer();
            if(e.target.id==1 && num==1 || e.target.id==2 && num==2 || e.target.id==3 && num==3 ){
                displayScore();
                gameOver();
            }
            else if(e.target.id==1 && num==3 || e.target.id==2 && num==1 || e.target.id==3 && num==2){
                player1Score++;
                displayScore();
                gameOver();
            }
            else if(e.target.id==1 && num==2 || e.target.id==2 && num==3 || e.target.id==3 && num==1){
                player2Score++;
                displayScore();
                gameOver();
            }
        }
    });
}

playAgain.addEventListener("click",()=>{
    window.location.href="./startingPage.html";
});
