class Tree{
    constructor(x,y){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,250,400,options);
        this.x=x;
        this.y=y;
        this.width=250;
        this.height=400;
        this.image=loadImage("tree.png");
       // World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}