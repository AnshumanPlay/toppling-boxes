const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(200,400,400,30);
   box1= new Box(200,200,50,100);
   box2= new Box(220,50,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
   ground1.display();
   box1.display();
   box2.display();
}