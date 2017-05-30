function preload()
{
  // Title Screen Image
  Introduction = loadImage('https://dl.dropboxusercontent.com/s/7b335s6td4zjtey/Introduction.jpg?dl=0');
  
  //Navigation Images
  Left_Arrow = loadImage('https://dl.dropboxusercontent.com/s/h3eipyrq514spu5/Left.png?dl=0');
 
  Right_Arrow = loadImage('https://dl.dropboxusercontent.com/s/9koybuosm6censl/Right.png?dl=0');
  
  Down_Arrow = loadImage('https://dl.dropboxusercontent.com/s/std1feag2jxg72f/Down.png?dl=0');
  
  //Number Clue Images
  Number_1 = loadImage('https://dl.dropboxusercontent.com/s/4d68tlxszbwc8e1/Number%201.png?dl=0');
  
  Number_3 = loadImage('https://dl.dropboxusercontent.com/s/1g7zn787rrrlsso/Number%203.png?dl=0');
  
  Number_4 = loadImage('https://dl.dropboxusercontent.com/s/1qs83j10p08wdxl/Number%204.png?dl=0');
  
  Number_5 = loadImage('https://dl.dropboxusercontent.com/s/pwfibh4yh43ta66/Number%205.png?dl=0');
 
  Number_6 = loadImage('https://dl.dropboxusercontent.com/s/lpu8zo3to0ty238/Number%206.png?dl=0');
 
  Number_8 = loadImage('https://dl.dropboxusercontent.com/s/mlu1aa0472amkc7/Number%208.png?dl=0');
  
  //Bedroom Images
  Bedroom = loadImage('https://dl.dropboxusercontent.com/s/io9fdmzik5s0g7n/Bedroom.jpg?dl=0');
 
    //Piano Images
  Keyboard = loadImage('https://dl.dropboxusercontent.com/s/ytj08xhnhlyng3w/Keyboard.jpg?dl=0');
  
  FKey = loadImage('https://dl.dropboxusercontent.com/s/5vjjeyzm0adi0th/F%20Key.jpg?dl=0');
  
  AKey = loadImage('https://dl.dropboxusercontent.com/s/s2omkang2t0bx66/A%20Key.jpg?dl=0');
  
  CKey = loadImage('https://dl.dropboxusercontent.com/s/6wzrqxvn64tmj2x/C%20Key.jpg?dl=0');
  
  EKey = loadImage('https://dl.dropboxusercontent.com/s/l8o0aiu3wvopt8t/E%20Key.jpg?dl=0');
  
  //Living Room Images
  Living_Room = loadImage('https://dl.dropboxusercontent.com/s/mnz32q4vqythzoj/Living%20Room.png?dl=0');
  
    //Final Puzzle Teddy Bear
  Teddy_Bear = loadImage('https://dl.dropboxusercontent.com/s/rl0knqbwk5af2ol/Teddy%20Bear%20Ripped.jpg?dl=0')
 
    //Suitcase Puzzle
  Suitcase = loadImage('https://dl.dropboxusercontent.com/s/imkszrkvpfa6c17/Open%20Suitcase.jpg?dl=0')
  
    //Glass Shard for Inventory
  Glass_Shard = loadImage('https://dl.dropboxusercontent.com/s/nugwyn8jk5y53b6/Glass_sharde.png?dl=0')
  
  //Left Kitchen Image
  Kitchen_L = loadImage('https://dl.dropboxusercontent.com/s/19zdoukrugloshc/Kitchen%20Left.jpg?dl=0');
  
    //Painting Puzzle
  Frame = loadImage('https://dl.dropboxusercontent.com/s/l1jkvwthk61r661/Frame.png?dl=0');
  
    //Individual Puzzle Pieces
  
  Upper_Left = loadImage('https://dl.dropboxusercontent.com/s/vibvf92h0ih8irs/Upper%20Left.png?dl=0');
  
  Upper_Middle = loadImage('https://dl.dropboxusercontent.com/s/65il9688v1s4o1w/Upper%20Middle.png?dl=0');
  
  Upper_Right = loadImage('https://dl.dropboxusercontent.com/s/w4nc9cxv134ie4z/Upper%20Right.png?dl=0');
  
  Middle_Left = loadImage('https://dl.dropboxusercontent.com/s/wx9ll7wip4wkxsk/Middle%20Left.png?dl=0');
 
    //Answer to Painting Puzzle. To be in Inventory
  Middle_Middle = loadImage('https://dl.dropboxusercontent.com/s/xrj03z9eeeqv50h/Middle%20Middle.png?dl=0');
 
  Middle_Right = loadImage('https://dl.dropboxusercontent.com/s/2f5jce5bckw3sc3/Middle%20Right.png?dl=0');
  
  Bottom_Left = loadImage('https://dl.dropboxusercontent.com/s/1o8wyzehsu92lt6/Bottom%20Left.png?dl=0');
 
  Bottom_Middle = loadImage('https://dl.dropboxusercontent.com/s/lwxt9ujpsr0u77l/Bottom%20Middle.png?dl=0');
 
  Bottom_Right = loadImage('https://dl.dropboxusercontent.com/s/r7ppvs15b6neey1/Bottom%20Right.png?dl=0');
  
  //Right Kitchen Images
  
  Kitchen_R_O = loadImage('https://dl.dropboxusercontent.com/s/gdme9jrledfbx2n/Kitchen%20Right%20Original.jpg?dl=0');
  
    //Bottles in the Light
  Bottles_O = loadImage('https://dl.dropboxusercontent.com/s/o8ooxco9pf9jlvn/Bottle%20Row%20Light.jpg?dl=0');
  
    //Bottles in the Dark
  Bottles_D = loadImage('https://dl.dropboxusercontent.com/s/zpld1phoq1msspe/Bottle%20Row%20Dark.jpg?dl=0');
  
    //Lightswitch Photo to go between the Light Kitchen and the dark Kitchen
  Lightswitch = loadImage('https://dl.dropboxusercontent.com/s/a1v25zw8zbkd3dn/Light%20Switch.jpg?dl=0');
  
    //Dark Kitchen
  Kitchen_R_D = loadImage('https://dl.dropboxusercontent.com/s/ypbp2h1lvzt7umh/Kitchen%20Right%20Dark.jpg?dl=0');
  
    //Sink
  Sink = loadImage('https://dl.dropboxusercontent.com/s/h1fwhyumi2by2u2/Sink.jpg?dl=0');
 
    //Key for the Inventory
  Key = loadImage('https://dl.dropboxusercontent.com/s/1yds5t7ay8uu2s3/Key.png?dl=0');
  
    //After all puzzles in the kitchen are solved.
  Kitchen_R_S = loadImage('https://dl.dropboxusercontent.com/s/1lvjummsa0p0s4f/Kitchen%20Right%20Solved.jpg?dl=0');
 
    //Closed Fridge
  Fridge_C = loadImage('https://dl.dropboxusercontent.com/s/srg3x1pmy8dsd1y/Fridge%20Closed.png?dl=0');
 
    //Open Fridge
  Fridge_O = loadImage('https://dl.dropboxusercontent.com/s/vxtevd9do596m2e/Fridge%20Open.png?dl=0');
    
    //Far-away image of the Piano clue.
  Small_Note = loadImage('https://dl.dropboxusercontent.com/s/d27j93z57dls3e6/Note.png?dl=0');
 
    //Piano clue
  Clue = loadImage('https://dl.dropboxusercontent.com/s/d74kymk2l1j1wua/FACE%20clue.png?dl=0');
  
  //Victory Screen images
  Victory_1 = loadImage('https://dl.dropboxusercontent.com/s/vxbwou8olg8p082/Victory%201.png?dl=0');
 
  Victory_2 = loadImage('https://dl.dropboxusercontent.com/s/y9kx3jkyej1stug/Victory%202.png?dl=0');
  
  SoundS = loadSound('https://dl.dropboxusercontent.com/s/x4vhpc58kpltovf/Swtich%20.mp3?dl=0');
  SoundG = loadSound('https://dl.dropboxusercontent.com/s/jyda0u7g5s2flw2/Glass.mp3?dl=0');
  SoundU = loadSound('https://dl.dropboxusercontent.com/s/n5rwsqz8gsbgywi/unlocking%20.mp3?dl=0');
  SoundO = loadSound('https://dl.dropboxusercontent.com/s/l2e74ji1zuzzr8u/Fridge%20.mp3?dl=0');
  SoundC = loadSound('https://dl.dropboxusercontent.com/s/ugk9lhquz6v9nho/Fridge%20close.mp3?dl=0');
}
 
