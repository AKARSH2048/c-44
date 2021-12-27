var flappyBird, flappyBirdImage;
var backgroundImage;
var railing, railingImage;
var pillar, pillarImage;

function preload(){
 flappyBirdImage = loadAnimation("bird1.png", "bird2.png");
 backgroundImage = loadImage("backgroundImage.png");
 railingImage = loadImage("railing.png");
 pillarImage = loadImage("pillar.png");
}
function setup(){
 createCanvas(windowWidth,windowHeight);
 flappyBird = createSprite(600,windowHeight/2,20,20);
 flappyBird.scale = 2;
 flappyBird.addAnimation("flappyBirdImage", flappyBirdImage);
 railing = createSprite(windowWidth/2,windowHeight-30);
 railing.addImage("railingImage",railingImage);
 railing.scale = 2.5;
}
function draw(){
  background(backgroundImage);
  railing.velocityX = -1;
  spawnPillar();
  drawSprites();
}
function spawnPillar(){
  if(frameCount % 100 === 0){
    pillar = createSprite(windowWidth+10,50);
    pillar.addImage("pillarImage",pillarImage);
    pillar.velocityX = -1;
  }
}
