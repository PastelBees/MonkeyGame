
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(500, 350);
  
  monkey = createSprite(50, 300, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale=.115
  
  ground = createSprite(300, 343, 1000, 15)
  ground.velocityX = -4
  ground.shapeColor = ("green")
  ground.x = ground.width/2
 
  
  FoodGroup = createGroup()
  obstacleGroup = createGroup()
}


function draw() {
  background("lightblue")
  

  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  if(keyDown("space")&& monkey.y>250){
    monkey.velocityY = -15
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)

  drawSprites()
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: " + score, 395,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 180,50)
  
  bananas()
  stones()

}

function bananas(){
  if(frameCount % 90 === 0){
    b = createSprite(500, 100, 20, 20)
    b.velocityX = -4
    b.y = Math.round(random(110, 200))
    b.addImage(bananaImage)
    b.scale = .1
    b.lifetime = 130
    
    FoodGroup.add(b)
  }
   
}

function stones(){
  if(frameCount % 250 === 0){
    s = createSprite(500, 320, 20, 20)
    s.velocityX = -4
    s.addImage(obstacleImage)
    s.scale = .18
    s.lifetime = 130
    
    obstacleGroup.add(s)
  }

}