function setup()
{
  createCanvas(800,600);
 
  Right = false;
  Left = false;
  
  //Bedroom variables
  canvas = 1;
  
  SCanvas1 = 0;
  WORD = "";
  LOCKW = false;
  LOCKPIANO = 0;
  
  Panel = 0;
  FaceScore = 0;
  
  WORDA = 0;
  WORDC = 0;
  WORDE = 0;
  WORDF = 0;
  
  //Living Room variables
  SCanvas2 = 0;
  
  //Suitcase Puzzle variables
  Number1 = createSlider(0,9,0);
  Number1.position(650,150);
 
  Number2 = createSlider(0,9,0);
  Number2.position(650,200);
 
  Number3 = createSlider(0,9,0);
  Number3.position(650,250);
  
  CaseLock = 0;
  GlassScore = 0;
  GlassLock = false;
  
  //Final Puzzle variables
 
  selectionBox = createSelect();
  selectionBox.option("α");
  selectionBox.option("ε");
  selectionBox.position(515-380,490);
  selectionBox.size(50,10);
 
  selectionBox2 = createSelect();
  selectionBox2.option("Φ");
  selectionBox2.option("Ψ");
  selectionBox2.option("Ξ");
  selectionBox2.position(515-280,490);
  selectionBox2.size(50,10);
 
  selectionBox3 = createSelect();
  selectionBox3.option("δ");
  selectionBox3.option("ω");
  selectionBox3.position(515-180,490);
  selectionBox3.size(50,10);
 
  selectionBox4 = createSelect();
  selectionBox4.option("η");
  selectionBox4.option("ξ");
  selectionBox4.position(515-80,490);
  selectionBox4.size(50,10);
 
  stateOfBox = 1;
 
  L = 50;
  BOMB = 375;
  Growth = 0;
 
  BOMB2 = 375
  L2 = 50;
 
  BOMB3 = 375
  L3 = 50;
  
  //Left Kitchen variables
  SCanvas3 = 0;
  
    //Painting Puzzle variables
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
  
  //Kitchen Right Variables
  SCanvas4 = 0;
  
  LightLock = false;
  Room = 0;
  KeyScore = 0;
  
  FridgeScore = 0;
  
  //Combination variables
  A = 1;
  B = 1;
  C = 1;
 
  HALTA = false;
  HALTB = false;
 
  HALTC = false;
  HALTD = false;
 
  HALTE = false;
  HALTF = false;
  
  ARROWLOCK = false;
  
  //Final Puzzle Requirements
    //If these variables aren't met, the final puzzle can't be done.
  FINALFACE = 0;
  FINALFRIDGE = 0;
}
 
