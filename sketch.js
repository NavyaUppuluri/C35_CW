//Create variables here
var Database;
var dog, happyDog;
var foodS, foodStock;
var dog;


function preload(){
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

	//load images here
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(250,250,20,20);

  Database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);


  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}



  drawSprites();
  //add styles here


}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



