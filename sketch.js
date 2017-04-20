function preload() 
{
  Couch = loadImage ('https://dl.dropboxusercontent.com/s/oprlxxv3tkhbs0f/Couch.png')
  Spark = loadImage('https://dl.dropboxusercontent.com/s/7hjyj2xnovqdt5v/Spark.png')
  Bomb = loadImage('https://dl.dropboxusercontent.com/s/k6m1d32oujox3kx/Bomb.png')
  Explosion = loadImage('https://dl.dropboxusercontent.com/s/tiktdzd3oqmcpl2/Explosion.png') 
}


function setup()
{
  createCanvas(1400,700);
  
  Number1 = createSlider(0,9,0);
  Number1.position(50,400);
  
  Number2 = createSlider(0,9,0);
  Number2.position(50,450);
  
  Number3 = createSlider(0,9,0);
  Number3.position(50,500);
  
  A = 1;
  B = 1;
  C = 1;
  
  HALTA = false;
  HALTB = false;
  
  HALTC = false;
  HALTD = false;
  
  HALTE = false;
  HALTF = false;
  
  D = 0;
  E = 0;
  F = 0;
  
  DOORLEFT = false;
    
  PIANOC = 0;
  PIANOD = 0;
  PIANOE = 0;
  PIANOF = 0;
  PIANOG = 0;
  PIANOA = 0;
  PIANOB = 0;
  
  PIANOMOMENT = 1;
  
  LOCKC = false;
  LOCKD = false;
  LOCKE = false;
  LOCKF = false;
  LOCKG = false;
  LOCKA = false;
  LOCKB = false;
  
  WORD = "";
  
  SECRETDOOR = 1;
  
  DOORA = 550;
  DOORB = 400;
  
  BOX = 0;
  
  AAA = 450;
  BBB = 150;
  
  CCC = 500;
  DDD = 150;
  
  EEE = 550;
  FFF = 150;
  
  GGG = 550;
  HHH = 200;
  
  III = 550;
  JJJ = 250;
  
  KKK = 500;
  LLL = 250;
    
  MMM = 450;
  NNN = 250;
  
  OOO = 450;
  PPP = 200;
  
  FAILCOUNT = 0;
  
  R = 0;
  G = 0;
  Bl = 0;
  
  LOCKRed = false;
  LOCKGreen = false;
  LOCKBlue = false;
  
  FAILLOCK = false;
  SUCCESS = 0;
  
  K = 200;
  L = 50;
  M = 50;
  Growth = 0;
  UP = 0;
}

function draw()
{
  cursor(ARROW);
  
  background(0,252,255);
  
  Combination();
  
  Slider();
  
  Piano();
  
  Painting();
  
  Pin();
  
  Fail();
  
  Stretchbox();
}

