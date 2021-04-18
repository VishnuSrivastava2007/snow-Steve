var backgroundIMG,background2;
var steve,steveImage;




function preload(){
steveImage=loadAnimation("unnamed (3).gif");
backgroundIMG=loadAnimation("backgroundD.gif");
}

function setup() {
  createCanvas(800,400);

  background2 = createSprite(400, 250, 500, 500);
  background2.scale=1.4
  steve = createSprite(600, 330, 50, 50);
  steve.scale=0.5

  steve.addAnimation("run",steveImage);

  background2.addAnimation("run",backgroundIMG);

}

function draw() {
    



  

  drawSprites();
}
// away from keyboard();