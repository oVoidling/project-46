var bk_img;
var player,playerImage,playerImageWalk;
var zombie,zombieGroup,zombieImage;
var bullet,bulletImg;
var playerMoving = false;
var score = 0;
var flag = 0;
var bulletGroup;
var flag2 = 0;
var gameState = "HOME";
var bk_music;
var bulletSound;
var bulletLeft = 10
var invWall;
var homeScreenImg;
var zombie2;
var zombie2Group;
function preload(){
bk_img = loadImage("./assets/background.jpg");
playerImageWalk = loadAnimation("./assets/gunman1.png","./assets/gunman2.png","./assets/gunman3.png","./assets/gunman4.png","./assets/gunman5.png","./assets/gunman6.png");
playerImage = loadImage("assets/gunman2.png");
zombieImage = loadAnimation("assets/zombie1.png","assets/zombie2.png","assets/zombie3.png","assets/zombie4.png","assets/zombie5.png","assets/zombie6.png","assets/zombie7.png","assets/zombie8.png");
bulletImg = loadImage("assets/bullet.jpg");
bulletSound = loadSound("./assets/bulletSound.mp3");
homeScreenImg = loadImage("./assets/homeScreen.jpg");
}

function setup(){
createCanvas(windowWidth,windowHeight);

zombieGroup = new Group();
zombie2Group = new Group();
bulletGroup = new Group();
player = createSprite(width/2 - 800,height/2 + 200)
player.addImage('walk',playerImage);
player.addAnimation('player',playerImageWalk);
invWall = createSprite(width/2 + 1000,height/2 + 200);
invWall.addImage(bulletImg);
invWall.scale = 0.2
invWall.visible = false;

}

