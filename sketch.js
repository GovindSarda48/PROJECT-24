
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,box1,box2,box3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(650,690,200,20);
	

	box2 = new Box(550,680,20,100);
	

	box3 = new Box(750,680,20,100);


	
	ground = new Ground(400,height,800,20);

	
	
	var option={
		isStatic:false,
		density:1.2,
		friction:0.5,
		restitution:0.3,

	}

	paper = new Ball(20,680);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
	 
  

  fill("pink");

  console.log(paper.body);
   


  
  
  
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  


   

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	  
	  
	 }
   }
   

