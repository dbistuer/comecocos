class Raim extends GameObject{

  constructor(row,col){
    super(row,col)
  }

  display(){
    image(frambuesa , this.row, this.col);
  }
}
