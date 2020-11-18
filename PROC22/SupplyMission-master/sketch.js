var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,leftb,leftSprite,rightb,rightSprite,centerb,centerSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 400, width,10);
	groundSprite.shapeColor=color(255)
	
	leftSprite=createSprite(300,345,20,100)
	leftb=Bodies.rectangle(300,345,20,100);
	World.add(world,leftb);

	rightSprite=createSprite(480,345,20,100)
	rightb=Bodies.rectangle(480,345,20,100);
	World.add(world,rightb);

	centerSprite=createSprite(390,385,200,20)
	centerb=Bodies.rectangle(390,365,200,20,{isStatic:true});
	World.add(world,centerb);

	leftSprite.shapeColor="red";
	centerSprite.shapeColor="red";
	rightSprite.shapeColor="red";

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 400, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
 keyPressed();
   
  //console.log("draw");
  drawSprites();
 
}

function keyPressed() {

	console.log("key");

 if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic(packageBody,false);// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
  else if(keyDown(LEFT_ARROW)){
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	helicopterSprite.x=helicopterSprite.x-15;
	translation={x:-15,y:0}
    Matter.Body.translate(packageBody, translation)
    
  }
  else if (keyDown(RIGHT_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	helicopterSprite.x=helicopterSprite.x+15;
	translation={x:+15,y:0}
    Matter.Body.translate(packageBody, translation)
    
  }
}



