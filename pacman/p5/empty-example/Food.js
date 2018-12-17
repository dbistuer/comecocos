class Food extends GameObject{

  constructor(row,col){
    super(row,col)
  }

  display(){
      image(cereza , this.row, this.col);
      // image(frambuesa , this.columna*IMAGE_SIZE, this.fila*IMAGE_SIZE);
  }

}
