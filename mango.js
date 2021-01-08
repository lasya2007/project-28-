class Mango{
    constructor(x,y){
        var options={
            'isStatic':true,
            'restitution':0,
            'friction':1
        }
        this.body=Bodies.circle(x,y,20,options);
        this.x=x;
        this.y=y;
        this.r=20;
        this.image=loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.x,this.y);
        rotate(this.body.angle);
        pop();
       imageMode(CENTER);
        image(this.image,this.x,this.y,40,40);
    }
}