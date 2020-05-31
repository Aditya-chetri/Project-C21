var bullet, wall, thickness;
var bulletspeed, bulletWeight;


function setup() {
  createCanvas(1600,400);
  bulletSpeed = random(223, 321);
  bulletWeight = random(30, 52);
  bullet = createSprite(-800, 200, 40, 15);
  bullet.velocityX = bulletSpeed;
  wall = createSprite(500, 200, thickness, height/2);
  thickness = random(22,83);
  wall.shapeColor = "0, 0, 0";
  bullet.shapeColor = "white";
} 
 
function draw() {
  background(255,255,255);  
  
  if (bullet.collide(wall)){
    damage();
  }
  console.log(damage);
  
  drawSprites();
}

function damage(){
  damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/wall.width*wall.width*wall.width;
  if (damage<10){
    wall.shapeColor = "green";
  }
  
  if (damage>10){
    wall.shapeColor = "red";
  }
}