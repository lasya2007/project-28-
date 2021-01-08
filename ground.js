class Ground{
    constructor(x,y){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,1200,15,options);
        this.x=x;
        this.y=y;
        this.width=1200;
        this.height=15;
        World.add(world,this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    }
}