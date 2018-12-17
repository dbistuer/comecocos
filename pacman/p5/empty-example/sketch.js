var pacimg;
var fantasma1;
var fantasma2;
var fantasma3;
var cereza;
var frambuesa;

var myPacman;

var myMaze= new Maze();

var rocasMapa=[];
var foodMapa=[];
var raimMapa=[];

function preload(){
  imageRoca =loadImage("/img/stone/piedra.png");
  //pacimg=loadImage("/img/comecacas/pacman.png");
  pacimg=loadImage("/img/comecacas/pac.png");
  fantasma1=loadImage("/img/fantasmes/pacman(3).png");
  fantasma2=loadImage("/img/fantasmes/pacman(4).png");
  fantasma3=loadImage("/img/fantasmes/pacman(5).png");
  cereza=loadImage("/img/food/cerezas.png");
  frambuesa=loadImage("/img/food/frambuesa.png");
}

function setup() {
  createCanvas(COL*IMAGE_SIZE,ROW*IMAGE_SIZE);
  myPacman= new Pacman(4*IMAGE_SIZE,4*IMAGE_SIZE);
//Mapa de la roca
  for(row=0;row< myMaze.myRow;row++){
    for(col=0;col < myMaze.myCol;col++){
      if(myMaze.myMap[row][col]==1){
          rocasMapa.push(new Roca(col*IMAGE_SIZE,row*IMAGE_SIZE));
        }
      }
    }
    //mapa menjar
    for(row=0;row< myMaze.myRow;row++){
      for(col=0;col < myMaze.myCol;col++){
        if(myMaze.myMap[row][col]==0){
            foodMapa.push(new Food(col*IMAGE_SIZE,row*IMAGE_SIZE));
          }
        }
      }
      //mapa raim
      for(row=0;row< myMaze.myRow;row++){
        for(col=0;col < myMaze.myCol;col++){
          if(myMaze.myMap[row][col]==6){
              raimMapa.push(new Raim(col*IMAGE_SIZE,row*IMAGE_SIZE));
            }
          }
        }
}

function draw() {
  background(40);
  var longitud =0;
//Visualitza objectes
  for(longitud=0;longitud< rocasMapa.length ;longitud++){
      rocasMapa[longitud].display();
    }
  for(longitud=0;longitud<foodMapa.length;longitud++){
      foodMapa[longitud].display();
    }
  for(longitud=0;longitud<raimMapa.length;longitud++){
      raimMapa[longitud].display();
    }
  myPacman.show();

//Mirar xocss pacman
  for(longitud=0;longitud<foodMapa.length;longitud++){
      if(myPacman.eatFood(foodMapa[longitud])){
        foodMapa.splice(longitud, 1);
      }
    }
  for(longitud=0;longitud<raimMapa.length;longitud++){
      if(myPacman.eatRaim(raimMapa[longitud])){
        raimMapa.splice(longitud, 1);
      }
    }
  for(longitud=0;longitud< rocasMapa.length ;longitud++){
    myPacman.xocRoca(rocasMapa[longitud]);
  }
    //comprovarTeclat();

}function comprovarTeclat(){
if (keyIsDown(LEFT_ARROW)) {
    myPacman.moureEsquerra();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myPacman.moureDreta();
  }

  if (keyIsDown(UP_ARROW)) {
    myPacman.moureUp();
  }

  if (keyIsDown(DOWN_ARROW)) {
    myPacman.moureDreta();
  }
  win();
}

function keyPressed(){
  if(keyCode==RIGHT_ARROW ){
    myPacman.moureDreta();
  }else if(keyCode==LEFT_ARROW){
    myPacman.moureEsquerra();
  }else if(keyCode==UP_ARROW){
    myPacman.moureUp();
  }else if(keyCode==DOWN_ARROW){
    myPacman.moureAvaix();
  }
  win();
}
function win(){
  if(foodMapa.toString()=="" && raimMapa.toString()==""){
    alert("As guanyat CAMPEON!;P");
    window.location.reload();
  }
}