function draw()
{  
  //I must hide the sliders for the other canvases.
  if (canvas == 1)
  {
    canvas1();
    Number1.hide();
    Number2.hide();
    Number3.hide();
    
    selectionBox.hide();
    selectionBox2.hide();
    selectionBox3.hide();
    selectionBox4.hide();
  }
  
  else if (canvas == 2)
  {
    canvas2();
    Number1.hide();
    Number2.hide();
    Number3.hide();
    
    if (SCanvas2 == 1)
    {
      Number1.show();
      Number2.show();
      Number3.show();
    }
    
    else if (SCanvas2 == 3)
    {
      selectionBox.show();
      selectionBox2.show();
      selectionBox3.show();
      selectionBox4.show();
    }
  }
  
  else if (canvas == 3)
  {
    canvas3();
    Number1.hide();
    Number2.hide();
    Number3.hide();
    
    selectionBox.hide();
    selectionBox2.hide();
    selectionBox3.hide();
    selectionBox4.hide();
  }
  
  else if (canvas == 4)
  {
    canvas4();
    Number1.hide();
    Number2.hide();
    Number3.hide();
    
    selectionBox.hide();
    selectionBox2.hide();
    selectionBox3.hide();
    selectionBox4.hide();
  }
  
  else if (canvas == 5)
  {
    canvas5();
    Number1.hide();
    Number2.hide();
    Number3.hide();
 
    selectionBox.hide();
    selectionBox2.hide();
    selectionBox3.hide();
    selectionBox4.hide(); 
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
  
  //This is the basic image. 
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
      //After lockpiano becomes 1, the piano won't be selectable anymore. This is to indicate progress has been made.
    if (mouseX > 580 && mouseY > 270 && mouseY < 500 && LOCKPIANO == 0)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        SCanvas1 = 1;
      }
    }
    
    //This is the panel that hides the painting piece needed to solve the painting puzzle.
    if (Panel == 1)
    {
      if (FaceScore == 0)
      {
      fill(121,83,23);
      rect(525,225,60,60)
      fill(0,0,0);
      rect(530,230,50,50);
        
      fill(255,255,255);
      text("3ω",548,260);
        
      image(Middle_Middle,535,235,40,40);
      
      if (mouseX > 535 && mouseX < 535+40 && mouseY > 235 && mouseY < 235+40)
      {
        cursor(HAND);
        
        if (mouseIsPressed == true)
        {
          fill(121,83,23);
          rect(525,225,60,60)
          fill(0,0,0);
          rect(530,230,50,50);
          FaceScore = 1;
        }
      }
      }
      
      //Once the painting piece is taken, the panel in the wall should still exist.
      else if (FaceScore == 1)
      {
        fill(121,83,23);
        rect(525,225,60,60)
        fill(0,0,0);
        rect(530,230,50,50);
        
        fill(255,255,255);
        text("3ω",548,260);
      }
    }
    
    //This is one of the three numbers needed to solve the fridge combination puzzle. It is hard to see to make the puzzle a little more difficult.
    image(Number_5,225,10,50,75)
  }
  
  //Piano Puzzle 
    //Only the correct keys are actually given a dark highlight once clicked on. However, the other keys are made clickable options in order to confuse the play as much as possible. It is conceivable that the player does figure out the answer to the puzzle on their own through forcing their way through if they notice only F, A, C, and E light up. However, they still need to solve the fridge puzzle in order to move on to the final puzzle, which is the purpose of FINALFACE and FINALFRIDGE.
  if (SCanvas1 == 1)
  {
    fill(255,255,255);
    text(WORD,115,300);
    image(Keyboard,50,310,700,240);
    
    //F Key
    if (mouseX > 195 && mouseX < 195 + (140/3) && mouseY > 455 && mouseY < 455 + 80 || mouseX > 195 && mouseX < 228 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(FKey,45,310,707,242);
        WORD = WORD + "F";
        LOCKW = true;
        WORDF = 1;
      }
    }
    
    //A Key
    if (mouseX > 195 + (280/3) && mouseX < 195 + 140 && mouseY > 455 && mouseY < 455 + 80 || mouseX > 302 && mouseX < 195 + (280/3) + 30 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(AKey,50,316,698,230);
        WORD = WORD + "A";
        LOCKW = true;
        WORDA = 1;
      }
    }
    
    //C Key
    if (mouseX > 55 && mouseX < 55 + (140/3) && mouseY > 455 && mouseY < 455 + 80 || mouseX > 55 && mouseX < 55 + (140/3) - 15 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(CKey,50,310,700,235);
        WORD = WORD + "C";
        LOCKW = true;
        WORDC = 1;
      }
    }
    
    //E Key
    if (mouseX > 55 + (280/3) && mouseX < 195 && mouseY > 455 && mouseY < 455 + 80 || mouseX > 55 + (280/3) + 15 && mouseX < 195 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        image(EKey,50,312,700,238);
        WORD = WORD + "E";
        LOCKW = true;
        WORDE = 1;
      }
    }
    
  //Fake Keys - Meant to throw off the player, since the keys do work. However, they do not light up when selected. This is only known if the player clicks on every key. In addition, we prevented players from selecting the upper keys as answer. For instance, they can't select F, A, E, and the Upper C key. They must select the first C key. This was done by using WORDF, WORDA, WORDC, and WORDE. Only when these variables equal 1 does the puzzle become complete. Pressing other keys that don't make these variables 1 won't work, and the puzzle won't be solved.
    
    //Fake D
    if (mouseX > 55+(140/3) && mouseX < 55+(280/3) && mouseY > 455 && mouseY < 455+80 || mouseX > 55+ (140/3)+15 && mouseX < 55+ (140/3)+30 && mouseY > 316 && mouseY < 316+145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "D";
        LOCKW = true;
      }
    }
    
    //Fake G
    if (mouseX > 195+(140/3) && mouseX < 195+(280/3) && mouseY > 455 && mouseY < 455+80 || mouseX > 195+(140/3)+15 && mouseX < 195+ (140/3)+30 && mouseY > 316 && mouseY < 316+145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "G";
        LOCKW = true;
      }
    }
    
    //Fake B
    if (mouseX > 195+140 && mouseX < 195+140+(140/3)-4 && mouseY > 455 && mouseY < 455 + 80 || mouseX > 195+140+15 && mouseX < 195+140+(140/3)-4 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "B";
        LOCKW = true;
      }
    }
    
    //Fake Upper C
    if (mouseX > 335+(140/3)-4 && mouseX < 335+(280/3)-4 && mouseY > 455 && mouseY < 455 + 80 || mouseX > 335+(140/3)-4 && mouseX < 335+(280/3)-19 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "C";
        LOCKW = true;
      }
    }
    
    //Fake Upper D
    
    if (mouseX > 335+(280/3)-4 && mouseX < 195+280-4 && mouseY > 455 && mouseY < 455 + 80 || mouseX > 335+(280/3)+13 && mouseX < 335+(280/3)+26 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "D";
        LOCKW = true;
      }
    }
    
    //Fake Upper E
    
    if (mouseX > 475-5 && mouseX < 475+(140/3)-5 && mouseY > 455 && mouseY < 455+80 || mouseX > 475+10 && mouseX < 475+(140/3)-5 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "E";
        LOCKW = true;
      }
    }
    
    //Fake Upper F
    
    if (mouseX > 475+(140/3)-5 && mouseX < 475+(280/3)-7 && mouseY > 455 && mouseY < 455+80 || mouseX > 475+(140/3)-5 && mouseX < 475+(140/3)+25 && mouseY > 316 && mouseY < 316 + 145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "F";
        LOCKW = true;
      }
    }
    
    //Fake Upper G
    
    if (mouseX > 475+(280/3)-6 && mouseX < 615-6 && mouseY > 455 && mouseY < 455+80 || mouseX > 475+(280/3)+10 && mouseX < 475+(280/3)+25 && mouseY > 316 && mouseY < 316+145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "G";
        LOCKW = true;
      }
    }
    
    //Fake Upper A
    
    if (mouseX > 615-6 && mouseX < 615+(140/3)-7 && mouseY > 455 && mouseY < 455+80 || mouseX > 615+10 && mouseX < 615+25 && mouseY > 316 && mouseY < 316+145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "A";
        LOCKW = true;
      }
    }
    
    //Fake Upper B
    
    if (mouseX > 615+(140/3)-5 && mouseX < 615+(280/3)-8 && mouseY > 455 && mouseY < 455+80 || mouseX > 615+(140/3)+10 && mouseX < 615+(280/3)-8 && mouseY > 316 && mouseY < 316+145)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "B";
        LOCKW = true;
      }
    }
    
    //Fake Upper Upper C
    
    if (mouseX > 615+(280/3)-6 && mouseX < 755-7 && mouseY > 316 && mouseY < 455+80)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && LOCKW == false)
      {
        WORD = WORD + "C";
        LOCKW = true;
      }
    }
    
    //Submit Button
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
        
        //An issue arose when the player chose the wrong keys, but included the correct FACE letters. For instance, choosing FACEB. This would be incorrect. However, if they chose FAC and Upper E, this would register as correct. This is because the WORD variables became 1 from the original input. To fix this, inputting the wrong answer also reverted all the variables back to 0.
        if (WORD == "FACE" && WORDA == 1 && WORDC == 1 && WORDE == 1 && WORDF == 1)
        {
          SCanvas1 = 0;
          LOCKPIANO = 1;
          Panel = 1;
        }
            
        else if (WORD != "FACE")
        {
          WORD = "";
          WORDA = 0;
          WORDC = 0;
          WORDE = 0;
          WORDF = 0;
        }
        
        else if (WORDA != 1 || WORDC != 1 || WORDE != 1 || WORDF != 1)
        {
          WORD = "";
          WORDA = 0;
          WORDC = 0;
          WORDE = 0;
          WORDF = 0;
        }
      }
    }
    
    //Exit
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
 
    //The suitcase puzzle is the last puzzle to be solved. CaseLock becoming 2 causes the suitcase to become unclickable, just like the piano puzzle, to show that it is not needed anymore.
    if (mouseX > 585 && mouseX < 585 + 135 && mouseY > 350 && mouseY < 500 && CaseLock == 0 || mouseX > 585 && mouseX < 585 + 135 && mouseY > 350 && mouseY < 500 && CaseLock == 1)
    {
      cursor(HAND);
      
      //This is the original image. The suitcase, once clicked, will lead to the actual puzzle. 
      if (mouseIsPressed == true && CaseLock == 0)
      {
        SCanvas2 = 1;
      }
      
      //In this situation, the suitcase puzzle has been solved. Now, clicking the suitcase will bypass the puzzle section and lead straight to the open suitcase, in the event that the player didn't take one of the glass shards.
      if (mouseIsPressed == true && CaseLock == 1)
      {
        SCanvas2 = 2;  
      }
    }
    
    //This is the final puzzle. In order for the player to solve this puzzle, they must have completed every other puzzle. To do this, the variables below only become 1 once the other puzzles are solved. If one of them isn't 1, the player can't move on to the final puzzle.
    if (mouseX > 400 && mouseX < 475 && mouseY > 180 && mouseY < 340)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && GlassScore == 1 && FINALFACE == 1 && FINALFRIDGE == 1 && GlassLock == false)
      {
        SCanvas2 = 3;
        
        //This causes the glass shard to disappear from the inventory.
        GlassScore = 2;
        GlassLock = true;
      }
    }
    
    //This is the second number for the fridge puzzle. Again, it is relatively difficult to see, but easy enough that it isn't impossible.
    image(Number_8,103,300,50,75)
    
    Inventory();
  }
  
  //Suitcase Puzzle
  if (SCanvas2 == 1)
  {
    
  Slider();
  
  //The design team didn't provide an image where the suitcase is closed, so instead the slider puzzle appears in the top right corner of the canvas. Either way, the puzzle works just fine.
  Number1.show();
  Number2.show();
  Number3.show();
    
    image(Down_Arrow,350,510,100,80);
 
    if (mouseX > 350 && mouseX < 350 + 100 && mouseY > 510 && mouseY < 510 + 80)
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
    
    //This is to provide variety for the player. Maybe they want the right shard, or the left. Maybe they're boring, and want the middle one. Either way, they are all the same.
    if (mouseX > 450 && mouseX < 450+36 && mouseY > 290 && mouseY < 290+30 || mouseX > 410 && mouseX < 410+35 && mouseY > 305 && mouseY < 305+30 || mouseX > 485 && mouseX < 485+40 && mouseY > 310 && mouseY < 310+25)
    {
      cursor(HAND);
      
      //An issue arose where by clicking one of the glass shards, and having completed every other puzzle, this goes straight on to the final puzzle. This was because the shard is on the same area as the teddy bear, so clicking on it leads to the final puzzle. A lock was neded to prevent this.
      if (mouseIsPressed == true && GlassLock == false)
      {
        //One of the conditions needed to do the final puzzle.
        GlassScore = 1;
        SCanvas2 = 0;
        CaseLock = 2;
        GlassLock = true;
      }
    }
    
    image(Down_Arrow,425,500,100,80);
 
    if (mouseX > 425 && mouseX < 425 + 100 && mouseY > 500 && mouseY < 500 + 80)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true)
      {
        SCanvas2 = 0;
      }
    }
  }
  
  //Final Puzzle. In fact, most of the final puzzle is the function Stretchbox and showResult, coded by Taku. Therefore, there isn't must else to put here.
  if (SCanvas2 == 3)
  {
    image(Teddy_Bear,0,0,800,600);
    
    Stretchbox();
    showResult();
  }
}
 
