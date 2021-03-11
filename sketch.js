var canvas,edges;
var music,ball,surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    
    surface1=createSprite(100,590,200,20);
    surface1.shapeColor="pink";
    surface1.velocityX=0;
    surface1.velocityY=0;
    surface2=createSprite(300,590,200,20);
    surface2.shapeColor="green";
    surface2.velocityX=0;
    surface2.velocityY=0;
    surface3=createSprite(500,590,200,20);
    surface3.shapeColor="blue";
    surface3.velocityX=0;
    surface3.velocityY=0;
    surface4=createSprite(700,590,200,20);
    surface4.shapeColor="red";
    surface4.velocityX=0;
    surface4.velocityY=0;
    //create ball sprite and give velocity
    ball=createSprite(Math.round(random(20,750)),300,30,30);
    ball.shapeColor="yellow";
    ball.velocityY=5;
    ball.velocityX=-2;
    music.play()
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges=createEdgeSprites();
  
   bounceOf();
   ball.bounceOff(edges)
   ball.bounceOff(surface1)
   ball.bounceOff(surface2)
   ball.bounceOff(surface3)
   ball.bounceOff(surface4)
   drawSprites();
    
    
}
function bounceOf(){
    
      

      
   if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
    ball.shapeColor="pink";
  }
  if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
     ball.shapeColor="green";
  }
  if( surface3.isTouching(ball) && ball.bounceOff(surface3) ){
     ball.shapeColor="blue";
  }
  if(  surface4.isTouching(ball) && ball.bounceOff(surface4)){
     ball.shapeColor="red";
     ball.velocityY=0;
     ball.velocityX=0;
     music.stop()
  }

}