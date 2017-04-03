var myname;
var myage;
var meal1;
var meal2;
var box1;
var box2;
var result1;
var result2;
var B1;
var picture1;
var picture2;
var picture3;
var picture4;
var picture5;
var picture6;
var picture7;
var picture8;
var picture9;
var picture10;
var selectionBox;
var selectionBox2;

function preload()
{
  picture1 = loadImage('https://dl.dropboxusercontent.com/s/9tseka9l3xuijid/TxyaUR5nmEDmFgk_Su7ki_193.png');
  
// 
  picture2 = loadImage('https://dl.dropboxusercontent.com/s/ic7svx8hqkcmsnd/Screen%20Shot%202017-03-01%20at%201.09.51%20PM.png');
  picture3 = loadImage('https://dl.dropboxusercontent.com/s/hb8irlvv5cuouv6/Screen%20Shot%202017-03-01%20at%201.10.02%20PM.png');
  picture4 = loadImage('https://dl.dropboxusercontent.com/s/q92j7dzh13zyaak/Screen%20Shot%202017-03-03%20at%209.22.03%20AM.png');
  picture5 = loadImage('https://dl.dropboxusercontent.com/s/97rhpktqdvc6tl6/Screen%20Shot%202017-03-03%20at%209.27.04%20AM.png');
  picture6 = loadImage('https://dl.dropboxusercontent.com/s/n54y3y2lsm69jlp/Screen%20Shot%202017-03-03%20at%209.27.42%20AM.png');
  picture7 = loadImage('https://dl.dropboxusercontent.com/s/pj02fzbk23msx6s/Screen%20Shot%202017-03-03%20at%209.28.08%20AM.png');
  picture8 = loadImage('https://dl.dropboxusercontent.com/s/ru6z6fj0r3qq6of/Screen%20Shot%202017-03-03%20at%209.28.32%20AM.png');
  picture9 = loadImage('https://dl.dropboxusercontent.com/s/tdgnmc79vtwcjab/Screen%20Shot%202017-03-03%20at%209.28.50%20AM.png');
  picture10 = loadImage('https://dl.dropboxusercontent.com/s/te0qvk73v8wt7ux/Screen%20Shot%202017-03-03%20at%209.30.17%20AM.png');

//puzzle 2
  picture11=
 loadImage('https://dl.dropboxusercontent.com/s/wakan8aqzxvvjfp/Yellow_icon.svg.png');
}

function setup()
{
  //create a drawing service 500px wide, 500px tall
  createCanvas(2000,1000);
  
  myname = createInput();
  myname.position(100,70);
  
  myage = createInput();
  myage.position(100,100);
  
  meal1 = createInput();
  meal1.position(400,70);
  
  meal2 = createInput();
  meal2.position(400,100);

  box1 = createInput();
  box1.position (150,400);

  box2 = createInput();
  box2. position (150,423);
  
  box3 = createInput();
  box3. position (150,446);

// Battery charge 
 charge = createInput();
 charge.position (870,800);

 charge = createInput()
  
  A = 200
  B = 600;

// Bomb 

selectionBox = createSelect();
  selectionBox.option("α");
  selectionBox.option("ε");
  selectionBox.position(1050,400);
  selectionBox.size(50,10);

selectionBox2 = createSelect();
  selectionBox2.option("Φ");
  selectionBox2.option("Ψ");
  selectionBox2.option("Ξ");
selectionBox2.position(1150,400);
  selectionBox2.size(50,10);

selectionBox3 = createSelect();
  selectionBox3.option("δ");
  selectionBox3.option("ω");
selectionBox3.position(1250,400);
  selectionBox3.size(50,10);

selectionBox4 = createSelect();
  selectionBox4.option("η");
  selectionBox4.option("ξ");
selectionBox4.position(1350,400);
  selectionBox4.size(50,10);


  stateOfBox = 1;
}

function selectionBoxChangeEvent()
{
  selectionBoxValue = selectionBox.value(); 
  selectionBox2Value= selectionBox2.value();
  selectionBox3Value= selectionBox3.value();
  selectionBox4Value= selectionBox4.value();
}

