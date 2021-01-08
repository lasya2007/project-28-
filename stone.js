class Stone{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,15,options);
        this.x=x;
        this.y=y;
        this.r=15;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2);

    }
}