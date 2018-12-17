class Pacman extends GameObject{

  constructor(row,col){
    super(row,col);
    this.direction=2;
    this.score =0;
    this.lives = 1;
    this.frame=0;
    this.perimetre = 16;
  }

  show(){
  //
  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
  //
  // img: la imagen a mostrar
  //
  // dx 	Número: la coordenada x en el lienzo de destino donde se ubicará la esquina superior izquierda de la imagen
  // dy 	Número: la coordenada y en el lienzo de destino donde se ubicará la esquina superior izquierda de la imagen
  // dWidth 	Número: ancho de la imagen a dibujar en el lienzo de destino
  // dHeight 	Número: altura de la imagen a dibujar en el lienzo de destino
  // sx 	Número: la coordenada x de la esquina superior izquierda del subrectángulo de la imagen original a dibujar en el lienzo de destino
  // sy 	Número: la coordenada y de la esquina superior izquierda del subrectángulo de la imagen original a dibujar en el lienzo de destino
  // sWidth 	Número: el ancho del subrectángulo de la imagen original a dibujar en el lienzo de destino
  // sHeight 	Número: la altura del subrectángulo de la imagen original a dibujar en el lienzo de destino
      //this.frame++;
    //  image(pacimg, 32*this.frame++, 32*this.direction, 32, 32, this.x, this.y, 32,32);
      image(pacimg, this.row,this.col, IMAGE_SIZE, IMAGE_SIZE, IMAGE_SIZE*this.frame, IMAGE_SIZE*this.direction, IMAGE_SIZE,IMAGE_SIZE);
    // console.log("Frame actual pacman:" + this.frame);
    // console.log("Direccion actual pacman:" + this.direction);
    // console.log("Posicion X pacman:" + this.fila);
    // console.log("Posicion Y pacman:" + this.columna);
      //El numero de frames es major que 5 torno a cero ( es podria fer modul 5 amb la resta i
      //continuar sumant)
      this.frame++;
      if ( this.frame == 5) this.frame =0;
      // noLoop();
    }

eatFood(menjar){
  var distancia=dist(this.row,this.col,menjar.row,menjar.col);
  if(distancia<16){
    this.score++;
    return true;
  }else{
    return false;
  }
}

eatRaim(raim){
  var distancia = dist(this.row,this.col,raim.row,raim.col);
  if(distancia<16){
    this.score=this.score*2;
    return true;
  }else{
    return false;
  }
}

xocRoca(roca){
  var distancia = dist(this.row,this.col,roca.row,roca.col);
  if(distancia<16){
    this.lives--;
    alert('Vides restants: '+this.lives);
    document.getElementById('vid').innerHTML = "Vides restants: <b style='font-size: 20px;'>"+myPacman.lives+"</b>";
    reposicionarPacman(this.direction);
  }else{
    return false;
  }
}

 moureDreta(){
   this.direction=0;
   //alert(this.fila);
   if(this.row<(COL*IMAGE_SIZE)-IMAGE_SIZE){
     this.row=this.row+IMAGE_SIZE;
   }
 }
 moureEsquerra(){
   this.direction=2;
   //alert(this.fila);
   if(this.row>=1*IMAGE_SIZE){
     this.row=this.row-IMAGE_SIZE;
   }
 }
 moureAvaix(){
   this.direction=1;
   //alert(this.col);
   if(this.col<(ROW*IMAGE_SIZE)-IMAGE_SIZE){
     this.col=this.col+IMAGE_SIZE;
   }
 }
 moureUp(){
   this.direction=3;
   //alert(this.col);
   if(this.col>=1*IMAGE_SIZE){
     this.col=this.col-IMAGE_SIZE;
   }
 }
}

function reposicionarPacman(direccion){
  if(direccion==0){
    myPacman.moureEsquerra();
  }else if(direccion==1){
    myPacman.moureUp();
  }else if(direccion==2){
    myPacman.moureDreta();
  }else if(direccion==3){
    myPacman.moureAvaix();
  }
}
