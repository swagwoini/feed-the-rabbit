var garden,rabbit;
var gardenImage,rabbitImage;

function preload(){
  gardenImage = loadImage("garden.png");
  rabbitImage = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leavesImage = loadImage("orangeLeaf.png");
  redleavesImage = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImage);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImage);


}
function createApples(){
  apple = createSprite(random(50,350),40,10, 10 );
  //Add image to apple sprite
  apple.addImage(appleImage);
  //Scale the sprite if required
  apple.scale = 0.05;
  //give the velocity so that the apple move downloads
  apple.velocityY= 0.5;
  //give lifetime to the apple sprite
  apple.lifetime= 150;
  

}

function createLeaves(){
  
  redleaf = createSprite(random(50, 350), 40, 10,10);
  redleaf.addImage(redleavesImage);
  redleaf.velocityY= 0.5;
  redleaf.scale = 0.05;
  redleaf.lifetime = 150;
  
}
function createOrangeleaves(){
  leaves = createSprite(random(50, 350), 40, 10, 10);
  leaves.addImage(leavesImage);
  leaves.velocityY= 0.5;
  leaves.scale= 0.05;
  leaves.lifetime = 150;
}

function draw() {
  background(0);
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x= World.mouseX;
  drawSprites();

  var ran = Math.round(random (1, 3));
  if(frameCount % 80 == 0){
   if(ran == 1){
     createApples();
   }

  
   else if( ran == 2){
     createLeaves();
   } else{
     createOrangeleaves();
   }
  
}  
}
