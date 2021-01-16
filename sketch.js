const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImage;
var slingShot;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15,box16;
var box17,box18,box19,box20;

function preload(){
    polygonImage = loadImage('polygon.png')
}



function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)

    slingShot = new SlingShot(this.polygon,{x:100,y:500});
    

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(1000,400,200,20)
    stand2 = new Ground(600,700,450,20)

    box1 = new Box(246,335,50,50);
    box2 = new Box(272,335,50,50);
    box3 = new Box(298,335,50,50);
    box4 = new Box(324,335,50,50);
    box5 = new Box(350,335,50,50);
    box6 = new Box(376,335,50,50);
    box7 = new Box(220,335,50,50);

    box8 = new Box(246,309,50,50);
    box9 = new Box(272,309,50,50);
    box10 = new Box(298,309,50,50);
    box11 = new Box(324,309,50,50);
    box12 = new Box(350,309,50,50);

    box13 = new Box(272,283,50,50);
    box14 = new Box(298,283,50,50);
    box15 = new Box(324,283,50,50);
    box16 = new Box(298,257,50,50);

    box17 = new Box(472,185,50,50);
    box18 = new Box(498,185,50,50);
    box19 = new Box(524,185,50,50);
    box20 = new Box(498,159,50,50);

   // console.log(box1)
    
    
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);

    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40)

    ground.display();
    stand1.display();
    stand2.display();
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
}
    

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}


