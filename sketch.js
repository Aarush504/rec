
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*var roof;
var rope1;
var bob;*/

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Her

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //roof.display();
  drawSprites();
 
}