function Combination()
{
  //Input 1
  //Toggle Up 1

  fill(150,150,150);
  rect(75,50,25,25);

  if (mouseX > 75 && mouseX < 75+25 && mouseY > 50 && mouseY < 50+25)
  {
    fill(200,200,200);
    rect(75,50,25,25);

    if (mouseIsPressed == true && HALTA == false)
    {
      fill(250,250,250);
      rect(75,50,25,25);
      HALTA = true;

      A = A + 1;
    }
  }

  //Number 1

  fill(255,0,0);
  rect(62.5,100,50,50);

  fill(0,0,0);
  text(+A,75+10,130);

  //Toggle Down 1

  fill(150,150,150);
  rect(75,175,25,25);

  if (mouseX > 75 && mouseX < 75+25 && mouseY > 175 && mouseY < 175+25)
  {
    fill(200,200,200);
    rect(75,175,25,25);

    if (mouseIsPressed == true && HALTB == false)
    {
      fill(250,250,250);
      rect(75,175,25,25);
      HALTB = true;

      A = A - 1;
    }
  }

  if (A > 9)
  {
    A = 0;
  }

  if (A < 0)
  {
    A = 9;
  }

  //Input 2
  //Toggle Up 2

  fill(150,150,150);
  rect(75+100,50,25,25);

  if (mouseX > 75+100 && mouseX < 75+125 && mouseY > 50 && mouseY < 50+25)
  {
    fill(200,200,200);
    rect(75+100,50,25,25);

    if (mouseIsPressed == true && HALTC == false)
    {
      fill(250,250,250);
      rect(75+100,50,25,25);
      HALTC = true;

      B = B + 1;
    }
  }

  //Number 2

  fill(0,255,0);
  rect(62.5+100,100,50,50);

  fill(0,0,0);
  text(+B,75+10+100,130);

  //Toggle Down 2

  fill(150,150,150);
  rect(75+100,175,25,25);

  if (mouseX > 75+100 && mouseX < 75+125 && mouseY > 175 && mouseY < 175+25)
  {
    fill(200,200,200);
    rect(75+100,175,25,25);

    if (mouseIsPressed == true && HALTD == false)
    {
      fill(250,250,250);
      rect(75+100,175,25,25);
      HALTD = true;

      B = B - 1;
    }
  }

  if (B > 9)
  {
    B = 0;
  }

  if (B < 0)
  {
    B = 9;
  }

  //Input 3
  //Toggle Up 3

  fill(150,150,150);
  rect(75+200,50,25,25);

  if (mouseX > 75+200 && mouseX < 75+225 && mouseY > 50 && mouseY < 50+25)
  {
    fill(200,200,200);
    rect(75+200,50,25,25);

    if (mouseIsPressed == true && HALTE == false)
    {
      fill(250,250,250);
      rect(75+200,50,25,25);
      HALTE = true;

      C = C + 1;
    }
  }

  //Number 3

  fill(0,0,255);
  rect(62.5+200,100,50,50);

  fill(0,0,0);
  text(+C,75+10+200,130);

  //Toggle Down 3

  fill(150,150,150);
  rect(75+200,175,25,25);

  if (mouseX > 75+200 && mouseX < 75+225 && mouseY > 175 && mouseY < 175+25)
  {
    fill(200,200,200);
    rect(75+200,175,25,25);

    if (mouseIsPressed == true && HALTF == false)
    {
      fill(250,250,250);
      rect(75+200,175,25,25);
      HALTF = true;

      C = C - 1;
    }
  }

  if (C > 9)
  {
    C = 0;
  }

  if (C < 0)
  {
    C = 9;
  }

  if (A == 5 && B == 8 && C == 6)
  {
    fill(0,0,0);
    text("Unlocked",62.5+100,250);
  }
  
  fill(0,0,0);
  text("5 - 8 - 6", 10,130);
}

function Slider()
{
  //SLIDER PUZZLE

  fill(0,0,0);

  text(+Number1.value(),100,300);

  text(+Number2.value(),100,360);

  text(+Number3.value(),100,410);

  fill(255,255,255);
  rect(250,362.5,100,25);
  fill(0,0,0);
  text("Enter",285,380);

  if (mouseX > 250 && mouseX < 250+100 && mouseY > 362.5 && mouseY < 362.5+25)
  {
    fill(0,0,255);
    rect(250,362.5,100,25);
    fill(0,0,0);
    text("Enter",285,380);

    if (mouseIsPressed == true)
    {
      fill(255,0,0);
      rect(250,362.5,100,25);
      fill(0,0,0);
      text("Enter",285,380);

      if (Number1.value() == 3 && Number2.value() == 1 && Number3.value() == 4)
      {
        fill(0,255,0);
        rect(250,362.5,100,25);
        fill(0,0,0);
        text("Enter",285,380);
      }
    }
  }
  
  fill(0,0,0);
  text("3 - 1 - 4", 275,350);
  
}

