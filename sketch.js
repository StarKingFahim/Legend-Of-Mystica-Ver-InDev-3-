//The Map Parts

var village,villageImg;

var House1,House1Img;

var House2,House2Img;

var Land1,Land1Img;

var Land2,Land2Img;

var Dungeon,DungeonImg;

//

// var villager=[];

var O_Man,O_Woman,Man,Woman,Boy,Girl;

var O_ManImg,O_WomanImg,ManImg,WomanImg,BoyImg,GirlImg;

var Man_idle;

//

//Sound

var villageSound;

//

//Main_Characters

var Adam,Adam_W_UP=[],Adam_W_DOWN=[],Adam_W_RIGHT=[],Adam_W_LEFT=[];


//

//Enemy

var E1;
var snake;


//

//key

var keyImg;

var HasKey=1;
var NoKey=0;

var keycheck=NoKey;


var key1;

//

//GameStates

/*var In_Village=0;
var In_House=1
*/

//var gameState=In_Village;

//triggers

var HouseTrigger1,HouseOutTrigger1;

var HouseTrigger2,HouseOutTrigger2;

var DungeonTriger,DungeonOutTriger;

//

//Barriers

var Borders=[];
var B1,B2,B3,B4,B5,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16,B17,B18,B19,B20,B21,B22,B23,B24,B25,B26,B27,B28,B29,B30,B31,B32,B33,B34,B35,B36,B37,B38,B39,B40,B41,B42,B43,B44,B45,B46,B47,B48,B49,B50;

var D1,D2,D3,D4,D5,D6,D7,D8,D9,D10;

//

//Dialogue.


var Dia1,Dia2,Dia3,Dia4;

var Dia1Img,Dia2Img,Dia3Img,Dia4Img;




//
function preload()
{
  villageImg=loadImage("Maps Made/Original Map Ver.2.png");
  
  House1Img=loadImage("Maps Made/House Inside 1.png");
  
  House2Img=loadImage("Maps Made/House Inside 2.png");

  Land1Img=loadImage("Maps Made/Landscape 1 Ver.1.png");

  Land2Img=loadImage("Maps Made/Landscape 2 Ver.1.png");

  DungeonImg=loadImage("Maps Made/Tutorial Dungeon.png");
  
  O_ManImg = loadImage("NPC and PC/Villagers/1 Old_man/Old_man.png");
  O_WomanImg = loadImage("NPC and PC/Villagers/2 Old_woman/Old_woman.png");
  
  ManImg = loadImage("NPC and PC/Villagers/3 Man/Man.png");
  
  Man_idle = loadAnimation("NPC and PC/Villagers/3 Man/Man_Idle/I1.png","NPC and PC/Villagers/3 Man/Man_Idle/I2.png","NPC and PC/Villagers/3 Man/Man_Idle/I3.png","NPC and PC/Villagers/3 Man/Man_Idle/I4.png");
  
  Man_walk = loadAnimation("NPC and PC/Villagers/3 Man/Man_Walk/W1.png","NPC and PC/Villagers/3 Man/Man_Walk/W2.png","NPC and PC/Villagers/3 Man/Man_Walk/W3.png","NPC and PC/Villagers/3 Man/Man_Walk/W4.png","NPC and PC/Villagers/3 Man/Man_Walk/W5.png","NPC and PC/Villagers/3 Man/Man_Walk/W6.png");

  WomanImg =loadImage("NPC and PC/Villagers/4 Woman/Woman.png");

  BoyImg = loadImage("NPC and PC/Villagers/5 Boy/Boy.png");
  GirlImg =loadImage("NPC and PC/Villagers/6 Girl/Girl.png");
 
  villageSound = new Audio("Sound Tracks/Calm village.wav");

  DungeonSound = new Audio("Sound Tracks/Treachery afoot.wav");

  keyImg=loadImage("Kickpixel's - RPG Icons/key.png");
  
  
  //Main Characters

  Adam = loadImage("Main Characters/Adam_Walking/Adam (19).png");
//



//ENEMIES

snake= loadImage("NPC and PC/Enemy Class/1 Snake/Snake.png");

//

  for(var i= 0;i<9;i++)
  {
  Adam_W_UP[(i+1)] = loadImage("Main Characters/Adam_Walking/Adam ("+(i+1)+").png");
  }
  for(var i= 9;i<18;i++)
  {
  Adam_W_LEFT[(i+1)] = loadImage("Main Characters/Adam_Walking/Adam ("+(i+1)+").png");
  }
  for(var i= 18;i<27;i++)
  {
  Adam_W_DOWN[(i+1)] = loadImage("Main Characters/Adam_Walking/Adam ("+(i+1)+").png");
  }
  for(var i= 27;i<36;i++)
  {
  Adam_W_RIGHT[(i+1)] = loadImage("Main Characters/Adam_Walking/Adam ("+(i+1)+").png");
  }
  

  
  
  
  //All THE CHARACTERS //

  //Dialogue

  Dia1Img=loadImage("Text System/Finallized/Help.jpeg");
  Dia2Img=loadImage("Text System/Finallized/Dungeon Clue 1.jpeg");
  Dia3Img=loadImage("Text System/Finallized/Dungeon Clue 2.jpg");
  Dia4Img=loadImage("Text System/Finallized/Dungeon.jpg");
  Dia5Img=loadImage("Text System/Finallized/End.jpg");


  //
}

