var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1, log2, log3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	log1=createSprite(400,650,200,20);

	log2=createSprite(500,600,20,100);

	log3=createSprite(300,600,20,100);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.75, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 log1 = Bodies.rectangle(400,700,20,200, {isStatic:false} );
 	World.add(world, log1);

	 log2 = Bodies.rectangle(200,500,300,200, {isStatic:false} );
 	World.add(world, log2);

	 log3 = Bodies.rectangle(600,400,100,20, {isStatic:false} );
	 World.add(world, log3);
	 
	Engine.run(engine);
  
}  log1Sprite.x= log1Body.position.x 
 log1Sprite.y= log1Body.position.y 


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  log1.x= log1.position.x 
  log1.y= log1.position.y 


  log2.x= log2.position.x 
  log2.y= log2.position.y 

  log3.x= log3.position.x 
  log3.y= log3.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
    //when i tried to put in the right code it was not working correctly and was making the box teleport around. sorry
  } 
}



