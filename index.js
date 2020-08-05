function makeSound(key){
    var audioPath;
    switch (key) {
        case 'w':
            audioPath = "sounds/tom-1.mp3";
            break;
        case 'a':
            audioPath = "sounds/tom-2.mp3";
            break;
        case 's':
            audioPath = "sounds/tom-3.mp3";
            break;
        case 'd':
            audioPath = "sounds/tom-4.mp3";
            break;
        case 'j':
            audioPath = "sounds/crash.mp3";
            break;
        case 'k':
            audioPath = "sounds/kick-bass.mp3";
            break;
        case 'l':
            audioPath = "sounds/snare.mp3";
            break;
    }
    var audio = new Audio(audioPath);
    audio.play();
}

function buttonAnimation(key){
    current = "." + key;
    document.querySelector(current).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(current).classList.remove("pressed");
    }, 100);
}


function handleClick(){
    key = this.innerHTML;
    makeSound(key);
    buttonAnimation(key);
}

function handlePress(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}

buttonList = document.querySelectorAll(".drum");
for(var i=0; i<buttonList.length; i++){
    buttonList[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", handlePress);