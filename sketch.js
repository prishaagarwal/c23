const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var box1,box2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  
  box1 = new Box(200,300,50,50);
  ground= new Ground();
  box2=new Box(240,100,50,70);

  
}

function draw() {
  background(0);  

  Engine.update(engine);


  box1.display();
  box2.display();
  ground. display();
}


