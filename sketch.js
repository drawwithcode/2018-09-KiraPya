var myLoc;
var myMap;
var canvas;
var col = [col1 ='white', col2 ='blue', col3 = 'red'];
var mappa = new Mappa('MapboxGL', 'pk.eyJ1Ijoia2lyYXAiLCJhIjoiY2pvcjBjdWZmMGFydTNwa3dwenRubDQzNSJ9.R-3hyzEN5y6Cb1fduL9otQ');

var spbLat = 59.9402633;
var spbLon = 30.3060126;
//all map options in a single object
var options = {
  lat: spbLat,
  lng: spbLon,
  zoom: 1.5,
  style: 'mapbox://styles/kirap/cjp07n3lu008g2rqjq3grtag2',
  pitch:0
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  //console.log(myLoc);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  //options.lat = myLoc.latitude;
  //options.lng = myLoc.longitude;



}

function draw() {
  // put drawing code here
clear();
//fill(random(col));
  var point = myMap.latLngToPixel(spbLat, spbLon);
  fill('white');
  ellipse(point.x, point.y, 20);

  //fill(random(col));
  push();
   stroke(random(col));
   noFill();
   ellipse(point.x, point.y, random(20,30));
   pop();

   if(mouseIsPressed == true) {
     var myText = '5.351.935';
      textSize(60);
      fill('lightblue');
      stroke(255);
      text(myText, width/2, height/2);
   }

    push();
   var myText = 'press mouse to see the population in Saint Petersburg';
     textFont('Raleway');
     textAlign(CENTER);
     textSize(30);
     fill('lightblue');
     stroke(255);
     text(myText, width/1.4, height/3);
     pop();

}