function Piano()
{
  {
    
//White Keys
  fill(255,255,255);
  //Key C
    rect(100,500,30,100);
  
  if (mouseX >= 100 && mouseX <= 120 && mouseY >= 500 && mouseY <= 600 || mouseX >= 120 && mouseX < 130 && mouseY > 575 && mouseY < 600 )
  {
    fill(200,200,200);
    rect(100,500,30,100);
    fill(255,255,255);
    
    if (mouseIsPressed == true && LOCKC == false)
    {
      fill(150,150,150);
      rect(100,500,30,100);
      fill(255,255,255);
      
      PIANOC = PIANOC + 1;
      WORD = WORD + "C";
      
      LOCKC = true;
    }
  }
        
  //Key D
    rect(100+30,500,30,100);
  
  if (mouseX >= 130 && mouseX <= 160 && mouseY > 575 && mouseY < 600 || mouseX >= 140 && mouseX <= 150 && mouseY > 500 && mouseY < 575)
  {
    fill(200,200,200);
    rect(100+30,500,30,100);
    fill(255,255,255);
    
    if (mouseIsPressed == true && LOCKD == false)
    {
      fill(150,150,150);
      rect(100+30,500,30,100);
      fill(255,255,255);
      
      PIANOD = PIANOD + 1;
      WORD = WORD + "D";

      LOCKD = true;
    }
  }
  
  //Key E
    rect(100+60,500,30,100);
  
  if (mouseX > 100+60 && mouseX < 190 && mouseY > 575 && mouseY < 600 || mouseX > 170 && mouseX < 190 && mouseY > 500 && mouseY < 600)
  {
    fill(200,200,200);
    rect(100+60,500,30,100);
    fill(255,255,255);
    
    if (mouseIsPressed == true && LOCKE == false)
    {

      fill(150,150,150);
      rect(100+60,500,30,100);
      fill(255,255,255);
      
      PIANOE = PIANOE + 1;
      WORD = WORD + "E";

      LOCKE = true;
    }
  }
  
  //Key F
    rect(100+90,500,30,100);
  
  if (mouseX > 100+90 && mouseX < 220 && mouseY > 575 && mouseY < 600 || mouseX > 190 && mouseX < 210 && mouseY > 500 && mouseY < 575)
  {
    fill(200,200,200);
    rect(100+90,500,30,100);
    fill(255,255,255);
    
    if (mouseIsPressed == true && LOCKF == false)
    {
      fill(150,150,150);
      rect(100+90,500,30,100);
      fill(255,255,255);

      PIANOF = PIANOF + 1;
      WORD = WORD + "F";

      LOCKF = true;
    }
  }
  
  //Key G
    rect(100+120,500,30,100);
  
  if (mouseX > 100+120 && mouseX < 250 && mouseY > 575 && mouseY < 600 || mouseX > 230 && mouseX < 240 && mouseY > 500 && mouseY < 575)
  {
    fill(200,200,200);
    rect(100+120,500,30,100);
    fill(255,255,255);
    
    if (mouseIsPressed == true && LOCKG == false)
    {
      fill(150,150,150);
      rect(100+120,500,30,100);
      fill(255,255,255);
      
      PIANOG = PIANOG + 1;
      WORD = WORD + "G";

      LOCKG = true;
    }
  }
  
  //Key A
    rect(100+150,500,30,100);
  
  if (mouseX > 100+150 && mouseX < 280 && mouseY > 575 && mouseY < 600 || mouseX > 260 && mouseX < 270 && mouseY > 500 && mouseY < 600)
  {
    fill(200,200,200);
    rect(100+150,500,30,100);
    fill(255,255,255);
    
    if (mouseIsPressed == true && LOCKA == false)
    {
      fill(150,150,150);
      rect(100+150,500,30,100);
      fill(255,255,255);
      
      PIANOA = PIANOA+ 1;
      WORD = WORD + "A";
      
      LOCKA = true;
    }
  }
  
  //Key B
    rect(100+180,500,30,100);
  
  if (mouseX > 100+180 && mouseX < 310 && mouseY > 575 && mouseY < 600 || mouseX > 290 && mouseX < 310 && mouseY > 500 && mouseY < 600)
  {
    fill(200,200,200);
    rect(100+180,500,30,100);
    fill(255,255,255);
    
    if (mouseIsPressed == true && LOCKB == false)
    {
      fill(150,150,150);
      rect(100+180,500,30,100);
      fill(255,255,255);
      
      PIANOB = PIANOB + 1;
      WORD = WORD + "B";

      LOCKB = true;
    }
  }
    
    fill(0,0,0);
    text(WORD,380,575);
  
//Black Keys
  fill(0,0,0);
  //Key C# / Db
    rect(120,500,20,75);
  
  if (mouseX > 120 && mouseX < 140 && mouseY > 500 && mouseY < 575)
  {
    fill(50,50,50);
    rect(120,500,20,75);
    fill(0,0,0);
    
    if (mouseIsPressed == true)
    {
      fill(100,100,100);
      rect(120,500,20,75);
      fill(0,0,0);
    }
  }
  
  //Key D# / Eb
    rect(120+30,500,20,75);
  
  if (mouseX > 150 && mouseX < 170 && mouseY > 500 && mouseY < 575)
  {
    fill(50,50,50);
    rect(120+30,500,20,75);
    fill(0,0,0);

    if (mouseIsPressed == true)
    {
      fill(100,100,100);
      rect(120+30,500,20,75);
      fill(0,0,0);
    }
  }
  
  //Key F# / Gb
    rect(120+90,500,20,75);
  
  if (mouseX > 210 && mouseX < 230 && mouseY > 500 && mouseY < 575)
  {
    fill(50,50,50);
    rect(120+90,500,20,75);
    fill(0,0,0);

    if (mouseIsPressed == true)
    {
      fill(100,100,100);
      rect(120+90,500,20,75);
      fill(0,0,0);
    }
  }
  
  //Key G# / Ab
    rect(120+120,500,20,75);
  
  if (mouseX > 240 && mouseX < 260 && mouseY > 500 && mouseY < 575)
  {
    fill(50,50,50);
    rect(120+120,500,20,75);
    fill(0,0,0);

    if (mouseIsPressed == true)
    {
      fill(100,100,100);
      rect(120+120,500,20,75);
      fill(0,0,0);
    }
  }
  
  //Key A# / Bb
    rect(120+150,500,20,75);
  
  if (mouseX > 270 && mouseX < 290 && mouseY > 500 && mouseY < 575)
  {
    fill(50,50,50);
    rect(120+150,500,20,75);
    fill(0,0,0);

    if (mouseIsPressed == true)
    {
      fill(100,100,100);
      rect(120+150,500,20,75);
      fill(0,0,0);
    }
  }

  text("C",112.5,592.5);
  text("D",112.5+30,592.5);
  text("E",112.5+60,592.5);
  text("F",112.5+90,592.5);
  text("G",112.5+120,592.5);
  text("A",112.5+150,592.5);
  text("B",112.5+180,592.5);
  
  }
  
  fill(255,255,255);
  rect(350,500,100,25);
  fill(0,0,0);
  text("Submit",380,518);
  
  if(mouseX > 350 && mouseX < 350+100 && mouseY > 500 && mouseY < 525)
  {
    fill(225,225,225);
    rect(350,500,100,25);
    fill(0,0,0);
    text("Submit",380,518);
    
    if(mouseIsPressed == true)
    {
      fill(200,200,200);
      rect(350,500,100,25);
      fill(0,0,0);
      text("Submit",380,518);
      
      if (WORD == "FACE")
      {
        SECRETDOOR = 2;
      }
      
      else if(WORD != "FACE")
      {
        fill(0,0,0);
        WORD = "";
      }
    }
  }
  
  text("Find my FACE!",365,550);
  
  fill(143,102,12);
  rect(DOORA,DOORB,50,100);
  
  if (SECRETDOOR == 2)
  {
    fill(50,48,43);
    rect(550,400,50,100);
    fill(143,102,12);
    rect(DOORA,DOORB,50,100);
    DOORA = DOORA + 2;
  }
  
  if (DOORA > 600)
  {
    SECRETDOOR = 3;
  }
  
  if (SECRETDOOR == 3)
  {
    fill(50,48,43);
    rect(550,400,50,100);
    DOORA = 600;
    DOORB = 400;
    fill(143,102,12);
    rect(DOORA,DOORB,50,100);
    
    if (mouseX > 550 && mouseX < 600 && mouseY > 400 && mouseY < 500 && mouseIsPressed == true)
    {
      text("B00", 550,350)
    }
  }

}