function canvas3()
{
  //Since there were only three areas made, the bedroom, living room, and kitchen, we decided to split the kitchen into left and right halves, since the design team also created multiple perspectives.
  background(Kitchen_L);
  fill(255,255,255);
  cursor(ARROW);
 
  //Base image
  if (SCanvas3 == 0)
  {
  
    //Scroll Right
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
 
    //Scroll Left
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
    
    //The painting puzzle. My personal favorite. This puzzle is unsolvable unless the piano puzzle is solved, which should only be solvable once the fridge puzzle is solved. Therefore, this is one of the final puzzles, and provides the crucial answer to the suitcase puzzle.
    if (mouseX > 280 && mouseX < 350 && mouseY > 90 && mouseY < 190)
    {
      cursor(HAND); 
      
      if (mouseIsPressed == true)
      {
        SCanvas3 = 1;
      }
    }
    
    //The final number for the fridge combination puzzle. This is actually easy to see. This is so that in case the player hasn't noticed these numbers yet, they will realize that there might be others, and start looking.
    image(Number_6,700,215,50,75)
    
    //Inventory. The inventory is only viewable in the base image.
    Inventory();
  }
  
  if (SCanvas3 == 1)
  { //Start of SCanvas3 == 1
  
  //The various pieces are treated as separate images in order for the puzzle to work.
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
    //The way this puzzle works is that it has 8 steps, each in numberical order under the variable BOX. The pieces move in one direction, clockwise, and move one piece at a time. So the top right piece replaces the top middle piece, and so on. This is within one BOX condition. However, once those pieces exceed those variable, so the top right piece goes too far right, BOX increases by 1. This continues until the pieces return to their original positions, and then they continue.
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
 
    //This causes the entire cycle to continue forever. Only by getting the final piece does the puzzle stop.
    if (BBB < 119 && CCC > 199+133 && EEE > 199+2*133 && HHH > 119+118 && JJJ > 119+2*118 && KKK < 199+133 && MMM < 199+2*133 && PPP < 119+118)
    {
      BOX = 1;
    }
 
    //This can only be accessed if the middle piece is collected. The program knows this through the FaceScore variable, which becomes 1 once the missing piece is picked up.
    if (mouseX > 199+133 && mouseX < 199+2*133 && mouseY > 119+118 && mouseY < 119+2*118 && FaceScore == 1)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        BOX = 9;
        
        //This causes the missing piece to disappear from the inventory.
        FaceScore = 2;
        FINALFACE = 1;
        
        fill(0,0,0)
        text("4ξ",400,15);
      }
    }
 
    //This is the intended image of the painting, only found once the puzzle is complete. The pieces return to their intended positions, and the missing piece is returned to its rightful place.
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
      
      //This is the code needed to solve the suitcase puzzle. Although the numbers aren't random (it is pi), they shouldn't be obvious. So this painting puzzle is necessary to solve the suitcase puzzle.
      
      image(Number_3,650,230,25,40);
      image(Number_1,700,230,25,40);
      image(Number_4,745,230,30,40);
      
      fill(0,0,0)
      text("4ξ",400,15);
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
  }
}
 
