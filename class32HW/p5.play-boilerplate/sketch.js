const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var ground,ground1,ground2;
var box1,box2,box3,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var sling,polygon;
var bg='bg.png';
var score=0;
var backgroundImg;

function preload() {
    
  getTime();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  polygon=Bodies.circle(100,200,20);
  Matter.Body.setMass(polygon,polygon.mass*15)
  World.add(world,polygon);

  

  ground= new Ground(400,390,800,20);
  ground1= new Ground(390,265,300,10);
  ground2= new Ground(665,205,220,10);

  //ground2_boxes
  box1=new Box(610,175,30,40);
  box2=new Box(640,175,30,40);
  box3=new Box(670,175,30,40);
  box4=new Box(700,175,30,40);
  box5=new Box(730,175,30,40);
  box22=new Box(640,135,30,40);
  box23=new Box(670,135,30,40);
  box24=new Box(700,135,30,40);
  box25=new Box(670,95,30,40);

  //ground1_boxes
  box6=new Box(480,235,30,40);
  box7=new Box(300,235,30,40);
  box8=new Box(330,235,30,40);
  box9=new Box(360,235,30,40);
  box10=new Box(390,235,30,40);
  box11=new Box(420,235,30,40);
  box12=new Box(450,235,30,40);
  box13=new Box(360,195,30,40);
  box14=new Box(390,195,30,40);
  box15=new Box(420,195,30,40);
  box16=new Box(450,195,30,40);
  box17=new Box(330,195,30,40);
  box18=new Box(360,155,30,40);
  box19=new Box(390,155,30,40);
  box20=new Box(420,155,30,40);
  box21=new Box(390,115,30,40);

  sling= new SlingShot(polygon,{x:175,y:150});
 

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(backgroundImg){
    background(backgroundImg);
}

textSize(35);
fill ('white');
text('score' + score,width-300,50)


  ground.display();
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  sling.display();


 

  fill ('yellow')
  ellipseMode(CENTER)
  ellipse(polygon.position.x,polygon.position.y,30,30);
  


  Engine.update(engine);

  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

async function getTime(){
    
  var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var responseJSON=await response.json();
  var dateTime=responseJSON.datetime;
  var hour=dateTime.slice(11,13);
  
  if(hour>=06 && hour<18){
      bg='bg.png'
  }
  else{
      bg='bg2.jpg'
    }
    backgroundImg = loadImage(bg);
  console.log(hour);

}