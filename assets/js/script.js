function addBlinkingCursorStyle() {
    let style = document.createElement('style');
    style.innerHTML =
        `.blinking-cursor {
      font-weight: 100;
      font-size: 20px;
      color: #2E3D48;
      -webkit-animation: blink 1s infinite;
      -moz-animation: blink 1s infinite;
      -ms-animation: blink 1s infinite;
      -o-animation: blink 1s infinite;
      animation: blink 1s infinite;
  }
  @keyframes blink{
      0% {opacity: 1;}
      50% {opacity: 0;}
      100% {opacity: 1;}
  }
  @-webkit-keyframes blink{
      0% {opacity: 1;}
      50% {opacity: 0;}
      100% {opacity: 1;}
  }`;
    document.getElementsByTagName('head')[0].appendChild(style);
}

function typeWriter(element, speed) {
    let txt = element.innerHTML;
    let i = 0;
    element.innerHTML = '';
    let timer = setInterval(function() {
        if (i < txt.length) {
            element.innerHTML += txt.charAt(i);
            i++;
        }
        if(i >= txt.length) {
            clearInterval(timer);
            element.innerHTML += ' <span class="blinking-cursor">|</span>';
        }
    }, speed);
}

addBlinkingCursorStyle();

let elements = document.getElementsByClassName('typewriter');
Array.from(elements).forEach(element => {
    typeWriter(element, 50); // vitesse pour l'effet 'typewriter'
});

let textElement = document.getElementById('text');
typeWriter(textElement, 5);  // vitesse pour l'effet 'text'