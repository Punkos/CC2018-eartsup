var radiusList = [];
var nbPoint = 20;
var redefined = false;
var epaisseurTrait = 1;

function redefineRadius()
{
  radiusList = [];
  for(var i = 0; i < nbPoint; i++)
  {
    var radius = random(100, 200);
    radiusList.push(radius);
  }
}

function changeColor()
{
  var r = round(random(0, 255));
  var g = round(random(0, 255));
  var b = round(random(0, 255));
  fill(r, g, b);
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  redefineRadius();
  var r, g, b;
  r = round(random(0, 255));
  g = round(random(0, 255));
  b = round(random(0, 255));
  background(r, g, b);
}

function draw()
{
  var time = millis();
  var second = time * 0.001;
  var intSecond = round(second);
  var maxTime = 2;
  var modTime = intSecond % maxTime;

  if(modTime == 0)
  {
    if(redefined == false)
    {
      redefineRadius();
      redefined = true;
    }
  }
  else
  {
    redefined = false;
  }

  beginShape();
  var ox = width/2;
  var oy = height/2;
  for(var i = 0; i < nbPoint; i++)
  {
    var normI = i / nbPoint;
    var theta = normI * TWO_PI;
    var radius = radiusList[i];
    var x = cos(theta) * radius + ox;
    var y = sin(theta) * radius + oy;
    vertex(x, y);
  }
  endShape(CLOSE);
}



function keyPressed()
{
  if(keyCode == 38) //Appuie sur flèche haut
  {
    nbPoint++;
    redefineRadius();
  }
  if(keyCode == 40) //Appuie sur flèche bas
  {
    nbPoint--;
    redefineRadius();
  }
  if(keyCode == 39 || keyCode == 37) //Appuie sur flèche droite ou gauche
  {
    changeColor();
  }

  if(keyCode == 73 || keyCode == 76) //Appui sur I ou L
  {
    var sR = round(random(0, 255));
    var sG = round(random(0, 255));
    var sB = round(random(0, 255));
    stroke(sR, sG, sB);
  }
}
