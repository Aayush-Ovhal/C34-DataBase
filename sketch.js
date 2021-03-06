var ball;

var dataBase, pos;

function setup(){
    createCanvas(500,500);

    dataBase = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var locNode = dataBase.ref("ball/position");
    locNode.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

    dataBase.ref("ball/position").set({
        x: ball.x + x,
        y: ball.y + y
    })
}

function readPosition(data){
   pos = data.val();

   ball.x = pos.x;
   ball.y = pos.y;

   console.log(ball.x);
   console.log(ball.y);

}

function showError(){
    console.log("What r u doing???!!!!");
}
