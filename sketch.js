
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(2100, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
    var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
   ball = Bodies.circle(200,200,40,balls_options)
   World.add(myWorld,ball)

	Engine.run(myEngine);
  groundObj = new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
  rightSide = new Ground(1400,600,20,120)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x,ball.position.y,40)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
	
	
}

