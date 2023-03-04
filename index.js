var noOfDrums =document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var iHTML =this.innerHTML;
        player(iHTML);
        buttonAnimation(iHTML);
    })
}
document.addEventListener("keypress",function(event){
    player(event.key);
    buttonAnimation(event.key);
})


function player(key){


                switch(key){
                    case 'w':
                        var beat= new Audio('sounds/crash.mp3');
                        beat.play();
                    break;
                    case 'a':
                         beat= new Audio('sounds/kick-bass.mp3');
                        beat.play();
                    break;
                    case 's':
                         beat= new Audio('sounds/snare.mp3');
                        beat.play();
                    break;
                    case 'd':
                         beat= new Audio('sounds/tom-1.mp3');
                        beat.play();
                    break;
                    case 'j':
                         beat= new Audio('sounds/tom-2.mp3');
                        beat.play();
                    break;
                    case 'k':
                         beat= new Audio('sounds/tom-3.mp3');
                        beat.play();
                    break;
                    case 'l':
                         beat= new Audio('sounds/tom-4.mp3');
                        beat.play();
                    break;
        }
                    

}

function buttonAnimation(currentKey){
    var activeButton =document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}