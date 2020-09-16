class Ball{
    constructor(x,y){
        var option={
            isStatic:false,
            density:1.2,
            friction:0.5,
            restitution:0.3,



        }
  
        this.body = Matter.Bodies.circle(x,y,10,option);
        console.log(x);
        //console.log(this.body.position.y);
        this.radius = 10;
        

        World.add(world,this.body);
    }
   display(){
       var pos = this.body.position;

       console.log(pos.x);
       ellipseMode(CENTER);
       fill("blue");
       ellipse(pos.x,pos.y,20 );
       

   }
}