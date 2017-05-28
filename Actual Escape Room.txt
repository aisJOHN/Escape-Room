function preload()
{
  Introduction = loadImage('https://dl.dropboxusercontent.com/s/4mlb43p1ilhpkc4/Introduction.jpg?dl=0')
  
  Left_Arrow = loadImage('https://dl.dropboxusercontent.com/s/sbj77q215p5ji5v/Left.png')

  Right_Arrow = loadImage('https://dl.dropboxusercontent.com/s/5erawmheo7va7bm/Right.png')
  
  Down_Arrow = loadImage('https://dl.dropboxusercontent.com/s/j5hdquae32335rh/Down.png?dl=0')
  
  Bedroom = loadImage('https://dl.dropboxusercontent.com/s/dxxq4iory6dmdff/Bedroom.jpg')
 
  Keyboard = loadImage('https://dl.dropboxusercontent.com/s/xbiocg3rs3rlgw9/Keyboard.jpg')
  
  FKey = loadImage('https://dl.dropboxusercontent.com/s/gsg9xtysfo3fu3b/Keyboard%20-%20F.jpg?dl=0')
  
  AKey = loadImage('https://dl.dropboxusercontent.com/s/mba61y8066r4vln/Keyboard%20-%20A.jpg?dl=0')
  
  CKey = loadImage('https://dl.dropboxusercontent.com/s/6if6akfbcv9bnle/Keyboard%20-%20C.jpg?dl=0')
  
  EKey = loadImage('https://dl.dropboxusercontent.com/s/jo9smv65bsnt7kq/Keyboard%20-%20E.jpg?dl=0')
  
  Living_Room = loadImage('https://dl.dropboxusercontent.com/s/ohcn4bp5j5kir5r/Living%20Room.psd')

  Kitchen_L = loadImage('https://dl.dropboxusercontent.com/s/97se0ck3cq6dflh/Kitchen%20L.png?dl=0')
  
  Frame = loadImage('https://dl.dropboxusercontent.com/s/n0cxasvr9jv6669/Frame.png?dl=0')
  
  Upper_Left = loadImage('https://dl.dropboxusercontent.com/s/ic7svx8hqkcmsnd/Screen%20Shot%202017-03-01%20at%201.09.51%20PM.png')
  
  Upper_Middle = loadImage('https://dl.dropboxusercontent.com/s/97rhpktqdvc6tl6/Screen%20Shot%202017-03-03%20at%209.27.04%20AM.png')
  
  Upper_Right = loadImage('https://dl.dropboxusercontent.com/s/ru6z6fj0r3qq6of/Screen%20Shot%202017-03-03%20at%209.28.32%20AM.png')
  
  Middle_Left = loadImage('https://dl.dropboxusercontent.com/s/hb8irlvv5cuouv6/Screen%20Shot%202017-03-01%20at%201.10.02%20PM.png')

  Middle_Middle = loadImage('https://dl.dropboxusercontent.com/s/n54y3y2lsm69jlp/Screen%20Shot%202017-03-03%20at%209.27.42%20AM.png')

  Middle_Right = loadImage('https://dl.dropboxusercontent.com/s/tdgnmc79vtwcjab/Screen%20Shot%202017-03-03%20at%209.28.50%20AM.png')
  
  Bottom_Left = loadImage('https://dl.dropboxusercontent.com/s/q92j7dzh13zyaak/Screen%20Shot%202017-03-03%20at%209.22.03%20AM.png')

  Bottom_Middle = loadImage('https://dl.dropboxusercontent.com/s/pj02fzbk23msx6s/Screen%20Shot%202017-03-03%20at%209.28.08%20AM.png')

  Bottom_Right = loadImage('https://dl.dropboxusercontent.com/s/te0qvk73v8wt7ux/Screen%20Shot%202017-03-03%20at%209.30.17%20AM.png')
  
  Kitchen_R_O = loadImage('https://dl.dropboxusercontent.com/s/jnbnjshrlm15h70/Kitchen%20R%20Original.psd?dl=0')
  
  Bottles_O = loadImage('https://dl.dropboxusercontent.com/s/kmtwpqkhof1l2tj/Bottle%20Row%20Original.psd?dl=0')
  
  Bottles_D = loadImage('https://dl.dropboxusercontent.com/s/n8jwhxxt3kamhy8/Bottle%20Row%20Dark.psd?dl=0')
  
  Lightswitch = loadImage('https://dl.dropboxusercontent.com/s/bwu29l7jfuibicx/Light%20Switch.psd?dl=0')
  
  Kitchen_R_D = loadImage('https://dl.dropboxusercontent.com/s/w6kw0fygmf5onu7/Kitchen%20R%20Dark.psd?dl=0')
  
  Sink = loadImage('https://dl.dropboxusercontent.com/s/c7d2zpxx0w42sii/Broken%20Bottle.psd?dl=0')

  Key = loadImage('https://dl.dropboxusercontent.com/s/460h7ym7gjkeskm/Key.png?dl=0')
  
  Fridge_L = loadImage('https://dl.dropboxusercontent.com/s/hwto27j3w1bgb2j/Fridge%20Locked.png?dl=0')
  
  Fridge_O = loadImage('https://dl.dropboxusercontent.com/s/nejn7lswwvc94xx/Fridge%20Open.png?dl=0')
  
  Kitchen_R_S = loadImage('https://dl.dropboxusercontent.com/s/opqvf8ly4cr6vi6/Kitchen%20R%20After.psd?dl=0')
}

