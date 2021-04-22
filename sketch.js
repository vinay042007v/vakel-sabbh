
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;


var paperObject,dustbinObject;
function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

log1 = new Box(980,350,250,20);
ground = new Ground(600,380,1200,30);
log2 = new Box(865,300,20,100);
log3 = new Box(1095,300,20,100);
paperObject = new Paper(100,60,20);

Engine.run(engine);
}


function draw() {
	rectMode(CENTER)
    background("grey");
    Engine.update(engine);
   log1.display();
   ground.display();
   log2.display();
   log3.display();
   paperObject.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-85})
	}
    
}

