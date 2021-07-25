//creating variables
var runners, runners_Image;
var path, path1, path_Image;
var line, line1, line11, line12;

function preload(){

//loading images and animation
runners_Image = loadAnimation("Runner-1.png","Runner-2.png");
path_Image = loadImage("path.png");

}

function setup(){

  //creating a canvas  
createCanvas(400,400);

//creating the road or the background
path = createSprite(190, 200);
path.addImage("path", path_Image);
path.velocityY=4;
path.scale=1.6;

path1 =createSprite(190,600);
path1.addImage("path", path_Image);
path1.velocityY=4; 
path1.scale=1.6;

//creating the boy
runners = createSprite(200, 350);
runners.addAnimation("runner", runners_Image);
runners.scale=0.05;

//creating the boundaries
line = createSprite(410, 200, 55, 400);
line1 = createSprite(-10, 200, 55, 400);

//make the boundaries invisible
line.visble=false;
line1.visble=false;

//making another set of boundaries to recreate the white lines
line11 = createSprite(410, 200, 55, 400);
line12 = createSprite(-10, 200, 55, 400);
line11.shapeColor="lightgray";
line12.shapeColor="lightgray";
}

function draw() {

  //giving the background color
background("lightgrey");

//make an infinite background
if (path.y>600){
path.y=path1.y-399;
}
if (path1.y>600){
path1.y=path.y-400;
}

// setting the x position of the player to the x position of the mouse
if(mouseIsOver(path||path1)){  
runners.x=World.mouseX;
}  

// Making the runner collide with the boundaries
runners.collide(line1);
runners.collide(line);

//Finally, drawing all the sprites
drawSprites();

}
