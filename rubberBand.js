class RubberBand{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
        this.pointB = pointB ;
        this.RubberBand = Constraint.create(options);
        World.add(world, this.RubberBand);
    }

    fly(){
        this.RubberBand.bodyA = null;
    }
    attach(body){
        this.RubberBand.bodyA = body;
    }

    display(){
       push ()
        if (this.RubberBand.bodyA){
        var pointA = this.RubberBand.bodyA.position;
        var pointB = this.pointB ;
        strokeWeight(4);
        stroke("cyan")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop ()
    }
  
}
}