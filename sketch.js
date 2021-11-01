var box;
var girl1;
var innerBox;
var innerInnerBox;

function setup() {
  createCanvas(1000,1000);
  background(51);
  box = createSprite(500,500,30,30);
  innerBox = createSprite(500,500,20,20);
  innerInnerBox = createSprite(500,500,10,10);
}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)) {
    background("red");
    box.shapeColor = "orange";
    innerBox.shapeColor = "deeppink";
    innerInnerBox.shapeColor = "white"
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.shapeColor = "aqua";
    innerBox.shapeColor = "turquoise";
    innerInnerBox.shapeColor = "white";
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("gold");
    box.shapeColor = "yellow"
    innerBox.shapeColor = "cornsilk";
    innerInnerBox = "white";
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.shapeColor = "chartreuse";
    innerBox.shapeColor = "lime";
    innerInnerBox = "white";
  }


  
  drawSprites();
}

