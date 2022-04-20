
const harry = document.getElementById('angel')

// const audio = document.getElementById('song')
// audio.play();

// const audioContext = new AudioContext();
// const element = document.querySelector(audio);
// const source = audioContext.createMediaElementSource(element);
// source.connect(audioContext.destination)
// audio.play();


let isjumping = false;
let gravity = 0.8;
function control_harry(e){
    if(e.keyCode == 32){
        if(!isjumping){
           isjumping = true
           jump()
        } 
    }
}

document.addEventListener('keydown', control_harry)

let position = 0;
function jump(){
    let count = 0;
    let timer = setInterval(function(){

        if(count == 15){
            clearInterval(timer)
            let downTimer = setInterval(function(){
                if(count == 0){
                    clearInterval(downTimer)
                    isjumping = false;
                }
                position -= 1;
                count--
                position = position* gravity
                console.log('down')
                angel.style.bottom = position + 'px';
            }, 20)
        }

        console.log("up")
        count ++
        position += 50; //height of jump of harry
        position = position * gravity;
        angel.style.bottom = position + 'px'; 
    }, 30)
}


setInterval(() => {
    let angel = document.getElementById('angel');
    let gameover = document.querySelector('.gameover');
    let voldemort = document.querySelector('.voldemort');

    dx = parseInt(window.getComputedStyle(angel, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(angel, null).getPropertyValue('top'))

    vx = parseInt(window.getComputedStyle(voldemort, null).getPropertyValue('left'))
    vy = parseInt(window.getComputedStyle(voldemort, null).getPropertyValue('top'))

    diffx = Math.abs(dx - vx)
    diffy = Math.abs(dy - vy)
    console.log('off')

    if(diffx < 140 && diffy < 70){
        gameover.style.visibility = 'visible'
        alert('Game Over. Your Score is ' + scoreboard)
        scoreboard = 0;
        voldemort.classList.remove('.voldemort')
    }

    else{
        scoreboard +=1;
        scoreis(scoreboard)
    }

}, 101)

setInterval(() => {
    let angel = document.getElementById('angel');
    let gameover = document.querySelector('.gameover');
    let voldemort = document.querySelector('.voldemort');

    dx = parseInt(window.getComputedStyle(angel, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(angel, null).getPropertyValue('top'))

    vx = parseInt(window.getComputedStyle(voldemort, null).getPropertyValue('left'))
    vy = parseInt(window.getComputedStyle(voldemort, null).getPropertyValue('top'))

    diffx = Math.abs(dx - vx)
    diffy = Math.abs(dy - vy)
    console.log('off')

    if(diffx < 140 && diffy < 70){
        gameover.style.visibility = 'visible'
        alert('Game Over. Your Score is ' + scoreboard)
        scoreboard = 0;
        voldemort.classList.remove('.voldemort')
    }

    else{
        scoreboard +=1;
        scoreis(scoreboard)
    }

}, 101)



let scoreboard = 0;
function scoreis(scoreboard){
    document.querySelector('.score').innerHTML = 'Your Score is ' + scoreboard;
    
}


var vAudio = document.getElementById("audio");
   var hasInit = false;
   function playMusic()
   {
      if(!hasInit)
      {
          hasInit = true;
          vAudio.play();
      }
   }



