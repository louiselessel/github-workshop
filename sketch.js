/*

var x = 0;
var y =0;
var easing = 0.05;

function setup() {
  createCanvas(640, 360); 
  noStroke();  
}

function draw() { 
  background(51);
  
  var targetX = mouseX;
  var dx = targetX - x;
  x += dx * easing;
  
  var targetY = mouseY;
  var dy = targetY - y;
  y += dy * easing;
  
  
  fill(255,0,0);
  ellipse(x, y, 66, 66);
}
*/

var offset = 2;
var dropSize = 10;
var dropLength = 60;
var easing = 0.05;
var endY;

var drop; // object

function setup() {
  createCanvas(400, 400);
  //noStroke();
  var size = 10;
  drop1 = new drops(mouseX, mouseY);
  drop2 = new drops(width / 2, height / 2);
}

function draw() {
  var x = mouseX;
  var y = mouseY;
  //background(255); //, 20);

  //drop1.follow();
  //drop1.display();
  
	//drop2 = new drops(mouseX, mouseY);
  drop2.move();
  drop2.display();
  
  //drops(x,y);

  // show mouse
  fill(255);
  ellipse(x, y, 10, 10);

}

function drops(xIn, yIn) {
  // make local variables
  this.x = xIn;
  this.y = yIn;
  // length of slide effect
  this.maxLength = random(10,dropLength);
  this.maxFall = this.maxLength + yIn;
  // speed
  this.speed = random(5, 15);
  // size of this drop
  //this.diameter = random(10, 30);


  this.follow = function() {
    var targetX = mouseX;
    var dx = targetX - this.x;
    this.x += dx * easing;

    var targetY = mouseY;
    var dy = targetY - this.y;
    this.y += dy * easing;
  }

  this.move = function() {
    //only update this.y if it is below the lenght a drop can slide
    if (this.y > this.maxFall) {
      //print("larger");
      this.y = this.y;
    } else {
			this.y += this.speed * easing;
    }
  }

  this.display = function() {
    fill(255, 0, 0, 255);
    ellipse(this.x, this.y, dropSize, dropSize);
  }

}

//print(rand);
//for (i = 0; i < rand; i++) {
//  fill(255, 0, 0, 255);
//  ellipse(x, y+i, dropSize, dropSize);
// }


//for (i = 0; i < 10; i++) {
//  fill(255, 0, 0, 255);
//	ellipse(mouseX, mouseY+i*2, 10, 10);
//}