function setup()
{
  createCanvas(800,600);
  
  canvas = 1;
  
  SCanvas1 = 0;
  
  WORD = "";
  LOCKW = false;
  LOCKPIANO = 0;
  
  SCanvas2 = 0;
  
  Right = false;
  Left = false;
  
  SCanvas3 = 0;
  
  BOX = 1;
  
  AAA = 199;
  BBB = 119;

  CCC = 199+133;
  DDD = 119;

  EEE = 199+2*133;
  FFF = 119;

  GGG = 199+2*133;
  HHH = 119+118;

  III = 199+2*133;
  JJJ = 119+2*118;

  KKK = 199+133;
  LLL = 119+2*118;

  MMM = 199;
  NNN = 119+2*118;

  OOO = 199;
  PPP = 119+118;
  
  SCanvas4 = 0;
  
  LightLock = false;
  Room = 0;
  KeyScore = 0;
}

function draw()
{
  if (canvas == 1)
  {
    canvas1();
  }
  
  else if (canvas == 2)
  {
    canvas2();
  }
  
  else if (canvas == 3)
  {
    canvas3();
  }
  
  else if (canvas == 4)
  {
    canvas4();
  }
  
  else
  {
    canvas = 1;
  }
}

function canvas1()
{
  cursor(ARROW);
  background(Bedroom);
  
  if (SCanvas1 == 0)
  {
    Inventory();
    
    // Navigate Right
    image(Right_Arrow,684,54,96,96);

    if (mouseX > 684 && mouseX < 684+96 && mouseY > 54 && mouseY < 54+96)
    {
      cursor(HAND);

      if (mouseIsPressed == true && Right == false)
      {
        canvas = canvas + 1;
        Right = true;
      }
    }
    
    //Piano Select
    if (mouseX > 580 && mouseY > 270 && mouseY < 500 && LOCKPIANO == 0)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas1 = 1;
      }
    }
  }
  
  //Piano Puzzle
  if (SCanvas1 == 1)
  {
    image(Keyboard,50,310,700,240);
    
    if (mouseX > 195 && mouseX < 195 + (140/3) && mouseY > 458 && mouseY < 458 + 80 || mouseX > 195 && mouseX < 228 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(FKey,45,310,707,242);
        WORD = WORD + "F"
        LOCKW = true;
      }
    }
    
    if (mouseX > 195 + (280/3) && mouseX < 195 + 140 && mouseY > 458 && mouseY < 458 + 80 || mouseX > 302 && mouseX < 195 + (280/3) + 30 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(AKey,50,316,698,230);
        WORD = WORD + "A"
        LOCKW = true;
      }
    }
    
    if (mouseX > 55 && mouseX < 55 + (140/3) && mouseY > 458 && mouseY < 458 + 80 || mouseX > 55 && mouseX < 55 + (140/3) - 15 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(CKey,50,310,700,235);
        WORD = WORD + "C"
        LOCKW = true;
      }
    }
    
    if (mouseX > 55 + (280/3) && mouseX < 195 && mouseY > 458 && mouseY < 458 + 80 || mouseX > 55 + (280/3) + 15 && mouseX < 195 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);

      if (mouseIsPressed == true && LOCKW == false)
      {
        image(EKey,50,312,700,238);
        WORD = WORD + "E"
        LOCKW = true;
      }
    }
    
    text(WORD,115,300)
    
    fill(255,255,255);
    rect(50,275,50,25);
    fill(0,0,0);
    text("Submit",56,293);
    
    if (mouseX > 50 && mouseX < 50 + 50 && mouseY > 275 && mouseY < 275 + 25)
    {
      cursor(HAND);
      
      fill(225,225,225);
      rect(50,275,50,25);
      fill(0,0,0);
      text("Submit",56,293);
      fill(255,255,255);
      
      if (mouseIsPressed == true)
      {
        fill(200,200,200);
        rect(50,275,50,25);
        fill(0,0,0);
        text("Submit",56,293);
        fill(255,255,255);
        
        if (WORD == "FACE")
        {
          SCanvas1 = 0;
          LOCKPIANO = 1;
        }
            
        else if (WORD != "FACE")
        {
          WORD = "";
        }
      }
    }
    
    image(Down_Arrow,365,553,90,45)
    
    if (mouseX > 365 && mouseX < 365 + 90 && mouseY > 553 && mouseY < 553 + 45)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas1 = 0;
      }
    }
  }
}

