class Box {
   constructor(x,y,width,height){
       var box_option={
           restitution:0.8,friction:0.4,density:0.4
       }
this.body=Bodies.rectangle(x,y,width,height,box_option)
this.width=width;
this.height=height;
World.add(world,this.body);
   }
display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();


}

}