function canvas4()
{
  background(Kitchen_R_O);
  fill(255,255,255);
  cursor(ARROW);
  
  if (SCanvas4 == 0)
  {
    //I coded this so that the inventory is only accessable when the whole right kitchen is being viewed, or when the fridge puzzle is being done. Anything else seemed too packed together.
    Inventory();
    
    //Scroll Left
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
      //This is just an image of the bottles when the lights are on. Nothing can be done, since the player doesn't know which bottle to smash, so there is nothing to be selected. This is to hint to the player that the bottles are important, but not right now.
    if (mouseX > 80 && mouseX < 160 && mouseY > 275 && mouseY < 275 + 50 && KeyScore == 0)
    {
      cursor(HAND);
      
       if (mouseIsPressed == true)
       {
         SCanvas4 = 1;
       }
    }
    
    //Lights
      //These lights are to switch from the dark kitchen to the light kitchen. The KeyScore variable is for when the key is finally found. Initially 0, there is no issue. However, once the key is found the variable becomes 1, prevented any further switching between light and dark, keeping the kitchen in the light. This causes it so that the lightswitch can no longer be accessed. This is, again, another form of progression in the game.
    if (mouseX > 622 && mouseX < 635 && mouseY > 250 && mouseY < 275 && KeyScore == 0)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true && KeyScore == 0)
      {
        SCanvas4 = 2;
      }
    }
    
    //Fridge
      //At this point, FridgeScore is 0. This means that the fridge puzzle hasn't been solved, yet. However, once FridgeScore is 1, which is when the puzzle is solved, the player goes straight to the open fridge image. This is to show progression.
    if (mouseX > 640 && mouseX < 770 && mouseY > 160 && mouseY < 530)
    {
      cursor(HAND);
      
      //Fridge is still closed
      if (mouseIsPressed == true && FridgeScore == 0)
      {
        SCanvas4 = 6;
      }
      
      //Fridge is open.
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
    
    //Exit
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
      
      //The use of Light Lock is to to limit Room. Without it, one click of the lightswitch could make Room equal 11. Therefore, LgihtLock makes it so that the variable increases and decreases once per click. The use of the Room variable is to provide consistency in the game for the dark kitchen and the light kitchen.
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
    
    //Exit
    image(Down_Arrow,500,340,120,100);
 
    if (mouseX > 500 && mouseX < 500 + 120 && mouseY > 340 && mouseY < 340 + 100)
    {
      cursor(HAND);
 
      //If room is 0, then the kitchen must be light. Therefore, when exiting from the lightswitch subcanvas the kitchen will still be light.
      if (mouseIsPressed == true && Room == 0)
      {
        SCanvas4 = 0;
      }
      
      //If room is 1, the kitchen is dark. Exiting from the lightswitch subcanvas will keep the room dark.
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
    
    //Scroll Left. Just because the kitchen is dark, it doesn't mean that the player still can't go to other rooms.
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
    
    //Bottles With Darkness
      //At this point, the player can tell which bottle to smash.
    if (mouseX > 80 && mouseX < 160 && mouseY > 275 && mouseY < 275 + 50)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true)
      {
        SCanvas4 = 4;
      }
    }
    
    //Lightswitch
      //If the players wants to return to the light kitchen, because they're scared of the dark or something, they can do so.
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
    
    //This is straightforward. The bottle that is glowing is the one to smash. This immediately transitions into SCanvas4 = 5.
    if (mouseX > 665 && mouseX < 725 && mouseY > 125 && mouseY < 125+225)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      { 
         SCanvas4 = 5;
      }
    }
    
    //Leave
      //If the player is spooked by the colors, they can leave if they wish.
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
    //Here, the key is accessable. The player just needs to click on it to have it enter their inventory.
  if (SCanvas4 == 5)
  {
    
    Inventory();
 
    image(Sink,0,0,800,600);
    
    if (mouseX > 545 && mouseX < 545+32 && mouseY > 348 && mouseY < 348+32)
    {
      cursor(HAND);
      
      if (mouseIsPressed == true)
      {
        //Clicking on the key immediately brings the player back to the light kitchen, because the dark kitchen has no more use.
        SCanvas4 = 0;
        //This causes the key to enter the inventory.
        KeyScore = 1;
      }
    }
  }
  
  //Closed Fridge
  if (SCanvas4 == 6)
  {
    image(Fridge_C,0,0,800,600);
    
    Inventory();
    
    //Exit.
    image(Down_Arrow,630,500,90,85);
 
    if (mouseX > 630 && mouseX < 630 + 90 && mouseY > 500 && mouseY < 500 + 85)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true)
      {
        SCanvas4 = 0;
      }
    }
    
    //If the player has the key, then they can move on to the fridge puzzle. Without it, this is impossible. However, the key isn't consumed yet, because the puzzle hasn't been solved at this point.
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
    
    //The main component of this subunit is the Combination function, which is below.
    Combination();
    
    //Exit
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
  
  //Opened fridge.
  if (SCanvas4 == 8)
  {
    image(Fridge_O,0,0,800,600);
    Inventory();
    image(Small_Note,525,260,25,25);
    
    //Very straightforward, just click on the little post-it note to enlarge the image and get the piano clue.
    if (mouseX > 525 && mouseX < 525+25 && mouseY > 260 && mouseY < 260+25)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        SCanvas4 = 9;
      }
    }
    
    fill(0,0,0);
    text("1ε",590,490);
        
    //Exit
    image(Down_Arrow,630,500,90,85);
 
    if (mouseX > 630 && mouseX < 630+90 && mouseY > 500 && mouseY < 500+85)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && ARROWLOCK == false)
      {
        SCanvas4 = 0;
        ARROWLOCK = true;
      }
    }
    
  }
  
  //Piano clue - This is the clue to solving the piano puzzle. It makes the answer painfully obvious. This, in combination with how the keys F, A, C, and E all have red fingerprints, should be enough for the player to solve the problem.
  if (SCanvas4 == 9)
  {
    image(Clue,0,0,800,600);
    
    fill(0,0,0);
    text("2Ξ",750,80);
    
    //Exit
    image(Down_Arrow,630,500,90,85);
 
    if (mouseX > 630 && mouseX < 630 + 90 && mouseY > 500 && mouseY < 500 + 85)
    {
      cursor(HAND);
 
      if (mouseIsPressed == true && ARROWLOCK == false)
      {
        SCanvas4 = 8;
        ARROWLOCK = true;
      }
    }
  }
}
 
