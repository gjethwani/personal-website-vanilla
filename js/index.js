function fadeIn(element, peakOpacity) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= peakOpacity){
            clearInterval(timer);
        }
        //element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

window.onload = function() {
  var background = document.getElementById('stars');
  var container = document.getElementById('container');
  fadeIn(background, 1);
  fadeIn(container, 0.5);
}

function changeNavSelection() {
  console.log('hello');
  var selectedElement = document.getElementById(selectedElementId);
  var navItems = document.getElementById('nav-bar').children;
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove('selected-nav-item');
  }
  selectedElement.classList.add('selected-nav-item');
}

document.getElementById('contact').addEventListener('click', changeNavSelection)
//  = function() {
//   return changeNavSelection('contact');
// }
