var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(200,100,80,80);
  object2 = createSprite(300,100,80,80);
  object1.shapeColor = "green";
  object2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  object2.x = World.mouseX;
  object2.y = World.mouseY;

if(isTouching(object1,object2)){
  object1.shapeColor = "blue";
  object2.shapeColor = "blue";
}
else{
  object1.shapeColor = "green";
  object2.shapeColor = "green";
}
  drawSprites();
}

function isTouching(Rect1,Rect2){

  if (Rect1.x - Rect2.x < Rect2.width/2 + Rect1.width/2
    && Rect2.x - Rect1.x < Rect2.width/2 + Rect1.width/2
    && Rect1.y - Rect2.y < Rect2.height/2 + Rect1.height/2
    && Rect2.y - Rect1.y < Rect2.height/2 + Rect1.height/2) {
      return true;
}
else {
  return false;
}


}