function Painting()
{

  cursor(ARROW);
  
  fill(255,255,255);
  rect(475,100,100,25);
  fill(255,0,0);
  rect(AAA,BBB,50,50);
  fill(226,255,0);
  rect(CCC,DDD,50,50);
  fill(255,159,0);
  rect(EEE,FFF,50,50);
  fill(66,255,0);
  rect(GGG,HHH,50,50);
  fill(3,155,255);
  rect(III,JJJ,50,50);
  fill(3,79,255);
  rect(KKK,LLL,50,50);
  fill(121,3,255);
  rect(MMM,NNN,50,50);
  fill(255,3,255);
  rect(OOO,PPP,50,50);

  if (mouseX > 475 && mouseX < 475+100 && mouseY > 100 && mouseY < 100+25 && mouseIsPressed == true)
  {
    BOX = 1;
  }

  if (BOX == 1)
  {
    AAA = AAA + 1;
    BBB = 150;
    fill(255,0,0);
    rect(AAA,BBB,50,50);

    CCC = CCC + 1;
    DDD = 150;
    fill(226,255,0);
    rect(CCC,DDD,50,50);
    
    EEE = 550;
    FFF = FFF + 1;
    fill(255,159,0);
    rect(EEE,FFF,50,50);
    
    GGG = 550;
    HHH = HHH + 1;
    fill(66,255,0);
    rect(GGG,HHH,50,50);
    
    III = III - 1;
    JJJ = 250;
    fill(3,155,255);
    rect(III,JJJ,50,50);
    
    KKK = KKK - 1;
    LLL = 250;
    fill(3,79,255);
    rect(KKK,LLL,50,50);
    
    MMM = 450;
    NNN = NNN - 1;
    fill(121,3,255);
    rect(MMM,NNN,50,50);
    
    OOO = 450;
    PPP = PPP - 1;
    fill(255,3,255);
    rect(OOO,PPP,50,50);
  }

  if (AAA > 500 && CCC > 550 && FFF > 200 && HHH > 250 && III < 500 && KKK < 450 && NNN < 200 && PPP < 150)
  {
    BOX = 2;
  }

  if (BOX == 2)
  {
    AAA = AAA + 1;
    BBB = 150;
    fill(255,0,0);
    rect(AAA,BBB,50,50);

    CCC = 550;
    DDD = DDD + 1;
    fill(226,255,0);
    rect(CCC,DDD,50,50);
    
    EEE = 550;
    FFF = FFF + 1;
    fill(255,159,0);
    rect(EEE,FFF,50,50);

    GGG = GGG - 1;
    HHH = 250;
    fill(66,255,0);
    rect(GGG,HHH,50,50);

    III = III - 1;
    JJJ = 250;
    fill(3,155,255);
    rect(III,JJJ,50,50);

    KKK = 450;
    LLL = LLL - 1;
    fill(3,79,255);
    rect(KKK,LLL,50,50);

    MMM = 450;
    NNN = NNN - 1;
    fill(121,3,255);
    rect(MMM,NNN,50,50);

    OOO = OOO + 1;
    PPP = 150;
    fill(255,3,255);
    rect(OOO,PPP,50,50);
  }

  if (AAA > 550 && DDD > 200 && FFF > 250 && GGG < 500 && III < 450 && LLL < 200 && NNN < 150 && OOO > 400)
  {
    BOX = 3;
  }

  if (BOX == 3)
  {
    AAA = 550;
    BBB = BBB + 1;
    fill(255,0,0);
    rect(AAA,BBB,50,50);

    CCC = 550;
    DDD = DDD + 1;
    fill(226,255,0);
    rect(CCC,DDD,50,50);

    EEE = EEE - 1;
    FFF = 250;
    fill(255,159,0);
    rect(EEE,FFF,50,50);

    GGG = GGG - 1;
    HHH = 250;
    fill(66,255,0);
    rect(GGG,HHH,50,50);

    III = 450;
    JJJ = JJJ - 1;
    fill(3,155,255);
    rect(III,JJJ,50,50);

    KKK = 450;
    LLL = LLL - 1;
    fill(3,79,255);
    rect(KKK,LLL,50,50);

    MMM = MMM + 1;
    NNN = 150;
    fill(121,3,255);
    rect(MMM,NNN,50,50);

    OOO = OOO + 1;
    PPP = 150;
    fill(255,3,255);
    rect(OOO,PPP,50,50);
  }

  if (BBB > 200 && DDD > 250 && FFF < 500 && GGG < 550 && JJJ < 200 && LLL < 150 && MMM > 500 && OOO > 550)
  {
    BOX = 4;
  }

  if (BOX == 4)
  {
    AAA = 550;
    BBB = BBB + 1;
    fill(255,0,0);
    rect(AAA,BBB,50,50);

    CCC = CCC - 1;
    DDD = 250;
    fill(226,255,0);
    rect(CCC,DDD,50,50);

    EEE = EEE - 1;
    FFF = 250;
    fill(255,159,0);
    rect(EEE,FFF,50,50);

    GGG = 450;
    HHH = HHH - 1;
    fill(66,255,0);
    rect(GGG,HHH,50,50);

    III = 450;
    JJJ = JJJ - 1;
    fill(3,155,255);
    rect(III,JJJ,50,50);

    KKK = KKK + 1;
    LLL = 150;
    fill(3,79,255);
    rect(KKK,LLL,50,50);

    MMM = MMM + 1;
    NNN = 150;
    fill(121,3,255);
    rect(MMM,NNN,50,50);

    OOO = 550;
    PPP = PPP + 1;
    fill(255,3,255);
    rect(OOO,PPP,50,50);
  }
  
  if (BBB > 250 && CCC < 500 && EEE < 450 && HHH < 200 && JJJ < 150 && KKK > 500 && MMM > 550 && PPP > 200)
  {
    BOX = 5;
  }

  if (BOX == 5)
  {
    AAA = AAA - 1;
    BBB = 250;
    fill(255,0,0);
    rect(AAA,BBB,50,50);

    CCC = CCC - 1;
    DDD = 250;
    fill(226,255,0);
    rect(CCC,DDD,50,50);

    EEE = 450;
    FFF = FFF - 1;
    fill(255,159,0);
    rect(EEE,FFF,50,50);

    GGG = 450;
    HHH = HHH - 1;
    fill(66,255,0);
    rect(GGG,HHH,50,50);

    III = III + 1;
    JJJ = 150;
    fill(3,155,255);
    rect(III,JJJ,50,50);

    KKK = KKK + 1;
    LLL = 150;
    fill(3,79,255);
    rect(KKK,LLL,50,50);

    MMM = 550;
    NNN = NNN + 1;
    fill(121,3,255);
    rect(MMM,NNN,50,50);

    OOO = 550;
    PPP = PPP + 1;
    fill(255,3,255);
    rect(OOO,PPP,50,50);
  }
  
  if (AAA < 500 && CCC < 450 && FFF < 200 && HHH < 150 && III > 500 && KKK > 550 && NNN > 200 && PPP > 250)
  {
    BOX = 6;
  }

  if (BOX == 6)
  {
    AAA = AAA - 1;
    BBB = 250;
    fill(255,0,0);
    rect(AAA,BBB,50,50);

    CCC = 450;
    DDD = DDD - 1;
    fill(226,255,0);
    rect(CCC,DDD,50,50);

    EEE = 450;
    FFF = FFF - 1;
    fill(255,159,0);
    rect(EEE,FFF,50,50);

    GGG = GGG + 1;
    HHH = 150;
    fill(66,255,0);
    rect(GGG,HHH,50,50);

    III = III + 1;
    JJJ = 150;
    fill(3,155,255);
    rect(III,JJJ,50,50);

    KKK = 550;
    LLL = LLL + 1;
    fill(3,79,255);
    rect(KKK,LLL,50,50);

    MMM = 550;
    NNN = NNN + 1;
    fill(121,3,255);
    rect(MMM,NNN,50,50);

    OOO = OOO - 1;
    PPP = 250;
    fill(255,3,255);
    rect(OOO,PPP,50,50);
  }
  
  if (AAA < 450 && DDD < 200 && FFF < 150 && GGG > 500 && III > 550 && LLL > 200 && NNN > 250 && OOO < 500)
  {
    BOX = 7;
  }

  if (BOX == 7)
  {
    AAA = 450;
    BBB = BBB - 1;
    fill(255,0,0);
    rect(AAA,BBB,50,50);

    CCC = 450;
    DDD = DDD - 1;
    fill(226,255,0);
    rect(CCC,DDD,50,50);

    EEE = EEE + 1;
    FFF = 150;
    fill(255,159,0);
    rect(EEE,FFF,50,50);

    GGG = GGG + 1;
    HHH = 150;
    fill(66,255,0);
    rect(GGG,HHH,50,50);

    III = 550;
    JJJ = JJJ + 1;
    fill(3,155,255);
    rect(III,JJJ,50,50);

    KKK = 550;
    LLL = LLL + 1;
    fill(3,79,255);
    rect(KKK,LLL,50,50);

    MMM = MMM - 1;
    NNN = 250;
    fill(121,3,255);
    rect(MMM,NNN,50,50);

    OOO = OOO - 1;
    PPP = 250;
    fill(255,3,255);
    rect(OOO,PPP,50,50);
  }
  
  if (BBB < 200 && DDD < 150 && EEE > 500 && GGG > 550 && JJJ > 200 && LLL > 250 && MMM < 500 && OOO < 550)
  {
    BOX = 8;
  }

  if (BOX == 8)
  {
    AAA = 450;
    BBB = BBB - 1;
    fill(255,0,0);
    rect(AAA,BBB,50,50);

    CCC = CCC + 1;
    DDD = 150;
    fill(226,255,0);
    rect(CCC,DDD,50,50);

    EEE = EEE + 1;
    FFF = 150;
    fill(255,159,0);
    rect(EEE,FFF,50,50);

    GGG = 550;
    HHH = HHH + 1;
    fill(66,255,0);
    rect(GGG,HHH,50,50);

    III = 550;
    JJJ = JJJ + 1;
    fill(3,155,255);
    rect(III,JJJ,50,50);

    KKK = KKK - 1;
    LLL = 250;
    fill(3,79,255);
    rect(KKK,LLL,50,50);

    MMM = MMM - 1;
    NNN = 250;
    fill(121,3,255);
    rect(MMM,NNN,50,50);

    OOO = 450;
    PPP = PPP - 1;
    fill(255,3,255);
    rect(OOO,PPP,50,50);
  }

  if (BBB < 150 && CCC > 500 && EEE > 550 && HHH > 200 && JJJ > 250 && KKK < 500 && MMM < 550 && PPP < 200)
  {
    BOX = 1
  }
  
  if (mouseX > 500 && mouseX < 550 && mouseY > 200 && mouseY < 250)
  {
    if (mouseIsPressed)
    {
      BOX = 9
    }
    cursor(HAND);
  }
  
  if (BOX == 9)
  {
    AAA = 450;
    BBB = 150;

    CCC = 500;
    DDD = 150;

    EEE = 550;
    FFF = 150;

    GGG = 550;
    HHH = 200;

    III = 550;
    JJJ = 250;

    KKK = 500;
    LLL = 250;

    MMM = 450;
    NNN = 250;

    OOO = 450;
    PPP = 200;
    
    fill(255,0,0);
    rect(AAA,BBB,50,50);
    fill(226,255,0);
    rect(CCC,DDD,50,50);
    fill(255,159,0);
    rect(EEE,FFF,50,50);
    fill(66,255,0);
    rect(GGG,HHH,50,50);
    fill(3,155,255);
    rect(III,JJJ,50,50);
    fill(3,79,255);
    rect(KKK,LLL,50,50);
    fill(121,3,255);
    rect(MMM,NNN,50,50);
    fill(255,3,255);
    rect(OOO,PPP,50,50);
    
    fill(0,0,0)
    rect(500,200,50,50);
  }
  
  fill(0,0,0);
  text("April 18",500,600);

}

