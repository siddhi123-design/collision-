var fixedObject; 
var movingObject;

function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(400, 200, 50, 50);
  fixedObject.shapeColor = "blue"
  movingObject = createSprite(100,100, 40, 40);
  movingObject.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  movingObject.x = World.mouseX
  movingObject.y = World.mouseY

  if(movingObject.x - fixedObject.x <= movingObject.width/2 + fixedObject.width/2
    && fixedObject.x - movingObject.x <= movingObject.width/2 + fixedObject.width/2
    && movingObject.y - fixedObject.y <= movingObject.height/2 + fixedObject.height/2
    && fixedObject.y - movingObject.y <= movingObject.height/2 + fixedObject.height/2){
    fixedObject.shapeColor = "green"
    movingObject.shapeColor = "yellow"
  }
  else{
    fixedObject.shapeColor= "blue";
    movingObject.shapeColor = "red";
  }
  drawSprites();
}