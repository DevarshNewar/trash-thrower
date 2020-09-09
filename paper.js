class Papers {
    constructor(x, y) {
        var options ={
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }    
      this.body = Bodies.circle(x, y, 70, options);
      this.radius = 70;
      
      this.image = loadImage("paper ball.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      //strokeWeight(5);
      //stroke("red");
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };  