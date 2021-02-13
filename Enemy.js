class Enemy
{
    constructor(x,y,image)
    {
        this.x=x;
        this.y=y;
        this.image = image;
        //this.depth=2;
    }

    display()
    { 
        push()
        //this.body.depth=this.depth;
        //translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 50);
        pop();
    }
}