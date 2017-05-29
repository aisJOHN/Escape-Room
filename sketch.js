function preload()
{
  Introduction = loadImage('https://dl.dropboxusercontent.com/s/gwpup3sjyr7b0zh/Introduction.jpg?dl=0');
  
  Left_Arrow = loadImage('https://dl.dropboxusercontent.com/s/h3eipyrq514spu5/Left.png?dl=0');

  Right_Arrow = loadImage('https://dl.dropboxusercontent.com/s/9koybuosm6censl/Right.png?dl=0');
  
  Down_Arrow = loadImage('https://dl.dropboxusercontent.com/s/std1feag2jxg72f/Down.png?dl=0');
  
  Bedroom = loadImage('https://dl.dropboxusercontent.com/s/io9fdmzik5s0g7n/Bedroom.jpg?dl=0');
 
  Keyboard = loadImage('https://dl.dropboxusercontent.com/s/ytj08xhnhlyng3w/Keyboard.jpg?dl=0');
  
  FKey = loadImage('https://dl.dropboxusercontent.com/s/5vjjeyzm0adi0th/F%20Key.jpg?dl=0');
  
  AKey = loadImage('https://dl.dropboxusercontent.com/s/s2omkang2t0bx66/A%20Key.jpg?dl=0');
  
  CKey = loadImage('https://dl.dropboxusercontent.com/s/6wzrqxvn64tmj2x/C%20Key.jpg?dl=0');
  
  EKey = loadImage('https://dl.dropboxusercontent.com/s/l8o0aiu3wvopt8t/E%20Key.jpg?dl=0');
  
  Living_Room = loadImage('https://dl.dropboxusercontent.com/s/mnz32q4vqythzoj/Living%20Room.png?dl=0');
  
  Teddy_Bear = loadImage('https://dl.dropboxusercontent.com/s/rl0knqbwk5af2ol/Teddy%20Bear%20Ripped.jpg?dl=0')

  Suitcase = loadImage('https://dl.dropboxusercontent.com/s/imkszrkvpfa6c17/Open%20Suitcase.jpg?dl=0')
  
  Kitchen_L = loadImage('https://dl.dropboxusercontent.com/s/19zdoukrugloshc/Kitchen%20Left.jpg?dl=0');
  
  Frame = loadImage('https://dl.dropboxusercontent.com/s/l1jkvwthk61r661/Frame.png?dl=0');
  
  //FINE
  
  Upper_Left = loadImage('https://dl.dropboxusercontent.com/s/vibvf92h0ih8irs/Upper%20Left.png?dl=0');
  
  Upper_Middle = loadImage('https://dl.dropboxusercontent.com/s/65il9688v1s4o1w/Upper%20Middle.png?dl=0');
  
  Upper_Right = loadImage('https://dl.dropboxusercontent.com/s/w4nc9cxv134ie4z/Upper%20Right.png?dl=0');
  
  Middle_Left = loadImage('https://dl.dropboxusercontent.com/s/wx9ll7wip4wkxsk/Middle%20Left.png?dl=0');

  Middle_Middle = loadImage('https://dl.dropboxusercontent.com/s/xrj03z9eeeqv50h/Middle%20Middle.png?dl=0');

  Middle_Right = loadImage('https://dl.dropboxusercontent.com/s/2f5jce5bckw3sc3/Middle%20Right.png?dl=0');
  
  Bottom_Left = loadImage('https://dl.dropboxusercontent.com/s/1o8wyzehsu92lt6/Bottom%20Left.png?dl=0');

  Bottom_Middle = loadImage('https://dl.dropboxusercontent.com/s/lwxt9ujpsr0u77l/Bottom%20Middle.png?dl=0');

  Bottom_Right = loadImage('https://dl.dropboxusercontent.com/s/r7ppvs15b6neey1/Bottom%20Right.png?dl=0');
  
  //FINE
  
  Kitchen_R_O = loadImage('https://dl.dropboxusercontent.com/s/gdme9jrledfbx2n/Kitchen%20Right%20Original.jpg?dl=0');
  
  Bottles_O = loadImage('https://dl.dropboxusercontent.com/s/o8ooxco9pf9jlvn/Bottle%20Row%20Light.jpg?dl=0');
  
  Bottles_D = loadImage('https://dl.dropboxusercontent.com/s/zpld1phoq1msspe/Bottle%20Row%20Dark.jpg?dl=0');
  
  Lightswitch = loadImage('https://dl.dropboxusercontent.com/s/a1v25zw8zbkd3dn/Light%20Switch.jpg?dl=0');
  
  Kitchen_R_D = loadImage('https://dl.dropboxusercontent.com/s/ypbp2h1lvzt7umh/Kitchen%20Right%20Dark.jpg?dl=0');
  
  Sink = loadImage('https://dl.dropboxusercontent.com/s/h1fwhyumi2by2u2/Sink.jpg?dl=0');

  Key = loadImage('https://dl.dropboxusercontent.com/s/1yds5t7ay8uu2s3/Key.png?dl=0');
  
  Kitchen_R_S = loadImage('https://dl.dropboxusercontent.com/s/1lvjummsa0p0s4f/Kitchen%20Right%20Solved.jpg?dl=0');

  Fridge_C = loadImage('https://dl.dropboxusercontent.com/s/srg3x1pmy8dsd1y/Fridge%20Closed.png?dl=0');

  Fridge_O = loadImage('https://dl.dropboxusercontent.com/s/vxtevd9do596m2e/Fridge%20Open.png?dl=0');

  Small_Note = loadImage('https://dl.dropboxusercontent.com/s/d27j93z57dls3e6/Note.png?dl=0');

  Clue = loadImage('https://dl.dropboxusercontent.com/s/d74kymk2l1j1wua/FACE%20clue.png?dl=0');
}

