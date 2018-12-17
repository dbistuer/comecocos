const ROW=10;
const COL=10;
const IMAGE_SIZE=32;



class Maze{

  constructor(){

    this.myRow=ROW;
    this.myCol=COL;
    this.myMap=[[1,1,1,1,1,1,1,1,1,1],
                [1,6,0,0,0,0,0,0,6,1],
                [1,0,5,1,4,1,3,1,0,1],
                [1,0,1,1,1,1,1,1,0,1],
                [1,0,1,0,2,0,0,1,0,1],
                [1,0,0,0,1,1,0,0,0,1],
                [1,0,1,0,0,0,0,1,0,1],
                [1,0,1,1,0,0,1,1,0,1],
                [1,6,0,0,0,0,0,0,6,1],
                [1,1,1,1,1,1,1,1,1,1]
              ];
              /*
                1 = roca
                0 = cereza
                2 = pacman
                3 = fantasma
                4 = fantasma
                5 = fantasma
                6 = frambuesa
              */
  };

}
