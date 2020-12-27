var ground = createSprite();
var tree = createSprite();
var stone = createSprite();

var mango1 = createSprite();
var mango2 = createSprite();
var mango3 = createSprite();
var mango4 = createSprite();
var mango5 = createSprite();

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectcollision(stoneObj, mango1);
  detectcollision(stoneObj, mango2);
  detectcollision(stoneObj, mango3);
  detectcollision(stoneObj, mango4);
  detectcollision(stoneObj, mango5);

  function keyPressed(){
	  if (keyCode === 32) {
		  Maatter.Body.setPosition(stoneObj.body, {x:235, y:420})
		  launcherObject.attach(stoneObj.body);
	  }
  }

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}

function detectcollision(Lstone, Lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body, false);
		}

}


