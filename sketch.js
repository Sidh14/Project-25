
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,engine,world,dustbin,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 
	 dustbin = new Dustbin(1020,600,140,170);
	 paper = new Paper(200,450,70);
	 ground = new Ground(800,690,1600,15);

	// boxPosition=width/2+150
 	// boxY=600;


 	   // boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	 //   boxleftSprite.shapeColor=color("red");

       // boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	   // World.add(world, boxLeftBody);

 	   // boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	  //  boxBase.shapeColor=color("red");

 	  //  boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	   // World.add(world, boxBottomBody);

 	  //  boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	  //  boxleftSprite.shapeColor=color("red");

 	   // boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	  //  World.add(world, boxRightBody);

}


function draw()
 {
  //rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ground.display();
  dustbin.display();
  paper.display();
 
 }

function keyPressed() 
	{
		if (keyCode === UP_ARROW)
		{
			Matter.Body.applyForce(paper.body,paper.body.position,{x : 20,y : -20});

		}
	}


