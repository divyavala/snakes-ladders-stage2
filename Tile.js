class Tile{
    constructor(x,y,wh,index,next){
        this.x=x;
        this.y=y;
        this.wh=wh;
        this.index=index;
        this.next= next; 
        this.snakeorladder=0;
        if(this.index%2===0){
        this.color=200;
        }
        else{
            this.color=100;
        }

  }
  getCenter(){
      let cx=this.x+this.wh/2;
      let cy=this.y+this.wh/2;
      return[cx,cy];
  }
  show(tiles){
      fill(this.color);
      rect(this.x,this.y,this.wh,this.wh);

      if(this.snakeorladder!=0){
        let myCenter=this.getCenter();
        let nextCenter=tiles[this.index+this.snakeorladder].getCenter();
        
        strokeWeight(4);
        if(this.snakeorladder<0){
        stroke(255);
        }else{
            stroke(0);
        }
        line(myCenter[0],myCenter[1],nextCenter[0],nextCenter[1]);
        
      }
     // fill(255);
      //textSize(32);
      //text(this.index+'->'+this.next,this.x,this.y+this.wh);
  }
}