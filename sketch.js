const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var polygon;
var rubberBand;

function setup(){
    var canvas = createCanvas(1230,580);
    engine = Engine.create();
    world = engine.world;
    polygon = new Polygon(200,100,50,50);
    rubberBand = new RubberBand(polygon.body,{x :150, y: 300});

   

    ground1 = new Ground(650,350,250,10);
    ground2 = new Ground(1000,300,250,10);
    ground3 = new Ground(615,570,1230,20);

    block1 = new Block(650,325,30,40);
    block2 = new Block(620,325,30,40);
    block3 = new Block(680,325,30,40);
    block4 = new Block(590,325,30,40);
    block5 = new Block(710,325,30,40);
    block6 = new Block(560,325,30,40);
    block7 = new Block(740,325,30,40);
    block8 = new Block(650,285,30,40);
    block9 = new Block(620,285,30,40);
    block10 = new Block(680,285,30,40);
    block11 = new Block(590,285,30,40);
    block12 = new Block(710,285,30,40);
    block13 = new Block(650,245,30,40);
    block14 = new Block(680,245,30,40);
    block15 = new Block(620,245,30,40);
    block16 = new Block(640,205,30,40);
    block17 = new Block(670,205,30,40);
    block18 = new Block(655,165,30,40);

block19 = new Block(1000,250,30,40);
block20 = new Block(1030,250,30,40);
block21 = new Block(970,250,30,40);
block22 = new Block(940,290,30,40);
block23 = new Block(1060,290,30,40);
block24 = new Block(1080,290,30,40);
block25 = new Block(920,290,30,40);
block26 = new Block(1000,260,30,40);
block27 = new Block(1030,260,30,40);
block28 = new Block(970,260,30,40);
block29 = new Block(940,260,30,40);
block30 = new Block(1060,260,30,40);
block31 = new Block(1000,230,30,40);
block32 = new Block(1030,230,30,40);
block33 = new Block(970,230,30,40);
block34 = new Block(990,200,30,40);
block35 = new Block(1020,200,30,40);
block36 = new Block(1005,170,30,40);

   


}


function draw(){
    Engine.update(engine);
    background(0);

    polygon.display();
    rubberBand.display();

    fill ("grey")  
ground1.display();
ground2.display();

fill ("brown");
ground3.display();

fill ("white");
block1.display();
block18.display();
block26.display();


fill ("red");
block2.display();
block3.display();
block11.display();
block12.display();
block16.display();
block19.display();
block32.display();
block33.display();


fill ("yellow");
block4.display();
block5.display();
block9.display();
block10.display();
block17.display();
block24.display();
block25.display();
block29.display();
block30.display();
block31.display();

fill ("purple");
block6.display();
block7.display();
block13.display();
block20.display();
block21.display();
block36.display();

fill ("pink");
block8.display();
block14.display();
block15.display();
block22.display();
block23.display();
block27.display();
block28.display();
block34.display();
block35.display();

fill("white");
textFont("harry P");
textSize(40);
text ("Drag the hexagon and realese it to SHOOT", 10,40);

fill("red");
textFont("harry P");
textSize(40);
text ("press the SPACE button for one more chance", 600,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rubberBand.fly();
}

function keyPressed(){
    if (keyCode === 32){
      Matter.Body.setPosition(polygon.body,{x:150, y:200})
      rubberBand.attach(polygon.body)
    }
  }