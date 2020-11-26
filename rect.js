class Rect {
    constructor(x,y,width,height) {
        
        this.x=x;
        this.y=y;
        
     var options = {
         isStatic:true
     }
     this.image = loadImage('sprites/dustbingreen.png');
        this.rect=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.rect);
        this.width=width;
        this.height=height;
    }
    display() {
        push ();
        //translate();
        imageMode(CENTER);
       
        
         image(this.image,575,590,150,125);
        pop ();
    }
}