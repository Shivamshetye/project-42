var iss,spacecraft;
var hasDocked = false

function preload(){
	spacebg= loadImage("spacebg.jpg");
	scraft1= loadImage("spacecraft1.png");
	scraft2= loadImage("spacecraft2.png");
	scraft3= loadImage("spacecraft3.png");
	scraft4= loadImage("spacecraft4.png");
	issImg= loadImage("iss.png")
}

function setup() {
  createCanvas(600,350);
 iss = createSprite(300,130);
 iss . addImage(issImg)
 iss. scale = 0.50

 spacecraft = createSprite(385,240);
 spacecraft.addImage(scraft1)
 spacecraft.scale = 0.15
}

function draw() {
  background(spacebg);  
  drawSprites();

if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-1,1)

  if(keyDown("UP_ARROW")){
  	spacecraft.y =spacecraft.y -2
  	spacecraft.addImage(scraft2)
  }

  if(keyDown("LEFT_ARROW")){
  	spacecraft.addImage(scraft3)
  	spacecraft.x =spacecraft.x -2
  }
  if(keyDown("RIGHT_ARROW")){
  	spacecraft.addImage(scraft4)
  	spacecraft.x =spacecraft.x 
  }
  if(keyDown("DOWN_ARROW")){
  	spacecraft.addImage(scraft1)
  	spacecraft.y =spacecraft.y -2
  }
//  if(keyDown("UP_ARROW")){
 // 	spacecraft.addImage(scraft2)
 // 	spacecraft.y =spacecraft.y -2
 // }
}
if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10))
	{ hasDocked = true;
	 textSize(25);
	 fill("white")
	  text("Docking Successful!", 200, 300); }
}