function draw(){
background(bk_img)
if(gameState === "HOME"){
    background(homeScreenImg);
    player.remove();
    fill(255);
    stroke("white")
    textSize(30);
    text("Press 1 to start in easy mode",width/2 - 200,height/2 - 100);
    textSize(30);
    text("Press 2 to start in meduim mode",width/2 - 200,height/2);
    textSize(30);
    text("Press 3 to start in hard mode",width/2 - 200,height/2 + 100);
    textSize(30);
    text("Press 4 to start in very hard mode",width/2 - 200,height/2 + 200);

    if(keyDown("1")){
        gameState = "PLAY1";
        score = 0;
        bulletLeft = 10;
        background(bk_img);
        player = createSprite(width/2 - 800,height/2 + 200)
        player.addImage('walk',playerImage);
        player.addAnimation('player',playerImageWalk);
    }
    if(keyDown("2")){
        gameState = "PLAY2";
        score = 0;
        bulletLeft = 10;
        background(bk_img);
        player = createSprite(width/2 - 800,height/2 + 200)
        player.addImage('walk',playerImage);
        player.addAnimation('player',playerImageWalk);
    }
    if(keyDown("3")){
        gameState = "PLAY3";
        score = 0;
        bulletLeft = 10;
        background(bk_img);
        player = createSprite(width/2 - 800,height/2 + 200)
        player.addImage('walk',playerImage);
        player.addAnimation('player',playerImageWalk);
    }
    if(keyDown("4")){
        gameState = "PLAY4";
        score = 0;
        bulletLeft = 10;
        background(bk_img);
        player = createSprite(width/2,height/2 + 200)
        player.addImage('walk',playerImage);
        player.addAnimation('player',playerImageWalk);
    }
}
if(gameState === "PLAY1"){
if(playerMoving == false){
    player.changeImage('walk');
}else{
    player.changeAnimation('player');
}
if(keyDown(RIGHT_ARROW)){
    player.position.x += 5;
    playerMoving = true;
    player.mirrorX(1);
    flag2 = 0;
}
if(keyWentUp(RIGHT_ARROW)){
    playerMoving = false;
}
if(keyDown(LEFT_ARROW)){
    player.position.x -= 5;
    playerMoving = true;
    player.mirrorX(-1);
    flag2 = 1;
}
if(keyWentUp(LEFT_ARROW)){
    playerMoving = false;
}
textSize(30);
text("Score: " + score,width/1 - 120,50);
text("Bullets Left: " + bulletLeft,width/1 - 400,50);

if(frameCount % 340 == 0){
    zombie = createSprite(random(900,width),height/2 + 200);
    zombie.addAnimation('zombie',zombieImage);
    zombie.scale = 0.5;
    zombie.mirrorX(-1);
    zombie.velocity.x = -5;
    zombie.lifetime = 40
    zombieGroup.add(zombie);
}

if(flag === 1){
zombieGroup.collide(bulletGroup,removeBlock)
}
zombieGroup.collide(player,colliderplayer)
bulletGroup.collide(invWall,removeBullet)

if(score === 10){
    gameState = "WIN1";
    player.remove();
}
if(keyDown("r") && bulletLeft <= 1){
    bulletLeft += 10;
    console.log (bulletLeft);
}
}

if(gameState === "END1"){
    background("black");
    stroke("yellow");
    textSize(30);
    text("Game Over \n Your score is " + score,width/2 - 100, height/2);
    text("Press ENTER To Restart",width/2 - 100, height/2 + 100);
    text("Press ESCAPE To go to HOME Page",width/2 - 100, height/2 + 150);
    fill("black");
    if(keyDown(ENTER)){
        resetGame();
    }
    if(keyDown(ESCAPE)){
        gameState = "HOME";
    }
    bulletGroup.removeSprites();

}

if(gameState === "WIN1"){
    background("black");
    stroke("yellow");
    textSize(30);
    text("You Won!",width/2 - 100, height/2);
    text("Press ENTER To Restart",width/2 - 100, height/2 + 100);
    text("Press ESCAPE To go to HOME Page",width/2 - 100, height/2 + 150);
    fill("black");
    if(keyDown(ENTER)){
        resetGame();
    }
    if(keyDown(ESCAPE)){
        gameState = "HOME";
    }
    bulletGroup.removeSprites();

}
if(gameState === "PLAY2"){
    if(playerMoving == false){
        player.changeImage('walk');
    }else{
        player.changeAnimation('player');
    }
    if(keyDown(RIGHT_ARROW)){
        player.position.x += 5;
        playerMoving = true;
        player.mirrorX(1);
        flag2 = 0;
    }
    if(keyWentUp(RIGHT_ARROW)){
        playerMoving = false;
    }
    if(keyDown(LEFT_ARROW)){
        player.position.x -= 5;
        playerMoving = true;
        player.mirrorX(-1);
        flag2 = 1;
    }
    if(keyWentUp(LEFT_ARROW)){
        playerMoving = false;
    }
    textSize(30);
    text("Score: " + score,width/1 - 120,50);
    text("Bullets Left: " + bulletLeft,width/1 - 400,50);
    
    if(frameCount % 340 == 0){
        zombie = createSprite(random(1000,width),height/2 + 200);
        zombie.addAnimation('zombie',zombieImage);
        zombie.scale = 0.5;
        zombie.mirrorX(-1);
        zombie.velocity.x = -7;
        zombie.lifetime = 40
        zombieGroup.add(zombie);
    }
    
    if(flag === 1){
    zombieGroup.collide(bulletGroup,removeBlock)
    }
    zombieGroup.collide(player,colliderplayer2)
    bulletGroup.collide(invWall,removeBullet)
    
    if(score === 25){
        gameState = "WIN2";
        player.remove();
    }
    if(keyDown("r") && bulletLeft <= 1){
        bulletLeft += 10;
        console.log (bulletLeft);
    }
    }
    
    if(gameState === "END2"){
        background("black");
        stroke("yellow");
        textSize(30);
        text("Game Over \n Your score is " + score,width/2 - 100, height/2);
        text("Press ENTER To Restart",width/2 - 100, height/2 + 100);
        text("Press ESCAPE To go to HOME Page",width/2 - 100, height/2 + 150);
        fill("black");
        if(keyDown(ENTER)){
            resetGame2();
        }
        if(keyDown(ESCAPE)){
            gameState = "HOME";
        }
        bulletGroup.removeSprites();
    
    }
    
    if(gameState === "WIN2"){
        background("black");
        stroke("yellow");
        textSize(30);
        text("You Won!",width/2 - 100, height/2);
        text("Press ENTER To Restart",width/2 - 100, height/2 + 100);
        text("Press ESCAPE To go to HOME Page",width/2 - 100, height/2 + 150);
        fill("black");
        if(keyDown(ENTER)){
            resetGame2();
        }
        if(keyDown(ESCAPE)){
            gameState = "HOME";
        }
        bulletGroup.removeSprites();
    
    }
    if(gameState === "PLAY3"){
        if(playerMoving == false){
            player.changeImage('walk');
        }else{
            player.changeAnimation('player');
        }
        if(keyDown(RIGHT_ARROW)){
            player.position.x += 5;
            playerMoving = true;
            player.mirrorX(1);
            flag2 = 0;
        }
        if(keyWentUp(RIGHT_ARROW)){
            playerMoving = false;
        }
        if(keyDown(LEFT_ARROW)){
            player.position.x -= 5;
            playerMoving = true;
            player.mirrorX(-1);
            flag2 = 1;
        }
        if(keyWentUp(LEFT_ARROW)){
            playerMoving = false;
        }
        textSize(30);
        text("Score: " + score,width/1 - 120,50);
        text("Bullets Left: " + bulletLeft,width/1 - 400,50);
        
        if(frameCount % 340 == 0){
            zombie = createSprite(random(1300,width),height/2 + 200);
            zombie.addAnimation('zombie',zombieImage);
            zombie.scale = 0.5;
            zombie.mirrorX(-1);
            zombie.velocity.x = -10;
            zombie.lifetime = 40
            zombieGroup.add(zombie);
        }
        
        if(flag === 1){
        zombieGroup.collide(bulletGroup,removeBlock)
        }
        zombieGroup.collide(player,colliderplayer3)
        bulletGroup.collide(invWall,removeBullet)
        
        if(score === 50){
            gameState = "WIN3";
            player.remove();
        }
        if(keyDown("r") && bulletLeft <= 1){
            bulletLeft += 10;
            console.log (bulletLeft);
        }
        }
        
        if(gameState === "END3"){
            background("black");
            stroke("yellow");
            textSize(30);
            text("Game Over \n Your score is " + score,width/2 - 100, height/2);
            text("Press ENTER To Restart",width/2 - 100, height/2 + 100);
            text("Press ESCAPE To go to HOME Page",width/2 - 100, height/2 + 150);
            fill("black");
            if(keyDown(ENTER)){
                resetGame3();
            }
            if(keyDown(ESCAPE)){
                gameState = "HOME";
            }
            bulletGroup.removeSprites();
        
        }
        
        if(gameState === "WIN3"){
            background("black");
            stroke("yellow");
            textSize(30);
            text("You Won!",width/2 - 100, height/2);
            text("Press ENTER To Restart",width/2 - 100, height/2 + 100);
            text("Press ESCAPE To go to HOME Page",width/2 - 100, height/2 + 150);
            fill("black");
            if(keyDown(ENTER)){
                resetGame3();
            }
            if(keyDown(ESCAPE)){
                gameState = "HOME";
            }
            bulletGroup.removeSprites();
        
        }
        if(gameState === "PLAY4"){
            if(playerMoving == false){
                player.changeImage('walk');
            }else{
                player.changeAnimation('player');
            }
            if(keyDown(RIGHT_ARROW)){
                player.position.x += 5;
                playerMoving = true;
                player.mirrorX(1);
                flag2 = 0;
            }
            if(keyWentUp(RIGHT_ARROW)){
                playerMoving = false;
            }
            if(keyDown(LEFT_ARROW)){
                player.position.x -= 5;
                playerMoving = true;
                player.mirrorX(-1);
                flag2 = 1;
            }
            if(keyWentUp(LEFT_ARROW)){
                playerMoving = false;
            }
            textSize(30);
            text("Score: " + score,width/1 - 120,50);
            text("Bullets Left: " + bulletLeft,width/1 - 400,50);
            
            if(frameCount % 450 == 0){
                zombie = createSprite(random(1300,width),height/2 + 200);
                zombie.addAnimation('zombie',zombieImage);
                zombie.scale = 0.5;
                zombie.mirrorX(-1);
                zombie.velocity.x = -4;
                zombie.lifetime = 40
                zombieGroup.add(zombie);
            }
            if(frameCount % 700 == 0){
                zombie2 = createSprite(random(0,width/2 - 400),height/2 + 200);
                zombie2.addAnimation('zombie',zombieImage);
                zombie2.scale = 0.5;
                zombie2.mirrorX(1);
                zombie2.velocity.x = 4;
                zombie2.lifetime = 40
                zombie2Group.add(zombie2);
                }
            if(flag === 1){
            zombieGroup.collide(bulletGroup,removeBlock)
            }
            zombieGroup.collide(player,colliderplayer4)
            zombie2Group.collide(player,colliderplayer42)
            bulletGroup.collide(invWall,removeBullet)
            zombie2Group.collide(bulletGroup,removeBlock2)
            
            if(score === 25){
                gameState = "WIN4";
                player.remove();
            }
            if(keyDown("r") && bulletLeft <= 1){
                bulletLeft += 10;
                console.log (bulletLeft);
            }
            }
            
            if(gameState === "END4"){
                background("black");
                stroke("yellow");
                textSize(30);
                text("Game Over \n Your score is " + score,width/2 - 100, height/2);
                text("Press ENTER To Restart",width/2 - 100, height/2 + 100);
                text("Press ESCAPE To go to HOME Page",width/2 - 100, height/2 + 150);
                fill("black");
                if(keyDown(ENTER)){
                    resetGame4();
                }
                if(keyDown(ESCAPE)){
                    gameState = "HOME";
                }
                bulletGroup.removeSprites();
                zombie2Group.removeSprites();
                zombieGroup.removeSprites();
            }
            
            if(gameState === "WIN4"){
                background("black");
                stroke("yellow");
                textSize(30);
                text("You Won!",width/2 - 100, height/2);
                text("Press ENTER To Restart",width/2 - 100, height/2 + 100);
                text("Press ESCAPE To go to HOME Page",width/2 - 100, height/2 + 150);
                fill("black");
                if(keyDown(ENTER)){
                    resetGame4();
                }
                if(keyDown(ESCAPE)){
                    gameState = "HOME";
                }
                bulletGroup.removeSprites();
            
            }
drawSprites();
}
function removeBlock(zombie,bullet){
    zombie.remove();
    bullet.remove();
    score += 1;
}
function removeBlock2(zombie2,bullet){
    zombie2.remove();
    bullet.remove();
    score += 1;
}
function colliderplayer(zombie,player){
    zombie.remove();
    player.remove();
    gameState = "END1";
}

