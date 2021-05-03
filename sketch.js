
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    tom1 = loadAnimation("images/cat1.png")
    tom2 = loadAnimation("images/cat2.png","images/cat3.png")
    tom3 = loadAnimation("images/cat4.png")

    jerry1 = loadAnimation("images/mouse1.png")
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(850,650);
tom.addAnimation("tom sleeping",tom1);
tom.scale=0.2;

jerry=createSprite(200,650);
jerry.addAnimation("jerrywithgift",jerry1);
jerry.scale=0.1;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("tomstanding",tom3)
        tom.x=300;
        tom.changeAnimation("tomstanding",tom3)
        tom.scale=0.2;
        jerry.addAnimation("jerrystanding",jerry3)
        jerry.changeAnimation("jerrystanding",jerry3)
        jerry.scale=0.1;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      tom.velocityX=-4;
      tom.addAnimation("tommoving",tom2)
      tom.changeAnimation("tommoving",tom2)
      jerry.addAnimation("jerrydancing",jerry2)
      jerry.changeAnimation("jerrydancing",jerry2)
  }

}
