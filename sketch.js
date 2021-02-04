var canvas;
var music;
var o1,o2,o3,o4,box;
var edges;

function preload() {
    music=loadSound("music.mp3")
    
}

function setup(){
    createCanvas(800,600)
    o1=createSprite(100,590,180,20);
    o2=createSprite(300,590,180,20);
    o3=createSprite(500,590,180,20);
    o4=createSprite(700,590,180,20);
    o1.shapeColor="blue"
    o2.shapeColor="yellow"
    o3.shapeColor="purple"
    o4.shapeColor="green"

    box=createSprite(400,300,25,25)
    box.shapeColor="white"
    box.velocityX=5
    box.velocityY=5
}
function draw(){
    background("grey")
 
    if (box.isTouching(o1)) {
        box.shapeColor="blue"
        music.play();

        
    }
    if (box.isTouching(o2)) {
        box.shapeColor="yellow"
        music.play();

        
    }
    if (box.isTouching(o3)) {
        box.shapeColor="purple"
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
        
    }
    if (box.isTouching(o4)) {
        box.shapeColor="green"
        music.play();

        
    }



    edges=createEdgeSprites();
    box.bounceOff(edges);
    box.bounceOff(o1);
    box.bounceOff(o2);
    box.bounceOff(o3);
    box.bounceOff(o4);
    drawSprites();
}