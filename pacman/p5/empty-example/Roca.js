class Roca extends GameObject{

  constructor(row,col){
    super(row,col)
  }

  display(){
    image(imageRoca, this.row, this.col);
  }

}
