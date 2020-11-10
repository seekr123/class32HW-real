class SlingShot{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            pointB:body2,
            stiffness:0.1

        }
       
        this.pointB=body2
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
      
    }
    display(){
        if (this.chain.bodyA!==null){
            var posa=this.chain.bodyA.position;
            var posb=this.pointB;
            strokeWeight(2);
            line (posa.x,posa.y,posb.x,posb.y);
        }
       
    }  
    fly(){
        this.chain.bodyA = null;
    }
}
    
