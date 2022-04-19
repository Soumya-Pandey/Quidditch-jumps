
const harry = document.getElementById('angel')
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
                count --
                position = position* gravity
                console.log('down')
                angel.style.bottom = position + 'px';
            }, 30)
        }

        console.log("up")
        count ++
        position += 50;
        position = position * gravity;
        angel.style.bottom = position + 'px';
    }, 30)
}