function setup()
{
//console.log(displayWidth,displayHeight);

 canvas = createCanvas(displayWidth,displayHeight);
  
 village=createSprite(displayWidth/2,displayHeight/2,displayWidth*2,displayHeight*2)
 // image(villageImg,0,displayHeight*4,displayWidth,displayHeight*2);

 village.addImage(villageImg);
 village.scale=5.30;
 village.depth=1;


 House=createSprite(displayWidth+8080,displayHeight+8920,10,10);
 House.addImage(House1Img);
 House.scale=3;
 House.depth=1; 

 House2=createSprite(displayWidth+13080,displayHeight+8920,10,10);
 House2.addImage(House2Img);
 House2.scale=3;
 House2.depth=1; 

 Dungeon=createSprite(displayWidth+18080,displayHeight+8920,10,10);
 Dungeon.addImage(DungeonImg);
 Dungeon.scale=6;
 Dungeon.depth=1; 


 Land1=createSprite(displayWidth/2,displayHeight-4770,displayWidth*2,displayHeight*2);
 Land1.addImage(Land1Img);
 Land1.scale=5.30;
 Land1.depth=0;

 Land2=createSprite(displayWidth+4970,displayHeight/2,displayWidth*2,displayHeight*2);
 Land2.addImage(Land2Img);
 Land2.scale=5.30;
 Land2.depth=0;

//MAIN CHARACTERS

//Adam=createSprite(300,300,15,30);
//Adam.setAnimation("");


//



//KEY

key1=createSprite(displayWidth+15990 ,displayHeight+6800,1,1)
key1.addImage(keyImg);
key1.depth=2;
key1.scale=3;
key1.rotationSpeed = 10;

//console.log(key1.x,key1.y);


//

//Enemy

  E1= createSprite(displayWidth+18150, displayHeight+10780,10,1); 
  E1.addImage(snake);
  E1.scale=4;
  //E1.lifetime=200;
  //E1.depth=1;
  //E1.debug=true; 
  E1.setCollider("rectangle",10,15,30,20);


//
 //displayWidth+8080,displayHeight+8920


 //villager.push(O_Man,O_Woman,Man,Woman,Boy,Girl)


 O_Man=createSprite(displayWidth-1720,displayHeight-780,100,100);
 O_Man.addImage(O_ManImg);
 O_Man.scale=5;
 O_Man.depth=2;
 //O_Man.wander();

 O_Woman=createSprite(displayWidth-1420,displayHeight-680,100,100);
 O_Woman.addImage(O_WomanImg);
 O_Woman.scale=5;
 O_Woman.depth=2;

 Man=createSprite(displayWidth-1560 ,displayHeight-2110,15,30);//21690,11860,15,30//
 //Man.setAnimation(Man_idle);
 Man.velocityY=0;
 Man.scale=5;
 Man.depth=2;
 Man.setCollider("rectangle",-10, 5,18,40);
 //Man.debug=true;


 Woman=createSprite(displayWidth-820,displayHeight-1340,100,100);
 Woman.addImage(WomanImg);
 Woman.scale=5;
 Woman.depth=2;

 Boy=createSprite(displayWidth-1780,displayHeight-1720,100,100);
 Boy.addImage(BoyImg);
 Boy.scale=5;
 Boy.depth=2;

 Girl=createSprite(displayWidth-1580,displayHeight-220,100,100);
 Girl.addImage(GirlImg);
 Girl.scale=5;
 Girl.depth=2;


 //Triggers

 HouseTrigger1=createSprite(displayWidth-580,displayHeight-1000,400,10);
 HouseTrigger1.visible=false;

 HouseOutTrigger1=createSprite(displayWidth+8040,displayHeight+10170,1000,10);
 HouseOutTrigger1.visible=false;
//

 HouseTrigger2=createSprite(displayWidth+7130,displayHeight+630,200,1);
 HouseTrigger2.visible=false;

 HouseOutTrigger2=createSprite(displayWidth+13010,displayHeight+9470,1,1);
 HouseOutTrigger2.visible=false;

 DungeonTriger=createSprite(displayWidth+11680,displayHeight+9440,1,1);
 DungeonTriger.visible=false;

 DungeonOutTriger=createSprite(displayWidth+18230,displayHeight+8790,10,10);
 DungeonOutTriger.visible=false;


 //

 //Barriers

 B1= createSprite(displayWidth-2403 ,displayHeight-2560,3050,100);
 B1.visible=false;
 //B1.debug=true; 

 B2= createSprite(displayWidth-237 ,displayHeight-2560,700,100);
 B2.visible=false;
 //B2.debug=true; 

 B3= createSprite(displayWidth-2403 ,displayHeight-2860,3050,100);
 B3.visible=false;
 //B3.debug=true; 

 B4= createSprite(displayWidth-237 ,displayHeight-2860,700,100);
 B4.visible=false;
 //B4.debug=true; 

 B5= createSprite(displayWidth-1300 ,displayHeight-2335,125,100);
 B5.visible=false;
 //B5.debug=true; 

 B6= createSprite(displayWidth-870 ,displayHeight-2240,125,100);
 B6.visible=false;
 //B6.debug=true; 

 B6= createSprite(displayWidth-2742.5 ,displayHeight-2135,250,100);
 B6.visible=false;
 //B6.debug=true; 


 B7= createSprite(displayWidth-2195.5 ,displayHeight-2235,350,300);
 B7.visible=false;
 //B7.debug=true; 
 
 B8= createSprite(displayWidth-1164.5 ,displayHeight-1340,350,200);
 B8.visible=false;
 //B8.debug=true; 

 B9= createSprite(displayWidth-1262.5, displayHeight-1840,350,200);
 B9.visible=false;
 //B9.debug=true; 

 B10= createSprite(displayWidth-3460 ,displayHeight-2455,200,200);
 B10.visible=false;
 //B10.debug=true; 

 B11= createSprite(displayWidth-880, displayHeight-1050,200,200);
 B11.visible=false;
 //B11.debug=true; 

 B11= createSprite(displayWidth+18170, displayHeight+11280,5000,100);
 B11.visible=false;
 //B11.debug=true; 

 B12= createSprite(displayWidth+15770, displayHeight+8980,100,5000);
 B12.visible=false;
 B12.debug=true; 

 B13= createSprite(displayWidth+18170, displayHeight+6390,5000,100);
 B13.visible=false;
 //B13.debug=true; 

 B14= createSprite(displayWidth+20490, displayHeight+8980,100,5000);
 B14.visible=false;
 //B14.debug=true; 

 B15= createSprite(displayWidth+17090, displayHeight+8880,10,1600);
 B15.visible=false;
 //B15.debug=true; 

 B16= createSprite(displayWidth+19150, displayHeight+8880,10,1600);
 B16.visible=false;
 //B16.debug=true; 

 B17= createSprite(displayWidth+18120, displayHeight+9590,2100,100);
 B17.visible=false;
 //B17.debug=true; 

 B18= createSprite(displayWidth+17530, displayHeight+8090,900,100);
 B18.visible=false;
 //B18.debug=true; 
 
 B19= createSprite(displayWidth+18680, displayHeight+8090,950,100);
 B19.visible=false;
 //B19.debug=true; 

 B20= createSprite(displayWidth+18100, displayHeight+8090,200,100);
 B20.visible=false;
 //B20.debug=true; 


//Dialogue -

//

 //  

 

 //

}