//By now, it's likely that the player has also noticed the various symbols placed around the canvases once the puzzles are solved. These are the answers to the final puzzle problem. In the event that the player is some hyper genious and solve the puzzles out-of-order, the numbers are there to tell the player which order the symbols go in, from left to right.
 
//Hooray, you won. This is all you get. I don't really know what else to give you, but you could play again if you really like. Maybe see how fast you can do the puzzle? Speedchallenge?
function canvas5()
{
  background(255,255,255);
  
  image(Victory_1,0,0,800,600);
  
  image(Victory_2,190,0,431,300);
  
  fill(255,255,255);
  rect(350,300,100,40);
  fill(0,0,0);
  text("Replay?",380,322);
  
  if (mouseX > 350 && mouseX < 350+100 && mouseY > 300 && mouseY < 300+40)
  {
    fill(200,200,200);
    rect(350,300,100,40);
    fill(0,0,0);
    text("Replay?",380,322);
    
    //Clicking this will cause the entire puzzle to reset to the original bedroom. The initial variables are all here to reset everything the player has done so far. 
    if (mouseIsPressed == true)
    {
      fill(255,255,255);
      rect(350,300,100,40);
      fill(0,0,0);
      text("Replay?",380,322);
      
      createCanvas(800,600);
 
      Right = false;
      Left = false;
 
      //Bedroom
      canvas = 1;
 
      SCanvas1 = 0;
      WORD = "";
      LOCKW = false;
      LOCKPIANO = 0;
 
      Panel = 0;
      FaceScore = 0;
 
      WORDA = 0;
      WORDC = 0;
      WORDE = 0;
      WORDF = 0;
 
      //Living Room
      SCanvas2 = 0;
 
      //Suitcase Puzzle
      Number1 = createSlider(0,9,0);
      Number1.position(650,150);
 
      Number2 = createSlider(0,9,0);
      Number2.position(650,200);
 
      Number3 = createSlider(0,9,0);
      Number3.position(650,250);
 
      CaseLock = 0;
      GlassScore = 0;
      GlassLock = false;
 
      //Final Puzzle
 
      selectionBox = createSelect();
      selectionBox.option("α");
      selectionBox.option("ε");
      selectionBox.position(515-380,490);
      selectionBox.size(50,10);
 
      selectionBox2 = createSelect();
      selectionBox2.option("Φ");
      selectionBox2.option("Ψ");
      selectionBox2.option("Ξ");
      selectionBox2.position(515-280,490);
      selectionBox2.size(50,10);
 
      selectionBox3 = createSelect();
      selectionBox3.option("δ");
      selectionBox3.option("ω");
      selectionBox3.position(515-180,490);
      selectionBox3.size(50,10);
 
      selectionBox4 = createSelect();
      selectionBox4.option("η");
      selectionBox4.option("ξ");
      selectionBox4.position(515-80,490);
      selectionBox4.size(50,10);
 
      stateOfBox = 1;
 
      L = 50;
      BOMB = 375;
      Growth = 0;
 
      BOMB2 = 375
      L2 = 50;
 
      BOMB3 = 375
      L3 = 50;
 
      //Left Kitchen
      SCanvas3 = 0;
 
      //Painting Puzzle
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
 
      ARROWLOCK = false;
 
      FINALFACE = 0;
      FINALFRIDGE = 0;
    }
  }
}
 
