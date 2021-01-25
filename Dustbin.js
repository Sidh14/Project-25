class Dustbin
{
    constructor(x,y,width,height)
    {
        var options =
        {
            isStatic : true
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }
   display()
    {
       // push()
        //translate(posBottom.x, posBottom.y+10);
        imageMode(CENTER); 
        console.log("hello")
        image(this.image, 1020,600,this.width, this.height) 
        //pop()
    }
    
}