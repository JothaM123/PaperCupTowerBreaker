class Cup{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h =h;
        this.image = loadImage("cup.png");
        World.add(world, this.body);
    }

    display(){
        var pos= this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.w, this.h);
        pop();
    }
}