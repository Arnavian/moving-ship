function preload(){
shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaAnimation = loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);

}

function draw() {
  background("blue");
  var ship = createSprite(200,400,100,100)
  var sea  = createSprite(200,300,100,100)
  sea.addAnimation(seaAnimation)
  ship.addAnimation(shipAnimation)
  sea.velocityX=-5
  drawSprites()
 
}