function draw()
{

  background("black");
 
  console.log(1920-Man.x,1280-Man.y);
  //console.log(frameCount);
  //console.log(Man.x,Man.y);

  if(frameCount===10||keyWentDown("H"))
  {
    Dia1=createSprite(Man.x-300,(Man.y-100),10,10);
    Dia1.addImage(Dia1Img);
    Dia1.scale=1;
    Dia1.lifetime=300;
    
  }



  villageSound.play();
  villageSound.loop = true;


 //  

 
 if(keyWentDown("w"))
  {
    Man.velocityY=-10;
    Man.addAnimation("walk ",Man_walk);
  }
  else if(keyDown("s"))
  {
    Man.velocityY= 10;
    Man.addAnimation("walk2 ",Man_walk);

  }
  else if(keyDown("d"))
  {
    Man.mirrorX(1);
    Man.addAnimation("walk3 ",Man_walk);
    Man.velocityX= 10;
    
  }
  else if(keyDown("a"))
  {
    Man.mirrorX(-1);
    Man.addAnimation("walk4 ",Man_walk);
    Man.velocityX= -10;
    
  }

  if(keyDown("w")&&keyDown("a")) {
    Man.velocityX = -10;
    Man.velocityY = -10;
  }
  if(keyDown("w")&&keyDown("d")) {
    Man.velocityX = 10;
    Man.velocityY = -10;
  }
  if(keyDown("s")&&keyDown("a")) {
    Man.velocityX = -10;
    Man.velocityY = 10;
  }
  if(keyDown("s")&&keyDown("d")) {
    Man.velocityX = 10;
    Man.velocityY = 10;
  }


  
    if(keyWentUp("w"))
    {
      Man.velocityY=0;
    }
    else if(keyWentUp("s"))
    {
      Man.velocityY=0;
    }
    else if(keyWentUp("d"))
    {
      Man.velocityX=0;
      
    }
    else if(keyWentUp("a"))
    {
      Man.velocityX=0;
    }  
    



    if(Man.velocityX===0 && Man.velocityY===0)
    {
     // Man.addAnimation("idle",Man_idle);
    }

  
camera.x=Man.x;
camera.y=Man.y;

  //House Triggers

 if(Man.isTouching(HouseTrigger1))
 {
   //gameState=1;
   Man.scale=6;
   Man.x=9960;
   Man.y=10960;
 }
 if(Man.isTouching(HouseOutTrigger1))
 {
   //gameState=1;
   Man.scale=5;
   Man.x=1370;
   Man.y=230;
 }


 if(Man.isTouching(HouseTrigger2))
 {
   Man.scale=6;
   Man.x=15010;
   Man.y=10290;

   Dia3=createSprite(Man.x-300,(Man.y-100),10,10);
    Dia3.addImage(Dia3Img);
    Dia3.scale=1;
    Dia3.lifetime=100;
 }

 if(Man.isTouching(HouseOutTrigger2))
 {
   //gameState=1;
   Man.scale=5;
   Man.x=9110;
   Man.y=2020;
 }

 if(Man.isTouching(DungeonTriger))
 {
   villageSound.loop=false;
   villageSound.volume=0;
   DungeonSound.play();
   DungeonSound.loop=true;
   DungeonSound.volume=1;

   Man.scale=6;
   Man.x=21990;
   Man.y=11960;

   Dia4=createSprite(Man.x-300,(Man.y-100),10,10);
   Dia4.addImage(Dia4Img);
   Dia4.scale=0.6;
   Dia4.lifetime=300;
  
    
 }

  if(keycheck===HasKey)
  {

    B20.destroy();

  }

 if(Man.isTouching(DungeonOutTriger) && keycheck===HasKey)
 {

   villageSound.play();
   villageSound.volume=1;
   villageSound.loop=true;
   DungeonSound.loop=false;
   DungeonSound.volume=0;
   //gameState=1;
   Man.scale=5;
   Man.x=9050;
   Man.y=2000;

   Dia5=createSprite(Man.x-300,(Man.y-100),10,10);
   Dia5.addImage(Dia5Img);
   Dia5.scale=0.6;
   Dia5.lifetime=400;
    
 }
 



 //

/*if(gameState===0)
 {
   village.visible=true;
   
   O_Man.visible=true;
   O_Woman.visible=true;
   Man.visible=true;
   Woman.visible=true;
   Boy.visible=true;
   Girl.visible=true;
 }*/  

/* if(gameState===1)
 {
  village.visible=false;
   
  O_Man.visible=true;
  O_Woman.visible=false;
  Man.visible=false;
  Woman.visible=false;
  Boy.visible=false;
  Girl.visible=false;
 }
   */
//Colliders Function

  Man.collide(B1);
  Man.collide(B2);
  Man.collide(B3);
  Man.collide(B4);
  Man.collide(B5);
  Man.collide(B6);
  Man.collide(B7);
  Man.collide(B8);
  Man.collide(B9);
  Man.collide(B10);
  Man.collide(B11);
  Man.collide(B12);
  Man.collide(B13);
  Man.collide(B14);
  Man.collide(B15);
  Man.collide(B16);
  Man.collide(B17);
  Man.collide(B18);
  Man.collide(B19);
  Man.collide(B20);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
  //Man.collide(B10);
//

//key



if(Man.isTouching(key1))
{
  key1.destroy();
  keycheck=HasKey;
}


//


  Snake();
//  Dungeon();
  
  drawSprites();
}


