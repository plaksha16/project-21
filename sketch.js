
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var leftEdge
var rightEdge
var ground
var options  


function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	 
	//Create the Bodies Here.
  ball=new Ball(40,40,15)
  leftEdge=new Box( 400,535,15,130)
  ground=new Ground(250,600,1200,20) 
   rightEdge=new Box(700,535,15,130)
	Engine.run(engine);

 var options={
   isstatic:false,
   restitution:0.3,
   density:1.3,
   friction:0
 }
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   ground.show()
   ball.show()
   leftEdge.show();
   rightEdge.show()

  drawSprites();
 
}



