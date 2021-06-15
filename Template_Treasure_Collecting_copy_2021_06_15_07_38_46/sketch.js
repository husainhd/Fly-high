var path, boy, cash, diamonds, jwellery, sword;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection = 0;
var cashG, diamondsG, jwelleryG, swordGroup;
var line;
//Game States
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
  pathImg = loadImage("bbb.jpg");
  boyImg = loadAnimation("1.png", "2.png", "3.png", "4.png");
  cashImg = loadImage("coin.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jewel.png");
  swordImg = loadImage("swrd.png");
  endImg = loadAnimation("go.png");
  boyImg1 = loadAnimation("1.png");
}

function setup() {
  createCanvas(550, 400);
  // Moving background
  path = createSprite(275, 150);
  path.addImage(pathImg);
  path.velocityX = -4;
  path.scale = 2.1;

  //creating boy running
  boy = createSprite(60, 300, 20, 20);
  boy.addAnimation("SahilRunning", boyImg);
  boy.scale = 0.4;

  cashG = new Group();
  diamondsG = new Group();
  jwelleryG = new Group();
  swordGroup = new Group();

  boy.setCollider("circle", 0, 0, 40);
  boy.debug = false;
}

function draw() {
  if (gameState === PLAY) {
    background(0);
    boy.y = World.mouseY;

    edges = createEdgeSprites();

    //code to reset the background
    if (path.x < 0) {
      path.x = width / 2;
    }

    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 50;
    } else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection + 20;
    } else if (jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 30;
    } else {
      if (swordGroup.isTouching(boy)) {
        gameState = END;
        boy.x = 280;
        boy.y = 200;
        
        boy.addAnimation("SahilRunning",endImg)
       
        
      }
    }

    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: " + treasureCollection, 150, 30);
  }
}

function createCash() {
  if (World.frameCount % 200 == 0) {
    var cash = createSprite(600, Math.round(random(50, 400), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale = 0.05;
    cash.velocityX = -3;
    cash.lifetime = 210;
    cashG.add(cash);
    cash.y = 80;
  }
}

function createDiamonds() {
  if (World.frameCount % 500 == 0) {
    var diamonds = createSprite(600, Math.round(random(50, 350), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.03;
    diamonds.velocityX = -3;
    diamonds.lifetime = 210;
    diamondsG.add(diamonds);
    diamonds.y = 200;
  }
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
    var jwellery = createSprite(600, Math.round(random(50, 350), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale = 0.13;
    jwellery.velocityX = -3;
    jwellery.lifetime = 210;
    jwelleryG.add(jwellery);
    jwellery.y = 300;
  }
}

function createSword() {
  if (World.frameCount % 300 == 0) {
    var sword = createSprite(600, Math.round(random(50, 350), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.08;
    sword.velocityX = -3;
    sword.lifetime = 210;
    swordGroup.add(sword);
    sword.y = 100;
  }
}