function canvas2()
{
  background(Living_Room);
  fill(255,255,255);
  cursor(ARROW);
  
  if (SCanvas2 == 0)
  {
    image(Right_Arrow,684,54,96,96);

    if (mouseX > 684 && mouseX < 684+96 && mouseY > 54 && mouseY < 54+96)
    {
      cursor(HAND);

      if (mouseIsPressed == true && Right == false)
      {
        canvas = canvas + 1;
        Right = true;
      }
    }
  
    image(Left_Arrow,4,54,96,96);

    if (mouseX > 4 && mouseX < 4+96 && mouseY > 54 && mouseY < 54+96)
    {
      cursor(HAND);

      if (mouseIsPressed == true && Left == false)
      {
        canvas = canvas - 1;
        Left = true;
      }      
    }

    if (mouseX > 585 && mouseX < 585 + 135 && mouseY > 350 && mouseY < 500)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas2 = 1;
      }
    }
    
    Inventory();
  }
  
  if (SCanvas2 == 1)
  {
  
  image(Down_Arrow,365,553,90,45)

    if (mouseX > 365 && mouseX < 365 + 90 && mouseY > 553 && mouseY < 553 + 45)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas2 = 0;
      }
    }
  }
}

function canvas3()
{
  background(Kitchen_L);
  fill(255,255,255);
  cursor(ARROW);

  if (SCanvas3 == 0)
  {
  
  image(Right_Arrow,684,54,96,96);
    
    if (mouseX > 684 && mouseX < 684+96 && mouseY > 54 && mouseY < 54+96)
    {
      cursor(HAND);

      if (mouseIsPressed == true && Right == false)
      {
        canvas = canvas + 1;
        Right = true;
      }
    }

  image(Left_Arrow,4,54,96,96);

    if (mouseX > 4 && mouseX < 4+96 && mouseY > 54 && mouseY < 54+96)
    {
      cursor(HAND);

      if (mouseIsPressed == true && Left == false)
      {
        canvas = canvas - 1;
        Left = true;
      }
    }
    
    if (mouseX > 280 && mouseX < 350 && mouseY > 90 && mouseY < 190)
    {
      cursor(HAND); 
      
      if (mouseIsPressed == true)
      {
        SCanvas3 = 1;
      }
    }
    
    Inventory();

  }
  
  if (SCanvas3 == 1)
  { //Start of SCanvas3 == 1
  
  image(Frame,150,50,500,500);
    
  image(Upper_Left,AAA,BBB,133,118);

  image(Upper_Middle,CCC,DDD,133,118);
    
  image(Upper_Right,EEE,FFF,133,118);
  
  image(Middle_Right,GGG,HHH,133,118);
  
  image(Bottom_Right,III,JJJ,133,118);  

  image(Bottom_Middle,KKK,LLL,133,118);
  
  image(Bottom_Left,MMM,NNN,133,118);
  
  image(Middle_Left,OOO,PPP,133,118);
    
  //ROTATING FRAME START
    
  if (BOX == 1)
    {
      AAA = AAA + (133/118);
      BBB = 119;

      CCC = CCC + (133/118);
      DDD = 119;

      EEE = 199+2*133;
      FFF = FFF + 1;

      GGG = 199+2*133;
      HHH = HHH + 1;

      III = III - (133/118);
      JJJ = 119+2*118;

      KKK = KKK - (133/118);
      LLL = 119+2*118;

      MMM = 199;
      NNN = NNN - 1;

      OOO = 199;
      PPP = PPP - 1;
    }

    if (AAA > 199+133 && CCC > 199+2*133 && FFF > 119+118 && HHH > 119+2*118 && III < 199+133 && KKK < 199 && NNN < 119+118 && PPP < 119)
    {
      BOX = 2;
    }

    if (BOX == 2)
    {
      AAA = AAA + (133/118);
      BBB = 119;

      CCC = 199+2*133;
      DDD = DDD + 1;

      EEE = 199+2*133;
      FFF = FFF + 1;

      GGG = GGG - (133/118);
      HHH = 119+2*118;

      III = III - (133/118);
      JJJ = 119+2*118;

      KKK = 199;
      LLL = LLL - 1;

      MMM = 199;
      NNN = NNN - 1;

      OOO = OOO + (133/118);
      PPP = 119;
    }

    if (AAA > 199+2*133 && DDD > 119+118 && FFF > 119+2*118 && GGG < 199+133 && III < 199 && LLL < 119+118 && NNN < 119 && OOO > 199+133)
    {
      BOX = 3;
    }

    if (BOX == 3)
    {
      AAA = 199+2*133;
      BBB = BBB + 1;

      CCC = 199+2*133;
      DDD = DDD + 1;

      EEE = EEE - (133/118);
      FFF = 119+2*118;

      GGG = GGG - (133/118);
      HHH = 119+2*118;

      III = 199;
      JJJ = JJJ - 1;

      KKK = 199;
      LLL = LLL - 1;

      MMM = MMM + (133/118);
      NNN = 119;

      OOO = OOO + (133/118);
      PPP = 119;
    }

    if (BBB > 119+118 && DDD > 119+2*118 && EEE < 199+133 && GGG < 199 && JJJ < 119+118 && LLL < 119 && MMM > 199+133 && OOO > 199+2*133)
    {
      BOX = 4;
    }

    if (BOX == 4)
    {
      AAA = 199+2*133;
      BBB = BBB + 1;

      CCC = CCC - (133/118);
      DDD = 119+2*118;

      EEE = EEE - (133/118);
      FFF = 119+2*118;

      GGG = 199;
      HHH = HHH - 1;

      III = 199;
      JJJ = JJJ - 1;

      KKK = KKK + (133/118);
      LLL = 119;

      MMM = MMM + (133/118);
      NNN = 119;

      OOO = 199+2*133;
      PPP = PPP + 1;
    }

    if (BBB > 119+2*118 && CCC < 199+133 && EEE < 199 && HHH < 119+118 && JJJ < 119 && KKK > 199+133 && MMM > 199+2*133 && PPP > 119+118)
    {
      BOX = 5;
    }

    if (BOX == 5)
    {
      AAA = AAA - (133/118);
      BBB = 119+2*118;

      CCC = CCC - (133/118);
      DDD = 119+2*118;

      EEE = 199;
      FFF = FFF - 1;

      GGG = 199;
      HHH = HHH - 1;

      III = III + (133/118);
      JJJ = 119;

      KKK = KKK + (133/118);
      LLL = 119;

      MMM = 199+2*133;
      NNN = NNN + 1;

      OOO = 199+2*133;
      PPP = PPP + 1;
    }
//CHECK START
    if (AAA < 199+133 && CCC < 199 && FFF < 119+118 && HHH < 119 && III > 199+133 && KKK > 199+2*133 && NNN > 119+118 && PPP > 119+2*118)
    {
      BOX = 6;
    }

    if (BOX == 6)
    {
      AAA = AAA - (133/118);
      BBB = 119+2*118;

      CCC = 199;
      DDD = DDD - 1;

      EEE = 199;
      FFF = FFF - 1;

      GGG = GGG + (133/118);
      HHH = 119;

      III = III + (133/118);
      JJJ = 119;

      KKK = 199+2*133;
      LLL = LLL + 1;

      MMM = 199+2*133;
      NNN = NNN + 1;

      OOO = OOO - (133/118);
      PPP = 119+2*118;
    }

    if (AAA < 199 && DDD < 119+118 && FFF < 119 && GGG > 199+133 && III > 199+2*133 && LLL > 119+118 && NNN > 119+2*118 && OOO < 199+133)
    {
      BOX = 7;
    }

    if (BOX == 7)
    {
      AAA = 199;
      BBB = BBB - 1;

      CCC = 199;
      DDD = DDD - 1;

      EEE = EEE + (133/118);
      FFF = 119;

      GGG = GGG + (133/118);
      HHH = 119;

      III = 199+2*133;
      JJJ = JJJ + 1;

      KKK = 199+2*133;
      LLL = LLL + 1;

      MMM = MMM - (133/118);
      NNN = 119+2*118;

      OOO = OOO - (133/118);
      PPP = 119+2*118;
    }

    if (BBB < 119+118 && DDD < 119 && EEE > 199+133 && GGG > 199+2*133 && JJJ > 119+118 && LLL > 119+2*118 && MMM < 199+133 && OOO < 199+2*133)
    {
      BOX = 8;
    }

    if (BOX == 8)
    {
      AAA = 199;
      BBB = BBB - 1;

      CCC = CCC + (133/118);
      DDD = 119;

      EEE = EEE + (133/118);
      FFF = 119;

      GGG = 199+2*133;
      HHH = HHH + 1;

      III = 199+2*133;
      JJJ = JJJ + 1;

      KKK = KKK - (133/118);
      LLL = 119+2*118;

      MMM = MMM - (133/118);
      NNN = 119+2*118;

      OOO = 199;
      PPP = PPP - 1;
    }

    if (BBB < 119 && CCC > 199+133 && EEE > 199+2*133 && HHH > 119+118 && JJJ > 119+2*118 && KKK < 199+133 && MMM < 199+2*133 && PPP < 119+118)
    {
      BOX = 1
    }

    if (mouseX > 199+133 && mouseX < 199+2*133 && mouseY > 119+118 && mouseY < 119+2*118)
    {
      if (mouseIsPressed)
      {
        BOX = 9
      }
      cursor(HAND);
    }

    if (BOX == 9)
    {
      AAA = 199;
      BBB = 119;

      CCC = 199+133;
      DDD = 119;

      EEE = 199+2*133;
      FFF = 119;

      GGG = 199+2*133;
      HHH = 119+118;

      III = 199+2*133;
      JJJ = 119+2*118;

      KKK = 199+133;
      LLL = 119+2*118;

      MMM = 199;
      NNN = 119+2*118;

      OOO = 199;
      PPP = 119+118;
    }
    
  //ROTATING FRAME END
    
  image(Down_Arrow,365,520,90,85);

    if (mouseX > 365 && mouseX < 365 + 90 && mouseY > 520 && mouseY < 520 + 85)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas3 = 0;
      }
    }
  } //End of SCanvas3 == 1
}

