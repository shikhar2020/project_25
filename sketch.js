
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ppr;
var rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	pprObject = new Ball(200,450,42);
	grd = createSprite(200,660,1200,20);

	rect1= new Rect(500,610,20,80);
	

	rect2= new Rect(570,640,160,20);
	

	rect3= new Rect(640,610,20,80);

	


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  pprObject.display();
  grd.display();
  rect1.display();
   rect2.display();
    rect3.display();

  drawSprites();
  
 
}

function keyPressed() {
	if(keyCode=== UP_ARROW) {
		Matter.Body.applyForce(pprObject.ball,pprObject.ball.position,{x:40,y:-85});
	}
}



