var ship ,sea ,ship_animation ,sea_image;

function preload(){

  ship_animation = loadAnimation("ship-1.png","ship-2.png");
  sea_img = loadImage("sea,png");


}

function setup(){
  createCanvas(400,400);
  var ship = createSprite(200,200,10,10);
  ship.addAnimation(ship_animation);
  var sea = createSprite(300,300,10,10);
  sea.addImage(sea_img)
  
}

function draw() {
  background("blue");

  drawSprites();
}