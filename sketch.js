//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//declaring variables
var sharvani_world, sharvani_engine;

var ground;
var ball,ball2;


function setup() {
  createCanvas(400,400);
//creating engine
 sharvani_engine = Engine.create();
 //sharvani world is sharvani engine world
 sharvani_world = sharvani_engine.world;

//properties that we want to pass into the ground
var options_ground ={
   isStatic:true
}
//making the ground body using rectangle
 ground = Bodies.rectangle(200,390,400,20,options_ground);
 //adding ground to world
World.add(sharvani_world,ground);

var options_ball={
  restitution:1.2
}
ball=Bodies.circle(100,100,20,options_ball);
World.add(sharvani_world,ball);

var options_ball2={
  restitution:0.9
}
//making the ball and then adding the ball to the world
ball2=Bodies.circle(100,300,20,options_ball2);
World.add(sharvani_world,ball2)

//console.log(ball)
//console.log(object.position.x)
//console.log(object.position.y)

  
}

function draw() {
  background("black");  
//engine need to be updated continuously
  Engine.update(sharvani_engine)
//making the rectangle at the centre
 rectMode(CENTER); 
 //making the rectangle at the position of ground
rect(ground.position.x,ground.position.y,400,20);

//making ellipse
ellipseMode(RADIUS);
//making the ellipse at the position of the ball
ellipse(ball.position.x,ball.position.y,20,20);

ellipseMode(RADIUS);
ellipse(ball2.position.x,ball2.position.y,20,20);
  drawSprites();
}