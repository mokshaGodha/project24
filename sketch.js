
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var options={
		isStatic:false,
        restitution:0.3,
		friction:0.5,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;
    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    rect1=createSprite(550,615,20,100);
	rect1.shapeColor=("red")

    rect2=createSprite(750,615,20,100);
	rect2.shapeColor=("red")

	rect3=createSprite(650,655,200,20);
	rect3.shapeColor=("red")

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
	ball=createSprite(100,645,30,30)
	ball.shapeColor=("pink")
	ellipse(100,645,30,30)
  
	 ball=Matter.Bodies.circle(100,645,30,options);
	 World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function KeyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,{x:85,y:-85})
	}
}