function colliderplayer2(zombie,player){
    zombie.remove();
    player.remove();
    gameState = "END2";
}
function colliderplayer3(zombie,player){
    zombie.remove();
    player.remove();
    gameState = "END3";
}

function colliderplayer4(zombie,player){
    zombie.remove();
    player.remove();
    gameState = "END4";
}
function colliderplayer42(zombie2,player){
    zombie2.remove();
    player.remove();
    gameState = "END4";
}
function removeBullet(invWall,bullet){
    bullet.remove();
    invWall.visible = false;
}
function keyPressed(){
if(keyCode == 32 && bulletLeft > 0){
    bullet = createSprite(player.position.x + 100,player.position.y - 40);
    bullet.addImage(bulletImg);
    bullet.scale = 0.03;
    if(flag2 === 1){
    bullet.velocity.x = -4;
    bullet.mirrorX(-1);
    }else{
    bullet.velocity.x = 4;
    bullet.mirrorX(1);
    }
    flag = 1;
    bulletSound.play()
    bulletSound.setVolume(.1);
    bulletLeft -= 1;
    bulletGroup.add(bullet);
}
}
function resetGame(){
    gameState = "PLAY1";
    score = 0;
    bulletLeft = 10;
    background(bk_img);
    player = createSprite(width/2 - 800,height/2 + 200)
    player.addImage('walk',playerImage);
    player.addAnimation('player',playerImageWalk);
}

function resetGame2(){
    gameState = "PLAY2";
    score = 0;
    bulletLeft = 10;
    background(bk_img);
    player = createSprite(width/2 - 800,height/2 + 200)
    player.addImage('walk',playerImage);
    player.addAnimation('player',playerImageWalk);
}

function resetGame3(){
    gameState = "PLAY3";
    score = 0;
    bulletLeft = 10;
    background(bk_img);
    player = createSprite(width/2 - 800,height/2 + 200)
    player.addImage('walk',playerImage);
    player.addAnimation('player',playerImageWalk);
}
function resetGame4(){
    gameState = "PLAY4";
    score = 0;
    bulletLeft = 10;
    background(bk_img);
    player = createSprite(width/2,height/2 + 200)
    player.addImage('walk',playerImage);
    player.addAnimation('player',playerImageWalk);
}