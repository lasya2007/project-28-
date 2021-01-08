class Elastic{
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
            length:20,
            stiffness:0.004
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    attach(body){
        this.chain.bodyA=body;
    }
    fly(){
        this.chain.bodyA=null;
    }
    display(){
       
        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.chain.pointB;
            push();
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}