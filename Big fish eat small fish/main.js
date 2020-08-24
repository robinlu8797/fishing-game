/** Create a game canvas **/
 
window.onload = myGame;
enchant();
 
// Start of game code
function myGame() {

    var game = new Core(800,600);
    game.fps = 45;
 
    game.preload('Underwater.png');
    game.preload('Green24.png');
    game.preload('Yellow32.png');
    game.preload('Blue48.png');
    game.preload('Fishplayer64.png');
    game.preload('Black72.png');
    game.preload('Fish96.png');
    game.preload('Fish128.png');
    game.preload('backgroundMusic.mp3');
    game.preload('Bite.mp3');
    game.preload('GameOver.mp3');
    
    game.isStarted = false;
    
    game.TotalPoints = 0;
    
    var timerUp = {
        frameCount: 0,
        tick: function () {
            if (game.isStarted) {
                this.frameCount += 1;
            }
        }
    };
    
  
    
 
    game.onload = function () {
        
      
        game.bgm = game.assets['backgroundMusic.mp3'];
        game.bgm.play();
        game.BiteSound = game.assets['Bite.mp3'];
        game.GomeOverSound = game.assets['GameOver.mp3'];
        
       
      
        var bg = new Sprite(game.width, game.height);
        bg.image = game.assets['Underwater.png'];
        game.rootScene.addChild(bg);
        
        var Green24 = new Sprite(24,24);
        Green24.image = game.assets['Green24.png'];
        Green24.x = game.width;
        Green24.y = randomInt(0, game.height - Green24.height);
        game.rootScene.addChild(Green24);

        var Yellow32 = new Sprite(32,32);
        Yellow32.image = game.assets['Yellow32.png'];
        Yellow32.x = game.width;
        Yellow32.y = randomInt(0, game.height - Yellow32.height);
        game.rootScene.addChild(Yellow32);
        
        var Blue48 = new Sprite(48,48);
        Blue48.image = game.assets['Blue48.png'];
        Blue48.x = game.width;
        Blue48.y = randomInt(0, game.height - Blue48.height);
        game.rootScene.addChild(Blue48);
        
        var Fishplayer64 = new Sprite(64,64);
        Fishplayer64.image = game.assets['Fishplayer64.png'];
        var Fishplayer64Speed = 10;
        Fishplayer64.x = (game.width - Fishplayer64.width)/2;
        Fishplayer64.y = (game.height - Fishplayer64.height) / 2;
        game.rootScene.addChild(Fishplayer64);
        
        var Black72 = new Sprite(72,72);
        Black72.image = game.assets['Black72.png'];
        Black72.x = -5;
        Black72.y = randomInt(0, game.height - Black72.height);
        game.rootScene.addChild(Black72);
        
        var Fish96 = new Sprite(96,96);
        Fish96.image = game.assets['Fish96.png'];
        Fish96.x = game.width;
        Fish96.y = randomInt(0, game.height - Fish96.height);
        game.rootScene.addChild(Fish96);
        
        var Fish128 = new Sprite(128,128);
        Fish128.image = game.assets['Fish128.png'];
        Fish128.x = game.width;
        Fish128.y = randomInt(0, game.height - Fish128.height);
        game.rootScene.addChild(Fish128);
        
        
        
        var timeLabel = new Label("Eat smaller fishes, avoid bigger fishes.!    You can use mouse to control the fish in the middle of screen. Click the START  to start the game!");
        game.rootScene.addChild(timeLabel);
        
        game.addEventListener(Event.ENTER_FRAME, function () {
            game.isStarted = true;
            timerUp.tick();
            
            timeLabel.text = "Points: " + game.TotalPoints;
        });


    
    
    
    
    
        Black72.isGrowing = true;
        Black72.addEventListener(Event.ENTER_FRAME, function() {
        var Black72Speed = randomInt(6, 10);
        if(Black72.x > game.width) {
                Black72.y = randomInt(0, game.height - Black72.height);
                Black72.x = -5;
        } else {
          Black72.x += Black72Speed;
        }
        if(Black72.scaleX > 1.5) {
           Black72.isGrowing = false;
        } else if (Black72.scaleX < 0.5) {
           Black72.isGrowing = true;
        }
        if (Black72.isGrowing) {
           Black72.scaleX += 0.05;
        } else {
           Black72.scaleX -= 0.05;
        }
        Black72.scaleY = Black72.scaleX;
        if (Black72.intersect(Fishplayer64)) {
            game.BiteSound.play();
            game.end();
            game.bgm.stop();
            game.bgm = game.assets['GameOver.mp3'];
            game.bgm.play();
            window.alert('Your got ' + game.TotalPoints + ' points!');
          }
        });
        
        Fish96.addEventListener(Event.ENTER_FRAME, function () {
          var Fish96Speed = randomInt(5,8);
          if(Fish96.x < 0) {
                Fish96.y = randomInt(0, game.height - Fish96.height);
                Fish96.x = game.width;
          } else {
            Fish96.x -= Fish96Speed;
          }
          if (Fish96.intersect(Fishplayer64)) {
              game.BiteSound.play();
              game.end();
              game.bgm.stop();
              game.bgm = game.assets['GameOver.mp3'];
              game.bgm.play();
              window.alert('Your got ' + game.TotalPoints + ' points!');
          }
        });
        
        Fish128.addEventListener(Event.ENTER_FRAME, function () {
          var Fish128Speed = randomInt(5,8);
          if(Fish128.x < 0) {
                Fish128.y = randomInt(0, game.height - Fish128.height);
                Fish128.x = game.width;
          } else {
            Fish128.x -= Fish128Speed;
          }
          if (Fish128.intersect(Fishplayer64)) {
              game.BiteSound.play();
              game.end();
              game.bgm.stop();
              game.bgm = game.assets['GameOver.mp3'];
              game.bgm.play();
              window.alert('Your got ' + game.TotalPoints + ' points!');
          }
        });
        
        game.Green24 = Green24Move(Fishplayer64);
        game.Yellow32 = Yellow32Move(Fishplayer64);
        game.Blue48 = Blue48Move(Fishplayer64);
        
        
       
       
       
       
       
       
       
        
        var points = 0;
        
    
        
        game.keybind(87, 'up');
        game.keybind(65, 'left');
        game.keybind(83, 'down');
        game.keybind(68, 'right');
        
        
        
        
        
        
        
        
        
        
        
        
        Fishplayer64.addEventListener(Event.ENTER_FRAME, function () {
            if (game.input.right && !game.input.left) {
                Fishplayer64.x += Fishplayer64Speed;
                if (Fishplayer64.x > game.width - Fishplayer64.width) {
                    Fishplayer64.x = game.width - Fishplayer64.width;
                }
            } else if (game.input.left && !game.input.right) {
                Fishplayer64.x -= Fishplayer64Speed;
                if (Fishplayer64.x < 0 ) {
                    Fishplayer64.x = 0;
                }
            }
            
        if (game.input.down && !game.input.up) {
                Fishplayer64.y += Fishplayer64Speed;
                if (Fishplayer64.y > game.height - Fishplayer64.height) {
                    Fishplayer64.y = game.height - Fishplayer64.height;
                }
            } else if (game.input.up && !game.input.down) {
                Fishplayer64.y -= Fishplayer64Speed;
                if (Fishplayer64.y < 0 ) {
                    Fishplayer64.y = 0;
                }
            }
        });
        
        Fishplayer64.addEventListener(Event.TOUCH_MOVE, function (event) {
            Fishplayer64.x = event.x - Fishplayer64.width / 2;
            Fishplayer64.y = event.y - Fishplayer64.height / 2;
        });
        
       
        
    };
    
    
    
    

  
    game.start();
    
   
    
    function Green24Move (Fishplayer64) {
    var Green24 = new Sprite(24,24);
    Green24.image = game.assets['Green24.png'];
    Green24.x = game.width;
    Green24.y = randomInt(0, game.height - Green24.height);
    game.rootScene.addChild(Green24);
    var Green24Speed = randomInt(3,6);
    
    Green24.addEventListener(Event.ENTER_FRAME, function () {
       
    if(Green24.x < 0) {
            Green24.y = randomInt(0, game.height - Green24.height);
            Green24.x = game.width ;
        } else {
            Green24.x -= Green24Speed;
        }
    if (Green24.intersect(Fishplayer64)) {
          game.BiteSound.play();
          game.rootScene.removeChild(Green24);
          Green24PointUp();
          Fishplayer64.scaleX += 0.01;
          Fishplayer64.scaleY += 0.01;
          game.Green24 = null;
        }
    if (game.Green24 === null) {
          game.Green24 = Green24Move(Fishplayer64);
        }
    });
      return Green24;
    }
    
    
    function Yellow32Move (Fishplayer64) {
    var Yellow32 = new Sprite(32,32);
    Yellow32.image = game.assets['Yellow32.png'];
    Yellow32.x = game.width;
    Yellow32.y = randomInt(0, game.height - Yellow32.height);
    game.rootScene.addChild(Yellow32);
    var Yellow32Speed = randomInt(3,6);
    
    Yellow32.addEventListener(Event.ENTER_FRAME, function () {
       
    if(Yellow32.x < 0) {
            Yellow32.y = randomInt(0, game.height - Yellow32.height);
            Yellow32.x = game.width ;
        } else {
            Yellow32.x -= Yellow32Speed;
        }
    if (Yellow32.intersect(Fishplayer64)) {
          game.BiteSound.play();
          game.rootScene.removeChild(Yellow32);
          Yellow32PointUp();
          Fishplayer64.scaleX += 0.03;
          Fishplayer64.scaleY += 0.03;
          game.Yellow32 = null;
        }
    if (game.Yellow32 === null) {
          game.Yellow32 = Yellow32Move(Fishplayer64);
        }
    });
      return Yellow32;
    }
    
    function Blue48Move (Fishplayer64) {
    var Blue48 = new Sprite(48,48);
    Blue48.image = game.assets['Blue48.png'];
    Blue48.x = game.width;
    Blue48.y = randomInt(0, game.height - Blue48.height);
    game.rootScene.addChild(Blue48);
    var Blue48Speed = randomInt(3,6);
    
    Blue48.addEventListener(Event.ENTER_FRAME, function () {
       
    if(Blue48.x < 0) {
            Blue48.y = randomInt(0, game.height - Blue48.height);
            Blue48.x = game.width ;
        } else {
            Blue48.x -= Blue48Speed;
        }
    if (Blue48.intersect(Fishplayer64)) {
          game.BiteSound.play();
          game.rootScene.removeChild(Blue48);
          Blue48PointUp();
          Fishplayer64.scaleX += 0.06;
          Fishplayer64.scaleY += 0.06;
          game.Blue48 = null;
        }
    if (game.Blue48 === null) {
          game.Blue48 = Blue48Move(Fishplayer64);
        }
    });
      return Blue48;
    }
    
    
    
    function Green24PointUp() {
        game.TotalPoints += 1;
    }
    
    function Yellow32PointUp() {
        game.TotalPoints += 3;
    }
    
    function Blue48PointUp() {
        game.TotalPoints += 6;
    }
   

  // on collision
        //   remove game.Fish128 from the scene,
        //   set game.Fish128 = null
        //
        // to make it re-appear,
        // in the game frame event
        //
        // if (game.Fish128 === null)
        //   game.Fish128 = Fish128Move(Fishplayer64);
        //
        

        
        
}


function randomInt(low, high) {
    return low + Math.floor((high + 1 - low) * Math.random());
}
