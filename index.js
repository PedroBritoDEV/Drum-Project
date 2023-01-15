var buttons = document.querySelectorAll(".drum");


for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener("click", function (){
    var buttonPressed = this.innerHTML;
    playSound(buttonPressed);
    animation(buttonPressed);
  });
}
document.addEventListener('keydown', function (event) {
  var keypressed = event.key;
  playSound(keypressed);
  animation(keypressed);
});

function playSound(key) {
  switch (key) {

    case 'w' :
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
      
      case 'a' :
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
        
      case 's' :
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

      case 'd' :
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

      case 'j' :
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;

      case 'k' :
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;

      case 'l' :
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
      default: console.log(buttonPressed);
  };
};

function animation (currentButton) {
  var button = document.querySelector(`.${currentButton}`)
  button.classList.add('pressed')
  setTimeout(function() {
    button.classList.remove('pressed')
  },200)
} 