var gameSeq=[];
        var preSeq=[];
        var colors=["green","red","yellow","blue"];
function makeSound(color){
    switch(color){
        case 0:var audio=new Audio('./sounds/green.mp3');audio.play();break;
        case 1:var audio=new Audio('./sounds/red.mp3');audio.play();break;
        case 2:var audio=new Audio('./sounds/yellow.mp3');audio.play();break;
        case 3:var audio=new Audio('./sounds/blue.mp3');audio.play();break;
        default: console.log(color);
    }
}


function addcolor(){
    var random=Math.floor(Math.random()*4);
    gameSeq.push(random);
    $("."+colors[random]).addClass("pressed");
    setTimeout(function(){
        $("."+colors[random]).removeClass("pressed");
    },100);
    makeSound(random);
    console.log(gameSeq);
}

function gamePress(pres){
    $("."+colors[pres]).addClass("pressed");
    setTimeout(function(){
        $("."+colors[pres]).removeClass("pressed");
    },100);
    console.log(pres);
    makeSound(pres);
    console.log(preSeq);
}

function keypre(){
    $(document).on("click",eve,function(){
        var pres=parseInt(eve.target.textContent);
        console.log(pres);
        return pres;
    })
}

function gameover(){
    var audio=new Audio('./sounds/wrong.mp3');
    audio.play();
    $("body").addClass("game-over");
    $(".head").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $(document).on("keypress",function() {
        location.reload(true);
    });
}

var pres;
var preskey;
$(document).on("keypress",function(ev){
    console.log(ev.key);
    if(ev.key=='a'||ev.key=='A')
    {
        var ind=0;
        addcolor();
        gamePress(keypre());
            
        
    }
    else
    {gameover();
    }
    })
    