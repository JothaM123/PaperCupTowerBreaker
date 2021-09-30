
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var block,b2, player,bg,plane,cup1, cup2, cup3, cup4, cup5, cup6, sound;




function preload(){

  bg = loadImage("download.jpeg");

}



function setup() {
  createCanvas(windowWidth,windowHeight);

  //sound.loop();

  engine = Engine.create();
  world = engine.world;

  block = new Block(width-300, height-100,500, 350);
  
  cup1= new Cup(width-350,height-500, 50, 100);
  cup2 = new Cup(width-300, height-500,50, 100);
  cup3 = new Cup(width-250, height-500, 50, 100);
  cup4 = new Cup(width-325, height-600, 50, 100);
  cup5 = new Cup(width-275, height-600, 50, 100);
  cup6 = new Cup(width-290, height-700, 50, 100);
  plane = new Block2(width-1150, height-500, 100, 100);

  b2  =new Block(width-1200, height-100, 400, 200);




 


  

}


function draw() 
{
  background(bg);



  Engine.update(engine);


  if(keyCode === 32){
    
    Matter.Body.applyForce(plane.body, {x:0, y:0}, {x:0.4, y:0});
  }


//  drawSprites();
block.display();
cup1.display();
cup2.display();
cup3.display();
cup4.display();
cup5.display();
cup6.display();
plane.display();
b2.display();


if(cup1.body.position.x>width || cup2.body.position.x>width || cup3.body.position.x>width|| cup4.body.position.x>width || cup5.body.position.x>width || cup6.body.position.x > width){
window.location.href = "win.png";

}








}



