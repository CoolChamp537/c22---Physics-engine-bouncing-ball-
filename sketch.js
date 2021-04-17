const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  var balloptions = {
    restitution: 1 
  }

  ball = Bodies.circle(width/2,height/4,20,balloptions)
  World.add(myworld,ball)

  var options = {
    isStatic : true
  }
ground = Bodies.rectangle(400, 390, width, 20,options);
World.add(myworld,ground);
console.log(ball);
  Engine.run(myengine);
}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20);
  //drawSprites();

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}