function Combination()
{
  //For this combination puzzle, the standard lock and variable rules apply. In order to keep variables from increasing too much, locks are in place so that they only increase by 1. Every button has this.
  
  //Input 1
  //Toggle Up 1. 
 
  fill(150,150,150);
  rect(300,349,20,20);
 
  if (mouseX > 300 && mouseX < 300+20 && mouseY > 349 && mouseY < 349+20)
  {
    fill(200,200,200);
    rect(300,349,20,20);
 
    if (mouseIsPressed == true && HALTA == false)
    {
      fill(250,250,250);
      rect(300,349,20,20);
      HALTA = true;
 
      A = A + 1;
    }
  }
 
  //Number 1
 
  fill(213,213,206);
  rect(280,384,60,60);
 
  fill(0,0,0);
  text(+A,308,418);
 
  //Toggle Down 1
 
  fill(150,150,150);
  rect(300,459,20,20);
 
  if (mouseX > 300 && mouseX < 300+20 && mouseY > 459 && mouseY < 459+20)
  {
    fill(200,200,200);
    rect(300,459,20,20);
 
    if (mouseIsPressed == true && HALTB == false)
    {
      fill(250,250,250);
      rect(300,459,20,20);
      HALTB = true;
 
      A = A - 1;
    }
  }
 
  //This condition causes the number to never exceed 9 or go below 0. Therefore, it becomes cyclical. Like a normal lock.
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
 
  fill(213,213,206);
  rect(370,384,60,60);
 
  fill(0,0,0);
  text(+B,398,418);
 
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
  
  //This condition causes the number to never exceed 9 or go below 0. Therefore, it becomes cyclical. Like a normal lock.
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
  rect(480,349,20,20);
 
  if (mouseX > 480 && mouseX < 480+20 && mouseY > 349 && mouseY < 349+20)
  {
    fill(200,200,200);
    rect(480,349,20,20);
 
    if (mouseIsPressed == true && HALTE == false)
    {
      fill(250,250,250);
      rect(480,349,20,20);
      HALTE = true;
 
      C = C + 1;
    }
  }
 
  //Number 3
 
  fill(205,205,200);
  rect(460,384,60,60);
 
  fill(0,0,0);
  text(+C,488,418);
 
  //Toggle Down 3
 
  fill(150,150,150);
  rect(480,459,20,20);
 
  if (mouseX > 480 && mouseX < 480+20 && mouseY > 459 && mouseY < 459+20)
  {
    fill(200,200,200);
    rect(480,459,20,20);
 
    if (mouseIsPressed == true && HALTF == false)
    {
      fill(250,250,250);
      rect(480,459,20,20);
      HALTF = true;
 
      C = C - 1;
    }
  }
 
  //This condition causes the number to never exceed 9 or go below 0. Therefore, it becomes cyclical. Like a normal lock.
  if (C > 9)
  {
    C = 0;
  }
 
  if (C < 0)
  {
    C = 9;
  }
 
  //This is the solution to the puzzle.
  if (A == 5 && B == 8 && C == 6)
  {
    fill(0,0,0);
    
    //This causes the key to disappear from the inventory, as the puzzle is solved.
    KeyScore = 2;
    
    //This moves the subcanvas to the open fridge subcanvas.
    SCanvas4 = 8;
    
    //This makes it so that clicking on the fridge when SCanva4 = 0 leads straight to the open fridge.
    FridgeScore = 1;
    
    //An issue occurred when clicking the exit key on SCanvas4 = 9. It immediately led to to SCanvas4 = 0. This is because the exit key for SCanvas4 = 9 is the same for SCanvas4 = 8. This is the same problem as the suitcase glass shard and the teddy bear. Therefore, it can be fixed by using a lock.
    ARROWLOCK = false;
    
    //This is one of the variables needed to access the final puzzle.
    FINALFRIDGE = 1;
  }
}
 
