const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(650,650,1300,20)
paper = new Paper(200,200)

rect1= new Rectangle(800,635,230,12)
rect2= new Rectangle(680,590,12,100)
rect3= new Rectangle(920,590,12,100)


	Engine.run(engine);
	
	
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  
ground.display();
paper.display();
rect1.display();
rect2.display();
rect3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
  
	}
}



