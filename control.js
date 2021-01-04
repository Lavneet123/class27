class Control
{
  constructor(bA,bB)
  {
    var options =
    {
       bodyA: bA,
       bodyB: bB,
       stiffness:0.04,
       length:10
    }
    this.chain = constrained.create(options)
    World.add(world,this.chain)
  }
  display()
  {
      strokeWeight(2)
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
  }
}