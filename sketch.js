var canvas;
var music;
var b1,b2,b3,b4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(830,500);

    //create 4 different surfaces

b1=createSprite(100,480,200,30);
b1.shapeColor="blue";
b2=createSprite(310,480,200,30);
b2.shapeColor="orange";
b3=createSprite(520,480,200,30);
b3.shapeColor="red";
b4=createSprite(730,480,200,30);
b4.shapeColor="green";
ball=createSprite(random(20,750),50,30,30);
ball.shapeColor="white";
ball.velocityY=12;
ball.velocityX=12;
    //create box sprite and give velocity

}

function draw() {

    background(rgb(169,169,169));
    //create edgeSprite
var edges = createEdgeSprites();

ball.bounceOff(edges);



if(isTouching(ball,b1)&&ball.bounceOff(b1)){
    ball.shapeColor="blue";
    music.play();
}
if(isTouching(ball,b2)&&ball.bounceOff(b2)){
    ball.shapeColor="orange";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}
if(isTouching(ball,b3)&&ball.bounceOff(b3)){
    ball.shapeColor="red";
}
if(isTouching(ball,b4)&&ball.bounceOff(b4)){
    ball.shapeColor="green";
}

drawSprites();
    //add condition to check if box touching surface and make it box
}