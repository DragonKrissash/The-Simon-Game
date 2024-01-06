var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;

function gamePress(color){
    $("."+color).addClass("pressed");
    console.log(color);
    setTimeout(function(){
        $("."+color).removeClass("pressed");
    },100);
    makeSound(color);
}

function makeSound(color){
    switch(color){
        case "green":var audio=new Audio('./sounds/green.mp3');audio.play();break;
        case "red":var audio=new Audio('./sounds/red.mp3');audio.play();break;
        case "yellow":var audio=new Audio('./sounds/yellow.mp3');audio.play();break;
        case "blue":var audio=new Audio('./sounds/blue.mp3');audio.play();break;
        default: console.log(color);
    }
}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $(".head").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    console.log(randomNumber);
    var randomChosenColor=buttonColors[randomNumber];
    gamePress(randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
}

function checkAnswer(ind){
    if(gamePattern[ind]==userClickedPattern[ind])
    {
        if(gamePattern.length==userClickedPattern.length)
        setTimeout(function(){
    nextSequence()},1000);
    }
    else{
        var audio=new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        $(".head").text("Game over try again!");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startover();
    }
}

function startover(){
    level=0;
    gamePattern=[];
    started=false;
}

$(".block").on("click",function(e){
    console.log(e.target.id);
    var userChosenColor=e.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    makeSound(userChosenColor);
    gamePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

$(document).on("keypress",function(e){
    console.log(e.key); 
    if(e.key=='a' || e.key=='A'){
    if(!started){
    $(".head").text("Level "+level);
    nextSequence();
    started=true;
    }}
    else{
        $(".head").text("Wrong key pressed, press A or a to start!");
        var audio=new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
    }
    
})