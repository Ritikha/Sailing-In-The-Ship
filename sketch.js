var  ship
var  sea
  
function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg  = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(85,250)
sea.addImage(seaimg)
sea.velocityX = -2
sea.scale=0.3
 

ship = createSprite(50,310,20,100);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.1



}

function draw() {
background("lightblue");
if(sea.x<0){
sea.x=sea.width/9

}




 drawSprites()
}