function setup()
{
  createCanvas(800,600);
  
  Number1 = createSlider(0,9,0);
  Number1.position(600,400);

  Number2 = createSlider(0,9,0);
  Number2.position(600,450);

  Number3 = createSlider(0,9,0);
  Number3.position(600,500);

  Right = false;
  Left = false;
  
  canvas = 1;
  
  SCanvas1 = 0;
  WORD = "";
  LOCKW = false;
  LOCKPIANO = 0;
  
  Panel = 0;
  FaceScore = 0;
  
  SCanvas2 = 0;
  
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
  
  FridgeScore = 0;
  
  A = 1;
  B = 1;
  C = 1;

  HALTA = false;
  HALTB = false;

  HALTC = false;
  HALTD = false;

  HALTE = false;
  HALTF = false;
  
}

function draw()
{
  if (canvas == 1)
  {
    canvas1();
    Number1.hide();
    Number2.hide();
    Number3.hide();
  }
  
  else if (canvas == 2)
  {
    canvas2();
    Number1.show();
    Number2.show();
    Number3.show();
  }
  
  else if (canvas == 3)
  {
    canvas3();
    Number1.hide();
    Number2.hide();
    Number3.hide();
  }
  
  else if (canvas == 4)
  {
    canvas4();
    Number1.hide();
    Number2.hide();
    Number3.hide();
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
    
    if (Panel == 1)
    {
      if (FaceScore == 0)
      {
      fill(0,0,0);
      rect(525,225,50,50);
      image(Middle_Middle,530,230,40,40);
      
      if (mouseX > 530 && mouseX < 530+40 && mouseY > 230 && mouseY < 230+40)
      {
        cursor(HAND);
        
        if (mouseIsPressed == true)
        {
          rect(525,225,50,50);
          FaceScore = 1;
        }
      }
      }
      
      else if (FaceScore == 1)
      {
        fill(0,0,0);
        rect(525,225,50,50);   
        fill(255,255,255);
      }
    }
  }
  
  //Piano Puzzle
  if (SCanvas1 == 1)
  {
    fill(255,255,255);
    text(WORD,115,300);
    image(Keyboard,50,310,700,240);
    
    if (mouseX > 195 && mouseX < 195 + (140/3) && mouseY > 458 && mouseY < 458 + 80 || mouseX > 195 && mouseX < 228 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(FKey,45,310,707,242);
        WORD = WORD + "F";
        LOCKW = true;
      }
    }
    
    if (mouseX > 195 + (280/3) && mouseX < 195 + 140 && mouseY > 458 && mouseY < 458 + 80 || mouseX > 302 && mouseX < 195 + (280/3) + 30 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(AKey,50,316,698,230);
        WORD = WORD + "A";
        LOCKW = true;
      }
    }
    
    if (mouseX > 55 && mouseX < 55 + (140/3) && mouseY > 458 && mouseY < 458 + 80 || mouseX > 55 && mouseX < 55 + (140/3) - 15 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(CKey,50,310,700,235);
        WORD = WORD + "C";
        LOCKW = true;
      }
    }
    
    if (mouseX > 55 + (280/3) && mouseX < 195 && mouseY > 458 && mouseY < 458 + 80 || mouseX > 55 + (280/3) + 15 && mouseX < 195 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);

      if (mouseIsPressed == true && LOCKW == false)
      {
        image(EKey,50,312,700,238);
        WORD = WORD + "E";
        LOCKW = true;
      }
    }
    
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
          Panel = 1;
        }
            
        else if (WORD != "FACE")
        {
          WORD = "";
        }
      }
    }
    
    image(Down_Arrow,365,553,90,45);
    
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
    
  Slider();  
    
  image(Down_Arrow,365,553,90,45);

    if (mouseX > 365 && mouseX < 365 + 90 && mouseY > 553 && mouseY < 553 + 45)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas2 = 0;
      }
    }
  }
  
  if (SCanvas2 == 2)
  {
    image(Suitcase,0,0,800,600);
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
      BOX = 1;
    }

    if (mouseX > 199+133 && mouseX < 199+2*133 && mouseY > 119+118 && mouseY < 119+2*118 && FaceScore == 1)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        BOX = 9;
        FaceScore = 2;
      }
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
      
     image(Middle_Middle,199+133,119+118,133,118);
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
  cursor(ARROW);
  
  if (SCanvas4 == 0)
  {
    Inventory();
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
    if (mouseX > 80 && mouseX < 160 && mouseY > 275 && mouseY < 275 + 50 && KeyScore == 0)
    {
      cursor(HAND);
      
       if (mouseIsPressed == true)
       {
         SCanvas4 = 1;
       }
    }
    
    //Lights
    if (mouseX > 622 && mouseX < 635 && mouseY > 250 && mouseY < 275 && KeyScore == 0)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && KeyScore == 0)
      {
        SCanvas4 = 2;
      }
    }
    
    //Fridge
    if (mouseX > 640 && mouseX < 770 && mouseY > 160 && mouseY < 530)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && FridgeScore == 0)
      {
        SCanvas4 = 6;
      }
      
      if (mouseIsPressed == true && FridgeScore == 1)
      {
        SCanvas4 = 8;
      }
    }
  }
  
  //Bottle With Lights
  if (SCanvas4 == 1)
  {
    Inventory();
    
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
    Inventory();
    
    image(Lightswitch,0,0,800,600);
    
    if (mouseX > 438 && mouseX < 523 && mouseY > 0 && mouseY < 140)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LightLock == false && Room == 0)
      {
        SCanvas4 = 3;
        Room = Room + 1;
      }
      
      else if (mouseIsPressed == true && LightLock == false && Room == 1)
      {
        SCanvas4 = 0;
        Room = Room - 1;
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

  //Dark Kitchen
  if (SCanvas4 == 3)
  { 
    Inventory();

    image(Kitchen_R_D,0,0,800,600);
    
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
    Inventory();

    //Bottles in Darkness Close-Up
    image(Bottles_D,0,0,800,600);
    
    if (mouseX > 665 && mouseX < 725 && mouseY > 125 && mouseY < 125+225)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas4 = 5;
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
  
  //Sink
  if (SCanvas4 == 5)
  {
    Inventory();

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
  
  //Closed Fridge
  if (SCanvas4 == 6)
  {
    image(Fridge_C,0,0,800,600);
    
    Inventory();
    
    image(Down_Arrow,630,500,90,85);

    if (mouseX > 630 && mouseX < 630 + 90 && mouseY > 500 && mouseY < 500 + 85)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 0;
      }
    }
    
    if (mouseX > 380 && mouseX < 387+30 && mouseY > 255 && mouseY < 280 && KeyScore == 1)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas4 = 7;
      }
    }
  }
  
  //Fridge Puzzle
  if (SCanvas4 == 7)
  {
    image(Fridge_C,0,0,800,600);
    Inventory();
    Combination();
    
    image(Down_Arrow,630,500,90,85);

    if (mouseX > 630 && mouseX < 630 + 90 && mouseY > 500 && mouseY < 500 + 85)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 0;
      }
    }
  }
  
  if (SCanvas4 == 8)
  {
    image(Fridge_O,0,0,800,600);
    Inventory();
    image(Small_Note,500,300,25,25);
    
    if (mouseX > 500 && mouseX < 500+25 && mouseY > 300 && mouseY < 300+25)
    {
      if (mouseIsPressed == true)
      {
        SCanvas4 = 9;
      }
    }
    
    image(Down_Arrow,630,500,90,85);

    if (mouseX > 630 && mouseX < 630 + 90 && mouseY > 500 && mouseY < 500 + 85)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 0;
      }
    }
    
  }
  
  if (SCanvas4 == 9)
  {
    image(Clue,0,0,800,600);
    
    image(Down_Arrow,630,500,90,85);

    if (mouseX > 630 && mouseX < 630 + 90 && mouseY > 500 && mouseY < 500 + 85)
    {
      cursor(HAND);

      if (mouseIsPressed == true)
      {
        SCanvas4 = 0;
      }
    }
  }
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
  rect(390,349,20,20);

  if (mouseX > 390 && mouseX < 390+20 && mouseY > 349 && mouseY < 349+20)
  {
    fill(200,200,200);
    rect(390,349,20,20);

    if (mouseIsPressed == true && HALTC == false)
    {
      fill(250,250,250);
      rect(390,349,20,20);
      HALTC = true;

      B = B + 1;
    }
  }

  //Number 2

  fill(0,255,0);
  rect(370,384,60,60);

  fill(0,0,0);
  text(+B,398,420);

  //Toggle Down 2

  fill(150,150,150);
  rect(390,459,20,20);

  if (mouseX > 390 && mouseX < 390+20 && mouseY > 459 && mouseY < 459+20)
  {
    fill(200,200,200);
    rect(390,459,20,20);

    if (mouseIsPressed == true && HALTD == false)
    {
      fill(250,250,250);
      rect(390,459,20,20);
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
    KeyScore = 2;
    SCanvas4 = 8;
    FridgeScore = 1;
  }
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
        
        SCanvas2 = 2;
      }
    }
  }

  fill(0,0,0);
  text("3 - 1 - 4", 275,350);
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
}

function Inventory()
{
  strokeWeight(5);
  fill(90,30,0);
  rect(2,497,368,100);

  strokeWeight(5);
  fill(255,255,130);
  rect(10,507,80,80);
  
  if (FaceScore == 1)
  {
    image(Middle_Middle,15,512,70,70)
  }

  rect(10+90,507,80,80);

  rect(10+180,507,80,80);
  
  if (KeyScore == 1)
  {
    image(Key,200,520,60,60);
  }

  rect(10+270,507,80,80);

  strokeWeight(1);
}