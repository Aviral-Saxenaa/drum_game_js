var x = document.querySelectorAll("button");

// ! FOR MOUSE EVENTS

x.forEach(function (ele, ind) {
        ele.addEventListener("click", function () {
                var eleinnerhtml = this.innerHTML;
                makesound(eleinnerhtml);
                makeanimation(eleinnerhtml);
        })
})

// var totalkeys=['w','a','s','d','j','k','l'];

// ! FOR KEYBOARD EVENTS


        document.addEventListener("keypress",function(event){
                // console.log(event);
                var key=event.key;
                makesound(key);
                makeanimation(key);
        })



function makesound(key){
        switch(key){
                case 'w':
                        var audio1 = new Audio("sounds/crash.mp3");
                        audio1.play();
                        break;
                case 'a':
                        var audio2 = new Audio("sounds/kick-bass.mp3");
                        audio2.play();
                        break;
                case 's':
                        var audio3 = new Audio("sounds/snare.mp3");
                        audio3.play();
                        break;
                case 'd':
                        var audio4 = new Audio("sounds/tom-1.mp3");
                        audio4.play();
                        break;
                case 'j':
                        var audio5 = new Audio("sounds/tom-2.mp3");
                        audio5.play();
                        break;
                case 'k':
                        var audio6 = new Audio("sounds/tom-3.mp3");
                        audio6.play();
                        break;
                case 'l':
                        var audio7 = new Audio("sounds/tom-4.mp3");
                        audio7.play();
                        break; 
        }
}

function makeanimation(key){
        var activebutton=document.querySelector(`.${key}`);
        // console.log(activebutton);
        activebutton.classList.add("pressed");
        setTimeout(function(){
                activebutton.classList.remove("pressed");
        },100);
}