function Stretchbox()
{
  cursor(ARROW);
  fill(255,255,255);
  //Going Down

  rect(1200,200,50,L);

  if (mouseX > 1200 && mouseX < 1200+50 && mouseY > 200 && mouseY < 200+50)
  {
    cursor(HAND);

    if (mouseIsPressed == true)
    {
      Growth = 1;
    }
  }

  if (Growth == 1)
  {
    L = L + 1;
  }

  if (L > 100)
  {
    Growth = 2
  }

  if (Growth == 2)
  {
    L = 100;
    rect(1200,200,50,L);
  }

  //Going Up
  //K,200
  //M,50
  rect(1300,K,50,M)

  if (mouseX > 1300 && mouseX < 1300+50 && mouseY > 200 && mouseY < 200+50)
  {
    cursor(HAND);

    if (mouseIsPressed == true)
    {
      UP = 1;
    }
  }

  if (UP == 1)
  {
    K = K - 1;
    M = M + 1;

    if (M > 100 && K < 100)
    {
      UP = 2;
    }
  }

  if (UP == 2)
  {
    K = 100;
    M = 150;
    rect(1300,K,50,M);
  }

}

function Pin()
{
  image(Couch,800,150,300,200)

  if (mouseX > 800 && mouseX < 1100 && mouseY > 150 && mouseY < 350)
  {
    cursor(HAND);

    if (mouseIsPressed == true)
    {
      text("hello", 800,150);
    }
  }
}