function canvas4()
{
  background(Kitchen_R_O);
  fill(255,255,255);
  cursor(ARROW)
  
  if (SCanvas4 == 0)
  {
    image(Left_Arrow,4,54,96,96);

    if (mouseX > 4 && mouseX < 4+96 && mouseY > 54 && mouseY < 54+96)
    {
      cursor(HAND);

      if (mouseIsPressed == true && Left == false)
      {
        canvas = canvas - 1;
        Left = true;
      }
    }
    
    //Bottles Without Darkness
    if (mouseX > 80 && mouseX < 160 && mouseY > 275 && mouseY < 275 + 50)
    {
      cursor(HAND);
      
       if (mouseIsPressed == true)
       {
         SCanvas4 = 1;
       }
    }
    
    //Lights
    if (mouseX > 622 && mouseX < 635 && mouseY > 250 && mouseY < 275)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas4 = 2;
      }
    }
    
    //Fridge
    if (mouseX > 640 && mouseX < 770 && mouseY > 160 && mouseY < 530)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas4 = 6;
      }
    }
  }
  
  //Bottle With Lights
  if (SCanvas4 == 1)
  {
    image(Bottles_O,0,0,800,600);
    
    image(Down_Arrow,60,375,120,100);

    if (mouseX > 60 && mouseX < 60 + 120 && mouseY > 375 && mouseY < 375+100)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 0;
      }
    }
    
  }
  
  //Lightswitch
  if (SCanvas4 == 2)
  {
    image(Lightswitch,0,0,800,600);
    
    if (mouseX > 438 && mouseX < 523 && mouseY > 0 && mouseY < 140)
    {
      cursor(HAND)
      
      if (mouseIsPressed == true && LightLock == false && Room == 0)
      {
        SCanvas4 = 3;
        Room = Room + 1;
      }
      
      else if (mouseIsPressed == true && LightLock == false && Room == 1)
      {
        SCanvas4 = 0;
        Room = Room - 1
      }
    }
    
    image(Down_Arrow,500,340,120,100);

    if (mouseX > 500 && mouseX < 500 + 120 && mouseY > 340 && mouseY < 340 + 100)
    {
      cursor(HAND);

      if (mouseIsPressed == true && Room == 0)
      {
        SCanvas4 = 0;
      }
      
      else if (mouseIsPressed == true && Room == 1)
      {
        SCanvas4 = 3;
      }
    }
  }
  
  if (SCanvas4 == 3)
  { 
    image(Kitchen_R_D,0,0,800,600)
    
    //Bottles With Darkness
    if (mouseX > 80 && mouseX < 160 && mouseY > 275 && mouseY < 275 + 50)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 4;
      }
    }
    
    //Lightswitch
    if (mouseX > 622 && mouseX < 635 && mouseY > 250 && mouseY < 275)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 2;
      }
    }
  }
  
  if (SCanvas4 == 4)
  {  
    //Bottles in Darkness Close-Up
    image(Bottles_D,0,0,800,600);
    
    if (mouseX > 665 & mouseX < 725 && mouseY > 125 && mouseY < 125+225)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas4 = 5
      }
    }
    
    //Leave
    image(Down_Arrow,60,375,120,100);

    if (mouseX > 60 && mouseX < 60 + 120 && mouseY > 375 && mouseY < 375+100)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 3;
      }
    }
  }
  
  if (SCanvas4 == 5)
  {
    image(Sink,0,0,800,600);
    
    if (mouseX > 545 && mouseX < 545+32 && mouseY > 348 && mouseY < 348+32)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas4 = 0;
        KeyScore = 1;
      }
    }
  }
  
  if (SCanvas4 == 6)
  {
  
    image(Down_Arrow,365,520,90,85);

    if (mouseX > 365 && mouseX < 365 + 90 && mouseY > 520 && mouseY < 520 + 85)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 0;
      }
    }
  }
  
  Inventory();

}

function mouseReleased()
{
  if (Right)
  {
    Right = false;
  }
  
  if (Left)
  {
    Left = false;
  }
  
  if (LOCKW)
  {
    LOCKW = false;
  }
  
  if (LightLock)
  {
    LightLock = false;
  }
}

function Inventory()

{
  strokeWeight(5);
  fill(90,30,0);
  rect(2,497,368,100);

  strokeWeight(5);
  fill(255,255,130);
  rect(10,507,80,80);

  rect(10+90,507,80,80);

  rect(10+180,507,80,80);
  
  if (KeyScore == 1)
  {
    image(Key,200,520,60,60)
  }

  rect(10+270,507,80,80);

  strokeWeight(1);
}