function draw()
{
  //draw circle in centre of sketch
  background(255,255,255);
  labels();
  showResult();

  //black rectangle
  fill(0,0,0);
  rect(200,600,70,200);
    
  fill(150,102,7);
  rect(130,570,70,260);
  rect(270,570,70,260);
  rect(60,600,70,280);
  rect(60,430,70,190);
  rect(130,450,70,190);

  // mid 
  rect(200,390,70,210);
  rect(200,800,70,90);

  // right small 
  rect(270,430,70,150);

  // switch//picture puzzle 
  fill(0,0,0);
  rect(500,200,390,390);

 image(picture2,500,200,130,130);
 image(picture3,500,330,130,130);
 image(picture4,500,600,130,130);
 image(picture5,630,200,130,130);
 image(picture6,630,330,130,130);
 image(picture7,630,460,130,130);
 image(picture8,760,200,130,130);
 image(picture9,760,330,130,130);
 image(picture10,760,460,130,130);

 

fill(255,255,255);
ellipse(230,700,50,50);
fill(0,0,0);
text("･ω･",220,700);


  if (stateOfBox == 1)
  {
    A = 200;
    B = 600;
    fill(110,82,0);
    rect(A,B,70,200);
  }
  else if (stateOfBox == 2)
  {
    // draw box
    fill(110,82,0);
    rect(A,B,70,200);
    B = B - 5;
    if (B < 300)
    {
      A = 300;
      stateOfBox = 3;
    }
  }
  else if (stateOfBox == 3)
  {
    A = 200;
    B = 300;
    fill(110,82,0);
    rect(A,B,70,200); 
  }
  if (box1.value() == "Ace" && box2.value() == "Delta" && box3.value() == "Charley" && mouseX > 300 && mouseX < 300+100 && mouseY > 315 && mouseY < 315+70)
  {
    fill(37,202,0);
    rect(300,315,100,70);
    if (mouseIsPressed == true)
    {
      fill(255,50,50);
      rect(50,150,100,50);
      stateOfBox = 2;
    }
  }

}

function puzzle3()
{
  circle1D = sqrt((mouseX - 500)*(mouseX - 500)+(mouseY - 390)*(mouseY - 390));
  {
}
}



function labels()
{
  fill(0,0,0);
  text("Name:",40,10);
  text("Age:",40,40);
  
  text("Meal 1 calories:",300,10);
  text("Meal 2 calories:",300,40);

  text("Data:",100,335);
  text("Data2:",100,360);
  text("Data3:",100,385);
}




function showResult()
{
  fill(0,0,0);
  text("Your name is: "+myname.value(),40,100);
  text("Your age is: "+myage.value(),40,130);
  text("Hello "+myname.value()+" are you "+myage.value()+" years old?",40,160);
  
  result1 = meal1.value()+meal2.value();
  result2 = float(meal1.value()) + int(meal2.value());
  
  text("You have consumed a total of "+result1,300,130);
  text("You have consumed a total of "+result2,300,160);



  fill(239,0,0);
  rect(300,315,100,70);
  fill(255,255,255);
  text("Locked",330,353);

  if (mouseX > 300 && mouseX < 300+100 && mouseY > 315 && mouseY < 315+70)
  {
    fill(184,0,0);
    rect(300,315,100,70);
    fill(193,193,193);
    text("Locked",330,353)
  }

  if(box1.value() == "Ace" && box2.value() == "Delta" && box3.value() == "Charley")
  {
  fill(46,255,0);
  rect(300,315,100,70);
  fill(0,0,0);
  text("Unlocked",325,353);
  }

  if(box1.value() == "Ace" && box2.value() == "Delta" && box3.value() == "Charley" && mouseX > 300 && mouseX < 300+100 && mouseY > 315 && mouseY < 315+70)
  {
    fill(37,202,0);
    rect(300,315,100,70);
    fill(0,0,0);
    text("Unlocked",325,353);
  }
  
  if(box1.value() == "Ace")
  {
    text("",290,335)
  }
  if(box2.value()== "Delta")
  {
    text("",290,360)
  }
  if(box3.value()== "Charley")
    text("", 290,385)



//puzzle 2 (face)
  fill(255,255,255);
  ellipse(700,670,100,100);
  fill(0,0,0);
  text("○＾▽＾○",675,670);
  text("click me!",675,700);

  if(mouseX > 650 && mouseX < 650+100 && mouseY > 620 && mouseY < 620+100 && mouseIsPressed == true)
 {
fill(198, 198, 198);
image(picture1,650,620,100,100);
 }

 
//puzzle bomb
  fill(0,0,0);
  rect(1000,200,700,390);
  fill(193,193,193);
  rect(1040,350,50,90);
  fill(193,193,193);
  rect(1140,350,50,90);
  fill(193,193,193);
  rect(1240,350,50,90);
  fill(193,193,193);
  rect(1340,350,50,90);


  fill(255,255,255);
  text("Gas level",1430,250);
  fill(255,255,255);
  text("Oxygen level",1500,250);
  fill(255,255,255);
  text("Methan level",1600,250);
  fill(255,255,255);
  text("50%-",1400,345);
  fill(255,255,255);
  text("100%-",1390,265);
  
  
  
// bomb 
  
  if(selectionBox.value() == "ε")
  {
    fill(88,214,0);
    rect(1040,350,50,90);
  }
  if(selectionBox2.value() == "Ξ")
  {
  fill(88,214,0);
  rect(1140,350,50,90);
  }
  if(selectionBox3.value() == "ω")
  {
  fill(88,214,0);
  rect(1240,350,50,90);
  }
  if(selectionBox4.value() == "ξ")
  {
 fill(88,214,0);
 rect(1340,350,50,90);
  }

  fill(255,255,255);
  rect(1435,420,265,170);

  if(selectionBox.value()== "ε" && selectionBox2.value() == "Ξ" && selectionBox3.value() == "ω" && 
     selectionBox4.value() == "ξ" );
  {
    fill(105,255,0)
    rect(1435,420,50,160)
  
  }


}


 