function Fail()
{
  fill(255,0,0);
  rect(800,400,50,50);
  
  image(Bomb,900,600,45,50);
  
  if (mouseX > 800 && mouseX < 800+50 && mouseY > 400 && mouseY < 400+50)
  {
    fill(200,0,0);
    rect(800,400,50,50)
    fill(255,255,255);
    
    if (mouseIsPressed == true && LOCKRed == false)
    {
      fill(150,0,0);
      rect(800,400,50,50)
      
      R = R + 1;
      LOCKRed = true;
    }
  }
  
  fill(0,255,0);
  rect(900,400,50,50);
  
  if (mouseX > 900 && mouseX < 900+50 && mouseY > 400 && mouseY < 400+50)
  {
    fill(0,200,0);
    rect(900,400,50,50)

    if (mouseIsPressed == true && LOCKGreen == false)
    {
      fill(0,150,0);
      rect(900,400,50,50)

      G = G + 1;
      LOCKGreen = true;
    }
  }
  
  fill(0,0,255);
  rect(1000,400,50,50);
  
  if (mouseX > 1000 && mouseX < 1000+50 && mouseY > 400 && mouseY < 400+50)
  {
    fill(0,0,200);
    rect(1000,400,50,50)

    if (mouseIsPressed == true && LOCKBlue == false)
    {
      fill(0,0,150);
      rect(1000,400,50,50)

      Bl = Bl + 1;
      LOCKBlue = true;
    }
  }
  
  fill(255,255,255);
  rect(875,500,100,25);
  
  if (mouseX > 875 && mouseX < 875+100 && mouseY > 500 && mouseY < 500+25)
  {
    fill(200,200,200);
    rect(875,500,100,25)

    if (mouseIsPressed == true && FAILLOCK == false)
    {
      fill(150,150,150);
      rect(875,500,100,25);
      
      if (R == 1 && G == 2 && Bl == 3)
      {
        fill(0,0,0);

        SUCCESS = 1;
      }
      
      else if (R != 1 || G != 2 || Bl != 3)
      {
        image(Spark,925,583,40,40);
        fill(0,0,0);
        
        R = 0;
        G = 0;
        Bl = 0;
        
        FAILCOUNT = FAILCOUNT + 1;
        
        FAILLOCK = true;
      }
    }
  }
  
  if (FAILCOUNT == 3)
  {
    fill(0,0,0);
    rect(0,0,1400,700);
    fill(255,255,255);
    text("YOU LOSE",900,500);
    
    image(Bomb,900,600,45,50);
    image(Explosion,880,580,100,100)
  }
  
  if (SUCCESS == 1)
  {
    fill(0,0,0);
    text("HAPPY BIRTHDAY!",875,600);
  }
}

