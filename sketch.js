
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree;
var ground;
var stone;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var attach;

function preload()
{
	boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,590);

	tree=new Tree(1050,400);

	boy=createSprite(630,535,40,100);
	boy.addImage(boyImage);
	boy.scale=0.1;

	stone=new Stone(575,475);

	mango1=new Mango(1000,300);
	mango2=new Mango(980,325);
	mango3=new Mango(1050,320);
	mango4=new Mango(1100,350);
	mango5=new Mango(1020,260);
	mango6=new Mango(1070,280);
	mango7=new Mango(1130,330);
	mango8=new Mango(1000,365);
	mango9=new Mango(1060,240);
	mango10=new Mango(1100,300);

	attach=new Elastic(stone.body,{x:575,y:475});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
 
  drawSprites();

  ground.display();

  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  attach.display();
 
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(stone,mango){
	var stonepos=stone.body.position;
	var mangopos=mango.body.position;
	var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:575,y:475});
		attach.attach(stone.body);
	}
}