//Villager Ai

function Snake()
{



var xDif=0;
var yDif=0;

var Px=Man.x;
var Py=Man.y;
xDif=Px-E1.x;
yDif=Py-E1.y;

//console.log(xDif);
//console.log(yDif);


if(xDif < 1000 && yDif <1000 && xDif > -1000 && yDif > -1000)
{
  

    if(yDif===0 && xDif>0)
    {
      E1.velocityX=5;
      E1.mirrorX(-1);
    }
    else if(yDif===0 && xDif<0)
    {
      E1.velocityX=-5;
      E1.mirrorX(1);
    }
    else if(yDif<0 && xDif===0 )
    {
      E1.velocityY=5;
    }
    else if(yDif>0 && xDif===0 )
    {
      E1.velocityY=-5;
    }
    else if(xDif>0 && yDif>0)
    {
      E1.velocityX=5;
      E1.velocityY=5;
    }
    else if(xDif<0 && yDif<0)
    {
      E1.velocityX=-5;
      E1.velocityY=-5;
    }
    else if(xDif>0 && yDif<0)
    {
      E1.velocityX=5;
      E1.velocityY=-5;
    }
    else if(xDif<0 && yDif>0)
    {
      E1.velocityX=-5;
      E1.velocityY=5;
    }
}

if(Man.isTouching(O_Man))
{
    Dia2=createSprite(Man.x-300,(Man.y-100),10,10);
    Dia2.addImage(Dia2Img);
    Dia2.scale=0.5;
    Dia2.lifetime=1;
}




 
//
}
function moveup() {
  Man.velocityY= -10; 
  Man.velocityX = 0; 
  Man.addAnimation("walk ",Man_walk);

}

function movedown() {
  Man.velocityY= +10; 
  Man.velocityX = 0; 
  Man.addAnimation("walk2 ",Man_walk);

}

function moveleft() {
  Man.velocityX = -10; 
  Man.velocityY = 0; 
  Man.mirrorX(-1);
  Man.addAnimation("walk4 ",Man_walk);
}

function moveright() {
  Man.velocityX = 10; 
  Man.velocityY = 0; 
  Man.mirrorX(1);
  Man.addAnimation("walk3 ",Man_walk);
}


function moveupleft() {
  Man.velocityY= -10; 
  Man.velocityX = -10; 
  Man.addAnimation("walk ",Man_walk);

}

function moveupright() {
  Man.velocityY= -10; 
  Man.velocityX = 10; 
  Man.addAnimation("walk ",Man_walk);

}

function movedownleft() {
  Man.velocityY= 10; 
  Man.velocityX = -10; 
  Man.addAnimation("walk ",Man_walk);

}

function movedownright() {
  Man.velocityY= 10; 
  Man.velocityX = 10; 
  Man.addAnimation("walk ",Man_walk);

}



function stop() {
  Man.velocityX = 0; 
  Man.velocityY = 0; 
}

