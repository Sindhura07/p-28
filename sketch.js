
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,boyimg;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,1300,width,10);
	mango1=new mango(1100,100,30);
	mango2=new mango(1100,100,30);
	mango3=new mango(1000,100,30);
	mango4=new mango(1230,200,30);
	mango5=new mango(1100,200,30);
	mango6=new mango(1000,250,30);
	mango7=new mango(930,200,30);
	stone=new Stone(boy.body,{x:200,y:100})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
 image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();


groundObject.display();
}

function mouseDragged(){

    Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY});
    
}