function mouseReleased()
{
  if (HALTA)
  {
    HALTA = false; 
  }
  
  if (HALTB)
  {
    HALTB = false; 
  }
  
  if (HALTC)
  {
    HALTC = false; 
  }

  if (HALTD)
  {
    HALTD = false; 
  }
  
  if (HALTE)
  {
    HALTE = false; 
  }

  if (HALTF)
  {
    HALTF = false; 
  }
  
  if (LOCKC)
  {
    LOCKC = false; 
  }
  
  if (LOCKD)
  {
    LOCKD = false; 
  }
  
  if (LOCKE)
  {
    LOCKE = false; 
  }

  if (LOCKF)
  {
    LOCKF = false; 
  }
  
  if (LOCKG)
  {
    LOCKG = false; 
  }

  if (LOCKA)
  {
    LOCKA = false; 
  }
  
  if (LOCKB)
  {
    LOCKB = false; 
  }
  
  if (LOCKRed)
  {
    LOCKRed = false;
  }
  
  if (LOCKGreen)
  {
    LOCKGreen = false;
  }
  
  if (LOCKBlue)
  {
    LOCKBlue = false;
  }
  
  if (FAILLOCK)
  {
    FAILLOCK = false;
  }
  
}

function Inventory()

{
  strokeWeight(5);
  fill(255,150,0);
  rect(2,597,696,100);
  
  strokeWeight(5);
  fill(255,255,130);
  rect(10,607,80,80);
  
  rect(10+90,607,80,80);
  
  rect(10+180,607,80,80);
  
  rect(10+270,607,80,80);
  
  rect(10+360,607,80,80);
  
  strokeWeight(1);
  
}

