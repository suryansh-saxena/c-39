var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, lamborgini,ferrari,audi,formula260;

var audiImg,ferrariImg,formula260Img,lamborginiImg,trackImg,groundImg

function preload(){
  ferrariImg = loadImage("images/ferrari.png")

  audiImg = loadImage("images/audi.png")

  formula260Img = loadImage("images/formula260.png")

  lamborginiImg = loadImage("images/lamborgini.png")

  trackImg = loadImage("images/track.jpg")

  groundImg = loadImage("images/ground.png")


}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
   game.end()
  }
}
