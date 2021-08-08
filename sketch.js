var issimg;
var bgimg ;
var sci1;
var sci2;
var sci3;
var sci4;

var iss,spacecraft,fs;
var hasDocking = false;


function preload(){
  issimg=loadImage("iss.png")
  bgimg=loadImage("spacebg.jpg")
  sci1=loadImage("spacecraft1.png")
  sci2=loadImage("spacecraft2.png")
  sci3=loadImage("spacecraft3.png")
  sci4=loadImage("spacecraft4.png")
}

function setup() {
 canvas= createCanvas(800,400);
 
 fs=createSprite(287,145,10,20)

 spacecraft=createSprite(285,240);
 spacecraft.addImage(sci1);
 spacecraft.scale= 0.15;

 iss=createSprite(330,130);
 iss.addImage(issimg);
 iss.scale = 0.65;



 
}


function draw() {
  background(bgimg); 

  if(!hasDocking){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown(UP_ARROW)){
      spacecraft.addImage(sci2);
      spacecraft.y = spacecraft.y - 1
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(sci1);
      spacecraft.y = spacecraft.y + 1
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(sci4);
      spacecraft.x = spacecraft.x - 1
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(sci3);
      spacecraft.x = spacecraft.x + 1
    }


  }
  
  if(spacecraft.isTouching(fs)){

    textSize(50)
    text("DOCKING SUCCESSFULL!", 170,300);
    fill("white")
   
    

   
    hasDocking = true;
    
  

 
   }

  drawSprites();
}