function Slider()
{
  //SLIDER PUZZLE
 
  fill(255,255,255);
 
  //The sliders are hidden in every other canvas and subcanvas for consistency and clarity. For the puzzle itself, simply inputting the correct numbers is enough.
  text(+Number1.value(),705,65);
 
  text(+Number2.value(),705,115);
 
  text(+Number3.value(),705,165);
 
  //This is to slow down the pace. If there was no submit buttom, the puzzle would immediately switch to the open suicase subcanvas, which is too suddent.
  
  fill(255,255,255);
  rect(680,20,60,20);
  fill(0,0,0);
  text("Enter",697,35);
 
  if (mouseX > 680 && mouseX < 680+60 && mouseY > 20 && mouseY < 20+20)
  {
    fill(200,200,200);
    rect(680,20,60,20);
    fill(0,0,0);
    text("Enter",697,35);
 
    if (mouseIsPressed == true)
    {
      fill(150,150,150);
      rect(680,20,60,20);
      fill(0,0,0);
      text("Enter",697,35);
 
      if (Number1.value() == 3 && Number2.value() == 1 && Number3.value() == 4)
      {
        fill(0,255,0);
        rect(250,362.5,100,25);
        fill(0,0,0);
        text("Enter",285,380);
        
        SCanvas2 = 2;
        
        //CaseLock becoming 1 means that clicking on the suitcase will skip the puzzle directly to the open suitcase.
        CaseLock = 1;
      }
    }
  }
}
 
//This is the primary function needed for the final puzzle. It isn't actually difficult. It is more a test of whether the player has paid attention to the variosu symbosl appearing throughout the game.
function Stretchbox()
{
  fill(255,0,0);
  rect(515,BOMB,50,L);
 
  fill(255,0,0);
  rect(515+85,BOMB2,50,L2);
 
  fill(255,0,0);
  rect(515+180,BOMB3,50,L3);
 
  if (selectionBox.value() == "ε" && selectionBox2.value() == "Ξ" && selectionBox3.value() == "ω" && 
      selectionBox4.value() == "ξ" ) 
  {
    Growth = 1;
  }
 
  //The Growth variable is to serve as a way of making the bars seem like gauges. Once the correct symbols are chosen, the bars will increase up to a point, which is stopped by the below conditions, and enter Growth = 2.
  if (Growth == 1)
  {
    L = L + 1;
    BOMB = BOMB - 1
 
    L2 = L2 + 1;
    BOMB2 = BOMB2 -1 
 
    L3 = L3 + 1;
    BOMB3 = BOMB3 -1
 
    if (L > 160 && BOMB < 260 && L2 > 160 && BOMB2 < 260 && L3 > 160 && BOMB3 <260)
    {
      Growth = 2
    }
  }
 
  //These are the final positions for the gauges. Once the gauges reach their maximum, the game is won.
  if (Growth == 2)
  {
    fill(0,255,0)
    L = 165;
    BOMB = 260
    rect(515,BOMB,50,L);
 
    L2 = 165;
    BOMB2 = 260
    rect(515+85,BOMB2,50,L2);
 
    L3 = 165;
    BOMB3 = 260
    rect(515+180,BOMB3,50,L3);
    
    canvas = 5;
  }
}
 
//This is text for the puzzle.
function showResult()
{
 
  fill(255,255,255);
  text("Gas level",515,250);
  fill(255,255,255);
  text("Oxygen level",515+70,250);
  fill(255,255,255);
  text("Methane level",515+170,250);
  fill(255,255,255);
  text("50%-",515-30,345);
  fill(255,255,255);
  text("100%-",515-40,265);
 
  // bomb 
 
  //Selecting the right answer creates a green rectangle to show the correct answer has been selected
  if(selectionBox.value() == "ε")
  {
    fill(88,214,0);
    rect(515-390,440,50,90);
  }
  if(selectionBox2.value() == "Ξ")
  {
    fill(88,214,0);
    rect(515-290,440,50,90);
  }
  if(selectionBox3.value() == "ω")
  {
    fill(88,214,0);
    rect(515-190,440,50,90);
  }
  if(selectionBox4.value() == "ξ")
  {
    fill(88,214,0);
    rect(515-90,440,50,90);
  }
} 
 
//These are the various locks that are used to keep variables from going crazy or to keep the exit keys from going out of wack.
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
  
  if (GlassLock)
  {
    GlassLock = false;    
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
  
  if (ARROWLOCK)
  {
    ARROWLOCK = false;
  }
}
 
//This is the inventory function. Here, once the three scores are 1, the player can scroll through the canvases without losing them. This is to create consistency. Once the scores aren't 2, however, the images disappear, appearing as though they've been used up.
function Inventory()
{
  strokeWeight(5);
  fill(90,30,0);
  rect(2,497,280,100);
 
  strokeWeight(5);
  fill(255,255,130);
  rect(10,507,82,80);
  
  if (FaceScore == 1)
  {
    image(Middle_Middle,20,520,60,60)
  }
 
  rect(10+90,507,82,80);
  
  if (GlassScore == 1)
  {
    image(Glass_Shard,110,520,60,60)
  }
 
  rect(10+180,507,83,80);
  
  if (KeyScore == 1)
  {
    image(Key,200,520,60,60);
  }
 
  strokeWeight(1);
}
 
 
